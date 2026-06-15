import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import MobileNav from "./components/navbar/MobileNav";
import ClientWrapper from "./components/ClientWrapper"; // المكون الذي سننشئه
import ChatWidget from "./components/chat/ChatWidget";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Cobra Code | Software Development Studio",
  description: "نحن نبني تطبيقات ويب، منصات SaaS، وحلول ذكاء اصطناعي بمستوى عالمي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="h-full antialiased">
      <body className={`${cairo.className} min-h-screen bg-[#010102] text-white flex flex-col`}>
        
        {/* نمرر المحتويات للـ Wrapper للتحكم في شاشة التحميل */}
        <ClientWrapper>
          {/* Premium Gold Glow (الخلفية المضيئة) */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#CAA060]/10 blur-[180px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D8B26E]/5 blur-[150px]" />
          </div>

          <Navbar />

          <main className="flex-1 pt-20">
            {children}
            <ChatWidget/>
          </main>

          <MobileNav />
        </ClientWrapper>

      </body>
    </html>
  );
}