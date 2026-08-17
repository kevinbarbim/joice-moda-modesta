import { createWhatsAppUrl, site } from "../data/site";
import { CtaLink } from "./CtaLink";
import { ImageWithFallback } from "./ImageWithFallback";

export function RomperSection() {
  return (
    <section className="romper" id="romper-da-manha" aria-labelledby="romper-title">
      <div className="container romper__grid">
        <div className="romper__image-column" data-reveal="up">
          <div className="romper__image-frame">
            <ImageWithFallback
              src={site.images.romper}
              alt="Modelo usando vestido midi verde-oliva com gola à beira-mar"
              className="romper__image"
            />
          </div>
          <p>Seleção exclusiva<br />em São José do Rio Preto</p>
        </div>
        <div className="romper__content" data-reveal="up">
          <p className="eyebrow eyebrow--light">Exclusividade local</p>
          <h2 id="romper-title">Romper da Manhã em São José do Rio Preto</h2>
          <p>
            Encontre na Joice Moda Modesta uma seleção exclusiva da Romper da Manhã,
            com peças que unem feminilidade, elegância, qualidade e conforto.
          </p>
          <CtaLink href={createWhatsAppUrl("Olá! Gostaria de conhecer as peças da Romper da Manhã disponíveis na Joice Moda Modesta.")} variant="light" external>
            Conhecer as peças
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
