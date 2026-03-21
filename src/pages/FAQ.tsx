import { faqItems } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const categories = [...new Set(faqItems.map(f => f.category))];

  return (
    <Layout>
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container-wide section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl" style={{ lineHeight: "1.1" }}>Perguntas frequentes</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Tire suas dúvidas sobre nossos serviços, formato de atendimento e processo de contratação.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-narrow section-padding">
          {categories.map((cat, ci) => (
            <ScrollReveal key={cat} delay={ci * 0.1}>
              <div className={ci > 0 ? "mt-12" : ""}>
                <h2 className="mb-4 text-lg font-bold text-primary">{cat}</h2>
                <Accordion type="single" collapsible>
                  {faqItems.filter(f => f.category === cat).map((faq, i) => (
                    <AccordionItem key={i} value={`${cat}-${i}`}>
                      <AccordionTrigger className="text-left text-base font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.3}>
            <div className="mt-16 rounded-2xl bg-secondary p-8 text-center">
              <h2 className="text-xl font-bold">Ainda tem dúvidas?</h2>
              <p className="mt-2 text-muted-foreground">Entre em contato e teremos prazer em esclarecer.</p>
              <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contato">Fale conosco</Link>
                </Button>
                <Button variant="whatsapp" size="lg" asChild>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
