import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { toast } from "sonner";

export default function RequestProposal() {
  const [form, setForm] = useState({
    nome: "", condominio: "", cidade: "", telefone: "", email: "",
    servico: "", unidades: "", necessidade: "", mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*Solicitação de Proposta*`,
      ``,
      `*Nome:* ${form.nome}`,
      form.condominio ? `*Condomínio:* ${form.condominio}` : "",
      form.cidade ? `*Cidade:* ${form.cidade}` : "",
      `*Telefone:* ${form.telefone}`,
      `*E-mail:* ${form.email}`,
      form.servico ? `*Serviço:* ${form.servico}` : "",
      form.unidades ? `*Unidades:* ${form.unidades}` : "",
      form.necessidade ? `*Necessidade:* ${form.necessidade}` : "",
      form.mensagem ? `*Mensagem:* ${form.mensagem}` : "",
    ].filter(Boolean).join("%0A");
    const url = `https://wa.me/5521993750707?text=${encodeURI(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Redirecionando para o WhatsApp...");
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [field]: e.target.value });

  const inputClass = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <Layout>
      <section className="bg-primary-dark py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>
                Solicite uma proposta para o seu condomínio
              </h1>
              <p className="mt-4 text-lg text-blue-200/70">
                Preencha as informações abaixo para que possamos entender a necessidade do seu condomínio e apresentar a solução mais adequada.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-narrow section-padding">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">Nome completo *</label>
                  <input type="text" required value={form.nome} onChange={update("nome")} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Nome do condomínio</label>
                  <input type="text" value={form.condominio} onChange={update("condominio")} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Cidade</label>
                  <input type="text" value={form.cidade} onChange={update("cidade")} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Telefone *</label>
                  <input type="tel" required value={form.telefone} onChange={update("telefone")} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">E-mail *</label>
                  <input type="email" required value={form.email} onChange={update("email")} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Serviço de interesse</label>
                  <select value={form.servico} onChange={update("servico")} className={inputClass}>
                    <option value="">Selecione...</option>
                    {services.map(s => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Outro">Outro / Não sei ainda</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Quantidade de unidades</label>
                  <input type="text" placeholder="Ex: 48 unidades" value={form.unidades} onChange={update("unidades")} className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">Principal necessidade</label>
                  <input type="text" placeholder="Descreva brevemente o que motivou o contato" value={form.necessidade} onChange={update("necessidade")} className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">Mensagem adicional</label>
                  <textarea rows={4} value={form.mensagem} onChange={update("mensagem")} className={`${inputClass} resize-none`} />
                </div>
              </div>

              <Button type="submit" size="xl" className="mt-6 w-full bg-primary text-white hover:bg-primary/90 font-semibold sm:w-auto">
                Enviar solicitação
              </Button>

              <p className="mt-4 text-xs text-muted-foreground">
                Ao enviar, você concorda em ser contactado por nossa equipe. Responderemos em até 2 dias úteis.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
