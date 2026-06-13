"use client";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowLeft, FiShield } from "react-icons/fi";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#010102] flex items-center justify-center px-6 relative overflow-hidden font-sans" dir="rtl">
      
      {/* تأثيرات الإضاءة الخلفية (Glow Effects) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CAA060]/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#8A6435]/5 blur-[100px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[480px] bg-[#101114] border border-white/5 p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative z-10 backdrop-blur-sm"
      >
        {/* الشعار - Logo */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-block mb-6 group">
             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8A6435] via-[#CAA060] to-[#F0D08A] mx-auto shadow-xl shadow-[#CAA060]/20 group-hover:rotate-12 transition-transform duration-500 flex items-center justify-center text-black">
                <FiShield size={28} />
             </div>
          </Link>
          <h1 className="text-3xl font-black text-white tracking-tight">أهلاً بك مجدداً</h1>
          <p className="text-zinc-500 mt-3 text-xs font-bold uppercase tracking-[0.2em] italic">مصادقة دخول المسؤول</p>
        </div>

        {/* نموذج تسجيل الدخول - Form */}
        <form className="space-y-8">
          
          {/* حقل البريد الإلكتروني */}
          <div className="space-y-3">
            <label className="text-[11px] font-black uppercase tracking-widest text-zinc-500 mr-2 block">البريد الإلكتروني</label>
            <div className="relative group">
              <FiMail className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#CAA060] transition-colors" />
              <input 
                type="email" 
                placeholder="admin@cobracode.com"
                className="w-full bg-[#010102] border border-white/5 rounded-2xl py-4 pr-14 pl-6 outline-none focus:border-[#CAA060]/30 transition-all text-white text-sm placeholder:text-zinc-700"
              />
            </div>
          </div>

          {/* حقل كلمة المرور */}
          <div className="space-y-3">
            <div className="flex justify-between items-center px-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-zinc-500 block">كلمة المرور</label>
              <Link href="#" className="text-[10px] text-[#CAA060] font-bold hover:text-white transition-colors">نسيت كلمة المرور؟</Link>
            </div>
            <div className="relative group">
              <FiLock className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#CAA060] transition-colors" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-[#010102] border border-white/5 rounded-2xl py-4 pr-14 pl-6 outline-none focus:border-[#CAA060]/30 transition-all text-white text-sm placeholder:text-zinc-700"
              />
            </div>
          </div>

          {/* زر الدخول */}
          <button className="w-full bg-[#CAA060] py-5 rounded-2xl text-black font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-[#D8B26E] hover:shadow-lg hover:shadow-[#CAA060]/20 transition-all group active:scale-95">
            تسجيل الدخول للوحة التحكم
            <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" />
          </button>
        </form>

        {/* تذييل الصفحة - Footer Info */}
        <div className="mt-12 pt-8 border-t border-white/5">
           <p className="text-center text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed">
             هذا النظام محمي ومشفر <br /> 
             <span className="text-[#CAA060]/50">للاستخدام الداخلي فقط</span>
           </p>
        </div>
      </motion.div>

      {/* لمسة جمالية سفلية */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-800 text-[10px] font-bold uppercase tracking-widest pointer-events-none">
        Cobra Code Internal Security System v2.0
      </div>
    </main>
  );
}