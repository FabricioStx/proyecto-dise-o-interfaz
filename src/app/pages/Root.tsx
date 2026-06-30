import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Sidebar } from "../components/Sidebar";
import { AuthModal } from "../components/AuthModal";
import { AppProvider } from "../context/AppContext";

export default function Root() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#f8faf9] text-stone-900">
        <Header />
        <Sidebar />
        <AuthModal />
        <main className="flex-grow pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
