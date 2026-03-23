export interface BlogCategory {
  slug: string;
  title: string;
  description: string;
  wpUrl: string;
  postCount: number;
}

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

export const blogCategories: BlogCategory[] = [
  {
    slug: "gestao-condominial",
    title: "Gestão Condominial",
    description: "Boas práticas, ferramentas e estratégias para uma administração eficiente do condomínio.",
    wpUrl: "https://sindicotransparente.com.br/category/gestao-condominial/",
    postCount: 24,
  },
  {
    slug: "sindico-profissional",
    title: "Síndico Profissional",
    description: "Tudo sobre a atuação, responsabilidades e carreira do síndico profissional.",
    wpUrl: "https://sindicotransparente.com.br/category/sindico-profissional/",
    postCount: 18,
  },
  {
    slug: "cotacoes-contratacoes",
    title: "Cotações e Contratações",
    description: "Orientações para contratar fornecedores com transparência e economia.",
    wpUrl: "https://sindicotransparente.com.br/category/cotacoes-e-contratacoes/",
    postCount: 12,
  },
  {
    slug: "obras-reformas",
    title: "Obras e Reformas",
    description: "Planejamento, legislação e acompanhamento de obras em áreas comuns e privativas.",
    wpUrl: "https://sindicotransparente.com.br/category/obras-e-reformas/",
    postCount: 15,
  },
  {
    slug: "manutencao-predial",
    title: "Manutenção Predial",
    description: "Manutenções preventivas e corretivas essenciais para a conservação do edifício.",
    wpUrl: "https://sindicotransparente.com.br/category/manutencao-predial/",
    postCount: 21,
  },
  {
    slug: "problemas-condominios",
    title: "Problemas em Condomínios",
    description: "Soluções para os conflitos e desafios mais comuns da vida condominial.",
    wpUrl: "https://sindicotransparente.com.br/category/problemas-em-condominios/",
    postCount: 16,
  },
  {
    slug: "documentacao-legislacao",
    title: "Documentação e Legislação",
    description: "Normas, leis e documentos essenciais para a regularidade do condomínio.",
    wpUrl: "https://sindicotransparente.com.br/category/documentacao-e-legislacao/",
    postCount: 19,
  },
  {
    slug: "seguranca-condominios",
    title: "Segurança em Condomínios",
    description: "Tecnologias, procedimentos e boas práticas para proteger moradores e patrimônio.",
    wpUrl: "https://sindicotransparente.com.br/category/seguranca-em-condominios/",
    postCount: 14,
  },
  {
    slug: "economia-condominios",
    title: "Economia em Condomínios",
    description: "Dicas e estratégias para reduzir custos sem perder qualidade nos serviços.",
    wpUrl: "https://sindicotransparente.com.br/category/economia-em-condominios/",
    postCount: 10,
  },
  {
    slug: "condominios-rio-de-janeiro",
    title: "Condomínios no Rio de Janeiro",
    description: "Conteúdo específico para a realidade condominial do Rio de Janeiro.",
    wpUrl: "https://sindicotransparente.com.br/category/condominios-no-rio-de-janeiro/",
    postCount: 8,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "recon-bt-light-normas-tecnicas",
    title: "Recon BT Light: normas técnicas de instalações elétricas em condomínios",
    excerpt: "A Recon BT Light é um conjunto de normas e procedimentos definidos pela concessionária Light para entrada de energia em baixa tensão. Saiba como adequar seu condomínio às exigências técnicas vigentes.",
    category: "Manutenção Predial",
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
    category: "Documentação e Legislação",
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
    category: "Manutenção Predial",
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
    category: "Documentação e Legislação",
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
    category: "Segurança em Condomínios",
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
    category: "Documentação e Legislação",
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
