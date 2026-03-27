import { useState } from "react";
import { blogPosts, blogCategories } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { Search } from "lucide-react";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = blogPosts.filter(p => {
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = !category || p.category === category;
    return matchSearch && matchCat;
  });

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

      <section className="py-16 lg:py-24">
        <div className="container-wide section-padding">
          {/* Search & filters */}
          <ScrollReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative max-w-sm flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCategory(null)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${!category ? "bg-primary text-white" : "bg-secondary text-muted-foreground hover:bg-border"}`}
                >
                  Todos
                </button>
                {blogCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${category === cat ? "bg-primary text-white" : "bg-secondary text-muted-foreground hover:bg-border"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Posts */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.06}>
                <a
                  href="https://blog.sindicotransparente.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:scale-[1.02]"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                  <h2 className="mt-2 font-display text-lg font-bold leading-snug group-hover:text-primary transition-colors">{post.title}</h2>
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

          {filtered.length === 0 && (
            <div className="mt-12 text-center text-muted-foreground">
              <p>Nenhum artigo encontrado para os filtros selecionados.</p>
            </div>
          )}

          {/* WordPress notice */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 rounded-2xl border border-border bg-surface-warm p-6 text-center">
              <p className="text-sm text-muted-foreground">
                📝 Esta estrutura de blog está preparada para receber os conteúdos já existentes do WordPress. Os textos acima são exemplos para demonstrar o layout e a experiência de navegação.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
