import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 1, borderTop: '1px solid #eee', width: '100%' }}>
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 36 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography variant="body1" sx={{ fontWeight: 600, fontSize: '1rem' }}>
            Join Our Community
          </Typography>
          <IconButton
            aria-label="Youtube"
            size="small"
            href="https://youtube.com"
            target="_blank"
            color="error"
            sx={{
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              },
            }}
          >
            <YouTubeIcon fontSize="medium" />
          </IconButton>
          <IconButton
            aria-label="Facebook"
            size="small"
            href="https://facebook.com"
            target="_blank"
            color="primary"
            sx={{
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              },
            }}
          >
            <FacebookIcon fontSize="medium" />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            size="small"
            href="https://twitter.com"
            target="_blank"
            sx={{
              color: '#1DA1F2',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              },
            }}
          >
            <TwitterIcon fontSize="medium" />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            size="small"
            href="https://instagram.com"
            target="_blank"
            sx={{
              color: '#E1306C',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              },
            }}
          >
            <InstagramIcon fontSize="medium" />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
          © {new Date().getFullYear()} F88. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
