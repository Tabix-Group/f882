"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTexts = void 0;
const getTexts = (req, res) => {
    // Mock: retorna lista de textos
    res.status(200).json({
        texts: [
            { id: 1, title: 'Texto ejemplo', content: 'Este es un texto de ejemplo.' }
        ]
    });
};
exports.getTexts = getTexts;
