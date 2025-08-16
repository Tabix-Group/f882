import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UserPlus,
  CreditCard,
  BookOpenCheck,
  Users,
  Book,
  Dumbbell
} from 'lucide-react';

const steps = [
  { icon: UserPlus, label: 'Completa tu registro' },
  { icon: CreditCard, label: 'Realiza tu pago' },
  { icon: BookOpenCheck, label: 'Accede a los materiales del programa' },
  { icon: Users, label: 'Accede a tu mentor' },
  { icon: Book, label: 'Accede a tu libro' },
  { icon: Dumbbell, label: 'Accede a tu programa de entrenamiento físico' },
];

const StepsToDoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Bienvenido al Programa F88
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Sigue estos pasos para avanzar en tu transformación</p>
        </header>

        <section className="grid gap-4">
          {steps.map((step, index) => (
            <article
              key={index}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 transition-transform hover:translate-y-[-4px] hover:shadow-2xl fadein show"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-700 to-blue-500 text-white shadow-md flex-shrink-0">
                <step.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-md">{index + 1}</span>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-100">{step.label}</h3>
                </div>
              </div>
            </article>
          ))}
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
