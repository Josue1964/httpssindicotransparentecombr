import { useParams, Link, Navigate } from "react-router-dom";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i} className="mt-8 mb-4 font-display text-2xl font-bold">{block.replace("## ", "")}</h2>;
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter(l => l.startsWith("- "));
        return (
          <ul key={i} className="my-4 space-y-2 pl-5">
            {items.map((item, j) => (
              <li key={j} className="list-disc text-foreground/90 leading-relaxed">{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      return <p key={i} className="text-foreground/90 leading-relaxed">{block}</p>;
    });
  };

  return (
    <Layout>
      <article>
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container-narrow section-padding">
            <ScrollReveal>
              <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft size={14} /> Voltar ao blog
              </Link>
              <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
              <h1 className="mt-2 text-3xl font-bold sm:text-4xl" style={{ lineHeight: "1.15" }}>{post.title}</h1>
              <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</span>
                <span>·</span>
                <span>{post.readTime} de leitura</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container-narrow section-padding">
            <ScrollReveal>
              <div className="prose-readable space-y-1 text-base">
                {renderContent(post.content)}
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.2}>
              <div className="mt-16 rounded-2xl bg-foreground p-8 text-center">
                <h2 className="text-xl font-bold text-white sm:text-2xl">Precisa de apoio na gestão do seu condomínio?</h2>
                <p className="mt-2 text-blue-200/70 text-sm">Conheça nossos serviços e descubra como podemos ajudar.</p>
                <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-semibold" asChild>
                    <Link to="/servicos">Ver serviços</Link>
                  </Button>
                  <Button size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold" asChild>
                    <Link to="/solicitar-proposta">Solicitar proposta</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="border-t border-border py-16">
            <div className="container-wide section-padding">
              <ScrollReveal>
                <h2 className="text-2xl font-bold">Artigos relacionados</h2>
              </ScrollReveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p, i) => (
                  <ScrollReveal key={p.slug} delay={i * 0.08}>
                    <a
                      href="https://sindicotransparente.com.br/blog/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                      <h3 className="mt-2 font-display text-base font-bold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Ler artigo <ArrowRight size={12} />
                      </span>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}
