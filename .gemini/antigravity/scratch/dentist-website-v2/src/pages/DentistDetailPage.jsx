import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  MessageSquare,
  Phone,
  ArrowRight,
  ArrowLeft,
  Award,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Star,
  CheckCircle,
  Clock
} from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { dentistsData } from '../data/dentistsData';
import { servicesData } from '../data/servicesData';
import ServiceCard from '../components/ui/ServiceCard';

export default function DentistDetailPage() {
  const { slug } = useParams();
  const dentist = dentistsData.find((d) => d.slug === slug);

  if (!dentist) {
    return <Navigate to="/dentists" replace />;
  }

  // Find services associated with this doctor
  const associatedServices = servicesData.filter((s) =>
    s.relatedDentistSlugs?.includes(dentist.slug)
  );

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white pt-10 pb-16 sm:pb-20 border-b border-slate-800">
        <div className="container max-w-5xl space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/dentists" className="hover:text-white transition-colors">Dentists</Link>
            <span>/</span>
            <span className="text-teal-400 font-medium">{dentist.shortName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Doctor Photo */}
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Doctor Intro & CTAs */}
            <div className="lg:col-span-8 space-y-4">
              <span className="badge-dark">
                {dentist.experienceYears}
              </span>
              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
                {dentist.name}
              </h1>
              <p className="text-teal-400 font-semibold text-sm sm:text-base">
                {dentist.role}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {dentist.tagline}
              </p>

              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Consultation Times: {dentist.consultationHours}</span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to={`/appointment?doctor=${dentist.slug}`}
                  className="btn-teal text-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule with {dentist.shortName}</span>
                </Link>

                <a
                  href={clinicConfig.getWhatsAppUrl(
                    `Hello Vélora, I would like to schedule a consultation with ${dentist.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Doctor Desk</span>
                </a>

                <a
                  href={`tel:${clinicConfig.phoneTel}`}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-2"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>Call Reception</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Biography & Credentials */}
      <section className="container max-w-5xl space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Detailed Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="badge-velora">Biography & Care Approach</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                About {dentist.shortName}
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {dentist.bio}
            </p>

            {/* Philosophy Box */}
            <div className="p-6 rounded-2xl bg-teal-50/70 border border-teal-200/80 space-y-2">
              <span className="text-[11px] font-bold text-teal-900 uppercase tracking-wider block">
                Doctor’s Clinical Philosophy:
              </span>
              <p className="text-xs sm:text-sm text-teal-950 font-medium italic leading-relaxed">
                "{dentist.philosophy}"
              </p>
            </div>

            {/* Fictional Patient Review */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
                <span className="text-[11px] text-slate-400 font-semibold ml-2">Verified Patient Story</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 italic">
                "{dentist.fictionalReview.quote}"
              </p>
              <span className="text-[11px] text-slate-500 font-medium block">
                — {dentist.fictionalReview.author}
              </span>
            </div>
          </div>

          {/* Right: Education & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-velora bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
              {/* Education */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <GraduationCap className="w-4 h-4 text-teal-700" />
                  <span>Academic Education & Fellowships</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {dentist.education.map((edu, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Professional Board Affiliations */}
              <div className="space-y-3 pt-2">
                <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span>Board Affiliations</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {dentist.affiliations.map((aff, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{aff}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialties */}
              <div className="space-y-3 pt-2">
                <h3 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
                  <BookOpen className="w-4 h-4 text-teal-700" />
                  <span>Clinical Focus Areas</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {dentist.specialties.map((s, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/appointment?doctor=${dentist.slug}`}
                  className="btn-primary w-full text-xs justify-center"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-300" />
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Associated Disciplines */}
        {associatedServices.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="space-y-2">
              <span className="badge-velora">Treatments Provided</span>
              <h2 className="font-heading text-2xl font-bold text-slate-900">
                Services Directed by {dentist.shortName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {associatedServices.map((svc) => (
                <ServiceCard key={svc.slug} service={svc} />
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="pt-6 border-t border-slate-200">
          <Link
            to="/dentists"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-teal-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Dentists</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
