import { createMapsUrl, createWhatsAppUrl, site } from "../data/site";
import { BrandMark } from "./BrandMark";
import { InstagramIcon, LocationIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-column">
          <a href="#inicio" aria-label={`${site.name} — voltar ao início`}><BrandMark light /></a>
          <p>Moda modesta com beleza, qualidade e conforto, escolhida com carinho em São José do Rio Preto.</p>
        </div>

        <div className="footer__column">
          <h2>Navegação</h2>
          <nav aria-label="Navegação do rodapé">
            {site.navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
        </div>

        <div className="footer__column">
          <h2>Fale conosco</h2>
          <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer noopener"><WhatsAppIcon /> {site.whatsapp.display}</a>
          <a href={site.instagram.url} target="_blank" rel="noreferrer noopener"><InstagramIcon /> {site.instagram.handle}</a>
          <a className="footer__location" href={createMapsUrl()} target="_blank" rel="noreferrer noopener"><LocationIcon /> {site.location.label}</a>
        </div>

        <div className="footer__column">
          <h2>Informações da loja</h2>
          <a href={createMapsUrl()} target="_blank" rel="noreferrer noopener">{site.location.fullAddress}</a>
          <p>{site.business.hours}</p>
          <p>{site.business.hoursNote}</p>
          <p>Pagamentos: {site.business.paymentMethods.join(", ")}.</p>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
        <p>Elegância e virtude.</p>
      </div>
    </footer>
  );
}
