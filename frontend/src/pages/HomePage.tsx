import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const heroImageUrl =
    'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80';

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
        className="min-h-screen w-full bg-cover bg-center bg-fixed bg-no-repeat text-white flex flex-col relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('${heroImageUrl}')`,
        }}
      >
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between px-4 py-24 md:py-40 gap-8 max-w-7xl mx-auto w-full">
          {/* Columna Izquierda: Título, Subtítulo y Botón */}
          <div className="w-full md:w-3/5 fadein opacity-0 translate-y-8 transition-all duration-700 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 text-left">
              Fortitud 88
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 text-gray-200 text-left" style={{lineHeight: '1.3'}}>
              Maestría Física, Mental, Emocional, Carácter, Voluntad
            </p>
            <button
              onClick={() => navigate('/steps-to-do')}
              className="bg-blue-600 text-white text-lg md:text-xl px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform hover:shadow-xl hover:shadow-blue-500/25"
            >
              COMIENZA AHORA
            </button>
          </div>
          {/* Columna Derecha: Testimonios más compactos */}
          <div className="w-full md:w-2/5 flex flex-col items-end justify-center gap-4 mt-12 md:mt-0">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-lg p-4 shadow-lg transform hover:scale-105 transition-all duration-300 w-full max-w-[300px] text-right"
              >
                <p className="text-sm md:text-base text-gray-300 italic mb-2 leading-relaxed">"{testimonial.text}"</p>
                <span className="text-blue-400 font-semibold text-sm">{testimonial.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;