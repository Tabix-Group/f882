import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepsToDoPage from './pages/StepsToDoPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import WhatIsF88Page from './pages/WhatIsF88Page';
import VideosTestimonialsPage from './pages/VideosTestimonialsPage';
import BuyBookPage from './pages/BuyBookPage';
import BuyBookMentorPage from './pages/BuyBookMentorPage';
import ProceedToPaymentPage from './pages/ProceedToPaymentPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AccessProgramMaterialsPage from './pages/AccessProgramMaterialsPage';
import AccessMentorPage from './pages/AccessMentorPage';
import StartF88FitnessChangePage from './pages/StartF88FitnessChangePage';
import AccessWill88DayProgramPage from './pages/AccessWill88DayProgramPage';
import EndPage from './pages/EndPage';
import CustomerServicePage from './pages/CustomerServicePage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import ReadBookPage from './pages/ReadBookPage';
import UserDashboard from './pages/UserDashboard';
import JordanChat from './pages/JordanChat';
import F88AssessmentPage from './pages/F88AssessmentPage';
import TrainingCalendarPage from './pages/TrainingCalendarPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Fullscreen routes without Layout */}
          <Route path="/jordan-chat" element={<JordanChat />} />
          <Route path="/read-book" element={<ReadBookPage />} />
          <Route path="/training-calendar" element={<TrainingCalendarPage />} />

          {/* Regular routes with Layout */}
          <Route path="/*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/steps-to-do" element={<StepsToDoPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/what-is-f88" element={<WhatIsF88Page />} />
                <Route path="/videos-testimonials" element={<VideosTestimonialsPage />} />
                <Route path="/buy-book" element={<BuyBookPage />} />
                <Route path="/buy-book-mentor" element={<BuyBookMentorPage />} />
                <Route path="/proceed-to-payment" element={<ProceedToPaymentPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/access-program-materials" element={<AccessProgramMaterialsPage />} />
                <Route path="/access-mentor" element={<AccessMentorPage />} />
                <Route path="/start-f88-fitness-change" element={<StartF88FitnessChangePage />} />
                <Route path="/access-will-88-day-program" element={<AccessWill88DayProgramPage />} />
                <Route path="/end" element={<EndPage />} />
                <Route path="/faq" element={<CustomerServicePage />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="/f88-assessment" element={<F88AssessmentPage />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
