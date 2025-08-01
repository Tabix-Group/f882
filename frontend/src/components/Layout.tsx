import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const navItems = [
  { label: 'Pasos a Seguir', path: '/steps-to-do' },
  { label: '¿Qué es F88?', path: '/what-is-f88' },
  { label: 'Comprar Libro', path: '/buy-book' },
  { label: 'Libro + Mentoría Avanzada', path: '/buy-book-mentor' },
  { label: 'Atención al Socio', path: '/customer-service' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isHomePage && !isScrolled
    ? 'bg-transparent'
    : 'bg-black/95 backdrop-blur-sm shadow-lg';

  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white font-sans">
      {/* Header */}
      <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${headerClass}`}>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-transform cursor-pointer overflow-hidden w-[120px] md:w-[200px] lg:w-[220px]"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <img
              src={logoHovered ? "/favicon3.png" : "/favicon2.png"}
              alt="F88 Logo"
              className={`h-14 w-14 object-cover rounded-full drop-shadow-lg transition-all duration-300 ${logoHovered ? 'scale-105' : 'scale-100'}`}
            />
            <span
              className={`font-extrabold ${logoHovered ? 'text-base md:text-lg lg:text-xl' : 'text-2xl'} text-gray-300 transition-all duration-300 ${logoHovered ? 'scale-105' : 'scale-100'}`}
              style={{ fontFamily: 'Poppins, Arial, sans-serif', letterSpacing: '0.05em' }}
            >
              {logoHovered ? 'Fortitude' : 'F88'}
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
                  className={`transition-all duration-200 whitespace-nowrap hover:text-white relative group ${
                    isActive ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-200 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
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
              className="md:hidden p-2 text-gray-300 hover:text-white"
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
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 max-h-screen'
              : 'opacity-0 max-h-0 pointer-events-none'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-sm px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-lg font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
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
