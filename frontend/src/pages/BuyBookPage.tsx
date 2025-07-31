import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuyBookPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-lg mx-auto mt-12 p-8 rounded-3xl shadow-2xl bg-slate-50/90 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">Buy the Official F88 Book</h1>
      <p className="mb-6 text-gray-600 text-lg">Get your copy of the F88 guide and start your transformation journey. The book includes all the steps, principles, and strategies to help you achieve your goals.</p>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl shadow-md transition text-lg"
        onClick={() => navigate('/payment')}
      >
        Buy Book
      </button>
    </div>
  );
};

export default BuyBookPage;
