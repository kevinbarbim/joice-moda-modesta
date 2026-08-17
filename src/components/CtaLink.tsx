import type { ReactNode } from "react";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "text";
  external?: boolean;
  icon?: "whatsapp" | "arrow" | "none";
  className?: string;
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  external = false,
  icon = "arrow",
  className = "",
}: CtaLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <a className={`button button--${variant} ${className}`.trim()} href={href} {...externalProps}>
      <span>{children}</span>
      {icon === "whatsapp" && <WhatsAppIcon className="button__icon button__icon--whatsapp" />}
      {icon === "arrow" && <ArrowIcon className="button__icon button__icon--arrow" />}
    </a>
  );
}
