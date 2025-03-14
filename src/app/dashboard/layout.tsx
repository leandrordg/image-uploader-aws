import { DashboardAside } from "@/components/dashboard-aside";
import { Header } from "@/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="px-4 max-w-7xl mx-auto">
        <Header />
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-12 px-4">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f11_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f11_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-50" />

        <section className="col-span-1 lg:col-span-2">{children}</section>

        <aside className="hidden lg:block col-span-1 sticky top-12 h-max">
          <DashboardAside />
        </aside>
      </main>
    </>
  );
}
