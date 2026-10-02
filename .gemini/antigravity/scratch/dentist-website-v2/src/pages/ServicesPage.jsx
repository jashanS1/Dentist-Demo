import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MessageSquare, Phone, ArrowRight, ShieldCheck, CheckCircle2, HelpCircle } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ui/ServiceCard';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Preventive & Essential', 'Cosmetic & Aesthetic', 'Restorative & Surgical', 'Urgent Care'];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category.includes(activeCategory) || activeCategory.includes(s.category.split('&')[0].trim()));

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="container max-w-4xl text-center space-y-4">
          <span className="badge-dark">
            Complete Clinical Directory
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            10 Specialized Dental Disciplines
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From routine Swiss Airflow® biofilm hygiene to complex 3D guided implant reconstruction and artisanal porcelain veneers.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link to="/appointment" className="btn-teal text-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
            <a
              href={clinicConfig.getWhatsAppUrl('Hello Vélora, I would like to enquire about your dental services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Questions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Directory */}
      <section className="container space-y-10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid (All 10 services displayed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </div>
      </section>

      {/* Transparent Price Guide Overview */}
      <section className="container max-w-4xl space-y-8">
        <div className="text-center space-y-3">
          <span className="badge-velora">
            Financial Transparency
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing & Fee Guide
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We believe you deserve total clarity regarding dental costs. Below is an indicative guide to our common procedures.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md divide-y divide-slate-100">
          {[
            { name: 'Comprehensive Exam & 3D Imaging', range: '$180 – $340', note: 'Includes oral cancer check, gum charting & full HD X-rays' },
            { name: 'Swiss Airflow® Guided Biofilm Hygiene', range: '$150 – $260', note: 'Warm-water micro-spray cleaning & enamel remineralization' },
            { name: 'In-Studio Laser Teeth Whitening', range: '$380 – $650', note: 'Includes take-home custom maintenance trays' },
            { name: 'Composite Biomimetic Resin Bonding', range: '$250 – $480 / tooth', note: 'Tooth-colored, BPA-free organic enamel replica' },
            { name: 'Handcrafted Porcelain Veneer', range: '$1,200 – $2,200 / tooth', note: 'Lithium disilicate / feldspathic custom laboratory ceramic' },
            { name: 'Single Dental Implant & Zirconia Crown', range: '$2,800 – $4,500', note: '3D CBCT guided fixture, custom abutment & screw-retained crown' },
            { name: 'Comprehensive Clear Aligners', range: '$3,200 – $5,900', note: 'Spark™ or Invisalign® with 0% interest monthly plans' },
            { name: 'Same-Day CEREC Ceramic Crown', range: '$1,100 – $1,800', note: 'Milled in-studio in 90 minutes; zero temporary crowns' }
          ].map((item, idx) => (
            <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <span className="font-bold text-sm text-slate-900 block">{item.name}</span>
                <span className="text-xs text-slate-500">{item.note}</span>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="font-heading font-bold text-teal-800 text-base">{item.range}</span>
                <span className="text-[10px] text-slate-400 block">PPO Insurance Accepted</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
          <strong className="text-amber-950">Important Clinical Disclaimer:</strong> Dental treatment fees vary based on anatomical complexity, tissue health, and personal goals. The figures above are illustrative estimates; you will receive a written, itemized fee breakdown and insurance pre-authorization estimate prior to initiating any treatment.
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="container text-center space-y-6">
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900">
          Not Sure Which Discipline You Require?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Our clinical directors provide initial consultations to evaluate your bite, gums, and teeth with gentle 3D digital imaging.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/appointment" className="btn-primary text-xs">
            <span>Book a Comprehensive Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href={clinicConfig.getWhatsAppUrl('Hello Vélora, I would like guidance on which treatment is right for me.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask Concierge on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
