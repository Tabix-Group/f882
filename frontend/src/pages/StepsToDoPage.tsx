import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepsToDoPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xl mx-auto mt-12 p-8 rounded-3xl shadow-2xl bg-slate-50/90">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 text-center">Welcome to the F88 Program</h1>
      <p className="mb-4 text-gray-600 text-lg text-center">Follow these steps to advance in your transformation:</p>
      <ol className="list-decimal pl-6 text-base md:text-lg text-gray-800 space-y-1 mb-6">
        <li>Complete your registration</li>
        <li>Make your payment</li>
        <li>Access the program materials</li>
        <li>Access personalized mentoring</li>
        <li>Access your book</li>
        <li>Access PE training</li>
      </ol>
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
          onClick={() => navigate('/register')}
        >
          Go to Registration
        </button>
        <button
          className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
          onClick={() => navigate('/login')}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default StepsToDoPage;
