import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccessMentorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-xl mx-auto mt-12 p-8 rounded-3xl shadow-2xl bg-slate-50/90 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">Mentoría Personalizada F88</h1>
      <p className="mb-4 text-gray-600 text-lg">Conéctate con tu mentor y recibe orientación profesional durante todo el programa.</p>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-xl shadow-md transition text-lg mb-2"
      >
        Acceder a Mentoría
      </button>
      <button
        type="button"
        onClick={() => navigate('/steps-to-do')}
        className="w-full mt-4 text-blue-700 hover:underline font-semibold text-center"
      >
        Volver a los pasos
      </button>
    </div>
  );
};

export default AccessMentorPage;
