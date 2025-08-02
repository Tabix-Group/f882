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
  { icon: Users, label: 'Accede a la mentoría personalizada' },
  { icon: Book, label: 'Accede a tu libro' },
  { icon: Dumbbell, label: 'Accede al entrenamiento' },
];

const StepsToDoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-black">
      <div className="w-full max-w-3xl px-6 py-10 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center leading-tight">
          Bienvenido al Programa F88
        </h1>
        <p className="mb-10 text-gray-300 text-lg text-center max-w-md mx-auto">
          Sigue estos pasos para avanzar en tu transformación:
        </p>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 transition-all hover:bg-white/10"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/10 text-blue-400">
                <step.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 text-gray-100 text-base md:text-lg font-medium flex items-center gap-2">
                <span className="inline-block bg-blue-600/80 text-white text-sm font-semibold px-2 py-0.5 rounded-md min-w-[28px] text-center">
                  {index + 1}
                </span>
                {step.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-xl shadow-md transition-transform hover:scale-105 text-lg"
            onClick={() => navigate('/register')}
          >
            Ir al Registro
          </button>
          <button
            className="border-2 border-blue-600 text-blue-400 font-semibold py-3 px-10 rounded-xl shadow-md transition-transform hover:scale-105 hover:bg-blue-600/10 text-lg bg-transparent"
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
