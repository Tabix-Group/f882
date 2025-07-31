import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const heroImageUrl =
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80";

  // Animación fade-in al hacer scroll
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.fadein').forEach((el) => {
        if (el instanceof HTMLElement) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 80) {
            el.classList.add('opacity-100', 'translate-y-0');
          }
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  // Slider de testimonios
  const testimonials = [
    {
      name: 'Lucas M.',
      text: 'F88 changed my life. I feel stronger and more confident every day!',
    },
    {
      name: 'Sofia R.',
      text: 'The program is motivating and the community is amazing.',
    },
    {
      name: 'Martin G.',
      text: 'I achieved my goals faster than I thought possible.',
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialInterval = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => {
      if (testimonialInterval.current) clearInterval(testimonialInterval.current);
    };
  }, []);

  // Cards de logros
  const achievements = [
    { icon: '💪', label: 'Physical Strength' },
    { icon: '🧠', label: 'Mental Clarity' },
    { icon: '💡', label: 'Emotional Balance' },
    { icon: '🎯', label: 'Goal Achievement' },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          `linear-gradient(rgba(10,25,41,0.45), rgba(10,25,41,0.55)), url('${heroImageUrl}')`,
      }}
    >
      <div className="w-full flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-white font-extrabold text-5xl md:text-6xl mb-4 tracking-tight drop-shadow-lg animate-fadein">Fortitude F88</h1>
        <h2 className="text-white/90 text-xl md:text-2xl font-medium mb-8 drop-shadow">Gain, Physical, Mental, Emotional, Character, Will</h2>
        <button
          aria-label="Get Started"
          className="bg-gradient-to-r from-blue-400 to-blue-700 text-white font-bold py-3 px-10 rounded-full text-lg md:text-xl shadow-xl hover:scale-105 hover:from-blue-700 hover:to-blue-400 transition-all duration-200 mb-8"
          onClick={() => navigate('/steps-to-do')}
        >
          Get Started
        </button>
        {/* Slider de testimonios */}
        <div className="w-full max-w-xl mx-auto mb-12 fadein opacity-0 translate-y-8 transition-all duration-700">
          <div className="bg-white/80 rounded-2xl shadow-lg px-6 py-6 min-h-[120px] flex flex-col items-center">
            <p className="text-lg text-slate-800 italic mb-2">“{testimonials[currentTestimonial].text}”</p>
            <span className="text-blue-700 font-bold">{testimonials[currentTestimonial].name}</span>
          </div>
        </div>
        {/* Cards de logros */}

      </div>
    </div>
  );
};

export default HomePage;
