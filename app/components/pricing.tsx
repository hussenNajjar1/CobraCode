"use client";
import { motion } from "framer-motion";
import { FiCheck, FiZap, FiTarget, FiAward, FiInfo, FiActivity } from "react-icons/fi"; 
import { FaCrown } from "react-icons/fa"; 
import Link from "next/link";

const plans = [
  {
    id: "01",
    name: "باقة الانطلاق",
    sub: "Landing Page",
    price: "499",
    desc: "مثالية للشركات الناشئة التي تبحث عن حضور رقمي فوري وقوي.",
    icon: <FiZap />,
    features: ["تصميم صفحة واحدة", "تجاوب كامل", "سرعة تحميل فائقة", "ربط السوشيال ميديا"],
    highlight: false,
  },
  {
    id: "02",
    name: "الباقة الاحترافية",
    sub: "Business Elite",
    price: "1,499",
    desc: "الحل المتكامل للشركات التي تطمح للتوسع والمنافسة العالمية.",
    icon: <FiTarget />,
    features: ["موقع متعدد الصفحات", "نظام CMS مخصص", "SEO متقدم", "أنيميشن سينمائي", "دعم فني متميز"],
    highlight: true, 
  },
  {
    id: "03",
    name: "باقة النخبة",
    sub: "Enterprise / SaaS",
    price: "4,999",
    desc: "للشركات الكبرى التي تحتاج أنظمة برمجية معقدة وحلول ذكاء اصطناعي.",
    icon: <FaCrown />,
    features: ["تطوير SaaS مخصص", "دمج AI مخصص", "بنية سحابية مشفرة", "أمان بمستوى بنكي"],
    highlight: false,
  },
];

export default function PricingPage() {
  // إعدادات الأنيميشن للنصوص
  const textReveal = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const fadeInBlur = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  return (
    <main className="pt-32 bg-[#010102] min-h-screen text-white pb-32 overflow-hidden selection:bg-[#CAA060] selection:text-black" dir="rtl">
      
      {/* --- طبقات الخلفية الفاخرة --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#CAA060]/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- قسم العنوان السينمائي (Header) --- */}
        <div className="text-center mb-40 relative">
          
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            {/* 1. النص العلوي الصغير (Badge) */}
            <motion.div 
              variants={fadeInBlur}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#CAA060]" />
              <span className="text-[#CAA060] font-black uppercase tracking-[0.5em] text-[10px] md:text-xs">
                استثمر في مستقبلك الرقمي
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#CAA060]" />
            </motion.div>

            {/* 2. العنوان الرئيسي (خطط النمو) مع Masking */}
            <div className="relative mb-12">
              <div className="overflow-hidden py-4">
                <motion.h1 
                  variants={textReveal}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-7xl md:text-[11rem] font-black tracking-tighter leading-none"
                >
                  خطط <span className="bg-gradient-to-r from-[#8A6435] via-[#F0D08A] to-[#CAA060] bg-clip-text text-transparent italic">النمو</span>
                </motion.h1>
              </div>
              
              {/* زخرفة هندسية خلف العنوان */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-[15vw] font-black uppercase tracking-[0.2em] select-none"
              >
             
              </motion.div>
            </div>

            {/* 3. الوصف التفصيلي (هندسة برمجية فائقة) */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="overflow-hidden">
                <motion.p 
                  variants={textReveal}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-2xl md:text-4xl font-bold tracking-tight text-white/90"
                >
                  هندسة برمجية فائقة، تضمن لك السيادة في سوقك الرقمي.
                </motion.p>
              </div>

              <div className="overflow-hidden">
                <motion.p 
                  variants={textReveal}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-zinc-500 text-lg md:text-xl font-light"
                >
                  اختر المسار الذي يليق بطموحك.
                </motion.p>
              </div>
            </div>

            {/* 4. عنصر ديكور تقني (خط نبض) */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#CAA060] to-transparent mx-auto mt-16 relative"
            >
                <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 bg-[#CAA060] rounded-full shadow-[0_0_10px_#CAA060]" />
            </motion.div>
          </motion.div>
        </div>

        {/* --- شبكة الباقات (The Matrix Grid) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-10 rounded-[3.5rem] border transition-all duration-700 group ${
                plan.highlight 
                ? "bg-[#101114] border-[#CAA060] shadow-[0_0_80px_rgba(202,160,96,0.08)] scale-105 z-10" 
                : "bg-[#0A0A0A] border-white/5 hover:border-[#CAA060]/30"
              }`}
            >
              {/* رقم التسلسل في الخلفية */}
              <div className="absolute top-10 left-12 text-white/[0.03] font-black text-7xl group-hover:text-[#CAA060]/5 transition-colors">
                {plan.id}
              </div>

              <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-4xl mb-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${plan.highlight ? "bg-gradient-to-br from-[#8A6435] to-[#F0D08A] text-black shadow-lg shadow-[#CAA060]/20" : "bg-white/5 text-[#CAA060] border border-white/5"}`}>
                {plan.icon}
              </div>

              <div className="mb-10">
                <h3 className="text-3xl font-black mb-1">{plan.name}</h3>
                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">{plan.sub}</span>
              </div>

              <div className="mb-12 flex items-baseline gap-2">
                <span className="text-zinc-600 text-sm font-bold">$</span>
                <span className="text-6xl md:text-7xl font-black tracking-tighter italic">
                  {plan.price}
                </span>
                <span className="text-zinc-600 font-bold uppercase text-[10px] tracking-widest">/ يبدأ من</span>
              </div>

              <div className="space-y-6 mb-16 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group/item">
                    <div className={`w-5 h-5 rounded-lg flex items-center justify-center border transition-all ${plan.highlight ? "border-[#CAA060]/50 text-[#CAA060] bg-[#CAA060]/10 shadow-[0_0_10px_rgba(202,160,96,0.2)]" : "border-white/5 text-zinc-600 bg-white/5"}`}>
                      <FiCheck size={12} />
                    </div>
                    <span className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="block w-full mt-auto">
                <button className={`w-full py-6 rounded-[2rem] font-black uppercase tracking-widest text-[11px] transition-all active:scale-95 ${
                  plan.highlight 
                  ? "bg-[#CAA060] text-black hover:bg-[#F0D08A] shadow-[0_20px_40px_rgba(202,160,96,0.2)]" 
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}>
                  ابدأ مشروعك الفاخر
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* --- تذييل الصفحة الموثوق --- */}
        <div className="mt-32 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex gap-12">
                <div className="flex items-center gap-3">
                    <FiAward className="text-[#CAA060] text-2xl" />
                    <div>
                        <p className="text-xs font-black uppercase text-white">جودة برمجية</p>
                        <p className="text-[10px] text-zinc-500">معايير هندسية عالمية</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FiActivity className="text-[#CAA060] text-2xl" />
                    <div>
                        <p className="text-xs font-black uppercase text-white">شفافية كاملة</p>
                        <p className="text-[10px] text-zinc-500">لا توجد تكاليف خفية</p>
                    </div>
                </div>
            </div>
            <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                Cobra Code © Luxury Software Studio
            </p>
        </div>

      </div>
    </main>
  );
}