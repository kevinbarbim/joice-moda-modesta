import { createWhatsAppUrl } from "../data/site";
import { CtaLink } from "./CtaLink";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__line" aria-hidden="true" />
      <div className="container final-cta__inner" data-reveal="up">
        <div>
          <p className="eyebrow eyebrow--light">Atendimento próximo</p>
          <h2 id="final-cta-title">Encontre o look que combina com você.</h2>
        </div>
        <div className="final-cta__action">
          <p>Fale conosco e receba um atendimento personalizado para escolher suas próximas peças.</p>
          <CtaLink href={createWhatsAppUrl()} variant="light" external icon="whatsapp">
            Conversar pelo WhatsApp
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
