import { Request, Response } from 'express';
import pool from '../config/db';

export const getHighlights = async (req: Request, res: Response) => {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: 'ID de usuario requerido.' });
    }
    try {
        const result = await pool.query(
            'SELECT id, text, chapter, created_at FROM book_highlights WHERE user_id = $1 ORDER BY created_at DESC',
            [userId]
        );
        res.status(200).json({ highlights: result.rows });
    } catch (error) {
        console.error('Error al obtener highlights:', error);
        res.status(500).json({ message: 'Error al obtener highlights.' });
    }
};

export const addHighlight = async (req: Request, res: Response) => {
    const { userId, text, chapter } = req.body;
    if (!userId || !text || chapter === undefined) {
        return res.status(400).json({ message: 'userId, text y chapter son requeridos.' });
    }
    try {
        const result = await pool.query(
            'INSERT INTO book_highlights (user_id, text, chapter, created_at) VALUES ($1, $2, $3, NOW()) RETURNING id, text, chapter, created_at',
            [userId, text, chapter]
        );
        res.status(201).json({ highlight: result.rows[0] });
    } catch (error) {
        console.error('Error al agregar highlight:', error);
        res.status(500).json({ message: 'Error al agregar highlight.' });
    }
};

export const deleteHighlight = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: 'ID de highlight requerido.' });
    }
    try {
        await pool.query('DELETE FROM book_highlights WHERE id = $1', [id]);
        res.status(200).json({ message: 'Highlight eliminado exitosamente.' });
    } catch (error) {
        console.error('Error al eliminar highlight:', error);
        res.status(500).json({ message: 'Error al eliminar highlight.' });
    }
};