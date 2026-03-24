import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-white.png";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Blog", href: "https://sindicotransparente.com.br/blog/", external: true },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary-dark">
      <div className="container-wide section-padding flex h-16 items-center justify-between lg:h-18">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Síndico Transparente" className="h-14 w-auto lg:h-16" />
          </Link>
          <a href="https://www.instagram.com/sindico_transparente/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-1.5 text-white/70 transition-colors hover:text-white hover:bg-white/10">
            <Instagram size={18} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61583758199047" target="_blank" rel="noopener noreferrer" className="rounded-lg p-1.5 text-white/70 transition-colors hover:text-white hover:bg-white/10">
            <Facebook size={18} />
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map(link =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white hover:bg-white/10"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-white hover:bg-white/10 ${
                  location.pathname === link.href ? "text-white bg-white/10" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://www.instagram.com/sindico_transparente/" target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-white/80 transition-colors hover:text-white hover:bg-white/10">
            <Instagram size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61583758199047" target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-white/80 transition-colors hover:text-white hover:bg-white/10">
            <Facebook size={20} />
          </a>
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 shadow-md font-semibold" asChild>
            <Link to="/solicitar-proposta">Solicitar proposta</Link>
          </Button>
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/5521993750707" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-primary-dark lg:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map(link =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white ${
                      location.pathname === link.href ? "text-white bg-white/10" : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button size="lg" className="mt-2 bg-primary text-white hover:bg-primary/90 font-semibold" asChild>
                <Link to="/solicitar-proposta" onClick={() => setOpen(false)}>Solicitar proposta</Link>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/5521993750707" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>WhatsApp</a>
              </Button>
              <div className="mt-2 flex gap-3">
                <a href="https://www.instagram.com/sindico_transparente/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-lg p-2 text-white/80 transition-colors hover:text-white hover:bg-white/10">
                  <Instagram size={22} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61583758199047" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-lg p-2 text-white/80 transition-colors hover:text-white hover:bg-white/10">
                  <Facebook size={22} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
