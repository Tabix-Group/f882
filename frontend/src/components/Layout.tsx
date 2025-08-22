import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const navItems = [
  { label: 'Pasos a Seguir', path: '/steps-to-do' },
  { label: '¿Qué es F88?', path: '/what-is-f88' },
  { label: 'Comprar', path: '/buy-book' },
  { label: 'Atención al Socio', path: '/customer-service' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  const lastMenuItemRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // focus trap & keyboard handling for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
      if (e.key === 'Tab') {
        const first = firstMenuItemRef.current;
        const last = lastMenuItemRef.current;
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    // set focus to first menu item when opening
    setTimeout(() => firstMenuItemRef.current?.focus(), 0);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isMobileMenuOpen]);

  // Adaptive header: transparent on home until user scrolls, darker/translucent on other pages
  const isHome = location.pathname === '/';
  const headerClass = isScrolled
    ? 'bg-neutral-900/95 border-b border-neutral-800 shadow-md'
    : isHome
      ? 'bg-transparent'
      : 'bg-neutral-900/90';

  // logo is static now (always favicon2 + 'F88')

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white font-sans">
      {/* Header */}
      <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${headerClass}`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-transform cursor-pointer overflow-hidden w-[120px] md:w-[200px] lg:w-[220px]"
          >
            <div className="h-14 w-14 aspect-square rounded-full overflow-hidden flex-shrink-0 drop-shadow transition-transform duration-300 transform will-change-transform hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl">
              <img
                src="/favicon2.png"
                alt="F88 Logo"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <span
              className="font-extrabold text-2xl text-white transition-transform duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Poppins, Arial, sans-serif', letterSpacing: '0.02em' }}
            >
              F88
            </span>
          </Link>
          {/* Navigation - Desktop */}
          <div className="hidden md:flex gap-8 items-center text-lg font-semibold">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-all duration-200 whitespace-nowrap relative group ${(!isScrolled && isHome) ? (isActive ? 'text-blue-300' : 'text-white') : (isActive ? 'text-blue-400' : 'text-gray-200')
                    } hover:opacity-90`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-200 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </Link>
              );
            })}
          </div>

          {/* Ingresar */}
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Ingresar
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Abrir menú"
              className={`md:hidden p-2 ${(!isScrolled && isHome) ? 'text-white' : 'text-gray-100'} hover:opacity-90`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? 'opacity-100 max-h-screen'
            : 'opacity-0 max-h-0 pointer-events-none'
            }`}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
          }}
        >
          <div className={`${(!isScrolled && isHome) ? 'bg-transparent' : 'bg-neutral-900/95'} px-6 py-6 space-y-4 border-t ${(!isScrolled && isHome) ? '' : 'border-neutral-800'}`}>
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-lg font-semibold ${(!isScrolled && isHome) ? 'text-white' : 'text-gray-100'} hover:opacity-90 transition-colors`}
                onClick={() => setIsMobileMenuOpen(false)}
                ref={idx === 0 ? (el) => { if (isMobileMenuOpen && el) (el as HTMLAnchorElement).focus(); } : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content with padding for fixed header */}
      <main className="flex-1 w-full pt-20">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
