import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyBookMentorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white">
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4">
            Libro + Mentoría Avanzada
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Obtén el libro oficial F88 y accede a nuestro programa de mentoría avanzada.
            Este paquete incluye la guía y sesiones personalizadas para maximizar tus resultados.
          </p>
          <button
            onClick={() => navigate('/payment')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-xl shadow-lg transition-transform hover:scale-105 text-lg"
          >
            Comprar Libro + Mentoría
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyBookMentorPage;
