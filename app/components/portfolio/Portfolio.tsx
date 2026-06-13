"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFigma } from "react-icons/si";

const allProjects = [
  { 
    title: "منصة Fintech العالمية", 
    cat: "SaaS", 
    tech: [<SiNextdotjs />, <SiTailwindcss />], 
    size: "md:col-span-2",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=2070" // صورة لوحة بيانات مالية
  },
  { 
    title: "تطبيق لوجستيات", 
    cat: "Mobile", 
    tech: [<SiReact />], 
    size: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070" // صورة تتبع شحنات
  },
  { 
    title: "نظام تحليل AI", 
    cat: "AI", 
    tech: [<SiFigma />], 
    size: "md:col-span-1",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070" // صورة ذكاء اصطناعي
  },
  { 
    title: "متجر إلكتروني فاخر", 
    cat: "E-Commerce", 
    tech: [<SiNextdotjs />, <SiReact />], 
    size: "md:col-span-2",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" // صورة متجر ملابس فاخر
  },
];

export default function PortfolioPage() {
  return (
    <main className="pt-32 bg-[#050505] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-6"
          >
            مشاريعنا <span className="text-[#CAA060]">المختارة</span>
          </motion.h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            نحن لا نصنع المواقع فقط، بل نصنع تجارب رقمية تترك أثراً وتدفع عجلة النمو.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {allProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${p.size} group relative h-[500px] rounded-[3rem] bg-[#0A0A0A] border border-white/5 overflow-hidden shadow-2xl`}
            >
              {/* صورة الخلفية مع تأثير Grayscale و Hover Zoom */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                {/* تدرج لوني لجعل النص واضحاً */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="absolute top-8 left-8 flex gap-3 text-white/70 text-2xl z-10">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10">
                    {t}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-10 right-10 left-10 z-10">
                <span className="text-[#CAA060] font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
                  {p.cat}
                </span>
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl md:text-4xl font-black text-white max-w-[80%] leading-tight group-hover:text-[#CAA060] transition-colors">
                    {p.title}
                  </h3>
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#CAA060] group-hover:scale-110 transition-all cursor-pointer shadow-lg">
                    <FiArrowUpRight className="text-3xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}