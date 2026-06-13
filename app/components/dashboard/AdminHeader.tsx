"use client";
import { FiSearch, FiBell } from "react-icons/fi";

export default function AdminHeader() {
  return (
    <header className="flex justify-between items-center mb-12">
      <div className="relative w-96 hidden md:block">
        <FiSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          placeholder="ابحث عن أي شيء..."
          className="w-full bg-[#101114] border border-white/5 rounded-full py-3 pr-12 pl-6 outline-none focus:border-[#CAA060]/30 text-sm font-medium text-white"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-zinc-400 relative hover:border-[#CAA060]/50 transition-colors">
          <FiBell />
          <div className="absolute top-3 left-3 w-2 h-2 bg-[#CAA060] rounded-full border-2 border-[#010102]" />
        </button>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-black text-white">أدمن كوبرا</p>
            <p className="text-[10px] text-[#CAA060] font-bold uppercase text-left">مدير النظام</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-[#CAA060]/30 overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Admin&background=CAA060&color=000" alt="Admin" />
          </div>
        </div>
      </div>
    </header>
  );
}