import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectResidential1 from "@/assets/project-residential-1.jpg";
import projectResidential2 from "@/assets/project-residential-2.jpg";
import projectCommercial1 from "@/assets/project-commercial-1.jpg";
import projectCommercial2 from "@/assets/project-commercial-2.jpg";
import projectInterior1 from "@/assets/project-interior-1.jpg";
import projectInterior2 from "@/assets/project-interior-2.jpg";

const categories = [
  { id: "all", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "comercial", label: "Comercial" },
  { id: "interiores", label: "Interiores" },
];

const projects = [
  {
    id: 1,
    title: "Casa Jardim Paulista",
    location: "São Paulo, SP",
    category: "residencial",
    image: projectResidential1,
    description: "Residência de 450m² com integração total entre áreas internas e externas, destacando uma piscina com borda infinita e jardim tropical.",
    year: "2023",
    area: "450m²",
  },
  {
    id: 2,
    title: "Torre Corporativa Alpha",
    location: "Rio de Janeiro, RJ",
    category: "comercial",
    image: projectCommercial1,
    description: "Edifício comercial de 25 andares com fachada em vidro de alta performance e certificação LEED Gold.",
    year: "2022",
    area: "15.000m²",
  },
  {
    id: 3,
    title: "Loft Vila Madalena",
    location: "São Paulo, SP",
    category: "interiores",
    image: projectInterior1,
    description: "Reforma completa de loft industrial, combinando concreto aparente, madeira de demolição e design contemporâneo.",
    year: "2023",
    area: "180m²",
  },
  {
    id: 4,
    title: "Casa de Praia Guarujá",
    location: "Guarujá, SP",
    category: "residencial",
    image: projectResidential2,
    description: "Casa elevada com vista panorâmica para o mar, estrutura em madeira certificada e sistemas de ventilação natural.",
    year: "2024",
    area: "320m²",
  },
  {
    id: 5,
    title: "Restaurante Terraço",
    location: "Belo Horizonte, MG",
    category: "comercial",
    image: projectCommercial2,
    description: "Restaurante contemporâneo em edifício histórico, preservando elementos originais com intervenções modernas.",
    year: "2023",
    area: "280m²",
  },
  {
    id: 6,
    title: "Apartamento Higienópolis",
    location: "São Paulo, SP",
    category: "interiores",
    image: projectInterior2,
    description: "Reforma de apartamento em edifício dos anos 60, resgatando elementos art déco com funcionalidade contemporânea.",
    year: "2024",
    area: "220m²",
  },
];

interface ProjectModalProps {
  project: typeof projects[0];
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl bg-background rounded-lg overflow-hidden shadow-strong"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <span className="text-primary text-sm uppercase tracking-wider font-medium">
              {project.category}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mt-2 mb-3">
              {project.title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mb-4">
              <MapPin size={14} className="mr-1" />
              {project.location}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex gap-6 text-sm border-t border-border pt-6">
              <div>
                <span className="text-muted-foreground">Ano</span>
                <p className="font-medium text-foreground">{project.year}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Área</span>
                <p className="font-medium text-foreground">{project.area}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projetos" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-3 mb-4">
            Projetos Selecionados
          </h2>
          <p className="text-muted-foreground">
            Uma curadoria dos nossos trabalhos mais significativos em arquitetura 
            residencial, comercial e design de interiores.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary-foreground/70 text-xs uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl text-primary-foreground font-medium mt-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-primary-foreground/70 text-sm mt-2">
                      <MapPin size={12} className="mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-4">
                    <ArrowRight size={16} className="text-primary-foreground" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="elegant" size="lg" asChild>
            <a href="#contato">
              Discutir seu projeto
              <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
