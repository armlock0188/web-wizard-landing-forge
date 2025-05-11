
import { Card, CardContent } from "./ui/card";
import { LayoutGrid, Gallery } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Sobre Mim</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor Full Stack com experiência em criar soluções web completas,
            desde interfaces interativas até APIs robustas e integração de sistemas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <LayoutGrid className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Websites & Landing Pages</h3>
              <p className="text-gray-300">
                Desenvolvimento de sites responsivos, modernos e otimizados para conversão. 
                Foco em experiência do usuário e performance.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <Gallery className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Painéis Administrativos</h3>
              <p className="text-gray-300">
                Dashboards e sistemas de gerenciamento intuitivos que facilitam 
                a administração e visualização de dados do seu negócio.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="mb-4 bg-primary/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M18 16.98h-5.99c-1.66 0-2.49-1.91-.84-3l7.26-4.81c1.66-1.09 3.73.19 3.73 2.3V19c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2.02z" />
                  <path d="M6 17H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z" />
                  <path d="m14 13-5-3v6l5-3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">APIs & Integrações</h3>
              <p className="text-gray-300">
                Desenvolvimento de APIs RESTful, conexão entre sistemas e integração 
                com serviços externos para automatizar processos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
