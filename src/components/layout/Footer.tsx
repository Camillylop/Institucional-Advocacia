import { Link } from "react-router-dom";
import { Scale, MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook } from "lucide-react";

const practiceAreas = [
  { name: "Direito Civil", href: "/areas-de-atuacao#civil" },
  { name: "Direito do Consumidor", href: "/areas-de-atuacao#consumidor" },
  { name: "Direito Trabalhista", href: "/areas-de-atuacao#trabalhista" },
  { name: "Direito de Família", href: "/areas-de-atuacao#familia" },
];

const quickLinks = [
  { name: "Sobre o Escritório", href: "/sobre" },
  { name: "Nossa Equipe", href: "/equipe" },
  { name: "Blog Jurídico", href: "/blog" },
  { name: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Scale className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight">
                  Almeida & Torres
                </span>
                <span className="text-xs opacity-80 tracking-wider uppercase">
                  Advocacia
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Escritório de advocacia comprometido com a excelência jurídica e o atendimento humanizado aos nossos clientes.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-semibold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    to={area.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Av. Exemplo, 1234 - Sala 501<br />Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contato@almeidatorresadv.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Seg - Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Almeida & Torres Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-sm opacity-70">
            OAB/SP 12345 | OAB/SP 67890
          </p>
        </div>
      </div>
    </footer>
  );
}
