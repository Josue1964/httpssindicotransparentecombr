export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
  image: string;
  wpUrl: string;
}

export const blogCategories = [
  "Gestão",
  "Legislação",
  "Manutenção",
  "Segurança",
];

// Map each post to a single primary smart category
function mapCategory(cats: string[]): string {
  const joined = cats.join(" ").toLowerCase();
  if (joined.includes("legislação") || joined.includes("norma")) return "Legislação";
  if (joined.includes("manutenção") || joined.includes("reparo")) return "Manutenção";
  if (joined.includes("segurança") || joined.includes("prevenção")) return "Segurança";
  return "Gestão";
}

export const blogPosts: BlogPost[] = [
  {
    slug: "recon-bt-light-normas-tecnicas",
    title: "Recon BT Light: normas técnicas de instalações elétricas em condomínios",
    excerpt: "A Recon BT Light é um conjunto de normas e procedimentos definidos pela concessionária Light para entrada de energia em baixa tensão. Saiba como adequar seu condomínio às exigências técnicas vigentes.",
    category: mapCategory(["Gestão Administrativa", "Legislação e Normas", "Manutenção e Reparos", "Segurança e Prevenção"]),
    date: "2026-03-11",
    readTime: "7 min",
    content: "",
    image: "https://sindicotransparente.com.br/wp-content/uploads/2025/02/PC-de-Luz-Antes-e-Depois-e1753449974922.jpg",
    wpUrl: "https://sindicotransparente.com.br/recon-bt-light-normas-tecnicas-de-instalacoes-eletricas/",
  },
  {
    slug: "direitos-deveres-zelador",
    title: "Direitos e deveres de um zelador: o que mudou em 2026?",
    excerpt: "Os direitos e deveres de um zelador vão muito além de abrir e fechar portas. Em 2026, a legislação trouxe atualizações importantes para síndicos e gestores condominiais.",
    category: mapCategory(["Gestão Administrativa", "Legislação e Normas"]),
    date: "2026-03-11",
    readTime: "6 min",
    content: "",
    image: "https://sindicotransparente.com.br/wp-content/uploads/2024/04/Zelador-Condominio.jpg",
    wpUrl: "https://sindicotransparente.com.br/direitos-e-deveres-de-um-zelador/",
  },
  {
    slug: "cores-canos-condominios",
    title: "Cores dos canos em condomínios: atualizações e normas até 2026",
    excerpt: "Manter as tubulações identificadas facilita a manutenção e diminui o risco de acidentes. Entenda a importância da identificação por cores e as normas vigentes.",
    category: mapCategory(["Manutenção e Reparos"]),
    date: "2026-03-11",
    readTime: "5 min",
    content: "",
    image: "https://sindicotransparente.com.br/wp-content/uploads/2023/06/Cores-dos-canos-Capa.jpeg",
    wpUrl: "https://sindicotransparente.com.br/cores-dos-canos-do-condominio/",
  },
  {
    slug: "corrimao-condominios-normas",
    title: "Corrimão em condomínios – últimas normas e recomendações (atualizado para 2026)",
    excerpt: "A instalação de corrimãos nas escadas e rampas das áreas comuns do condomínio deixou de ser apenas um item de conforto — é exigência legal. Confira as normas atualizadas.",
    category: mapCategory(["Legislação e Normas", "Manutenção e Reparos"]),
    date: "2026-03-11",
    readTime: "5 min",
    content: "",
    image: "https://sindicotransparente.com.br/wp-content/uploads/2021/07/Corrimao-nas-esacadas-1.jpg",
    wpUrl: "https://sindicotransparente.com.br/obrigatorio-o-corrimao-condominios/",
  },
  {
    slug: "vigia-noturno-funcoes-responsabilidades",
    title: "Atualização sobre as funções e responsabilidades do vigia noturno (2026)",
    excerpt: "Em 2026, a profissão de vigia noturno continua desempenhando um papel essencial na segurança condominial. Conheça funções, direitos e responsabilidades atualizadas.",
    category: mapCategory(["Segurança e Prevenção"]),
    date: "2026-03-11",
    readTime: "6 min",
    content: "",
    image: "https://sindicotransparente.com.br/wp-content/uploads/2024/04/Vigia.jpg",
    wpUrl: "https://sindicotransparente.com.br/vigia-noturno-funcoes-e-responsabilidades/",
  },
  {
    slug: "instalacao-ar-condicionado-condominios",
    title: "Instalação de ar‑condicionado em condomínios – atualização legislativa e técnica (2026)",
    excerpt: "Instalar ar‑condicionado em um apartamento parece simples, mas em condomínios há regras. Alterar a fachada ou colocar equipamento exige atenção à convenção e às leis.",
    category: mapCategory(["Legislação e Normas", "Manutenção e Reparos"]),
    date: "2026-03-11",
    readTime: "7 min",
    content: "",
    image: "https://sindicotransparente.com.br/wp-content/uploads/2021/07/Ar-condicionado-capa.jpg",
    wpUrl: "https://sindicotransparente.com.br/lei-sobre-instalacao-de-ar-condicionado/",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
