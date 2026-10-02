import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calendar, Stethoscope, Phone, AlertTriangle, ArrowRight } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

export default function NotFoundPage() {
  return (
    <div className="container max-w-3xl py-20 sm:py-28 text-center space-y-6">
      <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mx-auto shadow-inner">
        <AlertTriangle className="w-8 h-8" />
      </div>

      <span className="badge-velora">
        Error 404 · Page Not Located
      </span>

      <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
        Looking for a Dental Page?
      </h1>

      <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
        The clinic URL you entered could not be found or may have been reorganized. Please select one of our primary clinical destinations below:
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link to="/" className="btn-primary text-xs">
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <Link to="/services" className="btn-secondary text-xs">
          <Stethoscope className="w-4 h-4 text-teal-700" />
          <span>Explore 10 Dental Services</span>
        </Link>

        <Link to="/appointment" className="btn-teal text-xs">
          <Calendar className="w-4 h-4" />
          <span>Schedule an Appointment</span>
        </Link>
      </div>

      <div className="pt-8 border-t border-slate-200/80 max-w-md mx-auto text-xs text-slate-500">
        Experiencing a sudden dental emergency? Call our priority line directly at{' '}
        <a href={`tel:${clinicConfig.emergencyPhoneTel}`} className="text-teal-700 font-bold hover:underline">
          {clinicConfig.emergencyPhoneDisplay}
        </a>.
      </div>
    </div>
  );
}
