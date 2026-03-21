import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <Layout>
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>
                Serviços para síndicos e condomínios
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                A Síndico Transparente oferece soluções práticas e estratégicas para apoiar a gestão condominial em diferentes frentes, com foco em organização, transparência, eficiência e clareza nas decisões.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-wide section-padding">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.slug} delay={i * 0.08}>
                  <Link
                    to={`/servicos/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={28} />
                    </div>
                    <h2 className="mt-5 font-display text-xl font-bold">{s.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Saiba mais <ArrowRight size={14} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">Não sabe qual serviço é ideal?</h2>
              <p className="mt-3 text-primary-foreground/80">Entre em contato e ajudaremos a identificar a melhor solução para o seu condomínio.</p>
              <Button variant="accent" size="xl" className="mt-6" asChild>
                <Link to="/solicitar-proposta">Solicitar proposta</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
