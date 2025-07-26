import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  Container,
  useTheme,
  useMediaQuery,
  alpha,
  Fade,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// ...existing code...

// ...existing code...

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  // ...existing code...

  // Imagen hero más humana/emocional
  const heroImageUrl =
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80";

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        bgcolor: (t) => (t.palette.mode === 'light' ? '#f4f6f8' : t.palette.background.default),
        backgroundImage: `linear-gradient(rgba(10,25,41,0.45), rgba(10,25,41,0.55)), url('${heroImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          height: isMd ? 720 : 500,
          bgcolor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: 'none',
        }}
      >
        <Container>
          <Fade in timeout={1200}>
            <Box>
              <Typography
                variant={isMd ? 'h2' : 'h4'}
                sx={{ fontWeight: 900, color: '#fff', mb: 2, letterSpacing: '-1.2px', lineHeight: 1.1 }}
              >
                Fortitude F88
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: alpha('#fff', 0.95), mb: 5, fontWeight: 400, fontSize: isMd ? '1.25rem' : '1rem' }}
              >
                Gain, Physical, Mental, Emotional, Character, Will
              </Typography>
              <Button
                aria-label="Get Started"
                variant="contained"
                size="large"
                onClick={() => navigate('/steps-to-do')}
                sx={{
                  background: 'linear-gradient(135deg, #21A6FF 0%, #1B7ED6 100%)',
                  color: '#fff',
                  textTransform: 'none',
                  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
                  fontWeight: 800,
                  letterSpacing: 0.5,
                  py: 2,
                  px: 6,
                  borderRadius: '50px',
                  fontSize: isMd ? '1.22rem' : '1.08rem',
                  boxShadow: '0 8px 32px rgba(33,166,255,0.18), 0 2px 8px rgba(0,0,0,0.18)',
                  transition: 'all 0.22s cubic-bezier(.4,2,.3,1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1B7ED6 0%, #21A6FF 100%)',
                    color: '#fff',
                    boxShadow: '0 16px 48px rgba(33,166,255,0.28), 0 4px 16px rgba(0,0,0,0.22)',
                    transform: 'scale(1.07) translateY(-2px)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '50px',
                    pointerEvents: 'none',
                    boxShadow: '0 0 0 0 rgba(33,166,255,0)',
                    transition: 'box-shadow 0.3s',
                  },
                }}
              >
                <span style={{ fontFamily: 'inherit', fontWeight: 800, letterSpacing: 0.5 }}>Get Started</span>
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Features */}
      {/* ...resto del contenido... */}
    </Box>
  );
};

export default HomePage;
