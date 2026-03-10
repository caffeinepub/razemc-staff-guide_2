import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { CommandBlockIcon, DiscordIcon } from "../McIcons";

interface Props {
  searchQuery: string;
}

interface Command {
  cmd: string;
  type: "ingame" | "discord";
}

interface RankData {
  rank: string;
  shortRank: string;
  color: string;
  glowColor: string;
  commands: Command[];
  inherits?: string[];
  description: string;
  duties: string[];
}

const rankGroups: RankData[] = [
  {
    rank: "Helper",
    shortRank: "HELPER",
    color: "#00d4ff",
    glowColor: "rgba(0,212,255,0.35)",
    commands: [
      { cmd: "/tempmute [user] duration reason", type: "ingame" },
      { cmd: "?timeout user_id duration reason", type: "discord" },
    ],
    description:
      "Helpers are responsible for moderating in-game chat and assisting moderators with player reports and bans.",
    duties: [
      "Moderate in-game chat",
      "Mute rule breakers",
      "Assist mods with reports and evidence",
    ],
  },
  {
    rank: "Mod",
    shortRank: "MOD",
    color: "#00ff88",
    glowColor: "rgba(0,255,136,0.35)",
    commands: [
      { cmd: "/ban playername duration reason", type: "ingame" },
      { cmd: "?ban playername duration reason", type: "discord" },
    ],
    description:
      "Moderators are responsible for removing cheaters and enforcing server rules.",
    duties: [
      "Ban hackers and cheaters",
      "Enforce punishments",
      "Moderate server gameplay",
    ],
  },
  {
    rank: "Sr.Mod",
    shortRank: "SR.MOD",
    color: "#a855f7",
    glowColor: "rgba(168,85,247,0.35)",
    commands: [{ cmd: "/Axir view [playername]", type: "ingame" }],
    inherits: ["Helper", "Mod"],
    description:
      "Senior Moderators mentor staff and assist admins in managing moderation.",
    duties: [
      "Mentor new staff members",
      "Assist moderators with difficult cases",
      "Help administrators manage staff",
    ],
  },
  {
    rank: "Admin",
    shortRank: "ADMIN",
    color: "#f59e0b",
    glowColor: "rgba(245,158,11,0.35)",
    commands: [
      { cmd: "/gmc", type: "ingame" },
      { cmd: "/gmsp", type: "ingame" },
      { cmd: "/gms", type: "ingame" },
    ],
    inherits: ["Helper", "Mod", "Sr.Mod"],
    description:
      "Admins focus on server administration and assisting players, rather than basic punishments.",
    duties: [
      "Assist players with problems",
      "Manage server situations",
      "Support managers with administrative tasks",
    ],
  },
];

function CopyButton({
  cmd,
  accentColor,
}: { cmd: string; accentColor: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      data-ocid="commands.copy_button"
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy command"}
      style={{
        background: copied ? `${accentColor}22` : "rgba(255,255,255,0.05)",
        color: copied ? accentColor : "rgba(255,255,255,0.45)",
        border: `1px solid ${copied ? `${accentColor}55` : "rgba(255,255,255,0.08)"}`,
        borderRadius: "6px",
        padding: "4px 10px",
        fontSize: "11px",
        display: "flex",
        alignItems: "center",
        gap: "4px",
        cursor: "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function InGameIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 9l-2 3 2 3" />
      <path d="M16 9l2 3-2 3" />
      <path d="M13 7l-2 10" />
    </svg>
  );
}

function RankIcon({ rank }: { rank: string }) {
  if (rank === "Helper") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11 4.5-.85 8-5.75 8-11V6l-8-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    );
  }
  if (rank === "Mod") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    );
  }
  if (rank === "Sr.Mod") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  // Admin
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 18h20" />
      <path d="M4 18L2 8l5 4 5-7 5 7 5-4-2 10H4z" />
    </svg>
  );
}

