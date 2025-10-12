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
exports.deleteChatSession = exports.sendChatMessage = exports.saveChatMessage = exports.getChatMessages = exports.getChatSessions = exports.createChatSession = void 0;
const db_1 = __importDefault(require("../config/db"));
const axios_1 = __importDefault(require("axios"));
const createChatSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, sessionName = 'Chat con Jordan' } = req.body;
    if (!userId) {
        return res.status(400).json({ message: 'User ID es requerido.' });
    }
    try {
        const result = yield db_1.default.query('INSERT INTO chat_sessions (user_id, session_name) VALUES ($1, $2) RETURNING *', [userId, sessionName]);
        res.status(201).json({
            message: 'Sesión de chat creada exitosamente.',
            session: result.rows[0]
        });
    }
    catch (error) {
        console.error('Error creando sesión de chat:', error);
        res.status(500).json({ message: 'Error al crear la sesión de chat.' });
    }
});
exports.createChatSession = createChatSession;
const getChatSessions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: 'User ID es requerido.' });
    }
    try {
        const result = yield db_1.default.query('SELECT * FROM chat_sessions WHERE user_id = $1 ORDER BY updated_at DESC', [userId]);
        res.status(200).json({
            message: 'Sesiones obtenidas exitosamente.',
            sessions: result.rows
        });
    }
    catch (error) {
        console.error('Error obteniendo sesiones de chat:', error);
        res.status(500).json({ message: 'Error al obtener las sesiones de chat.' });
    }
});
exports.getChatSessions = getChatSessions;
const getChatMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sessionId } = req.params;
    if (!sessionId) {
        return res.status(400).json({ message: 'Session ID es requerido.' });
    }
    try {
        const result = yield db_1.default.query(`SELECT cm.*, cs.session_name
       FROM chat_messages cm
       JOIN chat_sessions cs ON cm.session_id = cs.id
       WHERE cm.session_id = $1
       ORDER BY cm.timestamp ASC`, [sessionId]);
        res.status(200).json({
            message: 'Mensajes obtenidos exitosamente.',
            messages: result.rows
        });
    }
    catch (error) {
        console.error('Error obteniendo mensajes de chat:', error);
        res.status(500).json({ message: 'Error al obtener los mensajes de chat.' });
    }
});
exports.getChatMessages = getChatMessages;
const saveChatMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sessionId, userId, role, content } = req.body;
    if (!sessionId || !userId || !role || !content) {
        return res.status(400).json({
            message: 'Session ID, User ID, role y content son requeridos.'
        });
    }
    try {
        // Guardar el mensaje
        const result = yield db_1.default.query('INSERT INTO chat_messages (session_id, user_id, role, content) VALUES ($1, $2, $3, $4) RETURNING *', [sessionId, userId, role, content]);
        // Actualizar el timestamp de la sesión
        yield db_1.default.query('UPDATE chat_sessions SET updated_at = CURRENT_TIMESTAMP WHERE id = $1', [sessionId]);
        res.status(201).json({
            message: 'Mensaje guardado exitosamente.',
            savedMessage: result.rows[0]
        });
    }
    catch (error) {
        console.error('Error guardando mensaje de chat:', error);
        res.status(500).json({ message: 'Error al guardar el mensaje de chat.' });
    }
});
exports.saveChatMessage = saveChatMessage;
const sendChatMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message, userId, sessionId } = req.body;
    if (!message || !userId) {
        return res.status(400).json({ message: 'Mensaje y User ID son requeridos.' });
    }
    try {
        let currentSessionId = sessionId;
        // Si no hay sessionId, crear una nueva sesión
        if (!currentSessionId) {
            const sessionResult = yield db_1.default.query('INSERT INTO chat_sessions (user_id, session_name) VALUES ($1, $2) RETURNING id', [userId, 'Chat con Jordan']);
            currentSessionId = sessionResult.rows[0].id;
        }
        // Guardar mensaje del usuario
        yield db_1.default.query('INSERT INTO chat_messages (session_id, user_id, role, content) VALUES ($1, $2, $3, $4)', [currentSessionId, userId, 'user', message]);
        // Obtener historial de mensajes para contexto
        const historyResult = yield db_1.default.query(`SELECT role, content FROM chat_messages
       WHERE session_id = $1 AND user_id = $2
       ORDER BY timestamp ASC LIMIT 20`, [currentSessionId, userId]);
        const messages = historyResult.rows.map(row => ({
            role: row.role,
            content: row.content
        }));
        // Agregar mensaje de sistema
        const systemMessage = {
            role: 'system',
            content: `Eres Jordan, un mentor personal especializado en el programa F88 de transformación física y mental.
      Tu objetivo es guiar al usuario a través de los 88 días del programa, motivándolo, respondiendo preguntas sobre nutrición,
      entrenamiento, mentalidad y cualquier aspecto relacionado con su transformación.
      Sé empático, motivador y específico en tus consejos. Mantén un tono profesional pero cercano.`
        };
        const chatMessages = [systemMessage, ...messages];
        // Llamar a OpenAI
        const response = yield axios_1.default.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: chatMessages,
            max_tokens: 500,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        const aiResponse = response.data.choices[0].message.content;
        // Guardar respuesta de la IA
        yield db_1.default.query('INSERT INTO chat_messages (session_id, user_id, role, content) VALUES ($1, $2, $3, $4)', [currentSessionId, userId, 'assistant', aiResponse]);
        // Actualizar timestamp de la sesión
        yield db_1.default.query('UPDATE chat_sessions SET updated_at = CURRENT_TIMESTAMP WHERE id = $1', [currentSessionId]);
        res.status(200).json({
            response: aiResponse,
            sessionId: currentSessionId
        });
    }
    catch (error) {
        console.error('Error en chat:', error);
        res.status(500).json({ message: 'Error al procesar el mensaje del chat.' });
    }
});
exports.sendChatMessage = sendChatMessage;
const deleteChatSession = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { sessionId } = req.params;
    if (!sessionId) {
        return res.status(400).json({ message: 'Session ID es requerido.' });
    }
    try {
        yield db_1.default.query('DELETE FROM chat_sessions WHERE id = $1', [sessionId]);
        res.status(200).json({ message: 'Sesión de chat eliminada exitosamente.' });
    }
    catch (error) {
        console.error('Error eliminando sesión de chat:', error);
        res.status(500).json({ message: 'Error al eliminar la sesión de chat.' });
    }
});
exports.deleteChatSession = deleteChatSession;
