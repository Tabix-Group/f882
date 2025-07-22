import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccessProgramMaterialsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>F88 Program Materials</Typography>
      <Typography mb={2}>Here you can download audios, watch YouTube videos, and read exclusive program texts.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Download Materials
      </Button>
      <Button variant="text" color="primary" onClick={() => navigate('/steps-to-do')} sx={{ mt: 2 }}>
        Back to Steps
      </Button>
    </Box>
  );
};

export default AccessProgramMaterialsPage;
