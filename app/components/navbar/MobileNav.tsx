"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FiBriefcase, 
  FiGrid, 
  FiUser, 
  FiMessageSquare, 
  FiLayout, 
  FiHome 
} from "react-icons/fi";
import { GiCobra } from "react-icons/gi"; // استيراد أيقونة الكوبرا

const leftLinks = [
  { name: "الرئيسية", href: "/", icon: <FiHome /> },
  { name: "الخدمات", href: "/services", icon: <FiBriefcase /> },
  { name: "المشاريع", href: "/portfolio", icon: <FiGrid /> },
];

const rightLinks = [
  { name: "من نحن", href: "/about", icon: <FiUser /> },
  { name: "تواصل", href: "/contact", icon: <FiMessageSquare /> },
  { name: "التحكم", href: "/dashboard", icon: <FiLayout /> },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-0 left-0 w-full z-[100] lg:hidden px-3 pb-6"
    >
      {/* جسم النافبار الفاخر */}
      <div className="bg-[#010102]/85 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] px-1 py-3 flex items-center justify-between shadow-[0_-15px_50px_rgba(0,0,0,0.8)] relative">
        
        {/* القسم الأيمن */}
        <div className="flex justify-around items-center flex-1">
          {leftLinks.map((link) => (
            <NavItem key={link.href} link={link} isActive={pathname === link.href} />
          ))}
        </div>

        {/* أيقونة الكوبرا العائمة (مركز القوة البصري) */}
        <div className="relative -top-12 mx-2">
          {/* دائرة الخلفية المتوهجة */}
          <div className="absolute inset-0 bg-[#CAA060]/20 blur-2xl rounded-full" />
          
          <motion.div
            animate={{ 
              y: [0, -8, 0], // حركة عائمة للأعلى والأسفل
              rotateY: [0, 10, 0, -10, 0] // حركة تموج خفيفة
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-18 h-18 bg-gradient-to-br from-[#8A6435] via-[#CAA060] to-[#F0D08A] rounded-2xl flex items-center justify-center shadow-2xl border-[4px] border-[#010102] relative z-10 p-2"
          >
            {/* أيقونة الكوبرا باللون الأسود العميق */}
            <GiCobra size={45} className="text-[#010102] drop-shadow-md" />
          </motion.div>

          {/* الظل تحت الكوبرا */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-black/50 blur-md rounded-full" />
        </div>

        {/* القسم الأيسر */}
        <div className="flex justify-around items-center flex-1">
          {rightLinks.map((link) => (
            <NavItem key={link.href} link={link} isActive={pathname === link.href} />
          ))}
        </div>

      </div>
    </motion.div>
  );
}

// مكون العنصر الفرعي
function NavItem({ link, isActive }: { link: any; isActive: boolean }) {
  return (
    <Link href={link.href} className="flex flex-col items-center justify-center gap-1.5 min-w-[40px] relative py-1">
      <motion.span
        animate={isActive ? { y: -3, scale: 1.1 } : { y: 0, scale: 1 }}
        className={`text-xl transition-all duration-300 ${
          isActive ? "text-[#CAA060]" : "text-zinc-500"
        }`}
      >
        {link.icon}
      </motion.span>
      
      <span className={`text-[8px] font-black tracking-tight transition-colors duration-300 ${
        isActive ? "text-white" : "text-zinc-600"
      }`}>
        {link.name}
      </span>

      {/* المؤشر النشط (نقطة ذهبية) */}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 w-1.5 h-1.5 bg-[#CAA060] rounded-full shadow-[0_0_12px_#CAA060]"
        />
      )}
    </Link>
  );
}