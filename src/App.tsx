import { useEffect } from "react";
import {
  AboutSection,
  CategoriesSection,
  CollectionSection,
  DifferentialsSection,
  FaqSection,
  FinalCta,
  FloatingWhatsApp,
  Footer,
  Header,
  Hero,
  InstagramSection,
  RomperSection,
} from "./components";
import { site } from "./data/site";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  useEffect(() => {
    const canonical = document.querySelector<HTMLLinkElement>("#canonical-url");

    if (canonical && site.seo.canonicalUrl) canonical.href = site.seo.canonicalUrl;

    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ClothingStore",
      name: site.name,
      description: site.description,
      ...(site.seo.canonicalUrl ? { url: site.seo.canonicalUrl } : {}),
      telephone: site.whatsapp.display,
      sameAs: [site.instagram.url],
      paymentAccepted: site.business.paymentMethods.join(", "),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.location.streetAddress,
        addressLocality: site.location.city,
        addressRegion: site.location.state,
        addressCountry: "BR",
      },
    });
    document.head.appendChild(structuredData);

    return () => structuredData.remove();
  }, []);

  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <DifferentialsSection />
        <CollectionSection />
        <CategoriesSection />
        <RomperSection />
        <AboutSection />
        <InstagramSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
