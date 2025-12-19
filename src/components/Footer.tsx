import { Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contato@architecto.com.br", label: "Email" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="inline-block mb-4">
              <span className="font-display text-2xl font-medium tracking-tight">
                Archi<span className="text-terracotta-light">tecto</span>
              </span>
            </a>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Transformando sonhos em espaços que inspiram. Arquitetura de alto padrão
              para projetos residenciais e comerciais.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-terracotta-light transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a href="tel:+5511999999999" className="hover:text-primary-foreground transition-colors">
                  +55 (11) 99999-9999
                </a>
              </li>
              <li>
                <a href="mailto:contato@architecto.com.br" className="hover:text-primary-foreground transition-colors">
                  contato@architecto.com.br
                </a>
              </li>
              <li>
                Rua Oscar Freire, 2066<br />
                Jardins, São Paulo - SP
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Architecto. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          >
            Voltar ao topo
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
