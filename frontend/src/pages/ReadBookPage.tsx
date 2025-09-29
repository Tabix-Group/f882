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
  const [isAudioFullscreen, setIsAudioFullscreen] = useState(false);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [showHighlightMenu, setShowHighlightMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedText, setSelectedText] = useState('');
  const [showHighlightsModal, setShowHighlightsModal] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentHighlightsPage, setCurrentHighlightsPage] = useState(1);
  const highlightsPerPage = 5;
  const [isLoadingHighlights, setIsLoadingHighlights] = useState(false);
  const [highlightsError, setHighlightsError] = useState<string | null>(null);
  const [isAddingHighlight, setIsAddingHighlight] = useState(false);
  const [offlineHighlights, setOfflineHighlights] = useState<Highlight[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const readingContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  // Load saved chapter on component mount
  useEffect(() => {
    const savedChapter = localStorage.getItem('f88-current-chapter');
    if (savedChapter !== null) {
      const chapterIndex = parseInt(savedChapter, 10);
      if (chapterIndex >= 0 && chapterIndex < chapters.length) {
        setCurrentChapter(chapterIndex);
      }
    }
  }, []);

  // Save current chapter when it changes
  useEffect(() => {
    localStorage.setItem('f88-current-chapter', currentChapter.toString());
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
    // Don't auto-enter fullscreen here - let user control it
  };

  const handleAudioPause = () => {
    setAudioPlaying(false);
    // Keep fullscreen on pause - only exit when explicitly requested
  };

  // Load highlights from backend
  useEffect(() => {
    if (user) {
      setIsLoadingHighlights(true);
      setHighlightsError(null);
      console.log('Loading highlights for user:', user.id);
      axios.get(`https://f88-backend-production.up.railway.app/api/books/highlights/${user.id}`)
        .then(response => {
          console.log('Highlights loaded successfully:', response.data);
          const data = response.data as GetHighlightsResponse;
          setHighlights(data.highlights);
          setIsLoadingHighlights(false);
        })
        .catch(error => {
          console.error('Error loading highlights:', error);
          const errorMessage = error.code === 'NETWORK_ERROR' || error.message === 'Network Error'
            ? 'No se pudo conectar al servidor. Los destacados estarán disponibles cuando se restablezca la conexión.'
            : 'Error al cargar los destacados. Inténtalo de nuevo más tarde.';
          setHighlightsError(errorMessage);
          console.error('Error details:', error.response?.data || error.message);
          setIsLoadingHighlights(false);
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
      setIsAddingHighlight(true);
      console.log('Adding highlight:', { userId: user.id, text: selectedText, chapter: currentChapter });
      axios.post('https://f88-backend-production.up.railway.app/api/books/highlights', {
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
          setSelectedText('');
        })
        .catch(error => {
          console.error('Error adding highlight to backend:', error);

          // Fallback: Save locally if backend is unavailable
          const offlineHighlight: Highlight = {
            id: Date.now(), // Temporary ID for offline highlights
            text: selectedText,
            chapter: currentChapter,
            created_at: new Date().toISOString()
          };

          setOfflineHighlights(prev => [...prev, offlineHighlight]);
          setShowHighlightMenu(false);
          window.getSelection()?.removeAllRanges();
          setSelectedText('');

          // Show user-friendly message (only if not in fullscreen)
          if (!isFullscreenReading) {
            alert('El destacado se guardó localmente. Se sincronizará cuando se restablezca la conexión con el servidor.');
          }
          setIsAddingHighlight(false);
        });
    }
  };
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

  // Auto-enter fullscreen mode when component mounts
  useEffect(() => {
    const enterFullscreen = async () => {
      try {
        await document.documentElement.requestFullscreen();
        setIsFullscreenReading(true);
      } catch (e) {
        // If fullscreen fails, just continue in normal mode
        console.log('Fullscreen not available');
      }
    };

    // Small delay to ensure component is fully rendered
    const timer = setTimeout(enterFullscreen, 100);
    return () => clearTimeout(timer);
  }, []);

  // Listen for fullscreen changes to update state
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreenReading(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Calculate pagination
  const allHighlights = [...highlights, ...offlineHighlights];
  const totalHighlightsPages = Math.ceil(allHighlights.length / highlightsPerPage);
  const startIndex = (currentHighlightsPage - 1) * highlightsPerPage;
  const endIndex = startIndex + highlightsPerPage;
  const currentHighlights = allHighlights.slice(startIndex, endIndex);

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
        <div className="fixed inset-0 bg-black z-50 flex">
          {/* Exit fullscreen button - top right corner */}
          <button
            onClick={() => setIsFullscreenReading(false)}
            className="absolute top-6 right-6 z-60 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-200"
            title="Salir de pantalla completa"
            aria-label="Salir de pantalla completa"
          >
            ×
          </button>

          {/* Navigation buttons - left side */}
          <button
            onClick={() => setCurrentChapter((c) => Math.max(0, c - 1))}
            disabled={currentChapter === 0}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center text-2xl transition-all duration-200"
            title="Página anterior"
            aria-label="Página anterior"
          >
            ‹
          </button>

          {/* Navigation buttons - right side */}
          <button
            onClick={() => setCurrentChapter((c) => Math.min(chapters.length - 1, c + 1))}
            disabled={currentChapter === chapters.length - 1}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center text-2xl transition-all duration-200"
            title="Página siguiente"
            aria-label="Página siguiente"
          >
            ›
          </button>

          {/* Font size controls - bottom right */}
          <div className="absolute bottom-6 right-6 z-60 flex items-center gap-2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-200">
            <button
              onClick={() => setFontSize(Math.max(12, fontSize - 2))}
              className="w-8 h-8 text-white hover:text-gray-300 rounded-full flex items-center justify-center text-lg font-bold transition-colors"
              title="Disminuir tamaño de fuente"
            >
              −
            </button>
            <span className="text-white text-sm font-medium min-w-[2rem] text-center">{fontSize}</span>
            <button
              onClick={() => setFontSize(Math.min(32, fontSize + 2))}
              className="w-8 h-8 text-white hover:text-gray-300 rounded-full flex items-center justify-center text-lg font-bold transition-colors"
              title="Aumentar tamaño de fuente"
            >
              +
            </button>
          </div>

          {/* Reading content - centered and full focus */}
          <div className="flex-1 flex items-center justify-center p-12">
            <div
              className="max-w-4xl w-full text-white leading-relaxed text-justify select-text"
              style={{
                fontSize: `${fontSize + 6}px`,
                lineHeight: 1.8,
                fontFamily: fontFamily === 'serif' ? 'serif' : 'sans-serif'
              }}
              onMouseUp={handleTextSelection}
              onTouchEnd={handleTextSelection}
              role="article"
              aria-label={`Contenido del ${chapters[currentChapter].title}`}
            >
              {chapters[currentChapter].text}
            </div>
          </div>
        </div>
      )}

      {/* Audio Fullscreen Mode */}
      {isAudioFullscreen && (
        <div className="fixed inset-0 bg-gradient-to-br from-green-900 to-blue-900 z-50 flex flex-col items-center justify-center">
          {/* Exit fullscreen button - top right corner */}
          <button
            onClick={() => {
              setIsAudioFullscreen(false);
              if (audioRef.current) {
                audioRef.current.pause();
              }
            }}
            className="absolute top-6 right-6 z-60 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg transition-all duration-200"
            title="Salir de pantalla completa"
            aria-label="Salir de pantalla completa"
          >
            ×
          </button>

          {/* Chapter title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{chapters[currentChapter].title}</h2>
            <div className="text-white/80 text-lg">
              Capítulo {currentChapter + 1} de {chapters.length}
            </div>
          </div>

          {/* Large audio player */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4">
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
              className="w-24 h-24 rounded-full bg-white text-green-600 hover:bg-gray-100 flex items-center justify-center mx-auto mb-6 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              title={audioPlaying ? 'Pausar audiolibro' : 'Reproducir audiolibro'}
            >
              {audioPlaying ? (
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Progress bar */}
            <div className="mb-4">
              <div
                className="w-full h-2 bg-white/30 rounded-full cursor-pointer"
                onClick={handleAudioSeek}
              >
                <div
                  className="h-2 bg-white rounded-full transition-all duration-300"
                  style={{ width: `${(audioDuration ? (audioCurrentTime / audioDuration) : 0) * 100}%` }}
                />
              </div>
            </div>

            {/* Time display */}
            <div className="flex justify-between text-white/80 text-sm">
              <span>{formatTime(audioCurrentTime)}</span>
              <span>{formatTime(audioDuration)}</span>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-8 mt-8">
            <button
              onClick={() => setCurrentChapter((c) => Math.max(0, c - 1))}
              disabled={currentChapter === 0}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center text-2xl transition-all duration-200"
              title="Capítulo anterior"
              aria-label="Capítulo anterior"
            >
              ‹
            </button>

            <button
              onClick={() => setCurrentChapter((c) => Math.min(chapters.length - 1, c + 1))}
              disabled={currentChapter === chapters.length - 1}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center text-2xl transition-all duration-200"
              title="Capítulo siguiente"
              aria-label="Capítulo siguiente"
            >
              ›
            </button>
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
                    <span className="hidden sm:inline">Destacados ({highlights.length + offlineHighlights.length})</span>
                    <span className="sm:hidden">{highlights.length + offlineHighlights.length}</span>
                  </button>
                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-all duration-200 text-sm"
                    title="Modo pantalla completa"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>
                  {/* Minimal Audio Player */}
                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        if (audioPlaying) {
                          audioRef.current.pause();
                        } else {
                          audioRef.current.play();
                          setIsAudioFullscreen(true);
                        }
                      }
                    }}
                    className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors shadow-lg"
                    title={audioPlaying ? 'Pausar audiolibro' : 'Reproducir audiolibro'}
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
                className={`fixed ${isFullscreenReading ? 'z-[70]' : 'z-50'} animate-in fade-in-0 zoom-in-95 duration-200 highlight-menu`}
                style={{ left: menuPosition.x - 60, top: menuPosition.y + 10 }}
              >
                {/* Tooltip arrow */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-white"></div>

                {/* Main button */}
                <button
                  onClick={addHighlight}
                  disabled={isAddingHighlight}
                  className="group relative bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-4 py-2.5 rounded-xl shadow-lg hover:shadow-xl disabled:shadow-none transform hover:scale-105 active:scale-95 disabled:hover:scale-100 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 font-medium text-sm border border-amber-300 disabled:border-gray-300"
                  title={isAddingHighlight ? "Guardando..." : "Resaltar texto seleccionado"}
                >
                  {/* Loading spinner or highlight icon */}
                  {isAddingHighlight ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 group-hover:animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  )}

                  {/* Text */}
                  <span className="hidden sm:inline">
                    {isAddingHighlight ? "Guardando..." : "Resaltar"}
                  </span>

                  {/* Sparkle effect */}
                  {!isAddingHighlight && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                  )}
                </button>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-amber-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
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
              {isLoadingHighlights ? (
                <div className="flex items-center justify-center py-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Cargando destacados...</span>
                  </div>
                </div>
              ) : highlightsError ? (
                <div className="text-center py-8">
                  <div className="text-red-500 mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm">{highlightsError}</p>
                  <button
                    onClick={() => {
                      if (user) {
                        setIsLoadingHighlights(true);
                        setHighlightsError(null);
                        axios.get(`https://f88-backend-production.up.railway.app/api/books/highlights/${user.id}`)
                          .then(response => {
                            const data = response.data as GetHighlightsResponse;
                            setHighlights(data.highlights);
                            setIsLoadingHighlights(false);
                          })
                          .catch(error => {
                            const errorMessage = error.code === 'NETWORK_ERROR' || error.message === 'Network Error'
                              ? 'No se pudo conectar al servidor. Los destacados estarán disponibles cuando se restablezca la conexión.'
                              : 'Error al cargar los destacados. Inténtalo de nuevo más tarde.';
                            setHighlightsError(errorMessage);
                            setIsLoadingHighlights(false);
                          });
                      }
                    }}
                    className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                  >
                    Reintentar
                  </button>
                </div>
              ) : highlights.length === 0 ? (
                <p className="text-gray-500 text-center">No tienes pasajes destacados aún.</p>
              ) : (
                <>
                  <div className="space-y-4 mb-4">
                    {currentHighlights.map((highlight, index) => {
                      const isOffline = offlineHighlights.some(oh => oh.id === highlight.id);
                      return (
                        <div key={highlight.id} className={`border-l-4 p-4 rounded relative ${isOffline ? 'bg-orange-50 border-orange-400' : 'bg-yellow-50 border-yellow-400'}`}>
                          {isOffline && (
                            <div className="flex items-center gap-1 mb-2 text-xs text-orange-600">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                              <span>Guardado localmente</span>
                            </div>
                          )}
                          <button
                            onClick={() => {
                              if (isOffline) {
                                // Remove from offline highlights
                                setOfflineHighlights(prev => prev.filter(h => h.id !== highlight.id));
                              } else {
                                // Try to delete from backend
                                axios.delete(`https://f88-backend-production.up.railway.app/api/books/highlights/${highlight.id}`)
                                  .then(() => {
                                    setHighlights(prev => {
                                      const newHighlights = prev.filter(h => h.id !== highlight.id);
                                      // Reset to page 1 if current page becomes empty
                                      const newTotalPages = Math.ceil((newHighlights.length + offlineHighlights.length) / highlightsPerPage);
                                      if (currentHighlightsPage > newTotalPages && newTotalPages > 0) {
                                        setCurrentHighlightsPage(newTotalPages);
                                      }
                                      return newHighlights;
                                    });
                                  })
                                  .catch(error => {
                                    console.error('Error deleting highlight:', error);
                                    if (!isFullscreenReading) {
                                      alert('Error al eliminar el destacado del servidor.');
                                    }
                                  });
                              }
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
                      );
                    })}
                  </div>

                  {/* Pagination Controls */}
                  {totalHighlightsPages > 1 && (
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <button
                        onClick={() => setCurrentHighlightsPage(prev => Math.max(1, prev - 1))}
                        disabled={currentHighlightsPage === 1}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-medium rounded-lg transition-all duration-200 text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Anterior
                      </button>

                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">
                          Página {currentHighlightsPage} de {totalHighlightsPages}
                        </span>
                        <div className="flex gap-1">
                          {Array.from({ length: Math.min(5, totalHighlightsPages) }, (_, i) => {
                            const pageNum = Math.max(1, Math.min(totalHighlightsPages - 4, currentHighlightsPage - 2)) + i;
                            if (pageNum > totalHighlightsPages) return null;
                            return (
                              <button
                                key={pageNum}
                                onClick={() => setCurrentHighlightsPage(pageNum)}
                                className={`px-3 py-1 text-sm font-medium rounded ${pageNum === currentHighlightsPage
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                  } transition-colors`}
                              >
                                {pageNum}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <button
                        onClick={() => setCurrentHighlightsPage(prev => Math.min(totalHighlightsPages, prev + 1))}
                        disabled={currentHighlightsPage === totalHighlightsPages}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-medium rounded-lg transition-all duration-200 text-sm"
                      >
                        Siguiente
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReadBookPage;