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
  const [isFullscreenReading, setIsFullscreenReading] = useState(false);
  const [showChatInFullscreen, setShowChatInFullscreen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  // Update audio source when chapter changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioUrls[currentChapter];
      audioRef.current.load(); // Reload the audio element
    }
  }, [currentChapter]);

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreenReading) {
        setIsFullscreenReading(false);
        setShowChatInFullscreen(false);
        if (audioRef.current) {
          audioRef.current.pause();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isFullscreenReading]);

  // Handle audio play/pause for fullscreen mode
  const handleAudioPlay = () => {
    setAudioPlaying(true);
    setIsFullscreenReading(true);
  };

  const handleAudioPause = () => {
    setAudioPlaying(false);
    setIsFullscreenReading(false);
    setShowChatInFullscreen(false);
  };

  const exitFullscreen = () => {
    setIsFullscreenReading(false);
    setShowChatInFullscreen(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const toggleChatInFullscreen = () => {
    setShowChatInFullscreen(!showChatInFullscreen);
  };

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
    <>
      {/* Audio element - hidden but controls both modes */}
      <audio
        ref={audioRef}
        src={audioUrls[currentChapter]}
        onPlay={handleAudioPlay}
        onPause={handleAudioPause}
        onLoadStart={() => setAudioPlaying(false)}
        className="hidden"
      />

      {/* Fullscreen Reading Mode */}
      {isFullscreenReading && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex">
          {/* Main reading area */}
          <div className={`flex-1 flex flex-col p-8 transition-all duration-300 ${
            showChatInFullscreen ? 'mr-96' : 'mr-0'
          }`}>
            {/* Top controls bar */}
            <div className="flex items-center justify-between mb-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={exitFullscreen}
                  className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
                  title="Presiona Escape para salir"
                >
                  <span className="text-lg group-hover:rotate-90 transition-transform duration-200">✕</span>
                  <span>Salir del Modo Lectura</span>
                </button>
                <button
                  onClick={toggleChatInFullscreen}
                  className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  <span className="text-lg group-hover:bounce transition-all duration-200">
                    {showChatInFullscreen ? '💬' : '🤖'}
                  </span>
                  <span>
                    {showChatInFullscreen ? 'Ocultar Chat' : 'Preguntar a Jordan'}
                  </span>
                </button>
              </div>

              <div className="text-white text-lg font-semibold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                {chapters[currentChapter].title}
              </div>

              <div className="flex items-center gap-4">
                <div className="text-white text-sm bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                  Capítulo {currentChapter + 1} de {chapters.length}
                </div>
              </div>
            </div>

            {/* Reading content */}
            <div 
              className="flex-1 bg-white/95 rounded-2xl p-8 overflow-y-auto text-gray-800 leading-relaxed"
              style={{ fontSize: `${fontSize + 2}px`, lineHeight: 1.8 }}
            >
              {chapters[currentChapter].text}
            </div>

            {/* Bottom controls */}
            <div className="flex items-center justify-between mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              {/* Navigation controls */}
              <div className="flex items-center gap-4">
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-all duration-200"
                  onClick={() => setCurrentChapter((c) => Math.max(0, c - 1))}
                  disabled={currentChapter === 0}
                >
                  <span>←</span>
                  Anterior
                </button>
                
                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-all duration-200"
                  onClick={() => setCurrentChapter((c) => Math.min(chapters.length - 1, c + 1))}
                  disabled={currentChapter === chapters.length - 1}
                >
                  Siguiente
                  <span>→</span>
                </button>
              </div>

              {/* Audio controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20 shadow-lg">
                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        if (audioPlaying) {
                          audioRef.current.pause();
                        } else {
                          audioRef.current.play();
                        }
                      }
                    }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center transition-all duration-200 shadow-lg transform hover:scale-110"
                  >
                    {audioPlaying ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">
                      {audioPlaying ? 'Audio Reproduciéndose' : 'Reproducir Audio'}
                    </span>
                    <span className="text-white/70 text-xs">
                      {chapters[currentChapter].title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collapsible chat in fullscreen */}
          {showChatInFullscreen && (
            <div className="w-96 bg-white/95 backdrop-blur-sm border-l border-white/20 flex flex-col">
              <div className="p-4 border-b border-white/20">
                <h3 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                  <span>🤖</span>
                  Jordan
                </h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chat.length === 0 && (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">📚</div>
                    <div className="text-gray-500 text-sm">
                      Preguntame lo que sea sobre este capitulo!
                    </div>
                  </div>
                )}
                
                {chat.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}>
                      <div className="text-sm font-medium mb-1 opacity-75">
                        {msg.sender === 'user' ? 'Tú' : 'Jordan'}
                      </div>
                      <div className="leading-relaxed">{msg.message}</div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-sm text-gray-500">Pensando...</span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleChat} className="p-4 border-t border-white/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 rounded-xl border-2 border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all disabled:bg-gray-100 disabled:text-gray-500"
                    placeholder="Pregunta sobre el libro..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading || !input.trim()}
                  >
                    {isLoading ? '...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Normal Mode */}
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
              <div className="text-sm text-gray-700 font-medium">Tamaño fuente:</div>
              <div className="flex gap-1 items-center">
                <button
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-xl flex items-center justify-center transition-all duration-200 border-2 border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md"
                  title="Disminuir tamaño de fuente"
                >
                  <span className="leading-none">−</span>
                </button>
                <span className="w-10 text-center text-sm font-semibold bg-gray-100 py-2 px-1 rounded border">{fontSize}</span>
                <button
                  onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                  className="w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-xl flex items-center justify-center transition-all duration-200 border-2 border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md"
                  title="Aumentar tamaño de fuente"
                >
                  <span className="leading-none">+</span>
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
              <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${
                audioPlaying 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {audioPlaying ? (
                  <>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>Playing</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <span>Paused</span>
                  </>
                )}
              </div>
            </div>
            
            {/* Custom audio controls */}
            <div className="bg-white/80 rounded-lg p-4 mb-2 flex items-center gap-4">
              <button
                onClick={() => {
                  if (audioRef.current) {
                    if (audioPlaying) {
                      audioRef.current.pause();
                    } else {
                      audioRef.current.play();
                    }
                  }
                }}
                className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-lg"
              >
                {audioPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {chapters[currentChapter].title}
                </div>
                <div className="text-xs text-gray-500">
                  Capítulo {currentChapter + 1} de {chapters.length}
                </div>
              </div>

              <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                {audioPlaying ? 'Reproduciendo...' : 'Pausado'}
              </div>
            </div>
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
                Jordan
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
                    Preguntame lo que sea sobre este capitulo!
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Puedo ayudar a explicar conceptos, responder preguntas o discutir el contenido.
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
                  className="flex-1 rounded-xl border-2 border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all disabled:bg-gray-100 disabled:text-gray-500"
                  placeholder="Pregunta sobre el libro..."
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
    </>
  );
};

export default ReadBookPage;
