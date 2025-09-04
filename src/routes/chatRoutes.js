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
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const chatController_1 = require("../controllers/chatController");
const router = express_1.default.Router();
// Crear nueva sesión de chat
router.post('/session', chatController_1.createChatSession);
// Obtener todas las sesiones de un usuario
router.get('/sessions/:userId', chatController_1.getChatSessions);
// Obtener mensajes de una sesión específica
router.get('/messages/:sessionId', chatController_1.getChatMessages);
// Guardar mensaje manualmente
router.post('/message', chatController_1.saveChatMessage);
// Enviar mensaje y obtener respuesta de IA (método principal)
router.post('/send', chatController_1.sendChatMessage);
// Eliminar sesión de chat
router.delete('/session/:sessionId', chatController_1.deleteChatSession);
// Ruta legacy para compatibilidad (puedes deprecarla después)
router.post('/api/chat', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message, chapter } = req.body;
    try {
        const response = yield axios_1.default.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'Responde como asistente de lectura. Usa solo la información del capítulo proporcionado.' },
                { role: 'system', content: `Capítulo actual: ${chapter}` },
                { role: 'user', content: message }
            ],
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        res.json({ reply: response.data.choices[0].message.content });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al conectar con ChatGPT' });
    }
}));
exports.default = router;
