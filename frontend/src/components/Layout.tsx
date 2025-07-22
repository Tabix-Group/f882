import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const navItems = [
  { label: 'Steps to Do', path: '/steps-to-do' },
  { label: 'What is F88', path: '/what-is-f88' },
  { label: 'Buy Book', path: '/buy-book' },
  { label: 'Buy Book Mentor', path: '/buy-book-mentor' },
  { label: 'Customer Service', path: '/customer-service' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, cursor: 'pointer', mr: 3 }}
              onClick={() => navigate('/')}
            >
              F88 Transformation
            </Typography>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                sx={{
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '1.08rem',
                  px: 2,
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#fff',
                    fontSize: '1.18rem',
                    fontWeight: 900,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  },
                }}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button color="inherit" sx={{ textTransform: 'none' }} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: 'none', fontWeight: 600, borderRadius: '40px', px: 3 }}
              onClick={() => navigate('/register')}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
