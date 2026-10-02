import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TopBanner from './components/layout/TopBanner';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingChatbot from './components/chatbot/FloatingChatbot';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import DentistsPage from './pages/DentistsPage';
import DentistDetailPage from './pages/DentistDetailPage';
import AppointmentPage from './pages/AppointmentPage';
import PatientInfoPage from './pages/PatientInfoPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-900 selection:bg-teal-700 selection:text-white">
      <ScrollToTop />
      
      {/* Top Announcements & Hours Banner */}
      <TopBanner />

      {/* Main Sticky Navigation Bar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/dentists" element={<DentistsPage />} />
          <Route path="/dentists/:slug" element={<DentistDetailPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/patient-info" element={<PatientInfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Comprehensive Atelier Footer */}
      <Footer />

      {/* Interactive Floating Dental Concierge Chatbot */}
      <FloatingChatbot />
    </div>
  );
}
