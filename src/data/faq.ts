export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Como funciona a contratação dos serviços?",
    answer: "O processo começa com um contato inicial, onde entendemos a necessidade do condomínio. Em seguida, realizamos uma conversa mais detalhada para avaliar o cenário e, a partir disso, apresentamos uma proposta adequada com escopo, condições e valores claros.",
    category: "Contratação",
  },
  {
    question: "Qual o prazo para receber uma proposta?",
    answer: "Após o contato inicial e o entendimento da demanda, apresentamos a proposta em até 5 dias úteis. Para situações mais complexas, esse prazo pode ser ajustado conforme a necessidade de análise.",
    category: "Contratação",
  },
  {
    question: "Vocês atendem condomínios de qualquer porte?",
    answer: "Sim. Nossos serviços são adaptáveis a condomínios residenciais e comerciais de diferentes portes. O escopo e o formato de atendimento são ajustados conforme a realidade de cada condomínio.",
    category: "Atendimento",
  },
  {
    question: "O atendimento é presencial ou remoto?",
    answer: "Dependendo do serviço e da necessidade, o atendimento pode ser presencial, remoto ou híbrido. Definimos o formato mais adequado em conjunto com o contratante.",
    category: "Atendimento",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Trabalhamos com transferência bancária, PIX e boleto. As condições de pagamento são definidas na proposta, podendo ser à vista ou parcelado conforme o serviço contratado.",
    category: "Contratação",
  },
  {
    question: "Posso contratar apenas um serviço específico?",
    answer: "Sim. Cada serviço pode ser contratado individualmente, de acordo com a necessidade do condomínio. Também é possível combinar serviços complementares para um atendimento mais completo.",
    category: "Serviços",
  },
  {
    question: "Vocês emitem relatórios das atividades realizadas?",
    answer: "Sim. Todos os serviços incluem documentação e relatórios das atividades, entregas e recomendações. A transparência é um valor fundamental da nossa atuação.",
    category: "Serviços",
  },
  {
    question: "Como é o acompanhamento durante o serviço?",
    answer: "Mantemos comunicação constante com o contratante por meio de reuniões periódicas, relatórios de progresso e canais de comunicação direta. O objetivo é garantir alinhamento e transparência em cada etapa.",
    category: "Atendimento",
  },
  {
    question: "Vocês atendem em quais regiões?",
    answer: "Atendemos em diversas regiões, com possibilidade de atuação remota para muitos dos nossos serviços. Para serviços presenciais, consulte a disponibilidade para sua localidade.",
    category: "Atendimento",
  },
  {
    question: "É possível cancelar o serviço após a contratação?",
    answer: "Sim. As condições de cancelamento são previstas no contrato e tratadas com total transparência. Nosso objetivo é sempre entregar valor, e por isso priorizamos o alinhamento desde o início.",
    category: "Contratação",
  },
];
