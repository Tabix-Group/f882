import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StepsToDoPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Bienvenido al Programa F88</Typography>
      <Typography mb={3}>Sigue estos pasos para avanzar en tu transformación fitness:</Typography>
      <ol>
        <li>Completa tu registro</li>
        <li>Realiza el pago</li>
        <li>Accede a los materiales del programa</li>
        <li>Accede a mentoría personalizada</li>
        <li>Comienza el cambio fitness F88</li>
      </ol>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={() => navigate('/register')} sx={{ mr: 2 }}>
          Ir a Registro
        </Button>
        <Button variant="outlined" color="primary" onClick={() => navigate('/login')} sx={{ mr: 2 }}>
          Iniciar Sesión
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => navigate('/payment')} sx={{ mr: 2 }}>
          Ir a Pago
        </Button>
        <Button variant="outlined" color="success" onClick={() => navigate('/access-program-materials')} sx={{ mr: 2 }}>
          Materiales
        </Button>
        <Button variant="outlined" color="info" onClick={() => navigate('/access-mentor')}>
          Mentoría
        </Button>
      </Box>
    </Box>
  );
};

export default StepsToDoPage;
