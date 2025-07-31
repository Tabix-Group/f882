import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy data for chapters and audio (replace with real data/fetch)
const chapters = [
  {
    title: 'Chapter 1: Introduction',
    text: `Este es el cayo emocional que construyes con el tiempo y de poco a poco. La mente es un 
primer filtro de información,  tu fuerza emocional es tu segundo filtro o búfer. 
Las experiencias se disparan  en tu mente y tu código de creencias de fortaleza reestudiado como 
tu código “The GRIT” las traduce y manda al cuerpo como realidades de sensaciones. 
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
  const navigate = useNavigate();

  // Dummy chatbot response (replace with real AI integration)
  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setChat([...chat, { sender: 'user', message: input }]);
    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { sender: 'bot', message: `I'm your reading assistant! You asked: "${input}". (Here would be a smart answer about the book.)` },
      ]);
    }, 800);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row gap-8">
        {/* Book reading section */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">{chapters[currentChapter].title}</h2>
          <div className="prose prose-lg max-w-none text-gray-800 bg-slate-50 rounded-xl p-4 mb-4 min-h-[200px]">
            {chapters[currentChapter].text}
          </div>
          <div className="flex gap-2 mb-4">
            <button
              className="px-4 py-2 rounded-lg bg-blue-200 text-blue-900 font-semibold disabled:opacity-50"
              onClick={() => setCurrentChapter((c) => Math.max(0, c - 1))}
              disabled={currentChapter === 0}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-blue-700 text-white font-semibold disabled:opacity-50"
              onClick={() => setCurrentChapter((c) => Math.min(chapters.length - 1, c + 1))}
              disabled={currentChapter === chapters.length - 1}
            >
              Next
            </button>
          </div>
          {/* Audio book player */}
          <div className="mb-4">
            <audio
              src={audioUrls[currentChapter]}
              controls
              className="w-full"
              onPlay={() => setAudioPlaying(true)}
              onPause={() => setAudioPlaying(false)}
            />
            <div className="text-sm text-gray-600 mt-1">
              {audioPlaying ? 'Playing audio...' : 'Audio book version available.'}
            </div>
          </div>
        </div>
        {/* Chatbot section */}
        <div className="w-full md:w-80 flex flex-col bg-slate-100 rounded-2xl shadow-lg p-4">
          <h3 className="text-lg font-bold text-blue-700 mb-2">Reading Assistant</h3>
          <div className="flex-1 overflow-y-auto mb-2 max-h-64">
            {chat.length === 0 && (
              <div className="text-gray-400 text-sm text-center">Ask me anything about this chapter!</div>
            )}
            {chat.map((msg, idx) => (
              <div key={idx} className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-xl max-w-[80%] ${msg.sender === 'user' ? 'bg-blue-200 text-blue-900' : 'bg-white text-gray-700 border'}`}>
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleChat} className="flex gap-2 mt-auto">
            <input
              type="text"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ask about the book..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReadBookPage;
