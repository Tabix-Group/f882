"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const AuthContext_1 = require("../contexts/AuthContext");
const TrainingCalendarPage = () => {
    const [trainingDays, setTrainingDays] = (0, react_1.useState)([]);
    const [progress, setProgress] = (0, react_1.useState)(null);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    const [selectedMonth, setSelectedMonth] = (0, react_1.useState)(new Date().getMonth());
    const [selectedYear, setSelectedYear] = (0, react_1.useState)(new Date().getFullYear());
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { user } = (0, AuthContext_1.useAuth)();
    const loadTrainingData = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setIsLoading(true);
            // Cargar calendario
            const calendarResponse = yield fetch(`http://localhost:4000/api/training/calendar/${user === null || user === void 0 ? void 0 : user.id}`);
            if (!calendarResponse.ok) {
                throw new Error('Error al cargar el calendario');
            }
            const calendarData = yield calendarResponse.json();
            setTrainingDays(calendarData.days);
            // Cargar progreso
            const progressResponse = yield fetch(`http://localhost:4000/api/training/progress/${user === null || user === void 0 ? void 0 : user.id}`);
            if (progressResponse.ok) {
                const progressData = yield progressResponse.json();
                setProgress(progressData);
            }
        }
        catch (error) {
            console.error('Error:', error);
            alert('Error al cargar los datos de entrenamiento. Redirigiendo a la evaluación.');
            navigate('/f88-assessment');
        }
        finally {
            setIsLoading(false);
        }
    }), [user === null || user === void 0 ? void 0 : user.id, navigate]);
    (0, react_1.useEffect)(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        loadTrainingData();
    }, [user, navigate, loadTrainingData]);
    const handleDayToggle = (dayNumber) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield fetch(`http://localhost:4000/api/training/day/${user === null || user === void 0 ? void 0 : user.id}/${dayNumber}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !((_a = trainingDays.find(d => d.dayNumber === dayNumber)) === null || _a === void 0 ? void 0 : _a.isCompleted)
                })
            });
            if (!response.ok) {
                throw new Error('Error al actualizar el progreso');
            }
            // Recargar datos después de la actualización
            yield loadTrainingData();
        }
        catch (error) {
            console.error('Error:', error);
            alert('Error al actualizar el progreso. Por favor intenta de nuevo.');
        }
    });
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };
    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };
    const getTrainingDayForDate = (date) => {
        var _a;
        const dayNumber = Math.ceil((date.getTime() - new Date((_a = trainingDays[0]) === null || _a === void 0 ? void 0 : _a.date).getTime()) / (1000 * 60 * 60 * 24)) + 1;
        return trainingDays.find(day => day.dayNumber === dayNumber);
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
            days.push(<div key={day} className={`h-12 flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200 ${trainingDay
                    ? trainingDay.isRestDay
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : trainingDay.isCompleted
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 cursor-pointer hover:bg-blue-500/30'
                            : isPast
                                ? 'bg-red-500/20 text-red-300 border border-red-500/30 cursor-pointer hover:bg-red-500/30'
                                : 'bg-white/5 text-white border border-white/20 cursor-pointer hover:bg-white/10'
                    : 'text-gray-500'} ${isToday ? 'ring-2 ring-blue-400' : ''}`} onClick={() => trainingDay && !trainingDay.isRestDay && handleDayToggle(trainingDay.dayNumber)}>
                    {trainingDay ? (<div className="flex flex-col items-center">
                            <span>{day}</span>
                            {trainingDay.isRestDay ? (<span className="text-xs">Descanso</span>) : trainingDay.isCompleted ? (<span className="text-xs">✓</span>) : (<span className="text-xs">•</span>)}
                        </div>) : (day)}
                </div>);
        }
        return days;
    };
    const getMonthName = (month) => {
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        return months[month];
    };
    const changeMonth = (direction) => {
        if (direction === 'prev') {
            if (selectedMonth === 0) {
                setSelectedMonth(11);
                setSelectedYear(selectedYear - 1);
            }
            else {
                setSelectedMonth(selectedMonth - 1);
            }
        }
        else {
            if (selectedMonth === 11) {
                setSelectedMonth(0);
                setSelectedYear(selectedYear + 1);
            }
            else {
                setSelectedMonth(selectedMonth + 1);
            }
        }
    };
    if (isLoading) {
        return (<div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black flex items-center justify-center">
                <div className="text-white text-xl">Cargando tu calendario de entrenamiento...</div>
            </div>);
    }
    return (<div className="bg-gradient-to-br from-black via-neutral-900 to-black text-white min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Header */}
                <div className="bg-neutral-900/80 backdrop-blur-md border-b border-white/10 px-4 py-4">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button onClick={() => navigate('/dashboard')} className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
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
                            <button onClick={() => navigate('/f88-assessment')} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-all duration-200">
                                Ver Evaluación
                            </button>
                        </div>
                    </div>
                </div>

                {/* Progress Stats */}
                {progress && (<div className="bg-neutral-900/50 backdrop-blur-md border-b border-white/10 px-4 py-6">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-400">{progress.completedDays}</div>
                                    <div className="text-sm text-gray-400">Días Completados</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-400">{progress.currentStreak}</div>
                                    <div className="text-sm text-gray-400">Racha Actual</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-400">{progress.longestStreak}</div>
                                    <div className="text-sm text-gray-400">Mejor Racha</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-400">{Math.round((progress.completedDays / progress.totalDays) * 100)}%</div>
                                    <div className="text-sm text-gray-400">Progreso Total</div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-6">
                                <div className="flex justify-between text-sm text-gray-400 mb-2">
                                    <span>Progreso del programa</span>
                                    <span>{progress.completedDays} de {progress.totalDays} días</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-3">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500" style={{ width: `${(progress.completedDays / progress.totalDays) * 100}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>)}

                {/* Main Content */}
                <div className="flex-1 px-4 py-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">
                                {getMonthName(selectedMonth)} {selectedYear}
                            </h2>
                            <div className="flex gap-2">
                                <button onClick={() => changeMonth('prev')} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                                    </svg>
                                </button>
                                <button onClick={() => changeMonth('next')} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                            {/* Days of week header */}
                            <div className="grid grid-cols-7 gap-2 mb-4">
                                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (<div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
                                        {day}
                                    </div>))}
                            </div>

                            {/* Calendar days */}
                            <div className="grid grid-cols-7 gap-2">
                                {renderCalendar()}
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-blue-500/20 border border-blue-500/30 rounded"></div>
                                <span>Día completado</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-white/5 border border-white/20 rounded"></div>
                                <span>Día pendiente</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-red-500/20 border border-red-500/30 rounded"></div>
                                <span>Día perdido</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-green-500/20 border border-green-500/30 rounded"></div>
                                <span>Día de descanso</span>
                            </div>
                        </div>

                        {/* Motivational Message */}
                        <div className="mt-8 text-center">
                            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-xl p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    ¡Cada día cuenta en tu transformación!
                                </h3>
                                <p className="text-gray-300">
                                    Marca los días que completes y mantén tu racha viva. ¡Tú puedes lograrlo!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = TrainingCalendarPage;
