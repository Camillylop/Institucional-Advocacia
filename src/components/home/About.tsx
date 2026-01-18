import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Atendimento personalizado e humanizado",
  "Comunicação clara, sem juridiquês",
  "Transparência em todas as etapas",
  "Experiência comprovada no mercado",
  "Honorários justos e acessíveis",
  "Agilidade nos processos",
];

export function About() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-primary/10 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                alt="Escritório de advocacia moderno"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-90">Anos de Experiência</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                Quem Somos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tradição e Excelência em Advocacia
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                O escritório Almeida & Torres Advocacia nasceu da união de profissionais 
                apaixonados pelo Direito e comprometidos com a justiça. Há mais de 15 anos, 
                oferecemos assessoria jurídica de qualidade para pessoas físicas e pequenos 
                empresários.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Nossa missão é democratizar o acesso à justiça, oferecendo atendimento 
              humanizado e soluções jurídicas eficientes. Acreditamos que cada cliente 
              merece ser ouvido e ter seus direitos defendidos com dedicação.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link to="/sobre">
                Conheça Nossa História
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
