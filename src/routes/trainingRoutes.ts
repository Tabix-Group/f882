import express from 'express';
import {
    createAssessment,
    getAssessment,
    getTrainingCalendar,
    updateTrainingDay,
    getTrainingProgress
} from '../controllers/trainingController';

const router = express.Router();

// Crear evaluación F88
router.post('/assessment', createAssessment);

// Obtener evaluación de un usuario
router.get('/assessment/:userId', getAssessment);

// Obtener calendario de entrenamiento
router.get('/calendar/:userId', getTrainingCalendar);

// Actualizar día de entrenamiento
router.put('/day/:userId/:dayNumber', updateTrainingDay);

// Obtener progreso general
router.get('/progress/:userId', getTrainingProgress);

export default router;
