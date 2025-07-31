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
      setMessage('Payment processed successfully.');
    } catch (err: any) {
      setMessage('Error processing payment.');
    }
    setLoading(false);
  };
  return (
    <div className="max-w-lg mx-auto mt-12 p-8 rounded-3xl shadow-2xl bg-slate-50/90">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 text-center">F88 Program Payment</h1>
      <p className="mb-4 text-gray-600 text-center">Complete your payment to unlock all materials and personalized mentoring.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="payment-method" className="block text-gray-700 font-semibold mb-1">Payment Method</label>
          <select
            id="payment-method"
            value={method}
            onChange={e => setMethod(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
          >
            <option value="credit">💳 Credit Card</option>
            <option value="mercado">💵 Mercado Pago</option>
            <option value="crypto">₿ Cryptocurrency</option>
            <option value="paypal">💼 PayPal</option>
          </select>
        </div>
        {method === 'credit' && (
          <input
            type="text"
            name="card"
            value={details.card}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
            placeholder="Card details"
            required
          />
        )}
        {method === 'mercado' && (
          <input
            type="text"
            name="mercado"
            value={details.mercado}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
            placeholder="Mercado Pago email or phone"
            required
          />
        )}
        {method === 'crypto' && (
          <input
            type="text"
            name="crypto"
            value={details.crypto}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
            placeholder="Crypto wallet address"
            required
          />
        )}
        {method === 'paypal' && (
          <input
            type="text"
            name="paypal"
            value={details.paypal}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
            placeholder="PayPal email"
            required
          />
        )}
        <button
          type="submit"
          className="w-full py-3 text-lg font-bold rounded-xl shadow-md bg-blue-700 hover:bg-blue-800 text-white transition"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay'}
        </button>
        {message && <div className="text-blue-600 text-center mt-4 font-medium">{message}</div>}
      </form>
      <button
        type="button"
        onClick={() => window.location.href = '/steps-to-do'}
        className="w-full mt-4 text-blue-700 hover:underline font-semibold text-center"
      >
        Back to steps
      </button>
    </div>
  );
};

export default PaymentPage;
