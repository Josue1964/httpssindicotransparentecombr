import { Briefcase, UserCheck, Search, ClipboardCheck, Construction, Settings, FileText, Target, MessageSquareMore, Radar, DoorOpen } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: typeof Briefcase;
  summary: string;
  description: string;
  audience: string[];
  benefits: string[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "consultoria-para-sindicos",
    title: "Consultoria para Síndicos",
    shortTitle: "Consultoria",
    icon: Briefcase,
    summary: "Orientação estratégica para síndicos que precisam de apoio na tomada de decisão, organização de prioridades e condução segura da gestão condominial.",
    description: "A consultoria para síndicos é um serviço de apoio contínuo ou pontual voltado a auxiliar o gestor condominial nas decisões do dia a dia. Atuamos lado a lado com o síndico, analisando cenários, antecipando riscos e organizando prioridades para uma gestão mais eficiente, transparente e segura. Ideal para quem quer conduzir o condomínio com mais confiança e respaldo técnico.",
    audience: [
      "Síndicos moradores que assumiram a gestão recentemente",
      "Síndicos profissionais que buscam apoio em decisões complexas",
      "Conselheiros que participam ativamente da administração",
      "Gestores que enfrentam conflitos ou situações delicadas",
    ],
    benefits: [
      "Tomada de decisão mais segura e fundamentada",
      "Organização clara de prioridades e demandas",
      "Prevenção de problemas jurídicos e administrativos",
      "Apoio em reuniões, assembleias e comunicação",
      "Análise imparcial de cenários e fornecedores",
      "Mais confiança na condução da gestão",
    ],
    steps: [
      { title: "Conversa inicial", description: "Entendemos o momento do condomínio, os desafios e as expectativas do síndico." },
      { title: "Mapeamento de demandas", description: "Organizamos as principais questões que precisam de atenção e definimos prioridades." },
      { title: "Orientação estratégica", description: "Apresentamos caminhos, análises e recomendações para cada situação identificada." },
      { title: "Acompanhamento contínuo", description: "Mantemos suporte ao longo do período contratado, ajustando a orientação conforme a evolução do cenário." },
    ],
    faqs: [
      { question: "A consultoria substitui o síndico?", answer: "Não. A consultoria é um apoio técnico e estratégico. O síndico continua como gestor principal, mas conta com orientação qualificada para tomar decisões mais seguras." },
      { question: "Posso contratar a consultoria para uma situação específica?", answer: "Sim. Oferecemos tanto consultoria contínua quanto pontual, ideal para situações como assembleias, conflitos, obras ou transições de gestão." },
      { question: "Como é feito o atendimento?", answer: "O atendimento pode ser presencial ou remoto, dependendo da necessidade. Utilizamos reuniões, relatórios e comunicação direta para manter o síndico sempre amparado." },
    ],
    relatedSlugs: ["sindico-profissional", "diagnostico-condominial", "apoio-estrategico"],
  },
  {
    slug: "sindico-profissional",
    title: "Síndico Profissional",
    shortTitle: "Síndico Profissional",
    icon: UserCheck,
    summary: "Gestão técnica, imparcial e organizada para condomínios que precisam de um profissional dedicado à administração, mediação e condução responsável.",
    description: "O serviço de síndico profissional é indicado para condomínios que desejam uma gestão técnica, imparcial e focada em resultados. Assumimos a administração com rotina estruturada, acompanhamento constante, mediação de conflitos e condução responsável de todas as demandas do condomínio. A atuação é transparente, organizada e orientada a entregar mais eficiência para os moradores.",
    audience: [
      "Condomínios sem candidatos internos ao cargo de síndico",
      "Condomínios com histórico de gestão desorganizada",
      "Empreendimentos novos que precisam de estruturação administrativa",
      "Condomínios que buscam imparcialidade na gestão",
    ],
    benefits: [
      "Gestão profissional, organizada e transparente",
      "Imparcialidade na mediação de conflitos e decisões",
      "Rotina administrativa estruturada e acompanhada",
      "Comunicação clara e frequente com moradores",
      "Acompanhamento de prestadores e fornecedores",
      "Condução segura de assembleias e deliberações",
    ],
    steps: [
      { title: "Diagnóstico inicial", description: "Avaliamos a situação administrativa, financeira e operacional do condomínio." },
      { title: "Plano de gestão", description: "Elaboramos um plano com metas, prioridades e cronograma de ações." },
      { title: "Execução e rotina", description: "Implementamos a rotina administrativa com acompanhamento contínuo de demandas." },
      { title: "Relatórios e prestação de contas", description: "Apresentamos relatórios periódicos com transparência total sobre a gestão." },
    ],
    faqs: [
      { question: "O síndico profissional fica no condomínio todos os dias?", answer: "A presença física depende do porte e das necessidades do condomínio. O acompanhamento é constante, com visitas regulares, atendimento remoto e disponibilidade para emergências." },
      { question: "Como é feita a transição de gestão?", answer: "Realizamos uma transição estruturada, com levantamento de documentos, contratos, pendências e apresentação de um plano de ação inicial." },
      { question: "O serviço inclui gestão financeira?", answer: "Sim. O acompanhamento financeiro faz parte da rotina, incluindo análise de despesas, revisão de contratos e apoio no planejamento orçamentário." },
    ],
    relatedSlugs: ["consultoria-para-sindicos", "organizacao-administrativa", "gestao-documental"],
  },
  {
    slug: "cotacoes-para-condominios",
    title: "Cotações para Condomínios",
    shortTitle: "Cotações",
    icon: Search,
    summary: "Processo estruturado de levantamento e comparação de propostas para contratar fornecedores e serviços com mais segurança, transparência e critério.",
    description: "O serviço de cotações oferece um processo organizado para levantar, comparar e analisar propostas de fornecedores e prestadores de serviço para o condomínio. Trabalhamos com critérios claros, análise comparativa e documentação de todo o processo, garantindo mais segurança e transparência nas contratações.",
    audience: [
      "Síndicos que precisam contratar serviços ou fornecedores",
      "Condomínios que desejam mais transparência nas contratações",
      "Gestores que querem comparar propostas com critérios técnicos",
      "Condomínios em processo de troca de prestadores",
    ],
    benefits: [
      "Processo de cotação organizado e documentado",
      "Análise comparativa com critérios objetivos",
      "Mais transparência e segurança nas contratações",
      "Apoio na tomada de decisão sobre fornecedores",
      "Redução de riscos na contratação de serviços",
      "Registro completo para prestação de contas",
    ],
    steps: [
      { title: "Definição do escopo", description: "Entendemos a necessidade do condomínio e definimos os critérios para a cotação." },
      { title: "Levantamento de propostas", description: "Solicitamos propostas de fornecedores qualificados e organizamos as informações recebidas." },
      { title: "Análise comparativa", description: "Comparamos as propostas com base em critérios técnicos, comerciais e de referência." },
      { title: "Relatório e recomendação", description: "Entregamos um relatório claro com a análise e uma recomendação fundamentada para decisão." },
    ],
    faqs: [
      { question: "Vocês indicam fornecedores específicos?", answer: "Não indicamos fornecedores fixos. O processo é aberto e imparcial, com foco em levantar as melhores opções do mercado para cada necessidade." },
      { question: "Quantas propostas são levantadas por cotação?", answer: "O número varia conforme o serviço, mas trabalhamos com no mínimo três propostas para garantir uma boa base de comparação." },
      { question: "O condomínio pode sugerir fornecedores para participar?", answer: "Sim. Fornecedores indicados pelo condomínio podem ser incluídos no processo e serão avaliados com os mesmos critérios dos demais." },
    ],
    relatedSlugs: ["apoio-obras-reformas", "diagnostico-condominial", "organizacao-administrativa"],
  },
  {
    slug: "diagnostico-condominial",
    title: "Diagnóstico Condominial",
    shortTitle: "Diagnóstico",
    icon: ClipboardCheck,
    summary: "Avaliação completa do cenário do condomínio para identificar gargalos, riscos, falhas operacionais e oportunidades de melhoria na gestão.",
    description: "O diagnóstico condominial é uma avaliação técnica e detalhada do estado atual da administração, das operações e da estrutura organizacional do condomínio. Identificamos gargalos, riscos, falhas em processos e oportunidades de melhoria, entregando um relatório claro com recomendações práticas para otimizar a gestão.",
    audience: [
      "Síndicos recém-eleitos que querem entender a situação real do condomínio",
      "Condomínios com problemas recorrentes na administração",
      "Gestores que desejam identificar oportunidades de melhoria",
      "Conselheiros que precisam de uma visão técnica e imparcial",
    ],
    benefits: [
      "Visão clara e completa da situação do condomínio",
      "Identificação de riscos, falhas e gargalos operacionais",
      "Recomendações práticas e priorizadas para melhoria",
      "Base técnica para decisões mais seguras",
      "Registro documentado para prestação de contas",
      "Prevenção de problemas futuros",
    ],
    steps: [
      { title: "Coleta de informações", description: "Reunimos documentos, dados financeiros, contratos e informações sobre a rotina do condomínio." },
      { title: "Análise técnica", description: "Avaliamos processos, estrutura, conformidade e pontos de atenção em cada área." },
      { title: "Mapeamento de riscos", description: "Identificamos vulnerabilidades, gargalos e situações que demandam ação imediata ou preventiva." },
      { title: "Relatório e plano de ação", description: "Entregamos um relatório completo com diagnóstico, recomendações e um plano de ação priorizado." },
    ],
    faqs: [
      { question: "Quanto tempo leva o diagnóstico?", answer: "O prazo depende do porte do condomínio e da complexidade da análise, mas normalmente o diagnóstico é concluído entre 2 e 4 semanas." },
      { question: "O diagnóstico é sigiloso?", answer: "Sim. Todas as informações coletadas e analisadas são tratadas com total sigilo e entregues exclusivamente ao contratante." },
      { question: "O que acontece depois do diagnóstico?", answer: "Após a entrega do relatório, podemos apoiar o condomínio na implementação das recomendações por meio de consultoria ou acompanhamento." },
    ],
    relatedSlugs: ["consultoria-para-sindicos", "organizacao-administrativa", "apoio-estrategico"],
  },
  {
    slug: "apoio-obras-reformas",
    title: "Apoio em Obras e Reformas",
    shortTitle: "Obras e Reformas",
    icon: Construction,
    summary: "Suporte organizacional e estratégico para demandas de manutenção, obras e melhorias no condomínio, com clareza, acompanhamento e comunicação eficiente.",
    description: "O apoio em obras e reformas oferece suporte para o condomínio organizar, planejar e acompanhar demandas de manutenção, obras e melhorias. Atuamos na organização do processo, na comunicação com moradores, no acompanhamento de cronogramas e na documentação de cada etapa, garantindo mais controle e transparência.",
    audience: [
      "Condomínios com obras ou reformas planejadas ou em andamento",
      "Síndicos que precisam organizar o processo de contratação de obras",
      "Gestores que querem acompanhamento profissional durante obras",
      "Condomínios com manutenções corretivas ou preventivas pendentes",
    ],
    benefits: [
      "Organização clara do processo de obra ou reforma",
      "Acompanhamento de cronograma e evolução das etapas",
      "Comunicação estruturada com moradores sobre o andamento",
      "Documentação completa para prestação de contas",
      "Apoio na avaliação de propostas de prestadores",
      "Redução de imprevistos e retrabalho",
    ],
    steps: [
      { title: "Levantamento da demanda", description: "Entendemos o escopo da obra, reforma ou manutenção e suas prioridades." },
      { title: "Organização do processo", description: "Estruturamos o processo com cronograma, requisitos e critérios de avaliação." },
      { title: "Acompanhamento", description: "Monitoramos a execução, fazemos registros fotográficos e acompanhamos os prazos." },
      { title: "Relatório de conclusão", description: "Entregamos um relatório final com registro completo do processo e das entregas realizadas." },
    ],
    faqs: [
      { question: "Vocês executam obras diretamente?", answer: "Não. Nosso papel é de apoio organizacional e estratégico. A execução é realizada pelos prestadores contratados pelo condomínio." },
      { question: "Esse serviço cobre manutenções pequenas?", answer: "Sim. Atuamos tanto em grandes obras quanto em manutenções preventivas e corretivas, adaptando o nível de acompanhamento à necessidade." },
      { question: "Vocês ajudam a encontrar prestadores?", answer: "Sim. Podemos apoiar o processo de cotação e seleção de prestadores qualificados para a demanda identificada." },
    ],
    relatedSlugs: ["cotacoes-para-condominios", "diagnostico-condominial", "organizacao-administrativa"],
  },
  {
    slug: "organizacao-administrativa",
    title: "Organização Administrativa",
    shortTitle: "Organização",
    icon: Settings,
    summary: "Reestruturação de processos, rotinas, fluxos e controles para uma administração condominial mais eficiente, organizada e profissional.",
    description: "A organização administrativa é um serviço voltado a reestruturar e otimizar os processos internos do condomínio. Trabalhamos na revisão de rotinas, na criação de fluxos de trabalho, na padronização de procedimentos e na implementação de controles que tornam a administração mais eficiente e profissional.",
    audience: [
      "Condomínios com processos desorganizados ou inexistentes",
      "Síndicos que desejam profissionalizar a administração",
      "Gestores em transição que precisam organizar a documentação",
      "Condomínios novos que precisam estruturar a operação desde o início",
    ],
    benefits: [
      "Processos claros, documentados e fáceis de seguir",
      "Redução de retrabalho e falhas operacionais",
      "Maior controle sobre demandas e prazos",
      "Profissionalização da rotina administrativa",
      "Base organizada para prestação de contas",
      "Facilidade na transição entre gestores",
    ],
    steps: [
      { title: "Levantamento da situação atual", description: "Mapeamos os processos existentes, identificamos falhas e documentamos a rotina atual." },
      { title: "Redesenho de processos", description: "Criamos novos fluxos, rotinas e controles adaptados à realidade do condomínio." },
      { title: "Implementação", description: "Apoiamos a implantação das melhorias com orientação prática e treinamento quando necessário." },
      { title: "Revisão e ajustes", description: "Acompanhamos os primeiros ciclos para ajustar processos e garantir a adoção efetiva." },
    ],
    faqs: [
      { question: "Esse serviço envolve sistemas ou softwares?", answer: "Podemos recomendar ferramentas e sistemas quando pertinente, mas o foco principal é na organização de processos e rotinas, independente da tecnologia utilizada." },
      { question: "Quanto tempo leva para organizar a administração?", answer: "Depende do porte e da complexidade do condomínio. Projetos menores podem ser concluídos em semanas; condomínios maiores podem demandar alguns meses de acompanhamento." },
      { question: "A organização é feita com o síndico atual?", answer: "Sim. Trabalhamos em conjunto com o síndico e a equipe administrativa para garantir que os novos processos sejam adequados à realidade do condomínio." },
    ],
    relatedSlugs: ["gestao-documental", "diagnostico-condominial", "consultoria-para-sindicos"],
  },
  {
    slug: "gestao-documental",
    title: "Gestão Documental",
    shortTitle: "Gestão Documental",
    icon: FileText,
    summary: "Organização, padronização e controle de documentos e informações relevantes do condomínio, com acesso fácil e seguro às informações essenciais.",
    description: "A gestão documental é o serviço de organização, padronização e controle dos documentos e informações do condomínio. Estruturamos arquivos, contratos, atas, relatórios e demais documentos de forma acessível e segura, facilitando a consulta, a prestação de contas e a continuidade administrativa.",
    audience: [
      "Condomínios com documentação desorganizada ou dispersa",
      "Síndicos em início de gestão que precisam organizar o acervo existente",
      "Gestores que querem garantir a continuidade administrativa",
      "Condomínios que precisam melhorar a prestação de contas",
    ],
    benefits: [
      "Documentação organizada, padronizada e acessível",
      "Controle de vigência de contratos e obrigações",
      "Facilidade na localização de informações essenciais",
      "Base documental para auditorias e prestação de contas",
      "Segurança e backup de documentos importantes",
      "Transição de gestão mais organizada e segura",
    ],
    steps: [
      { title: "Inventário documental", description: "Levantamos todos os documentos existentes e classificamos por categoria e relevância." },
      { title: "Organização e padronização", description: "Estruturamos a documentação com nomenclatura padronizada, categorias e ordem lógica." },
      { title: "Digitalização e armazenamento", description: "Quando necessário, apoiamos a digitalização de documentos físicos e a organização em ambiente digital." },
      { title: "Entrega e orientação", description: "Entregamos o acervo organizado com orientações para manutenção e atualização contínua." },
    ],
    faqs: [
      { question: "Vocês guardam os documentos do condomínio?", answer: "Não. Organizamos a documentação e devolvemos ao condomínio com toda a estrutura pronta. Caso desejado, podemos recomendar soluções de armazenamento digital." },
      { question: "Documentos antigos também são organizados?", answer: "Sim. O serviço inclui a organização de todo o acervo disponível, independente do período." },
      { question: "Quais documentos são incluídos no serviço?", answer: "Contratos, atas, relatórios, certidões, comprovantes, comunicados e demais documentos relevantes para a administração do condomínio." },
    ],
    relatedSlugs: ["organizacao-administrativa", "diagnostico-condominial", "sindico-profissional"],
  },
  {
    slug: "apoio-estrategico",
    title: "Apoio Estratégico para Condomínios",
    shortTitle: "Apoio Estratégico",
    icon: Target,
    summary: "Suporte amplo para síndicos e condomínios em decisões, planejamento e priorização de ações, com foco em resultados e eficiência na gestão.",
    description: "O apoio estratégico é um serviço de suporte amplo e flexível para síndicos e condomínios que precisam de respaldo em decisões importantes, planejamento de ações e priorização de demandas. Atuamos como parceiros do gestor, oferecendo visão técnica, análise de cenários e orientação prática para alcançar melhores resultados na administração condominial.",
    audience: [
      "Síndicos que precisam de apoio em decisões estratégicas",
      "Condomínios em fase de mudanças ou reestruturação",
      "Gestores que querem planejar ações de médio e longo prazo",
      "Conselheiros que desejam contribuir com mais embasamento técnico",
    ],
    benefits: [
      "Visão estratégica para decisões importantes",
      "Planejamento de ações com foco em prioridades reais",
      "Apoio flexível e adaptado ao momento do condomínio",
      "Análise técnica de cenários e alternativas",
      "Maior segurança na condução de mudanças",
      "Otimização de recursos e esforços da gestão",
    ],
    steps: [
      { title: "Entendimento do contexto", description: "Conversamos para compreender o momento do condomínio, suas prioridades e desafios." },
      { title: "Análise e planejamento", description: "Avaliamos os cenários e desenvolvemos um plano de ação com metas claras e factíveis." },
      { title: "Suporte na execução", description: "Oferecemos apoio contínuo durante a implementação das ações planejadas." },
      { title: "Acompanhamento e revisão", description: "Monitoramos os resultados e ajustamos o plano conforme as necessidades evoluem." },
    ],
    faqs: [
      { question: "Qual a diferença entre apoio estratégico e consultoria?", answer: "A consultoria foca em orientação para tomada de decisão. O apoio estratégico é mais amplo e pode incluir planejamento, priorização, acompanhamento de projetos e suporte em múltiplas frentes simultaneamente." },
      { question: "Esse serviço tem prazo definido?", answer: "O formato pode ser contínuo ou por projeto, dependendo da demanda do condomínio. Definimos juntos o escopo e a duração mais adequados." },
      { question: "Condomínios pequenos também podem contratar?", answer: "Sim. O apoio estratégico é adaptável a condomínios de todos os portes. O escopo é ajustado conforme a realidade e as necessidades de cada condomínio." },
    ],
    relatedSlugs: ["consultoria-para-sindicos", "diagnostico-condominial", "organizacao-administrativa"],
  },
  {
    slug: "whatsapp-inteligente",
    title: "WhatsApp Inteligente para Condomínios",
    shortTitle: "WhatsApp Inteligente",
    icon: MessageSquareMore,
    summary: "Solução de atendimento profissional via WhatsApp com automação, triagem inteligente, organização por setores e histórico centralizado para administradoras e síndicos profissionais.",
    description: "O WhatsApp Inteligente é uma solução recomendada pela Síndico Transparente para profissionalizar o atendimento de administradoras de condomínios e síndicos profissionais. Estruture um canal de comunicação mais ágil, organizado e eficiente com automação de respostas iniciais, distribuição por setores, captação de leads e histórico centralizado — tudo para transformar o WhatsApp em uma operação realmente profissional.",
    audience: [
      "Administradoras de condomínios que atendem alto volume de mensagens",
      "Síndicos profissionais que gerenciam múltiplos condomínios",
      "Operações com alto volume de solicitações e leads via WhatsApp",
      "Prestadores de serviços condominiais que precisam organizar comercial e suporte",
    ],
    benefits: [
      "Atendimento inicial automatizado 24 horas por dia",
      "Triagem e distribuição inteligente por setor ou responsável",
      "Captação e qualificação de leads com fluxos organizados",
      "Histórico centralizado de todas as conversas e demandas",
      "Organização por perfil: síndicos, moradores, fornecedores e prospects",
      "Mais conversão comercial e menos perda de contatos",
    ],
    steps: [
      { title: "Análise da operação", description: "Entendemos o volume de atendimento, os setores envolvidos e as necessidades de comunicação do seu negócio." },
      { title: "Configuração personalizada", description: "Estruturamos os fluxos de automação, chatbot, setores e regras de distribuição conforme sua operação." },
      { title: "Implementação e treinamento", description: "Ativamos a solução e treinamos a equipe para operar o painel profissional de atendimento." },
      { title: "Acompanhamento e otimização", description: "Monitoramos os resultados e ajustamos os fluxos para maximizar a eficiência e a conversão." },
    ],
    faqs: [
      { question: "Essa solução funciona com o WhatsApp que já uso?", answer: "Sim. A solução utiliza a API oficial do WhatsApp Business, podendo ser integrada ao seu número atual ou a um novo número dedicado ao atendimento profissional." },
      { question: "Preciso de conhecimento técnico para usar?", answer: "Não. O painel é intuitivo e a equipe recebe treinamento completo. A configuração inicial é feita pela nossa equipe de implementação." },
      { question: "Serve para condomínios de qualquer porte?", answer: "Sim. A solução é ideal para qualquer operação que receba volume relevante de mensagens via WhatsApp, desde síndicos profissionais até grandes administradoras." },
    ],
    relatedSlugs: ["consultoria-para-sindicos", "sindico-profissional", "organizacao-administrativa"],
  },
  {
    slug: "pre-diagnostico-fachada-drone",
    title: "Pré-Diagnóstico de Fachada com Drones",
    shortTitle: "Inspeção com Drone",
    icon: Radar,
    summary: "Inspeção aérea gratuita para identificar sinais de infiltração, trincas, desplacamentos e deteriorações na fachada do seu condomínio, com registro visual detalhado.",
    description: "O pré-diagnóstico de fachada com drones é um serviço 100% gratuito que utiliza tecnologia de inspeção aérea para identificar sinais de problemas nas fachadas do condomínio. Com imagens detalhadas captadas por drones, é possível mapear trincas, infiltrações, desplacamentos e deteriorações sem necessidade de andaimes ou balancins, reduzindo riscos e oferecendo uma visão preliminar clara para apoiar a tomada de decisão sobre manutenção ou obras.",
    audience: [
      "Condomínios com fachadas que apresentam sinais visíveis de desgaste",
      "Síndicos que planejam manutenção preventiva de fachadas",
      "Condomínios que precisam de laudo ou avaliação técnica de fachada",
      "Gestores que querem antecipar problemas antes que se agravem",
    ],
    benefits: [
      "100% gratuito — sem custo inicial para o pré-diagnóstico",
      "Tecnologia de ponta com drones para inspeções seguras e detalhadas",
      "Registro visual completo para apoiar decisões e priorizações",
      "Mais assertividade para evitar surpresas e priorizar ações",
      "Identificação rápida de pontos de atenção na fachada",
      "Indicação dos próximos passos caso haja necessidade de intervenção",
    ],
    steps: [
      { title: "Agendamento", description: "Entre em contato pelo WhatsApp informando o nome do condomínio, bairro/cidade e o motivo do pedido (infiltração, trinca, desplacamento, etc.)." },
      { title: "Inspeção aérea", description: "Realizamos o voo com drone para capturar imagens detalhadas de todas as fachadas do edifício." },
      { title: "Análise preliminar", description: "Analisamos as imagens para identificar sinais de patologias, deteriorações e pontos de atenção." },
      { title: "Relatório visual", description: "Entregamos um relatório com registro fotográfico e orientações sobre os próximos passos recomendados." },
    ],
    faqs: [
      { question: "O pré-diagnóstico é realmente gratuito?", answer: "Sim, 100% gratuito. É um levantamento preliminar por imagens para orientar a tomada de decisão. Caso haja necessidade de avaliação técnica completa ou execução de obra, indicamos os próximos passos." },
      { question: "Preciso de autorização para o voo do drone?", answer: "Nossa equipe cuida de todas as autorizações necessárias conforme a regulamentação vigente. Basta agendar e alinhar o melhor dia e horário." },
      { question: "O pré-diagnóstico substitui um laudo técnico de fachada?", answer: "Não. O pré-diagnóstico é uma avaliação preliminar visual. Caso sejam identificados pontos críticos, recomendamos uma avaliação técnica completa com profissional habilitado." },
      { question: "Quais tipos de problemas o drone consegue identificar?", answer: "O drone identifica sinais visíveis como trincas, fissuras, desplacamento de revestimento, infiltrações aparentes, manchas de umidade e deterioração geral da fachada." },
    ],
    relatedSlugs: ["apoio-obras-reformas", "diagnostico-condominial", "cotacoes-para-condominios"],
  },
  {
    slug: "manutencao-elevadores",
    title: "Manutenção de Elevadores Transparente e Justa",
    shortTitle: "Elevadores",
    icon: CableCar,
    summary: "Visita técnica gratuita e diagnóstico imparcial do contrato de manutenção de elevadores do seu condomínio. Economia real com peças inclusas.",
    description: "Síndicos: descubra se o contrato atual de manutenção de elevadores é justo. Realizamos uma visita técnica 100% gratuita com checklist completo — casa de máquinas, poço, cabina e portas — seguida de análise do contrato vigente, comparação de mercado e plano de redução de custos. Nosso diagnóstico imparcial entrega relatório detalhado com recomendações de modernização e proposta com peças inclusas, para que seu condomínio tenha segurança e economia.",
    audience: [
      "Síndicos que suspeitam estar pagando caro pela manutenção",
      "Condomínios com contratos vagos e sem transparência",
      "Gestores que precisam adequar elevadores às normas ABNT e prefeitura",
      "Condomínios com elevadores antigos que precisam de modernização",
    ],
    benefits: [
      "Visita técnica e diagnóstico 100% gratuitos, sem compromisso",
      "Checklist técnico completo: casa de máquinas, poço, cabina e portas",
      "Análise detalhada do contrato atual com comparação de mercado",
      "Proposta com peças inclusas e plano de economia realista",
      "Conformidade com normas ABNT (NBR 15597, NBR 16083, NBR NM 207)",
      "Adequação às exigências da prefeitura: registro, ART e vistoria periódica",
      "Recomendações de modernização quando necessário",
      "Sugestão para renegociação ou troca de empresa",
    ],
    steps: [
      { title: "Agende a visita", description: "Preencha o formulário ou fale pelo WhatsApp em menos de 1 minuto. Sem custo e sem compromisso." },
      { title: "Técnico visita o condomínio", description: "Checklist completo: casa de máquinas, poço, cabina, portas — tudo inspecionado por técnico especializado." },
      { title: "Receba relatório + economia", description: "Análise do contrato, comparação de mercado e plano de redução de custos com peças inclusas." },
    ],
    faqs: [
      { question: "A visita técnica é realmente gratuita?", answer: "Sim, 100% gratuita e sem compromisso. Você recebe um relatório completo com diagnóstico imparcial do estado dos elevadores e análise do contrato atual." },
      { question: "Quais normas técnicas são consideradas?", answer: "Nosso diagnóstico considera as normas ABNT NBR 15597, NBR 16083 e NBR NM 207, além das exigências municipais de registro, ART e vistoria periódica." },
      { question: "O que acontece se meu contrato atual for justo?", answer: "Informamos isso no relatório. Nosso compromisso é com a transparência — se o contrato está adequado, você terá essa certeza documentada." },
      { question: "Atendem elevadores de qualquer marca?", answer: "Sim. Temos técnicos especializados para cada tipo de equipamento, independente da marca ou modelo." },
    ],
    relatedSlugs: ["diagnostico-condominial", "consultoria-para-sindicos", "apoio-obras-reformas"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs.map(s => services.find(sv => sv.slug === s)).filter(Boolean) as ServiceData[];
}
