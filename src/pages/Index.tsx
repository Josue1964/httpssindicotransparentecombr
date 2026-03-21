import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const highlights = [
  "Atendimento consultivo",
  "Soluções práticas",
  "Mais organização",
  "Mais transparência",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(168 55% 60%) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(36 75% 50%) 0%, transparent 40%)" }} />
        <div className="container-wide section-padding relative">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>
                Soluções completas para síndicos e condomínios com mais organização, transparência e segurança
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                A Síndico Transparente oferece apoio estratégico para a gestão condominial, com serviços que ajudam a organizar processos, melhorar decisões, acompanhar demandas e trazer mais clareza para a rotina do condomínio.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/solicitar-proposta">Solicitar proposta <ArrowRight size={18} /></Link>
                </Button>
                <Button variant="hero-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} /> Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map(h => (
                <div key={h} className="flex items-center gap-2 rounded-xl bg-primary-foreground/10 px-4 py-3 text-sm font-medium text-primary-foreground">
                  <CheckCircle2 size={16} className="shrink-0 text-accent" />
                  {h}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Encontre a solução ideal para o seu condomínio</h2>
              <p className="mt-4 text-muted-foreground">
                Atuamos em diferentes frentes da gestão condominial para apoiar síndicos, conselheiros e condomínios com soluções práticas, organizadas e eficientes.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={s.slug} delay={i * 0.08}>
                  <Link
                    to={`/servicos/${s.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Saiba mais <ArrowRight size={14} />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Como funciona</h2>
              <p className="mt-4 text-muted-foreground">Um processo simples, organizado e transparente do início ao resultado.</p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { step: "01", title: "Contato inicial", desc: "Entre em contato pelo formulário, WhatsApp ou telefone." },
              { step: "02", title: "Entendimento", desc: "Conhecemos a realidade e as necessidades do condomínio." },
              { step: "03", title: "Avaliação", desc: "Analisamos o cenário e identificamos as melhores soluções." },
              { step: "04", title: "Direcionamento", desc: "Apresentamos a proposta adequada com escopo claro." },
              { step: "05", title: "Resultado", desc: "Acompanhamos a execução até a entrega de resultados." },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <span className="inline-block font-display text-3xl font-bold text-primary/20">{item.step}</span>
                  <h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/como-funciona">Ver detalhes do processo</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20 lg:py-28">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">Artigos recentes</h2>
                <p className="mt-2 text-muted-foreground">Conteúdo para apoiar síndicos e gestores condominiais.</p>
              </div>
              <Link to="/blog" className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex items-center gap-1">
                Ver todos <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}</span>
                    <span>·</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
                Pronto para melhorar a gestão do seu condomínio?
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Entre em contato e descubra como podemos ajudar. Sem compromisso.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/solicitar-proposta">Solicitar proposta</Link>
                </Button>
                <Button variant="hero-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                  <Link to="/contato">Fale conosco</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
