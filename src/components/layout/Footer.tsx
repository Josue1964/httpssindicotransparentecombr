import { Link } from "react-router-dom";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-wide section-padding py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-primary">Síndico Transparente</h3>
            <p className="text-sm leading-relaxed text-muted-foreground prose-readable">
              Apoio estratégico para síndicos e condomínios com foco em organização, transparência e resultados.
            </p>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Serviços</h4>
            <nav className="flex flex-col gap-2">
              {services.slice(0, 5).map(s => (
                <Link key={s.slug} to={`/servicos/${s.slug}`} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {s.shortTitle}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navegação */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/como-funciona" className="text-sm text-muted-foreground transition-colors hover:text-primary">Como Funciona</Link>
              <Link to="/sobre" className="text-sm text-muted-foreground transition-colors hover:text-primary">Sobre</Link>
              <Link to="/blog" className="text-sm text-muted-foreground transition-colors hover:text-primary">Blog</Link>
              <Link to="/faq" className="text-sm text-muted-foreground transition-colors hover:text-primary">FAQ</Link>
              <Link to="/contato" className="text-sm text-muted-foreground transition-colors hover:text-primary">Contato</Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contato</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:contato@sindicotransparente.com.br" className="transition-colors hover:text-primary">contato@sindicotransparente.com.br</a>
              <a href="tel:+5511999999999" className="transition-colors hover:text-primary">(11) 99999-9999</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Síndico Transparente. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
