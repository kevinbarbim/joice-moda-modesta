import { site } from "../data/site";
import { CtaLink } from "./CtaLink";
import { ImageWithFallback } from "./ImageWithFallback";
import { InstagramIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function InstagramSection() {
  return (
    <section className="section instagram-section" aria-labelledby="instagram-title">
      <div className="container">
        <div className="instagram-section__heading" id="instagram-title" data-reveal="up">
          <SectionHeading
            eyebrow={site.instagram.handle}
            title="Inspire-se com a Joice"
            text="Acompanhe combinações, novidades e detalhes da curadoria pelo nosso perfil."
          />
          <CtaLink href={site.instagram.url} variant="outline" external icon="none">
            <InstagramIcon /> Seguir no Instagram
          </CtaLink>
        </div>
        <div className="instagram-grid" data-reveal="up">
          {site.instagramGallery.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className={`instagram-card instagram-card--${index + 1}`}
              aria-label={`Abrir Instagram: ${item.alt}`}
              key={item.image}
            >
              <ImageWithFallback src={item.image} alt={item.alt} className="instagram-card__image" />
              <span className="instagram-card__icon"><InstagramIcon /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
