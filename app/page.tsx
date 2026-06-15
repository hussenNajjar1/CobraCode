import Image from "next/image";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/Testimonials";
import PricingPage from "./components/pricing";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Portfolio/>
      <CTA/>
      <Testimonials/>
      <PricingPage/>
      <Footer/>


     {/* <section className="bg-[#010102] py-16">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-white text-center mb-12">
      Brand Colors
    </h2>

    <div className="grid md:grid-cols-4 gap-6">


      <div className="rounded-2xl overflow-hidden border border-white/10">
        <div className="h-40 bg-[#010102]"></div>
        <div className="bg-[#111111] p-5">
          <h3 className="text-white font-semibold">Deep Black</h3>
          <p className="text-zinc-400">#010102</p>
        </div>
      </div>

   
      <div className="rounded-2xl overflow-hidden border border-white/10">
        <div className="h-40 bg-[#101114]"></div>
        <div className="bg-[#111111] p-5">
          <h3 className="text-white font-semibold">Dark Charcoal</h3>
          <p className="text-zinc-400">#101114</p>
        </div>
      </div>

    
      <div className="rounded-2xl overflow-hidden border border-white/10">
        <div className="h-40 bg-[#CAA060]"></div>
        <div className="bg-[#111111] p-5">
          <h3 className="text-white font-semibold">Premium Gold</h3>
          <p className="text-zinc-400">#CAA060</p>
        </div>
      </div>

    
      <div className="rounded-2xl overflow-hidden border border-white/10">
        <div className="h-40 bg-[#D8B26E]"></div>
        <div className="bg-[#111111] p-5">
          <h3 className="text-white font-semibold">Light Gold</h3>
          <p className="text-zinc-400">#D8B26E</p>
        </div>
      </div>

    </div>

    
    <div className="mt-12">
      <div className="h-32 rounded-3xl bg-gradient-to-r from-[#8A6435] via-[#CAA060] to-[#F0D08A]"></div>

      <div className="mt-4 text-center">
        <p className="text-white font-semibold">
          Premium Gold Gradient
        </p>
        <p className="text-zinc-400">
          #8A6435 → #CAA060 → #F0D08A
        </p>
      </div>
    </div>

  </div>
</section> */}
    </div>
  );
}
