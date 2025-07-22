import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccessProgramMaterialsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Materiales del Programa F88</Typography>
      <Typography mb={2}>Aquí puedes descargar audios, ver videos de YouTube y leer textos exclusivos del programa.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Descargar materiales
      </Button>
      <Button variant="text" color="primary" onClick={() => navigate('/steps-to-do')} sx={{ mt: 2 }}>
        Volver a pasos
      </Button>
    </Box>
  );
};

export default AccessProgramMaterialsPage;
