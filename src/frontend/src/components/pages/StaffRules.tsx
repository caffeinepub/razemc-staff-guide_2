import {
  BarChartIcon,
  ClockIcon,
  DiscordIcon,
  EyeIcon,
  LockIcon,
  MegaphoneIcon,
  ScaleIcon,
  ShieldIcon,
} from "../McIcons";

interface Props {
  searchQuery: string;
}

const rules = [
  {
    Icon: ShieldIcon,
    iconColor: "#e53935",
    title: "Professionalism",
    severity: "High",
    desc: "Always represent RazeMC professionally. No arguing in public channels. Maintain composure at all times. Your behavior reflects the entire team.",
  },
  {
    Icon: EyeIcon,
    iconColor: "#fb923c",
    title: "Evidence Requirements",
    severity: "Critical",
    desc: "All punishments require sufficient evidence. Screenshots/recordings must be clear, unedited, and properly timestamped before taking action.",
  },
  {
    Icon: ClockIcon,
    iconColor: "#facc15",
    title: "AFK Limits",
    severity: "Medium",
    desc: "You may not be AFK for more than 15 minutes while on duty. Log off if unavailable to avoid ghosting players who need assistance.",
  },
  {
    Icon: LockIcon,
    iconColor: "#e53935",
    title: "Staff Confidentiality",
    severity: "Critical",
    desc: "Never share staff discussions, punishments, or internal information with non-staff members. Breaching confidentiality results in immediate demotion.",
  },
  {
    Icon: ScaleIcon,
    iconColor: "#60a5fa",
    title: "Fair Play",
    severity: "High",
    desc: "Staff members may not abuse permissions for personal gain. All players must be treated equally regardless of rank, donations, or personal relationships.",
  },
  {
    Icon: DiscordIcon,
    iconColor: "#7289da",
    title: "Discord Requirements",
    severity: "Medium",
    desc: "You must be in the Staff Discord at all times. Check announcements daily. Enable notifications for staff channels during your duty hours.",
  },
  {
    Icon: MegaphoneIcon,
    iconColor: "#fb923c",
    title: "Reporting Duty",
    severity: "High",
    desc: "Report any rule-breaking by staff members to Senior Staff immediately. Failing to report misconduct makes you complicit in the violation.",
  },
  {
    Icon: BarChartIcon,
    iconColor: "#4ade80",
    title: "Activity Requirements",
    severity: "Medium",
    desc: "Minimum 10 hours of playtime per week unless an inactivity notice is submitted. Consistent inactivity without notice results in demotion.",
  },
];

const severityConfig: Record<
  string,
  { color: string; bg: string; border: string }
> = {
  Critical: {
    color: "#e53935",
    bg: "rgba(229,57,53,0.15)",
    border: "rgba(229,57,53,0.4)",
  },
  High: {
    color: "#fb923c",
    bg: "rgba(251,146,60,0.15)",
    border: "rgba(251,146,60,0.4)",
  },
  Medium: {
    color: "#facc15",
    bg: "rgba(250,204,21,0.15)",
    border: "rgba(250,204,21,0.4)",
  },
  Low: {
    color: "#4ade80",
    bg: "rgba(74,222,128,0.15)",
    border: "rgba(74,222,128,0.4)",
  },
};

export default function StaffRules({ searchQuery }: Props) {
  const filtered = rules.filter(
    (r) =>
      !searchQuery ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.desc.toLowerCase().includes(searchQuery.toLowerCase()),
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
              background: "rgba(229,57,53,0.15)",
              color: "#e53935",
              boxShadow: "0 0 10px rgba(229,57,53,0.3)",
            }}
          >
            <ShieldIcon size={18} />
          </span>
          Staff Rules
        </h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          All staff must abide by these rules at all times. Violations may
          result in demotion or removal.
        </p>
      </div>

      {filtered.length === 0 && (
        <div
          className="text-center py-12"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          No rules matching "{searchQuery}"
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((rule) => {
          const sev = severityConfig[rule.severity];
          return (
            <div
              key={rule.title}
              className="glass-card rounded-xl p-5 group"
              style={{
                background: "#14141c",
                borderLeft: `3px solid ${sev.color}`,
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center mc-icon-box"
                    style={{
                      background: `${rule.iconColor}15`,
                      color: rule.iconColor,
                      border: `1px solid ${rule.iconColor}25`,
                      transition: "box-shadow 0.25s, transform 0.2s",
                    }}
                  >
                    <rule.Icon size={16} />
                  </span>
                  <h3
                    className="font-bold font-outfit text-sm"
                    style={{ color: "#f0f0f8" }}
                  >
                    {rule.title}
                  </h3>
                </div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full shrink-0"
                  style={{
                    color: sev.color,
                    background: sev.bg,
                    border: `1px solid ${sev.border}`,
                  }}
                >
                  {rule.severity}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {rule.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
