import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@architecto.com.br",
    href: "mailto:contato@architecto.com.br",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua Oscar Freire, 2066 - Jardins, São Paulo - SP",
    href: "https://maps.google.com",
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contato" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
              Contato
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-3 mb-6">
              Vamos conversar sobre seu projeto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Estamos prontos para ouvir suas ideias e transformá-las em espaços 
              extraordinários. Entre em contato para agendar uma conversa inicial.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-lg p-8 lg:p-10 border border-border">
              <h3 className="font-display text-xl font-medium text-foreground mb-6">
                Envie sua mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensagem
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
