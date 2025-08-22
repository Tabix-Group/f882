import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/useToast';
import Spinner from '../components/Spinner';

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { show } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // message handled via toasts
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
        <div className="max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="hidden md:flex flex-col justify-center px-6">
            <h2 className="text-3xl font-extrabold text-white mb-3">Bienvenido de nuevo</h2>
            <p className="text-gray-300">Accede a tu cuenta para continuar tu proceso en F88. Si no tienes cuenta, regístrate.</p>
            <ul className="mt-6 text-sm text-gray-300 space-y-2">
              <li>• Acceso a materiales exclusivos</li>
              <li>• Seguimiento con tu mentor</li>
              <li>• Recursos de entrenamiento y lectura</li>
            </ul>
          </div>

          <div className="max-w-md w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 md:p-12 fadein show">
            <h1 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-2">
              Ingresar
            </h1>
            <div className="w-16 h-1 bg-blue-400 rounded mx-auto mb-4" />

            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulario de ingreso">
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tucorreo@ejemplo.com"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="block font-semibold mb-1">Contraseña</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Ingresa tu contraseña"
                    autoComplete="current-password"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-500" />
                  <span className="text-gray-300">Recordarme</span>
                </label>
                <button type="button" onClick={() => navigate('/forgot')} className="text-blue-300 hover:underline">Olvidé mi contraseña</button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-lg font-bold rounded-xl shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-transform hover:scale-105 flex items-center justify-center gap-3"
              >
                {loading ? <><Spinner size={18} /> Iniciando...</> : 'Iniciar sesión'}
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-300">
              ¿No tienes cuenta? <button onClick={() => navigate('/register')} className="text-blue-300 hover:underline font-semibold">Regístrate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
