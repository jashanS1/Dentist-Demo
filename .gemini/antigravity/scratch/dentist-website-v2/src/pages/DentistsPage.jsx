import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MessageSquare, Phone, ArrowRight, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { dentistsData } from '../data/dentistsData';
import DentistCard from '../components/ui/DentistCard';

export default function DentistsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="container max-w-4xl text-center space-y-4">
          <span className="badge-dark">
            Our Faculty & Specialists
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            Meet the Dentists of Vélora
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Multidisciplinary clinicians dedicated to unhurried, evidence-based dentistry, biological preservation, and uncompromising comfort.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link to="/appointment" className="btn-teal text-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </Link>
            <a
              href={clinicConfig.getWhatsAppUrl('Hello Vélora, I would like to enquire about your dental specialists.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dentists Grid */}
      <section className="container space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dentistsData.map((dentist) => (
            <DentistCard key={dentist.slug} dentist={dentist} />
          ))}
        </div>
      </section>

      {/* Clinical Standards & Ethics */}
      <section className="container max-w-4xl">
        <div className="card-velora bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
          <div className="space-y-2 text-center">
            <span className="badge-velora">Ethical Care Commitment</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              Our 4 Pillars of Clinical Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Zero Overtreatment Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never recommend unnecessary crown preparations or aggressive procedures when conservative remineralization or monitoring is clinically appropriate.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <HeartHandshake className="w-4 h-4 text-teal-600" />
                <span>Specialized Dental Phobia Protocol</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We accommodate anxiety with computer-assisted anesthesia, weighted blankets, breaks whenever signaled, and unhurried appointments.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <Award className="w-4 h-4 text-teal-600" />
                <span>Continuous Faculty Education</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our doctors complete over 120 hours of peer-reviewed continuing dental education annually, triple the state requirement.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Collaborative Multi-Disciplinary Reviews</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complex aesthetic or implant cases are co-reviewed across implantology, cosmetic ceramics, and orthodontics for balanced treatment design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container text-center space-y-6">
        <h3 className="font-heading text-2xl font-bold text-slate-900">
          Ready to Consult with a Specialist?
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/appointment" className="btn-primary text-xs">
            <span>Schedule Appointment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a href={`tel:${clinicConfig.phoneTel}`} className="btn-tel text-xs">
            <Phone className="w-3.5 h-3.5" />
            <span>Call Concierge Desk</span>
          </a>
        </div>
      </section>
    </div>
  );
}
