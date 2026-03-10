// Custom Minecraft-themed SVG icon components
// All icons follow: minimal, glowing, dark-theme compatible, Minecraft inspired

import type React from "react";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

// Shared base for consistent styling
const base = (size: number): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": "true" as const,
  focusable: "false" as const,
});

export function HomeIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.5z"
        stroke="currentColor"
      />
      <path d="M9 21V12h6v9" stroke="currentColor" />
    </svg>
  );
}

export function ShieldIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11 4.5-.85 8-5.75 8-11V6l-8-4z"
        stroke="currentColor"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" />
    </svg>
  );
}

export function CrownIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M2 18h20" stroke="currentColor" />
      <path d="M4 18L2 8l5 4 5-7 5 7 5-4-2 10H4z" stroke="currentColor" />
    </svg>
  );
}

export function CommandBlockIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
      <path d="M8 9l-2 3 2 3" stroke="currentColor" />
      <path d="M16 9l2 3-2 3" stroke="currentColor" />
      <path d="M13 7l-2 10" stroke="currentColor" />
    </svg>
  );
}

export function GavelIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M14 2l8 8-2.5 2.5-8-8L14 2z" stroke="currentColor" />
      <path
        d="M10.5 8.5l-7 7a2 2 0 0 0 0 2.83l.17.17a2 2 0 0 0 2.83 0l7-7"
        stroke="currentColor"
      />
      <path d="M4 20h4" stroke="currentColor" />
    </svg>
  );
}

export function TicketIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2z"
        stroke="currentColor"
      />
      <path
        d="M9 9h.01M9 12h.01M9 15h.01"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function DiscordIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export function ScaleIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M12 3v18" stroke="currentColor" />
      <path d="M3 6h18" stroke="currentColor" />
      <path d="M5 6L3 12h4L5 6z" stroke="currentColor" />
      <path d="M19 6l2 6h-4l2-6z" stroke="currentColor" />
      <path d="M9 21h6" stroke="currentColor" />
    </svg>
  );
}

export function MegaphoneIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M3 11v2a6 6 0 0 0 6 6h1" stroke="currentColor" />
      <path d="M11 5H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h5" stroke="currentColor" />
      <path d="M11 5l9-2v14l-9-2" stroke="currentColor" />
      <circle cx="20" cy="12" r="0" stroke="currentColor" />
    </svg>
  );
}

export function StarIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        stroke="currentColor"
      />
    </svg>
  );
}

export function SwordIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M14.5 17.5L3 6V3h3l11.5 11.5" stroke="currentColor" />
      <path d="M13 19l6-6" stroke="currentColor" />
      <path d="M16 16l4 4" stroke="currentColor" />
      <path d="M19 21l2-2" stroke="currentColor" />
    </svg>
  );
}

export function EyeIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" />
    </svg>
  );
}

export function LockIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <rect
        x="3"
        y="11"
        width="18"
        height="11"
        rx="2"
        ry="2"
        stroke="currentColor"
      />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" />
    </svg>
  );
}

export function ClockIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <path d="M12 6v6l4 2" stroke="currentColor" />
    </svg>
  );
}

export function AlertIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        stroke="currentColor"
      />
      <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" />
      <line
        x1="12"
        y1="17"
        x2="12.01"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function MuteIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" />
      <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" />
      <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" />
    </svg>
  );
}

export function BanIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="currentColor" />
    </svg>
  );
}

export function SkullIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M12 2a8 8 0 0 0-8 8c0 3 1.6 5.5 4 7v3h8v-3c2.4-1.5 4-4 4-7a8 8 0 0 0-8-8z"
        stroke="currentColor"
      />
      <line x1="9" y1="17" x2="9" y2="21" stroke="currentColor" />
      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" />
      <line x1="15" y1="17" x2="15" y2="21" stroke="currentColor" />
      <circle cx="9" cy="11" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="11" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckCircleIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" />
    </svg>
  );
}

export function SearchIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <circle cx="11" cy="11" r="8" stroke="currentColor" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" />
    </svg>
  );
}

export function EditIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
        stroke="currentColor"
      />
      <path
        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function UsersIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke="currentColor"
      />
      <circle cx="9" cy="7" r="4" stroke="currentColor" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" />
    </svg>
  );
}

export function GraduationCapIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" stroke="currentColor" />
    </svg>
  );
}

export function BarChartIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" />
      <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" />
      <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" />
    </svg>
  );
}

export function BoxIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
        stroke="currentColor"
      />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" />
      <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" />
    </svg>
  );
}

export function HashIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" />
      <line x1="4" y1="15" x2="20" y2="15" stroke="currentColor" />
      <line x1="10" y1="3" x2="8" y2="21" stroke="currentColor" />
      <line x1="16" y1="3" x2="14" y2="21" stroke="currentColor" />
    </svg>
  );
}

export function PinIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" />
      <path
        d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17z"
        stroke="currentColor"
      />
    </svg>
  );
}

export function UserIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        stroke="currentColor"
      />
      <circle cx="12" cy="7" r="4" stroke="currentColor" />
    </svg>
  );
}

export function TrendUpIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" />
      <polyline points="17 6 23 6 23 12" stroke="currentColor" />
    </svg>
  );
}

export function FileTextIcon({ size = 20, ...p }: IconProps) {
  return (
    <svg {...base(size)} {...p}>
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
      />
      <polyline points="14 2 14 8 20 8" stroke="currentColor" />
      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" />
      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" />
      <polyline points="10 9 9 9 8 9" stroke="currentColor" />
    </svg>
  );
}
