"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHighlight = exports.addHighlight = exports.getHighlights = void 0;
const db_1 = __importDefault(require("../config/db"));
const getHighlights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: 'ID de usuario requerido.' });
    }
    try {
        const result = yield db_1.default.query('SELECT id, text, chapter, created_at FROM book_highlights WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
        res.status(200).json({ highlights: result.rows });
    }
    catch (error) {
        console.error('Error al obtener highlights:', error);
        res.status(500).json({ message: 'Error al obtener highlights.' });
    }
});
exports.getHighlights = getHighlights;
const addHighlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, text, chapter } = req.body;
    if (!userId || !text || chapter === undefined) {
        return res.status(400).json({ message: 'userId, text y chapter son requeridos.' });
    }
    try {
        const result = yield db_1.default.query('INSERT INTO book_highlights (user_id, text, chapter, created_at) VALUES ($1, $2, $3, NOW()) RETURNING id, text, chapter, created_at', [userId, text, chapter]);
        res.status(201).json({ highlight: result.rows[0] });
    }
    catch (error) {
        console.error('Error al agregar highlight:', error);
        res.status(500).json({ message: 'Error al agregar highlight.' });
    }
});
exports.addHighlight = addHighlight;
const deleteHighlight = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'ID de highlight requerido.' });
    }
    try {
        yield db_1.default.query('DELETE FROM book_highlights WHERE id = $1', [id]);
        res.status(200).json({ message: 'Highlight eliminado exitosamente.' });
    }
    catch (error) {
        console.error('Error al eliminar highlight:', error);
        res.status(500).json({ message: 'Error al eliminar highlight.' });
    }
});
exports.deleteHighlight = deleteHighlight;
