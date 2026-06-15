"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GiCobra } from "react-icons/gi";

export default function Preloader() {
  const [count, setCount] = useState(0);

  // أنيميشن العداد من 0 إلى 100 خلال 1.5 ثانية
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100vh" }} // يرتفع للأعلى عند الانتهاء
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] bg-[#010102] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* هالة ضوئية خلفية */}
      <div className="absolute w-[400px] h-[400px] bg-[#CAA060]/10 blur-[120px] rounded-full" />

      <div className="relative flex flex-col items-center">
        {/* أيقونة الكوبرا المتحركة */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <motion.div 
            animate={{ 
                filter: ["drop-shadow(0 0 0px #CAA060)", "drop-shadow(0 0 20px #CAA060)", "drop-shadow(0 0 0px #CAA060)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 bg-gradient-to-br from-[#8A6435] via-[#CAA060] to-[#F0D08A] rounded-[2rem] flex items-center justify-center border-4 border-[#010102] shadow-2xl"
          >
            <GiCobra size={55} className="text-black" />
          </motion.div>
        </motion.div>

        {/* اسم الشركة */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white font-black text-2xl tracking-[0.3em] uppercase mb-10"
        >
          Cobra <span className="text-[#CAA060]">Code</span>
        </motion.h2>

        {/* العداد الرقمي */}
        <div className="flex flex-col items-center gap-4">
            <span className="text-white font-black text-6xl italic tabular-nums">
                {count}%
            </span>
            
            {/* شريط التقدم النحيف جداً (Luxury Style) */}
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: `${count}%` }}
                    className="absolute inset-0 bg-[#CAA060]"
                />
            </div>
        </div>
      </div>

      {/* تفاصيل تقنية في الزاوية لإضفاء طابع البرمجة */}
      <div className="absolute bottom-10 left-10 overflow-hidden hidden md:block">
        <motion.p 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="text-zinc-700 text-[10px] font-mono tracking-widest"
        >
          INITIALIZING_CORE_SYSTEMS... OK <br/>
          ESTABLISHING_SECURE_CONNECTION... OK <br/>
          LOADING_LUXURY_INTERFACE... 100%
        </motion.p>
      </div>

      {/* رقم الإصدار */}
      <div className="absolute top-10 right-10 opacity-20">
        <span className="text-white font-bold text-xs">v2.0.4</span>
      </div>
    </motion.div>
  );
}