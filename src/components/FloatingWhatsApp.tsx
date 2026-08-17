import { useEffect, useState } from "react";
import { createWhatsAppUrl } from "../data/site";
import { WhatsAppIcon } from "./Icons";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const updateVisibility = () => {
      if (!hero) return;
      setVisible(hero.getBoundingClientRect().bottom < window.innerHeight * 0.7);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <a
      className={`floating-whatsapp${visible ? " floating-whatsapp--visible" : ""}`}
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Falar com a Joice pelo WhatsApp"
    >
      <WhatsAppIcon />
      <span>Falar com a Joice</span>
    </a>
  );
}
