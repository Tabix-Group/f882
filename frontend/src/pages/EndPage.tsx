import React from 'react';
import { Box, Typography } from '@mui/material';

const EndPage: React.FC = () => {
  return (
    <Box maxWidth={600} mx="auto" mt={5}>
      <Typography variant="h4" mb={2}>End</Typography>
      <Typography>Thank you for joining F88!</Typography>
    </Box>
  );
};

export default EndPage;
