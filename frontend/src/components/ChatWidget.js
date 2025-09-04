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
const ChatWidget = () => {
    const [open, setOpen] = (0, react_1.useState)(true); // open by default when page loads
    const [msgs, setMsgs] = (0, react_1.useState)([]);
    const [input, setInput] = (0, react_1.useState)('');
    const [loading, setLoading] = (0, react_1.useState)(false);
    const endRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = endRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    }, [msgs, open]);
    // Listen for programmatic minimize events so pages can close the panel and leave the bubble
    (0, react_1.useEffect)(() => {
        const handler = () => setOpen(false);
        window.addEventListener('chat:minimize', handler);
        return () => window.removeEventListener('chat:minimize', handler);
    }, []);
    const send = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e === null || e === void 0 ? void 0 : e.preventDefault();
        if (!input.trim() || loading)
            return;
        const userMessage = input.trim();
        setMsgs((m) => [...m, { sender: 'user', message: userMessage }]);
        setInput('');
        setLoading(true);
        try {
            const res = yield fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage, context: 'customer-service' }),
            });
            const data = yield res.json();
            setMsgs((m) => [...m, { sender: 'bot', message: data.reply || 'No hay respuesta del asistente.' }]);
        }
        catch (err) {
            setMsgs((m) => [...m, { sender: 'bot', message: 'Error al conectar con el asistente. Intenta más tarde.' }]);
        }
        finally {
            setLoading(false);
            setOpen(true);
        }
    });
    return (<div className="fixed right-4 bottom-6 z-50">
            <div className="flex flex-col items-end">
                {/* Panel */}
                <div className={`w-80 md:w-96 bg-white/95 text-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-transform ${open ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'} ${open ? '' : 'opacity-95'}`}>
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center">
                                {/* more human, serious icon (svg) */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path><path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"></path></svg>
                            </div>
                            <div>
                                <div className="font-semibold">Soy Jordan</div>
                                <div className="text-xs opacity-80">Tu mentor</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button aria-label="Minimizar chat" className="p-1 rounded-md hover:bg-white/20" onClick={() => setOpen(false)}>−</button>
                        </div>
                    </div>

                    <div className="p-3 max-h-72 overflow-y-auto space-y-3 bg-white">
                        {msgs.length === 0 && (<div className="text-sm text-gray-600">Hola soy Jordan — puedes preguntar sobre el programa, el libro o consultas sobre tu mentor</div>)}
                        {msgs.map((m, i) => (<div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] px-3 py-2 rounded-lg ${m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                                    <div className="text-sm leading-relaxed">{m.message}</div>
                                </div>
                            </div>))}
                        <div ref={endRef}/>
                    </div>

                    <form onSubmit={send} className="p-3 border-t border-gray-200 bg-white flex gap-2">
                        <input aria-label="Escribe tu pregunta" className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" value={input} onChange={(e) => setInput(e.target.value)} disabled={loading} placeholder="Escribe tu consulta..."/>
                        <button type="submit" disabled={loading || !input.trim()} className="bg-blue-600 text-white px-3 py-2 rounded-xl text-sm disabled:opacity-60">{loading ? '...' : 'Enviar'}</button>
                    </form>
                </div>

                {/* Floating button */}
                <button id="chat-widget-button" onClick={() => setOpen((s) => !s)} className="mt-3 bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform" aria-label="Abrir chat">
                    {/* improved person icon (serious) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"></path><path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"></path></svg>
                </button>
            </div>
        </div>);
};
exports.default = ChatWidget;
