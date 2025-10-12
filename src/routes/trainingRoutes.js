"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const trainingController_1 = require("../controllers/trainingController");
const router = express_1.default.Router();
// Crear evaluación F88
router.post('/assessment', trainingController_1.createAssessment);
// Obtener evaluación de un usuario
router.get('/assessment/:userId', trainingController_1.getAssessment);
// Obtener calendario de entrenamiento
router.get('/calendar/:userId', trainingController_1.getTrainingCalendar);
// Actualizar día de entrenamiento
router.put('/day/:userId/:dayNumber', trainingController_1.updateTrainingDay);
// Obtener progreso general
router.get('/progress/:userId', trainingController_1.getTrainingProgress);
exports.default = router;
