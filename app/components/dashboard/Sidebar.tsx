"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiLayers, FiUsers, FiSettings, FiMail, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const menuItems = [
  { n: "نظرة عامة", i: <FiGrid />, h: "/dashboard" }, 
  { n: "المشاريع", i: <FiLayers />, h: "/dashboard/projects" },
  { n: "الرسائل", i: <FiMail />, h: "/dashboard/Messages" },
  { n: "المستخدمين", i: <FiUsers />, h: "/dashboard/users" },
  { n: "الإعدادات", i: <FiSettings />, h: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // إغلاق القائمة تلقائياً عند تغيير الصفحة (في الموبايل)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* --- زر الموبايل (يظهر فقط في الشاشات الصغيرة) --- */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-6 right-6 z-[60] bg-[#CAA060] text-black p-3 rounded-xl shadow-lg shadow-[#CAA060]/20 active:scale-90 transition-transform"
      >
        <FiMenu size={24} />
      </button>

      {/* --- غطاء الخلفية للموبايل (Overlay) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* --- القائمة الجانبية (Sidebar) --- */}
      <AnimatePresence>
        {(isOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: "100%" }} // تبدأ من خارج الشاشة يميناً
            animate={{ x: 0 }}      // تدخل لليسار
            exit={{ x: "100%" }}    // تخرج لليمين
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`
              fixed lg:sticky top-0 right-0 z-[80]
              w-80 h-screen bg-[#010102] 
              border-l border-white/5 p-8
              flex flex-col
              ${isOpen ? "flex" : "hidden lg:flex"}
            `}
          >
            {/* زر الإغلاق في الموبايل */}
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden absolute top-8 left-8 text-zinc-500 hover:text-white"
            >
              <FiX size={24} />
            </button>

            {/* الشعار */}
            <div className="flex items-center gap-3 mb-16 px-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8A6435] to-[#CAA060] flex items-center justify-center font-black text-black shadow-lg shadow-[#CAA060]/20">
                C
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-white">
                كوبرا<span className="text-[#CAA060]">أدمن</span>
              </span>
            </div>

            {/* الروابط */}
            <nav className="space-y-3 flex-grow">
              {menuItems.map((item) => {
                const isActive = pathname === item.h;
                return (
                  <Link
                    key={item.h}
                    href={item.h}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-[#CAA060] text-black shadow-lg shadow-[#CAA060]/20 scale-[1.02]"
                        : "text-zinc-500 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="text-xl">{item.i}</span>
                    {item.n}
                  </Link>
                );
              })}
            </nav>

            {/* حالة النظام في الأسفل */}
            <div className="p-6 rounded-[2rem] bg-[#101114] border border-white/5 mt-auto">
              <p className="text-[10px] font-black uppercase text-[#CAA060] mb-2 tracking-widest">حالة النظام</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-tighter">متصل</span>
                </div>
                <span className="text-[10px] text-zinc-600 font-bold">v2.0.4</span>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}