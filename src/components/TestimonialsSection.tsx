import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Fernanda e Carlos Silva",
    role: "Proprietários",
    project: "Casa Jardim Paulista",
    text: "O Ricardo conseguiu traduzir exatamente o que sonhávamos para nossa casa. Cada detalhe foi pensado com cuidado e o resultado superou todas as expectativas. A integração com o jardim é simplesmente perfeita.",
    avatar: "FS",
  },
  {
    id: 2,
    name: "Grupo Investimentos Alpha",
    role: "Diretoria",
    project: "Torre Corporativa Alpha",
    text: "A expertise técnica combinada com a visão estratégica do escritório foi fundamental para o sucesso do projeto. A certificação LEED Gold foi alcançada dentro do prazo e orçamento previstos.",
    avatar: "GA",
  },
  {
    id: 3,
    name: "Marina Santos",
    role: "Empresária",
    project: "Loft Vila Madalena",
    text: "Transformar um espaço industrial em um lar acolhedor parecia impossível, mas o resultado é incrível. O equilíbrio entre o rústico e o contemporâneo ficou exatamente como eu imaginava.",
    avatar: "MS",
  },
  {
    id: 4,
    name: "Roberto Mendonça",
    role: "Chef de Cozinha",
    project: "Restaurante Terraço",
    text: "O projeto respeitou a história do prédio enquanto criou um ambiente único para meu restaurante. Meus clientes sempre comentam sobre a atmosfera especial do espaço.",
    avatar: "RM",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
              Depoimentos
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-3">
              O que nossos clientes dizem
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-background rounded-lg p-8 md:p-12 shadow-soft relative"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <Quote className="w-12 h-12 text-primary/10" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-display italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].project}
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors"
                      aria-label="Depoimento anterior"
                    >
                      <ChevronLeft size={20} className="text-foreground" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors"
                      aria-label="Próximo depoimento"
                    >
                      <ChevronRight size={20} className="text-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
