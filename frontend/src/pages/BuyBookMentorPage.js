"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const BuyBookMentorPage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<material_1.Box maxWidth={600} mx="auto" mt={5}>
      <material_1.Typography variant="h4" mb={2}>Buy Fortitude 88 Book with Advanced Mentor</material_1.Typography>
      <material_1.Button variant="contained" color="primary" onClick={() => navigate('/payment')}>Proceed to Payment</material_1.Button>
    </material_1.Box>);
};
exports.default = BuyBookMentorPage;
