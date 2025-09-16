import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: Date;
}

const JordanChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<number | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const { user } = useAuth();

    // Cargar historial de mensajes desde el backend
    useEffect(() => {
        const loadChatHistory = async () => {
            if (!user) {
                navigate('/login');
                return;
            }

            const setWelcomeMessage = () => {
                const welcomeMessage: Message = {
                    id: '1',
                    content: `¡Hola ${user.name}! Soy Jordan, tu mentor personal en F88. Estoy aquí para guiarte en tu transformación física y mental durante los 88 días del programa.

¿En qué puedo ayudarte hoy? Podemos hablar sobre:
• Tu progreso en el entrenamiento
• Técnicas de nutrición
• Motivación y mentalidad
• Cualquier duda que tengas sobre el programa

¡Estoy emocionado de ser parte de tu viaje de transformación!`,
                    role: 'assistant',
                    timestamp: new Date()
                };
                setMessages([welcomeMessage]);
            };

            try {
                // Intentar obtener sesión existente o crear una nueva
                const sessionsResponse = await fetch(`http://localhost:4000/sessions/${user.id}`);
                const sessionsData = await sessionsResponse.json();

                let currentSessionId = null;

                if (sessionsData.sessions && sessionsData.sessions.length > 0) {
                    // Usar la sesión más reciente
                    currentSessionId = sessionsData.sessions[0].id;

                    // Cargar mensajes de la sesión
                    const messagesResponse = await fetch(`http://localhost:4000/messages/${currentSessionId}`);
                    const messagesData = await messagesResponse.json();

                    if (messagesData.messages && messagesData.messages.length > 0) {
                        const formattedMessages = messagesData.messages.map((msg: any) => ({
                            id: msg.id.toString(),
                            content: msg.content,
                            role: msg.role,
                            timestamp: new Date(msg.timestamp)
                        }));
                        setMessages(formattedMessages);
                    } else {
                        // Mensaje de bienvenida si no hay mensajes
                        setWelcomeMessage();
                    }
                } else {
                    // Crear nueva sesión si no existe ninguna
                    const newSessionResponse = await fetch('http://localhost:4000/session', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            userId: user.id,
                            sessionName: 'Chat con Jordan'
                        })
                    });
                    const newSessionData = await newSessionResponse.json();
                    currentSessionId = newSessionData.session.id;
                    setWelcomeMessage();
                }

                // Guardar sessionId en el estado
                setSessionId(currentSessionId);
            } catch (error) {
                console.error('Error cargando historial:', error);
                // Fallback a localStorage si el backend no está disponible
                const savedMessages = localStorage.getItem(`chat_history_${user.id}`);
                if (savedMessages) {
                    const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
                        ...msg,
                        timestamp: new Date(msg.timestamp)
                    }));
                    setMessages(parsedMessages);
                } else {
                    setWelcomeMessage();
                }
            }
        };

        loadChatHistory();
    }, [user, navigate]);

    // Guardar mensajes en localStorage cada vez que cambien
    useEffect(() => {
        if (user && messages.length > 0) {
            localStorage.setItem(`chat_history_${user.id}`, JSON.stringify(messages));
        }
    }, [messages, user]);

    // Scroll automático al final de los mensajes
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim() || isLoading || !user) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputMessage,
            role: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:4000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: inputMessage,
                    userId: user.id,
                    sessionId: sessionId
                })
            });

            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }

            const data = await response.json();

            // Actualizar sessionId si es nuevo
            if (data.sessionId && !sessionId) {
                setSessionId(data.sessionId);
            }

            const jordanResponse: Message = {
                id: (Date.now() + 1).toString(),
                content: data.response,
                role: 'assistant',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, jordanResponse]);

        } catch (error) {
            console.error('Error sending message:', error);

            // Fallback: respuesta simulada si el backend no está disponible
            setTimeout(() => {
                const fallbackResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: `Gracias por tu mensaje, ${user.name}. Como tu mentor en F88, te ayudo a mantenerte enfocado en tu transformación.

Recuerda que el éxito en los 88 días depende de la consistencia. ¿Has podido completar tu sesión de entrenamiento de hoy? Estoy aquí para motivarte y guiarte en cada paso del camino.

¿Hay algo específico en lo que necesites ayuda o consejo?`,
                    role: 'assistant',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, fallbackResponse]);
            }, 2000);
        } finally {
            setIsLoading(false);
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const downloadChat = async () => {
        if (messages.length === 0) return;

        try {
            // Intentar obtener datos completos del backend
            let chatData = null;
            if (sessionId) {
                const response = await fetch(`http://localhost:4000/messages/${sessionId}`);
                const data = await response.json();
                if (data.messages) {
                    chatData = {
                        user: user?.name,
                        userId: user?.id,
                        sessionId: sessionId,
                        exportDate: new Date().toISOString(),
                        totalMessages: data.messages.length,
                        messages: data.messages.map((msg: any) => ({
                            id: msg.id,
                            role: msg.role,
                            content: msg.content,
                            timestamp: msg.timestamp,
                            formattedTime: formatTime(new Date(msg.timestamp))
                        }))
                    };
                }
            }

            // Fallback a datos locales si no hay backend
            if (!chatData) {
                chatData = {
                    user: user?.name,
                    userId: user?.id,
                    exportDate: new Date().toISOString(),
                    totalMessages: messages.length,
                    messages: messages.map(msg => ({
                        id: msg.id,
                        role: msg.role,
                        content: msg.content,
                        timestamp: msg.timestamp.toISOString(),
                        formattedTime: formatTime(msg.timestamp)
                    }))
                };
            }

            // Crear archivo JSON
            const dataStr = JSON.stringify(chatData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

            // Crear elemento de descarga
            const exportFileDefaultName = `chat_jordan_${user?.name}_${new Date().toISOString().split('T')[0]}.json`;

            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();

        } catch (error) {
            console.error('Error descargando chat:', error);
            // Fallback a método anterior
            const chatContent = {
                user: user?.name,
                userId: user?.id,
                exportDate: new Date().toISOString(),
                totalMessages: messages.length,
                messages: messages.map(msg => ({
                    role: msg.role,
                    content: msg.content,
                    timestamp: msg.timestamp.toISOString(),
                    formattedTime: formatTime(msg.timestamp)
                }))
            };

            const dataStr = JSON.stringify(chatContent, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
            const exportFileDefaultName = `chat_jordan_${user?.name}_${new Date().toISOString().split('T')[0]}.json`;

            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        }
    };

    return (
        <div className="bg-gradient-to-br from-black via-neutral-900 to-black text-white min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                {/* Minimal Header */}
                <div className="bg-neutral-900/80 backdrop-blur-md border-b border-white/10 px-4 py-2">
                    <div className="max-w-6xl mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    J
                                </div>
                                <div>
                                    <h1 className="text-lg font-semibold">Jordan - Tu Mentor</h1>
                                    <p className="text-xs text-gray-400">Online • Mentor F88</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={downloadChat}
                                disabled={messages.length === 0}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                title="Descargar chat"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-400">Activo</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chat Messages - Fullscreen */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                    <div className="max-w-6xl mx-auto space-y-6">
                        {messages.length === 0 && !isLoading && (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg mx-auto mb-6">
                                    J
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">¡Bienvenido a tu sesión con Jordan!</h3>
                                <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
                                    Tu mentor personal está listo para guiarte en tu transformación F88.
                                    Escribe tu primer mensaje para comenzar.
                                </p>
                            </div>
                        )}

                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[90%] sm:max-w-lg lg:max-w-xl px-4 py-3 rounded-2xl shadow-lg ${message.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-md'
                                        : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-bl-md'
                                        }`}
                                >
                                    <p className="text-base leading-relaxed whitespace-pre-wrap break-words">
                                        {message.content}
                                    </p>
                                    <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-blue-200' : 'text-gray-400'
                                        }`}>
                                        {formatTime(message.timestamp)}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl rounded-bl-md px-4 py-3 shadow-lg max-w-[90%] sm:max-w-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="flex gap-1">
                                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                        <span className="text-base text-gray-400">Jordan está escribiendo...</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Message Input - Fullscreen */}
                <div className="bg-neutral-900/90 backdrop-blur-md border-t border-white/10 px-4 py-4">
                    <div className="max-w-6xl mx-auto">
                        <form onSubmit={sendMessage} className="flex gap-4">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    placeholder="Soy Jordan, preguntame lo que desees"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base resize-none"
                                    disabled={isLoading}
                                    maxLength={1000}
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
                                    {inputMessage.length}/1000
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={!inputMessage.trim() || isLoading}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 min-w-[140px]"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Enviando</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        <span>Enviar</span>
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-3 text-center">
                            <p className="text-sm text-gray-500">
                                💡 Recuerda: Jordan está aquí para guiarte en tu transformación F88
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JordanChat;
