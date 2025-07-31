import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyBookMentorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-lg mx-auto mt-12 p-8 rounded-3xl shadow-2xl bg-slate-50/90 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">Book + Advanced Mentoring</h1>
      <p className="mb-6 text-gray-600 text-lg">Get the official F88 book and access our advanced mentoring program. This package includes the guide and personalized sessions to maximize your results.</p>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl shadow-md transition text-lg"
        onClick={() => navigate('/payment')}
      >
        Buy Book + Mentoring
      </button>
    </div>
  );
};

export default BuyBookMentorPage;
