import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Announcements from "./components/pages/Announcements";
import BanAppeals from "./components/pages/BanAppeals";
import Introduction from "./components/pages/Introduction";
import PromotionSystem from "./components/pages/PromotionSystem";
import PunishmentGuide from "./components/pages/PunishmentGuide";
import SeniorStaffGuide from "./components/pages/SeniorStaffGuide";
import StaffCommands from "./components/pages/StaffCommands";
import StaffDiscord from "./components/pages/StaffDiscord";
import StaffRules from "./components/pages/StaffRules";
import TicketHandling from "./components/pages/TicketHandling";

export type PageId =
  | "introduction"
  | "staff-rules"
  | "promotion-system"
  | "announcements"
  | "ban-appeals"
  | "staff-discord"
  | "staff-commands"
  | "punishment-guide"
  | "ticket-handling"
  | "senior-staff-guide";

export default function App() {
  const [activePage, setActivePage] = useState<PageId>("introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const el = document.getElementById("main-content");
    if (!el) return;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    if (scrollHeight > 0) {
      setScrollProgress((scrollTop / scrollHeight) * 100);
    }
  }, []);

  useEffect(() => {
    const el = document.getElementById("main-content");
    if (el) el.addEventListener("scroll", handleScroll);
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navigate = (page: PageId) => {
    setActivePage(page);
    setSidebarOpen(false);
    const el = document.getElementById("main-content");
    if (el) el.scrollTop = 0;
    setScrollProgress(0);
  };

  const closeOverlay = () => setSidebarOpen(false);

  const renderPage = () => {
    switch (activePage) {
      case "introduction":
        return <Introduction navigate={navigate} searchQuery={searchQuery} />;
      case "staff-rules":
        return <StaffRules searchQuery={searchQuery} />;
      case "promotion-system":
        return <PromotionSystem searchQuery={searchQuery} />;
      case "announcements":
        return <Announcements searchQuery={searchQuery} />;
      case "ban-appeals":
        return <BanAppeals searchQuery={searchQuery} />;
      case "staff-discord":
        return <StaffDiscord searchQuery={searchQuery} />;
      case "staff-commands":
        return <StaffCommands searchQuery={searchQuery} />;
      case "punishment-guide":
        return <PunishmentGuide searchQuery={searchQuery} />;
      case "ticket-handling":
        return <TicketHandling searchQuery={searchQuery} />;
      case "senior-staff-guide":
        return <SeniorStaffGuide searchQuery={searchQuery} />;
      default:
        return <Introduction navigate={navigate} searchQuery={searchQuery} />;
    }
  };

  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ background: "#0b0b10" }}
    >
      <div
        className="fixed top-0 left-0 z-[100] h-[2px] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #e53935, #f5c518)",
          boxShadow: "0 0 8px rgba(229, 57, 53, 0.8)",
        }}
      />

      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />

      <div className="flex flex-1 overflow-hidden">
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            className="fixed inset-0 z-40 bg-black/60 md:hidden w-full h-full border-0 p-0 cursor-default"
            onClick={closeOverlay}
          />
        )}

        <Sidebar
          activePage={activePage}
          onNavigate={navigate}
          isOpen={sidebarOpen}
        />

        <main
          id="main-content"
          className="flex-1 overflow-y-auto"
          style={{ background: "#0b0b10" }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
            {renderPage()}
          </div>
          <footer
            className="text-center py-6 text-sm"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            © {new Date().getFullYear()}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-razeRed transition-colors"
            >
              caffeine.ai
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
