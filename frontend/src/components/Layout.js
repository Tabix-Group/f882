"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const Footer_1 = __importDefault(require("./Footer"));
const navItems = [
    { label: 'Steps to Do', path: '/steps-to-do' },
    { label: 'What is F88', path: '/what-is-f88' },
    { label: 'Buy Book', path: '/buy-book' },
    { label: 'Buy Book Mentor', path: '/buy-book-mentor' },
    { label: 'Customer Service', path: '/customer-service' },
];
const Layout = ({ children }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<material_1.Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <material_1.AppBar position="static" elevation={1} sx={{ bgcolor: '#18181C' }}>
        <material_1.Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <material_1.Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <material_1.Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mr: 3 }} onClick={() => navigate('/')}>
              <img src={process.env.PUBLIC_URL + '/favicon.svg'} alt="F88 Logo" style={{ height: 32, marginRight: 8 }}/>
              <material_1.Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
                F88
              </material_1.Typography>
            </material_1.Box>
            {navItems.map((item) => (<material_1.Button key={item.label} color="inherit" sx={{
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
            }} onClick={() => navigate(item.path)}>
                {item.label}
              </material_1.Button>))}
          </material_1.Box>
          <material_1.Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <material_1.Button color="inherit" sx={{
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
        }} onClick={() => navigate('/login')}>
              Login
            </material_1.Button>
            <material_1.Button variant="contained" color="primary" sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '40px',
            px: 3,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: 'primary.main',
                color: '#fff',
                fontSize: '1.18rem',
                fontWeight: 900,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            },
        }} onClick={() => navigate('/register')}>
              Sign Up
            </material_1.Button>
          </material_1.Box>
        </material_1.Toolbar>
      </material_1.AppBar>
      <material_1.Box component="main" sx={{ flex: 1 }}>
        {children}
      </material_1.Box>
      <Footer_1.default />
    </material_1.Box>);
};
exports.default = Layout;
