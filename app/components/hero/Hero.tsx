"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* تأثيرات الإضاءة الخلفية */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#CAA060]/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#8A6435]/10 rounded-full blur-[100px]" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CAA060] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CAA060]"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-[#CAA060]">
COBRACODE</span>
      </div>

      <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight text-white">
        نحول الأفكار إلى <br />
        <span className="bg-gradient-to-r from-[#8A6435] via-[#F0D08A] to-[#8A6435] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
          واقع رقمي فاخر
        </span>
      </h1>

      <p className="mt-8 text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
        استوديو متخصص في بناء المنتجات البرمجية عالية الجودة، من أنظمة الـ SaaS المعقدة إلى تجارب الويب السينمائية.
      </p>

      <div className="flex flex-wrap gap-6 mt-12">
        <button className="group relative px-8 py-4 bg-[#CAA060] rounded-full font-bold text-black overflow-hidden transition-all">
          <span className="relative z-10">ابدأ رحلتك معنا</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
        <button className="px-8 py-4 rounded-full border border-white/10 hover:border-[#CAA060]/50 hover:bg-white/5 transition-all font-bold text-white">
          عرض المشاريع
        </button>
      </div>
    </motion.div>
  </div>
</section>
  );
}