import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, PenTool, MessageSquare, HardHat, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Projetos Arquitetônicos",
    description: "Desenvolvimento completo de projetos residenciais e comerciais, desde o conceito inicial até a documentação executiva.",
    features: ["Estudo preliminar", "Anteprojeto", "Projeto executivo", "Detalhamento técnico"],
  },
  {
    icon: PenTool,
    title: "Design de Interiores",
    description: "Criação de ambientes que refletem a personalidade do cliente, harmonizando estética, conforto e funcionalidade.",
    features: ["Layout e mobiliário", "Especificação de materiais", "Iluminação", "Decoração"],
  },
  {
    icon: MessageSquare,
    title: "Consultoria",
    description: "Orientação especializada para otimização de espaços existentes, renovações e adequações de uso.",
    features: ["Análise de viabilidade", "Diagnóstico técnico", "Recomendações", "Orçamento estimado"],
  },
  {
    icon: HardHat,
    title: "Acompanhamento de Obra",
    description: "Supervisão técnica durante a execução, garantindo que o projeto seja realizado conforme especificado.",
    features: ["Visitas periódicas", "Coordenação de equipes", "Controle de qualidade", "Solução de imprevistos"],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-3 mb-4">
            Como podemos ajudar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Oferecemos uma gama completa de serviços de arquitetura, desde a concepção
            até a entrega final do seu projeto.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card rounded-lg p-8 lg:p-10 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-medium"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl lg:text-2xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow indicator */}
              <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2">
                <ArrowRight size={16} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
