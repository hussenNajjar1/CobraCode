import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h3 className="text-2xl font-bold">
              Cobra Code
            </h3>

            <p className="text-zinc-500 mt-3">
              Premium Software Studio
            </p>
          </div>

          <div className="flex gap-8">

            <Link href="/">
              الرئيسية
            </Link>

            <Link href="/services">
              الخدمات
            </Link>

            <Link href="/projects">
              المشاريع
            </Link>

            <Link href="/contact">
              التواصل
            </Link>

          </div>

        </div>

        <div className="border-t border-white/5 mt-10 pt-6 text-zinc-500">
          © 2026 Cobra Code. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}