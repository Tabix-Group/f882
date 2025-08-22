
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  links: { label: string; url: string }[];
  image: string;
};

const PRODUCTS: Product[] = [
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
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const total = PRODUCTS.reduce((sum, p) => (selected[p.id] ? sum + p.price : sum), 0);

  const handleToggle = (id: string) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleProceed = () => {
    const chosen = PRODUCTS.filter((p) => selected[p.id]);
    // Navigate to the checkout flow and pass selected items in state
    navigate('/proceed-to-payment', { state: { items: chosen } });
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Elige tu producto F88</h1>
          <p className="text-gray-300 mt-3">Selecciona la opción que más se ajuste a tus necesidades. Puedes combinar productos.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Product list */}
          <div className="md:col-span-2 grid gap-6">
            {PRODUCTS.map((product) => (
              <article
                key={product.id}
                className={`group bg-white/4 rounded-3xl p-6 md:p-8 shadow-md transition-transform duration-200 ${selected[product.id] ? 'ring-2 ring-blue-500 scale-102' : 'hover:-translate-y-1 hover:shadow-xl'}`}
                onClick={() => handleToggle(product.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleToggle(product.id); } }}
                role="button"
                tabIndex={0}
                aria-pressed={!!selected[product.id]}
              >
                <div className="flex items-center gap-6">
                  <img src={product.image} alt={product.title} className="w-28 h-28 object-contain rounded-lg shadow-lg bg-white/6 p-2" />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold leading-tight">{product.title}</h2>
                        <p className="text-gray-300 mt-2 max-w-2xl">{product.description}</p>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-gray-300">Precio</div>
                        <div className="text-2xl font-extrabold text-blue-400">${product.price.toFixed(2)}</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <label className="flex items-center gap-2 cursor-pointer select-none">
                        <input
                          aria-label={`Seleccionar ${product.title}`}
                          type="checkbox"
                          checked={!!selected[product.id]}
                          onChange={() => handleToggle(product.id)}
                          className="accent-blue-500 w-5 h-5 rounded"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <span className="text-base">Seleccionar</span>
                      </label>

                      {product.links.length > 0 && (
                        <div className="flex flex-col">
                          {product.links.map((link, idx) => (
                            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-200 text-sm">{link.label}</a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Ribbon for mentor product */}
                {product.id === 'book-mentor' && (
                  <div className="mt-4 inline-block bg-gradient-to-r from-yellow-500 to-orange-400 text-black font-semibold px-3 py-1 rounded-full text-sm">Más completo</div>
                )}
              </article>
            ))}
          </div>

          {/* Summary panel */}
          <aside className="md:col-span-1 sticky top-24 self-start">
            <div className="bg-white/4 rounded-3xl p-6 shadow-lg border border-white/8">
              <h3 className="text-lg font-bold text-gray-100">Resumen de compra</h3>
              <p className="text-sm text-gray-300 mt-2">Items seleccionados</p>

              <ul className="mt-4 divide-y divide-white/6">
                {PRODUCTS.filter((p) => selected[p.id]).length === 0 && (
                  <li className="text-gray-300 py-4">No has seleccionado productos</li>
                )}
                {PRODUCTS.filter((p) => selected[p.id]).map((p) => (
                  <li key={p.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt="" className="w-10 h-10 object-contain rounded-md bg-white/6 p-1" />
                      <div>
                        <div className="text-sm font-semibold">{p.title}</div>
                        <div className="text-xs text-gray-400">{p.description.slice(0, 60)}{p.description.length > 60 ? '…' : ''}</div>
                      </div>
                    </div>
                    <div className="font-bold text-blue-400">${p.price.toFixed(2)}</div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-300">Total</div>
                <div className="text-2xl font-extrabold text-blue-400">${total.toFixed(2)} USD</div>
              </div>

              <button
                onClick={handleProceed}
                disabled={total === 0}
                aria-disabled={total === 0}
                className={`mt-6 w-full py-3 rounded-full font-bold text-lg transition-all duration-200 ${total === 0 ? 'bg-gray-600 cursor-not-allowed text-gray-300' : 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600'}`}
              >
                Proceder al Pago
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BuyBookPage;
