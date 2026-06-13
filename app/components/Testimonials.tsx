"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FiStar, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "عبد الله الراجحي",
    role: "الرئيس التنفيذي",
    company: "تيك فلو للحلول",
    content: "كوبرا كود لم يبنوا لنا مجرد تطبيق، بل خلقوا هوية تقنية غيرت مسار شركتنا بالكامل. الدقة والابتكار في كل سطر كود هي ما يميزهم فعلاً.",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة الشمري",
    role: "مديرة المنتج",
    company: "منصة إيجاز العقارية",
    content: "كان لدينا تحدي تقني معقد في معالجة البيانات الضخمة، استطاع الفريق تطوير نظام SaaS فائق السرعة تجاوز توقعاتنا.",
    rating: 5,
  },
  {
    id: 3,
    name: "أحمد بن محمد",
    role: "مؤسس",
    company: "لوجستكس العالمية",
    content: "الاحترافية في التعامل والالتزام الصارم بالمواعيد هو ما جعل تجربتنا استثنائية. كود نظيف، آمن، وقابل للتوسع بشكل مذهل.",
    rating: 5,
  },
  {
    id: 4,
    name: "فيصل العتيبي",
    role: "مدير تقني",
    company: "نيو هورايزن",
    content: "فريق يفهم لغة الأعمال قبل لغة البرمجة. الحلول التي قدموها وفرت علينا شهوراً من العمل اليدوي عبر الأتمتة الذكية.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 للارسال يمين، -1 لليسار

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  // التبديل التلقائي كل 5 ثوانٍ
  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep]);

  // إعدادات الأنيميشن للانتقال
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-32 bg-[#010102] relative overflow-hidden">
      {/* تأثير الهالة الضوئية في الخلفية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#CAA060]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#CAA060] font-black uppercase tracking-[0.3em] text-[10px]"
          >
            آراء شركائنا
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mt-4"
          >
            نصنع قصص <span className="bg-gradient-to-r from-[#8A6435] via-[#CAA060] to-[#F0D08A] bg-clip-text text-transparent italic">النجاح</span>
          </motion.h2>
        </div>

        {/* منطقة السلايدر الأساسية */}
        <div className="relative h-[450px] md:h-[350px] w-full max-w-4xl mx-auto flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full p-8 md:p-12 rounded-[3rem] bg-[#101114] border border-white/5 shadow-2xl flex flex-col md:flex-row items-center gap-10"
            >
              {/* أيقونة الاقتباس الكبيرة خلف النص */}
              <FaQuoteRight className="absolute top-10 left-10 text-white/[0.03] text-8xl pointer-events-none" />

              {/* الصورة الرمزية */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#8A6435] to-[#F0D08A] flex items-center justify-center text-black text-3xl font-black shadow-lg shadow-[#CAA060]/20">
                  {testimonials[index].name[0]}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-black border border-white/10 p-2 rounded-full">
                  <FiStar className="text-[#CAA060] fill-current" />
                </div>
              </div>

              {/* المحتوى النصي */}
              <div className="flex-grow text-center md:text-right relative z-10">
                <div className="flex gap-1 mb-4 justify-center md:justify-start text-[#CAA060]">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <FiStar key={i} fill="currentColor" size={16} />
                  ))}
                </div>
                <p className="text-zinc-300 text-lg md:text-2xl font-medium leading-relaxed italic mb-8">
                  "{testimonials[index].content}"
                </p>
                <div>
                  <h4 className="text-white font-black text-xl">{testimonials[index].name}</h4>
                  <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mt-1">
                    {testimonials[index].role} <span className="text-[#CAA060] mx-1">@</span> {testimonials[index].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* أزرار التحكم الجانبية */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:-px-16 pointer-events-none">
            <button 
              onClick={prevStep}
              className="w-14 h-14 rounded-full border border-white/5 bg-black/50 backdrop-blur-xl flex items-center justify-center text-white hover:border-[#CAA060] hover:text-[#CAA060] transition-all pointer-events-auto active:scale-90"
            >
              <FiChevronRight size={24} />
            </button>
            <button 
              onClick={nextStep}
              className="w-14 h-14 rounded-full border border-white/5 bg-black/50 backdrop-blur-xl flex items-center justify-center text-white hover:border-[#CAA060] hover:text-[#CAA060] transition-all pointer-events-auto active:scale-90"
            >
              <FiChevronLeft size={24} />
            </button>
          </div>
        </div>

        {/* نقاط التنقل السفلية */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === index ? "w-8 bg-[#CAA060]" : "w-2 bg-white/10"
              }`}
            />
          ))}
        </div>

        {/* شعارات الشركات الخفيفة (Social Proof) */}
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-10 md:gap-20 opacity-20 grayscale hover:grayscale-0 hover:opacity-50 transition-all duration-700">
           <span className="font-black text-xl tracking-tighter">TECHFLOW</span>
           <span className="font-black text-xl tracking-tighter">EIJAZ.CO</span>
           <span className="font-black text-xl tracking-tighter">LOGISTIC</span>
           <span className="font-black text-xl tracking-tighter">URBAN TECH</span>
        </div>
      </div>
    </section>
  );
}