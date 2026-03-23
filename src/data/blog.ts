export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogCategories = [
  "Gestão Condominial",
  "Legislação",
  "Finanças",
  "Manutenção",
  "Comunicação",
  "Assembleias",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "como-organizar-primeira-assembleia",
    title: "Como organizar a primeira assembleia do condomínio com sucesso",
    excerpt: "Um guia prático para síndicos que vão conduzir sua primeira assembleia, com dicas sobre convocação, pauta, quórum e registro de atas.",
    category: "Assembleias",
    date: "2026-03-10",
    readTime: "6 min",
    content: "A primeira assembleia de um síndico pode ser desafiadora, mas com organização e planejamento adequados, é possível conduzir uma reunião produtiva e dentro da legalidade. Neste artigo, abordamos os principais pontos que merecem atenção.\n\n## Convocação\n\nA convocação deve ser feita dentro do prazo previsto na convenção do condomínio, geralmente com antecedência mínima de 10 dias. Inclua data, horário, local e a pauta completa.\n\n## Pauta\n\nOrganize a pauta de forma lógica, começando pelos assuntos mais relevantes. Evite itens genéricos como \"assuntos gerais\" sem especificação.\n\n## Quórum\n\nVerifique na convenção o quórum necessário para cada tipo de deliberação. Em primeira convocação, geralmente é exigida maioria absoluta; em segunda, a maioria dos presentes.\n\n## Registro\n\nA ata deve ser lavrada durante a reunião, com registro de todas as deliberações, votos e encaminhamentos. Distribua uma cópia para todos os condôminos.",
  },
  {
    slug: "transparencia-na-gestao-condominial",
    title: "Transparência na gestão condominial: por que é tão importante?",
    excerpt: "Entenda como a transparência na administração do condomínio reduz conflitos, aumenta a confiança dos moradores e melhora a gestão como um todo.",
    category: "Gestão Condominial",
    date: "2026-03-05",
    readTime: "5 min",
    content: "A transparência é um dos pilares de uma boa gestão condominial. Quando o síndico mantém os moradores informados sobre decisões, finanças e projetos, a confiança aumenta e os conflitos diminuem.\n\n## O que é transparência na prática?\n\nTransparência não é apenas publicar o balancete mensal. Envolve comunicação clara sobre decisões, processos de contratação, andamento de obras, prestação de contas detalhada e abertura para questionamentos.\n\n## Benefícios da transparência\n\n- Redução significativa de conflitos entre moradores e gestão\n- Maior engajamento dos condôminos nas decisões coletivas\n- Facilidade na aprovação de projetos e investimentos\n- Proteção jurídica para o síndico\n\n## Como implementar\n\nComece com comunicados regulares, crie canais de comunicação acessíveis, disponibilize documentos para consulta e mantenha uma postura aberta ao diálogo.",
  },
  {
    slug: "principais-erros-sindicos-iniciantes",
    title: "7 erros comuns de síndicos iniciantes e como evitá-los",
    excerpt: "Conheça os erros mais frequentes cometidos por quem está começando na gestão condominial e aprenda a evitá-los desde o primeiro dia.",
    category: "Gestão Condominial",
    date: "2026-02-28",
    readTime: "7 min",
    content: "Assumir a gestão de um condomínio é uma responsabilidade significativa. Muitos síndicos iniciantes cometem erros que poderiam ser facilmente evitados com orientação adequada.\n\n## 1. Não conhecer a convenção\n\nA convenção é o documento que rege o condomínio. Leia-a integralmente antes de tomar qualquer decisão.\n\n## 2. Centralizar todas as decisões\n\nEnvolva o conselho e os moradores nas decisões importantes. A gestão compartilhada reduz conflitos e distribui responsabilidades.\n\n## 3. Ignorar a manutenção preventiva\n\nManutenções adiadas se transformam em problemas maiores e mais caros. Crie um plano de manutenção preventiva.\n\n## 4. Não documentar processos\n\nRegistre tudo: decisões, comunicados, cotações, contratos. A documentação é sua melhor proteção.\n\n## 5. Comunicar pouco\n\nA falta de comunicação gera desconfiança. Mantenha os moradores informados regularmente.\n\n## 6. Não buscar orientação profissional\n\nNão hesite em procurar apoio quando necessário. Uma orientação adequada pode evitar problemas sérios.\n\n## 7. Tomar decisões sozinho em questões complexas\n\nQuestões jurídicas, obras de grande porte e mudanças importantes devem ser discutidas e aprovadas em assembleia.",
  },
  {
    slug: "gestao-financeira-condominio",
    title: "Gestão financeira do condomínio: fundamentos para uma administração saudável",
    excerpt: "Aprenda os fundamentos da gestão financeira condominial, desde o controle de receitas e despesas até o planejamento orçamentário anual.",
    category: "Finanças",
    date: "2026-02-20",
    readTime: "8 min",
    content: "A saúde financeira do condomínio depende de planejamento, controle e transparência. Neste artigo, apresentamos os fundamentos que todo síndico precisa conhecer.\n\n## Controle de receitas e despesas\n\nMantenha um controle rigoroso de todas as entradas e saídas. Utilize planilhas ou sistemas específicos para condomínios.\n\n## Fundo de reserva\n\nO fundo de reserva é essencial para cobrir despesas emergenciais e investimentos planejados. Mantenha-o em aplicação segura e transparente.\n\n## Inadimplência\n\nTenha uma política clara para lidar com inadimplência, respeitando os prazos legais e os direitos dos condôminos.\n\n## Planejamento orçamentário\n\nElabore um orçamento anual realista, considerando manutenções previstas, reajustes contratuais e possíveis imprevistos.",
  },
  {
    slug: "como-escolher-fornecedores-condominio",
    title: "Como escolher fornecedores para o condomínio de forma segura",
    excerpt: "Dicas práticas para selecionar fornecedores confiáveis para o condomínio, desde a cotação até a avaliação de propostas e contratos.",
    category: "Gestão Condominial",
    date: "2026-02-15",
    readTime: "6 min",
    content: "A escolha de fornecedores é uma das decisões mais importantes na gestão condominial. Um processo bem conduzido garante qualidade, economia e segurança.\n\n## Defina critérios claros\n\nAntes de iniciar a cotação, defina os critérios de avaliação: preço, qualidade, prazo, referências e condições de pagamento.\n\n## Solicite múltiplas propostas\n\nSempre trabalhe com no mínimo três propostas para garantir uma boa base de comparação.\n\n## Verifique referências\n\nPeça referências de outros condomínios atendidos e, se possível, visite obras ou serviços realizados.\n\n## Analise contratos com atenção\n\nAntes de assinar, revise todas as cláusulas, prazos, garantias e condições de rescisão.",
  },
  {
    slug: "importancia-manutencao-preventiva",
    title: "A importância da manutenção preventiva em condomínios",
    excerpt: "Descubra como a manutenção preventiva pode reduzir custos, evitar problemas graves e valorizar o patrimônio do condomínio a longo prazo.",
    category: "Manutenção",
    date: "2026-02-10",
    readTime: "5 min",
    content: "A manutenção preventiva é uma das ferramentas mais eficientes para preservar o patrimônio do condomínio e evitar gastos emergenciais.\n\n## O que é manutenção preventiva?\n\nÉ o conjunto de ações programadas para preservar equipamentos, instalações e áreas comuns antes que apresentem falhas.\n\n## Benefícios\n\n- Redução de custos com reparos emergenciais\n- Maior vida útil de equipamentos e instalações\n- Valorização do imóvel\n- Segurança para moradores e funcionários\n\n## Como implementar\n\nCrie um calendário de manutenções com base nas recomendações técnicas dos fabricantes e nas normas vigentes. Inclua elevadores, bombas, sistemas elétricos, hidráulicos, telhados e áreas comuns.",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
