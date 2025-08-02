import React, { useState } from 'react';
import { processPayment } from '../services/api';

const PaymentPage: React.FC = () => {
  const [method, setMethod] = useState('credit');
  const [details, setDetails] = useState({ card: '', paypal: '', mercado: '', crypto: '', bank: '', other: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await processPayment({ method, details });
      setMessage('Pago procesado correctamente.');
    } catch (err: any) {
      setMessage('Error al procesar el pago.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-black text-white">
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4">
            Pago del Programa F88
          </h1>
          <p className="text-gray-300 text-center mb-8">
            Completa tu pago para desbloquear todos los materiales y la mentoría personalizada.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="payment-method" className="block font-semibold mb-1">Método de pago</label>
              <select
                id="payment-method"
                value={method}
                onChange={e => setMethod(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              >
                <option value="credit">💳 Tarjeta de crédito</option>
                <option value="mercado">💵 Mercado Pago</option>
                <option value="crypto">₿ Criptomonedas</option>
                <option value="paypal">💼 PayPal</option>
              </select>
            </div>

            {method === 'credit' && (
              <input
                type="text"
                name="card"
                value={details.card}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
                placeholder="Datos de la tarjeta"
                required
              />
            )}

            {method === 'mercado' && (
              <input
                type="text"
                name="mercado"
                value={details.mercado}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
                placeholder="Correo o teléfono de Mercado Pago"
                required
              />
            )}

            {method === 'crypto' && (
              <input
                type="text"
                name="crypto"
                value={details.crypto}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
                placeholder="Dirección de billetera"
                required
              />
            )}

            {method === 'paypal' && (
              <input
                type="text"
                name="paypal"
                value={details.paypal}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
                placeholder="Correo de PayPal"
                required
              />
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-lg font-bold rounded-xl shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-transform hover:scale-105"
            >
              {loading ? 'Procesando...' : 'Pagar'}
            </button>

            {message && (
              <div className="text-blue-400 text-center mt-4 font-medium">{message}</div>
            )}
          </form>

          <button
            type="button"
            onClick={() => window.location.href = '/steps-to-do'}
            className="w-full mt-6 text-blue-400 hover:underline font-semibold text-center"
          >
            ← Volver a los pasos
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