function RankCard({ group }: { group: RankData }) {
  const isDiscord = (cmd: Command) => cmd.type === "discord";

  return (
    <div
      data-ocid={`commands.${group.shortRank.toLowerCase().replace(".", "")}.card`}
      style={{
        background: "rgba(20,20,28,0.85)",
        border: `1px solid ${group.color}35`,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: `0 0 0 1px ${group.color}10, 0 8px 32px ${group.color}12, 0 2px 8px rgba(0,0,0,0.4)`,
        backdropFilter: "blur(12px)",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 0 0 1px ${group.color}55, 0 12px 40px ${group.color}28, 0 2px 8px rgba(0,0,0,0.5)`;
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 0 0 1px ${group.color}10, 0 8px 32px ${group.color}12, 0 2px 8px rgba(0,0,0,0.4)`;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Card Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${group.color}18 0%, transparent 60%)`,
          borderBottom: `1px solid ${group.color}22`,
          padding: "18px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `${group.color}18`,
              color: group.color,
              boxShadow: `0 0 12px ${group.color}40`,
              border: `1px solid ${group.color}30`,
              flexShrink: 0,
            }}
          >
            <RankIcon rank={group.rank} />
          </span>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "17px",
                  color: group.color,
                  letterSpacing: "0.04em",
                  textShadow: `0 0 12px ${group.color}60`,
                }}
              >
                {group.shortRank}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "20px",
                  background: `${group.color}18`,
                  color: group.color,
                  border: `1px solid ${group.color}35`,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                }}
              >
                PERMISSIONS
              </span>
            </div>
            {group.inherits && (
              <div
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>Inherits:</span>
                {group.inherits.map((r) => (
                  <span
                    key={r}
                    style={{
                      padding: "1px 6px",
                      borderRadius: "4px",
                      background: "rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontSize: "10px",
                      fontWeight: 600,
                    }}
                  >
                    {r}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "18px 22px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {/* Commands */}
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <CommandBlockIcon
              size={12}
              style={{ color: group.color, opacity: 0.8 }}
            />
            Commands
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {group.commands.map((c) => (
              <div
                key={c.cmd}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: isDiscord(c)
                    ? "rgba(88,101,242,0.1)"
                    : "rgba(0,0,0,0.35)",
                  border: isDiscord(c)
                    ? "1px solid rgba(88,101,242,0.3)"
                    : `1px solid ${group.color}18`,
                  borderRadius: "8px",
                  padding: "8px 12px",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    padding: "2px 7px",
                    borderRadius: "4px",
                    flexShrink: 0,
                    background: isDiscord(c)
                      ? "rgba(88,101,242,0.18)"
                      : `${group.color}15`,
                    color: isDiscord(c) ? "#7289da" : group.color,
                    border: isDiscord(c)
                      ? "1px solid rgba(88,101,242,0.3)"
                      : `1px solid ${group.color}30`,
                  }}
                >
                  {isDiscord(c) ? (
                    <>
                      <DiscordIcon size={10} />
                      Discord
                    </>
                  ) : (
                    <>
                      <InGameIcon />
                      In-Game
                    </>
                  )}
                </span>
                <code
                  style={{
                    fontFamily: "'Fira Code', 'Cascadia Code', monospace",
                    fontSize: "12.5px",
                    color: isDiscord(c) ? "#a8b4ff" : group.color,
                    flex: 1,
                    letterSpacing: "0.01em",
                  }}
                >
                  {c.cmd}
                </code>
                <CopyButton
                  cmd={c.cmd}
                  accentColor={isDiscord(c) ? "#7289da" : group.color}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            Description
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {group.description}
          </p>
        </div>

        {/* Duties */}
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Main Duties
          </div>
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {group.duties.map((duty) => (
              <li
                key={duty}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: group.color,
                    boxShadow: `0 0 4px ${group.color}`,
                    flexShrink: 0,
                  }}
                />
                {duty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function StaffCommands({ searchQuery }: Props) {
  const filtered = rankGroups.filter(
    (g) =>
      !searchQuery ||
      g.rank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.commands.some((c) =>
        c.cmd.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ||
      g.duties.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1
          className="text-2xl font-bold flex items-center gap-3"
          style={{ color: "#f0f0f8", fontFamily: "'Poppins', sans-serif" }}
        >
          <span
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(192,132,252,0.15)",
              color: "#c084fc",
              boxShadow: "0 0 14px rgba(192,132,252,0.35)",
              border: "1px solid rgba(192,132,252,0.25)",
            }}
          >
            <CommandBlockIcon size={18} />
          </span>
          Staff Commands
        </h1>
        <p
          style={{
            marginTop: "6px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Official staff permissions approved by management. Each rank grants
          unique commands and inherits from lower ranks.
        </p>
      </div>

      {/* Rank cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "16px",
        }}
      >
        {filtered.map((group) => (
          <RankCard key={group.rank} group={group} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          data-ocid="commands.empty_state"
          style={{
            textAlign: "center",
            padding: "48px 24px",
            color: "rgba(255,255,255,0.3)",
            fontSize: "14px",
          }}
        >
          No commands match your search.
        </div>
      )}
    </div>
  );
}
