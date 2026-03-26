import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { ArrowRight, CheckCircle2, MessageCircle, Shield, BarChart3, Users, Eye, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Users, label: "Atendimento consultivo" },
  { icon: Shield, label: "Soluções práticas" },
  { icon: BarChart3, label: "Mais organização" },
  { icon: Eye, label: "Mais transparência" },
];

const differentials = [
  { title: "Foco em resultados", desc: "Cada serviço é desenhado para gerar impacto real na gestão do condomínio." },
  { title: "Transparência total", desc: "Processos claros, relatórios acessíveis e comunicação direta com o síndico." },
  { title: "Apoio estratégico", desc: "Não apenas operacional — ajudamos na tomada de decisão e planejamento." },
  { title: "Experiência condominial", desc: "Conhecemos a realidade dos condomínios e falamos a língua dos síndicos." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero — white bg */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        <div className="container-wide section-padding relative">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>
                Soluções completas para síndicos e condomínios com mais organização, transparência e segurança
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                A Síndico Transparente oferece apoio estratégico para a gestão condominial, com serviços que ajudam a organizar processos, melhorar decisões, acompanhar demandas e trazer mais clareza para a rotina do condomínio.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button size="xl" className="bg-primary text-white hover:bg-primary/90 shadow-md font-semibold text-base" asChild>
                  <Link to="/solicitar-proposta">Solicitar proposta <ArrowRight size={18} /></Link>
                </Button>
                <Button variant="whatsapp" size="xl" asChild>
                  <a href="https://wa.me/5521993750707" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} /> Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {highlights.map(h => {
                const Icon = h.icon;
                return (
                  <div key={h.label} className="flex items-center gap-2 rounded-xl border border-border bg-surface-warm px-4 py-3 text-sm font-medium text-foreground">
                    <Icon size={16} className="shrink-0 text-primary" />
                    {h.label}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Course Banner */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <a
              href="https://sindicotransparente.com.br/curso-de-sindico-profissional-gratuito/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-6 overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-r from-primary-dark to-primary p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/40 sm:flex-row sm:p-10"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Gratuito para sempre
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Curso de Síndico Profissional Grátis</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-blue-100/80">
                  Uma oportunidade para aprender mais sobre gestão condominial, rotina do síndico e boas práticas, com conteúdo aberto a sugestões para evoluir continuamente.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-primary transition-transform group-hover:scale-105">
                Quero acessar o curso <ArrowRight size={16} />
              </span>
            </a>
          </ScrollReveal>
        </div>

      {/* Services — light gray bg */}
      <section className="bg-secondary py-20 lg:py-28">
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
              const isExternal = !!s.externalUrl;
              const linkProps = isExternal
                ? { href: s.externalUrl, target: "_blank", rel: "noopener noreferrer" }
                : {};
              const Wrapper = isExternal ? "a" : Link;
              const wrapperProps = isExternal ? linkProps : { to: `/servicos/${s.slug}` };
              return (
                <ScrollReveal key={s.slug} delay={i * 0.08}>
                  <Wrapper
                    {...(wrapperProps as any)}
                    className={`group flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${
                      s.isFeatured
                        ? "border-primary/40 bg-gradient-to-b from-primary/5 to-card ring-1 ring-primary/20 hover:border-primary/60"
                        : "border-border bg-card hover:border-primary/30"
                    }`}
                  >
                    {s.badge && (
                      <span className="mb-3 inline-flex self-start items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                        {s.badge}
                      </span>
                    )}
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                      s.isFeatured
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                    }`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                      Saiba mais <ArrowRight size={14} />
                    </span>
                  </Wrapper>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works — dark blue bg */}
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Como funciona</h2>
              <p className="mt-4 text-blue-200/70">Um processo simples, organizado e transparente do início ao resultado.</p>
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
                <div className="rounded-2xl bg-white p-6 text-center">
                  <span className="inline-block font-display text-3xl font-bold text-primary">{item.step}</span>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-semibold" asChild>
                <Link to="/como-funciona">Ver detalhes do processo</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Differentials — white bg */}
      <section className="py-20 lg:py-28">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Por que escolher a Síndico Transparente</h2>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-surface-warm p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview — white bg */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">Artigos recentes</h2>
                <p className="mt-2 text-muted-foreground">Conteúdo para apoiar síndicos e gestores condominiais.</p>
              </div>
              <a href="https://sindicotransparente.com.br/blog/" target="_blank" rel="noopener noreferrer" className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex items-center gap-1">
                Ver todos <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <a
                  href="https://sindicotransparente.com.br/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}</span>
                    <span>·</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — #0F172A premium dark */}
      <section className="bg-foreground py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Pronto para melhorar a gestão do seu condomínio?
              </h2>
              <p className="mt-4 text-blue-200/70">
                Entre em contato e descubra como podemos ajudar. Sem compromisso.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
