"use client";
import { motion } from "framer-motion";
import { FiUserPlus, FiMoreVertical, FiMail, FiShield, FiEdit2, FiTrash2 } from "react-icons/fi";

const team = [
  { id: 1, name: "أحمد المنسي", email: "ahmed@cobra.com", role: "مدير النظام", status: "نشط", initial: "أ" },
  { id: 2, name: "سارة خالد", email: "sara@cobra.com", role: "مطور واجهات", status: "نشط", initial: "س" },
  { id: 3, name: "ياسين العبودي", email: "yasin@cobra.com", role: "محلل بيانات", status: "إجازة", initial: "ي" },
];

export default function UsersPage() {
  return (
    <div className="space-y-10" dir="rtl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-white">إدارة <span className="text-[#CAA060]">الفريق</span></h1>
          <p className="text-zinc-500 font-bold text-xs mt-2 uppercase tracking-widest">التحكم في صلاحيات الوصول والمستخدمين</p>
        </div>
        <button className="bg-[#CAA060] text-black px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#D8B26E] transition-all shadow-xl shadow-[#CAA060]/20 active:scale-95">
          <FiUserPlus className="text-lg" /> إضافة عضو جديد
        </button>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((user, i) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#101114] border border-white/5 p-8 rounded-[3rem] hover:border-[#CAA060]/30 transition-all group relative overflow-hidden"
          >
            {/* Status Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/5">
              <div className={`w-2 h-2 rounded-full ${user.status === 'نشط' ? 'bg-green-500' : 'bg-orange-500'} animate-pulse`} />
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{user.status}</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#8A6435] to-[#CAA060] flex items-center justify-center text-black text-3xl font-black mb-6 shadow-lg shadow-[#CAA060]/10">
                {user.initial}
              </div>
              <h3 className="text-xl font-black text-white mb-1 group-hover:text-[#CAA060] transition-colors">{user.name}</h3>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">{user.role}</p>
              
              <div className="flex items-center gap-4 text-zinc-500 mb-8 bg-black/20 p-3 rounded-2xl w-full justify-center">
                <FiMail />
                <span className="text-xs">{user.email}</span>
              </div>

              <div className="flex gap-3 w-full">
                <button className="flex-grow py-3 bg-white/5 rounded-2xl text-xs font-bold hover:bg-[#CAA060] hover:text-black transition-all flex items-center justify-center gap-2">
                  <FiEdit2 /> تعديل
                </button>
                <button className="w-12 h-12 bg-white/5 rounded-2xl text-xs font-bold hover:bg-red-500/20 hover:text-red-500 transition-all flex items-center justify-center">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}