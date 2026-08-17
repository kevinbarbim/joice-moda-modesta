import { createCategoryWhatsAppUrl, site } from "../data/site";
import { ArrowIcon } from "./Icons";
import { ImageWithFallback } from "./ImageWithFallback";
import { SectionHeading } from "./SectionHeading";

export function CategoriesSection() {
  return (
    <section className="section categories" aria-labelledby="categories-title">
      <div className="container">
        <div id="categories-title">
          <SectionHeading
            eyebrow="Encontre seu estilo"
            title="Explore por categoria"
            text="Escolha uma inspiração e fale com a Joice para conhecer as opções disponíveis."
          />
        </div>
        <div className="category-grid" data-reveal="up">
          {site.categories.map((category, index) => (
            <a
              className="category-card"
              href={createCategoryWhatsAppUrl(category.name)}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Consultar ${category.name} pelo WhatsApp`}
              key={category.name}
            >
              <ImageWithFallback src={category.image} alt={category.alt} className="category-card__image" />
              <span className="category-card__overlay" aria-hidden="true" />
              <span className="category-card__number">0{index + 1}</span>
              <span className="category-card__title">{category.name}</span>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
