import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/useToast';
import Spinner from '../components/Spinner';

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { show } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await loginUser(form);
  show('Ingreso exitoso', 'success');
  setTimeout(() => navigate('/read-book'), 800);
    } catch (err: any) {
  const msg = err.response?.data?.message || 'Error al ingresar.';
  show(msg, 'error');
    }
    setLoading(false);
  };

  return (
    <div className="bg-black text-white">
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 md:p-12 fadein show">
          <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-2">
            Ingresar
          </h1>
          <div className="w-20 h-1 bg-blue-400 rounded mx-auto mb-6" />
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ingresa tu correo electrónico"
                autoComplete="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-semibold mb-1">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Ingresa tu contraseña"
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-lg font-bold rounded-xl shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-transform hover:scale-105 flex items-center justify-center gap-3"
            >
              {loading ? <><Spinner size={18} /> Iniciando...</> : 'Iniciar sesión'}
            </button>
          </form>
          {/* message handled by toast */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
