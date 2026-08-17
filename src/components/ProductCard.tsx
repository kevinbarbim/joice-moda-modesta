import type { Product } from "../data/site";
import { createProductWhatsAppUrl } from "../data/site";
import { CtaLink } from "./CtaLink";
import { ImageWithFallback } from "./ImageWithFallback";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <ImageWithFallback src={product.image} alt={product.alt} className="product-card__image" />
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
      </div>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3>{product.name}</h3>
        <CtaLink
          href={createProductWhatsAppUrl(product.name)}
          variant="text"
          external
          icon="arrow"
          className="product-card__link"
        >
          Comprar pelo WhatsApp
        </CtaLink>
      </div>
    </article>
  );
}
