import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function MenuIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function CloseIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function InstagramIcon(props: IconProps) {
  return <svg {...defaults} {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>;
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...defaults} viewBox="0 0 16 16" fill="currentColor" stroke="none" {...props}>
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.068 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.93 7.93 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.926-7.93a7.9 7.9 0 0 0-2.323-5.607M7.994 14.521a6.58 6.58 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.25a6.56 6.56 0 0 1-1.007-3.505c0-3.642 2.964-6.606 6.61-6.606a6.56 6.56 0 0 1 4.67 1.936 6.56 6.56 0 0 1 1.933 4.66c-.003 3.644-2.967 6.608-6.626 6.608m3.628-4.953c-.198-.099-1.175-.58-1.357-.646-.182-.065-.315-.099-.448.1-.132.197-.514.646-.63.778-.116.132-.232.148-.43.05-.198-.1-.836-.309-1.592-.984-.588-.525-.985-1.173-1.1-1.371-.116-.198-.012-.305.087-.403.09-.09.198-.232.297-.348.1-.116.132-.198.198-.33.066-.132.033-.248-.017-.347-.05-.099-.445-1.074-.61-1.47-.16-.389-.323-.336-.445-.342-.115-.005-.247-.007-.38-.007a.73.73 0 0 0-.529.248c-.182.198-.694.678-.694 1.654s.71 1.918.81 2.05c.099.132 1.397 2.132 3.383 2.992.473.204.842.326 1.129.418.474.151.906.13 1.247.079.38-.057 1.175-.48 1.34-.943.165-.462.165-.858.116-.943-.05-.083-.182-.132-.38-.23" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

export function HeartIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" /></svg>;
}

export function SelectionIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M7 3h10l3 5-8 13L4 8l3-5Z" /><path d="M4 8h16M9 3l-1 5 4 13 4-13-1-5" /></svg>;
}

export function ConversationIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A9 9 0 1 1 21 12Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" /></svg>;
}

export function LocationIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

export function ChevronIcon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m7 10 5 5 5-5" /></svg>;
}
