import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FlipbookInitialPage from './FlipbookInitialPage';
import FlipbookFunctionalPage from './FlipbookFunctionalPage';
import FlipbookIdealPage from './FlipbookIdealPage';

const FlipbookPreviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { level } = useParams<{ level: string }>();

  const renderFlipbook = () => {
    switch (level?.toLowerCase()) {
      case 'inicial':
        return <FlipbookInitialPage />;
      case 'funcional':
        return <FlipbookFunctionalPage />;
      case 'ideal':
        return <FlipbookIdealPage />;
      default:
        return <FlipbookInitialPage />;
    }
  };

  return (
    <div className="relative">
      {renderFlipbook()}

      {/* Fixed Continue Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => navigate('/training-calendar')}
          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
        >
          <span>Continuar al Calendario</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FlipbookPreviewPage;