import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import paymentRoutes from './routes/paymentRoutes';
import audioRoutes from './routes/audioRoutes';
import videoRoutes from './routes/videoRoutes';
import textRoutes from './routes/textRoutes';
import chatRoutes from './routes/chatRoutes';
import trainingRoutes from './routes/trainingRoutes';
import bookRoutes from './routes/bookRoutes';
import { initializeDatabase } from './utils/databaseInit';

const app = express();
const allowedOrigins = [
  'http://localhost:3000',
  'https://frontend-production-1b9f.up.railway.app',
  'http://localhost:3001', // Agregar puerto alternativo si es necesario
  'https://www.f88.com.ar'
];
app.use(cors({ origin: allowedOrigins, credentials: true }));
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/audios', audioRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/texts', textRoutes);
app.use('/api/training', trainingRoutes);
app.use('/api/books', bookRoutes);
app.use(chatRoutes);

app.get('/', (req, res) => {
  res.send('F88 Landing Page API funcionando');
});

app.listen(PORT, async () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);

  // Inicializar base de datos
  try {
    await initializeDatabase();
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    process.exit(1);
  }
});