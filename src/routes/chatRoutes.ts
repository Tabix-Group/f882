import express from 'express';
import axios from 'axios';
import {
  createChatSession,
  getChatSessions,
  getChatMessages,
  saveChatMessage,
  sendChatMessage,
  deleteChatSession
} from '../controllers/chatController';

const router = express.Router();

// Crear nueva sesión de chat
router.post('/session', createChatSession);

// Obtener todas las sesiones de un usuario
router.get('/sessions/:userId', getChatSessions);

// Obtener mensajes de una sesión específica
router.get('/messages/:sessionId', getChatMessages);

// Guardar mensaje manualmente
router.post('/message', saveChatMessage);

// Enviar mensaje y obtener respuesta de IA (método principal)
router.post('/send', sendChatMessage);

// Eliminar sesión de chat
router.delete('/session/:sessionId', deleteChatSession);

// Ruta legacy para compatibilidad (puedes deprecarla después)
router.post('/api/chat', async (req, res) => {
  const { message, chapter } = req.body;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Responde como asistente de lectura. Usa solo la información del capítulo proporcionado.' },
          { role: 'system', content: `Capítulo actual: ${chapter}` },
          { role: 'user', content: message }
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.json({ reply: (response.data as any).choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'Error al conectar con ChatGPT' });
  }
});

export default router;
