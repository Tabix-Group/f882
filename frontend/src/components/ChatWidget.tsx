import React, { useState, useRef, useEffect } from 'react';

type ChatMsg = { sender: 'user' | 'bot'; message: string };

const ChatWidget: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [msgs, setMsgs] = useState<ChatMsg[]>([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const endRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [msgs, open]);

    const send = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || loading) return;
        const userMessage = input.trim();
        setMsgs((m) => [...m, { sender: 'user', message: userMessage }]);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage, context: 'customer-service' }),
            });
            const data = await res.json();
            setMsgs((m) => [...m, { sender: 'bot', message: data.reply || 'No hay respuesta del asistente.' }]);
        } catch (err) {
            setMsgs((m) => [...m, { sender: 'bot', message: 'Error al conectar con el asistente. Intenta más tarde.' }]);
        } finally {
            setLoading(false);
            setOpen(true);
        }
    };

    return (
        <div className="fixed left-4 bottom-6 z-50">
            <div className="flex flex-col items-start">
                {/* Panel */}
                <div className={`w-80 md:w-96 bg-white/95 text-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-transform ${open ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'} ${open ? '' : 'opacity-95'}`} style={{ display: open ? 'block' : 'none' }}>
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">🤖</div>
                            <div>
                                <div className="font-semibold">Asistente F88</div>
                                <div className="text-xs opacity-80">Coaching ontológico • espiritual • estoico</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button aria-label="Minimizar chat" className="p-1 rounded-md hover:bg-white/20" onClick={() => setOpen(false)}>−</button>
                        </div>
                    </div>

                    <div className="p-3 max-h-72 overflow-y-auto space-y-3 bg-white">
                        {msgs.length === 0 && (
                            <div className="text-sm text-gray-600">Hola — puedes preguntar sobre el programa, el libro o consultas de coaching.</div>
                        )}
                        {msgs.map((m, i) => (
                            <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] px-3 py-2 rounded-lg ${m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                                    <div className="text-sm leading-relaxed">{m.message}</div>
                                </div>
                            </div>
                        ))}
                        <div ref={endRef} />
                    </div>

                    <form onSubmit={send} className="p-3 border-t border-gray-200 bg-white flex gap-2">
                        <input
                            aria-label="Escribe tu pregunta"
                            className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={loading}
                            placeholder="Escribe tu consulta..."
                        />
                        <button type="submit" disabled={loading || !input.trim()} className="bg-blue-600 text-white px-3 py-2 rounded-xl text-sm disabled:opacity-60">{loading ? '...' : 'Enviar'}</button>
                    </form>
                </div>

                {/* Floating button */}
                <button
                    onClick={() => setOpen((s) => !s)}
                    className="mt-3 bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
                    aria-label="Abrir chat"
                >
                    💬
                </button>
            </div>
        </div>
    );
};

export default ChatWidget;
