import { useState } from "react";
import { blogPosts, blogCategories } from "@/data/blog";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { Search, ArrowUpRight } from "lucide-react";

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
          {/* Search & category tabs */}
          <ScrollReveal>
            <div className="flex flex-col gap-5">
              <div className="relative max-w-sm">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Category tabs */}
              <div className="flex gap-1 rounded-xl bg-muted p-1 w-fit">
                <button
                  onClick={() => setCategory(null)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    !category
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Todos
                </button>
                {blogCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      category === cat
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Posts grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.06}>
                <a
                  href={post.wpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:scale-[1.02]"
                >
                  {/* Post image */}
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
                    <h2 className="mt-3 font-display text-base font-bold leading-snug group-hover:text-primary transition-colors" style={{ overflowWrap: "break-word" }}>
                      {post.title}
                    </h2>
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

          {filtered.length === 0 && (
            <div className="mt-12 text-center text-muted-foreground">
              <p>Nenhum artigo encontrado para os filtros selecionados.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
