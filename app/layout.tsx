import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import MobileNav from "./components/navbar/MobileNav";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Cobra Code | Software Development Studio",
  description:
    "We build premium web apps, SaaS platforms, and AI solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.className} h-full antialiased`}
    >
      <body className="min-h-screen bg-[#010102] text-white flex flex-col">

        {/* Premium Gold Glow */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#CAA060]/10 blur-[180px]" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D8B26E]/5 blur-[150px]" />
        </div>

        <Navbar />

        <main className="flex-1 pt-20">
          {children}
        </main>
          <MobileNav />

      </body>
    </html>
  );
}