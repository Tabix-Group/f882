import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserPlus,
  CreditCard,
  BookOpenCheck,
  Users,
  Book,
  Dumbbell
  , Lightbulb, Handshake
} from 'lucide-react';

const steps = [
  { icon: UserPlus, label: 'Completa tu registro' },
  { icon: CreditCard, label: 'Realiza tu pago' },
  { icon: BookOpenCheck, label: 'Accede a los materiales del programa' },
  { icon: Users, label: 'Accede a tu mentor' },
  { icon: Book, label: 'Accede a tu libro' },
  { icon: Dumbbell, label: 'Accede a tu programa de entrenamiento físico' },
  { icon: Lightbulb, label: 'Axiomas' },
  { icon: Handshake, label: 'Tu poder de negociación' },
];

const StepsToDoPage: React.FC = () => {
  const navigate = useNavigate();

  const targetRoutes = ['/register', '/buy-book', '/login', '/login', '/login', '/what-is-f88', '/customer-service'];

  const handleKeyNav = (ev: React.KeyboardEvent, route: string) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      navigate(route);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Bienvenido al Programa F88
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Sigue estos pasos para avanzar en tu transformación</p>
        </header>

        <section className="relative mt-6" aria-label="Línea de tiempo de pasos">
          {/* vertical line (desktop) */}
          <div className="hidden sm:block absolute left-10 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-700 to-blue-500 opacity-30 rounded"></div>

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => {
              const route = targetRoutes[index] ?? '/';
              return (
                <article
                  key={index}
                  role="listitem"
                  className="flex items-start gap-4 sm:gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="h-14 w-14 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-500 text-white shadow-md transform transition-all duration-300 hover:scale-105 cursor-pointer"
                      aria-hidden="true"
                      onClick={() => navigate(route)}
                      onKeyDown={(e) => handleKeyNav(e as any, route)}
                      tabIndex={0}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>

                    {/* connector between steps (desktop only) */}
                    {index !== steps.length - 1 && (
                      <span className="hidden sm:block w-px bg-white/10 mt-3 h-8"></span>
                    )}
                  </div>

                  <div className="flex-1">
                    <div
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 transition-transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => navigate(route)}
                      onKeyDown={(e) => handleKeyNav(e as any, route)}
                      tabIndex={0}
                      aria-label={`${step.label} - ir a ${route}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-md">{index + 1}</span>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-100">{step.label}</h3>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-xl transition-transform hover:scale-105 text-lg"
            onClick={() => navigate('/register')}
          >
            Ir al Registro
          </button>
          <button
            className="border-2 border-blue-600 text-blue-400 font-semibold py-3 px-10 rounded-full shadow-md transition-transform hover:scale-105 hover:bg-blue-600/10 text-lg bg-transparent"
            onClick={() => navigate('/login')}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepsToDoPage;
