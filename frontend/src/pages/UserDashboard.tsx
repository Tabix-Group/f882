import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UserDashboard: React.FC = () => {
    const [userName, setUserName] = useState<string>('');
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
        setUserName(user.name);
    }, [user, navigate]); const sections = [
        { id: 1, title: 'Sección 1', description: 'Descripción de la sección 1', icon: '📚' },
        { id: 2, title: 'Sección 2', description: 'Descripción de la sección 2', icon: '🎥' },
        { id: 3, title: 'Sección 3', description: 'Descripción de la sección 3', icon: '🎧' },
        { id: 4, title: 'Sección 4', description: 'Descripción de la sección 4', icon: '💬' },
        { id: 5, title: 'Sección 5', description: 'Descripción de la sección 5', icon: '📈' },
    ];

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
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer fadein show"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-6xl mb-4">{section.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                            <p className="text-gray-300">{section.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
