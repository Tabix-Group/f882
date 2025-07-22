import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
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
      setTimeout(() => navigate('/steps-to-do'), 1000);
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Error logging in.');
    }
    setLoading(false);
  };

  return (
    <Box maxWidth={400} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" required type="email" />
        <TextField label="Password" name="password" value={form.password} onChange={handleChange} fullWidth margin="normal" required type="password" />
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      {message && <Typography color="secondary" mt={2}>{message}</Typography>}
    </Box>
  );
};

export default LoginPage;
