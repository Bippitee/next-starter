import Footer from "@/components/footer";
import Header from "@/components/header";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-named-layout gap-4">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default MainLayout;
