export interface NavigationItem {
  label: string;
  href: string;
}

export interface Category {
  name: string;
  image: string;
  alt: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  alt: string;
  badge?: string;
}

export interface Differential {
  title: string;
  description: string;
  icon: "heart" | "selection" | "conversation";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InstagramItem {
  image: string;
  alt: string;
  url: string;
}

export interface HeroImage {
  image: string;
  alt: string;
}

export interface SiteConfig {
  name: string;
  slogan: string;
  description: string;
  topBarMessage: string;
  instagram: { handle: string; url: string };
  whatsapp: { number: string; display: string; defaultMessage: string };
  location: {
    city: string;
    state: string;
    label: string;
    streetAddress: string;
    fullAddress: string;
  };
  business: {
    hours: string;
    hoursNote: string;
    paymentMethods: string[];
  };
  navigation: NavigationItem[];
  differentials: Differential[];
  categories: Category[];
  products: Product[];
  about: {
    title: string;
    text: string;
    highlight: string;
    image: string;
    imageAlt: string;
    secondaryImage: string;
    secondaryImageAlt: string;
  };
  instagramGallery: InstagramItem[];
  faq: FaqItem[];
  images: { hero: HeroImage[]; romper: string };
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    keywords: string[];
  };
}

export const site: SiteConfig = {
  name: "Joice Moda Modesta",
  slogan: "Elegância que veste seus valores.",
  description:
    "Vestidos e peças femininas selecionadas para unir elegância, conforto e propósito — com atendimento próximo em São José do Rio Preto.",
  topBarMessage:
    "São José do Rio Preto • Atendimento personalizado",
  instagram: {
    handle: "@joice.modamodesta",
    url: "https://www.instagram.com/joice.modamodesta/",
  },
  whatsapp: {
    number: "5517997929166",
    display: "+55 17 99792-9166",
    defaultMessage:
      "Olá! Conheci a Joice Moda Modesta pelo site e gostaria de saber mais sobre as peças.",
  },
  location: {
    city: "São José do Rio Preto",
    state: "SP",
    label: "São José do Rio Preto – SP",
    streetAddress: "Rua Accácio Pereira, 497",
    fullAddress: "Rua Accácio Pereira, 497 — São José do Rio Preto – SP",
  },
  business: {
    hours: "Das 6h às 18h",
    hoursNote: "Consulte pelo WhatsApp os dias de atendimento.",
    paymentMethods: ["Pix", "dinheiro", "cartão de crédito", "cartão de débito"],
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Coleção", href: "#colecao" },
    { label: "Romper da Manhã", href: "#romper-da-manha" },
    { label: "Sobre", href: "#sobre" },
    { label: "Dúvidas", href: "#duvidas" },
  ],
  differentials: [
    {
      title: "Elegância que acolhe",
      description: "Peças femininas que equilibram presença, discrição e conforto.",
      icon: "heart",
    },
    {
      title: "Curadoria com intenção",
      description: "Vestidos escolhidos para diferentes momentos da sua rotina.",
      icon: "selection",
    },
    {
      title: "Conversa de verdade",
      description: "Fale diretamente pelo WhatsApp e receba orientação para escolher.",
      icon: "conversation",
    },
  ],
  categories: [
    {
      name: "Chemises",
      image: "/products/dress-01.webp",
      alt: "Vestido chemise verde-menta com cinto",
    },
    {
      name: "Vestidos midi",
      image: "/products/dress-05.webp",
      alt: "Vestido midi azul royal com gola",
    },
    {
      name: "Listrados",
      image: "/products/dress-03.webp",
      alt: "Seleção de vestidos listrados e azul-marinho",
    },
    {
      name: "Cores clássicas",
      image: "/products/dress-04.webp",
      alt: "Vestido em tom caramelo com faixa na cintura",
    },
    {
      name: "Novidades",
      image: "/products/dress-06.webp",
      alt: "Vestido midi verde-oliva com gola",
    },
  ],
  products: [
    {
      id: "vestido-chemise-verde-menta",
      name: "Vestido Chemise Verde Menta",
      category: "Chemises",
      image: "/products/dress-01.webp",
      alt: "Modelo usando vestido chemise verde-menta com cinto em um jardim",
      badge: "Novidade",
    },
    {
      id: "vestido-chemise-amarelo",
      name: "Vestido Chemise Amarelo",
      category: "Chemises",
      image: "/products/dress-02.webp",
      alt: "Modelo usando vestido chemise amarelo com cinto em um jardim",
    },
    {
      id: "selecao-vestidos-listrados",
      name: "Seleção de Vestidos Listrados",
      category: "Vestidos",
      image: "/products/dress-03.webp",
      alt: "Três modelos usando vestidos listrados e azul-marinho à beira-mar",
    },
    {
      id: "vestido-midi-caramelo",
      name: "Vestido Midi Caramelo",
      category: "Vestidos midi",
      image: "/products/dress-04.webp",
      alt: "Modelo usando vestido caramelo com faixa na cintura",
    },
    {
      id: "vestido-midi-azul-royal",
      name: "Vestido Midi Azul Royal",
      category: "Vestidos midi",
      image: "/products/dress-05.webp",
      alt: "Modelo usando vestido midi azul royal com gola à beira-mar",
    },
    {
      id: "vestido-midi-verde-oliva",
      name: "Vestido Midi Verde Oliva",
      category: "Vestidos midi",
      image: "/products/dress-06.webp",
      alt: "Modelo usando vestido midi verde-oliva com gola à beira-mar",
    },
  ],
  about: {
    title: "Moda escolhida com carinho e propósito",
    text:
      "A Joice Moda Modesta nasceu para ajudar mulheres a encontrarem peças bonitas, confortáveis e elegantes, preservando sua identidade e seus valores. Cada peça é selecionada com atenção para oferecer um atendimento próximo e uma experiência especial.",
    highlight: "Uma curadoria local, feita para acolher cada escolha com atenção.",
    image: "/products/dress-04.webp",
    imageAlt: "Vestido caramelo selecionado pela Joice Moda Modesta",
    secondaryImage: "/products/dress-01.webp",
    secondaryImageAlt: "Vestido chemise verde-menta da curadoria Joice Moda Modesta",
  },
  instagramGallery: [
    {
      image: "/instagram/instagram-01.webp",
      alt: "Vestido chemise verde-menta publicado pela Joice Moda Modesta",
      url: "https://www.instagram.com/joice.modamodesta/p/DbEWhCWJs0t/",
    },
    {
      image: "/instagram/instagram-02.webp",
      alt: "Vestido chemise amarelo publicado pela Joice Moda Modesta",
      url: "https://www.instagram.com/joice.modamodesta/p/DbEWb94JXXG/",
    },
    {
      image: "/instagram/instagram-03.webp",
      alt: "Seleção de vestidos publicada pela Joice Moda Modesta",
      url: "https://www.instagram.com/joice.modamodesta/p/DbEWWvGp4_p/",
    },
    {
      image: "/instagram/instagram-04.webp",
      alt: "Vestido caramelo publicado pela Joice Moda Modesta",
      url: "https://www.instagram.com/joice.modamodesta/p/DbEWRNTpRXV/",
    },
    {
      image: "/instagram/instagram-05.webp",
      alt: "Vestido midi azul royal publicado pela Joice Moda Modesta",
      url: "https://www.instagram.com/joice.modamodesta/p/DbEWM27pUfl/",
    },
  ],
  faq: [
    {
      question: "Como faço para comprar?",
      answer:
        "Escolha uma peça da coleção e toque em “Comprar pelo WhatsApp”. A Joice continua o atendimento e confirma os detalhes disponíveis.",
    },
    {
      question: "Posso consultar tamanhos pelo WhatsApp?",
      answer:
        "Sim. Envie o nome da peça pelo WhatsApp para consultar os tamanhos disponíveis e receber atendimento personalizado.",
    },
    {
      question: "Onde fica a Joice Moda Modesta?",
      answer: "Rua Accácio Pereira, 497, em São José do Rio Preto – SP.",
    },
    {
      question: "Qual é o horário de atendimento?",
      answer:
        "O horário informado é das 6h às 18h. Consulte pelo WhatsApp os dias de atendimento.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Você pode pagar por Pix, dinheiro, cartão de crédito ou cartão de débito.",
    },
    {
      question: "A loja entrega?",
      answer:
        "Consulte pelo WhatsApp se há entrega disponível para sua região, além dos prazos e condições.",
    },
    {
      question: "Como acompanho as novidades?",
      answer:
        "Acompanhe o perfil @joice.modamodesta no Instagram ou converse conosco pelo WhatsApp.",
    },
  ],
  images: {
    hero: [
      {
        image: "/products/dress-05.webp",
        alt: "Modelo usando vestido midi azul royal com gola à beira-mar",
      },
      {
        image: "/products/dress-01.webp",
        alt: "Modelo usando vestido chemise verde-menta com cinto em um jardim",
      },
      {
        image: "/products/dress-02.webp",
        alt: "Modelo usando vestido chemise amarelo com cinto em um jardim",
      },
      {
        image: "/products/dress-04.webp",
        alt: "Modelo usando vestido caramelo com faixa na cintura",
      },
      {
        image: "/products/dress-03.webp",
        alt: "Três modelos usando vestidos listrados e azul-marinho à beira-mar",
      },
    ],
    romper: "/products/dress-06.webp",
  },
  seo: {
    title: "Joice Moda Modesta | Moda Feminina em São José do Rio Preto",
    description:
      "Moda modesta feminina com beleza, qualidade e conforto. Revendedora exclusiva Romper da Manhã em São José do Rio Preto.",
    // TODO: preencher quando o domínio público definitivo do site estiver registrado.
    canonicalUrl: "",
    keywords: [
      "moda modesta",
      "moda feminina",
      "São José do Rio Preto",
      "Romper da Manhã",
    ],
  },
};

export function createWhatsAppUrl(message = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function createProductWhatsAppUrl(productName: string) {
  return createWhatsAppUrl(
    `Olá! Vi esta peça no site da Joice Moda Modesta: ${productName}. Gostaria de comprar e saber mais.`,
  );
}

export function createCategoryWhatsAppUrl(categoryName: string) {
  return createWhatsAppUrl(
    `Olá! Vi a categoria ${categoryName} no site da Joice Moda Modesta e gostaria de conhecer as opções disponíveis.`,
  );
}

export function createMapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location.fullAddress)}`;
}
