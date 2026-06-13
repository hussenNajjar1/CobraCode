"use client";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiZap, FiCode, FiCpu } from "react-icons/fi";
import Link from "next/link";

// بيانات المشاريع - يفضل وضعها في ملف منفصل لاحقاً
export const PROJECTS_DATA = [
  {
    id: "fintech-platform",
    title: "منصة Fintech العالمية",
    category: "SaaS / Fintech",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=2070",
    tags: ["Next.js", "AI", "Cloud"],
    size: "md:col-span-2"
  },
  {
    id: "logistics-app",
    title: "تطبيق لوجستيات ذكي",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070",
    tags: ["React Native", "Mapbox"],
    size: "md:col-span-1"
  },
  {
    id: "luxury-ecommerce",
    title: "متجر إلكتروني فاخر",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    tags: ["Shopify", "Tailwind"],
    size: "md:col-span-1"
  },
  {
    id: "ai-dashboard",
    title: "لوحة تحكم ذكية",
    category: "Enterprise AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070",
    tags: ["Python", "React"],
    size: "md:col-span-2"
  }
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#010102] min-h-screen pt-32 pb-20 text-white selection:bg-[#CAA060] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#CAA060] font-black uppercase tracking-[0.4em] text-xs"
          >
            معرض الأعمال
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-black tracking-tighter mt-4 leading-none"
          >
            نحول الأفكار إلى <br /> <span className="bg-gradient-to-r from-[#8A6435] via-[#CAA060] to-[#F0D08A] bg-clip-text text-transparent italic">إرث رقمي</span>
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, i) => (
            <Link key={project.id} href={`/projects/${project.id}`} className={project.size}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 bg-[#101114]"
              >
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010102] via-transparent to-transparent" />
                </div>

                <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-12 h-12 bg-[#CAA060] rounded-full flex items-center justify-center text-black shadow-lg shadow-[#CAA060]/20">
                      <FiArrowUpRight className="text-2xl" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[#CAA060] font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-4xl font-black group-hover:text-[#CAA060] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}