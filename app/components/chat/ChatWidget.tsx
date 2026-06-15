"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiUser } from "react-icons/fi";
import { GiCobra } from "react-icons/gi";

// بيانات الأسئلة المقترحة والردود الآلية
const chatbotData = [
  {
    question: "ما هي خدماتكم الأساسية؟",
    answer: "نحن في كوبرا كود نتخصص في بناء منصات الـ SaaS المعقدة، تطبيقات الويب فائقة السرعة باستخدام Next.js، وتطوير حلول الذكاء الاصطناعي المخصصة للشركات."
  },
  {
    question: "كيف أبدأ مشروعي معكم؟",
    answer: "الأمر بسيط! يمكنك الضغط على زر 'ابدأ مشروعك' في القائمة العلوية، أو تزويدنا ببريدك هنا وسيتواصل معك مستشارك التقني خلال 24 ساعة."
  },
  {
    question: "ما هي تكلفة المشاريع لديكم؟",
    answer: "مشاريعنا تبدأ من 500$ لصفحات الهبوط البسيطة وتصل إلى 5000$+ للأنظمة المعقدة. السعر يعتمد على حجم المتطلبات التقنية."
  },
  {
    question: "هل تقدمون دعماً فنياً بعد التسليم؟",
    answer: "بكل تأكيد. جميع مشاريعنا تشمل فترة ضمان ودعم فني مجاني، مع خيارات لعقود صيانة شهرية لضمان استقرار نظامك."
  }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; content: string }[]>([
    { role: "bot", content: "مرحباً بك في كوبرا كود! أنا مساعدك الذكي، كيف يمكنني مساعدتك اليوم؟" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // سكرول تلقائي لآخر رسالة
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSuggestionClick = (q: string, a: string) => {
    // إضافة سؤال المستخدم
    setMessages(prev => [...prev, { role: "user", content: q }]);
    setIsTyping(true);

    // محاكاة تفكير الرد بعد ثانية واحدة
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: "bot", content: a }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-24 lg:bottom-10 left-6 z-[999] flex flex-col items-end">
      
      {/* نافذة الشات */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originY: "bottom" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[350px] md:w-[400px] h-[500px] bg-[#101114] border border-white/10 rounded-[2.5rem] shadow-2xl mb-6 flex flex-col overflow-hidden backdrop-blur-xl"
            dir="rtl"
          >
            {/* Header */}
            <div className="bg-[#CAA060] p-6 flex justify-between items-center text-black">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#CAA060]">
                  <GiCobra size={24} />
                </div>
                <div>
                  <h4 className="font-black text-sm">مساعد كوبرا</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-900 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Online Now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <FiX size={24} />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-white/5 text-zinc-300 rounded-bl-none' 
                    : 'bg-[#CAA060]/10 text-[#CAA060] border border-[#CAA060]/20 rounded-br-none'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-end">
                  <div className="bg-[#CAA060]/10 p-4 rounded-3xl rounded-br-none">
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-[#CAA060] rounded-full animate-bounce" />
                      <span className="w-1 h-1 bg-[#CAA060] rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1 h-1 bg-[#CAA060] rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions Footer */}
            <div className="p-4 bg-black/40 border-t border-white/5">
               <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3 mr-2">أسئلة قد تهمك:</p>
               <div className="flex flex-wrap gap-2">
                  {chatbotData.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSuggestionClick(item.question, item.answer)}
                      className="text-[11px] font-bold bg-white/5 border border-white/10 hover:border-[#CAA060]/50 hover:text-[#CAA060] px-3 py-2 rounded-xl transition-all text-right"
                    >
                      {item.question}
                    </button>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* زر فتح الشات */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#CAA060] rounded-full flex items-center justify-center text-black shadow-2xl shadow-[#CAA060]/20 relative z-[1000] border-4 border-[#010102]"
      >
        {isOpen ? <FiX size={28} /> : <FiMessageSquare size={28} />}
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#010102]" />
        )}
      </motion.button>
    </div>
  );
}