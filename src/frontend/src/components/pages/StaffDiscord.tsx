import {
  AlertIcon,
  BoxIcon,
  DiscordIcon,
  GavelIcon,
  HashIcon,
  LockIcon,
  MegaphoneIcon,
  ShieldIcon,
  StarIcon,
} from "../McIcons";

interface Props {
  searchQuery: string;
}

type Channel = {
  Icon: React.FC<{ size?: number }>;
  name: string;
  desc: string;
  access: string;
  accessColor: string;
};

const channels: Channel[] = [
  {
    Icon: MegaphoneIcon,
    name: "#announcements",
    desc: "Weekly staff updates and server news. Read-only channel for all staff members.",
    access: "All Staff",
    accessColor: "#4ade80",
  },
  {
    Icon: HashIcon,
    name: "#staff-chat",
    desc: "General staff discussion and coordination. Primary communication channel.",
    access: "All Staff",
    accessColor: "#4ade80",
  },
  {
    Icon: LockIcon,
    name: "#admin-chat",
    desc: "Admin+ private discussions for sensitive matters and staff decisions.",
    access: "Admin+",
    accessColor: "#e53935",
  },
  {
    Icon: GavelIcon,
    name: "#ban-requests",
    desc: "Submit ban requests with evidence attached. Mod+ may request Admin bans here.",
    access: "Mod+",
    accessColor: "#60a5fa",
  },
  {
    Icon: BoxIcon,
    name: "#proof-storage",
    desc: "Upload and store all punishment evidence. Required for all moderation actions.",
    access: "All Staff",
    accessColor: "#4ade80",
  },
  {
    Icon: ShieldIcon,
    name: "#inactivity-notice",
    desc: "Submit inactivity or Leave of Absence notices. Must be filed 24hrs in advance.",
    access: "All Staff",
    accessColor: "#4ade80",
  },
  {
    Icon: AlertIcon,
    name: "#staff-reports",
    desc: "Report staff misconduct. All reports reviewed by Senior Admin confidentially.",
    access: "All Staff",
    accessColor: "#4ade80",
  },
  {
    Icon: StarIcon,
    name: "#senior-lounge",
    desc: "Senior Staff only discussions. Leadership decisions and staff evaluations.",
    access: "Senior Mod+",
    accessColor: "#f5c518",
  },
];

export default function StaffDiscord({ searchQuery }: Props) {
  const filtered = channels.filter(
    (c) =>
      !searchQuery ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
              background: "rgba(114,137,218,0.15)",
              color: "#7289da",
              boxShadow: "0 0 10px rgba(114,137,218,0.3)",
            }}
          >
            <DiscordIcon size={18} />
          </span>
          Staff Discord
        </h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          You must be in the Staff Discord server at all times. Here are the key
          channels and their purposes.
        </p>
      </div>

      <div
        className="rounded-xl p-4 flex items-center gap-3"
        style={{
          background: "rgba(88,101,242,0.08)",
          border: "1px solid rgba(88,101,242,0.25)",
        }}
      >
        <span
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "rgba(114,137,218,0.2)", color: "#7289da" }}
        >
          <DiscordIcon size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold" style={{ color: "#f0f0f8" }}>
            Join the Staff Discord
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            You will receive an invite link when promoted. Contact Senior Admin
            if not received.
          </p>
        </div>
      </div>

      {filtered.length === 0 && (
        <div
          className="text-center py-12"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          No channels matching "{searchQuery}"
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((ch) => (
          <div
            key={ch.name}
            className="glass-card rounded-xl p-4 group"
            style={{ background: "#14141c" }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center mc-icon-box"
                  style={{
                    background: "rgba(114,137,218,0.12)",
                    color: "#7289da",
                    border: "1px solid rgba(114,137,218,0.2)",
                    transition: "box-shadow 0.25s, transform 0.2s",
                  }}
                >
                  <ch.Icon size={15} />
                </span>
                <span
                  className="font-bold font-mono text-sm"
                  style={{ color: "#a78bfa" }}
                >
                  {ch.name}
                </span>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full shrink-0"
                style={{
                  color: ch.accessColor,
                  background: `${ch.accessColor}15`,
                  border: `1px solid ${ch.accessColor}30`,
                }}
              >
                {ch.access}
              </span>
            </div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              {ch.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
