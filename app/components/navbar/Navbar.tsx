"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// تعريف الروابط مع مساراتها
const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الخدمات", href: "/services" },
  { name: "المشاريع", href: "/portfolio" },
  { name: "تواصل معنا", href: "/contact" },
  { name: " من نحن", href: "/about" },
  { name: "  لوحة التحكم", href: "/dashboard" },
  { name: "   تسجيل الدخول", href: "/login" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // للحصول على الصفحة الحالية وتفعيل الرابط النشط

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl transition-all duration-500`}
    >
      <div
        className={`rounded-full px-8 py-4 flex items-center justify-between border transition-all ${
          isScrolled
            ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl"
            : "bg-black/20 backdrop-blur-md border-white/5 shadow-sm"
        }`}
      >
        {/* اللوجو - يوجه للرئيسية */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-[#8A6435] to-[#F0D08A] rounded-lg rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-gold/20" />
          <span className="text-xl font-black tracking-tighter text-white">
            COBRA<span className="text-[#CAA060]">CODE</span>
          </span>
        </Link>

        {/* قائمة الروابط */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive ? "text-[#CAA060]" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
                {/* خط تحت الرابط النشط أو عند التحويم */}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-[#CAA060] transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* زر ابدأ مشروعك - يوجه لصفحة التواصل */}
        <Link href="/contact">
          <button className="bg-gradient-to-r from-[#8A6435] to-[#CAA060] px-6 py-2.5 rounded-full text-black text-sm font-bold hover:shadow-[0_0_20px_rgba(202,160,96,0.4)] transition-all active:scale-95">
            ابدأ مشروعك
          </button>
        </Link>
      </div>
    </motion.header>
  );
}