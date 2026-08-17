import { site } from "../data/site";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";

export function CollectionSection() {
  return (
    <section className="section collection" id="colecao" aria-labelledby="collection-title">
      <div className="container">
        <div className="collection__heading-row">
          <div id="collection-title">
            <SectionHeading
              eyebrow="Curadoria em destaque"
              title="Escolhas da Joice"
              text="Uma seleção inicial para você conhecer o estilo da nossa curadoria. Consulte detalhes e disponibilidade pelo WhatsApp."
            />
          </div>
          <p className="collection__aside">Peças para vestir bem<br />sem abrir mão de quem você é.</p>
        </div>
        <div className="product-grid" data-reveal="up">
          {site.products.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </div>
    </section>
  );
}
