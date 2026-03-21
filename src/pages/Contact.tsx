import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
  };

  return (
    <Layout>
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>Contato</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Estamos à disposição para conversar sobre as necessidades do seu condomínio. Escolha o canal que preferir.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-wide section-padding">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-xl font-bold">Fale conosco</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Envie sua mensagem pelo formulário ou entre em contato diretamente por um dos nossos canais. Respondemos em até 1 dia útil.
                </p>

                <div className="mt-8 space-y-5">
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(142,70%,40%)]/10 text-[hsl(142,70%,40%)]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">WhatsApp</p>
                      <p className="text-xs text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </a>

                  <a href="mailto:contato@sindicotransparente.com.br" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">E-mail</p>
                      <p className="text-xs text-muted-foreground">contato@sindicotransparente.com.br</p>
                    </div>
                  </a>

                  <a href="tel:+5511999999999" className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Telefone</p>
                      <p className="text-xs text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium">Nome completo</label>
                      <input type="text" required value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">E-mail</label>
                      <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Telefone</label>
                      <input type="tel" value={form.telefone} onChange={e => setForm({...form, telefone: e.target.value})} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-1.5 block text-sm font-medium">Mensagem</label>
                      <textarea required rows={5} value={form.mensagem} onChange={e => setForm({...form, mensagem: e.target.value})} className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                    </div>
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="mt-5 w-full sm:w-auto">
                    Enviar mensagem
                  </Button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
