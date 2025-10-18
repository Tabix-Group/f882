import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useAuth } from '../contexts/AuthContext';

const baseNavItems = [
  { label: 'Pasos a Seguir', path: '/steps-to-do' },
  { label: '¿Qué es F88?', path: '/what-is-f88' },
  { label: 'Comprar', path: '/buy-book' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = user ? [...baseNavItems, { label: 'Dashboard', path: '/dashboard' }, { label: 'Preguntas Frecuentes', path: '/faq' }] : [...baseNavItems, { label: 'Preguntas Frecuentes', path: '/faq' }];

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  const lastMenuItemRef = useRef<HTMLAnchorElement | null>(null);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // track screen size to control mobile button visibility
    const handleResize = () => {
      // Screen size tracking removed - mobile button visibility handled by CSS classes
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    // call once to set initial state
    handleResize();
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

  // Handle clicks outside user menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  // Adaptive header: transparent on home until user scrolls, darker/translucent on other pages
  const isHome = location.pathname === '/';
  const headerClass = isScrolled
    ? 'backdrop-blur-sm bg-neutral-900/70 border-b border-neutral-800 shadow-md'
    : isHome
      ? 'bg-transparent'
      : 'bg-neutral-900/90';

  // logo is static now (always favicon2 + 'F88')

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white font-sans">
      {/* Header */}
      <header className={`w-full fixed top-0 z-40 transition-all duration-300 ${headerClass}`}>
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
          <div className="hidden xl:flex gap-8 items-center text-lg font-semibold">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-all duration-200 whitespace-nowrap relative group ${isActive ? 'text-blue-400' : 'text-gray-200'} hover:opacity-90`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-200 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                </Link>
              );
            })}
          </div>

          {/* User Info or Login */}
          <div className="hidden xl:flex items-center gap-3">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                {/* User Profile Button - Clickable */}
                <button
                  onClick={() => {
                    setIsUserMenuOpen(!isUserMenuOpen);
                    setIsMobileMenuOpen(false); // Close mobile menu when opening user menu
                  }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2 hover:bg-white/10 transition-all duration-300 hover:border-white/20 cursor-pointer group"
                >
                  {/* User Avatar */}
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  {/* User Info */}
                  <div className="flex flex-col items-start">
                    <span className="text-white font-medium text-sm leading-tight">
                      {user.name}
                    </span>
                    <span className="text-gray-400 text-xs">Usuario Premium</span>
                  </div>

                  {/* Dropdown Arrow */}
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-neutral-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl py-2 z-60">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm">{user.name}</p>
                          <p className="text-gray-400 text-xs">{user.email}</p>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      {/* Settings (placeholder) */}
                      <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 group">
                        <div className="p-2 bg-gray-500/10 rounded-lg group-hover:bg-gray-500/20 transition-colors duration-200">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Configuración</p>
                          <p className="text-xs text-gray-400">Ajustes de cuenta</p>
                        </div>
                      </button>
                    </div>

                    {/* Logout */}
                    <div className="border-t border-white/10 pt-2">
                      <button
                        onClick={() => {
                          logout();
                          navigate('/');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200 group"
                      >
                        <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors duration-200">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Cerrar Sesión</p>
                          <p className="text-xs text-gray-400">Salir de tu cuenta</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 border border-blue-500/20"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                <span>Ingresar</span>
              </Link>
            )}

            {/* Mobile Menu Button is rendered outside this desktop-only container (see after) */}
          </div>
        </nav>

        {/* Mobile Menu Button - render outside the desktop-only container so it's visible on small screens */}
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsUserMenuOpen(false); // Close user menu when opening mobile menu
          }}
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label="Abrir menú"
          className="fixed top-4 right-4 xl:hidden z-50 p-2 text-white bg-black/75 hover:opacity-90 rounded-lg border border-white/20 focus:outline-none"
          data-testid="mobile-menu-button"
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 xl:hidden"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsUserMenuOpen(false); // Also close user menu
            }}
            aria-hidden="true"
            data-testid="mobile-menu-overlay"
          />
        )}

        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          role="menu"
          aria-hidden={!isMobileMenuOpen}
          className={`block xl:hidden fixed left-0 right-0 top-16 transform origin-top motion-safe:transition-transform motion-safe:duration-200 transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? 'opacity-100 max-h-[calc(100vh-4rem)] z-50 translate-y-0'
            : 'opacity-0 max-h-0 pointer-events-none -translate-y-2'
            }`}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
          }}
        >
          <div className="bg-neutral-900/95 px-6 py-6 space-y-4 border-t border-neutral-800 overflow-auto">
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                role="menuitem"
                tabIndex={0}
                className="block text-lg font-semibold text-gray-100 hover:opacity-90 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                ref={idx === 0 ? (el) => { firstMenuItemRef.current = el as HTMLAnchorElement; if (isMobileMenuOpen && el) (el as HTMLAnchorElement).focus(); } : (idx === navItems.length - 1 ? (el) => { lastMenuItemRef.current = el as HTMLAnchorElement; } : undefined)}
              >
                {item.label}
              </Link>
            ))}
            {user && (
              <div className="pt-6 border-t border-gray-600/50">
                {/* User Profile Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 mb-4 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    {/* User Avatar */}
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                      <span className="text-white font-medium text-base">
                        {user.name}
                      </span>
                      <span className="text-gray-400 text-sm">Usuario Premium</span>
                    </div>

                    {/* Dashboard icon removed - now in main navigation */}
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-2">
                    {/* Panel button removed - now in main navigation */}
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium px-4 py-3 rounded-xl transition-all duration-300 shadow-lg border border-red-500/20"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Cerrar Sesión</span>
                </button>

                {/* Settings (placeholder) */}
                <button className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white font-medium px-4 py-3 rounded-xl transition-all duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Configuración</span>
                </button>
              </div>
            )}
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
