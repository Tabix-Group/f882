import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import paymentRoutes from './routes/paymentRoutes';
import audioRoutes from './routes/audioRoutes';
import videoRoutes from './routes/videoRoutes';
import textRoutes from './routes/textRoutes';
import chatRoutes from './routes/chatRoutes';

const app = express();
const allowedOrigins = [
  'http://localhost:3000',
  'https://frontend-production-1b9f.up.railway.app'
];
app.use(cors({ origin: allowedOrigins, credentials: true }));
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/audios', audioRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/texts', textRoutes);
app.use(chatRoutes);

app.get('/', (req, res) => {
  res.send('F88 Landing Page API funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});