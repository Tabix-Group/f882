import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#0d1b2a', py: 1.5, borderTop: 'none', width: '100%' }}>
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 44 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 700, fontSize: '1.08rem', color: '#f8f9fa', letterSpacing: 0.5 }}>
            Join Our Community
          </Typography>
          <IconButton
            aria-label="Youtube"
            size="small"
            href="https://youtube.com"
            target="_blank"
            sx={{
              color: '#ff0000',
              background: 'rgba(13,27,42,0.18)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                background: 'rgba(13,27,42,0.38)',
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
            sx={{
              color: '#1877f3',
              background: 'rgba(13,27,42,0.18)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                background: 'rgba(13,27,42,0.38)',
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
              color: '#1da1f2',
              background: 'rgba(13,27,42,0.18)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                background: 'rgba(13,27,42,0.38)',
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
              color: '#e1306c',
              background: 'rgba(13,27,42,0.18)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
                background: 'rgba(13,27,42,0.38)',
              },
            }}
          >
            <InstagramIcon fontSize="medium" />
          </IconButton>
        </Box>

        <Typography variant="body2" sx={{ fontSize: '1rem', color: '#f8f9fa', fontWeight: 500, letterSpacing: 0.2 }}>
          © {new Date().getFullYear()} F88. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
