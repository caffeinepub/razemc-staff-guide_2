import { MegaphoneIcon, PinIcon, UserIcon } from "../McIcons";

interface Props {
  searchQuery: string;
}

const announcements = [
  {
    id: 1,
    date: "March 8, 2026",
    title: "New Punishment Guidelines Update",
    author: "ShadowAdmin",
    authorRank: "Senior Admin",
    content:
      "Effective immediately, all Mod+ staff are required to screenshare suspected hackers before issuing a ban. The evidence must include at minimum a 30-second recording showing the violation. Please review the updated Punishment Guide section for full details.",
    tags: ["Important", "Policy Update"],
  },
  {
    id: 2,
    date: "March 1, 2026",
    title: "Staff Meeting — Saturday March 7th",
    author: "VoidDirector",
    authorRank: "Senior Admin",
    content:
      "All staff are required to attend the monthly meeting this Saturday at 6PM EST in the Staff Voice channel. Agenda includes: Performance reviews, Q2 planning, and new ticket system rollout. Submit questions beforehand in #staff-chat.",
    tags: ["Meeting", "Mandatory"],
  },
  {
    id: 3,
    date: "February 22, 2026",
    title: "Inactivity Notice Policy Reminder",
    author: "CrimsonMod",
    authorRank: "Admin",
    content:
      "Reminder that all inactivity notices must be posted in #inactivity-notice at least 24 hours in advance. Notices submitted after the fact will not be accepted. Two consecutive weeks of unexcused absence will result in automatic demotion.",
    tags: ["Reminder", "Policy"],
  },
];

export default function Announcements({ searchQuery }: Props) {
  const filtered = announcements.filter(
    (a) =>
      !searchQuery ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.content.toLowerCase().includes(searchQuery.toLowerCase()),
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
              background: "rgba(245,197,24,0.15)",
              color: "#f5c518",
              boxShadow: "0 0 10px rgba(245,197,24,0.3)",
            }}
          >
            <MegaphoneIcon size={18} />
          </span>
          Weekly Announcements
        </h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Announcements are posted in Staff Discord weekly. Check #announcements
          regularly.
        </p>
      </div>

      <div
        className="rounded-xl p-4 flex items-center gap-3"
        style={{
          background: "rgba(245,197,24,0.08)",
          border: "1px solid rgba(245,197,24,0.25)",
        }}
      >
        <PinIcon size={18} style={{ color: "#f5c518", flexShrink: 0 }} />
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
          These are example announcements. Live announcements are posted in the{" "}
          <strong style={{ color: "#f5c518" }}>#announcements</strong> channel
          of the Staff Discord.
        </p>
      </div>

      {filtered.length === 0 && (
        <div
          className="text-center py-12"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          No announcements matching "{searchQuery}"
        </div>
      )}

      <div className="space-y-4">
        {filtered.map((a) => (
          <div
            key={a.id}
            className="rounded-xl overflow-hidden"
            style={{
              background: "#14141c",
              border: "1px solid rgba(229,57,53,0.1)",
            }}
          >
            <div
              className="px-5 py-3 flex items-center justify-between"
              style={{
                background: "rgba(229,57,53,0.06)",
                borderBottom: "1px solid rgba(229,57,53,0.1)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-sm font-bold font-outfit"
                  style={{ color: "#f0f0f8" }}
                >
                  {a.title}
                </span>
                <div className="flex gap-1">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(229,57,53,0.15)",
                        color: "#e53935",
                        border: "1px solid rgba(229,57,53,0.25)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {a.date}
              </span>
            </div>
            <div className="px-5 py-4">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {a.content}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(229,57,53,0.2)",
                    color: "#e53935",
                  }}
                >
                  <UserIcon size={13} />
                </div>
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Posted by{" "}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "#f5c518" }}
                >
                  {a.author}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(245,197,24,0.1)",
                    color: "#f5c518",
                    border: "1px solid rgba(245,197,24,0.25)",
                  }}
                >
                  {a.authorRank}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
