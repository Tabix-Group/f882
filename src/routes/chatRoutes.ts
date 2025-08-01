import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
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
