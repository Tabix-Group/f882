import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BuyBookPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" fontWeight={800} mb={2} color="primary">
          Buy the Official F88 Book
        </Typography>
        <Typography variant="body1" mb={4} color="text.secondary">
          Get your copy of the Fortitude F88 guidebook and start your transformation journey. The book includes all the steps, principles, and strategies to help you achieve your goals.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate('/payment')}>
          Purchase Book
        </Button>
      </Box>
    </Container>
  );
};

export default BuyBookPage;
