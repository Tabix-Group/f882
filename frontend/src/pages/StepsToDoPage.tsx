import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import Layout from '../components/Layout';

const StepsToDoPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={600} mx="auto" mt={5} p={4} boxShadow={3} borderRadius={4} bgcolor="#f5f7fa">
      <Typography variant="h3" mb={2} color="primary" fontWeight={700} fontFamily="Montserrat, sans-serif">
        Welcome to the F88 Program
      </Typography>
      <Typography mb={3} color="text.secondary" fontSize={18}>
        Follow these steps to advance in your transformation:
      </Typography>
      <ol style={{ textAlign: 'left', fontSize: '1.15rem', marginLeft: '1.2em', color: '#333', fontFamily: 'Montserrat, sans-serif' }}>
        <li>Complete your registration</li>
        <li>Make your payment</li>
        <li>Access the program materials</li>
        <li>Access personalized mentoring</li>
        <li>Acceso to your book</li>
        <li>Access PE trainning</li>
      </ol>
      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate('/register')} sx={{ fontWeight: 600, px: 4 }}>
          Go to Registration
        </Button>
        <Button variant="outlined" color="primary" size="large" onClick={() => navigate('/login')} sx={{ fontWeight: 600, px: 4 }}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default StepsToDoPage;
