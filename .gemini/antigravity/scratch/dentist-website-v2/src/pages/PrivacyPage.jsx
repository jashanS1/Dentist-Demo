import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, ArrowLeft } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 border-b border-slate-800">
        <div className="container max-w-4xl space-y-4">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:underline mb-2">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <span className="badge-dark">
            Patient Data Security
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy & Health Information Rights
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Last Updated: October 2026 · Vélora Dental Atelier Clinical Compliance
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container max-w-4xl">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-sm leading-relaxed text-slate-700">
          {/* Portfolio Disclaimer */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
            <strong className="font-bold text-amber-950">Portfolio Demonstration Notice:</strong> Vélora Dental Atelier is a fictional dental clinic website designed for portfolio presentation and lead generation demonstration. No real protected health information (PHI) is collected, stored in commercial databases, or transmitted to healthcare institutions through this demo website.
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <span>1. Commitment to Health Information Privacy</span>
            </h2>
            <p>
              In clinical operations, Vélora Dental Atelier complies rigorously with the Health Insurance Portability and Accountability Act (HIPAA), California Confidentiality of Medical Information Act (CMIA), and ethical guidelines set forth by the American Dental Association (ADA). We safeguard all electronic and physical patient health information against unauthorized disclosure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-teal-600" />
              <span>2. Collection of Patient Contact & Clinical Data</span>
            </h2>
            <p>
              When inquiring about appointments or dental consultations through this website, you may provide contact details including your name, email, telephone number, preferred treatment disciplines, and dental health concerns. This information is utilized solely for coordinating your consultation and verifying insurance coverage.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-600" />
              <span>3. Telecommunications, WhatsApp & Phone Links</span>
            </h2>
            <p>
              Links initiating WhatsApp chats or phone calls direct your device to external telecommunication services. We recommend exercising discretion and avoiding transmitting sensitive medical diagnoses or financial credentials over unencrypted standard messaging channels.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
              4. Cookies & Web Analytics
            </h2>
            <p>
              This website employs essential session cookies and performance telemetry to guarantee responsive layout rendering and navigation persistence. We do not sell, rent, or monetize patient browsing records to third-party advertising networks.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900">
              5. Contacting the Compliance Officer
            </h2>
            <p>
              If you have inquiries regarding privacy practices, records requests, or data deletion, please contact our administrative coordinator:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1 text-slate-600">
              <span className="font-bold text-slate-800 block">Vélora Dental Atelier — Privacy Office</span>
              <span>{clinicConfig.address}</span>
              <span className="block">Email: {clinicConfig.email}</span>
              <span>Telephone: {clinicConfig.phoneDisplay}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
