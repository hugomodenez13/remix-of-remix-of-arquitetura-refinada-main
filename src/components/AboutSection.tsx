import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Leaf, Palette } from "lucide-react";
import architectPortrait from "@/assets/architect-portrait.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Soluções criativas que desafiam o convencional",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Projetos conscientes com o meio ambiente",
  },
  {
    icon: Palette,
    title: "Personalização",
    description: "Cada projeto é único como seu cliente",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={architectPortrait}
                alt="Ricardo Mendes - Arquiteto"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-lg -z-10" />
            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-medium"
            >
              <span className="block text-3xl font-display font-semibold">15+</span>
              <span className="text-sm opacity-90">Anos de Experiência</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
              Sobre o Arquiteto
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-3 mb-6 leading-tight">
              Ricardo Mendes
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 15 anos de experiência em arquitetura de alto padrão, 
                desenvolvo projetos que harmonizam estética, funcionalidade e a 
                identidade única de cada cliente.
              </p>
              <p>
                Formado pela FAU-USP com especialização em arquitetura sustentável 
                pela AA School de Londres, minha abordagem combina técnicas 
                tradicionais com inovações contemporâneas.
              </p>
              <p>
                Cada projeto é uma colaboração íntima com o cliente, onde suas 
                necessidades e sonhos são traduzidos em espaços que inspiram e 
                transformam o cotidiano.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-3">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
