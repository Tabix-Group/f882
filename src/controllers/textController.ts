import { Request, Response } from 'express';

export const getTexts = (req: Request, res: Response) => {
  // Mock: retorna lista de textos
  res.status(200).json({
    texts: [
      { id: 1, title: 'Texto ejemplo', content: 'Este es un texto de ejemplo.' }
    ]
  });
};
