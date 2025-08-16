import React from 'react';

const WhatIsF88Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sección con imagen de fondo y overlay */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat md:bg-fixed relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.92)), url('/images/flow.jpeg')`,
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 relative z-10">
          {/* Título y subtítulo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              ¿Qué es F88?
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">Un camino de crecimiento personal y transformación, con <span className="text-blue-400 font-bold">FORTALEZA</span> como eje central.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl border border-white/10">
            <h3 className="text-lg md:text-xl font-bold text-blue-400 mb-6">Está diseñado para ayudarte a:</h3>

            <div className="mb-8">
              <h4 className="text-lg font-bold mb-4">Desarrollar tu fortaleza en cinco dimensiones esenciales:</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { emoji: '💪', label: 'Físico' },
                  { emoji: '🧠', label: 'Mental' },
                  { emoji: '❤️', label: 'Emocional' },
                  { emoji: '🛡️', label: 'Carácter' },
                  { emoji: '🔥', label: 'Voluntad' },
                ].map((item, i) => (
                  <div key={i} className="bg-blue-900/30 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-[1.03] transition-all duration-300 shadow-sm fadein show">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-full px-3 py-1">{i + 1}</span>
                      <span className="text-2xl">{item.emoji}</span>
                      <span className="font-bold text-lg">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-[1.02] transition-all duration-300 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Redefinir tu identidad</h4>
                <p className="text-gray-300">Basado en un <span className="font-bold text-blue-400">nuevo código de creencias</span> que eliges adoptar y <span className="font-bold text-blue-400">nuevos valores y principios</span> que eliges <span className="font-bold">VIVIR</span>.</p>
              </div>

              <div className="bg-gradient-to-r from-blue-900/40 to-blue-700/40 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:scale-[1.02] transition-all duration-300 shadow-sm">
                <h4 className="text-xl font-bold mb-3">El Programa</h4>
                <p className="text-lg font-bold text-blue-300 mb-2">F88 comienza con un ciclo de 88 días.</p>
                <p className="text-lg mb-4">No apruebas ni repruebas: <span className="font-bold text-blue-300">¡TÚ ELIGES!</span></p>
                <p className="text-gray-300 italic">Y después de los primeros 88 días, <span className="font-bold text-blue-400">el viaje continúa →</span><br/>F88 es una comunidad de crecimiento y desarrollo continuo, retos personales y <span className="font-bold">¡expansión permanente!</span></p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default WhatIsF88Page;
