import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface AssessmentForm {
    question1: number;
    question2: number;
    question3: number;
    restDay: string;
}

const F88AssessmentPage: React.FC = () => {
    const [formData, setFormData] = useState<AssessmentForm>({
        question1: 0,
        question2: 0,
        question3: 0,
        restDay: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        // Verificar si el usuario ya tiene una evaluación
        checkExistingAssessment();
    }, [user, navigate]);

    const checkExistingAssessment = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/training/assessment/${user?.id}`);
            if (response.ok) {
                // Usuario ya tiene evaluación, redirigir al calendario
                navigate('/training-calendar');
            }
        } catch (error) {
            // No hay evaluación previa, continuar con el formulario
        }
    };

    const handleInputChange = (field: keyof AssessmentForm, value: number | string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const nextStep = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.question1 === 0 || formData.question2 === 0 || formData.question3 === 0 || !formData.restDay) {
            alert('Por favor completa todas las preguntas antes de continuar.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:4000/api/training/assessment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user?.id,
                    question1: formData.question1,
                    question2: formData.question2,
                    question3: formData.question3,
                    restDay: formData.restDay
                })
            });

            if (!response.ok) {
                throw new Error('Error al enviar la evaluación');
            }

            const data = await response.json();
            navigate('/training-calendar');

        } catch (error) {
            console.error('Error:', error);
            alert('Error al procesar la evaluación. Por favor intenta de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    const calculateLevel = () => {
        const total = formData.question1 + formData.question2 + formData.question3;
        if (total <= 4) return 'INICIAL';
        if (total <= 7) return 'FUNCIONAL';
        return 'IDEAL';
    };

    const renderQuestion1 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Pregunta 1 de 3</h2>
                <p className="text-gray-300 text-lg">
                    ¿Cuál de estas frases te representa mejor?
                </p>
            </div>

            <div className="space-y-4">
                {[
                    { value: 1, text: 'No hago ejercicios físicos ni practico deportes desde hace tiempo.' },
                    { value: 2, text: 'Hago algo de actividad física, aunque sin mucha intensidad o constancia.' },
                    { value: 3, text: 'Hago actividad física intensa o moderada al menos 3 veces por semana.' }
                ].map((option) => (
                    <label
                        key={option.value}
                        className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${formData.question1 === option.value
                                ? 'border-blue-500 bg-blue-500/20 text-white'
                                : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                            }`}
                    >
                        <input
                            type="radio"
                            name="question1"
                            value={option.value}
                            checked={formData.question1 === option.value}
                            onChange={(e) => handleInputChange('question1', parseInt(e.target.value))}
                            className="mr-3"
                        />
                        {option.text}
                    </label>
                ))}
            </div>
        </div>
    );

    const renderQuestion2 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Pregunta 2 de 3</h2>
                <p className="text-gray-300 text-lg">
                    ¿Cuánto tiempo dedicas semanalmente a ejercitar de forma intencional?
                </p>
            </div>

            <div className="space-y-4">
                {[
                    { value: 1, text: 'Menos de 30 minutos por semana.' },
                    { value: 2, text: 'Entre 30 y 150 minutos semanales.' },
                    { value: 3, text: 'Más de 150 minutos por semana.' }
                ].map((option) => (
                    <label
                        key={option.value}
                        className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${formData.question2 === option.value
                                ? 'border-blue-500 bg-blue-500/20 text-white'
                                : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                            }`}
                    >
                        <input
                            type="radio"
                            name="question2"
                            value={option.value}
                            checked={formData.question2 === option.value}
                            onChange={(e) => handleInputChange('question2', parseInt(e.target.value))}
                            className="mr-3"
                        />
                        {option.text}
                    </label>
                ))}
            </div>
        </div>
    );

    const renderQuestion3 = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Pregunta 3 de 3</h2>
                <p className="text-gray-300 text-lg">
                    ¿Cómo describirías tu nivel actual de energía física?
                </p>
            </div>

            <div className="space-y-4">
                {[
                    { value: 1, text: 'Bajo. Me cuesta iniciar actividad física, me siento algo desconectada/o del cuerpo.' },
                    { value: 2, text: 'Me siento bien, pero me gustaría ser más constante o disciplinada/o.' },
                    { value: 3, text: 'Me siento fuerte, activa/o y con energía sostenida durante la semana.' }
                ].map((option) => (
                    <label
                        key={option.value}
                        className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${formData.question3 === option.value
                                ? 'border-blue-500 bg-blue-500/20 text-white'
                                : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                            }`}
                    >
                        <input
                            type="radio"
                            name="question3"
                            value={option.value}
                            checked={formData.question3 === option.value}
                            onChange={(e) => handleInputChange('question3', parseInt(e.target.value))}
                            className="mr-3"
                        />
                        {option.text}
                    </label>
                ))}
            </div>
        </div>
    );

    const renderRestDaySelection = () => (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Selecciona tu día de descanso</h2>
                <p className="text-gray-300 text-lg">
                    Elige el día de la semana que prefieres dedicar al descanso y recuperación.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                    { value: 'monday', label: 'Lunes' },
                    { value: 'tuesday', label: 'Martes' },
                    { value: 'wednesday', label: 'Miércoles' },
                    { value: 'thursday', label: 'Jueves' },
                    { value: 'friday', label: 'Viernes' },
                    { value: 'saturday', label: 'Sábado' },
                    { value: 'sunday', label: 'Domingo' }
                ].map((day) => (
                    <label
                        key={day.value}
                        className={`block p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-center ${formData.restDay === day.value
                                ? 'border-blue-500 bg-blue-500/20 text-white'
                                : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                            }`}
                    >
                        <input
                            type="radio"
                            name="restDay"
                            value={day.value}
                            checked={formData.restDay === day.value}
                            onChange={(e) => handleInputChange('restDay', e.target.value)}
                            className="sr-only"
                        />
                        {day.label}
                    </label>
                ))}
            </div>
        </div>
    );

    const renderSummary = () => {
        const level = calculateLevel();
        const levelDescriptions = {
            'INICIAL': {
                title: '¡Despierta tu Cuerpo!',
                description: 'F88 te acompaña a incorporar hábitos simples y sostenibles. ¡Tu camino hacia una vida más activa comienza hoy!',
                color: 'from-orange-500 to-red-500',
                emoji: '💪'
            },
            'FUNCIONAL': {
                title: '¡Activa tu Potencial!',
                description: 'Ya cuentas con una base de actividad física. Ahora puedes dar un paso más hacia la constancia. F88 te acompaña a consolidar una rutina sostenida en el tiempo y a mantener tu motivación alta.',
                color: 'from-yellow-500 to-orange-500',
                emoji: '🎯'
            },
            'IDEAL': {
                title: '¡Rinde de por Vida!',
                description: '¡Excelente! Mantienes una rutina fluida en la actualidad. F88 te acompaña a generar el hábito de por vida, y a descubrir nuevos desafíos.',
                color: 'from-green-500 to-blue-500',
                emoji: '🏆'
            }
        };

        const levelInfo = levelDescriptions[level as keyof typeof levelDescriptions];

        return (
            <div className="space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">¡Evaluación Completada!</h2>
                    <p className="text-gray-300 text-lg">Tu nivel de actividad física es:</p>
                </div>

                <div className={`bg-gradient-to-r ${levelInfo.color} p-8 rounded-2xl text-white text-center shadow-2xl`}>
                    <div className="text-6xl mb-4">{levelInfo.emoji}</div>
                    <h3 className="text-2xl font-bold mb-4">{levelInfo.title}</h3>
                    <p className="text-lg leading-relaxed">{levelInfo.description}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <h4 className="text-white font-semibold mb-4">Resumen de tu evaluación:</h4>
                    <div className="space-y-2 text-gray-300">
                        <p>• Día de descanso: {formData.restDay === 'monday' ? 'Lunes' :
                            formData.restDay === 'tuesday' ? 'Martes' :
                                formData.restDay === 'wednesday' ? 'Miércoles' :
                                    formData.restDay === 'thursday' ? 'Jueves' :
                                        formData.restDay === 'friday' ? 'Viernes' :
                                            formData.restDay === 'saturday' ? 'Sábado' : 'Domingo'}</p>
                        <p>• Inicio del programa: Mañana</p>
                        <p>• Duración: 88 días de actividad</p>
                    </div>
                </div>
            </div>
        );
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1: return renderQuestion1();
            case 2: return renderQuestion2();
            case 3: return renderQuestion3();
            case 4: return renderRestDaySelection();
            case 5: return renderSummary();
            default: return renderQuestion1();
        }
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1: return formData.question1 > 0;
            case 2: return formData.question2 > 0;
            case 3: return formData.question3 > 0;
            case 4: return formData.restDay !== '';
            case 5: return true;
            default: return false;
        }
    };

    return (
        <div className="bg-gradient-to-br from-black via-neutral-900 to-black text-white min-h-screen">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 min-h-screen flex flex-col">
                {/* Header */}
                <div className="bg-neutral-900/80 backdrop-blur-md border-b border-white/10 px-4 py-4">
                    <div className="max-w-4xl mx-auto flex items-center gap-4">
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
                                <h1 className="text-lg font-semibold">Test F88</h1>
                                <p className="text-sm text-gray-400">Evaluación de nivel de actividad</p>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="ml-auto flex items-center gap-4">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((step) => (
                                    <div
                                        key={step}
                                        className={`w-3 h-3 rounded-full ${step <= currentStep ? 'bg-blue-500' : 'bg-white/20'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-400">
                                {currentStep} de 5
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center px-4 py-8">
                    <div className="max-w-2xl w-full">
                        {currentStep === 1 && (
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4">
                                    Test F88
                                </h1>
                                <p className="text-gray-300 text-lg">
                                    Nivel de Actividad Física al iniciar F88
                                </p>
                                <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                                    <p className="text-blue-300 text-sm">
                                        🟠 <strong>Instrucciones:</strong> Responde con sinceridad. No hay respuestas correctas ni incorrectas: solo un punto de partida claro.
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                            {renderCurrentStep()}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8 gap-4">
                            {currentStep > 1 && (
                                <button
                                    onClick={prevStep}
                                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all duration-200"
                                >
                                    Anterior
                                </button>
                            )}

                            <div className="flex-1" />

                            {currentStep < 5 ? (
                                <button
                                    onClick={nextStep}
                                    disabled={!isStepValid()}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200"
                                >
                                    Siguiente
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200"
                                >
                                    {isLoading ? 'Procesando...' : 'Comenzar mi transformación'}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default F88AssessmentPage;
