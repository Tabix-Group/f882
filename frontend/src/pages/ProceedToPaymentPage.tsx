import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProceedToPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Proceed to Payment</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/payment')}>Go to Payment</Button>
    </Box>
  );
};

export default ProceedToPaymentPage;
