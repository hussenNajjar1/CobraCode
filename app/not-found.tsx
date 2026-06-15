"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiHome, FiArrowLeft, FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] bg-[#010102] flex items-center justify-center px-4 md:px-6 overflow-hidden relative selection:bg-[#CAA060] selection:text-black" dir="rtl">
      
      {/* خلفية تقنية (Grid & Glow) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#CAA0601a_1px,transparent_1px),linear-gradient(to_bottom,#CAA0601a_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>
      
      {/* هالات ضوئية ذهبية ديناميكية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#CAA060]/10 blur-[80px] md:blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl w-full text-center relative z-10 py-12">
        
        {/* رقم 404 بتصميم ضخم */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-4 md:mb-0"
        >
          <h1 className="text-[35vw] md:text-[20rem] font-black leading-none tracking-tighter text-white/[0.03] select-none">
            404
          </h1>
          
          {/* نص 404 الملون المتداخل */}
          <motion.div 
            animate={{ 
              x: [0, -1, 1, 0],
              filter: ["none", "contrast(1.2)", "none"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
             <span className="text-7xl sm:text-8xl md:text-9xl font-black bg-gradient-to-b from-[#F0D08A] via-[#CAA060] to-[#8A6435] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(202,160,96,0.3)]">
               404
             </span>
          </motion.div>
        </motion.div>

        {/* محتوى الرسالة */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative -mt-6 sm:-mt-10 md:-mt-20 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 mb-4 md:mb-6">
            <FiAlertCircle className="text-red-500 text-sm md:text-base" />
            <span className="text-red-500 font-bold uppercase tracking-widest text-[9px] md:text-xs">
              خطأ في المسار الرقمي
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-tight">
            يبدو أنك ضللت <span className="text-[#CAA060]">الطريق</span>
          </h2>
          
          <p className="text-zinc-500 text-sm sm:text-base md:text-xl max-w-lg mx-auto leading-relaxed mb-8 md:mb-12 font-light">
            الصفحة التي تبحث عنها غير موجودة، ربما تم نقلها إلى فضاء رقمي آخر أو تم حذفها نهائياً.
          </p>

          {/* أزرار العودة - متجاوبة */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
            <Link href="/" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto bg-[#CAA060] text-black px-8 md:px-10 py-3.5 md:py-4 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-3 shadow-xl shadow-[#CAA060]/10 transition-all"
              >
                <FiHome className="text-lg" />
                العودة للرئيسية
              </motion.button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 rounded-full border border-white/10 text-white font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                تبليغ عن مشكلة
                <FiArrowLeft className="text-lg" />
              </button>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* تفاصيل تقنية في الزوايا - تظهر فقط في الشاشات الكبيرة */}
      <div className="absolute bottom-10 right-10 hidden lg:block pointer-events-none">
        <p className="text-zinc-800 font-black text-[10px] uppercase tracking-[0.5em] rotate-90 origin-right">
          System Error // 0x404_NotFound
        </p>
      </div>

      <div className="absolute top-10 left-10 hidden lg:block pointer-events-none">
        <div className="flex gap-2">
          <div className="w-1 h-1 rounded-full bg-[#CAA060] animate-ping" />
          <p className="text-[#CAA060]/40 font-bold text-[10px] uppercase tracking-widest">
            Scanning for valid routes...
          </p>
        </div>
      </div>

    </main>
  );
}