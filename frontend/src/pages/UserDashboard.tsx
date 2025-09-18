import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Spinner from '../components/Spinner';

const UserDashboard: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const [hasCompletedAssessment, setHasCompletedAssessment] = useState<boolean>(false);
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
                const response = await fetch(`http://localhost:4000/api/users/assessment-status/${user.id}`);
                if (response.ok) {
                    const data = await response.json();
                    setHasCompletedAssessment(data.hasCompletedAssessment);
                }
            } catch (error) {
                console.error('Error checking assessment status:', error);
            }
        };

        checkAssessmentStatus();
    }, [user, isLoading, navigate]);

    if (isLoading) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <Spinner size={50} />
            </div>
        );
    }

    const sections = [
        {
            id: 1,
            title: 'Lee el libro',
            description: 'Accede al audio libro y continúa tu transformación',
            icon: (
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            path: '/read-book'
        },
        {
            id: 2,
            title: hasCompletedAssessment ? 'Calendario de entrenamiento' : 'Inicia tu entrenamiento',
            description: hasCompletedAssessment ? 'Revisa tu progreso y marca actividades completadas' : 'Comienza los 88 días de transformación física',
            icon: (
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            path: hasCompletedAssessment ? '/training-calendar' : '/f88-assessment'
        },
        {
            id: 3, title: 'Jordan', description: 'Accede a tu mentor', icon: (
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ), path: '/jordan-chat'
        },
        {
            id: 4, title: 'Flipbook de apoyo', description: 'Accede a tu guía digital interactiva', icon: (
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ), path: '#'
        },
        {
            id: 5, title: 'Construyendo tu GRID', description: 'Desarrolla tu marco de trabajo personal', icon: (
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            ), path: '#'
        },
    ];

    const handleSectionClick = (path: string) => {
        if (path !== '#') {
            navigate(path);
        }
    };

    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4">
                        ¡Bienvenido, {userName}!
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Accede a tus recursos exclusivos y continúa tu transformación con F88.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            onClick={() => handleSectionClick(section.path)}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer fadein show group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex justify-center mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                                {typeof section.icon === 'string' ? (
                                    <span className="text-6xl">{section.icon}</span>
                                ) : (
                                    section.icon
                                )}
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-center group-hover:text-blue-300 transition-colors duration-300">
                                {section.title}
                            </h3>
                            <p className="text-gray-300 text-center group-hover:text-gray-200 transition-colors duration-300">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
