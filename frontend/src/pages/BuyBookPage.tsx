
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
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Elige tu producto F88</h1>
          <p className="text-gray-300 mt-3">Selecciona la opción que más se ajuste a tus necesidades. Puedes combinar productos.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className={`bg-white/5 rounded-2xl shadow-xl p-6 flex flex-col transition-transform ${selected[product.id] ? 'ring-2 ring-blue-500 scale-105' : ''} fadein show`}
            >
              <div className="flex items-center gap-4">
                <img src={product.image} alt={product.title} className="w-20 h-20 object-contain rounded-lg shadow-md bg-white/10" />
                <div>
                  <h2 className="text-xl font-bold">{product.title}</h2>
                  <p className="text-gray-300 text-sm max-w-md">{product.description}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-2xl font-extrabold text-blue-400">${product.price.toFixed(2)} USD</div>
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={!!selected[product.id]}
                    onChange={() => handleSelect(product.id)}
                    className="accent-blue-500 w-5 h-5 rounded"
                  />
                  <span className="text-base">Seleccionar</span>
                </label>
              </div>

              {product.links.length > 0 && (
                <div className="mt-4 flex flex-col gap-2">
                  {product.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-200 text-sm"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
          <div className="text-lg font-semibold text-gray-200">Total: <span className="text-2xl text-blue-400 font-bold">${total.toFixed(2)} USD</span></div>
          <button
            onClick={handleProceed}
            disabled={total === 0}
            className={`px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-200 focus-visible ${total === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'}`}
            aria-disabled={total === 0}
          >
            Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyBookPage;
