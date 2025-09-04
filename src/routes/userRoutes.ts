import { Router } from 'express';
import { registerUser, loginUser, getAssessmentStatus } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/assessment-status/:userId', getAssessmentStatus);

export default router;
