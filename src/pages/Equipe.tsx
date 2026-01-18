import { Layout } from "@/components/layout/Layout";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Dr. Carlos Almeida",
    role: "Sócio Fundador",
    oab: "OAB/SP 12345",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Graduado em Direito pela Universidade de São Paulo (USP), com especialização em Direito Civil e Processual Civil pela PUC-SP. Possui mais de 20 anos de experiência em advocacia contenciosa e consultiva.",
    areas: ["Direito Civil", "Direito Imobiliário", "Contratos"],
    linkedin: "#",
    email: "carlos@almeidatorresadv.com.br",
  },
  {
    name: "Dra. Fernanda Torres",
    role: "Sócia Fundadora",
    oab: "OAB/SP 67890",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Formada em Direito pela Pontifícia Universidade Católica de São Paulo (PUC-SP), com mestrado em Direito do Trabalho pela USP. Atua há 18 anos na defesa dos direitos trabalhistas e de família.",
    areas: ["Direito Trabalhista", "Direito de Família", "Direito do Consumidor"],
    linkedin: "#",
    email: "fernanda@almeidatorresadv.com.br",
  },
];

const Equipe = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
              Conheça
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa Equipe
            </h1>
            <p className="text-lg opacity-90">
              Profissionais experientes e dedicados, prontos para defender seus 
              direitos com excelência e comprometimento.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-card rounded-lg overflow-hidden border border-border shadow-sm"
              >
                <div className="grid md:grid-cols-5">
                  {/* Image */}
                  <div className="md:col-span-2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {member.name}
                      </h2>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.oab}</p>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Áreas de Atuação:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.areas.map((area) => (
                          <span
                            key={area}
                            className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-2">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email de ${member.name}`}
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nossa Filosofia de Trabalho
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Acreditamos que a advocacia vai além da técnica jurídica. É sobre 
              pessoas, sobre histórias, sobre a busca por justiça. Por isso, 
              investimos tempo em conhecer cada cliente, entender suas necessidades 
              e construir estratégias personalizadas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa equipe trabalha de forma integrada, combinando diferentes 
              expertises para oferecer a melhor solução para cada caso. A troca 
              constante de conhecimentos e a atualização permanente são parte 
              fundamental da nossa rotina.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipe;
