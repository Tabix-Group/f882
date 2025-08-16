import React from 'react';

const CustomerServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Atención al Cliente</h1>
          <p className="text-gray-300 mt-3">¿Necesitas ayuda? Estamos aquí para asistirte en lo que necesites.</p>
        </header>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/10 text-center">
          <p className="text-gray-300 text-lg md:text-xl mb-6">
            Escríbenos a <a href="mailto:support@f88.com" className="text-blue-400 underline hover:text-blue-300 transition">support@f88.com</a>
          </p>

          <div className="flex items-center justify-center gap-4">
            <a href="mailto:support@f88.com" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105 focus-visible">Enviar correo</a>
            <a href="/customer-service" className="text-blue-400 hover:underline focus-visible">Ver FAQ</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
