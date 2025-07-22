import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccessMentorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Mentoría Personalizada F88</Typography>
      <Typography mb={2}>Conéctate con tu mentor y recibe acompañamiento profesional durante el programa.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Acceder a mentoría
      </Button>
      <Button variant="text" color="primary" onClick={() => navigate('/steps-to-do')} sx={{ mt: 2 }}>
        Volver a pasos
      </Button>
    </Box>
  );
};

export default AccessMentorPage;
