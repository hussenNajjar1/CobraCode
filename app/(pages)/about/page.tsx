// "use client";
// import { motion } from "framer-motion";
// import { FiUsers, FiAward, FiTarget, FiCheck } from "react-icons/fi";

// const stats = [
//   { label: "خبير تقني", value: "25+", icon: <FiUsers /> },
//   { label: "جائزة جودة", value: "12", icon: <FiAward /> },
//   { label: "نسبة الرضا", value: "99%", icon: <FiTarget /> },
// ];

// export default function AboutPage() {
//   return (
//     <main className="pt-24 md:pt-32 bg-[#050505] min-h-screen text-white overflow-hidden">
      
//       {/* القسم الأول: من نحن */}
//       <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* المحتوى النصي */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-right order-2 lg:order-1"
//           >
//             <span className="text-[#CAA060] font-bold tracking-widest uppercase text-xs md:text-sm border-r-2 border-[#CAA060] pr-3">
//               قصتنا
//             </span>
            
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 mb-6 md:mb-8 leading-[1.1]">
//               نحن نبني <span className="text-[#CAA060]">المستقبل</span> <br className="hidden md:block"/> 
//               سطرًا بسطر.
//             </h1>
            
//             <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
//               بدأت كوبرا كود كاستوديو برمجيات صغير يطمح لتغيير معايير الجودة في المنطقة. اليوم، نحن نقود التحول الرقمي للعديد من الشركات الكبرى عبر حلول برمجية تجمع بين الذكاء والجمالية.
//             </p>
            
//             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[
//                 "كود نظيف وقابل للتوسع", 
//                 "تركيز فائق على UX", 
//                 "دعم فني 24/7",
//                 "أحدث التقنيات العالمية"
//               ].map((item) => (
//                 <li key={item} className="flex items-center gap-3 text-zinc-300 text-sm md:text-base">
//                   <FiCheck className="text-[#CAA060] text-xl flex-shrink-0" /> 
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* العنصر الرسومي (اللوجو الكبير) */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="relative order-1 lg:order-2"
//           >
//             {/* توهج خلفي */}
//             <div className="aspect-square bg-gradient-to-br from-[#CAA060]/20 to-transparent rounded-[2rem] md:rounded-[3rem] absolute -inset-4 blur-2xl opacity-50" />
            
//             {/* الصندوق الرئيسي */}
//             <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] bg-[#0A0A0A] border border-white/5 flex items-center justify-center overflow-hidden">
//               <motion.h2 
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                 className="text-[18vw] lg:text-[10rem] font-black text-white/5 select-none tracking-tighter"
//               >
//                 COBRA
//               </motion.h2>
              
//               {/* لمسة فنية: مربع ذهبي صغير */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#CAA060]/10 border border-[#CAA060]/20 rounded-2xl rotate-45 backdrop-blur-3xl" />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* قسم الإحصائيات - متجاوب */}
//       <section className="bg-[#0A0A0A] py-16 md:py-24 border-y border-white/5">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
//             {stats.map((stat, i) => (
//               <motion.div 
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center group"
//               >
//                 <div className="text-[#CAA060] text-3xl md:text-4xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-500">
//                   {stat.icon}
//                 </div>
//                 <h3 className="text-4xl md:text-5xl font-black mb-2 text-white group-hover:text-[#CAA060] transition-colors duration-500">
//                   {stat.value}
//                 </h3>
//                 <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
//                   {stat.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

  
//     </main>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiTarget, FiCheck, FiCode, FiActivity } from "react-icons/fi";
import Image from "next/image";

const stats = [
  { label: "خبير تقني", value: "25+", icon: <FiUsers /> },
  { label: "جائزة جودة", value: "12", icon: <FiAward /> },
  { label: "نسبة الرضا", value: "99%", icon: <FiTarget /> },
];

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-40 bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-[#CAA060] selection:text-black">
      
      {/* القسم الأول: قصة النجاح والبطولة */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* الجانب النصي */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-right order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CAA060]/10 border border-[#CAA060]/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CAA060] animate-pulse" />
              <span className="text-[#CAA060] font-bold tracking-widest uppercase text-[10px] md:text-xs">
               Cobra Code
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[1.4] tracking-tight space-y-4">
              نحن نبني <span className="bg-gradient-to-r from-[#8A6435] via-[#CAA060]  to-[#F0D08A] bg-clip-text text-transparent italic  p-4">المستقبل</span> <br className="hidden md:block"/> 
              سطرًا بسطر.
            </h1>
            
            <p className="text-zinc-400 text-base md:text-xl leading-relaxed mb-10 max-w-xl font-light">
              بدأت كوبرا كود كفكرة طموحة لتحويل المشكلات التقنية المعقدة إلى تجارب رقمية بسيطة وجميلة. نحن لا نكتفي بكتابة الكود، بل نصمم الهوية التقنية التي تدفع عملك نحو القمة.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { title: "كود نظيف وسهل الصيانة", icon: <FiCode /> },
                { title: "أداء فائق السرعة", icon: <FiActivity /> },
                { title: "دعم فني متميز 24/7", icon: <FiCheck /> },
                { title: "أحدث التقنيات العالمية", icon: <FiAward /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-200">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#CAA060] border border-white/10">
                    {item.icon}
                  </div>
                  <span className="font-bold text-sm md:text-base">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* الجانب البصري (صورة احترافية) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2 group"
          >
            {/* توهج خلفي */}
            <div className="aspect-square bg-gradient-to-br from-[#CAA060]/30 to-transparent rounded-[3rem] absolute -inset-4 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            
            {/* حاوية الصورة */}
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-square rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070" 
                alt="Professional Development"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              {/* طبقة حماية زجاجية فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
              
              {/* بطاقة عائمة فوق الصورة */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 p-6 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/5 flex items-center justify-between"
              >
                <div className="text-right">
                  <p className="text-[#CAA060] font-black text-[10px] uppercase tracking-widest mb-1">بيئة التطوير</p>
                  <p className="text-white text-sm font-bold tracking-tight">نستخدم أحدث التقنيات</p>
                </div>
                <div className="flex -space-x-3 rtl:space-x-reverse">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                      {i === 1 ? 'Next' : i === 2 ? 'Node' : 'AI'}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* قسم الإحصائيات المطور */}
      <section className="bg-[#0A0A0A] py-20 md:py-32 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group p-8 rounded-3xl hover:bg-white/[0.02] transition-all duration-500"
              >
                <div className="text-[#CAA060] text-3xl md:text-5xl mb-6 flex justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {stat.icon}
                </div>
                <h3 className="text-5xl md:text-7xl font-black mb-3 text-white tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* لمسة فنية سفلية */}
      <section className="py-24 text-center opacity-10">
        <h2 className="text-[12vw] font-black text-white/5 select-none tracking-tighter uppercase">
          Digital Excellence
        </h2>
      </section>
    </main>
  );
}