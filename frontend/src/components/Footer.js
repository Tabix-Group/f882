"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const YouTube_1 = __importDefault(require("@mui/icons-material/YouTube"));
const Facebook_1 = __importDefault(require("@mui/icons-material/Facebook"));
const Twitter_1 = __importDefault(require("@mui/icons-material/Twitter"));
const Instagram_1 = __importDefault(require("@mui/icons-material/Instagram"));
const Footer = () => {
    return (<material_1.Box component="footer" sx={{ bgcolor: 'background.paper', py: 1, borderTop: '1px solid #eee', width: '100%' }}>
      <material_1.Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 36 }}>
        <material_1.Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <material_1.Typography variant="body1" sx={{ fontWeight: 600, fontSize: '1rem' }}>
            Join Our Community
          </material_1.Typography>
          <material_1.IconButton aria-label="Youtube" size="small" href="https://youtube.com" target="_blank" color="error" sx={{
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            },
        }}>
            <YouTube_1.default fontSize="medium"/>
          </material_1.IconButton>
          <material_1.IconButton aria-label="Facebook" size="small" href="https://facebook.com" target="_blank" color="primary" sx={{
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            },
        }}>
            <Facebook_1.default fontSize="medium"/>
          </material_1.IconButton>
          <material_1.IconButton aria-label="Twitter" size="small" href="https://twitter.com" target="_blank" sx={{
            color: '#1DA1F2',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            },
        }}>
            <Twitter_1.default fontSize="medium"/>
          </material_1.IconButton>
          <material_1.IconButton aria-label="Instagram" size="small" href="https://instagram.com" target="_blank" sx={{
            color: '#E1306C',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
                transform: 'scale(1.25)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            },
        }}>
            <Instagram_1.default fontSize="medium"/>
          </material_1.IconButton>
        </material_1.Box>
        <material_1.Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <material_1.Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
            <a href="https://tabix.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Tabix Group</a>
          </material_1.Typography>
        </material_1.Box>
        <material_1.Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
          © {new Date().getFullYear()} F88. All rights reserved.
        </material_1.Typography>
      </material_1.Container>
    </material_1.Box>);
};
exports.default = Footer;
