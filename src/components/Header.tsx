import { useEffect, useRef, useState } from "react";
import { createWhatsAppUrl, site } from "../data/site";
import { BrandMark } from "./BrandMark";
import { CtaLink } from "./CtaLink";
import { CloseIcon, InstagramIcon, MenuIcon } from "./Icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstMobileLink = useRef<HTMLAnchorElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = menuButton.current;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstMobileLink.current?.focus(), 120);

    const panel = document.querySelector<HTMLElement>("#menu-mobile");
    const focusableElements = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
      : [];

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeydown);
      trigger?.focus();
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <p>{site.topBarMessage}</p>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="site-header__brand" href="#inicio" aria-label={`${site.name} — início`}>
            <BrandMark />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              className="icon-link icon-link--desktop"
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Abrir Instagram da Joice Moda Modesta"
            >
              <InstagramIcon />
            </a>
            <CtaLink
              className="header-whatsapp"
              href={createWhatsAppUrl()}
              external
              icon="whatsapp"
            >
              Falar no WhatsApp
            </CtaLink>
            <button
              ref={menuButton}
              className="menu-button"
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <button className="mobile-menu__backdrop" type="button" onClick={closeMenu} tabIndex={-1} aria-label="Fechar menu" />
        <aside className="mobile-menu__panel" id="menu-mobile" role="dialog" aria-modal="true" aria-label="Menu mobile">
          <div className="mobile-menu__header">
            <BrandMark />
            <button className="icon-link" type="button" onClick={closeMenu} aria-label="Fechar menu">
              <CloseIcon />
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Navegação mobile">
            {site.navigation.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstMobileLink : undefined}
                href={item.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                <span>0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu__footer">
            <CtaLink href={createWhatsAppUrl()} external icon="whatsapp">
              Falar no WhatsApp
            </CtaLink>
            <a href={site.instagram.url} target="_blank" rel="noreferrer noopener">
              <InstagramIcon /> {site.instagram.handle}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
