import Sidebar from "@/app/components/dashboard/Sidebar";
import AdminHeader from "@/app/components/dashboard/AdminHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#010102] flex text-white font-sans selection:bg-[#CAA060] selection:text-black" dir="rtl">
      {/* القائمة الجانبية */}
      <Sidebar />

      {/* منطقة المحتوى المتغيرة */}
      <main className="flex-grow p-6 lg:p-12 overflow-y-auto">
        <AdminHeader />
        {children}
      </main>
    </div>
  );
}