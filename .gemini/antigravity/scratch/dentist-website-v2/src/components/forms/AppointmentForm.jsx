import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, User, Mail, Phone, Stethoscope, MessageSquare, CheckCircle, AlertCircle, Sparkles, X } from 'lucide-react';
import { clinicConfig } from '../../config/clinic';
import { servicesData } from '../../data/servicesData';
import { dentistsData } from '../../data/dentistsData';

export default function AppointmentForm({ preselectedService = '', preselectedDoctor = '' }) {
  const [searchParams] = useSearchParams();
  
  // Calculate today's date in YYYY-MM-DD for min date
  const todayISO = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceSlug: preselectedService || searchParams.get('service') || 'general-dentistry',
    doctorSlug: preselectedDoctor || searchParams.get('doctor') || 'any',
    date: '',
    timeSlot: 'morning',
    patientType: 'new',
    notes: ''
  });

  useEffect(() => {
    const qService = searchParams.get('service');
    const qDoctor = searchParams.get('doctor');
    if (qService) setFormData((prev) => ({ ...prev, serviceSlug: qService }));
    if (qDoctor) setFormData((prev) => ({ ...prev, doctorSlug: qDoctor }));
  }, [searchParams]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full legal name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 8) {
      newErrors.phone = 'Please provide a valid phone number (at least 8 digits).';
    }

    if (!formData.serviceSlug) {
      newErrors.serviceSlug = 'Please select a requested dental discipline.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select your preferred appointment date.';
    } else if (formData.date < todayISO) {
      newErrors.date = 'Past appointment dates are not permitted. Please select today or a future date.';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please choose your preferred time window.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field when modified
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const selectedServiceObj = servicesData.find((s) => s.slug === formData.serviceSlug);
  const selectedDoctorObj = dentistsData.find((d) => d.slug === formData.doctorSlug);

  return (
    <div className="w-full">
      {/* If Form is submitted, display the Confirmation Modal / Summary */}
      {submittedData ? (
        <div className="card-velora bg-white border border-teal-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl animate-fade-in">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-500/20 text-teal-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-9 h-9" />
            </div>

            <span className="badge-velora">
              Enquiry Received (Frontend Demo)
            </span>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              Thank You, {submittedData.fullName}!
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              Your appointment reservation request has been processed locally in this frontend demonstration.
            </p>

            {/* Demo Notice Banner */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-amber-800">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Notice: Demo Environment Only</span>
              </div>
              <p className="text-amber-800/90 leading-relaxed">
                Because this website is a portfolio demonstration without an active medical CRM backend, this inquiry is not permanently stored or delivered to a live clinic desk. To simulate a real interaction, you can send these exact details to our concierge via WhatsApp below!
              </p>
            </div>

            {/* Submitted Summary Details */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-left space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Requested Discipline:</span>
                <span className="font-semibold text-slate-900">{selectedServiceObj?.title || submittedData.serviceSlug}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Preferred Specialist:</span>
                <span className="font-semibold text-slate-900">{selectedDoctorObj?.shortName || 'Next Available Specialist'}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Preferred Date & Window:</span>
                <span className="font-semibold text-teal-800">{submittedData.date} ({submittedData.timeSlot.toUpperCase()})</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200/60">
                <span className="text-slate-500 font-medium">Patient Status:</span>
                <span className="font-semibold text-slate-900">{submittedData.patientType === 'new' ? 'New Patient (Comprehensive Exam)' : 'Returning Patient'}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 font-medium">Contact Phone:</span>
                <span className="font-semibold text-slate-900">{submittedData.phone}</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={clinicConfig.getAppointmentWhatsAppUrl({
                  service: selectedServiceObj?.title || submittedData.serviceSlug,
                  doctor: selectedDoctorObj?.shortName || 'Next Available',
                  date: submittedData.date,
                  name: submittedData.fullName
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-whatsapp text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Transmit via WhatsApp</span>
              </a>

              <a
                href={`tel:${clinicConfig.phoneTel}`}
                className="w-full sm:w-auto btn-tel text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic Desk</span>
              </a>

              <button
                type="button"
                onClick={() => setSubmittedData(null)}
                className="w-full sm:w-auto btn-secondary text-xs"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* The Booking Form */
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Patient Status Switcher */}
          <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-2xl">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, patientType: 'new' })}
              className={`py-2.5 text-xs font-bold rounded-xl transition-all ${
                formData.patientType === 'new'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              I am a New Patient
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, patientType: 'returning' })}
              className={`py-2.5 text-xs font-bold rounded-xl transition-all ${
                formData.patientType === 'returning'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Returning Patient
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="form-label">
                Full Legal Name <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="e.g. Victoria Harrison"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`form-input pl-10 ${errors.fullName ? 'border-red-500' : ''}`}
                  aria-invalid={!!errors.fullName}
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.fullName && <p className="form-error" role="alert">{errors.fullName}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="form-label">
                Email Address <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="victoria@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  aria-invalid={!!errors.email}
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.email && <p className="form-error" role="alert">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="form-label">
                Mobile Phone <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                  aria-invalid={!!errors.phone}
                />
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.phone && <p className="form-error" role="alert">{errors.phone}</p>}
            </div>

            {/* Service Requested */}
            <div>
              <label htmlFor="serviceSlug" className="form-label">
                Requested Dental Discipline <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <select
                  id="serviceSlug"
                  name="serviceSlug"
                  value={formData.serviceSlug}
                  onChange={handleChange}
                  className={`form-select pl-10 ${errors.serviceSlug ? 'border-red-500' : ''}`}
                  aria-invalid={!!errors.serviceSlug}
                >
                  {servicesData.map((svc) => (
                    <option key={svc.slug} value={svc.slug}>
                      {svc.title} ({svc.badge})
                    </option>
                  ))}
                </select>
                <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.serviceSlug && <p className="form-error" role="alert">{errors.serviceSlug}</p>}
            </div>

            {/* Preferred Doctor */}
            <div>
              <label htmlFor="doctorSlug" className="form-label">
                Preferred Clinician (Optional)
              </label>
              <select
                id="doctorSlug"
                name="doctorSlug"
                value={formData.doctorSlug}
                onChange={handleChange}
                className="form-select"
              >
                <option value="any">First Available Specialist</option>
                {dentistsData.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name} — {d.role.split('&')[0]}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label htmlFor="date" className="form-label">
                Preferred Date <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="date"
                  name="date"
                  type="date"
                  min={todayISO}
                  value={formData.date}
                  onChange={handleChange}
                  className={`form-input pl-10 ${errors.date ? 'border-red-500' : ''}`}
                  aria-invalid={!!errors.date}
                />
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.date && <p className="form-error" role="alert">{errors.date}</p>}
            </div>
          </div>

          {/* Preferred Time Window */}
          <div>
            <label className="form-label">
              Preferred Time Window <span className="text-teal-600">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'morning', label: 'Morning (8:00 AM – 12:00 PM)' },
                { id: 'afternoon', label: 'Afternoon (12:00 PM – 3:30 PM)' },
                { id: 'evening', label: 'Late Day (3:30 PM – 6:30 PM)' }
              ].map((slot) => (
                <label
                  key={slot.id}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all text-xs font-medium ${
                    formData.timeSlot === slot.id
                      ? 'border-teal-600 bg-teal-50/70 text-teal-900 font-semibold shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="timeSlot"
                    value={slot.id}
                    checked={formData.timeSlot === slot.id}
                    onChange={handleChange}
                    className="accent-teal-700"
                  />
                  <span>{slot.label}</span>
                </label>
              ))}
            </div>
            {errors.timeSlot && <p className="form-error" role="alert">{errors.timeSlot}</p>}
          </div>

          {/* Optional Message */}
          <div>
            <label htmlFor="notes" className="form-label">
              Specific Concerns or Medical Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Tell us about any symptoms, dental anxiety, or specific cosmetic goals..."
              value={formData.notes}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto btn-primary py-3.5 px-8 text-sm"
            >
              {isSubmitting ? (
                <span>Validating Reservation...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-teal-300" />
                  <span>Request Priority Consultation</span>
                </>
              )}
            </button>

            <span className="text-xs text-slate-500">
              No immediate payment required · 100% upfront fee transparency
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
