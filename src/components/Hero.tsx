import { useEffect, useState } from "react";
import { createWhatsAppUrl, site } from "../data/site";
import { CtaLink } from "./CtaLink";
import { ImageWithFallback } from "./ImageWithFallback";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const slides = site.images.hero;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);
    return () => mediaQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || slides.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion, slides.length]);

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Curadoria feminina • São José do Rio Preto</p>
          <h1 id="hero-title">{site.slogan}</h1>
          <p className="hero__description">{site.description}</p>
          <div className="hero__actions">
            <CtaLink href="#colecao">Conhecer a coleção</CtaLink>
            <CtaLink href={createWhatsAppUrl()} variant="outline" external icon="whatsapp">
              Falar no WhatsApp
            </CtaLink>
          </div>
          <div className="hero__seal">
            <span aria-hidden="true">JM</span>
            <p><strong>Exclusividade local</strong>Revendedora Romper da Manhã em São José do Rio Preto</p>
          </div>
        </div>

        <div className="hero__visual">
          <div
            className="hero__image-frame"
            role="region"
            aria-roledescription="carrossel"
            aria-label="Looks em destaque"
          >
            {slides.map((slide, index) => (
              <ImageWithFallback
                key={slide.image}
                src={slide.image}
                alt={index === activeSlide ? slide.alt : ""}
                className={`hero__image hero__slide${index === activeSlide ? " hero__slide--active" : ""}`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
              />
            ))}
          </div>
          <div className="hero__note" aria-hidden="true">
            <span>Joice</span>
            <p>Beleza<br />Qualidade<br />Conforto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
