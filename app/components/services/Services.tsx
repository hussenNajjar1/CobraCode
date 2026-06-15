import { Cpu, Globe, Layout, Zap } from "lucide-react";

const services = [
  {
    title: "تطوير الويب",
    desc: "مواقع فائقة السرعة باستخدام Next.js",
    icon: <Globe className="w-6 h-6" />,
    size: "md:col-span-2",
  },
  {
    title: "أنظمة SaaS",
    desc: "بنية تحتية سحابية قابلة للتوسع",
    icon: <Cpu className="w-6 h-6" />,
    size: "md:col-span-1",
  },
  {
    title: "الذكاء الاصطناعي",
    desc: "دمج نماذج AI متطورة في أعمالك",
    icon: <Zap className="w-6 h-6" />,
    size: "md:col-span-1",
  },
  {
    title: "تصميم UI/UX",
    desc: "واجهات تركز على تجربة المستخدم",
    icon: <Layout className="w-6 h-6" />,
    size: "md:col-span-2",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-10 mb-12 md:mb-20">
          
          <div className="max-w-2xl">
            <h2 className="text-[#CAA060] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 md:mb-4">
              خبراتنا
            </h2>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              حلول تقنية مصممة
              <br />
              للمستقبل
            </h3>
          </div>

          <p className="text-zinc-500 text-sm sm:text-base max-w-md leading-relaxed">
            نحن لا نكتب الكود فقط، نحن نبني أدوات تساعد عملك على التفوق
            والنمو في العصر الرقمي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className={`
                ${s.size}
                group relative
                p-6 sm:p-8
                rounded-[1.5rem] md:rounded-[2rem]
                bg-[#0A0A0A]
                border border-white/5
                hover:border-[#CAA060]/30
                transition-all duration-500
                overflow-hidden
              `}
            >
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#CAA060]/5 blur-3xl rounded-full group-hover:bg-[#CAA060]/10 transition-colors" />

              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 flex items-center justify-center text-[#CAA060] mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {s.icon}
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                {s.title}
              </h4>

              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}