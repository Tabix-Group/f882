"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrainingProgress = exports.updateTrainingDay = exports.getTrainingCalendar = exports.getAssessment = exports.createAssessment = void 0;
const db_1 = __importDefault(require("../config/db"));
const createAssessment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, question1, question2, question3, restDay, startDate } = req.body;
    if (!userId || !question1 || !question2 || !question3 || !restDay) {
        return res.status(400).json({
            message: 'Todos los campos son requeridos: userId, question1, question2, question3, restDay.'
        });
    }
    try {
        // Verificar que el usuario existe
        const userCheck = yield db_1.default.query('SELECT id FROM users WHERE id = $1', [userId]);
        if (userCheck.rows.length === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Calcular el nivel basado en las respuestas
        const totalScore = question1 + question2 + question3;
        let level;
        if (totalScore <= 4) {
            level = 'INICIAL';
        }
        else if (totalScore <= 7) {
            level = 'FUNCIONAL';
        }
        else {
            level = 'IDEAL';
        }
        // Fecha de inicio: usar la proporcionada o mañana por defecto
        let startDateObj;
        if (startDate) {
            startDateObj = new Date(startDate);
            // Validar que no sea una fecha pasada
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (startDateObj < today) {
                return res.status(400).json({ message: 'La fecha de inicio no puede ser anterior a hoy.' });
            }
        }
        else {
            startDateObj = new Date();
            startDateObj.setDate(startDateObj.getDate() + 1);
        }
        // Verificar si ya existe una evaluación para este usuario
        console.log('Verificando evaluación existente para userId:', userId);
        const existingAssessment = yield db_1.default.query('SELECT id FROM f88_assessments WHERE user_id = $1', [userId]);
        console.log('Resultado de verificación:', existingAssessment.rows.length, 'evaluaciones encontradas');
        // Si existe una evaluación, eliminarla completamente junto con sus datos relacionados
        if (existingAssessment.rows.length > 0) {
            console.log('Eliminando evaluación existente...');
            yield db_1.default.query('DELETE FROM training_days WHERE user_id = $1', [userId]);
            yield db_1.default.query('DELETE FROM training_progress WHERE user_id = $1', [userId]);
            yield db_1.default.query('DELETE FROM f88_assessments WHERE user_id = $1', [userId]);
            console.log('Evaluación existente eliminada');
        }
        // Crear nueva evaluación
        console.log('Creando nueva evaluación...');
        const assessmentResult = yield db_1.default.query(`INSERT INTO f88_assessments (user_id, question1, question2, question3, level, rest_day, start_date)
             VALUES ($1, $2, $3, $4, $5, $6, $7)
             RETURNING *`, [userId, question1, question2, question3, level, restDay, startDateObj]);
        const assessmentId = assessmentResult.rows[0].id;
        const assessment = assessmentResult.rows[0];
        console.log('Evaluación creada con ID:', assessmentId);
        // Crear el calendario de 88 días
        console.log('Creando calendario de entrenamiento...');
        yield createTrainingCalendar(userId, assessmentId, startDateObj, restDay);
        // Crear registro de progreso
        console.log('Creando registro de progreso...');
        yield db_1.default.query(`INSERT INTO training_progress (user_id, assessment_id)
             VALUES ($1, $2)`, [userId, assessmentId]);
        console.log('Evaluación completada exitosamente');
        res.status(201).json({
            message: 'Evaluación F88 completada exitosamente.',
            assessment: {
                id: assessment.id,
                level: assessment.level,
                restDay: assessment.rest_day,
                startDate: assessment.start_date
            }
        });
    }
    catch (error) {
        console.error('Error creando evaluación:', error);
        console.error('Código de error:', error.code);
        console.error('Mensaje de error:', error.message);
        if (error.code === '23505') {
            return res.status(409).json({ message: 'Ya existe una evaluación activa para este usuario.' });
        }
        res.status(500).json({ message: 'Error al crear la evaluación F88.' });
    }
});
exports.createAssessment = createAssessment;
const getAssessment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: 'User ID es requerido.' });
    }
    try {
        const result = yield db_1.default.query('SELECT * FROM f88_assessments WHERE user_id = $1', [userId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No se encontró evaluación F88 para este usuario.' });
        }
        res.status(200).json({
            message: 'Evaluación obtenida exitosamente.',
            assessment: result.rows[0]
        });
    }
    catch (error) {
        console.error('Error obteniendo evaluación:', error);
        res.status(500).json({ message: 'Error al obtener la evaluación F88.' });
    }
});
exports.getAssessment = getAssessment;
const getTrainingCalendar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: 'User ID es requerido.' });
    }
    try {
        const result = yield db_1.default.query(`SELECT td.*, fa.level, fa.rest_day, fa.start_date
       FROM training_days td
       JOIN f88_assessments fa ON td.assessment_id = fa.id
       WHERE td.user_id = $1
       ORDER BY td.day_number ASC`, [userId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No se encontró calendario de entrenamiento para este usuario.' });
        }
        res.status(200).json({
            message: 'Calendario obtenido exitosamente.',
            days: result.rows,
            level: result.rows[0].level,
            restDay: result.rows[0].rest_day,
            startDate: result.rows[0].start_date
        });
    }
    catch (error) {
        console.error('Error obteniendo calendario:', error);
        res.status(500).json({ message: 'Error al obtener el calendario de entrenamiento.' });
    }
});
exports.getTrainingCalendar = getTrainingCalendar;
const updateTrainingDay = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, dayNumber } = req.params;
    const { isCompleted, notes } = req.body;
    if (!userId || !dayNumber) {
        return res.status(400).json({ message: 'User ID y dayNumber son requeridos.' });
    }
    try {
        const completedAt = isCompleted ? new Date() : null;
        const result = yield db_1.default.query(`UPDATE training_days
       SET is_completed = $1, completed_at = $2, notes = $3, updated_at = CURRENT_TIMESTAMP
       WHERE user_id = $4 AND day_number = $5
       RETURNING *`, [isCompleted, completedAt, notes, userId, dayNumber]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Día de entrenamiento no encontrado.' });
        }
        // Actualizar progreso general
        yield updateTrainingProgress(parseInt(userId));
        res.status(200).json({
            message: 'Día de entrenamiento actualizado exitosamente.',
            trainingDay: result.rows[0]
        });
    }
    catch (error) {
        console.error('Error actualizando día de entrenamiento:', error);
        res.status(500).json({ message: 'Error al actualizar el día de entrenamiento.' });
    }
});
exports.updateTrainingDay = updateTrainingDay;
const getTrainingProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    if (!userId) {
        return res.status(400).json({ message: 'User ID es requerido.' });
    }
    try {
        const result = yield db_1.default.query('SELECT * FROM training_progress WHERE user_id = $1', [userId]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'No se encontró progreso de entrenamiento para este usuario.' });
        }
        res.status(200).json({
            message: 'Progreso obtenido exitosamente.',
            progress: result.rows[0]
        });
    }
    catch (error) {
        console.error('Error obteniendo progreso:', error);
        res.status(500).json({ message: 'Error al obtener el progreso de entrenamiento.' });
    }
});
exports.getTrainingProgress = getTrainingProgress;
// Función auxiliar para crear el calendario de 88 días
const createTrainingCalendar = (userId, assessmentId, startDate, restDay) => __awaiter(void 0, void 0, void 0, function* () {
    const trainingDays = [];
    let currentDate = new Date(startDate);
    let dayNumber = 1;
    // Crear 88 días de entrenamiento
    while (dayNumber <= 88) {
        const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        const isRestDay = dayOfWeek === restDay;
        trainingDays.push({
            user_id: userId,
            assessment_id: assessmentId,
            day_number: dayNumber,
            scheduled_date: new Date(currentDate),
            is_rest_day: isRestDay
        });
        // Avanzar al siguiente día
        currentDate.setDate(currentDate.getDate() + 1);
        // Incrementar el número de día
        dayNumber++;
    }
    // Insertar todos los días en la base de datos
    for (const day of trainingDays) {
        yield db_1.default.query(`INSERT INTO training_days (user_id, assessment_id, day_number, scheduled_date, is_rest_day)
       VALUES ($1, $2, $3, $4, $5)`, [day.user_id, day.assessment_id, day.day_number, day.scheduled_date, day.is_rest_day]);
    }
});
// Función auxiliar para actualizar el progreso general
const updateTrainingProgress = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener estadísticas actualizadas
        const statsResult = yield db_1.default.query(`SELECT
        COUNT(*) as total_days,
        COUNT(CASE WHEN is_completed = true THEN 1 END) as completed_days,
        MAX(CASE WHEN is_completed = true THEN scheduled_date END) as last_completed_date
       FROM training_days
       WHERE user_id = $1`, [userId]);
        const stats = statsResult.rows[0];
        // Calcular racha actual
        const streakResult = yield db_1.default.query(`SELECT day_number, scheduled_date
       FROM training_days
       WHERE user_id = $1 AND is_completed = true
       ORDER BY scheduled_date DESC`, [userId]);
        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;
        const completedDays = streakResult.rows;
        if (completedDays.length > 0) {
            // Calcular racha actual
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            for (let i = 0; i < completedDays.length; i++) {
                const dayDate = new Date(completedDays[i].scheduled_date);
                dayDate.setHours(0, 0, 0, 0);
                if (i === 0) {
                    // Primer día completado
                    currentStreak = 1;
                    tempStreak = 1;
                }
                else {
                    const prevDayDate = new Date(completedDays[i - 1].scheduled_date);
                    prevDayDate.setHours(0, 0, 0, 0);
                    const diffTime = prevDayDate.getTime() - dayDate.getTime();
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    if (diffDays === 1) {
                        tempStreak++;
                        if (i === 0)
                            currentStreak = tempStreak;
                    }
                    else {
                        tempStreak = 1;
                    }
                }
                longestStreak = Math.max(longestStreak, tempStreak);
            }
        }
        // Actualizar progreso
        yield db_1.default.query(`UPDATE training_progress
       SET completed_days = $1, current_streak = $2, longest_streak = $3, last_completed_date = $4, updated_at = CURRENT_TIMESTAMP
       WHERE user_id = $5`, [stats.completed_days, currentStreak, longestStreak, stats.last_completed_date, userId]);
    }
    catch (error) {
        console.error('Error actualizando progreso:', error);
    }
});
