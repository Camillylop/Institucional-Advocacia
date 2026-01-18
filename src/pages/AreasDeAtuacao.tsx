import { Layout } from "@/components/layout/Layout";
import { Scale, ShoppingBag, Briefcase, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  {
    id: "civil",
    icon: Scale,
    title: "Direito Civil",
    description: "Atuamos em todas as questões relacionadas ao direito civil, protegendo seus interesses em relações contratuais, patrimoniais e obrigacionais.",
    services: [
      "Elaboração e revisão de contratos",
      "Ações de cobrança e execução",
      "Direito imobiliário e locações",
      "Responsabilidade civil e indenizações",
      "Usucapião e regularização de imóveis",
      "Ações possessórias",
    ],
  },
  {
    id: "consumidor",
    icon: ShoppingBag,
    title: "Direito do Consumidor",
    description: "Defendemos os direitos dos consumidores contra práticas abusivas de empresas e fornecedores de produtos e serviços.",
    services: [
      "Ações contra cobranças indevidas",
      "Produtos e serviços defeituosos",
      "Propaganda enganosa",
      "Negativação indevida no SPC/Serasa",
      "Problemas com financiamentos",
      "Indenização por danos morais",
    ],
  },
  {
    id: "trabalhista",
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Representamos trabalhadores na defesa de seus direitos, garantindo que recebam tudo aquilo que lhes é devido por lei.",
    services: [
      "Reclamações trabalhistas",
      "Verbas rescisórias",
      "Horas extras e adicional noturno",
      "Assédio moral e sexual no trabalho",
      "Acidente de trabalho",
      "Reconhecimento de vínculo empregatício",
    ],
  },
  {
    id: "familia",
    icon: Heart,
    title: "Direito de Família",
    description: "Oferecemos apoio jurídico sensível e profissional em questões familiares, buscando soluções que priorizem o bem-estar de todos os envolvidos.",
    services: [
      "Divórcio consensual e litigioso",
      "Guarda de filhos e regulamentação de visitas",
      "Pensão alimentícia",
      "Reconhecimento e dissolução de união estável",
      "Inventário e partilha de bens",
      "Adoção",
    ],
  },
];

const AreasDeAtuacao = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
              Especialidades
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Áreas de Atuação
            </h1>
            <p className="text-lg opacity-90">
              Contamos com uma equipe especializada em diversas áreas do direito, 
              pronta para oferecer as melhores soluções para o seu caso.
            </p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="section-padding bg-background">
        <div className="container-custom space-y-16">
          {areas.map((area, index) => (
            <div
              key={area.id}
              id={area.id}
              className={`grid lg:grid-cols-2 gap-12 items-center scroll-mt-24 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {area.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {area.description}
                </p>
                <Button asChild>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar um Especialista
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className={`bg-secondary rounded-lg p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-semibold text-foreground mb-4">
                  Serviços oferecidos:
                </h3>
                <ul className="space-y-3">
                  {area.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">
            Não Encontrou Sua Necessidade?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco. Nossa equipe está preparada para analisar 
            seu caso e indicar a melhor solução jurídica.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AreasDeAtuacao;
