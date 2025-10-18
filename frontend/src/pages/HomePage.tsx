import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const heroImageUrl =
    '/fondo.jpg'; // Imagen local de fondo

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.fadein').forEach((el) => {
        if (el instanceof HTMLElement) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 80) {
            el.classList.add('opacity-100', 'translate-y-0');
          }
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  const testimonials = [
    { name: 'Lucas M.', text: 'F88 cambió mi vida. ¡Me siento más fuerte y seguro cada día!' },
    { name: 'Sofía R.', text: 'El programa es motivador y la comunidad es increíble.' },
    { name: 'Martín G.', text: 'Alcancé mis metas más rápido de lo que imaginaba.' },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat md:bg-fixed text-white flex flex-col relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('${heroImageUrl}')`,
        }}
        role="region"
        aria-label="Hero - Fortitud 88"
      >
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-4 py-24 md:py-40 gap-8 max-w-7xl mx-auto w-full">
          {/* Columna Izquierda: Título, Subtítulo y Botón */}
          <div className="w-full md:w-3/5 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white text-left">
              Fortitud 88
            </h1>
            <p className="text-xl md:text-2xl lg:text-4xl font-bold mb-8 text-white text-left" style={{ lineHeight: '1.3' }}>
              Fortaleza Física, Mental, Emocional, de Carácter y de Voluntad en 88 días.
            </p>
            <button
              onClick={() => navigate('/steps-to-do')}
              className="bg-white text-black text-base md:text-lg px-8 py-3 rounded-full font-semibold border border-gray-300 hover:bg-gray-100 transition-all duration-200 focus:outline-none"
              style={{ boxShadow: 'none' }}
            >
              Comienza ahora
            </button>
          </div>
          {/* Columna Derecha: Testimonios más compactos */}
          <div className="w-full md:w-2/5 flex flex-col items-end justify-center gap-4 mt-12 md:mt-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-lg p-8 shadow-lg transform hover:scale-105 transition-all duration-300 w-full max-w-[450px] text-right"
              >
                <p className="text-lg md:text-xl text-gray-300 italic mb-2 leading-relaxed">"{testimonial.text}"</p>
                <span className="text-blue-400 font-semibold text-lg">{testimonial.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;