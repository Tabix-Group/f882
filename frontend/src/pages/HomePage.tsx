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
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { keyframes } from '@mui/system';

// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

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
    icon: <ArrowForwardIosIcon fontSize="large" />,
  },
  {
    title: 'What is F88',
    description: 'Understand the F88 Transformation Program.',
    buttonText: 'Learn More',
    path: '/what-is-f88',
    variant: 'outlined',
    color: 'primary',
    icon: <InfoIcon fontSize="large" />,
  },
  {
    title: 'Buy Book',
    description: 'Get your official F88 guidebook.',
    buttonText: 'Purchase Now',
    path: '/buy-book',
    variant: 'contained',
    color: 'secondary',
    icon: <MenuBookIcon fontSize="large" />,
  },
  {
    title: 'Buy Book Mentor',
    description: 'Exclusive mentor edition of the book.',
    buttonText: 'Get Mentor Copy',
    path: '/buy-book-mentor',
    variant: 'contained',
    color: 'success',
    icon: <SchoolIcon fontSize="large" />,
  },
  {
    title: 'Customer Service',
    description: 'Need help? Contact our support team.',
    buttonText: 'Contact Us',
    path: '/customer-service',
    variant: 'outlined',
    color: 'info',
    icon: <SupportAgentIcon fontSize="large" />,
  },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  const primaryGradient = `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`;
  const secondaryGradient = `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`;

  // Blue background similar to image 2
  const heroBlue = '#21A6FF';
  const getStartedGradient = 'linear-gradient(135deg, #1B7ED6 0%, #21A6FF 100%)';

  return (
    <Box component="main" sx={{ bgcolor: theme.palette.background.default }}>
      {/* AppBar removed, now handled by Layout */}

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: isMd ? 600 : 400,
          bgcolor: heroBlue,
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          animation: `${fadeIn} 1s ease-out`,
          // Subtle diagonal lines pattern for prestige
          backgroundImage:
            `repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 24px)`,
        }}
      >
        {/* Subtle overlay for depth */}
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(255,255,255,0.01)' }} />
        <Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant={isMd ? 'h2' : 'h4'}
            sx={{ fontWeight: 800, color: '#fff', mb: 2, textShadow: '0 2px 8px rgba(33,166,255,0.10)' }}
            gutterBottom
          >
            Transform - Fortitude - F88
          </Typography>
          <Typography variant="h6" sx={{ color: alpha('#fff', 0.92), mb: 4, textShadow: '0 1px 4px rgba(33,166,255,0.08)' }}>
            Gain, Physical, Mental, Emotional, Character, Will
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/steps-to-do')}
            sx={{
              background: getStartedGradient,
              textTransform: 'none',
              fontWeight: 700,
              py: 1.5,
              px: 4,
              borderRadius: '50px',
              boxShadow: '0 4px 16px rgba(33,166,255,0.18)',
              '&:hover': {
                filter: 'brightness(1.08)',
                background: 'linear-gradient(135deg, #21A6FF 0%, #1B7ED6 100%)',
              },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
          Explore Our Features
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 4,
            animation: `${fadeIn} 0.8s ease-out`,
            overflowX: { xs: 'auto', md: 'visible' },
            pb: 2,
          }}
        >
          {cardItems.map((card) => (
            <Card
              key={card.title}
              elevation={3}
              sx={{
                minWidth: 260,
                maxWidth: 300,
                width: { xs: 260, sm: 260, md: 260 },
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'translateY(-10px)', boxShadow: 6 },
                flex: '0 0 auto',
              }}
            >
              <Box sx={{ p: 3, textAlign: 'center', color: theme.palette.primary.main }}>
                {card.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button
                  fullWidth
                  variant={card.variant}
                  color={card.color}
                  onClick={() => navigate(card.path)}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    py: 1,
                    background:
                      card.variant === 'contained'
                        ? card.color === 'primary'
                          ? primaryGradient
                          : card.color === 'secondary'
                          ? secondaryGradient
                          : undefined
                        : 'transparent',
                    border:
                      card.variant === 'outlined'
                        ? `2px solid ${theme.palette[card.color].main}`
                        : 'none',
                    color:
                      card.variant === 'outlined'
                        ? theme.palette[card.color].main
                        : '#fff',
                    borderRadius: '30px',
                    '&:hover': { filter: 'brightness(1.1)' },
                  }}
                >
                  {card.buttonText}
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>

    </Box>
  );
};

export default HomePage;
