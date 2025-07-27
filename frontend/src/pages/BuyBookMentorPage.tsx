import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BuyBookMentorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={800} mb={2} color="primary">
          Buy Book & Advance Mentoring
        </Typography>
        <Typography variant="body1" mb={4} color="text.secondary">
          Get the official F88 book plus access to our advanced mentoring program. This package includes the guidebook and personalized mentoring sessions to maximize your results.
        </Typography>
        <Button variant="contained" color="secondary" size="large" onClick={() => navigate('/payment')}>
          Purchase Book + Mentoring
        </Button>
      </Box>
    </Container>
  );
};

export default BuyBookMentorPage;
