import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, HeartHandshake, Award, Cpu, CheckCircle, ArrowRight, MessageSquare, Phone, Calendar } from 'lucide-react';
import { clinicConfig } from '../config/clinic';

export default function AboutPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="container max-w-4xl text-center space-y-4">
          <span className="badge-dark">
            Our Story & Heritage
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            About Vélora Dental Atelier
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Founded with a conviction that dental visits should feel calming, technologically advanced, and deeply respectful of natural biology.
          </p>
        </div>
      </section>

      {/* Origin & Philosophy */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="badge-velora">
              The Atelier Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Human-Centered Vision for Contemporary Oral Medicine
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Traditional dental clinics were built for assembly-line speed: cold stainless steel, hurried double-booked chairs, and unpleasant needles. At Vélora, our founding clinicians set out to build the antithesis of the conventional dental office.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We operate as a boutique clinical atelier. Every appointment is reserved for a single patient in an acoustic-isolated suite. We take the time to listen, review high-definition 3D diagnostics together on chairside displays, and prioritize conservative biomimetic treatments that protect your natural tooth structure for life.
            </p>

            <div className="space-y-2.5 pt-2">
              {[
                'Conservative biomimetic preservation over aggressive drilling',
                'Unrivaled chairside empathy and specialized dental phobia care',
                '100% upfront fee transparency with zero surprise invoices',
                'Digital precision dentistry using computer-guided 3D navigation'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                  alt="Vélora consultation suite"
                  className="rounded-2xl object-cover aspect-[4/5] shadow-lg border border-slate-200"
                />
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
                  <span className="font-heading font-bold text-2xl text-teal-800 block">14+ Years</span>
                  <span className="text-xs text-slate-500">Dedicated Service in Pacifica</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-sm text-center">
                  <span className="font-heading font-bold text-2xl text-teal-400 block">99.4%</span>
                  <span className="text-xs text-slate-300">Documented Patient Satisfaction</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                  alt="Swiss Airflow technology"
                  className="rounded-2xl object-cover aspect-[4/5] shadow-lg border border-slate-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Sterilization Standards */}
      <section className="bg-white border-y border-slate-200 py-18">
        <div className="container space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="badge-velora">
              Clinical Rigor & Safety
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hospital-Grade Infection Control
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your safety is our sacred commitment. Our sterilization center exceeds the standards mandated by the CDC, ADA, and OSHA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-velora bg-slate-50 p-6 rounded-2xl space-y-3 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Class-B Vacuum Autoclaves</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We employ European medical-grade pre-vacuum sterilization autoclaves that penetrate hollow instruments, accompanied by daily third-party biological spore testing.
              </p>
            </div>

            <div className="card-velora bg-slate-50 p-6 rounded-2xl space-y-3 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Medical Air Filtration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Surgically clean IQAir medical-grade HEPA filters and continuous negative-ion UV germicidal irradiation purify the operatory air every 6 minutes.
              </p>
            </div>

            <div className="card-velora bg-slate-50 p-6 rounded-2xl space-y-3 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Closed Water Line Purification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All dental units are powered by an independent multi-stage distilled water filtration system with botanical antimicrobials, guaranteeing biofilm-free rinsing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Milestones Timeline */}
      <section className="container max-w-4xl space-y-10">
        <div className="text-center space-y-3">
          <span className="badge-velora">
            Our Journey
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">
            Milestones of Clinical Innovation
          </h2>
        </div>

        <div className="space-y-6 relative border-l-2 border-teal-200/80 pl-6 ml-4 sm:ml-8">
          {[
            {
              year: '2012',
              title: 'Founding of the Atelier',
              description: 'Dr. Adrian Vance established the practice with two treatment suites committed exclusively to anxiety-free, biomimetic tooth preservation.'
            },
            {
              year: '2016',
              title: 'Introduction of Swiss Airflow® GBT',
              description: 'Pioneered warm-water Guided Biofilm Therapy in the Bay Area, eliminating traditional abrasive metal scaling for sensitive teeth.'
            },
            {
              year: '2019',
              title: 'Dr. Sophia Chen Joins as Cosmetic Lead',
              description: 'Expanded our aesthetic smile design studio with Digital Smile Design (DSD) and handcrafted porcelain veneers.'
            },
            {
              year: '2023',
              title: 'Full 3D Guided Robotic Implant Suite',
              description: 'Integrated cone-beam computed tomography (CBCT) with computer-guided surgical navigation for same-day guided implants.'
            },
            {
              year: 'Present',
              title: 'Over 850+ Verified 5-Star Reviews',
              description: 'Proudly serving generations of families in Pacifica, Half Moon Bay, and the broader San Francisco Peninsula.'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-xs"></span>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md inline-block mb-1">
                  {item.year}
                </span>
                <h3 className="font-heading font-bold text-base text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Call to Action */}
      <section className="container text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet the Team Shaping Your Care
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our clinicians are here to listen, answer every question, and guide your treatment with uncompromising gentleness.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/dentists" className="btn-primary text-sm">
            <span>Explore Doctor Profiles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/appointment" className="btn-secondary text-sm">
            <span>Book an Appointment</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
