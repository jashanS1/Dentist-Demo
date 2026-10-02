import React from 'react';
import { Calendar, Phone, MessageSquare, ShieldCheck, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import AppointmentForm from '../components/forms/AppointmentForm';

export default function AppointmentPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="container max-w-4xl text-center space-y-4">
          <span className="badge-dark">
            Direct Concierge Scheduling
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            Schedule Your Visit
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reserve your unhurried consultation with our dental team. Select your preferred discipline, clinician, and arrival time below.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              100% Upfront Fee Transparency
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              Zero Rushed Appointments
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Painless Wand Anesthesia
            </span>
          </div>
        </div>
      </section>

      {/* Main Booking Content */}
      <section className="container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: The Interactive Booking Form */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                Patient Consultation Enquiry
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Please complete all required fields. We will contact you to confirm your appointment time.
              </p>
            </div>

            <AppointmentForm />
          </div>

          {/* Right Column: Direct Channels & Clinic Assurances */}
          <div className="lg:col-span-4 space-y-6">
            {/* Instant WhatsApp Card */}
            <div className="card-velora bg-linear-to-br from-emerald-950 to-slate-950 text-white p-6 rounded-3xl border border-emerald-800/40 shadow-xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Prefer to Book on WhatsApp?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our patient concierge on WhatsApp for instant availability check and question assistance.
              </p>
              <a
                href={clinicConfig.getWhatsAppUrl('Hello Vélora, I would like to book an appointment via WhatsApp.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-xs justify-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Launch WhatsApp Booking</span>
              </a>
            </div>

            {/* Telephone Call Card */}
            <div className="card-velora bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">Call Our Concierge Desk</h3>
              <p className="text-xs text-slate-600">
                Available Monday – Thursday 7:30am–6:30pm and Friday 8am–4pm.
              </p>
              <a
                href={`tel:${clinicConfig.phoneTel}`}
                className="btn-tel w-full text-xs justify-center"
              >
                <span>Call {clinicConfig.phoneDisplay}</span>
              </a>
            </div>

            {/* What to expect after booking */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-700">
                What Happens Next?
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Our reception verifies specialist availability for your date.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>You receive digital intake paperwork via email or SMS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Complimentary parking validation provided upon arrival.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
