"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
// import Layout from '../components/Layout';
const StepsToDoPage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<material_1.Box maxWidth={600} mx="auto" mt={5}>
      <material_1.Typography variant="h4" mb={2}>Welcome to the F88 Program</material_1.Typography>
      <material_1.Typography mb={3}>Follow these steps to advance in your fitness transformation:</material_1.Typography>
      <ol>
        <li>Complete your registration</li>
        <li>Make your payment</li>
        <li>Access program materials</li>
        <li>Access personalized mentoring</li>
        <li>Start your F88 fitness change</li>
      </ol>
      <material_1.Box mt={3}>
        <material_1.Button variant="contained" color="primary" onClick={() => navigate('/register')} sx={{ mr: 2 }}>
          Go to Registration
        </material_1.Button>
        <material_1.Button variant="outlined" color="primary" onClick={() => navigate('/login')} sx={{ mr: 2 }}>
          Login
        </material_1.Button>
        <material_1.Button variant="outlined" color="secondary" onClick={() => navigate('/payment')} sx={{ mr: 2 }}>
          Go to Payment
        </material_1.Button>
        <material_1.Button variant="outlined" color="success" onClick={() => navigate('/access-program-materials')} sx={{ mr: 2 }}>
          Materials
        </material_1.Button>
        <material_1.Button variant="outlined" color="info" onClick={() => navigate('/access-mentor')}>
          Mentoring
        </material_1.Button>
      </material_1.Box>
    </material_1.Box>);
};
exports.default = StepsToDoPage;
