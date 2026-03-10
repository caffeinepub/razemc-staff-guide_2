import { useState } from "react";
import {
  BanIcon,
  CheckCircleIcon,
  ClockIcon,
  CrownIcon,
  EyeIcon,
  FileTextIcon,
  LockIcon,
  MegaphoneIcon,
  ScaleIcon,
  SearchIcon,
} from "../McIcons";

interface Props {
  searchQuery: string;
}

const appealRules = [
  "Appeals must be submitted via the Discord ticket system",
  "Appeals are reviewed within 72 hours of submission",
  "Evidence must be provided by the appealing player",
  "False or spam appeals may result in extended punishment",
  "Punishments are NOT reduced — only overturned if wrongfully issued",
  "Players banned for exploiting or doxxing are not eligible for appeals",
];

const flowSteps = [
  { Icon: FileTextIcon, label: "Player Submits", desc: "Via Discord ticket" },
  { Icon: EyeIcon, label: "Admin Reviews", desc: "Admin+ assigned" },
  {
    Icon: SearchIcon,
    label: "Check Evidence",
    desc: "Original evidence verified",
  },
  { Icon: ScaleIcon, label: "Decision Made", desc: "Upheld or overturned" },
  {
    Icon: MegaphoneIcon,
    label: "Player Notified",
    desc: "Result communicated",
  },
  { Icon: LockIcon, label: "Appeal Closed", desc: "Ticket archived" },
];

const infoCards = [
  {
    Icon: CrownIcon,
    title: "Who Handles Appeals",
    desc: "Admin+ only. Mods and Senior Mods may not process ban appeals.",
    color: "#e53935",
  },
  {
    Icon: BanIcon,
    title: "No Reduction Policy",
    desc: "Punishments are NEVER reduced. Appeals either upheld or fully overturned.",
    color: "#fb923c",
  },
  {
    Icon: ClockIcon,
    title: "Response Time",
    desc: "All appeals receive a response within 72 hours of submission.",
    color: "#f5c518",
  },
];

export default function BanAppeals({ searchQuery: _ }: Props) {
  const [openRule, setOpenRule] = useState<number | null>(null);

  return (
    <div className="space-y-6" data-ocid="appeals.panel">
      <div>
        <h1
          className="text-2xl font-bold font-outfit flex items-center gap-3"
          style={{ color: "#f0f0f8" }}
        >
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(96,165,250,0.15)",
              color: "#60a5fa",
              boxShadow: "0 0 10px rgba(96,165,250,0.3)",
            }}
          >
            <ScaleIcon size={18} />
          </span>
          Ban Appeals
        </h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          All appeals are handled by Admin+ staff only. Read all guidelines
          before processing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {infoCards.map((card) => (
          <div
            key={card.title}
            className="glass-card rounded-xl p-4 group"
            style={{
              background: "#14141c",
              border: `1px solid ${card.color}25`,
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mc-icon-box"
              style={{
                background: `${card.color}15`,
                color: card.color,
                border: `1px solid ${card.color}25`,
                transition: "box-shadow 0.25s, transform 0.2s",
              }}
            >
              <card.Icon size={20} />
            </div>
            <h3
              className="font-bold font-outfit text-sm mb-1"
              style={{ color: card.color }}
            >
              {card.title}
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-6"
        style={{
          background: "#14141c",
          border: "1px solid rgba(229,57,53,0.12)",
        }}
      >
        <h2
          className="text-sm font-bold font-outfit mb-5 uppercase tracking-wider"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Appeal Process Flow
        </h2>
        <div className="overflow-x-auto">
          <div className="flex items-start gap-2 min-w-max">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center w-20">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                    style={{
                      background: "rgba(229,57,53,0.1)",
                      border: "1px solid rgba(229,57,53,0.25)",
                      color: "#e53935",
                    }}
                  >
                    <step.Icon size={22} />
                  </div>
                  <p
                    className="text-xs font-bold text-center font-outfit"
                    style={{ color: "#f0f0f8" }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="text-xs text-center mt-0.5"
                    style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}
                  >
                    {step.desc}
                  </p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex items-center justify-center w-8 mb-6">
                    <span
                      style={{ color: "rgba(229,57,53,0.6)", fontSize: "18px" }}
                    >
                      &#8250;
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "#14141c",
          border: "1px solid rgba(229,57,53,0.12)",
        }}
      >
        <div
          className="px-5 py-3"
          style={{
            background: "rgba(229,57,53,0.06)",
            borderBottom: "1px solid rgba(229,57,53,0.1)",
          }}
        >
          <h2
            className="font-bold font-outfit text-sm flex items-center gap-2"
            style={{ color: "#f0f0f8" }}
          >
            <FileTextIcon size={14} style={{ color: "#e53935" }} />
            Appeal Rules
          </h2>
        </div>
        <div className="p-2">
          {appealRules.map((rule, i) => (
            <button
              key={rule}
              type="button"
              onClick={() => setOpenRule(openRule === i ? null : i)}
              className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all hover:bg-white/5"
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
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
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {rule}
              </span>
              <span
                className="ml-auto"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {openRule === i ? "\u25bc" : "\u203a"}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
