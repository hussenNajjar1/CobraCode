"use client";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiTarget, FiCheck } from "react-icons/fi";

const stats = [
  { label: "خبير تقني", value: "25+", icon: <FiUsers /> },
  { label: "جائزة جودة", value: "12", icon: <FiAward /> },
  { label: "نسبة الرضا", value: "99%", icon: <FiTarget /> },
];

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-32 bg-[#050505] min-h-screen text-white overflow-hidden">
      
      {/* القسم الأول: من نحن */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* المحتوى النصي */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right order-2 lg:order-1"
          >
            <span className="text-[#CAA060] font-bold tracking-widest uppercase text-xs md:text-sm border-r-2 border-[#CAA060] pr-3">
              قصتنا
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 mb-6 md:mb-8 leading-[1.1]">
              نحن نبني <span className="text-[#CAA060]">المستقبل</span> <br className="hidden md:block"/> 
              سطرًا بسطر.
            </h1>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              بدأت كوبرا كود كاستوديو برمجيات صغير يطمح لتغيير معايير الجودة في المنطقة. اليوم، نحن نقود التحول الرقمي للعديد من الشركات الكبرى عبر حلول برمجية تجمع بين الذكاء والجمالية.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "كود نظيف وقابل للتوسع", 
                "تركيز فائق على UX", 
                "دعم فني 24/7",
                "أحدث التقنيات العالمية"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
                  <FiCheck className="text-[#CAA060] text-xl flex-shrink-0" /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* العنصر الرسومي (اللوجو الكبير) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            {/* توهج خلفي */}
            <div className="aspect-square bg-gradient-to-br from-[#CAA060]/20 to-transparent rounded-[2rem] md:rounded-[3rem] absolute -inset-4 blur-2xl opacity-50" />
            
            {/* الصندوق الرئيسي */}
            <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] bg-[#0A0A0A] border border-white/5 flex items-center justify-center overflow-hidden">
              <motion.h2 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-[18vw] lg:text-[10rem] font-black text-white/5 select-none tracking-tighter"
              >
                COBRA
              </motion.h2>
              
              {/* لمسة فنية: مربع ذهبي صغير */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#CAA060]/10 border border-[#CAA060]/20 rounded-2xl rotate-45 backdrop-blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* قسم الإحصائيات - متجاوب */}
      <section className="bg-[#0A0A0A] py-16 md:py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="text-[#CAA060] text-3xl md:text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:text-[#CAA060] transition-colors duration-500">
                  {stat.value}
                </h3>
                <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  
    </main>
  );
}