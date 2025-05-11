
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: ProjectProps[] = [
  {
    title: "E-commerce Admin Dashboard",
    description: "Painel administrativo completo para gerenciamento de produtos, pedidos e clientes de uma loja virtual.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Node.js", "MongoDB", "Dashboard"]
  },
  {
    title: "Landing Page Institucional",
    description: "Site institucional responsivo com alta taxa de conversão para uma empresa de tecnologia.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["React", "Tailwind CSS", "UI/UX", "SEO"]
  },
  {
    title: "API de Integração de Pagamentos",
    description: "API para integração de múltiplas plataformas de pagamento com um sistema de gestão empresarial.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Node.js", "Express", "API", "Integração"]
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Projetos Recentes</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma seleção dos meus projetos mais recentes e relevantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:scale-105 transition-all duration-300 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
