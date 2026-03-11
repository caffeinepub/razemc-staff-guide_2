import { Upload } from "lucide-react";
import { useRef } from "react";
import type { PageId } from "../../App";
import {
  AlertIcon,
  BarChartIcon,
  CommandBlockIcon,
  CrownIcon,
  FileTextIcon,
  GavelIcon,
  ScaleIcon,
  ShieldIcon,
  TicketIcon,
} from "../McIcons";

interface Props {
  navigate: (page: PageId) => void;
  searchQuery: string;
  logoSrc: string | null;
  onLogoUpload: (src: string) => void;
}

const quickCards = [
  {
    id: 1,
    Icon: ShieldIcon,
    iconColor: "#e53935",
    title: "Staff Guidelines",
    desc: "Core rules every staff member must follow.",
    page: "staff-rules" as PageId,
  },
  {
    id: 2,
    Icon: GavelIcon,
    iconColor: "#fb923c",
    title: "Punishment System",
    desc: "Comprehensive offense and punishment guide.",
    page: "punishment-guide" as PageId,
  },
  {
    id: 3,
    Icon: TicketIcon,
    iconColor: "#60a5fa",
    title: "Ticket System",
    desc: "Step-by-step ticket handling workflow.",
    page: "ticket-handling" as PageId,
  },
  {
    id: 4,
    Icon: CommandBlockIcon,
    iconColor: "#c084fc",
    title: "Staff Commands",
    desc: "All commands organized by staff rank.",
    page: "staff-commands" as PageId,
  },
  {
    id: 5,
    Icon: ScaleIcon,
    iconColor: "#4ade80",
    title: "Ban Appeals",
    desc: "How to handle and review ban appeals.",
    page: "ban-appeals" as PageId,
  },
  {
    id: 6,
    Icon: CrownIcon,
    iconColor: "#f5c518",
    title: "Promotion System",
    desc: "Requirements and timeline for promotions.",
    page: "promotion-system" as PageId,
  },
];

const statsData = [
  {
    Icon: FileTextIcon,
    label: "Staff Rules",
    value: "8 Core Rules",
    color: "#e53935",
  },
  {
    Icon: AlertIcon,
    label: "Commands Available",
    value: "25+ Commands",
    color: "#f5c518",
  },
  {
    Icon: BarChartIcon,
    label: "Punishment Types",
    value: "12 Offenses",
    color: "#60a5fa",
  },
];

const defaultLogo =
  "/assets/uploads/ChatGPT-Image-Mar-10-2026-12_18_46-AM-1-1.png";

export default function Introduction({
  navigate,
  logoSrc,
  onLogoUpload,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      if (result) onLogoUpload(result);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <div className="space-y-8">
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f0505 0%, #1a0808 40%, #0d0d1a 70%, #0b0b10 100%)",
          border: "1px solid rgba(229, 57, 53, 0.25)",
          boxShadow: "0 0 40px rgba(229, 57, 53, 0.08)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background:
                  i % 2 === 0
                    ? "rgba(229, 57, 53, 0.6)"
                    : "rgba(245, 197, 24, 0.5)",
                left: `${10 + i * 12}%`,
                bottom: "0",
                animation: `particle-float ${3 + i * 0.7}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
        <div
          className="absolute top-0 right-0 w-48 h-48 rounded-bl-full opacity-10"
          style={{
            background: "radial-gradient(circle, #e53935 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 text-center py-12 px-6">
          {/* Big logo with upload on hover */}
          <div className="inline-block mb-4 relative group">
            <div
              className="p-1 rounded-2xl animate-pulse-glow"
              style={{
                background: "rgba(229, 57, 53, 0.1)",
                border: "1px solid rgba(229, 57, 53, 0.3)",
              }}
            >
              <img
                src={logoSrc || defaultLogo}
                alt="RazeMC Logo"
                className="w-20 h-20 object-contain animate-float"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                  const parent = img.parentElement;
                  if (parent) {
                    parent.style.width = "80px";
                    parent.style.height = "80px";
                    parent.style.display = "flex";
                    parent.style.alignItems = "center";
                    parent.style.justifyContent = "center";
                    parent.innerHTML =
                      '<span style="color:#e53935;font-weight:900;font-size:36px;font-family:Outfit,sans-serif">R</span>';
                  }
                }}
              />
            </div>
            {/* Upload overlay on hover */}
            <button
              type="button"
              data-ocid="welcome.logo.upload_button"
              title="Upload custom logo"
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              style={{
                background: "rgba(11,11,16,0.75)",
                border: "1px solid rgba(229,57,53,0.6)",
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <Upload size={18} color="#e53935" />
                <span
                  style={{
                    color: "#e53935",
                    fontSize: "10px",
                    fontWeight: 600,
                  }}
                >
                  Upload
                </span>
              </div>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold font-outfit mb-3"
            style={{
              color: "#f0f0f8",
              textShadow: "0 0 30px rgba(229, 57, 53, 0.4)",
            }}
          >
            Welcome to the <span style={{ color: "#e53935" }}>RazeMC</span>{" "}
            Staff Team
          </h1>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            You've been trusted with the responsibility of maintaining our
            community.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <span
              className="px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2"
              style={{
                background: "rgba(229, 57, 53, 0.15)",
                border: "1px solid rgba(229, 57, 53, 0.3)",
                color: "#e53935",
              }}
            >
              <ShieldIcon size={13} />
              Staff Portal
            </span>
            <span
              className="px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2"
              style={{
                background: "rgba(245, 197, 24, 0.1)",
                border: "1px solid rgba(245, 197, 24, 0.3)",
                color: "#f5c518",
              }}
            >
              <CrownIcon size={13} />
              Updated 2026
            </span>
          </div>
        </div>
      </div>

      <div>
        <h2
          className="text-lg font-bold font-outfit mb-4"
          style={{ color: "#f0f0f8" }}
        >
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickCards.map((card) => (
            <button
              key={card.id}
              type="button"
              data-ocid={`dashboard.card.${card.id}`}
              onClick={() => navigate(card.page)}
              className="glass-card rounded-xl p-5 text-left group cursor-pointer"
              style={{ background: "#14141c" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mc-icon-box"
                style={{
                  background: `${card.iconColor}15`,
                  border: `1px solid ${card.iconColor}30`,
                  color: card.iconColor,
                  transition: "box-shadow 0.25s, transform 0.2s",
                }}
              >
                <card.Icon size={20} />
              </div>
              <h3
                className="font-bold font-outfit text-base mb-1 group-hover:text-razeRed transition-colors"
                style={{ color: "#f0f0f8" }}
              >
                {card.title}
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                {card.desc}
              </p>
              <div
                className="mt-3 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: card.iconColor }}
              >
                View section →
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statsData.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-4 flex items-center gap-3"
            style={{
              background: "#14141c",
              border: `1px solid ${stat.color}20`,
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: `${stat.color}15`, color: stat.color }}
            >
              <stat.Icon size={20} />
            </div>
            <div>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                {stat.label}
              </p>
              <p
                className="font-bold font-outfit text-sm"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
