"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const AccessProgramMaterialsPage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<material_1.Box maxWidth={600} mx="auto" mt={5}>
      <material_1.Typography variant="h4" mb={2}>F88 Program Materials</material_1.Typography>
      <material_1.Typography mb={2}>Here you can download audios, watch YouTube videos, and read exclusive program texts.</material_1.Typography>
      <material_1.Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Download Materials
      </material_1.Button>
      <material_1.Button variant="text" color="primary" onClick={() => navigate('/steps-to-do')} sx={{ mt: 2 }}>
        Back to Steps
      </material_1.Button>
    </material_1.Box>);
};
exports.default = AccessProgramMaterialsPage;
