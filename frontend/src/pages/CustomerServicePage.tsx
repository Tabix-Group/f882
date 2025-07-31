import React from 'react';

const CustomerServicePage: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto mt-12 p-8 rounded-3xl shadow-2xl bg-slate-50/90 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2">Customer Service</h1>
      <p className="mb-4 text-gray-600 text-lg">Contact us at <a href="mailto:support@f88.com" className="text-blue-700 underline">support@f88.com</a></p>
    </div>
  );
};

export default CustomerServicePage;
