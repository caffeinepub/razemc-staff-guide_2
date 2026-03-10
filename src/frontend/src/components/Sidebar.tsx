import type { PageId } from "../App";
import {
  CommandBlockIcon,
  CrownIcon,
  DiscordIcon,
  GavelIcon,
  HomeIcon,
  MegaphoneIcon,
  ScaleIcon,
  ShieldIcon,
  StarIcon,
  TicketIcon,
} from "./McIcons";

type NavItem = {
  id: PageId;
  label: string;
  Icon: React.FC<{ size?: number; className?: string }>;
};

const navItems: NavItem[] = [
  { id: "introduction", label: "Introduction", Icon: HomeIcon },
  { id: "staff-rules", label: "Staff Rules", Icon: ShieldIcon },
  { id: "promotion-system", label: "Promotion System", Icon: CrownIcon },
  { id: "announcements", label: "Weekly Announcements", Icon: MegaphoneIcon },
  { id: "ban-appeals", label: "Ban Appeals", Icon: ScaleIcon },
  { id: "staff-discord", label: "Staff Discord", Icon: DiscordIcon },
  { id: "staff-commands", label: "Staff Commands", Icon: CommandBlockIcon },
  { id: "punishment-guide", label: "Punishment Guide", Icon: GavelIcon },
  { id: "ticket-handling", label: "Ticket Handling", Icon: TicketIcon },
  { id: "senior-staff-guide", label: "Senior Staff Guide", Icon: StarIcon },
];

interface SidebarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  isOpen: boolean;
}

export default function Sidebar({
  activePage,
  onNavigate,
  isOpen,
}: SidebarProps) {
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 fixed md:static z-40 top-[60px] left-0 bottom-0 transition-transform duration-300 ease-in-out flex-shrink-0 overflow-y-auto`}
      style={{
        width: "240px",
        background: "rgba(14, 14, 20, 0.95)",
        borderRight: "1px solid rgba(229, 57, 53, 0.12)",
        backdropFilter: "blur(8px)",
      }}
    >
      <nav className="py-4 px-2">
        <div className="mb-4 px-3">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(229, 57, 53, 0.6)" }}
          >
            Navigation
          </p>
        </div>
        {navItems.map((item, index) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              type="button"
              data-ocid={`sidebar.link.${index + 1}`}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-left text-sm font-medium transition-all duration-200 ${
                isActive ? "active-nav-item" : "nav-item"
              }`}
              style={{
                color: isActive ? "#e53935" : "rgba(255,255,255,0.65)",
                fontSize: "13.5px",
              }}
            >
              <span
                className="mc-icon-wrap flex-shrink-0"
                style={{
                  color: isActive ? "#e53935" : "rgba(255,255,255,0.45)",
                  transition: "color 0.2s, filter 0.2s",
                  filter: isActive
                    ? "drop-shadow(0 0 4px rgba(229,57,53,0.8))"
                    : "none",
                }}
              >
                <item.Icon size={16} />
              </span>
              <span>{item.label}</span>
              {isActive && (
                <span
                  className="ml-auto w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#e53935",
                    boxShadow: "0 0 6px #e53935",
                  }}
                />
              )}
            </button>
          );
        })}
      </nav>

      <div
        className="absolute bottom-0 left-0 right-0 p-4"
        style={{ borderTop: "1px solid rgba(229, 57, 53, 0.1)" }}
      >
        <div className="flex items-center gap-2">
          <img
            src="/assets/uploads/ChatGPT-Image-Mar-10-2026-12_18_46-AM-1.png"
            alt="RazeMC"
            className="w-7 h-7 object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div>
            <p
              className="text-xs font-bold font-outfit"
              style={{ color: "#e53935" }}
            >
              RazeMC
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Staff Portal
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
