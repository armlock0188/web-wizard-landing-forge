
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-card py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-gradient">DevPortfolio</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Soluções web completas para o seu negócio.
              Desenvolvimento de landing pages, sites institucionais,
              painéis administrativos, APIs e integrações.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary">Início</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-primary">Sobre</a></li>
              <li><a href="#projetos" className="text-gray-300 hover:text-primary">Projetos</a></li>
              <li><a href="#habilidades" className="text-gray-300 hover:text-primary">Habilidades</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-primary">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">contato@desenvolvedor.com</li>
              <li className="text-gray-300">(11) 99999-9999</li>
              <li className="text-gray-300">São Paulo, Brasil</li>
            </ul>
            <Button className="mt-4 bg-primary hover:bg-primary/90">
              Orçamento
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DevPortfolio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
