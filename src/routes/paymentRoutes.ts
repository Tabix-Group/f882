import { Router } from 'express';

const router = Router();

// Endpoint para procesar pagos (mock)
router.post('/pay', async (req, res) => {
  // Aquí iría la integración real con el proveedor de pagos
  res.status(200).json({ message: 'Pago procesado correctamente (mock).' });
});

export default router;
