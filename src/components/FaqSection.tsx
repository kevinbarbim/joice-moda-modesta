import { createWhatsAppUrl, site } from "../data/site";
import { ChevronIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <section className="section faq" id="duvidas" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div id="faq-title" data-reveal="up">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Antes de escolher sua próxima peça"
            text="Informações diretas para tornar seu atendimento mais simples."
          />
          <p className="faq__note">
            Não encontrou a resposta? <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer noopener">Fale com a Joice pelo WhatsApp.</a>
          </p>
        </div>
        <div className="faq__list" data-reveal="up">
          {site.faq.map((item, index) => (
            <details className="faq-item" open={index === 0} key={item.question}>
              <summary>
                <span className="faq-item__number">0{index + 1}</span>
                <span>{item.question}</span>
                <ChevronIcon />
              </summary>
              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
