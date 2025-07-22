import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
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
      await registerUser(form);
      setMessage('Registro exitoso. Redirigiendo al login...');
      setTimeout(() => navigate('/login'), 1500);
      setForm({ name: '', email: '', password: '' });
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Error en el registro.');
    }
    setLoading(false);
  };

  return (
    <Box maxWidth={400} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Registro de Usuario</Typography>
      <Typography mb={2}>Crea tu cuenta para acceder al programa F88.</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Nombre" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" required />
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" required type="email" />
        <TextField label="Contraseña" name="password" value={form.password} onChange={handleChange} fullWidth margin="normal" required type="password" />
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
          {loading ? 'Registrando...' : 'Registrarse'}
        </Button>
      </form>
      {message && <Typography color="secondary" mt={2}>{message}</Typography>}
      <Button variant="text" color="primary" onClick={() => navigate('/login')} sx={{ mt: 2 }}>
        ¿Ya tienes cuenta? Inicia sesión
      </Button>
    </Box>
  );
};

export default RegisterPage;
