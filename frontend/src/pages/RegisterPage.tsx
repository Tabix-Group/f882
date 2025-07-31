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
      setMessage('Registration successful. Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
      setForm({ name: '', email: '', password: '', birthdate: '', gender: '', country: '', tel: '' });
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Registration error.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100 py-10">
      <div className="max-w-md w-full p-8 md:p-12 rounded-3xl shadow-2xl bg-white/90">
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-2">User Registration</h1>
        <div className="w-20 h-1 bg-blue-300 rounded mx-auto mb-4" />
        <p className="mb-4 text-center text-gray-600">Create your account to access the F88 program.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              placeholder="Your full name"
              required
            />
          </div>
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
            <label htmlFor="tel" className="block text-gray-700 font-semibold mb-1">Phone</label>
            <input
              id="tel"
              name="tel"
              type="tel"
              value={form.tel}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              placeholder="Phone number"
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-gray-700 font-semibold mb-1">Country</label>
            <select
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              required
            >
              <option value="">Select your country</option>
              {countries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="birthdate" className="block text-gray-700 font-semibold mb-1">Birthdate</label>
            <input
              id="birthdate"
              name="birthdate"
              type="date"
              value={form.birthdate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-gray-700 font-semibold mb-1">Gender</label>
            <select
              id="gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-base bg-white shadow-sm"
              required
            >
              <option value="">Select your gender</option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>{gender}</option>
              ))}
            </select>
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
              placeholder="Create a password"
              autoComplete="new-password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold rounded-xl shadow-md bg-blue-700 hover:bg-blue-800 text-white transition"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        {message && <div className="text-blue-600 text-center mt-4 font-medium">{message}</div>}
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="w-full mt-4 text-blue-700 hover:underline font-semibold text-center"
        >
          Already have an account? Log in
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
