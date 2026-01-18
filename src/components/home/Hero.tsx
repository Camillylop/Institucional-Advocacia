import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-navy text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="container-custom relative">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] py-16 text-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-widest opacity-80 font-medium text-gold">
                Advocacia de Excelência
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight font-heading">
                Soluções Jurídicas com{" "}
                <span className="text-gold italic">Compromisso</span> e{" "}
                <span className="text-gold italic">Ética</span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
                Advocacia humanizada e eficiente para você e sua empresa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-gold hover:bg-gold/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Fale com um Advogado
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>
              <Button
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg"
                asChild
              >
                <Link to="/areas-de-atuacao">Nossas Áreas</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading text-gold">15+</div>
                <div className="text-sm opacity-80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading text-gold">2000+</div>
                <div className="text-sm opacity-80">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading text-gold">98%</div>
                <div className="text-sm opacity-80">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
