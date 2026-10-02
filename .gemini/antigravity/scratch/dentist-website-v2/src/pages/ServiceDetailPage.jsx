import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  MessageSquare,
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  ShieldCheck,
  ChevronDown,
  User,
  ArrowLeft
} from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { servicesData } from '../data/servicesData';
import { dentistsData } from '../data/dentistsData';
import DentistCard from '../components/ui/DentistCard';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find dentists assigned to this service
  const relatedDentists = dentistsData.filter((d) =>
    service.relatedDentistSlugs?.includes(d.slug)
  );

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Breadcrumb & Hero */}
      <section className="bg-slate-950 text-white pt-10 pb-16 sm:pb-20 border-b border-slate-800">
        <div className="container max-w-5xl space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-teal-400 font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="badge-dark">
                {service.badge}
              </span>
              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
                {service.title}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {service.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-teal-400" />
                  <span>Duration: {service.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Fee: {service.pricingGuide.split('(')[0]}</span>
                </div>
              </div>

              {/* Direct Service CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to={`/appointment?service=${service.slug}`}
                  className="btn-teal text-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Treatment</span>
                </Link>

                <a
                  href={clinicConfig.getServiceWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${clinicConfig.phoneTel}`}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-2"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>Call {clinicConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Clinical Overview */}
      <section className="container max-w-5xl space-y-14">
        {/* Overview & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="badge-velora">Clinical Focus</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Detailed Treatment Overview
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {service.detailedDescription}
            </p>

            {/* Candidates */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
              <h3 className="font-heading font-bold text-sm text-amber-950 uppercase tracking-wider">
                Who Is This Procedure Recommended For?
              </h3>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                {service.candidates}
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 pt-2">
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Key Clinical Advantages:
              </h3>
              <div className="space-y-2.5">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-velora bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-base text-slate-900 border-b border-slate-100 pb-2">
                Procedure Fast Facts
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Discipline Category</span>
                  <span className="font-semibold text-slate-800">{service.category}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Expected Duration</span>
                  <span className="font-semibold text-slate-800">{service.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Recovery & Downtime</span>
                  <span className="font-semibold text-slate-800">{service.recovery}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-bold uppercase tracking-wider">Indicative Investment</span>
                  <span className="font-semibold text-teal-800">{service.pricingGuide}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  to={`/appointment?service=${service.slug}`}
                  className="btn-primary w-full text-xs justify-center"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-300" />
                  <span>Reserve Treatment Slot</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Procedure Protocol */}
        <div className="space-y-8 pt-6 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="badge-velora">Step-by-Step Protocol</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              What to Expect During Your Visit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 relative"
              >
                <span className="text-2xl font-extrabold text-teal-600/30 font-heading block">
                  {step.step}
                </span>
                <h3 className="font-heading font-bold text-sm text-slate-900">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs for this Service */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="space-y-2">
              <span className="badge-velora">Specific Inquiries</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Frequently Asked About {service.title}
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-2xl p-5 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      {faq.q}
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 text-teal-700 shrink-0 transition-transform ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openFaq === i && (
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Specialists */}
        {relatedDentists.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="space-y-2">
              <span className="badge-velora">Consulting Faculty</span>
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                Specialists Performing This Discipline
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedDentists.map((d) => (
                <DentistCard key={d.slug} dentist={d} />
              ))}
            </div>
          </div>
        )}

        {/* Back Link & Final Callout */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-teal-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Services Directory</span>
          </Link>

          <Link
            to={`/appointment?service=${service.slug}`}
            className="btn-primary text-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-teal-300" />
            <span>Schedule {service.title}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
