import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Cliente - Direito de Família",
    content:
      "O Dr. Almeida conduziu meu processo de divórcio com muita sensibilidade e profissionalismo. Me senti acolhida em um momento tão difícil. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Cliente - Direito Trabalhista",
    content:
      "Excelente atendimento! A Dra. Torres explicou todo o processo de forma clara e conseguiu todos os meus direitos trabalhistas. Escritório muito organizado.",
    rating: 5,
  },
  {
    name: "Ana Oliveira",
    role: "Cliente - Direito do Consumidor",
    content:
      "Tive um problema com uma empresa e achei que não tinha solução. A equipe do escritório resolveu meu caso rapidamente. Muito gratos pela atenção!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="opacity-90">
            A satisfação dos nossos clientes é nossa maior conquista. Confira alguns
            depoimentos de quem confiou em nosso trabalho.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20"
            >
              <Quote className="h-10 w-10 opacity-30 mb-4" />
              <p className="text-sm leading-relaxed mb-6 opacity-95">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm opacity-70">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm opacity-70 mt-8">
          * Depoimentos de exemplo. Você pode adicionar depoimentos reais dos seus clientes.
        </p>
      </div>
    </section>
  );
}
