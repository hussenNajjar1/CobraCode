"use client";
import { motion } from "framer-motion";
import { 
  FiGlobe, FiSmartphone, FiCpu, FiLayers, 
  FiLayout, FiShield, FiTrendingUp, FiCheckCircle 
} from "react-icons/fi";
import { 
  SiNextdotjs, SiReact, SiNodedotjs, 
  SiTailwindcss, SiFigma, SiPython 
} from "react-icons/si";

// بيانات الخدمات التفصيلية
const detailedServices = [
  {
    title: "تطوير الويب المتقدم",
    desc: "نبني مواقع فائقة السرعة وأداء لا يضاهى باستخدام أحدث أطر العمل العالمية.",
    icon: <FiGlobe />,
    features: ["Next.js 14", "SEO Optimized", "Responsive Design"],
    color: "from-blue-500/20",
  },
  {
    title: "تطبيقات الهواتف الذكية",
    desc: "تجربة مستخدم سلسة وتطبيقات Native تعمل بكفاءة على iOS و Android.",
    icon: <FiSmartphone />,
    features: ["React Native", "Smooth Animations", "App Store Ready"],
    color: "from-purple-500/20",
  },
  {
    title: "الذكاء الاصطناعي و الـ AI",
    desc: "دمج حلول الذكاء الاصطناعي والتعلم الآلي لرفع كفاءة عملياتك البرمجية.",
    icon: <FiCpu />,
    features: ["LLM Integration", "Data Analysis", "Automation"],
    color: "from-[#CAA060]/20",
  },
  {
    title: "أنظمة الـ SaaS و ERP",
    desc: "تطوير لوحات تحكم وأنظمة إدارة شركات معقدة وقابلة للتوسع اللامتناهي.",
    icon: <FiLayers />,
    features: ["Cloud Scalability", "Secure API", "Real-time Data"],
    color: "from-green-500/20",
  },
];

// تقنياتنا
const techStack = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Python", icon: <SiPython /> },
];

export default function ServicesPage() {
  return (
    <main className="pt-32 bg-[#050505] min-h-screen text-white overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#CAA060]/5 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#CAA060] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            قدراتنا التقنية
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            نحن لا نطور فقط، <br /> نحن <span className="text-[#CAA060]">نبتكر</span>.
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات الرقمية المصممة لرفع كفاءة أعمالك وتحقيق أهدافك التجارية بأحدث المعايير العالمية.
          </p>
        </motion.div>
      </section>

      {/* 2. Detailed Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-8">
          {detailedServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-[3rem] bg-[#0A0A0A] border border-white/5 hover:border-[#CAA060]/30 transition-all duration-500 overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.color} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="text-4xl text-[#CAA060] mb-6 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-black mb-4">{service.title}</h3>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feat, idx) => (
                    <span key={idx} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-zinc-300">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Our Methodology (The Process) */}
      <section className="bg-[#0A0A0A] py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">كيف <span className="text-[#CAA060]">نعمل</span>؟</h2>
            <p className="text-zinc-500">منهجية واضحة تضمن تسليم مشاريع ناجحة في كل مرة.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { t: "اكتشاف", d: "دراسة السوق وفهم متطلباتك بدقة.", icon: <FiLayout /> },
              { t: "تخطيط", d: "بناء نموذج العمل وتصميم الـ UI/UX.", icon: <FiLayers /> },
              { t: "تطوير", d: "كتابة كود نظيف، آمن، وقابل للتوسع.", icon: <FiCpu /> },
              { t: "نمو", d: "الإطلاق، الدعم الفني، والتوسع المستمر.", icon: <FiTrendingUp /> },
            ].map((step, i) => (
              <div key={i} className="relative group text-center">
                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-[#CAA060] text-3xl group-hover:bg-[#CAA060] group-hover:text-black transition-all">
                  {step.icon}
                </div>
                <h4 className="text-xl font-black mb-3">{step.t}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.d}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 -left-4 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tech Stack Marquee */}
      <section className="py-24 overflow-hidden opacity-50">
        <div className="flex gap-20 animate-infinite-scroll">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 text-4xl text-zinc-600 grayscale hover:grayscale-0 hover:text-[#CAA060] transition-all">
              {tech.icon}
              <span className="text-sm font-black uppercase tracking-widest">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us (Checklist) */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-video rounded-[3rem] bg-gradient-to-tr from-[#CAA060]/20 to-transparent border border-white/5 flex items-center justify-center">
               <h2 className="text-[10vw] font-black text-white/5">COBRA</h2>
            </div>
          </div>
          
          <div>
            <h2 className="text-5xl font-black mb-12">لماذا <span className="text-[#CAA060]">كوبرا كود</span>؟</h2>
            <div className="space-y-6">
              {[
                "كود نظيف (Clean Code) سهل الصيانة.",
                "أمان وحماية بيانات فائقة المعايير.",
                "التزام صارم بمواعيد التسليم.",
                "دعم فني واستشارات مجانية بعد الإطلاق."
              ].map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <FiCheckCircle className="text-[#CAA060] text-xl flex-shrink-0" />
                  <p className="text-zinc-300 font-medium">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}