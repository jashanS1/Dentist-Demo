import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { clinicConfig } from '../../config/clinic';
import { servicesData } from '../../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-[#090E17] text-slate-400 text-sm border-t border-slate-800">
      {/* Top Pre-Footer Callout */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800/60 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Prioritizing Your Comfort & Long-Term Vitality
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to experience modern, anxiety-free dentistry?
            </h3>
            <p className="text-slate-400 mt-2 max-w-xl">
              Book a bespoke consultation or connect with our concierge team on WhatsApp for same-day availability.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/20"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={clinicConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href={`tel:${clinicConfig.phoneTel}`}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>{clinicConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">VÉLORA</span>
                <span className="block text-[10px] tracking-[0.2em] font-semibold text-teal-400 uppercase">
                  Dental Atelier
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Contemporary precision dentistry elevated by boutique hospitality. We specialize in biomimetic enamel preservation, 3D guided implantology, and natural cosmetic transformations.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{clinicConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${clinicConfig.phoneTel}`} className="hover:text-white transition-colors">
                  {clinicConfig.phoneDisplay}
                </a>
                <span className="text-slate-600">·</span>
                <span className="text-amber-400 font-medium">Emergency: {clinicConfig.emergencyPhoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${clinicConfig.email}`} className="hover:text-white transition-colors">
                  {clinicConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Specialized Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Dental Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 6).map((svc) => (
                <li key={svc.slug}>
                  <Link to={`/services/${svc.slug}`} className="hover:text-teal-400 transition-colors">
                    {svc.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-teal-400 hover:text-teal-300 font-semibold block pt-1">
                  View All 10 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Patients */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              Patient Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-teal-400 transition-colors">
                  About Vélora Atelier
                </Link>
              </li>
              <li>
                <Link to="/dentists" className="hover:text-teal-400 transition-colors">
                  Our Specialists
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-teal-400 transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link to="/patient-info" className="hover:text-teal-400 transition-colors">
                  First Visit Checklist
                </Link>
              </li>
              <li>
                <Link to="/patient-info" className="hover:text-teal-400 transition-colors">
                  Insurance & Financing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors">
                  Location & Directions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-teal-400 transition-colors">
                  Privacy Policy & Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Opening Hours & Trust */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-teal-400" />
              Clinic Hours
            </h4>
            <div className="space-y-2.5 text-xs">
              {clinicConfig.hours.map((h, i) => (
                <div key={i} className="border-b border-slate-800/60 pb-1.5 last:border-0">
                  <div className="text-slate-300 font-medium">{h.days}</div>
                  <div className="text-teal-400/90">{h.time}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Hospital-Grade Sterilization
              </div>
              CDC, OSHA & ADA Class-B autoclave spore-tested daily.
            </div>
          </div>
        </div>

        {/* Fictional Demo Disclaimer Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 text-center leading-relaxed">
          <strong className="text-slate-200">PORTFOLIO DEMO PROJECT:</strong> Vélora Dental Atelier is a fictional dental practice created as a modern web design and lead generation portfolio demonstration. Doctor profiles, testimonials, case studies, and patient interactions are for illustration purposes. Real clinical dental advice should always be sought from a licensed healthcare practitioner.
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Vélora Dental Atelier. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/patient-info" className="hover:text-slate-400 transition-colors">
              Patient Rights
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Clinic Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
