// Controlador de pagos (mock)
import { Request, Response } from 'express';

export const processPayment = async (req: Request, res: Response) => {
  // Aquí iría la lógica real de integración con el proveedor de pagos
  res.status(200).json({ message: 'Pago procesado correctamente (mock).' });
};
