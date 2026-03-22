import { useParams, Link, Navigate } from "react-router-dom";
import { getServiceBySlug, getRelatedServices } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/servicos" replace />;

  const Icon = service.icon;
  const related = getRelatedServices(service.relatedSlugs);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary-dark py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Icon size={32} />
              </div>
              <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>
                {service.title}
              </h1>
              <p className="mt-4 text-lg text-blue-200/70">{service.summary}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow section-padding">
          <ScrollReveal>
            <p className="text-lg leading-relaxed text-foreground/90">{service.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* For whom */}
      <section className="bg-secondary py-16">
        <div className="container-narrow section-padding">
          <ScrollReveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Para quem é indicado</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.audience.map((item, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-sm">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow section-padding">
          <ScrollReveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Principais benefícios</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary-dark py-16 lg:py-24">
        <div className="container-narrow section-padding">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Como funciona</h2>
          </ScrollReveal>
          <div className="mt-8 space-y-6">
            {service.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow section-padding">
          <ScrollReveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="mt-8">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-16">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Interessado neste serviço?</h2>
              <p className="mt-3 text-blue-200/70">Solicite uma proposta personalizada e descubra como podemos ajudar o seu condomínio.</p>
              <Button size="xl" className="mt-6 bg-primary text-white hover:bg-primary/90 shadow-md font-semibold text-base" asChild>
                <Link to="/solicitar-proposta">Solicitar proposta</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="container-wide section-padding">
            <ScrollReveal>
              <h2 className="text-2xl font-bold">Serviços relacionados</h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => {
                const RIcon = r.icon;
                return (
                  <ScrollReveal key={r.slug} delay={i * 0.08}>
                    <Link
                      to={`/servicos/${r.slug}`}
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <RIcon size={20} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold">{r.title}</h3>
                        <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Ver detalhes <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
