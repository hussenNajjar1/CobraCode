"use client";
import { motion } from "framer-motion";
import { FiMail, FiTrash2, FiEye, FiSearch, FiFilter, FiCheckCircle, FiClock } from "react-icons/fi";

const messages = [
  { id: 1, sender: "خالد بن محمد", email: "khaled@example.com", service: "تطوير SaaS", date: "منذ ساعتين", status: "جديد", content: "أرغب في بناء منصة عقارية متطورة..." },
  { id: 2, sender: "سارة أحمد", email: "sara@tech.sa", service: "تطبيق جوال", date: "منذ 5 ساعات", status: "تم الرد", content: "نحن شركة ناشئة ونبحث عن تطبيق برؤية..." },
  { id: 3, sender: "شركة الحلول الذكية", email: "info@smart.com", service: "استشارة AI", date: "أمس", status: "قيد المراجعة", content: "نريد دمج نماذج GPT في نظامنا الداخلي..." },
];

export default function MessagesPage() {
  return (
    <div className="space-y-10" dir="rtl">
      {/* الرأس - Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter">بريد <span className="text-[#CAA060]">الطلبات</span></h1>
          <p className="text-zinc-500 font-bold text-xs mt-2 uppercase tracking-widest">إدارة رسائل العملاء والشركاء</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input type="text" placeholder="بحث في الرسائل..." className="bg-[#101114] border border-white/5 rounded-full py-2 pr-10 pl-4 text-xs outline-none focus:border-[#CAA060]/30" />
          </div>
          <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-zinc-400 hover:text-[#CAA060] transition-all">
            <FiFilter />
          </button>
        </div>
      </div>

      {/* قائمة الرسائل */}
      <div className="grid gap-4">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-[#101114] border border-white/5 p-6 rounded-[2rem] hover:border-[#CAA060]/30 transition-all flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl ${msg.status === 'جديد' ? 'bg-[#CAA060] text-black shadow-lg shadow-[#CAA060]/20' : 'bg-white/5 text-zinc-500'}`}>
                <FiMail />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-[#CAA060] transition-colors">{msg.sender}</h3>
                <p className="text-xs text-zinc-500 font-medium">{msg.email}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start flex-grow px-6">
              <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-400">
                {msg.service}
              </span>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <FiClock className="text-[#CAA060]" /> {msg.date}
              </div>
              <div className={`text-[10px] font-black px-3 py-1 rounded-lg ${msg.status === 'جديد' ? 'text-green-500 bg-green-500/10' : 'text-blue-500 bg-blue-500/10'}`}>
                {msg.status}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#CAA060] hover:text-black transition-all">
                <FiEye />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-all">
                <FiTrash2 />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}