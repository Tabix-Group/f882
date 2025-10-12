import React from 'react';
import { useNavigate } from 'react-router-dom';

const FlipbookSelectorPage: React.FC = () => {
  const navigate = useNavigate();

  const flipbooks = [
    {
      id: 'initial',
      title: 'Nivel Inicial',
      subtitle: 'Fortalece tu Cuerpo',
      description: 'Para quienes son sedentarios o llevan tiempo sin actividad física regular. F88 te ayudará a incorporar hábitos que incentiven tu actividad física.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-900/20 to-blue-800/20',
      icon: '💪',
      path: '/flipbook/initial'
    },
    {
      id: 'functional',
      title: 'Nivel Funcional',
      subtitle: 'Activa tu Potencial',
      description: 'Para quienes ya realizan algo de actividad física y buscan dar un paso más hacia la frecuencia y la constancia.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-900/20 to-green-800/20',
      icon: '🎯',
      path: '/flipbook/functional'
    },
    {
      id: 'ideal',
      title: 'Nivel Ideal',
      subtitle: 'Rinde de por Vida',
      description: 'Para quienes cuentan con un nivel adecuado de actividad física y buscan generar un hábito de por vida.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-900/20 to-purple-800/20',
      icon: '🏆',
      path: '/flipbook/ideal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-semibold">Volver al Dashboard</span>
          </button>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Selecciona tu Flipbook de Apoyo
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-6">
            Elige tu Guía Interactiva
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada flipbook está diseñado específicamente para tu nivel de actividad física actual.
            Selecciona el que mejor se adapte a tu situación.
          </p>
        </div>

        {/* Flipbook Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {flipbooks.map((flipbook, index) => (
            <div
              key={flipbook.id}
              onClick={() => navigate(flipbook.path)}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-br ${flipbook.bgColor} backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl h-full`}>
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${flipbook.color} rounded-full text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {flipbook.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${flipbook.color} mb-2`}>
                    {flipbook.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {flipbook.subtitle}
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {flipbook.description}
                  </p>

                  {/* CTA Button */}
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${flipbook.color} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <span>Ver Flipbook</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¿No sabes cuál elegir?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Si aún no has completado el Test F88, puedes explorar todos los flipbooks para encontrar el que mejor se adapte a tu situación actual.
              Una vez que completes tu evaluación, tendrás acceso directo al flipbook correspondiente a tu nivel.
            </p>
            <button
              onClick={() => navigate('/f88-assessment')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Hacer el Test F88</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FlipbookSelectorPage;