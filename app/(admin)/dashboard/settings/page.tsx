"use client";
import { motion } from "framer-motion";
import { FiSettings, FiLock, FiGlobe, FiBell, FiSave, FiCamera } from "react-icons/fi";

export default function SettingsPage() {
  return (
    <div className="space-y-10" dir="rtl">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">إعدادات <span className="text-[#CAA060]">النظام</span></h1>
          <p className="text-zinc-500 font-bold text-xs mt-2 uppercase tracking-widest">تخصيص لوحة التحكم والهوية الرقمية</p>
        </div>
        <button className="bg-[#CAA060] text-black px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#D8B26E] transition-all shadow-xl shadow-[#CAA060]/20">
          <FiSave /> حفظ التغييرات
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* ملف تعريف الأدمن - Profile Section */}
        <div className="md:col-span-4 bg-[#101114] border border-white/5 p-10 rounded-[3rem] flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-[2.5rem] bg-zinc-800 border-2 border-[#CAA060]/30 overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=Admin&background=CAA060&color=000" alt="Admin" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 -right-2 w-10 h-10 bg-[#CAA060] rounded-full flex items-center justify-center text-black shadow-lg">
              <FiCamera />
            </button>
          </div>
          <h3 className="text-2xl font-black text-white">أدمن كوبرا</h3>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-2">مدير النظام الرئيسي</p>
          <div className="w-full h-px bg-white/5 my-8" />
          <div className="space-y-4 w-full">
            <div className="text-right">
               <label className="text-[10px] font-black uppercase text-zinc-500 mr-2">اسم المستخدم</label>
               <input type="text" defaultValue="admin_cobra" className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 px-4 mt-2 outline-none focus:border-[#CAA060]/30 text-sm" />
            </div>
            <div className="text-right">
               <label className="text-[10px] font-black uppercase text-zinc-500 mr-2">البريد المباشر</label>
               <input type="email" defaultValue="admin@cobracode.com" className="w-full bg-black/40 border border-white/5 rounded-2xl py-3 px-4 mt-2 outline-none focus:border-[#CAA060]/30 text-sm" />
            </div>
          </div>
        </div>

        {/* إعدادات الموقع العامة - General Settings */}
        <div className="md:col-span-8 bg-[#101114] border border-white/5 p-10 rounded-[3rem] space-y-10">
          <div className="flex items-center gap-4 text-[#CAA060]">
             <FiGlobe className="text-2xl" />
             <h3 className="text-xl font-black italic">إعدادات الهوية الرقمية</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
               <label className="text-[10px] font-black uppercase text-zinc-500 mr-2">اسم الموقع</label>
               <input type="text" placeholder="كوبرا كود | Cobra Code" className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-[#CAA060]/30 text-sm" />
            </div>
            <div className="space-y-3">
               <label className="text-[10px] font-black uppercase text-zinc-500 mr-2">وصف الـ SEO</label>
               <input type="text" placeholder="استوديو برمجيات فاخر..." className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 px-6 outline-none focus:border-[#CAA060]/30 text-sm" />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold text-zinc-400 border-r-2 border-[#CAA060] pr-4">تفضيلات النظام</h4>
            <div className="flex flex-col gap-4">
              {[
                { label: "وضع الصيانة", desc: "إظهار صفحة 'نحن نعمل حالياً' للزوار", icon: <FiSettings /> },
                { label: "إشعارات البريد", desc: "استلام تنبيه عند وصول رسالة عميل جديد", icon: <FiBell /> },
                { label: "الأمان المزدوج", desc: "تفعيل 2FA لحسابات المديرين", icon: <FiLock /> },
              ].map((toggle, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-black/20 rounded-[2rem] border border-white/5 group hover:border-[#CAA060]/20 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-[#CAA060] text-xl">{toggle.icon}</div>
                    <div className="text-right">
                       <p className="text-sm font-bold text-white">{toggle.label}</p>
                       <p className="text-[10px] text-zinc-500">{toggle.desc}</p>
                    </div>
                  </div>
                  {/* Custom Toggle Switch */}
                  <div className="w-12 h-6 bg-zinc-800 rounded-full relative cursor-pointer group-hover:bg-[#CAA060]/20 transition-colors">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-[#CAA060] rounded-full shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}