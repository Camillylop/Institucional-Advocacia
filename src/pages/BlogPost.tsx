import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: string[];
}> = {
  "direitos-do-consumidor-compras-online": {
    title: "Seus Direitos nas Compras Online: O Que Você Precisa Saber",
    excerpt: "Conheça os principais direitos que protegem o consumidor nas compras pela internet.",
    author: "Dra. Fernanda Torres",
    date: "2024-01-15",
    category: "Direito do Consumidor",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    content: [
      "As compras online se tornaram parte do cotidiano dos brasileiros, oferecendo praticidade e variedade. No entanto, muitos consumidores ainda desconhecem os direitos que os protegem nessas transações. O Código de Defesa do Consumidor (CDC) e o Decreto 7.962/2013 estabelecem regras específicas para o comércio eletrônico.",
      "## Direito de Arrependimento",
      "Um dos direitos mais importantes nas compras online é o direito de arrependimento, previsto no artigo 49 do CDC. O consumidor pode desistir da compra em até 7 dias corridos após o recebimento do produto, sem precisar justificar o motivo. Nesse caso, todos os valores pagos devem ser devolvidos integralmente, incluindo o frete.",
      "## Informações Claras e Precisas",
      "As lojas virtuais são obrigadas a fornecer informações claras sobre os produtos, incluindo características, preço total, formas de pagamento, prazo de entrega e dados da empresa (CNPJ, endereço e contato). A falta dessas informações pode caracterizar prática abusiva.",
      "## Prazo de Entrega",
      "O prazo de entrega informado no momento da compra deve ser cumprido. O atraso na entrega configura descumprimento da oferta, dando ao consumidor o direito de exigir o cumprimento forçado, aceitar produto equivalente ou cancelar a compra com restituição integral.",
      "## Produto com Defeito",
      "Em caso de produto com defeito, o fornecedor tem 30 dias para resolver o problema. Se não resolver, o consumidor pode exigir a substituição do produto, a restituição do valor pago ou o abatimento proporcional do preço.",
      "## Como Proceder em Caso de Problemas",
      "Se você enfrentar problemas em uma compra online, o primeiro passo é entrar em contato com a loja através dos canais oficiais e registrar a reclamação por escrito. Caso não haja solução, você pode recorrer ao Procon, à plataforma consumidor.gov.br ou buscar orientação jurídica especializada.",
    ],
  },
  "verbas-rescisorias-demissao": {
    title: "Verbas Rescisórias: O Que Você Tem Direito a Receber na Demissão",
    excerpt: "Entenda quais são as verbas rescisórias devidas em cada tipo de demissão.",
    author: "Dra. Fernanda Torres",
    date: "2024-01-08",
    category: "Direito Trabalhista",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A rescisão do contrato de trabalho é um momento que gera muitas dúvidas para os trabalhadores. Conhecer seus direitos é fundamental para garantir que todas as verbas devidas sejam pagas corretamente.",
      "## Demissão Sem Justa Causa",
      "Na demissão sem justa causa, o trabalhador tem direito a: saldo de salário, aviso prévio (trabalhado ou indenizado), férias vencidas e proporcionais + 1/3, 13º salário proporcional, multa de 40% sobre o FGTS e saque do FGTS. Também é possível solicitar o seguro-desemprego, se cumpridos os requisitos.",
      "## Pedido de Demissão",
      "Quando o trabalhador pede demissão, tem direito a: saldo de salário, férias vencidas e proporcionais + 1/3, e 13º salário proporcional. Não há direito à multa do FGTS, ao saque do fundo nem ao seguro-desemprego.",
      "## Demissão por Justa Causa",
      "Na justa causa, o trabalhador recebe apenas o saldo de salário e as férias vencidas + 1/3. Perde os demais direitos, incluindo aviso prévio, 13º proporcional, multa e saque do FGTS.",
      "## Prazos para Pagamento",
      "As verbas rescisórias devem ser pagas em até 10 dias corridos após o término do contrato. O não pagamento no prazo gera multa equivalente a um salário do trabalhador.",
      "## Atenção aos Valores",
      "É importante conferir todos os valores calculados no Termo de Rescisão do Contrato de Trabalho (TRCT). Em caso de dúvidas ou discordância, procure orientação jurídica antes de assinar a quitação.",
    ],
  },
  "guarda-compartilhada-como-funciona": {
    title: "Guarda Compartilhada: Como Funciona e Quais as Vantagens",
    excerpt: "A guarda compartilhada é o modelo preferencial no Brasil.",
    author: "Dr. Carlos Almeida",
    date: "2023-12-20",
    category: "Direito de Família",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Desde 2014, a guarda compartilhada passou a ser a regra no Brasil, mesmo quando não há acordo entre os pais. Essa modalidade visa garantir o melhor interesse da criança, mantendo a convivência equilibrada com ambos os genitores.",
      "## O Que é Guarda Compartilhada",
      "A guarda compartilhada significa que ambos os pais têm responsabilidade conjunta sobre as decisões importantes na vida dos filhos, como educação, saúde e atividades extracurriculares. Não se trata apenas de dividir o tempo de convivência.",
      "## Diferença de Guarda Alternada",
      "É importante não confundir guarda compartilhada com guarda alternada. Na alternada, a criança passa períodos iguais com cada genitor. Na compartilhada, pode haver uma residência principal, mas as decisões são tomadas em conjunto.",
      "## Vantagens para os Filhos",
      "Estudos demonstram que a guarda compartilhada traz benefícios emocionais e psicológicos para as crianças, que mantêm vínculos fortes com ambos os pais. Isso contribui para um desenvolvimento mais saudável e equilibrado.",
      "## Como Funciona na Prática",
      "Os pais devem estabelecer uma rotina que atenda às necessidades da criança, definindo dias de convivência, férias, feriados e datas comemorativas. A comunicação respeitosa entre os genitores é fundamental.",
      "## Quando Não é Recomendada",
      "A guarda compartilhada pode não ser indicada em casos de violência doméstica, abuso ou quando um dos pais demonstra incapacidade de cuidar adequadamente da criança. Nesses casos, o juiz pode determinar a guarda unilateral.",
    ],
  },
  "contrato-aluguel-cuidados": {
    title: "Contrato de Aluguel: Cuidados Essenciais Antes de Assinar",
    excerpt: "Antes de assinar um contrato de locação, verifique estas cláusulas importantes.",
    author: "Dr. Carlos Almeida",
    date: "2023-12-12",
    category: "Direito Civil",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    content: [
      "O contrato de locação é um documento que estabelece direitos e deveres tanto do locador quanto do locatário. Antes de assinar, é fundamental analisar cada cláusula com atenção para evitar problemas futuros.",
      "## Prazo do Contrato",
      "Verifique o prazo de locação e as condições para renovação. Contratos com prazo de 30 meses ou mais garantem ao locatário o direito à renovação automática. Em prazos menores, o locador pode pedir o imóvel ao final do contrato.",
      "## Valor do Aluguel e Reajustes",
      "Confira o valor mensal, a data de vencimento e o índice de reajuste (geralmente IGP-M ou IPCA). O contrato deve especificar claramente como será feita a correção anual do valor.",
      "## Garantias Locatícias",
      "Existem diferentes formas de garantia: fiador, seguro-fiança, caução (depósito de até 3 meses de aluguel) ou título de capitalização. Entenda qual será exigida e suas implicações.",
      "## Responsabilidade por Reparos",
      "A Lei do Inquilinato define que reparos estruturais são responsabilidade do proprietário, enquanto pequenos reparos decorrentes do uso são do inquilino. Verifique se o contrato respeita essa divisão.",
      "## Vistoria do Imóvel",
      "Exija um laudo de vistoria detalhado antes de entrar no imóvel, com fotos. Este documento será fundamental na devolução do imóvel para comprovar o estado em que foi recebido.",
      "## Multa por Rescisão Antecipada",
      "Verifique o valor da multa em caso de rescisão antes do prazo. Geralmente, é proporcional ao período restante. Após 12 meses, há redução proporcional da multa.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug] : null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (!post) {
    return (
      <Layout>
        <div className="section-padding container-custom text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Button asChild>
            <Link to="/blog">Voltar ao Blog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container-custom">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm opacity-80 hover:opacity-100 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar ao Blog
          </Link>
          <span className="text-xs font-medium bg-primary-foreground/20 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4 max-w-3xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm opacity-80">
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
      </section>

      {/* Content */}
      <article className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-lg mb-8"
            />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-foreground mt-8 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-muted-foreground leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Share & CTA */}
            <div className="border-t border-border mt-12 pt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
                <div className="text-center sm:text-right">
                  <p className="text-sm text-muted-foreground mb-2">
                    Precisa de orientação sobre este tema?
                  </p>
                  <Button asChild>
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fale com um Advogado
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-secondary rounded-lg p-6 mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Aviso:</strong> Este artigo tem caráter informativo e não 
                substitui a consulta a um advogado. Cada caso possui suas particularidades 
                e deve ser analisado individualmente por um profissional qualificado.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
