import { blogCategories, blogPosts } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { ArrowUpRight, BookOpen, Building2, FileText, HardHat, MapPin, PiggyBank, Scale, Search, Shield, ShoppingCart, Users } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "gestao-condominial": <Users size={22} />,
  "sindico-profissional": <Building2 size={22} />,
  "cotacoes-contratacoes": <ShoppingCart size={22} />,
  "obras-reformas": <HardHat size={22} />,
  "manutencao-predial": <Search size={22} />,
  "problemas-condominios": <Scale size={22} />,
  "documentacao-legislacao": <FileText size={22} />,
  "seguranca-condominios": <Shield size={22} />,
  "economia-condominios": <PiggyBank size={22} />,
  "condominios-rio-de-janeiro": <MapPin size={22} />,
};

export default function Blog() {
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <Layout>
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>Blog</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Conteúdo prático e informativo para síndicos, conselheiros e gestores condominiais.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <h2 className="text-2xl font-bold">Explore por categoria</h2>
            <p className="mt-2 text-muted-foreground">Selecione um tema para acessar todos os artigos relacionados.</p>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {blogCategories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 0.05}>
                <a
                  href={cat.wpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {categoryIcons[cat.slug] || <BookOpen size={22} />}
                    </span>
                    <ArrowUpRight size={16} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{cat.description}</p>
                  </div>
                  <span className="text-[11px] font-medium text-muted-foreground">{cat.postCount} artigos</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent posts */}
      <section className="border-t border-border py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <h2 className="text-2xl font-bold">Artigos recentes</h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.06}>
                <a
                  href={post.wpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:scale-[1.02]"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="inline-block w-fit rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                      {post.category}
                    </span>
                    <h3 className="mt-3 font-display text-base font-bold leading-snug group-hover:text-primary transition-colors" style={{ overflowWrap: "break-word" }}>
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span>{new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}</span>
                        <span>·</span>
                        <span>{post.readTime} de leitura</span>
                      </div>
                      <ArrowUpRight size={16} className="text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
