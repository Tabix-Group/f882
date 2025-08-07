
import React, { useState } from 'react';

const PRODUCTS = [
  {
    id: 'book',
    title: 'Libro Oficial F88',
    description: 'Guía completa F88 para tu transformación. Incluye todos los pasos, principios y estrategias.',
    price: 100,
    links: [
      { label: 'Comprar versión digital (Shopify)', url: 'https://tu-shopify-digital.com' },
      { label: 'Comprar versión física', url: 'https://tu-shopify-fisico.com' },
    ],
    image: '/f88.png',
  },
  {
    id: 'book-mentor',
    title: 'Libro + Mentoría Avanzada',
    description: 'Incluye el libro oficial F88 y acceso a mentoría avanzada personalizada para maximizar tus resultados.',
    price: 189.99,
    links: [],
    image: '/f882.png',
  },
];

const BuyBookPage: React.FC = () => {
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const total = PRODUCTS.reduce((sum, p) => selected[p.id] ? sum + p.price : sum, 0);

  const handleSelect = (id: string) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleProceed = () => {
    // Aquí iría la lógica para proceder al pago con los productos seleccionados
    // Por ahora, redirigiría a la página de pago o mostraría un resumen
    alert('Procediendo al pago con: ' + PRODUCTS.filter(p => selected[p.id]).map(p => p.title).join(', '));
    // navigate('/payment')
  };

  return (
    <div className="bg-gradient-to-br from-black via-neutral-900 to-blue-950 min-h-screen text-white flex items-center justify-center px-2 py-10">
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl p-6 md:p-12">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-8 text-center">
          Elige tu producto F88
        </h1>
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`flex-1 bg-black/40 rounded-2xl shadow-lg p-6 flex flex-col items-center border-2 transition-all duration-300 ${selected[product.id] ? 'border-blue-500 scale-105' : 'border-transparent'}`}
            >
              <img src={product.image} alt={product.title} className="w-24 h-24 object-contain mb-4 rounded-xl shadow-md bg-white/10" />
              <h2 className="text-xl font-bold mb-2 text-center">{product.title}</h2>
              <p className="text-gray-300 text-base mb-4 text-center">{product.description}</p>
              <div className="text-2xl font-extrabold text-blue-400 mb-4">${product.price.toFixed(2)} USD</div>
              {product.links.length > 0 && (
                <div className="flex flex-col gap-2 mb-4 w-full">
                  {product.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-200 text-sm text-center"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              <label className="flex items-center gap-2 mt-auto cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={!!selected[product.id]}
                  onChange={() => handleSelect(product.id)}
                  className="accent-blue-500 w-5 h-5 rounded"
                />
                <span className="text-base">Seleccionar</span>
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
          <div className="text-lg font-semibold text-gray-200">
            Total: <span className="text-2xl text-blue-400 font-bold">${total.toFixed(2)} USD</span>
          </div>
          <button
            onClick={handleProceed}
            disabled={total === 0}
            className={`px-10 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none ${total === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'}`}
          >
            Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyBookPage;
