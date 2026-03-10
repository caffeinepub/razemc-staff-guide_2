import { useState } from "react";
import {
  CheckCircleIcon,
  EditIcon,
  LockIcon,
  PinIcon,
  SearchIcon,
  TicketIcon,
} from "../McIcons";

interface Props {
  searchQuery: string;
}

const steps = [
  {
    Icon: TicketIcon,
    step: 1,
    title: "Claim Ticket",
    desc: "Respond with /ticket claim. Introduce yourself professionally to the player.",
  },
  {
    Icon: SearchIcon,
    step: 2,
    title: "Gather Information",
    desc: "Ask for details: screenshots, player names, dates, and context of the issue.",
  },
  {
    Icon: EditIcon,
    step: 3,
    title: "Rename Ticket",
    desc: "Rename to category: [player-report], [bug-report], or [support].",
  },
  {
    Icon: CheckCircleIcon,
    step: 4,
    title: "Resolve Issue",
    desc: "Take appropriate action. Apply punishments if needed per the punishment guide.",
  },
  {
    Icon: LockIcon,
    step: 5,
    title: "Close Ticket",
    desc: "Close with a summary of actions taken. Store evidence in #proof-storage.",
  },
];

const statuses = [
  { color: "#4ade80", label: "Resolved", desc: "Issue handled successfully" },
  {
    color: "#facc15",
    label: "In Progress",
    desc: "Currently being handled by staff",
  },
  { color: "#e53935", label: "Admin Needed", desc: "Escalated to Admin+" },
  {
    color: "#60a5fa",
    label: "Manager Needed",
    desc: "Requires Senior Admin attention",
  },
];

const bestPractices = [
  "Always be professional and empathetic with players",
  "Never close a ticket without fully resolving the issue",
  "Document all punishments with evidence in #proof-storage",
  "If unsure how to handle a situation, ask a Senior Staff member",
  "Respond to tickets within 10 minutes of claiming",
  "Use appropriate ticket category names consistently",
];

export default function TicketHandling({ searchQuery: _ }: Props) {
  const [showPractices, setShowPractices] = useState(false);

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
              background: "rgba(96,165,250,0.15)",
              color: "#60a5fa",
              boxShadow: "0 0 10px rgba(96,165,250,0.3)",
            }}
          >
            <TicketIcon size={18} />
          </span>
          Ticket Handling Guide
        </h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Follow this workflow for every support ticket. Consistency and
          professionalism are key.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            key={step.step}
            data-ocid={`ticket.step.${step.step}`}
            className="glass-card rounded-xl p-5 group"
            style={{
              background: "#14141c",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              className="absolute top-3 right-3 text-4xl font-black font-outfit opacity-5"
              style={{ color: "#e53935" }}
            >
              {step.step}
            </div>
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mc-icon-box"
              style={{
                background: "rgba(229,57,53,0.1)",
                border: "1px solid rgba(229,57,53,0.2)",
                color: "#e53935",
                transition: "box-shadow 0.25s, transform 0.2s",
              }}
            >
              <step.Icon size={20} />
            </div>
            <div
              className="text-xs font-bold font-outfit mb-0.5 flex items-center gap-2"
              style={{ color: "#e53935" }}
            >
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                style={{
                  background: "rgba(229,57,53,0.2)",
                  border: "1px solid rgba(229,57,53,0.4)",
                }}
              >
                {step.step}
              </span>
              Step {step.step}
            </div>
            <h3
              className="font-bold font-outfit text-sm mb-2"
              style={{ color: "#f0f0f8" }}
            >
              {step.title}
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-5"
        style={{
          background: "#14141c",
          border: "1px solid rgba(229,57,53,0.12)",
        }}
      >
        <h2
          className="font-bold font-outfit text-sm mb-4"
          style={{ color: "#f0f0f8" }}
        >
          Ticket Status Types
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {statuses.map((s) => (
            <div
              key={s.label}
              className="rounded-lg p-3 text-center"
              style={{
                background: `${s.color}10`,
                border: `1px solid ${s.color}30`,
              }}
            >
              <div
                className="w-3 h-3 rounded-full mx-auto mb-2"
                style={{
                  background: s.color,
                  boxShadow: `0 0 8px ${s.color}`,
                }}
              />
              <p
                className="font-bold text-xs font-outfit"
                style={{ color: s.color }}
              >
                {s.label}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "#14141c",
          border: "1px solid rgba(229,57,53,0.12)",
        }}
      >
        <button
          type="button"
          onClick={() => setShowPractices(!showPractices)}
          className="w-full flex items-center justify-between px-5 py-3 text-left transition-colors hover:bg-white/5"
        >
          <span
            className="font-bold font-outfit text-sm flex items-center gap-2"
            style={{ color: "#f0f0f8" }}
          >
            <PinIcon size={14} style={{ color: "#e53935" }} />
            Best Practices
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>
            {showPractices ? "\u25bc" : "\u203a"}
          </span>
        </button>
        {showPractices && (
          <div
            className="px-5 pb-5 space-y-2"
            style={{ borderTop: "1px solid rgba(229,57,53,0.1)" }}
          >
            {bestPractices.map((bp) => (
              <div key={bp} className="flex items-start gap-2 pt-2">
                <CheckCircleIcon
                  size={14}
                  style={{ color: "#e53935", marginTop: "2px", flexShrink: 0 }}
                />
                <span
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {bp}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
