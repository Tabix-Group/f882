import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getActivityForDay } from '../utils/trainingActivities';

// Define API_BASE outside component to avoid dependency issues
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

interface TrainingDay {
    dayNumber: number;
    date: string;
    isRestDay: boolean;
    isCompleted: boolean;
    activity: string;
}

interface TrainingProgress {
    totalDays: number;
    completedDays: number;
    currentStreak: number;
    longestStreak: number;
    level: string;
}

const TrainingCalendarPage: React.FC = () => {
    const [trainingDays, setTrainingDays] = useState<TrainingDay[]>([]);
    const [progress, setProgress] = useState<TrainingProgress | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedDay, setSelectedDay] = useState<TrainingDay | null>(null);
    const [showActivityModal, setShowActivityModal] = useState(false);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string>('');
    const [programStartDate, setProgramStartDate] = useState<Date | null>(null);
    const [restDay, setRestDay] = useState<string>('');
    const navigate = useNavigate();
    const { user, isLoading: authLoading } = useAuth();

    const loadTrainingData = useCallback(async () => {
        try {
            setIsLoading(true);

            // Cargar calendario
            const calendarResponse = await fetch(`${API_BASE}/training/calendar/${user?.id}`);
            if (!calendarResponse.ok) {
                throw new Error('Error al cargar el calendario');
            }
            const calendarData = await calendarResponse.json();

            // Transformar los datos para que tengan la estructura esperada
            const transformedDays = (calendarData.days || []).map((day: any) => ({
                dayNumber: day.day_number,
                date: day.scheduled_date,
                isRestDay: day.is_rest_day,
                isCompleted: day.is_completed,
                activity: day.is_rest_day ? 'Descanso' : 'Entrenamiento'
            }));
            setTrainingDays(transformedDays);

            // Guardar información adicional del programa
            if (calendarData.startDate) {
                setProgramStartDate(new Date(calendarData.startDate));
            }
            if (calendarData.restDay) {
                setRestDay(calendarData.restDay);
            }

            // Cargar progreso
            const progressResponse = await fetch(`${API_BASE}/training/progress/${user?.id}`);
            if (progressResponse.ok) {
                const progressData = await progressResponse.json();
                // Mapear correctamente los datos del progreso
                setProgress({
                    totalDays: progressData.progress.total_days || 88,
                    completedDays: progressData.progress.completed_days || 0,
                    currentStreak: progressData.progress.current_streak || 0,
                    longestStreak: progressData.progress.longest_streak || 0,
                    level: calendarData.level || 'INICIAL'
                });
            }

        } catch (error) {
            console.error('Error:', error);
            alert('Error al cargar los datos de entrenamiento. Redirigiendo a la evaluación.');
            navigate('/f88-assessment');
        } finally {
            setIsLoading(false);
        }
    }, [user?.id, navigate]);

    useEffect(() => {
        if (authLoading) return;
        if (!user) {
            navigate('/login');
            return;
        }

        loadTrainingData();
    }, [user, authLoading, navigate, loadTrainingData]);

    const handleDayClick = (day: TrainingDay) => {
        setSelectedDay(day);
        setShowActivityModal(true);
    };

    const handleDayToggle = async (dayNumber: number) => {
        const day = trainingDays.find((d: TrainingDay) => d.dayNumber === dayNumber);

        // Solo permitir marcar días pasados o del día actual
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (!programStartDate) return;

        const dayDate = new Date(programStartDate);
        dayDate.setDate(dayDate.getDate() + dayNumber - 1);
        dayDate.setHours(0, 0, 0, 0);

        if (dayDate > today) {
            alert('No puedes marcar actividades futuras como completadas.');
            return;
        }

        try {
            const response = await fetch(`${API_BASE}/training/day/${user?.id}/${dayNumber}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    isCompleted: day ? !day.isCompleted : true
                })
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el progreso');
            }

            // Recargar datos después de la actualización
            await loadTrainingData();

        } catch (error) {
            console.error('Error:', error);
            alert('Error al actualizar el progreso. Por favor intenta de nuevo.');
        }
    };

    const closeModal = () => {
        setShowActivityModal(false);
        setSelectedDay(null);
    };

    const openVideoModal = (videoUrl: string) => {
        // Convertir la URL a formato embed con autoplay
        const embedUrl = videoUrl.replace('watch?v=', 'embed/') + '?autoplay=1&rel=0';
        setCurrentVideoUrl(embedUrl);
        setShowVideoModal(true);
    };

    const closeVideoModal = () => {
        setShowVideoModal(false);
        setCurrentVideoUrl('');
    };

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month: number, year: number) => {
        return new Date(year, month, 1).getDay();
    };

    const getTrainingDayForDate = (date: Date) => {
        if (!programStartDate) {
            return null;
        }

        // Calcular la diferencia en días desde la fecha de inicio
        const startDate = new Date(programStartDate);
        startDate.setHours(0, 0, 0, 0);
        const targetDate = new Date(date);
        targetDate.setHours(0, 0, 0, 0);

        const diffTime = targetDate.getTime() - startDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        // Si la fecha está fuera del rango del programa (0-87 días), no es un día del programa
        if (diffDays < 0 || diffDays > 87) {
            return null;
        }

        // Calcular el número del día del programa (1-88)
        const dayNumber = diffDays + 1;

        // Determinar si es día de descanso
        const dayOfWeek = targetDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
        const isRestDay = dayOfWeek === restDay;

        // Buscar si este día existe en los datos de la base de datos
        const existingDay = trainingDays.find((day: TrainingDay) => day.dayNumber === dayNumber);

        // Crear el objeto del día, usando datos de la BD si existen, o valores por defecto
        return {
            dayNumber: dayNumber,
            date: targetDate.toISOString(),
            isRestDay: isRestDay,
            isCompleted: existingDay ? existingDay.isCompleted : false,
            activity: isRestDay ? 'Descanso' : 'Entrenamiento'
        };
    };

    const renderCalendar = () => {
        const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
        const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);
        const days = [];

        // Espacios vacíos para los días antes del primer día del mes
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-12"></div>);
        }

        // Días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const currentDate = new Date(selectedYear, selectedMonth, day);
            const trainingDay = getTrainingDayForDate(currentDate);
            const isToday = currentDate.toDateString() === new Date().toDateString();
            const isPast = currentDate < new Date() && !isToday;

            days.push(
                <div
                    key={day}
                    className={`h-12 sm:h-16 flex flex-col justify-between p-1 sm:p-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${trainingDay
                        ? trainingDay.isRestDay
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                            : trainingDay.isCompleted
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 cursor-pointer hover:bg-blue-500/30'
                                : isPast
                                    ? 'bg-red-500/20 text-red-300 border border-red-500/30 cursor-pointer hover:bg-red-500/30'
                                    : 'bg-white/5 text-white border border-white/20 cursor-pointer hover:bg-white/10'
                        : 'text-gray-500'
                        } ${isToday ? 'ring-2 ring-blue-400' : ''}`}
                    onClick={() => trainingDay && handleDayClick(trainingDay)}
                >
                    {trainingDay ? (
                        <>
                            {/* Número del día del programa en el centro */}
                            <div className="flex-1 flex items-center justify-center">
                                <span className="text-base sm:text-lg font-bold">{trainingDay.dayNumber}</span>
                            </div>

                            {/* Número del día del mes abajo a la derecha */}
                            <div className="flex justify-end">
                                <span className="text-[10px] sm:text-xs opacity-70 italic">{day}-{selectedMonth + 1}</span>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex-1"></div>
                            <div className="flex justify-end">
                                <span className="text-[10px] sm:text-xs opacity-70 italic">{day}-{selectedMonth + 1}</span>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        return days;
    };

    const getMonthName = (month: number) => {
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        return months[month];
    };

    const changeMonth = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            if (selectedMonth === 0) {
                setSelectedMonth(11);
                setSelectedYear(selectedYear - 1);
            } else {
                setSelectedMonth(selectedMonth - 1);
            }
        } else {
            if (selectedMonth === 11) {
                setSelectedMonth(0);
                setSelectedYear(selectedYear + 1);
            } else {
                setSelectedMonth(selectedMonth + 1);
            }
        }
    };

    if (authLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black flex items-center justify-center">
                <div className="text-white text-xl">Cargando...</div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black flex items-center justify-center">
                <div className="text-white text-xl">Cargando tu calendario de entrenamiento...</div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-black via-neutral-900 to-black text-white min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Header */}
                <div className="bg-neutral-900/80 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-4">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    F
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">Calendario F88</h1>
                                    <p className="text-sm text-gray-400">88 días de transformación</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                        </div>
                    </div>
                </div>

                {/* Progress Stats */}
                {progress && (
                    <div className="bg-neutral-900/50 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 lg:px-8 py-6">
                        <div className="max-w-7xl mx-auto">
                            {/* Progress Bar */}
                            <div className="mt-6">
                                <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-400 mb-2 gap-1">
                                    <span>Progreso del programa</span>
                                    <span>{progress.completedDays} de {progress.totalDays} días</span>
                                </div>
                                <div className="w-full bg-red-500/20 rounded-full h-3 relative">
                                    <div
                                        className="bg-green-500 h-3 rounded-full transition-all duration-500 absolute left-0 top-0"
                                        style={{
                                            width: progress.totalDays && progress.totalDays > 0
                                                ? `${(progress.completedDays / progress.totalDays) * 100}%`
                                                : '0%'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Calendar Header */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                            <h2 className="text-xl sm:text-2xl font-bold">
                                {getMonthName(selectedMonth)} {selectedYear}
                            </h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => changeMonth('prev')}
                                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => changeMonth('next')}
                                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-3 sm:p-6 shadow-2xl overflow-x-auto">
                            {/* Days of week header */}
                            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
                                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                                    <div key={day} className="text-center text-xs sm:text-sm font-medium text-gray-400 py-2">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar days */}
                            <div className="grid grid-cols-7 gap-1 sm:gap-2">
                                {renderCalendar()}
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500/20 border border-blue-500/30 rounded"></div>
                                <span>Completado</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/5 border border-white/20 rounded"></div>
                                <span>Pendiente</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-500/20 border border-red-500/30 rounded"></div>
                                <span>Perdido</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500/20 border border-green-500/30 rounded"></div>
                                <span>Descanso</span>
                            </div>
                            {progress && (
                                <>
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-blue-400 font-bold">{progress.completedDays}</span>
                                        <span className="hidden sm:inline">Completados</span>
                                        <span className="sm:hidden">✓</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="text-red-400 font-bold">
                                            {programStartDate ? (() => {
                                                const today = new Date();
                                                const daysElapsed = Math.floor((today.getTime() - programStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
                                                return Math.max(0, daysElapsed - progress.completedDays);
                                            })() : 0}
                                        </span>
                                        <span className="hidden sm:inline">Perdidos</span>
                                        <span className="sm:hidden">✗</span>
                                    </div>
                                </>
                            )}
                        </div>                        {/* Motivational Message */}
                        <div className="mt-6 sm:mt-8 text-center">
                            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-xl p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                                    ¡Cada día cuenta en tu transformación!
                                </h3>
                                <p className="text-sm sm:text-base text-gray-300">
                                    Marca los días que completes y mantén tu racha viva. ¡Tú puedes lograrlo!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activity Modal */}
                {showActivityModal && selectedDay && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
                        <div className="min-h-screen w-screen flex items-center justify-center p-0">
                            <div className="bg-neutral-900 border border-white/20 rounded-xl sm:rounded-2xl w-full mx-2 sm:mx-auto sm:max-w-4xl max-h-[95vh] sm:max-h-[85vh] overflow-y-auto overflow-x-hidden shadow-2xl">
                                <div className="p-3 sm:p-6">
                                    <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                                        <h3 className="text-base sm:text-xl font-bold text-white truncate">
                                            Día {selectedDay.dayNumber}
                                        </h3>
                                        <button
                                            onClick={closeModal}
                                            className="text-gray-400 hover:text-white transition-colors p-1 flex-shrink-0"
                                        >
                                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="space-y-3 sm:space-y-4 w-full overflow-hidden">
                                        <div className="text-center">
                                            <p className="text-gray-300 text-xs sm:text-sm break-words px-2">
                                                {new Date(selectedDay.date).toLocaleDateString('es-ES', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>

                                        {selectedDay.isRestDay ? (
                                            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-3 sm:p-4 text-center">
                                                <h4 className="text-green-300 font-semibold mb-2 text-sm sm:text-base">Día de Descanso</h4>
                                                <p className="text-green-200 text-xs sm:text-sm">
                                                    Hoy es tu día de recuperación. Descansa, hidrátate y prepárate.
                                                </p>
                                        </div>
                                    ) : (
                                        (() => {
                                            const activity = getActivityForDay(progress?.level || 'INICIAL', selectedDay.dayNumber);
                                            return activity ? (
                                                <div className="space-y-3 sm:space-y-4 w-full overflow-hidden">
                                                    {/* Header con tipo de entrenamiento */}
                                                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-3 sm:p-4 text-center">
                                                        <h4 className="text-blue-300 font-bold text-sm sm:text-xl mb-1 break-words">{activity.activity}</h4>
                                                        <p className="text-blue-200/80 text-xs sm:text-sm break-words">
                                                            Duración: {activity.exercise === 'na' ? 'Libre' : (() => {
                                                                const baseDuration = parseInt(String(activity.exercise)) || 0;
                                                                const hasRespiracion = (activity as any).details?.respiracionConsciente;
                                                                return hasRespiracion ? `${baseDuration + 10} min (+ resp)` : `${baseDuration} min`;
                                                            })()}
                                                        </p>
                                                        {(activity as any).details?.restBetweenSets && (
                                                            <p className="text-blue-200/80 text-xs sm:text-sm">
                                                                Descanso: {(activity as any).details.restBetweenSets}
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Detalles del entrenamiento en formato claro */}
                                                    {(activity as any).details && (
                                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 w-full overflow-hidden">
                                                            {/* Lista de ejercicios en formato tabla */}
                                                            {(activity as any).details.exercises && (
                                                                <div className="space-y-2 w-full overflow-hidden">
                                                                    <h6 className="text-white font-semibold text-sm sm:text-base flex items-center">
                                                                        💪 Ejercicios a realizar:
                                                                    </h6>

                                                                    {/* Tabla horizontal de ejercicios - Desktop / Cards - Mobile */}
                                                                    <div className="space-y-2">
                                                                        {/* Header de la tabla - Solo Desktop */}
                                                                        <div className="hidden sm:grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-2 bg-blue-600/20 p-3 border-b border-white/10 rounded-t-lg">
                                                                            <div className="text-blue-200 font-semibold text-sm text-center w-8">#</div>
                                                                            <div className="text-blue-200 font-semibold text-sm">Ejercicio</div>
                                                                            <div className="text-blue-200 font-semibold text-sm text-center w-16">Reps</div>
                                                                            <div className="text-blue-200 font-semibold text-sm text-center w-16">Min</div>
                                                                            <div className="text-blue-200 font-semibold text-sm text-center w-16">Series</div>
                                                                            <div className="text-blue-200 font-semibold text-sm text-center w-20">Ver</div>
                                                                        </div>

                                                                        {/* Filas de ejercicios */}
                                                                        {(() => {
                                                                            // Crear lista completa de ejercicios incluyendo precalentamiento
                                                                            const allExercises = [];

                                                                            // Agregar precalentamiento al inicio si existe
                                                                            if ((activity as any).details.warmup) {
                                                                                allExercises.push(`Precalentamiento: ${(activity as any).details.warmup}`);
                                                                            }

                                                                            // Agregar el resto de ejercicios
                                                                            allExercises.push(...(activity as any).details.exercises);

                                                                            // Agregar respiración consciente al final si existe
                                                                            if ((activity as any).details.respiracionConsciente) {
                                                                                allExercises.push((activity as any).details.respiracionConsciente);
                                                                            }

                                                                            return allExercises.map((exercise: string, index: number) => {
                                                                                // Parsear el ejercicio para extraer series, repeticiones y minutos
                                                                                const parseExercise = (exerciseText: string) => {
                                                                                    // Caso especial para respiración consciente
                                                                                    if (exerciseText.toLowerCase().includes('respiración consciente')) {
                                                                                        return {
                                                                                            name: 'Respiración Consciente',
                                                                                            sets: '1',
                                                                                            reps: 'na',
                                                                                            minutes: '10'
                                                                                        };
                                                                                    }

                                                                                    // Caso especial para precalentamiento
                                                                                    if (exerciseText.toLowerCase().includes('precalentamiento')) {
                                                                                        return {
                                                                                            name: 'Precalentamiento',
                                                                                            sets: '1',
                                                                                            reps: '1',
                                                                                            minutes: '3'
                                                                                        };
                                                                                    }

                                                                                    // Dividir por ' - ' para parsear mejor
                                                                                    const parts = exerciseText.split(' - ').map(p => p.trim());
                                                                                    let name = parts[0];
                                                                                    let sets = '1';
                                                                                    let reps = '1';
                                                                                    let minutes = 'na';

                                                                                    for (let i = 1; i < parts.length; i++) {
                                                                                        const part = parts[i].toLowerCase();
                                                                                        if (part.includes('reps')) {
                                                                                            const match = part.match(/(\d+)/);
                                                                                            if (match) reps = match[1];
                                                                                        } else if (part.includes('series') || part.includes('serie')) {
                                                                                            const match = part.match(/(\d+)/);
                                                                                            if (match) sets = match[1];
                                                                                        } else if (part.includes('min')) {
                                                                                            const match = part.match(/(\d+)/);
                                                                                            if (match) minutes = match[1];
                                                                                        }
                                                                                    }

                                                                                    return { name, sets, reps, minutes };
                                                                                };

                                                                                const parsed = parseExercise(exercise);
                                                                                const isWarmup = exercise.toLowerCase().includes('precalentamiento');
                                                                                const isRespiracion = exercise.toLowerCase().includes('respiración consciente');

                                                                                // Extraer nombre base del ejercicio para buscar video
                                                                                const getExerciseBaseName = (exerciseName: string) => {
                                                                                    // Remover detalles como "- 12 min", "- 4 series", etc.
                                                                                    return exerciseName
                                                                                        .replace(/\s*-\s*\d+\s*(min|reps?|sets?)/gi, '')
                                                                                        .replace(/\s*-\s*\d+\s*x\s*\d+/gi, '') // para casos como "x lado"
                                                                                        .trim();
                                                                                };

                                                                                const exerciseBaseName = getExerciseBaseName(parsed.name);
                                                                                const videoUrl = (activity as any).details.videos?.[exerciseBaseName];

                                                                                return (
                                                                                    <React.Fragment key={index}>
                                                                                        {/* Vista Mobile - Card */}
                                                                                        <div className={`sm:hidden bg-white/5 rounded-lg p-2.5 w-full overflow-hidden relative ${isWarmup ? 'bg-orange-500/10' : isRespiracion ? 'bg-green-500/10' : ''}`}>
                                                                                            {/* Indicador de color como borde superior */}
                                                                                            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-lg ${isWarmup ? 'bg-orange-400' : isRespiracion ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                                                                                            
                                                                                            <div className="flex items-start justify-between gap-2 mt-1">
                                                                                                <div className="flex-1 min-w-0 overflow-hidden">
                                                                                                    <div className="flex items-center gap-2 mb-1.5">
                                                                                                        <span className="text-white font-bold text-xs flex-shrink-0">
                                                                                                            {isRespiracion ? '#' : `${index + 1}.`}
                                                                                                        </span>
                                                                                                        <h4 className={`font-semibold text-xs truncate ${isWarmup ? 'text-orange-200' : isRespiracion ? 'text-green-200' : 'text-white'}`}>
                                                                                                            {isWarmup && '🔥 '}{isRespiracion && '🧘 '}{parsed.name}
                                                                                                        </h4>
                                                                                                    </div>
                                                                                                    <div className="flex gap-3 text-[10px] text-gray-300">
                                                                                                        {parsed.reps !== 'na' && (
                                                                                                            <div className="whitespace-nowrap">
                                                                                                                <span className="text-blue-300 font-semibold">Reps:</span> {parsed.reps}
                                                                                                            </div>
                                                                                                        )}
                                                                                                        {parsed.minutes !== 'na' && (
                                                                                                            <div className="whitespace-nowrap">
                                                                                                                <span className="text-blue-300 font-semibold">Min:</span> {parsed.minutes}
                                                                                                            </div>
                                                                                                        )}
                                                                                                        <div className="whitespace-nowrap">
                                                                                                            <span className="text-blue-300 font-semibold">Series:</span> {parsed.sets}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                {videoUrl && (
                                                                                                    <button
                                                                                                        onClick={() => openVideoModal(videoUrl)}
                                                                                                        className="px-2 py-1.5 bg-red-600 hover:bg-red-700 text-white text-[10px] font-semibold rounded transition-colors flex items-center gap-1 flex-shrink-0"
                                                                                                        title="Ver video"
                                                                                                    >
                                                                                                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                                                                                                            <path d="M8 5v14l11-7z" />
                                                                                                        </svg>
                                                                                                        Ver
                                                                                                    </button>
                                                                                                )}
                                                                                            </div>
                                                                                        </div>

                                                                                        {/* Vista Desktop - Tabla */}
                                                                                        <div className={`hidden sm:grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-2 p-3 ${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} hover:bg-blue-500/10 transition-colors ${isWarmup ? 'bg-orange-500/10 border-l-4 border-orange-400' : isRespiracion ? 'bg-green-500/10 border-l-4 border-green-400' : ''}`}>
                                                                                            <div className="text-white font-bold text-center text-sm w-8">
                                                                                                {isRespiracion ? '#' : (index + 1)}
                                                                                            </div>
                                                                                            <div className={`text-sm font-medium ${isWarmup ? 'text-orange-200' : isRespiracion ? 'text-green-200' : 'text-white'}`}>
                                                                                                {isWarmup && '🔥 '}{isRespiracion && '🧘 '}{parsed.name}
                                                                                            </div>
                                                                                            <div className="text-white text-sm text-center w-16">{parsed.reps}</div>
                                                                                            <div className="text-white text-sm text-center w-16">{parsed.minutes}</div>
                                                                                            <div className="text-white text-sm text-center w-16">{parsed.sets}</div>
                                                                                            <div className="text-center w-20">
                                                                                                {videoUrl ? (
                                                                                                    <button
                                                                                                        onClick={() => openVideoModal(videoUrl)}
                                                                                                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-1 w-full"
                                                                                                        title="Ver video del ejercicio"
                                                                                                    >
                                                                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                                                                            <path d="M8 5v14l11-7z" />
                                                                                                        </svg>
                                                                                                        Ver
                                                                                                    </button>
                                                                                                ) : (
                                                                                                    <span className="text-gray-500 text-xs">-</span>
                                                                                                )}
                                                                                            </div>
                                                                                        </div>
                                                                                    </React.Fragment>
                                                                                );
                                                                            });
                                                                        })()}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}                                                    {/* Información de estado y acción */}
                                                    <div className="bg-white/5 rounded-xl p-3 sm:p-4 border border-white/10 w-full overflow-hidden">
                                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
                                                            <div className="flex items-center gap-2 sm:gap-3">
                                                                <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${selectedDay.isCompleted ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`}></div>
                                                                <span className={`font-semibold text-xs sm:text-base ${selectedDay.isCompleted ? 'text-green-400' : 'text-yellow-400'}`}>
                                                                    {selectedDay.isCompleted ? '✅ Completado' : '⏳ Pendiente'}
                                                                </span>
                                                            </div>
                                                            {!selectedDay.isCompleted && (
                                                                <button
                                                                    onClick={() => {
                                                                        handleDayToggle(selectedDay.dayNumber);
                                                                        closeModal();
                                                                    }}
                                                                    className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xs sm:text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
                                                                >
                                                                    ✓ Marcar Completado
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-3 sm:p-4 text-center w-full overflow-hidden">
                                                    <p className="text-yellow-200 text-xs sm:text-sm">No se encontró actividad para este día.</p>
                                                </div>
                                            );
                                        })()
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Modal */}
                {showVideoModal && currentVideoUrl && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-neutral-900 border border-white/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative">
                            {/* Close Button */}
                            <button
                                onClick={closeVideoModal}
                                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                                title="Cerrar video"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Video Container */}
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                                <iframe
                                    src={currentVideoUrl}
                                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Video del ejercicio"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrainingCalendarPage;
