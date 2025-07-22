import React from 'react';
import { Box, Typography } from '@mui/material';

const ConfirmationPage: React.FC = () => {
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Confirmation</Typography>
      <Typography>Your payment was successful. Welcome to the program!</Typography>
    </Box>
  );
};

export default ConfirmationPage;
