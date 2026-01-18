import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Target, Eye, Award } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos a excelência em cada atendimento, estudando cada caso com profundidade e dedicação.",
  },
  {
    icon: Target,
    title: "Ética",
    description: "Conduzimos nossa prática com integridade absoluta, seguindo rigorosamente o código de ética da OAB.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Mantemos nossos clientes informados sobre cada etapa do processo, sem surpresas.",
  },
  {
    icon: CheckCircle,
    title: "Compromisso",
    description: "Nosso compromisso é com a justiça e com a defesa integral dos direitos dos nossos clientes.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
              Sobre Nós
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Almeida & Torres Advocacia
            </h1>
            <p className="text-lg opacity-90">
              Há mais de 15 anos transformando desafios jurídicos em soluções, 
              com atendimento humanizado e resultados concretos.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O escritório Almeida & Torres Advocacia foi fundado em 2009 por 
                  Dr. Carlos Almeida e Dra. Fernanda Torres, dois advogados que 
                  compartilhavam o mesmo sonho: oferecer serviços jurídicos de 
                  qualidade com um atendimento verdadeiramente humanizado.
                </p>
                <p>
                  Ao longo dos anos, construímos uma trajetória sólida baseada na 
                  confiança de nossos clientes. Cada caso que assumimos é tratado 
                  com a mesma dedicação e seriedade, independentemente da sua 
                  complexidade.
                </p>
                <p>
                  Hoje, somos reconhecidos pela excelência no atendimento e pela 
                  capacidade de traduzir o "juridiquês" em uma linguagem acessível, 
                  permitindo que nossos clientes compreendam cada etapa do processo.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Escritório moderno"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à justiça, oferecendo serviços jurídicos de 
                excelência com atendimento humanizado, comunicação clara e honorários 
                justos, garantindo que cada cliente tenha seus direitos plenamente 
                defendidos.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Nossa Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecido como referência em advocacia humanizada e eficiente, 
                transformando a forma como as pessoas se relacionam com o sistema 
                jurídico e contribuindo para uma sociedade mais justa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-muted-foreground">
              Os pilares que guiam nossa atuação e nosso relacionamento com os clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-6 rounded-lg border border-border text-center"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Por Que Escolher Almeida & Torres?
            </h2>
            <div className="space-y-4 text-lg opacity-90">
              <p>
                Em um mercado repleto de opções, nos destacamos pelo compromisso 
                genuíno com cada cliente. Não somos apenas advogados; somos parceiros 
                na busca pelos seus direitos.
              </p>
              <p>
                Oferecemos um atendimento diferenciado, onde você é ouvido, respeitado 
                e mantido informado em todas as etapas. Nossa porta está sempre aberta 
                para esclarecer dúvidas e oferecer orientação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
