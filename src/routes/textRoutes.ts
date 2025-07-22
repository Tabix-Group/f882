import { Router } from 'express';
import { getTexts } from '../controllers/textController';

const router = Router();

router.get('/', getTexts);

export default router;
