
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const navItems = [
  { label: 'Steps to Do', path: '/steps-to-do' },
  { label: 'What is F88', path: '/what-is-f88' },
  { label: 'Buy Book', path: '/buy-book' },
  { label: 'Buy Book & Advance Mentoring', path: '/buy-book-mentor' },
  { label: 'Customer Service', path: '/customer-service' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-100">
      <header className="w-full bg-slate-900 shadow-md sticky top-0 z-50 transition-all duration-300" id="main-header">
        <nav className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo at far left */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-1 transition-all duration-200 hover:scale-105 rounded-full p-0.5">
              <img src="/logo.png" alt="F88 Logo" className="h-10 object-contain transition-all duration-200" />
            </Link>
          </div>
          {/* Centered nav items */}
          {/* Responsive nav: hamburger for mobile */}
          <div className="flex-1 flex justify-center gap-1 md:gap-4">
            <div className="hidden md:flex gap-1 md:gap-4">
              {navItems.map((item) => {
                const isBuyBook = item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring';
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-2 py-1 rounded-md font-semibold text-sm md:text-base transition-all duration-200
                      ${isActive ? 'bg-blue-700 text-white shadow-md' : isBuyBook ? 'border border-blue-400 bg-blue-50 text-blue-900' : 'text-white'}
                      hover:scale-105 hover:bg-blue-200 hover:text-blue-900`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            {/* Hamburger menu for mobile */}
            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none p-2"
                onClick={() => {
                  const menu = document.getElementById('mobile-nav');
                  if (menu) menu.classList.toggle('hidden');
                }}
                aria-label="Open navigation menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div id="mobile-nav" className="absolute top-16 left-0 w-full bg-slate-900 shadow-lg hidden flex-col z-50">
                {navItems.map((item) => {
                  const isBuyBook = item.label === 'Buy Book' || item.label === 'Buy Book & Advance Mentoring';
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 border-b border-slate-800 font-semibold text-base transition-all duration-200
                        ${location.pathname === item.path ? 'bg-blue-700 text-white shadow-md' : 'text-white'}
                        ${isBuyBook ? 'border border-blue-400 bg-blue-50 text-blue-900' : ''}
                        hover:bg-blue-200 hover:text-blue-900`}
                      onClick={() => {
                        const menu = document.getElementById('mobile-nav');
                        if (menu) menu.classList.add('hidden');
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Login at far right */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/login" className="text-white font-semibold hover:underline text-sm md:text-base">
              Login
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 w-full min-h-screen p-0 m-0">
        {children}
      </main>
      {/* Sticky header shadow on scroll */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            const header = document.getElementById('main-header');
            if (!header) return;
            if (window.scrollY > 10) {
              header.classList.add('shadow-lg', 'bg-slate-900/95', 'backdrop-blur');
            } else {
              header.classList.remove('shadow-lg', 'bg-slate-900/95', 'backdrop-blur');
            }
          });
        `
      }} />
      <Footer />
    </div>
  );
};

export default Layout;
