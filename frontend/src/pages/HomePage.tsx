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
        {/* Contenido Principal */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 md:py-40">
          <div className="max-w-5xl mx-auto fadein opacity-0 translate-y-8 transition-all duration-700">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Fortitud 88
            </h1>
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-12 max-w-4xl mx-auto text-gray-200" style={{lineHeight: '1.2'}}>
              Maestría Física, Mental, Emocional, Carácter, Voluntad
            </p>
            <button
              onClick={() => navigate('/steps-to-do')}
              className="bg-blue-600 text-white text-xl md:text-2xl px-12 py-5 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 hover:scale-105 transform hover:shadow-xl hover:shadow-blue-500/25"
            >
              COMIENZA AHORA
            </button>
          </div>
        </div>


        {/* Testimonios Grid */}
        <div className="w-full max-w-7xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <p className="text-lg text-gray-300 italic mb-4">"{testimonial.text}"</p>
                <span className="text-blue-400 font-semibold block">{testimonial.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;