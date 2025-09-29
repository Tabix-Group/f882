import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

// Interfaces for API responses
interface Highlight {
  id: number;
  text: string;
  chapter: number;
  created_at: string;
}

interface GetHighlightsResponse {
  highlights: Highlight[];
}

interface AddHighlightResponse {
  highlight: Highlight;
}

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
  const [fontFamily, setFontFamily] = useState('serif');
  const [isFullscreenReading, setIsFullscreenReading] = useState(false);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [showHighlightMenu, setShowHighlightMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [showHighlightsModal, setShowHighlightsModal] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

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

  // Handle clicks outside to hide menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (showHighlightMenu && !(e.target as Element).closest('.highlight-menu')) {
        setShowHighlightMenu(false);
        window.getSelection()?.removeAllRanges();
      }
    };

    if (showHighlightMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showHighlightMenu]);

  // Handle audio play/pause for fullscreen mode
  const handleAudioPlay = () => {
    setAudioPlaying(true);
    setIsFullscreenReading(true);
  };

  const handleAudioPause = () => {
    setAudioPlaying(false);
    // Keep fullscreen on pause - only exit when explicitly requested
  };

  // Load highlights from backend
  useEffect(() => {
    if (user) {
      console.log('Loading highlights for user:', user.id);
      axios.get(`http://localhost:4000/api/books/highlights/${user.id}`)
        .then(response => {
          console.log('Highlights loaded successfully:', response.data);
          const data = response.data as GetHighlightsResponse;
          setHighlights(data.highlights);
        })
        .catch(error => {
          console.error('Error loading highlights:', error);
          console.error('Error details:', error.response?.data || error.message);
        });
    }
  }, [user]);

  // Format seconds to mm:ss
  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  // Handle text selection for both mouse and touch
  const handleTextSelection = (e: React.MouseEvent | React.TouchEvent) => {
    // Small delay to ensure selection is complete
    setTimeout(() => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        const text = selection.toString().trim();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // For touch events, use different positioning
        let x = rect.left + rect.width / 2;
        let y = rect.top - 10;

        if ('touches' in e) {
          // Touch event - position relative to viewport
          const touch = (e as React.TouchEvent).changedTouches[0];
          x = touch.clientX;
          y = touch.clientY - 20; // Position above finger
        }

        setSelectedText(text);
        setMenuPosition({ x, y });
        setShowHighlightMenu(true);
      } else {
        setShowHighlightMenu(false);
      }
    }, 10);
  };

  // Add highlight
  const addHighlight = () => {
    if (selectedText && user) {
      console.log('Adding highlight:', { userId: user.id, text: selectedText, chapter: currentChapter });
      axios.post('http://localhost:4000/api/books/highlights', {
        userId: user.id,
        text: selectedText,
        chapter: currentChapter
      })
        .then(response => {
          console.log('Highlight added successfully:', response.data);
          const data = response.data as AddHighlightResponse;
          setHighlights(prev => [...prev, data.highlight]);
          setShowHighlightMenu(false);
          window.getSelection()?.removeAllRanges();
        })
        .catch(error => {
          console.error('Error adding highlight:', error);
          console.error('Error details:', error.response?.data || error.message);
          console.error('Request config:', error.config);
        });
    }
  };  // Seek audio when clicking on progress bar
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
                </button>

                <button
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/20 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-all duration-200"
                  onClick={() => setCurrentChapter((c) => Math.min(chapters.length - 1, c + 1))}
                  disabled={currentChapter === chapters.length - 1}
                >
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
                onClick={() => setIsFullscreenReading(false)}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Salir Pantalla Completa
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Normal Mode */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex flex-col items-center py-2 px-2 sm:px-4">
        <div className="w-full max-w-7xl bg-white/90 rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col lg:flex-row gap-4">
          {/* Book reading section */}
          <div className="flex-1 flex flex-col">
            {/* Header with progress */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-1">{chapters[currentChapter].title}</h2>
                <div className="text-sm text-gray-600">
                  Página {currentChapter + 1} de {chapters.length}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Navigation Links */}
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium rounded-lg transition-all duration-200 text-sm"
                    title="Volver al Panel de Control"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                    </svg>
                    <span className="hidden sm:inline">Panel</span>
                  </button>
                  <button
                    onClick={() => navigate('/jordan-chat')}
                    className="flex items-center gap-2 px-3 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-lg transition-all duration-200 text-sm"
                    title="Chat con Jordan"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="hidden sm:inline">Jordan</span>
                  </button>
                  <button
                    onClick={() => setShowHighlightsModal(true)}
                    className="flex items-center gap-2 px-3 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-medium rounded-lg transition-all duration-200 text-sm"
                    title="Ver pasajes destacados"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="hidden sm:inline">Destacados ({highlights.length})</span>
                    <span className="sm:hidden">{highlights.length}</span>
                  </button>
                  {/* Minimal Audio Player */}
                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg px-3 py-2 border border-green-100 shadow-sm">
                    <button
                      onClick={() => {
                        if (audioRef.current) {
                          if (audioPlaying) {
                            audioRef.current.pause();
                          } else {
                            audioRef.current.play();
                            setIsFullscreenReading(true);
                          }
                        }
                      }}
                      className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors shadow-lg"
                      title={audioPlaying ? 'Pausar audiolibro' : 'Reproducir audiolibro'}
                    >
                      {audioPlaying ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <div className="hidden sm:flex flex-col">
                      <span className="text-xs font-medium text-gray-700 truncate max-w-32" title={chapters[currentChapter].title}>
                        {chapters[currentChapter].title}
                      </span>
                      <div className="w-20 h-1 bg-gray-200 rounded-full">
                        <div className="h-1 bg-green-600 rounded-full" style={{ width: `${(audioDuration ? (audioCurrentTime / audioDuration) : 0) * 100}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="text-xs bg-gray-100 py-1 px-2 rounded border hidden sm:block"
                  >
                    <option value="serif">Serif</option>
                    <option value="sans">Sans</option>
                  </select>
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
            </div>

            {/* Book content */}
            <div
              className={`prose prose-lg max-w-none text-gray-900 bg-amber-50 rounded-xl p-4 sm:p-8 mb-4 min-h-[500px] leading-relaxed border border-amber-200 shadow-inner ${fontFamily === 'serif' ? 'font-serif' : 'font-sans'} select-text`}
              style={{ fontSize: `${fontSize}px`, lineHeight: 1.8, textAlign: 'justify' }}
              onMouseUp={handleTextSelection}
              onTouchEnd={handleTextSelection}
            >
              {chapters[currentChapter].text}
            </div>

            {/* Highlight Menu */}
            {showHighlightMenu && (
              <div
                className="fixed z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-2 flex gap-2 highlight-menu"
                style={{ left: menuPosition.x - 50, top: menuPosition.y }}
              >
                <button
                  onClick={addHighlight}
                  className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 text-yellow-800 text-sm rounded transition-colors"
                  title="Resaltar texto"
                >
                  🖊️
                </button>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mb-4">
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-800 font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-200 transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg"
                onClick={() => setCurrentChapter((c) => Math.max(0, c - 1))}
                disabled={currentChapter === 0}
                aria-label="Página anterior"
              >
                <span className="text-2xl">‹</span>
              </button>

              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-600 font-medium">
                  {currentChapter + 1} de {chapters.length}
                </div>
                <div className="w-32 bg-gray-200 rounded-full h-1 mt-1">
                  <div
                    className="bg-amber-600 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${((currentChapter + 1) / chapters.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button
                className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg"
                onClick={() => setCurrentChapter((c) => Math.min(chapters.length - 1, c + 1))}
                disabled={currentChapter === chapters.length - 1}
                aria-label="Página siguiente"
              >
                <span className="text-2xl">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Modal */}
      {showHighlightsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Pasajes Destacados</h3>
              <button
                onClick={() => setShowHighlightsModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto max-h-96">
              {highlights.length === 0 ? (
                <p className="text-gray-500 text-center">No tienes pasajes destacados aún.</p>
              ) : (
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <div key={highlight.id} className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded relative">
                      <button
                        onClick={() => {
                          axios.delete(`http://localhost:4000/api/books/highlights/${highlight.id}`)
                            .then(() => {
                              setHighlights(prev => prev.filter(h => h.id !== highlight.id));
                            })
                            .catch(error => {
                              console.error('Error deleting highlight:', error);
                            });
                        }}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-lg"
                        title="Eliminar highlight"
                      >
                        ×
                      </button>
                      <p className="text-gray-800 italic text-sm sm:text-base pr-6">"{highlight.text}"</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Capítulo {highlight.chapter + 1} • {new Date(highlight.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadBookPage;