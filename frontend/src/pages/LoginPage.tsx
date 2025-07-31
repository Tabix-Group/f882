import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await loginUser(form);
      setMessage('Login successful.');
      // You could save the token and redirect to the main flow here
      setTimeout(() => navigate('/read-book'), 1000);
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Error logging in.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100 py-10">
      <div className="max-w-md w-full p-8 md:p-12 rounded-3xl shadow-2xl bg-white/90">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-2">Login</h1>
        <div className="w-20 h-1 bg-blue-300 rounded mx-auto mb-6" />
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold rounded-xl shadow-md bg-blue-700 hover:bg-blue-800 text-white transition"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {message && <div className="text-blue-600 text-center mt-4 font-medium">{message}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
