"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFigma } from "react-icons/si";

const allProjects = [
  { title: "منصة Fintech العالمية", cat: "SaaS", tech: [<SiNextdotjs />, <SiTailwindcss />], size: "md:col-span-2" },
  { title: "تطبيق لوجستيات", cat: "Mobile", tech: [<SiReact />], size: "md:col-span-1" },
  { title: "نظام تحليل AI", cat: "AI", tech: [<SiFigma />], size: "md:col-span-1" },
  { title: "متجر إلكتروني فاخر", cat: "E-Commerce", tech: [<SiNextdotjs />, <SiReact />], size: "md:col-span-2" },
];

export default function PortfolioPage() {
  return (
    <main className="pt-32 bg-[#050505] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">مشاريعنا <span className="text-[#CAA060]">المختارة</span></h1>
          <p className="text-zinc-500 max-w-2xl mx-auto">نحن لا نصنع المواقع فقط، بل نصنع تجارب رقمية تترك أثراً.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {allProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={`${p.size} group relative h-[450px] rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#CAA060]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-8 left-8 flex gap-3 text-zinc-500 text-xl">
                {p.tech.map((t, idx) => <span key={idx}>{t}</span>)}
              </div>

              <div className="absolute bottom-10 right-10 left-10">
                <span className="text-[#CAA060] font-bold text-xs uppercase tracking-widest mb-3 block">{p.cat}</span>
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-black text-white max-w-[70%] leading-tight">{p.title}</h3>
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[#CAA060] transition-colors cursor-pointer">
                    <FiArrowUpRight className="text-2xl" />
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