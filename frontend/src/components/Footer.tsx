import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  // show back-to-top when user scrolls down
  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="w-full py-10 bg-gradient-to-t from-neutral-900 to-neutral-950 text-gray-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src="/favicon2.png" alt="F88" className="w-12 h-12 rounded-full shadow-sm" />
            <div>
              <div className="font-bold text-lg text-white">F88</div>
              <div className="text-sm text-gray-400">Fortitud 88</div>
            </div>
          </div>
          <p className="text-sm text-gray-400">Programa de Maestría en 88 días. Únete a nuestra comunidad y transforma tu vida.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Contacto</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              Email: <a href="mailto:fortitud88@gmail.com" className="text-blue-400 hover:underline">fortitud88@gmail.com</a>
            </li>
            <li>
              <a href="/faq" className="text-blue-400 hover:underline">Preguntas frecuentes</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">Síguenos</h4>
          <div className="flex flex-wrap items-center gap-3">
            <a aria-label="YouTube" href="https://www.youtube.com/@fortitud88" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-neutral-900/60 transition-colors">
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.391.566A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.107 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.391-.566a2.994 2.994 0 0 0 2.107-2.12C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <a aria-label="Facebook" href="https://www.facebook.com/fortitud88" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-neutral-900/60 transition-colors">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/fortitud88" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-neutral-900/60 transition-colors">
              <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.05.425 19.877.131 18.6.072 17.32.013 16.911 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
            </a>
            <a aria-label="TikTok" href="https://www.tiktok.com/@fortitud88" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-neutral-900/60 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </a>
            <a aria-label="X (Twitter)" href="https://x.com/fortitud88" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-neutral-900/60 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <hr className="col-span-1 md:col-span-3 border-neutral-800 my-6" />

        <div className="col-span-1 md:col-span-3 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} F88. Todos los derechos reservados.
        </div>
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed right-6 bottom-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
