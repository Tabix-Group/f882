import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

const audiosDir = path.join(__dirname, '../../public/audios');

export const uploadAudio = (req: Request, res: Response) => {
  // Mock: solo simula la subida
  res.status(201).json({ message: 'Audio subido correctamente (mock).' });
};

export const getAudios = (req: Request, res: Response) => {
  // Mock: retorna lista vacía
  res.status(200).json({ audios: [] });
};
