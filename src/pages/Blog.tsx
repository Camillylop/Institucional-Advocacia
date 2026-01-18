import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "direitos-do-consumidor-compras-online",
    title: "Seus Direitos nas Compras Online: O Que Você Precisa Saber",
    excerpt: "Conheça os principais direitos que protegem o consumidor nas compras pela internet, incluindo o direito de arrependimento e como agir em caso de problemas.",
    author: "Dra. Fernanda Torres",
    date: "2024-01-15",
    category: "Direito do Consumidor",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    slug: "verbas-rescisorias-demissao",
    title: "Verbas Rescisórias: O Que Você Tem Direito a Receber na Demissão",
    excerpt: "Entenda quais são as verbas rescisórias devidas em cada tipo de demissão e saiba como calcular o que você tem direito a receber do empregador.",
    author: "Dra. Fernanda Torres",
    date: "2024-01-08",
    category: "Direito Trabalhista",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    slug: "guarda-compartilhada-como-funciona",
    title: "Guarda Compartilhada: Como Funciona e Quais as Vantagens",
    excerpt: "A guarda compartilhada é o modelo preferencial no Brasil. Saiba como ela funciona na prática, seus benefícios para os filhos e como solicitar.",
    author: "Dr. Carlos Almeida",
    date: "2023-12-20",
    category: "Direito de Família",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    slug: "contrato-aluguel-cuidados",
    title: "Contrato de Aluguel: Cuidados Essenciais Antes de Assinar",
    excerpt: "Antes de assinar um contrato de locação, é fundamental verificar algumas cláusulas importantes. Veja os principais pontos de atenção.",
    author: "Dr. Carlos Almeida",
    date: "2023-12-12",
    category: "Direito Civil",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
  },
];

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest opacity-80 mb-2">
              Informação Jurídica
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog Jurídico
            </h1>
            <p className="text-lg opacity-90">
              Artigos e orientações jurídicas em linguagem acessível para ajudar 
              você a entender seus direitos e tomar melhores decisões.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-foreground mt-4 mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary mt-4 hover:underline"
                  >
                    Ler artigo completo
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Fique por Dentro dos Seus Direitos
            </h2>
            <p className="text-muted-foreground mb-6">
              Nossos artigos são atualizados regularmente com informações úteis 
              sobre legislação, jurisprudência e orientações práticas.
            </p>
            <p className="text-sm text-muted-foreground">
              * Conteúdo informativo. Cada caso possui suas particularidades. 
              Consulte sempre um advogado para orientação específica.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
