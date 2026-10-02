import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Phone, MessageSquare, Calendar, ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { clinicConfig } from '../../config/clinic';
import { servicesData } from '../../data/servicesData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-teal-700 py-1 ${
      isActive ? 'text-teal-800 font-semibold border-b-2 border-teal-600' : 'text-slate-700'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group text-decoration-none">
            <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-teal-400 shadow-md group-hover:bg-slate-900 transition-colors">
              <Sparkles className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-teal-900 transition-colors block leading-tight">
                VÉLORA
              </span>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-slate-500 uppercase block">
                Dental Atelier
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Atelier
            </NavLink>

            {/* Services with Hover/Click Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-teal-700 py-2 cursor-pointer focus:outline-none"
                onClick={() => navigate('/services')}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:rotate-180" />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                  <div className="p-2 border-b border-slate-100 mb-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Core Disciplines (10 Specialized Services)
                    </span>
                  </div>
                  <div className="max-h-80 overflow-y-auto py-1">
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.slug}
                        to={`/services/${svc.slug}`}
                        className="block px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-900 transition-colors"
                        onClick={() => setServicesDropdown(false)}
                      >
                        <div className="font-semibold">{svc.title}</div>
                        <div className="text-[11px] text-slate-400 truncate">{svc.badge}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-2 border-t border-slate-100 mt-1 bg-slate-50 rounded-b-xl">
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 block text-center"
                      onClick={() => setServicesDropdown(false)}
                    >
                      View All Services Directory →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/dentists" className={navLinkClass}>
              Our Dentists
            </NavLink>
            <NavLink to="/patient-info" className={navLinkClass}>
              Patient Guide & FAQs
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${clinicConfig.phoneTel}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-full transition-colors"
              title="Call Clinic Reception"
            >
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>{clinicConfig.phoneDisplay}</span>
            </a>

            <a
              href={clinicConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] px-3.5 py-2.5 rounded-full shadow-xs transition-colors"
              title="Message on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/appointment"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-teal-700 px-4 py-2.5 rounded-full shadow-sm transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-teal-300" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center sm:hidden gap-2">
            <a
              href={`tel:${clinicConfig.phoneTel}`}
              className="p-2 rounded-full bg-slate-100 text-teal-700"
              title="Call Clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About the Clinic
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Dental Services (10 Disciplines)
            </NavLink>
            <NavLink
              to="/dentists"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Dentists
            </NavLink>
            <NavLink
              to="/patient-info"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Patient Info & FAQs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-teal-50 text-teal-800 font-bold' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              to="/appointment"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="w-4 h-4 text-teal-300" />
              <span>Book an Appointment</span>
            </Link>

            <a
              href={clinicConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>

            <a
              href={`tel:${clinicConfig.phoneTel}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call: {clinicConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
