import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomerServicePage: React.FC = () => {
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>Customer Service</Typography>
      <Typography>Contact us at support@f88.com</Typography>
    </Box>
  );
};

export default CustomerServicePage;
