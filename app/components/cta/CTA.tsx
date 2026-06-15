export default function CTA() {
  return (
    <section className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[3rem] lg:rounded-[4rem] p-6 sm:p-8 md:p-16 lg:p-24 bg-gradient-to-br from-[#CAA060] to-[#8A6435]">
          
          <div className="absolute top-0 right-0 w-40 h-40 md:w-96 md:h-96 bg-white/20 blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black leading-tight mb-4 md:mb-8">
              هل أنت مستعد
              <br />
              لنقل عملك للمستوى التالي؟
            </h2>

            <button
              className="
                bg-black text-white
                px-5 py-3
                sm:px-8 sm:py-4
                md:px-10 md:py-5
                rounded-full
                font-bold
                text-sm sm:text-base md:text-lg
                hover:scale-105
                active:scale-95
                transition-all
              "
            >
              احجز استشارة مجانية
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}