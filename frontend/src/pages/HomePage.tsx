import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Button,
  Box,
  Container,
  Card,
  CardContent,
  CardActions,
  useTheme,
  useMediaQuery,
  alpha,
  Divider,
  Fade,
  CardActionArea,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface CardItem {
  title: string;
  description: string;
  buttonText: string;
  path: string;
  variant: 'contained' | 'outlined';
  color: 'primary' | 'secondary' | 'success' | 'info';
  icon: React.ReactNode;
}

const cardItems: CardItem[] = [
  {
    title: 'Steps to Do',
    description: 'Structured steps to guide your journey.',
    buttonText: 'View Steps',
    path: '/steps-to-do',
    variant: 'contained',
    color: 'primary',
    icon: <ArrowForwardIosIcon fontSize="large" aria-hidden />,
  },
  {
    title: 'What is F88',
    description: 'Understand the F88 Transformation Program.',
    buttonText: 'Learn More',
    path: '/what-is-f88',
    variant: 'outlined',
    color: 'primary',
    icon: <InfoIcon fontSize="large" aria-hidden />,
  },
  {
    title: 'Buy Book',
    description: 'Get your official F88 guidebook.',
    buttonText: 'Purchase Now',
    path: '/buy-book',
    variant: 'contained',
    color: 'secondary',
    icon: <MenuBookIcon fontSize="large" aria-hidden />,
  },
  {
    title: 'Buy Book Mentor',
    description: 'Exclusive mentor edition of the book.',
    buttonText: 'Get Mentor Copy',
    path: '/buy-book-mentor',
    variant: 'contained',
    color: 'success',
    icon: <SchoolIcon fontSize="large" aria-hidden />,
  },
  {
    title: 'Customer Service',
    description: 'Need help? Contact our support team.',
    buttonText: 'Contact Us',
    path: '/customer-service',
    variant: 'outlined',
    color: 'info',
    icon: <SupportAgentIcon fontSize="large" aria-hidden />,
  },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const primaryGradient = `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`;
  const secondaryGradient = `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`;
  const heroBlue = '#21A6FF';
  const getStartedGradient = 'linear-gradient(135deg, #1B7ED6 0%, #21A6FF 100%)';

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
