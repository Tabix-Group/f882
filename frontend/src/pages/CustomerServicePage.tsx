import React from 'react';
import ChatWidget from '../components/ChatWidget';

const CustomerServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Atención al socio</h1>
              <p className="text-gray-300 mt-3">¿Necesitas ayuda? Elige una opción o consulta con Jordan, tu mentor</p>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="mailto:support@f88.com" className="text-sm text-gray-300 underline">support@f88.com</a>
              <a href="/faq" className="text-sm text-blue-400 hover:underline">FAQ</a>
            </div>
          </div>
        </header>

        <main className="grid md:grid-cols-3 gap-8">
          <section className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">¿Cómo podemos ayudarte?</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <article className="p-6 rounded-xl bg-gradient-to-r from-white/3 to-white/2 border border-white/6 hover:scale-102 transition-transform shadow-sm">
                <h3 className="font-semibold text-lg">Compras y Pagos</h3>
                <p className="text-gray-300 mt-2">Consulta sobre métodos de pago, facturación y envíos.</p>
                <a href="/buy-book" className="inline-block mt-3 text-sm text-blue-300 hover:underline">Ir a comprar</a>
              </article>

              <article className="p-6 rounded-xl bg-gradient-to-r from-white/3 to-white/2 border border-white/6 hover:scale-102 transition-transform shadow-sm">
                <h3 className="font-semibold text-lg">Acceso al Programa</h3>
                <p className="text-gray-300 mt-2">Problemas con login, acceso a materiales o mentoría.</p>
                <a href="/login" className="inline-block mt-3 text-sm text-blue-300 hover:underline">Entrar</a>
              </article>

              <article className="p-6 rounded-xl bg-gradient-to-r from-white/3 to-white/2 border border-white/6 hover:scale-102 transition-transform shadow-sm">
                <h3 className="font-semibold text-lg">Soporte Técnico</h3>
                <p className="text-gray-300 mt-2">Reporta fallas técnicas o errores en la plataforma.</p>
                <a href="mailto:tech@f88.com" className="inline-block mt-3 text-sm text-blue-300 hover:underline">Contactar soporte</a>
              </article>

              <article className="p-6 rounded-xl bg-gradient-to-r from-white/3 to-white/2 border border-white/6 hover:scale-102 transition-transform shadow-sm">
                <h3 className="font-semibold text-lg">Consultas de Mentoria</h3>
                <p className="text-gray-300 mt-2">Construye tu personalidad, tu identidad</p>
                <button onClick={() => { const el = document.querySelector('#chat-widget-button') as HTMLElement; el?.click(); }} className="mt-3 text-sm text-blue-300 hover:underline">Abrir asistente</button>
              </article>
            </div>

            <div className="mt-8 bg-white/4 p-6 rounded-2xl border border-white/8">
              <h4 className="text-lg font-bold text-blue-200">Contáctanos</h4>
              <p className="text-gray-300 mt-2">Escribe a <a href="mailto:support@f88.com" className="text-blue-300 underline">support@f88.com</a> o usa el asistente en la esquina inferior izquierda.</p>
            </div>
          </section>

          <aside className="md:col-span-1">
            <div className="bg-gradient-to-br from-white/4 to-white/3 p-6 rounded-2xl shadow-lg border border-white/8 text-center">
              <h4 className="text-2xl font-extrabold text-blue-200">Atención 24x7 • 365</h4>
              <p className="text-gray-300 mt-2">Jordan, tu mentor — siempre disponible para acompañarte en tu proceso.</p>

              <div className="mt-6 flex flex-col items-center gap-3">
                <a href="mailto:support@f88.com" className="text-sm text-blue-300 hover:underline">support@f88.com</a>
                <button
                  onClick={() => { const el = document.querySelector('#chat-widget-button') as HTMLElement; el?.click(); }}
                  className="mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold shadow-md"
                >
                  Abrir Jordan
                </button>
                <div className="text-xs text-gray-400 mt-2">Respuestas inmediatas y acompañamiento continuo.</div>
              </div>
            </div>
          </aside>
        </main>

        {/* Floating chatbot widget */}
        <ChatWidget />
      </div>
    </div>
  );
};

export default CustomerServicePage;
