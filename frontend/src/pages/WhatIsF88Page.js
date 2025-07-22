"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const WhatIsF88Page = () => {
    return (<material_1.Box maxWidth={600} mx="auto" mt={5}>
      <material_1.Typography variant="h4" mb={2}>What is Fortitude 88</material_1.Typography>
      <material_1.Typography>Information about Fortitude 88...</material_1.Typography>
    </material_1.Box>);
};
exports.default = WhatIsF88Page;
