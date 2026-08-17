import { createMapsUrl, site } from "../data/site";
import { ImageWithFallback } from "./ImageWithFallback";
import { LocationIcon } from "./Icons";

export function AboutSection() {
  return (
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__content" data-reveal="up">
          <p className="eyebrow">Sobre a Joice</p>
          <h2 id="about-title">{site.about.title}</h2>
          <p className="about__text">{site.about.text}</p>
          <p className="about__highlight">{site.about.highlight}</p>
          <a className="about__location" href={createMapsUrl()} target="_blank" rel="noreferrer noopener">
            <LocationIcon /> {site.location.label}
          </a>
          <div className="about__signature" aria-hidden="true">
            <span>Joice</span>
            <span>Moda • propósito • proximidade</span>
          </div>
        </div>
        <div className="about__visual" data-reveal="up">
          <div className="about__offset" aria-hidden="true" />
          <ImageWithFallback src={site.about.image} alt={site.about.imageAlt} className="about__image" />
          <ImageWithFallback
            src={site.about.secondaryImage}
            alt={site.about.secondaryImageAlt}
            className="about__image-secondary"
          />
          <p className="about__visual-note"><span>Curadoria local</span>Elegância em cada escolha</p>
        </div>
      </div>
    </section>
  );
}
