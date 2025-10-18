import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Spinner from '../components/Spinner';

const UserDashboard: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [hasCompletedAssessment, setHasCompletedAssessment] = useState<boolean>(false);
    const [userLevel, setUserLevel] = useState<string>('');
    const [currentDay, setCurrentDay] = useState<number>(0);
    const navigate = useNavigate();
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (isLoading) return;
        if (!user) {
            navigate('/login');
            return;
        }
        setUserName(user.name);

        // Verificar si el usuario ya completó la evaluación
        const checkAssessmentStatus = async () => {
            try {
                const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
                const response = await fetch(`${API_BASE}/users/assessment-status/${user.id}`);
                if (response.ok) {
                    const data = await response.json();
                    setHasCompletedAssessment(data.hasCompletedAssessment);
                    if (data.hasCompletedAssessment && data.level) {
                        setUserLevel(data.level);
                        // Calcular día actual (simulado por ahora)
                        setCurrentDay(Math.floor(Math.random() * 88) + 1);
                    }
                }
            } catch (error) {
                console.error('Error checking assessment status:', error);
            }
        };

        checkAssessmentStatus();
    }, [user, isLoading, navigate]);

    if (isLoading) {
        return (
            <div className="bg-gradient-to-br from-black via-neutral-900 to-black text-white min-h-screen flex items-center justify-center">
                <Spinner size={50} />
            </div>
        );
    }

    const getLevelInfo = (level: string) => {
        const levels = {
            'INICIAL': {
                name: 'Inicial',
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-900/20 to-cyan-900/20',
                icon: '🌱',
                description: 'Fortalece tu base'
            },
            'FUNCIONAL': {
                name: 'Funcional',
                color: 'from-green-500 to-emerald-500',
                bgColor: 'from-green-900/20 to-emerald-900/20',
                icon: '🎯',
                description: 'Aumenta tu constancia'
            },
            'IDEAL': {
                name: 'Ideal',
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-900/20 to-pink-900/20',
                icon: '🏆',
                description: 'Hábitos de por vida'
            }
        };
        return levels[level as keyof typeof levels] || levels['INICIAL'];
    };

    const sections = [
        {
            id: 1,
            title: 'Accede a tu libro',
            subtitle: 'Tu guía de transformación',
            description: 'Lee el libro que cambiara tu vida',
            icon: '📖',
            gradient: 'from-purple-500 to-pink-500',
            bgGradient: 'from-purple-900/10 to-pink-900/10',
            path: '/read-book',
            available: true
        },
        {
            id: 3,
            title: 'Accede a tu mentor/a',
            subtitle: 'Tu mentor personal',
            description: 'Conversa con tu entrenador virtual 24/7',
            icon: '🤖',
            gradient: 'from-green-500 to-emerald-500',
            bgGradient: 'from-green-900/10 to-emerald-900/10',
            path: '/jordan-chat',
            available: true
        },
        {
            id: 2,
            title: hasCompletedAssessment ? 'Calendario de Entrenamiento' : 'Inicia tu Transformación',
            subtitle: hasCompletedAssessment ? `Día ${currentDay} de 88` : 'Comienza los 88 días',
            description: hasCompletedAssessment ? 'Revisa tu progreso y marca actividades completadas' : 'Evalúa tu nivel y comienza tu viaje de transformación',
            icon: hasCompletedAssessment ? '📅' : '⚡',
            gradient: 'from-blue-500 to-cyan-500',
            bgGradient: 'from-blue-900/10 to-cyan-900/10',
            path: hasCompletedAssessment ? '/training-calendar' : '/f88-assessment',
            available: true,
            highlight: !hasCompletedAssessment
        },
        {
            id: 4,
            title: 'Flipbook de Apoyo',
            subtitle: 'Guía interactiva',
            description: 'Accede a tu manual digital personalizado',
            icon: '📄',
            gradient: 'from-orange-500 to-red-500',
            bgGradient: 'from-orange-900/10 to-red-900/10',
            path: '#',
            available: true
        },
        {
            id: 5,
            title: 'Construye tu GRID',
            subtitle: 'Marco de trabajo',
            description: 'Desarrolla tu sistema personal de hábitos',
            icon: '🎯',
            gradient: 'from-indigo-500 to-purple-500',
            bgGradient: 'from-indigo-900/10 to-purple-900/10',
            path: '#',
            available: false
        }
    ];

    const handleSectionClick = (path: string, sectionId?: number) => {
        if (path !== '#') {
            navigate(path);
        } else if (sectionId === 4) {
            // Flipbook de apoyo
            if (!hasCompletedAssessment) {
                // Si no han completado assessment, mostrar selector de flipbooks
                navigate('/flipbook-selector');
            } else {
                // Si han completado assessment, ir al flipbook correspondiente
                const levelPath = userLevel === 'INICIAL' ? '/flipbook/initial' :
                                 userLevel === 'FUNCIONAL' ? '/flipbook/functional' :
                                 '/flipbook/ideal';
                navigate(levelPath);
            }
        }
    };

    const levelInfo = getLevelInfo(userLevel);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                {/* Header Section */}
                <div className="bg-black/40 backdrop-blur-xl border-b border-white/5">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
                                    F
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
                                        ¡Bienvenido, {userName}!
                                    </h1>
                                </div>
                            </div>

                            {hasCompletedAssessment && (
                                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${levelInfo.bgColor} border border-white/10 rounded-full px-6 py-3 mt-4`}>
                                    <span className="text-2xl">{levelInfo.icon}</span>
                                    <div className="text-left">
                                        <div className={`text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r ${levelInfo.color}`}>
                                            NIVEL {levelInfo.name.toUpperCase()}
                                        </div>
                                        <div className="text-xs text-gray-400">{levelInfo.description}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Progress Bar for Completed Assessment */}
                {hasCompletedAssessment && (
                    <div className="max-w-4xl mx-auto px-6 py-6">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Tu Progreso F88</h3>
                                    <p className="text-sm text-gray-400">Día {currentDay} de 88 completados</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-blue-400">{Math.round((currentDay / 88) * 100)}%</div>
                                    <div className="text-xs text-gray-400">Completado</div>
                                </div>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-3">
                                <div
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                                    style={{ width: `${(currentDay / 88) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                onClick={() => section.available && handleSectionClick(section.path, section.id)}
                                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                                    section.available
                                        ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10'
                                        : 'bg-white/5 backdrop-blur-xl border border-white/5 opacity-60 cursor-not-allowed'
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                {/* Content */}
                                <div className="relative z-10 p-8">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${section.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-2xl">{section.icon}</span>
                                    </div>

                                    {/* Title & Subtitle */}
                                    <div className="mb-4">
                                        <h3 className={`text-xl font-bold mb-1 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r ${section.gradient} transition-all duration-300`}>
                                            {section.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                            {section.subtitle}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {section.description}
                                    </p>

                                    {/* Status Indicator */}
                                    <div className="mt-6 flex items-center justify-between">
                                        <div className={`flex items-center gap-2 text-xs ${
                                            section.available ? 'text-green-400' : 'text-gray-500'
                                        }`}>
                                            <div className={`w-2 h-2 rounded-full ${
                                                section.available ? 'bg-green-400' : 'bg-gray-500'
                                            }`}></div>
                                            {section.available ? 'Disponible' : 'Próximamente'}
                                        </div>

                                        {section.highlight && (
                                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                                ¡Comienza aquí!
                                            </div>
                                        )}

                                        {section.available && (
                                            <svg className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        )}
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Motivational Footer */}
                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {hasCompletedAssessment ? '¡Sigue adelante!' : '¡Tu transformación comienza hoy!'}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {hasCompletedAssessment
                                    ? `Has completado ${currentDay} días de tu viaje F88. Cada día te acerca más a tus objetivos.`
                                    : 'Estás a punto de embarcarte en los 88 días que cambiarán tu vida. La consistencia es tu superpoder.'
                                }
                            </p>
                            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                    <span>Actividad física diaria</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span>Hábitos sostenibles</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                                    <span>Transformación completa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
