import React from 'react';
import ChatWidget from '../components/ChatWidget';

const CustomerServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Atención al Cliente</h1>
              <p className="text-gray-300 mt-3">¿Necesitas ayuda? Elige una opción o consulta con nuestro asistente.</p>
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
                <h3 className="font-semibold text-lg">Consultas de Coaching</h3>
                <p className="text-gray-300 mt-2">Pregunta sobre coaching ontológico, espiritual o estoico con nuestro asistente.</p>
                <button onClick={() => { const el = document.querySelector('#chat-widget-button') as HTMLElement; el?.click(); }} className="mt-3 text-sm text-blue-300 hover:underline">Abrir asistente</button>
              </article>
            </div>

            <div className="mt-8 bg-white/4 p-6 rounded-2xl border border-white/8">
              <h4 className="text-lg font-bold text-blue-200">Contáctanos</h4>
              <p className="text-gray-300 mt-2">Escribe a <a href="mailto:support@f88.com" className="text-blue-300 underline">support@f88.com</a> o usa el asistente en la esquina inferior izquierda.</p>
            </div>
          </section>

          <aside className="md:col-span-1">
            <div className="bg-white/4 p-6 rounded-2xl shadow-lg border border-white/8">
              <h4 className="text-lg font-bold text-gray-100">Horario de Atención</h4>
              <p className="text-gray-300 mt-2">Lunes a Viernes — 9:00 a 18:00 (GMT)</p>

              <h4 className="text-lg font-bold text-gray-100 mt-6">Teléfono</h4>
              <p className="text-gray-300">+54 9 11 0000 0000</p>

              <h4 className="text-lg font-bold text-gray-100 mt-6">Redes</h4>
              <div className="flex items-center gap-3 mt-2">
                <a className="text-blue-300 hover:underline" href="#">Instagram</a>
                <a className="text-blue-300 hover:underline" href="#">Facebook</a>
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
