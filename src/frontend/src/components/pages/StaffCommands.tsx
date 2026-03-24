import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { CommandBlockIcon } from "../McIcons";

interface Props {
  searchQuery: string;
}

interface CommandCategory {
  label: string;
  icon: string;
  commands: string[];
}

interface RankData {
  rank: string;
  shortRank: string;
  color: string;
  emoji: string;
  categories: CommandCategory[];
  description: string;
}

const rankGroups: RankData[] = [
  {
    rank: "Manager",
    shortRank: "MANAGER",
    color: "#ffd700",
    emoji: "👑",
    description:
      "Highest staff rank with full server administration and permission management.",
    categories: [
      {
        label: "Punishment",
        icon: "🔨",
        commands: [
          "/ban - Ban player permanently",
          "/tempban - Temporary ban",
          "/unban - Unban player",
          "/unban own - Remove your own ban",
          "/mute - Mute player",
          "/tempmute - Temporary mute",
          "/unmute - Unmute player",
          "/unmute own - Remove your own mute",
          "/warn - Warn player",
          "/unwarn - Remove warning",
        ],
      },
      {
        label: "Records",
        icon: "📊",
        commands: [
          "/warnlist - View warnings",
          "/banlist - View bans",
          "/checkban - Check ban info",
          "/checkmute - Check mute info",
          "/checkwarn - Check warnings",
          "/dupeip - Check alt accounts",
        ],
      },
      {
        label: "Utility",
        icon: "🧰",
        commands: [
          "/endersee - View ender chest",
          "/staffchat - Staff chat",
          "/playtime - Check playtime",
          "/selfplaytime - Your playtime",
        ],
      },
      {
        label: "Admin",
        icon: "⚙️",
        commands: [
          "/vaultadmin - Vault admin panel",
          "/lp group - Manage groups",
          "/lp user parent set - Set rank",
          "/lp user parent clear - Remove rank",
          "/lp user clear - Reset permissions",
          "/gmc /gms /gmsp /gma - Change gamemode",
        ],
      },
      {
        label: "Economy",
        icon: "💰",
        commands: [
          "/shop /shops /sell /sell all /sell hand /sell hand all /sellmore",
        ],
      },
    ],
  },
  {
    rank: "Admin",
    shortRank: "ADMIN",
    color: "#f59e0b",
    emoji: "🛡",
    description:
      "Server administrators with full moderation and admin panel access.",
    categories: [
      {
        label: "Punishment",
        icon: "🔨",
        commands: [
          "/ban /tempban /unban /unban own",
          "/kick",
          "/mute /tempmute /unmute /unmute own",
          "/warn /unwarn",
        ],
      },
      {
        label: "Records",
        icon: "📊",
        commands: [
          "/warnlist /banlist",
          "/checkban /checkmute /checkwarn",
          "/dupeip",
        ],
      },
      {
        label: "Utility",
        icon: "🧰",
        commands: [
          "/endersee /endersee edit",
          "/invsee",
          "/vanish",
          "/staffchat",
          "/playtime /selfplaytime",
        ],
      },
      {
        label: "Admin",
        icon: "⚙️",
        commands: ["/vaultadmin", "/gmc /gms /gmsp /gma"],
      },
      {
        label: "Economy",
        icon: "💰",
        commands: [
          "/shop /shops /sell /sell all /sell hand /sell hand all /sellmore",
        ],
      },
    ],
  },
  {
    rank: "Senior Moderator",
    shortRank: "SR. MOD",
    color: "#a855f7",
    emoji: "⚔",
    description:
      "Senior Moderators with extended moderation powers and vault access.",
    categories: [
      {
        label: "Punishment",
        icon: "🔨",
        commands: [
          "/tempban /unban /unban own",
          "/mute /tempmute /unmute /unmute own",
          "/warn",
        ],
      },
      {
        label: "Records",
        icon: "📊",
        commands: [
          "/warnlist /banlist",
          "/checkban /checkmute /checkwarn",
          "/dupeip",
        ],
      },
      {
        label: "Utility",
        icon: "🧰",
        commands: ["/endersee", "/staffchat", "/playtime /selfplaytime"],
      },
      {
        label: "Extra",
        icon: "⚙️",
        commands: [
          "/vaultadmin",
          "/fancyglow gui /fancyglow disable",
          "/fastcrystals use /fastercrystals toggle",
        ],
      },
      {
        label: "Economy",
        icon: "💰",
        commands: [
          "/shop /shops /sell /sell all /sell hand /sell hand all /sellmore",
        ],
      },
    ],
  },
  {
    rank: "Moderator",
    shortRank: "MOD",
    color: "#22c55e",
    emoji: "🟢",
    description:
      "Moderators enforcing server rules with ban and mute permissions.",
    categories: [
      {
        label: "Punishment",
        icon: "🔨",
        commands: [
          "/ban /ipban /tempban /unban",
          "/mute /tempmute /unmute",
          "/warn",
        ],
      },
      {
        label: "Records",
        icon: "📊",
        commands: ["/warnlist /banlist", "/checkban /checkmute /checkwarn"],
      },
      {
        label: "Utility",
        icon: "🧰",
        commands: ["/staffchat", "/playtime /selfplaytime"],
      },
      {
        label: "Extra",
        icon: "⚙️",
        commands: [
          "/fancyglow gui /fancyglow disable",
          "/fastcrystals use /fastercrystals toggle",
        ],
      },
      {
        label: "Economy",
        icon: "💰",
        commands: [
          "/shop /shops /sell /sell all /sell hand /sell hand all /sellmore",
        ],
      },
    ],
  },
  {
    rank: "Junior Moderator",
    shortRank: "JR. MOD",
    color: "#3b82f6",
    emoji: "🔵",
    description:
      "Junior Moderators with foundational ban, mute, and kick access.",
    categories: [
      {
        label: "Punishment",
        icon: "🔨",
        commands: [
          "/ban /tempban /unban /kick",
          "/mute /tempmute /unmute",
          "/warn",
        ],
      },
      {
        label: "Records",
        icon: "📊",
        commands: [
          "/warnlist /banlist",
          "/checkban /checkmute /checkwarn",
          "/dupeip",
        ],
      },
      {
        label: "Utility",
        icon: "🧰",
        commands: ["/warp", "/staffchat", "/playtime /selfplaytime"],
      },
      {
        label: "Extra",
        icon: "⚙️",
        commands: ["/fancyglow gui /fancyglow disable"],
      },
      {
        label: "Economy",
        icon: "💰",
        commands: [
          "/shop /shops /sell /sell all /sell hand /sell hand all /sellmore",
        ],
      },
    ],
  },
  {
    rank: "Helper",
    shortRank: "HELPER",
    color: "#a78bfa",
    emoji: "🟣",
    description:
      "Helpers supporting players and moderating chat with mute access.",
    categories: [
      {
        label: "Utility",
        icon: "🧰",
        commands: ["/tpaccept /tpacancel /tpahere /tptoggle", "/warp"],
      },
      {
        label: "Punishment",
        icon: "🔨",
        commands: ["/mute /tempmute", "/warn"],
      },
      {
        label: "Records",
        icon: "📊",
        commands: ["/warnlist /checkmute /checkwarn /mutelist"],
      },
      {
        label: "Economy",
        icon: "💰",
        commands: [
          "/shop /shops /sell /sell all /sell hand /sell hand all /sellmore",
        ],
      },
      {
        label: "Extra",
        icon: "⚙️",
        commands: [
          "/fancyglow gui /fancyglow disable",
          "/staffchat",
          "/playtime /selfplaytime",
        ],
      },
    ],
  },
  {
    rank: "Trainee",
    shortRank: "TRAINEE",
    color: "#67e8f9",
    emoji: "🧪",
    description:
      "Trainees learning the ropes with basic mute, warn, and utility access.",
    categories: [
      {
        label: "Utility",
        icon: "🧰",
        commands: [
          "/spawn /sethome /renamehome",
          "/tpa /tpaccept /tpacancel /tpahere /tptoggle",
          "/warp /paytoggle",
        ],
      },
      {
        label: "Punishment",
        icon: "🔨",
        commands: ["/mute /tempmute", "/warn"],
      },
      {
        label: "Records",
        icon: "📊",
        commands: ["/checkmute /checkwarn /banlist"],
      },
      {
        label: "Economy",
        icon: "💰",
        commands: [
          "/shop /shops /sell /sell all /sell hand /sell hand all /sellmore",
        ],
      },
      {
        label: "Extra",
        icon: "⚙️",
        commands: [
          "/fancyglow gui /fancyglow disable",
          "/staffchat",
          "/playtime /selfplaytime",
        ],
      },
    ],
  },
];

