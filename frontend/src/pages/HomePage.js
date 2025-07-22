"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Removed unused import
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const ArrowForwardIos_1 = __importDefault(require("@mui/icons-material/ArrowForwardIos"));
const Info_1 = __importDefault(require("@mui/icons-material/Info"));
const MenuBook_1 = __importDefault(require("@mui/icons-material/MenuBook"));
const School_1 = __importDefault(require("@mui/icons-material/School"));
const SupportAgent_1 = __importDefault(require("@mui/icons-material/SupportAgent"));
const system_1 = require("@mui/system");
// Fade-in animation
const fadeIn = (0, system_1.keyframes) `
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const cardItems = [
    {
        title: 'Steps to Do',
        description: 'Structured steps to guide your journey.',
        buttonText: 'View Steps',
        path: '/steps-to-do',
        variant: 'contained',
        color: 'primary',
        icon: <ArrowForwardIos_1.default fontSize="large"/>,
    },
    {
        title: 'What is F88',
        description: 'Understand the F88 Transformation Program.',
        buttonText: 'Learn More',
        path: '/what-is-f88',
        variant: 'outlined',
        color: 'primary',
        icon: <Info_1.default fontSize="large"/>,
    },
    {
        title: 'Buy Book',
        description: 'Get your official F88 guidebook.',
        buttonText: 'Purchase Now',
        path: '/buy-book',
        variant: 'contained',
        color: 'secondary',
        icon: <MenuBook_1.default fontSize="large"/>,
    },
    {
        title: 'Buy Book Mentor',
        description: 'Exclusive mentor edition of the book.',
        buttonText: 'Get Mentor Copy',
        path: '/buy-book-mentor',
        variant: 'contained',
        color: 'success',
        icon: <School_1.default fontSize="large"/>,
    },
    {
        title: 'Customer Service',
        description: 'Need help? Contact our support team.',
        buttonText: 'Contact Us',
        path: '/customer-service',
        variant: 'outlined',
        color: 'info',
        icon: <SupportAgent_1.default fontSize="large"/>,
    },
];
const HomePage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const theme = (0, material_1.useTheme)();
    const isMd = (0, material_1.useMediaQuery)(theme.breakpoints.up('md'));
    const primaryGradient = `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`;
    const secondaryGradient = `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`;
    // Blue background similar to image 2
    const heroBlue = '#21A6FF';
    const getStartedGradient = 'linear-gradient(135deg, #1B7ED6 0%, #21A6FF 100%)';
    return (<material_1.Box component="main" sx={{ bgcolor: theme.palette.background.default }}>
      {/* AppBar removed, now handled by Layout */}

      {/* Hero Section */}
      <material_1.Box sx={{
            position: 'relative',
            height: isMd ? 600 : 400,
            bgcolor: heroBlue,
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            animation: `${fadeIn} 1s ease-out`,
            // Subtle diagonal lines pattern for prestige
            backgroundImage: `repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 24px)`,
        }}>
        {/* Subtle overlay for depth */}
        <material_1.Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(255,255,255,0.01)' }}/>
        <material_1.Container sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <material_1.Typography variant={isMd ? 'h2' : 'h4'} sx={{ fontWeight: 800, color: '#fff', mb: 2, textShadow: '0 2px 8px rgba(33,166,255,0.10)' }} gutterBottom>
            Transform - Fortitude - F88
          </material_1.Typography>
          <material_1.Typography variant="h6" sx={{ color: (0, material_1.alpha)('#fff', 0.92), mb: 4, textShadow: '0 1px 4px rgba(33,166,255,0.08)' }}>
            Gain, Physical, Mental, Emotional, Character, Will
          </material_1.Typography>
          <material_1.Button variant="contained" size="large" onClick={() => navigate('/steps-to-do')} sx={{
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
        }}>
            Get Started
          </material_1.Button>
        </material_1.Container>
      </material_1.Box>

      {/* Features Section */}
      <material_1.Container sx={{ py: 10 }}>
        <material_1.Typography variant="h4" align="center" sx={{ mb: 6, fontWeight: 700 }}>
          Explore Our Features
        </material_1.Typography>
        <material_1.Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 4,
            animation: `${fadeIn} 0.8s ease-out`,
            overflowX: { xs: 'auto', md: 'visible' },
            pb: 2,
        }}>
          {cardItems.map((card) => (<material_1.Card key={card.title} elevation={3} sx={{
                minWidth: 260,
                maxWidth: 300,
                width: { xs: 260, sm: 260, md: 260 },
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'translateY(-10px)', boxShadow: 6 },
                flex: '0 0 auto',
            }}>
              <material_1.Box sx={{ p: 3, textAlign: 'center', color: theme.palette.primary.main }}>
                {card.icon}
              </material_1.Box>
              <material_1.CardContent sx={{ flexGrow: 1 }}>
                <material_1.Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {card.title}
                </material_1.Typography>
                <material_1.Typography variant="body2" color="text.secondary">
                  {card.description}
                </material_1.Typography>
              </material_1.CardContent>
              <material_1.CardActions sx={{ p: 2 }}>
                <material_1.Button fullWidth variant={card.variant} color={card.color} onClick={() => navigate(card.path)} sx={{
                textTransform: 'none',
                fontWeight: 600,
                py: 1,
                background: card.variant === 'contained'
                    ? card.color === 'primary'
                        ? primaryGradient
                        : card.color === 'secondary'
                            ? secondaryGradient
                            : undefined
                    : 'transparent',
                border: card.variant === 'outlined'
                    ? `2px solid ${theme.palette[card.color].main}`
                    : 'none',
                color: card.variant === 'outlined'
                    ? theme.palette[card.color].main
                    : '#fff',
                borderRadius: '30px',
                '&:hover': { filter: 'brightness(1.1)' },
            }}>
                  {card.buttonText}
                </material_1.Button>
              </material_1.CardActions>
            </material_1.Card>))}
        </material_1.Box>
      </material_1.Container>

    </material_1.Box>);
};
exports.default = HomePage;
