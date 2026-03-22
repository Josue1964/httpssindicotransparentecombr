import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { Phone, MessageSquare, Search, Compass, CheckCircle } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Contato inicial", desc: "O primeiro passo é entrar em contato conosco pelo formulário do site, WhatsApp ou telefone. Essa conversa é rápida e sem compromisso — queremos apenas entender o que levou você a nos procurar." },
  { icon: MessageSquare, num: "02", title: "Entendimento da necessidade", desc: "Agendamos uma conversa mais detalhada para conhecer a realidade do condomínio, os desafios enfrentados e as expectativas do síndico ou da administração. Esse momento é essencial para oferecer a solução certa." },
  { icon: Search, num: "03", title: "Avaliação do cenário", desc: "Com base nas informações coletadas, analisamos o cenário do condomínio, identificamos pontos de atenção e mapeamos oportunidades de melhoria. Quando necessário, realizamos visitas ou levantamentos técnicos." },
  { icon: Compass, num: "04", title: "Direcionamento da solução", desc: "Apresentamos uma proposta clara, com escopo definido, prazos, condições e recomendações adequadas à necessidade identificada. Tudo explicado de forma transparente." },
  { icon: CheckCircle, num: "05", title: "Acompanhamento e resultado", desc: "Após a contratação, executamos o serviço com acompanhamento contínuo, relatórios periódicos e comunicação aberta. Nosso compromisso é entregar resultado real para o condomínio." },
];

export default function HowItWorks() {
  return (
    <Layout>
      <section className="bg-primary-dark py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>Como funciona</h1>
              <p className="mt-4 text-lg text-blue-200/70">
                Nosso processo é simples, organizado e transparente. Conheça cada etapa, do primeiro contato até a entrega de resultados.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-narrow section-padding">
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.num} delay={i * 0.1}>
                  <div className="flex gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm">
                    <div className="flex flex-col items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                        <Icon size={28} />
                      </div>
                      <span className="mt-2 font-display text-sm font-bold text-primary">{step.num}</span>
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold">{step.title}</h2>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-16 rounded-2xl bg-foreground p-8 text-center lg:p-12">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Pronto para começar?</h2>
              <p className="mt-3 text-blue-200/70">O primeiro passo é entrar em contato. Sem compromisso.</p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button size="xl" className="bg-primary text-white hover:bg-primary/90 shadow-md font-semibold text-base" asChild>
                  <Link to="/solicitar-proposta">Solicitar proposta</Link>
                </Button>
                <Button variant="whatsapp" size="xl" asChild>
                  <a href="https://wa.me/5521993750707" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
