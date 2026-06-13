"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="pt-32 bg-[#050505] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-6xl font-black text-white mb-8">هل لديك <br/> <span className="text-[#CAA060]">فكرة عظيمة؟</span></h1>
            <p className="text-zinc-400 text-lg mb-12">دعنا نحولها إلى واقع. تواصل معنا لمناقشة مشروعك القادم أو حتى لطلب استشارة تقنية.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CAA060] group-hover:bg-[#CAA060] group-hover:text-black transition-all">
                  <FiMail className="text-2xl" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">راسلنا على</p>
                  <h4 className="text-white font-bold text-xl">hello@cobracode.com</h4>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CAA060] group-hover:bg-[#CAA060] group-hover:text-black transition-all">
                  <FiPhone className="text-2xl" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">اتصل بنا</p>
                  <h4 className="text-white font-bold text-xl text-left" dir="ltr">+966 500 000 000</h4>
                </div>
              </div>
            </div>

            <div className="mt-16 flex gap-6">
              {[<FiLinkedin />, <FiTwitter />, <FiInstagram />].map((icon, i) => (
                <div key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#CAA060] hover:border-[#CAA060] transition-all cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0A0A0A] border border-white/5 p-10 rounded-[3rem] shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">الاسم</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#CAA060]/50 transition-colors text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">البريد</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#CAA060]/50 transition-colors text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">الموضوع</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#CAA060]/50 transition-colors text-white appearance-none">
                  <option>تطوير ويب</option>
                  <option>تطبيق جوال</option>
                  <option>استشارة AI</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">الرسالة</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#CAA060]/50 transition-colors text-white" />
              </div>
              <button className="w-full bg-[#CAA060] py-5 rounded-2xl text-black font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(202,160,96,0.3)] transition-all">
                إرسال الطلب
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}