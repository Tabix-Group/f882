import { Router } from 'express';
import { getHighlights, addHighlight, deleteHighlight } from '../controllers/bookController';

const router = Router();

router.get('/highlights/:userId', getHighlights);
router.post('/highlights', addHighlight);
router.delete('/highlights/:id', deleteHighlight);

export default router;