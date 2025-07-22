import { Request, Response } from 'express';

export const getVideos = (req: Request, res: Response) => {
  // Mock: retorna lista de videos de YouTube
  res.status(200).json({
    videos: [
      { id: 1, title: 'Video ejemplo', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' }
    ]
  });
};
