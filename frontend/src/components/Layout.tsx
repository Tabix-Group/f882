import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const navItems = [
  { label: 'Steps to Do', path: '/steps-to-do' },
  { label: 'What is F88', path: '/what-is-f88' },
  { label: 'Buy Book', path: '/buy-book' },
  { label: 'Buy Book & Advance Mentoring', path: '/buy-book-mentor' },
  { label: 'Customer Service', path: '/customer-service' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" elevation={1} sx={{ bgcolor: '#18181C', minHeight: { xs: 56, md: 64 } }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 0, md: 2 },
            minHeight: { xs: 56, md: 64 },
            bgcolor: '#18181C',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}
        >
          {/* Logo solo visible en md+ */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              cursor: 'pointer',
              mr: 3,
            }}
            onClick={() => navigate('/')}
          >
            <img
              src={process.env.PUBLIC_URL + '/logo.png'}
              alt="F88 Logo"
              style={{ height: 55, margin: '0 8px', transition: 'transform 0.4s cubic-bezier(.4,2,.3,1)', willChange: 'transform' }}
              onMouseOver={e => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.18)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(0.92)';
              }}
            />
          </Box>
          {/* Menú hamburguesa en mobile */}
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ ml: 1 }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{ sx: { bgcolor: '#18181C', color: '#f8f9fa', minWidth: 180 } }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => { handleMenuClose(); navigate(item.path); }}
                    sx={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif', fontWeight: 600, fontSize: '1.08rem', py: 1.2 }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'center' }}>
              {navItems.map((item) => {
                const centerLabels = ['Steps to Do', 'What is F88', 'Buy Book & Mentoring', 'Customer Service'];
                return (
                  <Button
                    key={item.label}
                    color="inherit"
                    sx={{
                      textTransform: 'none',
                      fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
                      fontWeight: item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring' ? 900 : 600,
                      fontSize: item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring' ? '1.13rem' : '1.09rem',
                      letterSpacing: 0.2,
                      px: 2.2,
                      borderRadius: '10px',
                      transition: 'all 0.2s',
                      backgroundColor:
                        item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring'
                          ? 'rgba(25, 118, 210, 0.22)'
                          : 'transparent',
                      boxShadow:
                        item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring'
                          ? '0 0 16px 4px rgba(25,118,210,0.22)'
                          : 'none',
                      color:
                        item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring'
                          ? '#1565c0'
                          : '#f8f9fa',
                      position: 'relative',
                      overflow: 'hidden',
                      ...(centerLabels.includes(item.label) && {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }),
                      '&:hover': {
                        backgroundColor:
                          item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring'
                            ? 'rgba(25, 118, 210, 0.32)'
                            : '#1565c0',
                        color:
                          item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring'
                            ? '#0d47a1'
                            : '#fff',
                        boxShadow:
                          item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring'
                            ? '0 0 32px 8px rgba(25,118,210,0.32)'
                            : '0 2px 8px rgba(0,0,0,0.08)',
                        fontSize: '1.16rem',
                        filter: item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring' ? 'brightness(1.15)' : 'none',
                      },
                      ...(item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring'
                        ? {
                            animation: 'glow 1.2s infinite alternate',
                            '@keyframes glow': {
                              from: { boxShadow: '0 0 16px 4px rgba(25,118,210,0.22)' },
                              to: { boxShadow: '0 0 32px 8px rgba(25,118,210,0.32)' },
                            },
                          }
                        : {}),
                    }}
                    onClick={() => navigate(item.path)}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
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
              onClick={() => navigate('/login')}
            >
              Login
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
