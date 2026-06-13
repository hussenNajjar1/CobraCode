export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative rounded-[4rem] p-12 md:p-24 bg-gradient-to-br from-[#CAA060] to-[#8A6435] overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-black text-black leading-tight mb-8">
              هل أنت مستعد لنقل عملك للمستوى التالي؟
            </h2>
            <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all">
              احجز مكالمة استشارية مجانية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}