"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiLinkedin, FiTwitter, FiInstagram, FiGithub, FiMail, FiMapPin } from "react-icons/fi";

const footerLinks = {
  company: [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "المشاريع", href: "/projects" },
    { name: "الباقات", href: "/pricing" },
  ],
  services: [
    { name: "تطوير الويب", href: "/services" },
    { name: "تطبيقات الهاتف", href: "/services" },
    { name: "الذكاء الاصطناعي", href: "/services" },
    { name: "تصميم UI/UX", href: "/services" },
  ],
  support: [
    { name: "تواصل معنا", href: "/contact" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "سياسة الخصوصية", href: "/privacy" },
    { name: "الشروط والأحكام", href: "/terms" },
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-[#010102] border-t border-white/5 pt-24 pb-12 overflow-hidden selection:bg-[#CAA060] selection:text-black">
      
      {/* تأثير ضوئي خلفي خفيف في الزاوية */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#CAA060]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* العمود الأول: الشعار والوصف */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8A6435] via-[#CAA060] to-[#F0D08A] shadow-lg shadow-[#CAA060]/20 flex items-center justify-center font-black text-black">
                C
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-white">
                Cobra<span className="text-[#CAA060]">Code</span>
              </span>
            </Link>
            
            <p className="text-zinc-500 leading-relaxed text-sm md:text-base font-light max-w-sm">
              استوديو برمجيات متخصص في بناء الحلول الرقمية الفاخرة. ندمج بين القوة التقنية والجمالية التصميمية لنخلق مستقبلاً يتحدث بلغة الابتكار.
            </p>

            <div className="flex gap-4">
              {[<FiLinkedin />, <FiTwitter />, <FiInstagram />, <FiGithub />].map((icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-[#CAA060] hover:border-[#CAA060] transition-all duration-300 bg-white/5">
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* الأعمدة الوسطى: الروابط */}
          <div className="lg:col-span-2 space-y-6 text-right">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] border-r-2 border-[#CAA060] pr-4">الشركة</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-zinc-500 hover:text-[#CAA060] text-sm transition-colors duration-300 font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6 text-right">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] border-r-2 border-[#CAA060] pr-4">الخدمات</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-zinc-500 hover:text-[#CAA060] text-sm transition-colors duration-300 font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] border-r-2 border-[#CAA060] pr-4">تواصل معنا</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#CAA060] group-hover:scale-110 transition-transform border border-white/5">
                  <FiMail />
                </div>
                <p className="text-zinc-400 text-sm font-medium">hello@cobracode.studio</p>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#CAA060] group-hover:scale-110 transition-transform border border-white/5">
                  <FiMapPin />
                </div>
                <p className="text-zinc-400 text-sm font-medium text-right leading-relaxed">
                  الرياض، المملكة العربية السعودية <br/> برج الابتكار الرقمي
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* القسم السفلي: الحقوق */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] order-2 md:order-1 text-center">
            © 2026 Cobra Code. All Rights Reserved. Crafted by <span className="text-[#CAA060]">Cobra Code </span>
          </p>
          
          <div className="flex gap-8 order-1 md:order-2">
            {footerLinks.support.slice(2).map((link) => (
              <Link key={link.name} href={link.href} className="text-zinc-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}