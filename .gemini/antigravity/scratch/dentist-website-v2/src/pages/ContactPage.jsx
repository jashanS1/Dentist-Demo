import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  AlertCircle,
  CheckCircle,
  ShieldCheck,
  Navigation,
  Car,
  Train
} from 'lucide-react';
import { clinicConfig } from '../config/clinic';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please type your inquiry or message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="container max-w-4xl text-center space-y-4">
          <span className="badge-dark">
            Direct Concierge Channels
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            Connect with Vélora Dental Atelier
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our concierge desk is at your service. Contact us by phone, message us on WhatsApp, or send a secure enquiry below.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
              Send a General Inquiry
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mb-6">
              Have a question about scheduling, fees, or your oral health? Send a note to our reception desk.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-teal-50/70 border border-teal-200 rounded-2xl space-y-3">
                <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900">
                  Message Transmitted (Demo Only)
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name}! In this portfolio demo, submissions are processed locally. For real-time contact, you can reach out via WhatsApp below!
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={clinicConfig.getWhatsAppUrl(`Hello, this is ${formData.name}. Regarding: ${formData.message}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Question', message: '' });
                    }}
                    className="btn-secondary text-xs"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="text-teal-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Jessica Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="text-teal-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="jessica@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Inquiry Topic
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-select"
                  >
                    <option value="General Question">General Clinic Question</option>
                    <option value="New Patient Consultation">New Patient Consultation</option>
                    <option value="Insurance / Financing">Insurance & Fee Inquiry</option>
                    <option value="Cosmetic Smile Makeover">Cosmetic Smile Makeover</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="Emergency Care">Emergency Dental Care</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Your Message <span className="text-teal-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can our clinical concierge assist you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`form-textarea ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary text-xs py-3 px-6">
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Concierge</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Cards */}
            <div className="card-velora bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-base text-slate-900 border-b border-slate-100 pb-2">
                Direct Contact Channels
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-slate-900 block">{clinicConfig.address}</span>
                    <span className="text-slate-500 text-xs">{clinicConfig.neighborhood}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-500 text-[11px] block">General Reception:</span>
                    <a href={`tel:${clinicConfig.phoneTel}`} className="font-bold text-teal-800 hover:underline">
                      {clinicConfig.phoneDisplay}
                    </a>
                    <span className="block text-amber-700 font-semibold text-xs mt-0.5">
                      Emergency On-Call: {clinicConfig.emergencyPhoneDisplay}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <span className="text-slate-500 text-[11px] block">Email Concierge:</span>
                    <a href={`mailto:${clinicConfig.email}`} className="font-bold text-slate-800 hover:underline">
                      {clinicConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                  <div className="space-y-1 text-xs">
                    <span className="font-bold text-slate-900 block">Clinic Hours:</span>
                    {clinicConfig.hours.map((h, i) => (
                      <div key={i} className="text-slate-600">
                        {h.days}: <span className="font-medium text-slate-800">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={clinicConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full text-xs justify-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Launch Official WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Directions & Parking */}
            <div className="card-velora bg-slate-50 p-6 rounded-3xl border border-slate-200/80 space-y-3 text-xs">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-teal-600" />
                Transit & Free Parking Guide
              </h4>
              <div className="space-y-2 text-slate-600">
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>By Car:</strong> Located off Highway 1. Free patient parking garage located under the building with validated ticket.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span><strong>By Public Transit:</strong> SamTrans bus routes 110 & 112 stop directly outside the Coastal Arts Center.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
