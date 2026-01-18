import { Link } from "react-router-dom";
import { Scale, ShoppingBag, Briefcase, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  {
    icon: Scale,
    title: "Direito Civil",
    description:
      "Contratos, responsabilidade civil, direito imobiliário, cobranças e execuções. Protegemos seus interesses em todas as relações civis.",
    href: "/areas-de-atuacao#civil",
  },
  {
    icon: ShoppingBag,
    title: "Direito do Consumidor",
    description:
      "Defesa dos seus direitos como consumidor. Atuamos em casos de produtos defeituosos, cobranças indevidas e práticas abusivas.",
    href: "/areas-de-atuacao#consumidor",
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description:
      "Representação em reclamações trabalhistas, acordos, rescisões contratuais e defesa de direitos do trabalhador.",
    href: "/areas-de-atuacao#trabalhista",
  },
  {
    icon: Heart,
    title: "Direito de Família",
    description:
      "Divórcio, guarda de filhos, pensão alimentícia, inventário e partilha de bens. Apoio jurídico sensível para momentos delicados.",
    href: "/areas-de-atuacao#familia",
  },
];

export function PracticeAreas() {
  return (
    <section className="py-24 bg-muted/50 border-t border-border/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Especialidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground">
            Nossa equipe é especializada em diversas áreas do direito, oferecendo
            soluções completas para suas necessidades jurídicas.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <Link
              key={area.title}
              to={area.href}
              className="group bg-card rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-gold/50 relative overflow-hidden"
            >
              <div className="bg-primary/5 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-500">
                <area.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors font-heading">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors">
                {area.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-gold">
                Saiba mais
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/areas-de-atuacao">
              Ver Todas as Áreas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