function CopyButton({
  cmd,
  accentColor,
}: { cmd: string; accentColor: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(cmd.split(" - ")[0]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy"}
      style={{
        background: copied ? `${accentColor}22` : "rgba(255,255,255,0.05)",
        color: copied ? accentColor : "rgba(255,255,255,0.4)",
        border: `1px solid ${copied ? `${accentColor}55` : "rgba(255,255,255,0.08)"}`,
        borderRadius: "5px",
        padding: "3px 8px",
        fontSize: "10px",
        display: "flex",
        alignItems: "center",
        gap: "3px",
        cursor: "pointer",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {copied ? <Check size={10} /> : <Copy size={10} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function CategoryBlock({
  cat,
  color,
}: { cat: CommandCategory; color: string }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        style={{
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: color,
          opacity: 0.75,
          marginBottom: "5px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <span aria-hidden="true">{cat.icon}</span>
        {cat.label}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {cat.commands.map((cmd) => {
          const [cmdPart, descPart] = cmd.includes(" - ")
            ? cmd.split(/ - (.+)/)
            : [cmd, ""];
          return (
            <div
              key={cmd}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,0,0,0.3)",
                border: `1px solid ${color}15`,
                borderRadius: "7px",
                padding: "6px 10px",
              }}
            >
              <code
                style={{
                  fontFamily: "'Fira Code', 'Cascadia Code', monospace",
                  fontSize: "12px",
                  color: color,
                  flex: 1,
                  lineHeight: "1.4",
                }}
              >
                {cmdPart}
                {descPart && (
                  <span
                    style={{
                      color: "rgba(255,255,255,0.38)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "11px",
                      marginLeft: "6px",
                    }}
                  >
                    — {descPart}
                  </span>
                )}
              </code>
              <CopyButton cmd={cmdPart} accentColor={color} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RankCard({ group }: { group: RankData }) {
  const [open, setOpen] = useState(true);
  return (
    <div
      style={{
        background: "rgba(20,20,28,0.9)",
        border: `1px solid ${group.color}30`,
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: `0 0 0 1px ${group.color}10, 0 8px 32px ${group.color}10`,
        backdropFilter: "blur(12px)",
        transition: "box-shadow 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 0 0 1px ${group.color}45, 0 12px 40px ${group.color}22`;
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 0 0 1px ${group.color}10, 0 8px 32px ${group.color}10`;
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: `linear-gradient(135deg, ${group.color}14 0%, transparent 60%)`,
          borderBottom: open ? `1px solid ${group.color}20` : "none",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          border: "none",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `${group.color}18`,
              color: group.color,
              boxShadow: `0 0 14px ${group.color}35`,
              border: `1px solid ${group.color}30`,
              fontSize: "18px",
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            {group.emoji}
          </span>
          <div>
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                color: group.color,
                letterSpacing: "0.05em",
                textShadow: `0 0 12px ${group.color}55`,
              }}
            >
              {group.shortRank}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.4)",
                marginTop: "1px",
              }}
            >
              {group.description}
            </div>
          </div>
        </div>
        <span
          style={{
            color: group.color,
            opacity: 0.6,
            fontSize: "16px",
            transition: "transform 0.2s",
            transform: open ? "rotate(0deg)" : "rotate(-90deg)",
            flexShrink: 0,
          }}
        >
          ▾
        </span>
      </button>

      {/* Body */}
      {open && (
        <div style={{ padding: "16px 20px" }}>
          {group.categories.map((cat) => (
            <CategoryBlock key={cat.label} cat={cat} color={group.color} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function StaffCommands({ searchQuery }: Props) {
  const filtered = rankGroups.filter(
    (g) =>
      !searchQuery ||
      g.rank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.shortRank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.categories.some((cat) =>
        cat.commands.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      ),
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
          Official command permissions for each staff rank. Click a rank card to
          expand or collapse its commands.
        </p>
      </div>

      {/* Rank cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {filtered.map((group) => (
          <RankCard key={group.rank} group={group} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div
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
