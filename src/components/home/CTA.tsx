import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Precisa de Orientação Jurídica?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Agende uma consulta com nossa equipe. A primeira análise do seu caso é 
            gratuita. Estamos prontos para ajudar você a encontrar a melhor solução.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base" asChild>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale com um Advogado Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base" asChild>
              <a href="tel:+5511999999999">
                <Phone className="mr-2 h-5 w-5" />
                (11) 99999-9999
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
