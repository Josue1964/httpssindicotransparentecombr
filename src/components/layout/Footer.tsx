import { Link } from "react-router-dom";
import { services } from "@/data/services";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary-dark">
      <div className="container-wide section-padding py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Síndico Transparente" className="h-10 w-auto" />
            <p className="text-sm leading-relaxed text-blue-200/70 prose-readable">
              Apoio estratégico para síndicos e condomínios com foco em organização, transparência e resultados.
            </p>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Serviços</h4>
            <nav className="flex flex-col gap-2">
              {services.slice(0, 5).map(s => (
                <Link key={s.slug} to={`/servicos/${s.slug}`} className="text-sm text-blue-200/70 transition-colors hover:text-white">
                  {s.shortTitle}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navegação */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/como-funciona" className="text-sm text-blue-200/70 transition-colors hover:text-white">Como Funciona</Link>
              <Link to="/sobre" className="text-sm text-blue-200/70 transition-colors hover:text-white">Sobre</Link>
              <a href="https://sindicotransparente.com.br/blog/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-200/70 transition-colors hover:text-white">Blog</a>
              <Link to="/faq" className="text-sm text-blue-200/70 transition-colors hover:text-white">FAQ</Link>
              <Link to="/contato" className="text-sm text-blue-200/70 transition-colors hover:text-white">Contato</Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contato</h4>
            <div className="flex flex-col gap-2 text-sm text-blue-200/70">
              <a href="mailto:contato@sindicotransparente.com.br" className="transition-colors hover:text-white">contato@sindicotransparente.com.br</a>
              <a href="tel:+5521993750707" className="transition-colors hover:text-white">(21) 99375-0707</a>
              <a href="https://wa.me/5521993750707" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-blue-200/50">
          © {new Date().getFullYear()} Síndico Transparente. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
