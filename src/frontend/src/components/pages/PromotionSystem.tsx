import { CrownIcon } from "../McIcons";

interface Props {
  searchQuery: string;
}

const ranks = [
  {
    id: "helper",
    name: "Helper",
    color: "#4ade80",
    perms: ["Basic moderation tools", "/tp", "/report", "/helpop"],
    reqs: "New staff member. Learn server rules and handle basic tickets.",
  },
  {
    id: "mod",
    name: "Mod",
    color: "#60a5fa",
    perms: [
      "/mute",
      "/unmute",
      "/kick",
      "/warn",
      "/history",
      "Chat moderation",
    ],
    reqs: "Proven track record as Helper. Minimum 2 weeks service.",
  },
  {
    id: "seniormod",
    name: "Senior Mod",
    color: "#c084fc",
    perms: [
      "/tempban",
      "/unban",
      "/freeze",
      "/screenshare",
      "/clearchat",
      "Ticket oversight",
    ],
    reqs: "Minimum 1 month as Mod. Active mentor to Helpers.",
  },
  {
    id: "admin",
    name: "Admin",
    color: "#e53935",
    perms: [
      "/ban",
      "/ipban",
      "/invsee",
      "/give",
      "Handle appeals",
      "Manage staff roster",
    ],
    reqs: "Minimum 2 months as Senior Mod. Full appeal authority.",
  },
  {
    id: "senioradmin",
    name: "Senior Admin",
    color: "#f5c518",
    perms: [
      "/promote",
      "/demote",
      "/op",
      "/deop",
      "/wipe",
      "Staff evaluations",
      "Final decisions",
    ],
    reqs: "Minimum 3 months as Admin. Leadership and staff management role.",
  },
];

const timelines = [
  {
    from: "Helper",
    to: "Mod",
    time: "2 Weeks",
    fromColor: "#4ade80",
    toColor: "#60a5fa",
  },
  {
    from: "Mod",
    to: "Senior Mod",
    time: "1 Month",
    fromColor: "#60a5fa",
    toColor: "#c084fc",
  },
  {
    from: "Senior Mod",
    to: "Admin",
    time: "2 Months",
    fromColor: "#c084fc",
    toColor: "#e53935",
  },
  {
    from: "Admin",
    to: "Senior Admin",
    time: "3 Months",
    fromColor: "#e53935",
    toColor: "#f5c518",
  },
];

// Roman numeral rank level indicators
const rankRomans = ["I", "II", "III", "IV", "V"];

export default function PromotionSystem({ searchQuery }: Props) {
  const filteredRanks = ranks.filter(
    (r) =>
      !searchQuery ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.reqs.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-8">
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
            <CrownIcon size={18} />
          </span>
          Promotion System
        </h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Staff progression path and minimum time requirements for each
          promotion.
        </p>
      </div>

      <div
        className="rounded-xl p-6"
        style={{
          background: "#14141c",
          border: "1px solid rgba(229,57,53,0.12)",
        }}
      >
        <h2
          className="text-sm font-bold font-outfit mb-6 uppercase tracking-wider"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Promotion Timeline
        </h2>
        <div className="overflow-x-auto">
          <div className="flex items-center gap-0 min-w-max">
            {ranks.map((rank, i) => (
              <div key={rank.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold font-outfit"
                    style={{
                      background: `${rank.color}20`,
                      border: `2px solid ${rank.color}`,
                      boxShadow: `0 0 12px ${rank.color}40`,
                      color: rank.color,
                      fontSize: "14px",
                    }}
                  >
                    {rankRomans[i]}
                  </div>
                  <span
                    className="mt-2 text-xs font-bold font-outfit"
                    style={{ color: rank.color }}
                  >
                    {rank.name}
                  </span>
                </div>
                {i < ranks.length - 1 && (
                  <div className="flex flex-col items-center px-3">
                    <div
                      className="w-16 h-px"
                      style={{
                        background: `linear-gradient(90deg, ${timelines[i].fromColor}, ${timelines[i].toColor})`,
                      }}
                    />
                    <span
                      className="mt-1 text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        color: timelines[i].toColor,
                        background: `${timelines[i].toColor}15`,
                        border: `1px solid ${timelines[i].toColor}30`,
                        fontSize: "10px",
                      }}
                    >
                      {timelines[i].time}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRanks.map((rank) => (
          <div
            key={rank.id}
            className="glass-card rounded-xl p-5"
            style={{
              background: "#14141c",
              borderLeft: `3px solid ${rank.color}`,
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold font-outfit text-sm"
                style={{
                  background: `${rank.color}20`,
                  border: `1px solid ${rank.color}50`,
                  color: rank.color,
                  boxShadow: `0 0 8px ${rank.color}30`,
                }}
              >
                <CrownIcon size={15} />
              </div>
              <h3
                className="font-bold font-outfit"
                style={{ color: rank.color }}
              >
                {rank.name}
              </h3>
            </div>
            <p
              className="text-xs mb-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {rank.reqs}
            </p>
            <div className="space-y-1">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Permissions
              </p>
              {rank.perms.map((perm) => (
                <div key={perm} className="flex items-center gap-2">
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ background: rank.color }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {perm}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
