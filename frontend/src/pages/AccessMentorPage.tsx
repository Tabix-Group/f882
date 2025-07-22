import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccessMentorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>F88 Personalized Mentoring</Typography>
      <Typography mb={2}>Connect with your mentor and receive professional guidance throughout the program.</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Access Mentoring
      </Button>
      <Button variant="text" color="primary" onClick={() => navigate('/steps-to-do')} sx={{ mt: 2 }}>
        Back to Steps
      </Button>
    </Box>
  );
};

export default AccessMentorPage;
