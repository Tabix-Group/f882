import { Router } from 'express';
import { uploadAudio, getAudios } from '../controllers/audioController';

const router = Router();

router.post('/upload', uploadAudio);
router.get('/', getAudios);

export default router;
