"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lucide_react_1 = require("lucide-react");
const WhatIsF88Page = () => {
    return (<div className="min-h-screen bg-black text-white">
      {/* Sección con imagen de fondo y overlay */}
      <div className="w-full bg-cover bg-center bg-no-repeat md:bg-fixed relative" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.92)), url('/images/flow.jpeg')`,
        }}>
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
            { icon: lucide_react_1.Dumbbell, label: 'Físico' },
            { icon: lucide_react_1.Brain, label: 'Mental' },
            { icon: lucide_react_1.Heart, label: 'Emocional' },
            { icon: lucide_react_1.ShieldCheck, label: 'Carácter' },
            { icon: lucide_react_1.Zap, label: 'Voluntad' },
            { icon: lucide_react_1.Lightbulb, label: 'Axiomas' },
            { icon: lucide_react_1.Handshake, label: 'Tu poder de negociación' },
        ].map((item, i) => {
            const Icon = item.icon;
            return (<div key={i} className="bg-gradient-to-br from-white/2 to-white/3 p-6 rounded-2xl backdrop-blur-sm border border-white/6 hover:scale-105 transition-all duration-300 shadow-lg" role="group" aria-label={item.label}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 text-white flex items-center justify-center shadow-md">
                          <Icon className="w-7 h-7"/>
                        </div>

                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="inline-block text-sm font-semibold text-blue-200">{i + 1}</span>
                            <h5 className="text-lg font-bold text-gray-100">{item.label}</h5>
                          </div>
                          <p className="text-gray-300">{/* preserve text locations only: label is the visible title */}</p>
                        </div>
                      </div>
                    </div>);
        })}
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
                <p className="text-gray-300 italic">Y después de los primeros 88 días, <span className="font-bold text-blue-400">el viaje continúa →</span><br />F88 es una comunidad de crecimiento y desarrollo continuo, retos personales y <span className="font-bold">¡expansión permanente!</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = WhatIsF88Page;
