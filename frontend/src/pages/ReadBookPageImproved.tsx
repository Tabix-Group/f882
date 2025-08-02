import React, { useState, useRef, useEffect } from 'react';

// Dummy data for chapters and audio (replace with real data/fetch)
const chapters = [
  {
    title: 'Chapter 1: Introduction',
    text: `Este es el cayo emocional que construyes con el tiempo y de poco a poco. La mente es un 
primer filtro de información,  tu fuerza emocional es tu segundo filtro o búfer. 
Las experiencias se disparan  en tu mente y tu código de creencias de fortaleza reestudiado como 
tu código "The GRIT" las traduce y manda al cuerpo como realidades de sensaciones. 
Las emociones, son también respuestas que experimentas a condicionamiento de patrones 
aprendidos por tu propio cuerpo respecto de ciertas experiencias pasadas. Estos recuerdos 
provienen de tu memoria muscular, celular, inmunológica y somática en lo general y no 
necesariamente provienen de una señal de tu mente.`
  },
  { title: 'Chapter 2: The Journey', text: 'This is the content of chapter 2.' },
  { title: 'Chapter 3: Success', text: 'This is the content of chapter 3.' },
];
const audioUrls = [
  '/audio/zaratustra.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
];

const ReadBookPage: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [chat, setChat] = useState<{ sender: 'user' | 'bot'; message: string }[]>([]);
  const [input, setInput] = useState('');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showChat, setShowChat] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  // Chatbot real con backend
  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setChat([...chat, { sender: 'user', message: userMessage }]);
    setInput('');
    setIsLoading(true);
    setShowChat(true);

    try {
      const res = await fetch('https://be-production-36c6.up.railway.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          chapter: chapters[currentChapter].text
        }),
      });
      const data = await res.json();
      setChat((prev) => [
        ...prev,
        { sender: 'bot', message: data.reply || 'No response from assistant.' },
      ]);
    } catch {
      setChat((prev) => [
        ...prev,
        { sender: 'bot', message: 'Error al conectar con el asistente.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex flex-col items-center py-4 px-2">
      <div className="w-full max-w-7xl bg-white/90 rounded-3xl shadow-2xl p-6 flex flex-col lg:flex-row gap-6">
        {/* Book reading section */}
        <div className="flex-1 flex flex-col">
          {/* Header with progress */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-1">{chapters[currentChapter].title}</h2>
              <div className="text-sm text-gray-600">
                Chapter {currentChapter + 1} of {chapters.length}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600">Font Size:</div>
              <div className="flex gap-1">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                  title="Decrease font size"
                >
                  <span className="text-lg">−</span>
                </button>
                <span className="w-8 text-center text-sm">{fontSize}</span>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                  title="Increase font size"
                >
                  <span className="text-lg">+</span>
                </button>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentChapter + 1) / chapters.length) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Progress: {Math.round(((currentChapter + 1) / chapters.length) * 100)}%
            </div>
          </div>

          {/* Book content */}
          <div 
            className="prose max-w-none text-gray-800 bg-slate-50 rounded-xl p-6 mb-6 min-h-[300px] leading-relaxed shadow-inner transition-all duration-200"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
          >
            {chapters[currentChapter].text}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mb-6">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-100 text-blue-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-200 transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
              onClick={() => setCurrentChapter((c) => Math.max(0, c - 1))}
              disabled={currentChapter === 0}
            >
              <span>←</span>
              Previous
            </button>
            
            <div className="flex gap-2">
              {chapters.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentChapter(idx)}
                  className={`w-10 h-10 rounded-full font-semibold transition-all duration-200 ${
                    idx === currentChapter
                      ? 'bg-blue-600 text-white shadow-lg scale-110'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
              onClick={() => setCurrentChapter((c) => Math.min(chapters.length - 1, c + 1))}
              disabled={currentChapter === chapters.length - 1}
            >
              Next
              <span>→</span>
            </button>
          </div>

          {/* Enhanced Audio book player */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-blue-800">Audio Book</h4>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                audioPlaying 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {audioPlaying ? '🎵 Playing' : '⏸️ Paused'}
              </div>
            </div>
            <audio
              ref={audioRef}
              src={audioUrls[currentChapter]}
              controls
              className="w-full mb-2 rounded-lg"
              onPlay={() => setAudioPlaying(true)}
              onPause={() => setAudioPlaying(false)}
              onLoadStart={() => setAudioPlaying(false)}
            />
            <div className="text-sm text-gray-600">
              Listen to chapter {currentChapter + 1} while reading along
            </div>
          </div>
        </div>

        {/* Enhanced Chatbot section */}
        <div className="w-full lg:w-96 flex flex-col">
          {/* Mobile toggle for chat */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowChat(!showChat)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>💬</span>
              {showChat ? 'Hide Assistant' : 'Show Reading Assistant'}
            </button>
          </div>

          <div className={`flex flex-col bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl shadow-lg border border-blue-100 h-[500px] ${
            showChat ? 'block' : 'hidden lg:flex'
          }`}>
            <div className="flex items-center justify-between p-4 border-b border-blue-200">
              <h3 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                <span>🤖</span>
                Reading Assistant
              </h3>
              {chat.length > 0 && (
                <button
                  className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200 transition-colors"
                  title="Clear conversation"
                  onClick={() => setChat([])}
                >
                  <span className="text-lg">🗑️</span>
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chat.length === 0 && (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">📚</div>
                  <div className="text-gray-500 text-sm">
                    Ask me anything about this chapter!
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    I can help explain concepts, answer questions, or discuss the content.
                  </div>
                </div>
              )}
              
              {chat.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}>
                    <div className="text-sm font-medium mb-1 opacity-75">
                      {msg.sender === 'user' ? 'You' : 'Assistant'}
                    </div>
                    <div className="leading-relaxed">{msg.message}</div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-gray-500">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleChat} className="p-4 border-t border-blue-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  placeholder="Ask about the book..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100"
                  disabled={isLoading || !input.trim()}
                >
                  {isLoading ? '...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBookPage;
