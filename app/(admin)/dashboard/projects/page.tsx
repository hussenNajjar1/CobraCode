"use client";
import { motion } from "framer-motion";
import { 
  FiPlus, FiEdit2, FiTrash2, FiEye, 
  FiCheckCircle, FiXCircle, FiImage, FiExternalLink 
} from "react-icons/fi";
import Link from "next/link";

// بيانات المشاريع المنشورة حالياً في الموقع
const publishedProjects = [
  { 
    id: 1, 
    title: "منصة Fintech العالمية", 
    category: "SaaS", 
    date: "2024/05/12", 
    status: "منشور", 
    views: "1.2k",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=2070"
  },
  { 
    id: 2, 
    title: "تطبيق لوجستيات ذكي", 
    category: "تطبيق جوال", 
    date: "2024/04/20", 
    status: "منشور", 
    views: "850",
    image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070"
  },
  { 
    id: 3, 
    title: "نظام تحليل AI", 
    category: "ذكاء اصطناعي", 
    date: "2024/06/01", 
    status: "مسودة", 
    views: "0",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070"
  },
];

export default function ManagedProjectsPage() {
  return (
    <div className="space-y-10" dir="rtl">
      
      {/* الرأس - Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">إدارة <span className="text-[#CAA060]">المعرض الرقمي</span></h1>
          <p className="text-zinc-500 font-bold text-xs mt-2 uppercase tracking-widest italic">التحكم في المشاريع المعروضة للجمهور</p>
        </div>
        
        <button className="bg-[#CAA060] text-black px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-[#D8B26E] transition-all shadow-xl shadow-[#CAA060]/20 active:scale-95">
          <FiPlus className="text-lg" /> إضافة مشروع جديد للموقع
        </button>
      </div>

      {/* إحصائيات سريعة للمعرض */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "إجمالي المشاريع", value: "12" },
          { label: "منشور الآن", value: "09" },
          { label: "قيد المراجعة", value: "03" },
          { label: "إجمالي المشاهدات", value: "4.5k" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#101114] border border-white/5 p-6 rounded-[2rem] text-center">
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-[#CAA060]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* قائمة المشاريع المنشورة */}
      <div className="grid gap-6">
        {publishedProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-[#101114] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#CAA060]/40 transition-all flex flex-col lg:flex-row items-center"
          >
            {/* مصغر الصورة */}
            <div className="w-full lg:w-64 h-48 lg:h-auto relative overflow-hidden">
              <img 
                src={project.image} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#101114] via-transparent to-transparent hidden lg:block" />
            </div>

            {/* تفاصيل المشروع */}
            <div className="flex-grow p-8 flex flex-col md:flex-row justify-between items-center w-full gap-8">
              <div className="text-center md:text-right">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                  <span className="text-[#CAA060] font-black text-[10px] uppercase tracking-widest">{project.category}</span>
                  {project.status === "منشور" ? 
                    <FiCheckCircle className="text-green-500 text-sm" title="منشور حالياً" /> : 
                    <FiXCircle className="text-zinc-600 text-sm" title="مسودة" />
                  }
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-[#CAA060] transition-colors">{project.title}</h3>
                <p className="text-zinc-500 text-xs font-bold mt-2 italic">تاريخ النشر: {project.date}</p>
              </div>

              {/* إحصائيات الأداء للمشروع */}
              <div className="flex gap-8 border-x border-white/5 px-8 hidden xl:flex">
                <div className="text-center">
                  <p className="text-[10px] text-zinc-600 font-black uppercase mb-1">المشاهدات</p>
                  <p className="font-bold text-white">{project.views}</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-zinc-600 font-black uppercase mb-1">النقرات</p>
                  <p className="font-bold text-white">124</p>
                </div>
              </div>

              {/* أزرار التحكم */}
              <div className="flex gap-3">
                <Link href={`/projects/${project.id}`} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all" title="معاينة في الموقع">
                  <FiExternalLink />
                </Link>
                <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-[#CAA060] hover:text-black transition-all" title="تعديل">
                  <FiEdit2 />
                </button>
                <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-all" title="حذف">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* زر عرض المزيد أو الأرشفة */}
      <div className="text-center pt-10">
        <button className="text-zinc-600 font-black uppercase tracking-[0.3em] text-[10px] hover:text-[#CAA060] transition-colors">
          عرض الأرشيف الكامل للمشاريع
        </button>
      </div>
    </div>
  );
}