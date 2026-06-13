import { Code2, Cpu, Globe, Layout, Palette, Zap } from "lucide-react";

const services = [
  { title: "تطوير الويب", desc: "مواقع فائقة السرعة باستخدام Next.js", icon: <Globe className="w-6 h-6" />, size: "col-span-2" },
  { title: "أنظمة SaaS", desc: "بنية تحتية سحابية قابلة للتوسع", icon: <Cpu className="w-6 h-6" />, size: "col-span-1" },
  { title: "الذكاء الاصطناعي", desc: "دمج نماذج AI متطورة في أعمالك", icon: <Zap className="w-6 h-6" />, size: "col-span-1" },
  { title: "تصميم UI/UX", desc: "واجهات تركز على تجربة المستخدم", icon: <Layout className="w-6 h-6" />, size: "col-span-2" },
];

export default function Services() {
  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#CAA060] font-bold tracking-widest uppercase text-sm mb-4">خبراتنا</h2>
            <h3 className="text-5xl font-black text-white">حلول تقنية مصممة <br/> للمستقبل</h3>
          </div>
          <p className="text-zinc-500 max-w-sm">نحن لا نكتب الكود فقط، نحن نبني أدوات تساعد عملك على التفوق والنمو في العصر الرقمي.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={i} className={`${s.size} group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-[#CAA060]/30 transition-all duration-500 overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CAA060]/5 blur-3xl rounded-full group-hover:bg-[#CAA060]/10 transition-colors" />
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 flex items-center justify-center text-[#CAA060] mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {s.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-4">{s.title}</h4>
              <p className="text-zinc-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}