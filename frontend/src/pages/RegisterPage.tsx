import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Autocomplete } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
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
  });
  const countries = [
    "Argentina", "Brazil", "Chile", "Colombia", "Mexico", "United States", "Canada", "Spain", "France", "Germany", "Italy", "United Kingdom", "Australia", "Japan", "China", "India", "South Africa", "Peru", "Uruguay", "Paraguay", "Bolivia", "Ecuador", "Venezuela", "Costa Rica", "Panama", "Guatemala", "Honduras", "El Salvador", "Nicaragua", "Dominican Republic", "Cuba", "Puerto Rico", "Other"
  ];
  const genders = ["Male", "Female", "Other"];
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleBirthdateChange = (date: Date | null) => {
    setForm({ ...form, birthdate: date ? date.toISOString().split('T')[0] : '' });
  };
  const handleCountryChange = (_: any, value: string | null) => {
    setForm({ ...form, country: value || '' });
  };
  const handleGenderChange = (_: any, value: string | null) => {
    setForm({ ...form, gender: value || '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await registerUser(form);
      setMessage('Registration successful. Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
      setForm({ name: '', email: '', password: '', birthdate: '', gender: '', country: '' });
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Registration error.');
    }
    setLoading(false);
  };

  return (
    <Box maxWidth={400} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>User Registration</Typography>
      <Typography mb={2}>Create your account to access the F88 program.</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Full Name" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" required />
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" required type="email" />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Birthdate"
            value={form.birthdate ? new Date(form.birthdate) : null}
            onChange={handleBirthdateChange}
            disableFuture
            openTo="year"
            views={["year", "month", "day"]}
            slotProps={{ textField: { name: "birthdate", margin: "normal", required: true, fullWidth: true } }}
          />
        </LocalizationProvider>
        <Autocomplete
          options={genders}
          value={form.gender}
          onChange={handleGenderChange}
          renderInput={(params) => (
            <TextField {...params} label="Gender" name="gender" margin="normal" required fullWidth />
          )}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Autocomplete
          options={countries}
          value={form.country}
          onChange={handleCountryChange}
          renderInput={(params) => (
            <TextField {...params} label="Country" name="country" margin="normal" required fullWidth />
          )}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField label="Password" name="password" value={form.password} onChange={handleChange} fullWidth margin="normal" required type="password" />
        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
          {loading ? 'Registering...' : 'Register'}
        </Button>
      </form>
      {message && <Typography color="secondary" mt={2}>{message}</Typography>}
      <Button variant="text" color="primary" onClick={() => navigate('/login')} sx={{ mt: 2 }}>
        Already have an account? Login
      </Button>
    </Box>
  );
};

export default RegisterPage;
