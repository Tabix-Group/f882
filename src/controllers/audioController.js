"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAudios = exports.uploadAudio = void 0;
const path_1 = __importDefault(require("path"));
const audiosDir = path_1.default.join(__dirname, '../../public/audios');
const uploadAudio = (req, res) => {
    // Mock: solo simula la subida
    res.status(201).json({ message: 'Audio subido correctamente (mock).' });
};
exports.uploadAudio = uploadAudio;
const getAudios = (req, res) => {
    // Mock: retorna lista vacía
    res.status(200).json({ audios: [] });
};
exports.getAudios = getAudios;
