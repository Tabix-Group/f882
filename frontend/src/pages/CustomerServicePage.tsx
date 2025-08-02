import React from 'react';

const CustomerServicePage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 mb-4">
            Atención al Cliente
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Contáctanos en{' '}
            <a
              href="mailto:support@f88.com"
              className="text-blue-400 underline hover:text-blue-300 transition"
            >
              support@f88.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
