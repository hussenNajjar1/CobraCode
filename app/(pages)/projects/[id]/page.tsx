"use client";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheck, FiExternalLink, FiCpu, FiGlobe, FiClock, FiZap, FiShield } from "react-icons/fi";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PROJECTS_DATA } from "../page"; // استيراد البيانات من الصفحة الرئيسية

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = params.id;

  // البحث عن المشروع بناءً على الـ ID
  const project = PROJECTS_DATA.find((p) => p.id === id);

  // إذا لم يتم العثور على المشروع
  if (!project) {
    return (
      <div className="min-h-screen bg-[#010102] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">المشروع غير موجود</h1>
        <Link href="/projects" className="text-[#CAA060] ml-4 underline">العودة للمشاريع</Link>
      </div>
    );
  }

  return (
    <main className="bg-[#010102] min-h-screen text-white pb-32 selection:bg-[#CAA060] selection:text-black">
      {/* Cinematic Header */}
      <section className="relative h-[85vh] flex items-end pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            className="w-full h-full object-cover opacity-60"
            alt={project.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010102] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#CAA060] mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
            <FiArrowLeft /> العودة للمشاريع
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#CAA060] font-black uppercase tracking-[0.4em] text-xs">Case Study / {project.category}</span>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none mt-6 mb-12 uppercase">
              {project.title.split(' ')[0]} <br /> 
              <span className="bg-gradient-to-r from-[#8A6435] via-[#CAA060] to-[#F0D08A] bg-clip-text text-transparent italic">
                {project.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <div className="grid md:grid-cols-3 gap-12 border-t border-white/10 pt-12 mt-12">
              <div>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-2">العميل</p>
                <h4 className="text-xl font-bold italic">Global Client Corp</h4>
              </div>
              <div>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-2">الخدمة</p>
                <h4 className="text-xl font-bold uppercase">{project.category}</h4>
              </div>
              <div>
                <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-2">المدة</p>
                <h4 className="text-xl font-bold">4 أشهر</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl font-black mb-10 italic uppercase">01 / التحدي</h2>
            <p className="text-zinc-400 text-xl leading-relaxed font-medium mb-10">
              واجه المشروع تحديات تقنية في معالجة البيانات الضخمة وتوفير تجربة مستخدم سلسة مع الحفاظ على أعلى معايير الأمان الرقمي. قمنا بإعادة هندسة النظام لضمان الأداء الفائق.
            </p>
            <div className="space-y-6">
              {[
                "تحسين سرعة الاستجابة بنسبة 200%",
                "تشفير البيانات من طرف إلى طرف",
                "دعم كامل لجميع المنصات"
              ].map(item => (
                <div key={item} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full border border-[#CAA060]/50 flex items-center justify-center group-hover:bg-[#CAA060] transition-all">
                    <FiCheck className="text-[#CAA060] group-hover:text-black text-xs" />
                  </div>
                  <span className="text-zinc-300 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#101114] rounded-[3rem] p-12 border border-white/5 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#CAA060]/10 blur-3xl" />
             <FiZap className="text-7xl text-[#CAA060] mb-8 animate-pulse" />
             <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">الحل التقني</h3>
             <p className="text-zinc-500 leading-relaxed mb-8 text-lg italic">
               بناء بنية تحتية سحابية متطورة تعتمد على {project.tags.join(' & ')} لضمان استقرار النظام تحت الضغط العالي.
             </p>
             <div className="flex flex-wrap gap-4">
               {project.tags.map(tag => (
                 <span key={tag} className="px-6 py-2 bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 text-zinc-400">
                   {tag}
                 </span>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center p-16 bg-[#101114] rounded-[3rem] border border-white/5 relative group hover:border-[#CAA060]/30 transition-all">
               <h4 className="text-7xl font-black text-[#CAA060] mb-4 tracking-tighter">99.9%</h4>
               <p className="text-zinc-500 font-black uppercase tracking-[0.3em] text-[10px]">نسبة الجاهزية</p>
            </div>
            <div className="text-center p-16 bg-[#101114] rounded-[3rem] border border-white/5 group hover:border-[#CAA060]/30 transition-all">
               <h4 className="text-7xl font-black text-[#CAA060] mb-4 tracking-tighter">0.5s</h4>
               <p className="text-zinc-500 font-black uppercase tracking-[0.3em] text-[10px]">وقت الاستجابة</p>
            </div>
            <div className="text-center p-16 bg-[#101114] rounded-[3rem] border border-white/5 group hover:border-[#CAA060]/30 transition-all">
               <h4 className="text-7xl font-black text-[#CAA060] mb-4 tracking-tighter">24/7</h4>
               <p className="text-zinc-500 font-black uppercase tracking-[0.3em] text-[10px]">دعم مستمر</p>
            </div>
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="py-32 px-6 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto text-center">
            <p className="text-zinc-600 font-black uppercase tracking-[0.5em] text-xs mb-8">استمر في الاستكشاف</p>
            <Link href="/projects" className="text-5xl md:text-8xl font-black hover:text-[#CAA060] transition-colors uppercase tracking-tighter">
                المشروع <span className="italic">التالي</span> →
            </Link>
        </div>
      </section>
    </main>
  );
}