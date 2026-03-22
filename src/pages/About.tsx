import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>Sobre a Síndico Transparente</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Uma empresa voltada a apoiar síndicos e condomínios com soluções práticas, organização, clareza e apoio à gestão.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-narrow section-padding">
          <ScrollReveal>
            <div className="prose-readable space-y-6 text-foreground/90">
              <p className="text-lg leading-relaxed">
                A Síndico Transparente nasceu da percepção de que muitos síndicos e condomínios enfrentam desafios complexos sem o apoio adequado. Questões administrativas, financeiras, operacionais e de relacionamento com moradores exigem conhecimento, organização e dedicação — e nem sempre o gestor tem acesso a ferramentas ou orientações que facilitem esse trabalho.
              </p>
              <p className="text-lg leading-relaxed">
                Nossa proposta é oferecer soluções que vão além do operacional. Trabalhamos com foco em estratégia, organização e transparência, ajudando síndicos a tomar decisões mais seguras, a estruturar processos e a melhorar a comunicação com os condôminos.
              </p>
              <p className="text-lg leading-relaxed">
                Acreditamos que a gestão condominial pode ser mais clara, mais organizada e mais eficiente — e estamos aqui para tornar isso possível.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container-wide section-padding">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Missão", text: "Apoiar síndicos e condomínios com soluções práticas, organizadas e transparentes que melhorem a qualidade da gestão condominial e a convivência entre moradores." },
              { icon: Eye, title: "Visão", text: "Ser referência em apoio à gestão condominial, reconhecida pela qualidade, transparência e pelo impacto positivo nas comunidades que atendemos." },
              { icon: Heart, title: "Valores", text: "Transparência em cada processo. Organização como base de tudo. Compromisso com resultados reais. Respeito às pessoas e às comunidades. Clareza na comunicação." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="rounded-2xl bg-card p-8 shadow-sm h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                    <h2 className="mt-4 font-display text-xl font-bold">{item.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{item.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-16">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Quer conhecer melhor nossos serviços?</h2>
              <p className="mt-3 text-blue-200/70">Descubra como podemos apoiar o seu condomínio.</p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90 font-semibold" asChild>
                  <Link to="/servicos">Ver serviços</Link>
                </Button>
                <Button size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold" asChild>
                  <Link to="/contato">Fale conosco</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
