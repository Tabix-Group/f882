import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy data for chapters and audio (replace with real data/fetch)
const chapters = [
  {
    title: 'Página 1: Introducción',
    text: `Este es el cayo emocional que construyes con el tiempo y de poco a poco. La mente es un 
primer filtro de información,  tu fuerza emocional es tu segundo filtro o búfer. 
Las experiencias se disparan  en tu mente y tu código de creencias de fortaleza reestudiado como "The GRIT" las traduce y manda al cuerpo como realidades de sensaciones. 
Las emociones, son también respuestas que experimentas a condicionamiento de patrones 
aprendidos por tu propio cuerpo respecto de ciertas experiencias pasadas. Estos recuerdos 
provienen de tu memoria muscular, celular, inmunológica y somática en lo general y no 
necesariamente provienen de una señal de tu mente.`
  },
  { title: 'Página 2: El Viaje', text: 'Este es el contenido de la página 2.' },
  { title: 'Página 3: Éxito', text: 'Este es el contenido de la página 3.' },
];
const audioUrls = [
  '/audio/zaratustra.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
];

const ReadBookPage: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isFullscreenReading, setIsFullscreenReading] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  // Update audio source when chapter changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioUrls[currentChapter];
      audioRef.current.load(); // Reload the audio element
    }
  }, [currentChapter]);

  // audio event listeners
  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setAudioCurrentTime(a.currentTime || 0);
    const onDur = () => setAudioDuration(a.duration || 0);
    const onEnded = () => setAudioPlaying(false);
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onDur);
    a.addEventListener('ended', onEnded);
    return () => {
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onDur);
      a.removeEventListener('ended', onEnded);
    };
    // audioRef.current is intentionally excluded from deps: we attach listeners once to the element reference
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle escape key to exit fullscreen
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreenReading) {
        setIsFullscreenReading(false);
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
    // Keep fullscreen on pause - only exit when explicitly requested
  };

  // Format seconds to mm:ss
  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  // Seek audio when clicking on progress bar
  const handleAudioSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    if (audioRef.current && !isNaN(audioDuration) && audioDuration > 0) {
      audioRef.current.currentTime = pct * audioDuration;
      setAudioCurrentTime(pct * audioDuration);
    }
  };

  // Fullscreen API toggle for the main reading area
  const readingContainerRef = useRef<HTMLDivElement | null>(null);
  const toggleFullscreen = async () => {
    const el = readingContainerRef.current || document.documentElement;
    if (!document.fullscreenElement) {
      try {
        await (el as any).requestFullscreen();
        setIsFullscreenReading(true);
      } catch (e) {
        // ignore
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreenReading(false);
      } catch (e) {
        // ignore
      }
    }
  };

  // Keyboard shortcuts: ← previous, → next, f fullscreen, space play/pause
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT' || (e.target as HTMLElement)?.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        setCurrentChapter((c) => Math.max(0, c - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentChapter((c) => Math.min(chapters.length - 1, c + 1));
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key === ' ') {
        // prevent page scroll
        e.preventDefault();
        if (audioRef.current) {
          if (audioPlaying) audioRef.current.pause();
          else audioRef.current.play();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [audioPlaying, audioDuration]);

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
          <div className={`flex-1 flex flex-col p-8 transition-all duration-300 mr-0`}>
            {/* Top controls bar */}
            <div className="flex items-center justify-between mb-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center gap-4">
                {/* Removed duplicate exit button */}
              </div>

              <div className="text-white text-lg font-semibold bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                {chapters[currentChapter].title}
              </div>

              <div className="flex items-center gap-4">
                <div className="text-white text-sm bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                  Página {currentChapter + 1} de {chapters.length}
                </div>
              </div>
            </div>

            {/* Reading content */}
            <div
              className="flex-1 bg-white/95 rounded-2xl p-8 overflow-y-auto text-gray-800 leading-relaxed"
              style={{ fontSize: `${fontSize + 2}px`, lineHeight: 1.8 }}
              role="article"
              aria-label={`Contenido del ${chapters[currentChapter].title}`}
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
                    <span className="text-white text-sm font-medium" aria-live="polite">
                      {audioPlaying ? 'Reproduciendo' : 'Audiolibro, dar click para escuchar'}
                    </span>
                    <span className="text-white/70 text-xs">
                      {chapters[currentChapter].title}
                    </span>
                    <div className="mt-2 w-48" role="group" aria-label="Control de progreso de audio">
                      <div className="w-full h-2 bg-white/30 rounded-full cursor-pointer" onClick={handleAudioSeek} aria-hidden={false}>
                        <div className="h-2 bg-white rounded-full" style={{ width: `${(audioDuration ? (audioCurrentTime / audioDuration) : 0) * 100}%` }} />
                      </div>
                      <div className="text-xs text-white/80 mt-1 flex justify-between">
                        <span aria-label="tiempo actual">{formatTime(audioCurrentTime)}</span>
                        <span aria-label="duración">{formatTime(audioDuration)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={toggleFullscreen}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                {isFullscreenReading ? 'Salir Pantalla Completa' : 'Pantalla Completa'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Normal Mode */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex flex-col items-center py-2 px-2">
        <div className="w-full max-w-7xl bg-white/90 rounded-3xl shadow-2xl p-4 flex flex-col lg:flex-row gap-4">
          {/* Book reading section */}
          <div className="flex-1 flex flex-col">
            {/* Header with progress */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-1">{chapters[currentChapter].title}</h2>
                <div className="text-sm text-gray-600">
                  Página {currentChapter + 1} de {chapters.length}
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* Navigation Links */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-lg transition-all duration-200 text-sm"
                    title="Volver al Panel de Control"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                    </svg>
                    Panel
                  </button>
                  <button
                    onClick={() => navigate('/jordan-chat')}
                    className="flex items-center gap-2 px-3 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-lg transition-all duration-200 text-sm"
                    title="Chat con Jordan"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Jordan
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-gray-700 font-medium">Tamaño Letra</div>
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                      className="w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-lg flex items-center justify-center transition-all duration-200 border-2 border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md"
                      title="Disminuir tamaño de fuente"
                    >
                      <span className="leading-none">−</span>
                    </button>
                    <span className="w-8 text-center text-xs font-semibold bg-gray-100 py-1 px-1 rounded border">{fontSize}</span>
                    <button
                      onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                      className="w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold text-lg flex items-center justify-center transition-all duration-200 border-2 border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md"
                      title="Aumentar tamaño de fuente"
                    >
                      <span className="leading-none">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${((currentChapter + 1) / chapters.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Progreso: {Math.round(((currentChapter + 1) / chapters.length) * 100)}%
              </div>
            </div>

            {/* Book content */}
            <div
              className="prose max-w-none text-gray-800 bg-slate-50 rounded-xl p-4 mb-4 min-h-[300px] leading-relaxed shadow-inner transition-all duration-200"
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
            >
              {chapters[currentChapter].text}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mb-4">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-100 text-blue-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-200 transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
                onClick={() => setCurrentChapter((c) => Math.max(0, c - 1))}
                disabled={currentChapter === 0}
                aria-label="Página anterior"
              >
                <span>←</span>
                Anterior
              </button>

              <div className="flex gap-2" role="tablist" aria-label="Navegación de páginas">
                {chapters.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentChapter(idx)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-200 ${idx === currentChapter
                      ? 'bg-blue-600 text-white shadow-lg scale-110'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    aria-selected={idx === currentChapter}
                    role="tab"
                    aria-label={`Página ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
                onClick={() => setCurrentChapter((c) => Math.min(chapters.length - 1, c + 1))}
                disabled={currentChapter === chapters.length - 1}
                aria-label="Página siguiente"
              >
                Siguiente
                <span>→</span>
              </button>
            </div>

            {/* Enhanced Audio book player */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-blue-800">Audiolibro</h4>
                <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${audioPlaying
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-600'
                  }`}>
                  {audioPlaying ? (
                    <>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Reproduciendo</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span>Pausado</span>
                    </>
                  )}
                </div>
              </div>

              {/* Custom audio controls */}
              <div className="bg-white/80 rounded-lg p-3 mb-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    if (audioRef.current) {
                      if (audioPlaying) {
                        audioRef.current.pause();
                      } else {
                        audioRef.current.play();
                        setIsFullscreenReading(true); // Enter fullscreen when play is pressed
                      }
                    }
                  }}
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-lg"
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
                Página {currentChapter + 1} de {chapters.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBookPage;