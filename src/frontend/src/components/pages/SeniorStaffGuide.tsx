import { useState } from "react";
import {
  AlertIcon,
  BarChartIcon,
  BoxIcon,
  CrownIcon,
  GraduationCapIcon,
  StarIcon,
} from "../McIcons";

interface Props {
  searchQuery: string;
}

const responsibilities = [
  {
    Icon: CrownIcon,
    iconColor: "#f5c518",
    title: "Leadership",
    desc: "Set the example for all staff. Maintain the highest standards of professionalism and fairness. Your behavior shapes the team culture.",
  },
  {
    Icon: GraduationCapIcon,
    iconColor: "#60a5fa",
    title: "Mentoring",
    desc: "Actively mentor Helpers and Mods with weekly check-ins. Review their moderation cases and provide constructive feedback.",
  },
  {
    Icon: AlertIcon,
    iconColor: "#e53935",
    title: "Escalation Handling",
    desc: "Handle complex situations escalated from lower-ranking staff. You have the authority and responsibility to make difficult calls.",
  },
  {
    Icon: BarChartIcon,
    iconColor: "#c084fc",
    title: "Staff Evaluation",
    desc: "Conduct monthly performance evaluations for all staff under your supervision. Submit reports to Senior Admin by end of month.",
  },
];

const invRestoreRules = [
  "Inventory restores are ONLY approved for server-related bugs or glitches",
  "Player error and personal mistakes do NOT qualify for restoration",
  "Video evidence of the inventory loss is mandatory",
  "Submit restore request to Senior Admin with full evidence attached",
  "Items lost more than 48 hours ago cannot be restored",
  "Duped or illegitimately obtained items are never restored",
];

const exclusivePerms = [
  { perm: "/promote <player> <rank>", desc: "Promote staff members" },
  { perm: "/demote <player> <rank>", desc: "Demote staff members" },
  { perm: "/op <player>", desc: "Grant operator status" },
  { perm: "/deop <player>", desc: "Remove operator status" },
  { perm: "/wipe <player>", desc: "Wipe player data (extreme caution)" },
  { perm: "Staff Evaluations", desc: "Monthly performance reports" },
  { perm: "Ban Appeal Finality", desc: "Final decision on contested appeals" },
  { perm: "#senior-lounge Access", desc: "Leadership discussions channel" },
];

export default function SeniorStaffGuide({ searchQuery: _ }: Props) {
  const [showInvRules, setShowInvRules] = useState(false);

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
              background: "rgba(245,197,24,0.15)",
              color: "#f5c518",
              boxShadow: "0 0 10px rgba(245,197,24,0.3)",
            }}
          >
            <StarIcon size={18} />
          </span>
          Senior Staff Guide
        </h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Responsibilities and exclusive guidelines for Senior Mod, Admin, and
          Senior Admin staff.
        </p>
      </div>

      <div
        className="rounded-xl p-4 flex items-center gap-3"
        style={{
          background: "rgba(245,197,24,0.08)",
          border: "1px solid rgba(245,197,24,0.3)",
        }}
      >
        <span
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{
            background: "rgba(245,197,24,0.15)",
            color: "#f5c518",
            boxShadow: "0 0 8px rgba(245,197,24,0.3)",
          }}
        >
          <StarIcon size={20} />
        </span>
        <div>
          <p
            className="text-sm font-bold font-outfit"
            style={{ color: "#f5c518" }}
          >
            Senior Staff Only
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            This guide applies to Senior Mod and above. Keep all information in
            this section confidential.
          </p>
        </div>
      </div>

      <div>
        <h2
          className="text-sm font-bold font-outfit mb-3 uppercase tracking-wider"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Core Responsibilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {responsibilities.map((r) => (
            <div
              key={r.title}
              className="glass-card rounded-xl p-5 group"
              style={{ background: "#14141c" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mc-icon-box"
                style={{
                  background: `${r.iconColor}15`,
                  color: r.iconColor,
                  border: `1px solid ${r.iconColor}25`,
                  transition: "box-shadow 0.25s, transform 0.2s",
                }}
              >
                <r.Icon size={20} />
              </div>
              <h3
                className="font-bold font-outfit text-sm mb-2"
                style={{ color: "#f5c518" }}
              >
                {r.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "rgba(229,57,53,0.04)",
          border: "1px solid rgba(229,57,53,0.25)",
        }}
      >
        <button
          type="button"
          onClick={() => setShowInvRules(!showInvRules)}
          className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors hover:bg-white/5"
        >
          <div className="flex items-center gap-2">
            <BoxIcon size={16} style={{ color: "#e53935" }} />
            <span
              className="font-bold font-outfit text-sm"
              style={{ color: "#e53935" }}
            >
              Inventory Restore Rules
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(229,57,53,0.15)",
                color: "#e53935",
                border: "1px solid rgba(229,57,53,0.3)",
              }}
            >
              Important
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>
            {showInvRules ? "\u25bc" : "\u203a"}
          </span>
        </button>
        {showInvRules && (
          <div
            className="px-5 pb-5 space-y-2"
            style={{ borderTop: "1px solid rgba(229,57,53,0.15)" }}
          >
            {invRestoreRules.map((rule, i) => (
              <div key={rule} className="flex items-start gap-2 pt-2">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0"
                  style={{
                    background: "rgba(229,57,53,0.15)",
                    color: "#e53935",
                    border: "1px solid rgba(229,57,53,0.3)",
                  }}
                >
                  {i + 1}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {rule}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "#14141c",
          border: "1px solid rgba(245,197,24,0.2)",
        }}
      >
        <div
          className="px-5 py-3"
          style={{
            background: "rgba(245,197,24,0.06)",
            borderBottom: "1px solid rgba(245,197,24,0.15)",
          }}
        >
          <h2
            className="font-bold font-outfit text-sm flex items-center gap-2"
            style={{ color: "#f5c518" }}
          >
            <StarIcon size={14} style={{ color: "#f5c518" }} />
            Exclusive Permissions
          </h2>
        </div>
        <div
          className="divide-y"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          {exclusivePerms.map((p) => (
            <div
              key={p.perm}
              className="flex items-center justify-between px-5 py-3"
            >
              <code
                className="font-mono text-sm"
                style={{ color: "#f5c518", fontSize: "13px" }}
              >
                {p.perm}
              </code>
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {p.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
