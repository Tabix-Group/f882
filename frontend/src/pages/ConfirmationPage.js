"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const ConfirmationPage = () => {
    return (<material_1.Box maxWidth={600} mx="auto" mt={5}>
      <material_1.Typography variant="h4" mb={2}>Confirmation</material_1.Typography>
      <material_1.Typography>Your payment was successful. Welcome to the program!</material_1.Typography>
    </material_1.Box>);
};
exports.default = ConfirmationPage;
