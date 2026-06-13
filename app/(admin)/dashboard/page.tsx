"use client";
import { motion } from "framer-motion";
import { FiLayers, FiTrendingUp, FiActivity, FiPlus } from "react-icons/fi";

export default function DashboardPage() {
  // بيانات الإحصائيات لتسهيل التعديل ومنع التكرار
  const stats = [
    { label: "المشاريع النشطة", value: "12", icon: <FiLayers />, color: "text-blue-500" },
    { label: "طلبات جديدة", value: "08", icon: <FiTrendingUp />, color: "text-green-500" },
    { label: "أداء النظام", value: "98%", icon: <FiActivity />, color: "text-[#CAA060]" },
  ];

  return (
    <div className="space-y-10">
      {/* 1. قسم الترحيب العلوي */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-black tracking-tighter text-white">
          أهلاً بك مجدداً، <span className="text-[#CAA060]">أدمن</span>
        </h1>
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mt-2 italic">
          الخميس، 12 يونيو 2024
        </p>
      </motion.div>

      {/* 2. شبكة البيانات الرئيسية (Bento Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* بطاقات الإحصائيات السريعة */}
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="md:col-span-4 bg-[#101114] border border-white/5 rounded-[2.5rem] p-8 flex justify-between items-center group hover:border-[#CAA060]/30 transition-all"
          >
            <div className="text-right">
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</p>
              <h2 className="text-4xl font-black tracking-tighter text-white">{stat.value}</h2>
            </div>
            <div className={`text-3xl ${stat.color} opacity-50 group-hover:opacity-100 transition-opacity`}>
              {stat.icon}
            </div>
          </motion.div>
        ))}

        {/* 3. الرسم البياني لنمو المشاريع */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-8 bg-[#101114] border border-white/5 rounded-[3rem] p-10 min-h-[400px] relative overflow-hidden"
        >
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-black italic text-white">مخطط نمو المشاريع</h3>
            <div className="flex gap-2">
              <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-400">أسبوعي</div>
              <div className="px-4 py-1.5 rounded-full bg-[#CAA060] text-black text-[10px] font-bold uppercase tracking-widest">مباشر</div>
            </div>
          </div>

          {/* أعمدة الرسم البياني */}
          <div className="w-full h-48 flex items-end justify-between gap-4">
            {[40, 70, 50, 90, 60, 80, 45, 100].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                className="flex-grow bg-gradient-to-t from-[#CAA060]/5 to-[#CAA060] rounded-xl opacity-60 hover:opacity-100 transition-all cursor-pointer relative group" 
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {h}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. قائمة أحدث العملاء */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-4 bg-[#101114] border border-white/5 rounded-[3rem] p-10"
        >
          <div className="flex justify-between items-center mb-8 text-right">
            <h3 className="text-xl font-black italic text-white">أحدث العملاء</h3>
            <FiPlus className="text-[#CAA060] cursor-pointer hover:rotate-90 transition-transform" />
          </div>
          
          <div className="space-y-6">
            {[
              { name: "بنك الاستثمار العالمي", time: "منذ ساعتين", initial: "ب" },
              { name: "شركة فينتك الناشئة", time: "منذ 5 ساعات", initial: "ف" },
              { name: "لوجستيات المدن", time: "منذ يوم واحد", initial: "ل" },
            ].map((client, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer" dir="rtl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-[#CAA060] group-hover:bg-[#CAA060] group-hover:text-black transition-all">
                    {client.initial}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-white group-hover:text-[#CAA060] transition-colors">{client.name}</p>
                    <p className="text-[10px] text-zinc-500 font-black uppercase tracking-tighter">{client.time}</p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-all transform rotate-180">←</button>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-10 py-4 rounded-2xl border border-[#CAA060]/20 text-[#CAA060] font-black text-[10px] uppercase tracking-widest hover:bg-[#CAA060] hover:text-black transition-all">
            عرض الكل
          </button>
        </motion.div>

      </div>
    </div>
  );
}