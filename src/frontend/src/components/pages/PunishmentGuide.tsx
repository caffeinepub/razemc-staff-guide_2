import { useState } from "react";
import { AlertIcon, BanIcon, GavelIcon, MuteIcon, SkullIcon } from "../McIcons";

interface Props {
  searchQuery: string;
}

type PunishType = "All" | "Warning" | "Mute" | "Temp Ban" | "Permanent Ban";

const punishments = [
  {
    offense: "Spamming Chat",
    type: "Mute" as const,
    duration: "1 hour",
    evidence: "Screenshot of chat",
    notes: "Warn first for minor spam",
  },
  {
    offense: "Excessive Toxicity",
    type: "Mute" as const,
    duration: "24 hours",
    evidence: "Screenshot",
    notes: "Document repeat offenses",
  },
  {
    offense: "Harassment",
    type: "Temp Ban" as const,
    duration: "3 days",
    evidence: "Screenshots/Recording",
    notes: "Escalate to Admin",
  },
  {
    offense: "Hacking (First Offense)",
    type: "Temp Ban" as const,
    duration: "30 days",
    evidence: "Recording required",
    notes: "Screenshare first",
  },
  {
    offense: "Hacking (Second Offense)",
    type: "Permanent Ban" as const,
    duration: "Permanent",
    evidence: "Recording required",
    notes: "No appeal",
  },
  {
    offense: "Doxxing",
    type: "Permanent Ban" as const,
    duration: "Permanent",
    evidence: "Any evidence",
    notes: "Immediate perm ban",
  },
  {
    offense: "Threats/Violence",
    type: "Permanent Ban" as const,
    duration: "Permanent",
    evidence: "Screenshot/Recording",
    notes: "Report to Senior Admin",
  },
  {
    offense: "Staff Impersonation",
    type: "Temp Ban" as const,
    duration: "7 days",
    evidence: "Screenshot",
    notes: "",
  },
  {
    offense: "Advertising",
    type: "Temp Ban" as const,
    duration: "14 days",
    evidence: "Screenshot",
    notes: "",
  },
  {
    offense: "Exploiting Bugs",
    type: "Temp Ban" as const,
    duration: "7 days",
    evidence: "Recording",
    notes: "Depends on severity",
  },
  {
    offense: "Racial Slurs",
    type: "Temp Ban" as const,
    duration: "14 days",
    evidence: "Screenshot",
    notes: "Zero tolerance",
  },
  {
    offense: "Discord Spam",
    type: "Mute" as const,
    duration: "1 hour",
    evidence: "Screenshot",
    notes: "Discord mute",
  },
  {
    offense: "Minor Misconduct",
    type: "Warning" as const,
    duration: "N/A",
    evidence: "Screenshot",
    notes: "First-time minor offenses",
  },
];

type TypeCfg = { color: string; bg: string; Icon: React.FC<{ size?: number }> };
const typeConfig: Record<string, TypeCfg> = {
  Warning: { color: "#facc15", bg: "rgba(250,204,21,0.1)", Icon: AlertIcon },
  Mute: { color: "#fb923c", bg: "rgba(251,146,60,0.1)", Icon: MuteIcon },
  "Temp Ban": { color: "#e53935", bg: "rgba(229,57,53,0.1)", Icon: BanIcon },
  "Permanent Ban": {
    color: "rgba(200,200,200,0.8)",
    bg: "rgba(100,100,100,0.1)",
    Icon: SkullIcon,
  },
};

const filterOptions: PunishType[] = [
  "All",
  "Warning",
  "Mute",
  "Temp Ban",
  "Permanent Ban",
];

export default function PunishmentGuide({ searchQuery }: Props) {
  const [activeFilter, setActiveFilter] = useState<PunishType>("All");

  const filtered = punishments.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.type === activeFilter;
    const matchesSearch =
      !searchQuery ||
      p.offense.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.notes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-2xl font-bold font-outfit flex items-center gap-3"
          style={{ color: "#f0f0f8" }}
        >
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(229,57,53,0.15)",
              color: "#e53935",
              boxShadow: "0 0 10px rgba(229,57,53,0.3)",
            }}
          >
            <GavelIcon size={18} />
          </span>
          Punishment Guide
        </h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Reference this guide for all moderation actions. Always gather
          evidence before punishing.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filterOptions.map((opt) => {
          const cfg = opt !== "All" ? typeConfig[opt] : null;
          return (
            <button
              key={opt}
              type="button"
              data-ocid="punishment.filter.tab"
              onClick={() => setActiveFilter(opt)}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5"
              style={{
                background:
                  activeFilter === opt
                    ? "rgba(229,57,53,0.2)"
                    : "rgba(255,255,255,0.05)",
                color:
                  activeFilter === opt
                    ? cfg
                      ? cfg.color
                      : "#e53935"
                    : "rgba(255,255,255,0.55)",
                border: `1px solid ${activeFilter === opt ? (cfg ? `${cfg.color}60` : "rgba(229,57,53,0.4)") : "rgba(255,255,255,0.08)"}`,
              }}
            >
              {cfg && <cfg.Icon size={12} />}
              {opt}
            </button>
          );
        })}
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid rgba(229,57,53,0.12)" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: "rgba(229,57,53,0.08)" }}>
                {[
                  "Offense",
                  "Type",
                  "Duration",
                  "Evidence Required",
                  "Notes",
                ].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider"
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      borderBottom: "1px solid rgba(229,57,53,0.1)",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row) => {
                const cfg = typeConfig[row.type];
                return (
                  <tr
                    key={row.offense}
                    style={{
                      background: "#14141c",
                      borderLeft: `3px solid ${cfg.color}`,
                    }}
                  >
                    <td
                      className="px-4 py-3 text-sm font-medium"
                      style={{ color: "#f0f0f8" }}
                    >
                      {row.offense}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className="text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1 w-fit"
                        style={{
                          color: cfg.color,
                          background: cfg.bg,
                          border: `1px solid ${cfg.color}30`,
                        }}
                      >
                        <cfg.Icon size={11} />
                        {row.type}
                      </span>
                    </td>
                    <td
                      className="px-4 py-3 text-sm"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {row.duration}
                    </td>
                    <td
                      className="px-4 py-3 text-sm"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {row.evidence}
                    </td>
                    <td
                      className="px-4 py-3 text-xs"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      {row.notes}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div
            className="text-center py-8"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            No punishments matching current filter
          </div>
        )}
      </div>
    </div>
  );
}
