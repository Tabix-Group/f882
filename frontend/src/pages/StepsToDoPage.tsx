import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import Layout from '../components/Layout';

const StepsToDoPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Welcome to the F88 Program</Typography>
      <Typography mb={3}>Follow these steps to advance in your fitness transformation:</Typography>
      <ol>
        <li>Complete your registration</li>
        <li>Make your payment</li>
        <li>Access program materials</li>
        <li>Access personalized mentoring</li>
        <li>Start your F88 fitness change</li>
      </ol>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={() => navigate('/register')} sx={{ mr: 2 }}>
          Go to Registration
        </Button>
        <Button variant="outlined" color="primary" onClick={() => navigate('/login')} sx={{ mr: 2 }}>
          Login
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => navigate('/payment')} sx={{ mr: 2 }}>
          Go to Payment
        </Button>
        <Button variant="outlined" color="success" onClick={() => navigate('/access-program-materials')} sx={{ mr: 2 }}>
          Materials
        </Button>
        <Button variant="outlined" color="info" onClick={() => navigate('/access-mentor')}>
          Mentoring
        </Button>
      </Box>
    </Box>
  );
};

export default StepsToDoPage;
