
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideProps {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: SlideProps[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Full Stack Developer",
    subtitle: "Transformando ideias em soluções digitais completas"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Landing Pages & Sites Institucionais",
    subtitle: "Experiências web de alto impacto e conversão"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "APIs & Integrações",
    subtitle: "Conectando sistemas e automatizando processos"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Painéis Administrativos",
    subtitle: "Gestão visual e eficiente para seu negócio"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
            <div className="text-center max-w-4xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg"
                  onClick={() => document.getElementById("contato")?.scrollIntoView()}
                >
                  Entre em contato
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 px-6 py-6 text-lg"
                  onClick={() => document.getElementById("projetos")?.scrollIntoView()}
                >
                  Ver projetos
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-primary" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
