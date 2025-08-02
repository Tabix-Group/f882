import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    birthdate: '',
    gender: '',
    country: '',
    tel: ''
  });

  const countries = [
    "Argentina", "Brazil", "Chile", "Colombia", "Mexico", "United States", "Canada", "Spain", "France", "Germany", "Italy", "United Kingdom", "Australia", "Japan", "China", "India", "South Africa", "Peru", "Uruguay", "Paraguay", "Bolivia", "Ecuador", "Venezuela", "Costa Rica", "Panama", "Guatemala", "Honduras", "El Salvador", "Nicaragua", "Dominican Republic", "Cuba", "Puerto Rico", "Other"
  ];
  const genders = ["Male", "Female", "Other"];

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await registerUser(form);
      setMessage('Registro exitoso. Redirigiendo al login...');
      setTimeout(() => navigate('/login'), 1500);
      setForm({ name: '', email: '', password: '', birthdate: '', gender: '', country: '', tel: '' });
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Error en el registro.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-black text-white">
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 text-center mb-4">
            Registro de Usuario
          </h1>
          <p className="mb-8 text-center text-gray-300">
            Crea tu cuenta para acceder al programa F88.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">Nombre completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base text-black bg-white shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold mb-1">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ingresa tu correo"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base text-black bg-white shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="tel" className="block font-semibold mb-1">Teléfono</label>
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  value={form.tel}
                  onChange={handleChange}
                  placeholder="Número de teléfono"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base text-black bg-white shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="country" className="block font-semibold mb-1">País</label>
                <select
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base text-black bg-white shadow-sm"
                >
                  <option value="">Selecciona tu país</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="birthdate" className="block font-semibold mb-1">Fecha de nacimiento</label>
                <input
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  value={form.birthdate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base text-black bg-white shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block font-semibold mb-1">Género</label>
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base text-black bg-white shadow-sm"
                >
                  <option value="">Selecciona tu género</option>
                  {genders.map((gender) => (
                    <option key={gender} value={gender}>{gender}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="password" className="block font-semibold mb-1">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Crea una contraseña"
                  autoComplete="new-password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base text-black bg-white shadow-sm"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-lg font-bold rounded-xl shadow-md bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                {loading ? 'Registrando...' : 'Registrarse'}
              </button>
            </div>
          </form>

          {message && (
            <div className="text-blue-400 text-center mt-4 font-medium">{message}</div>
          )}

          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full mt-6 text-blue-400 hover:underline font-semibold text-center"
          >
            ¿Ya tienes una cuenta? Inicia sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
