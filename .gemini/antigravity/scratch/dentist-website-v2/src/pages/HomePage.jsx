import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  MessageSquare,
  Phone,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Clock,
  MapPin,
  Star,
  Award,
  ChevronDown,
  Cpu,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { servicesData } from '../data/servicesData';
import { dentistsData } from '../data/dentistsData';
import { faqCategories } from '../data/faqData';
import ServiceCard from '../components/ui/ServiceCard';
import DentistCard from '../components/ui/DentistCard';
import SmileSlider from '../components/ui/SmileSlider';

export default function HomePage() {
  const navigate = useNavigate();

  // Quick reservation bar state in Hero
  const [quickService, setQuickService] = useState('general-dentistry');
  const [quickDate, setQuickDate] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleQuickBook = (e) => {
    e.preventDefault();
    navigate(`/appointment?service=${quickService}${quickDate ? `&date=${quickDate}` : ''}`);
  };

  const featuredServices = servicesData.filter((s) => s.featured).slice(0, 6);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* =========================================================================
          1. HERO SECTION (Asymmetric, Luxury Architectural with Quick Lead Capture)
          ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-14 sm:pt-16 sm:pb-20 bg-linear-to-b from-white via-amber-50/20 to-transparent">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 cols: Brand Copy, Trust Badges, Direct CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Pacifica’s Premier Digital Dental Sanctuary</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
                Where Advanced Dentistry Meets{' '}
                <span className="text-teal-700 underline decoration-teal-300 decoration-wavy decoration-2">
                  Unrivaled Comfort.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Leave clinical apprehension behind. Vélora Dental Atelier combines 3D guided implantology, artisanal porcelain smile design, and gentle Swiss Airflow® hygiene within a tranquil coastal retreat.
              </p>

              {/* Primary Direct CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link to="/appointment" className="btn-primary text-sm shadow-md">
                  <Calendar className="w-4 h-4 text-teal-300" />
                  <span>Schedule Consultation</span>
                </Link>

                <a
                  href={clinicConfig.getWhatsAppUrl('Hello Vélora Dental Atelier, I would like to schedule an appointment.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={`tel:${clinicConfig.phoneTel}`}
                  className="btn-tel text-sm"
                  title="Direct Clinic Desk"
                >
                  <Phone className="w-4 h-4" />
                  <span>{clinicConfig.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>4.9 / 5.0</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">850+ Verified Reviews</span>
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-teal-600" />
                    <span>Board Certified</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Specialist Dentists</span>
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm flex items-center gap-1">
                    <Award className="w-4 h-4 text-teal-600" />
                    <span>0% Interest</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Flexible Payment Plans</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Luxury Hero Image + Floating Appointment Quick-Finder */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Hero Visual Card */}
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                    alt="Vélora Dental Atelier treatment lounge"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Floating Doctor Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-xl flex items-center gap-3.5">
                    <img
                      src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80"
                      alt="Dr. Sophia Chen"
                      className="w-12 h-12 rounded-xl object-cover border-2 border-teal-600"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading font-bold text-xs text-slate-900">Dr. Sophia Chen</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      </div>
                      <span className="text-[11px] text-teal-700 font-semibold block">Cosmetic Smile Director</span>
                      <span className="text-[10px] text-slate-500">Now accepting new smile consultations</span>
                    </div>
                  </div>
                </div>

                {/* Floating Quick Lead Capture Widget */}
                <div className="mt-6 bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      Quick Appointment Availability
                    </span>
                    <span className="text-[11px] text-slate-400">Same-Day Slots</span>
                  </div>

                  <form onSubmit={handleQuickBook} className="space-y-3">
                    <div>
                      <select
                        value={quickService}
                        onChange={(e) => setQuickService(e.target.value)}
                        className="form-select text-xs py-2.5"
                      >
                        {servicesData.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={quickDate}
                        onChange={(e) => setQuickDate(e.target.value)}
                        className="form-input text-xs py-2"
                        placeholder="Pick Date"
                      />
                      <button
                        type="submit"
                        className="btn-primary text-xs py-2 w-full justify-center"
                      >
                        <span>Check Times</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PHILOSOPHY & WHY CHOOSE US (High Trust, Sensory Hospitality)
          ========================================================================= */}
      <section className="container">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="badge-velora">
            The Vélora Difference
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Elevating Dental Care into an Art Form
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We reimagined every touchpoint of your appointment to eliminate clinical friction, cold waiting rooms, and procedural discomfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Cpu,
              title: '3D Zero-Gag Scanning',
              description: 'Forget suffocating impression trays. Our high-frequency optical intraoral cameras map your smile with sub-millimeter precision in 45 seconds.'
            },
            {
              icon: Layers,
              title: 'The Wand® Anesthesia',
              description: 'Microprocessor-guided anesthetic flow eliminates the stinging sensation and cold syringes, guaranteeing a virtually imperceptible numbing process.'
            },
            {
              icon: ShieldCheck,
              title: 'Hospital Sterilization',
              description: 'Class-B medical autoclaves, continuous clean water lines, and daily biological spore testing meeting stringent CDC, OSHA, and ADA standards.'
            },
            {
              icon: HeartHandshake,
              title: 'Sensory Comfort Suite',
              description: 'Aromatherapy warm towels, weighted blankets, noise-canceling headphones, and ceiling-mounted streaming displays for pure tranquility.'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-velora bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 hover:border-teal-500/50"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED SERVICES DIRECTORY (10 Core Disciplines Showcase)
          ========================================================================= */}
      <section className="bg-slate-950 text-white py-20 border-y border-slate-800">
        <div className="container space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="badge-dark">
                Bespoke Clinical Disciplines
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Comprehensive Dental Architecture
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                From preventive Swiss Airflow® therapies to master-crafted porcelain veneers and 3D computer-guided implants, explore our dedicated disciplines.
              </p>
            </div>

            <div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-bold text-sm"
              >
                <span>View Full 10-Service Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((svc) => (
              <div key={svc.slug} className="text-slate-900">
                <ServiceCard service={svc} />
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="font-heading font-bold text-white text-base block">
                Looking for Emergency Triage or Child Care?
              </span>
              <span className="text-xs text-slate-400">
                We also offer Root Canals, CEREC Crowns, Pediatric Dentistry, and Same-Day Emergency Relief.
              </span>
            </div>
            <Link to="/services" className="btn-secondary text-xs shrink-0">
              Browse All Services
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE BEFORE & AFTER SMILE MAKEOVER SLIDER
          ========================================================================= */}
      <section className="container">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="badge-velora">
            Clinical Aesthetics In Action
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Before & After Smile Architecture
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Drag the interactive slider to inspect the biological precision and light transmission of our restorative smile transformations.
          </p>
        </div>

        <SmileSlider />
      </section>

      {/* =========================================================================
          5. MEET OUR MASTER DENTISTS
          ========================================================================= */}
      <section className="container space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="badge-velora">
              Clinical Leadership
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Guided by Passionate Specialists
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our multidisciplinary team unites Ivy League trained clinicians, accredited cosmetic ceramists, and board-certified craniofacial orthodontists.
            </p>
          </div>

          <div>
            <Link
              to="/dentists"
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 font-bold text-sm"
            >
              <span>Meet All Doctors & Faculty</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dentistsData.map((dentist) => (
            <DentistCard key={dentist.slug} dentist={dentist} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. PATIENT TESTIMONIALS (Fictional Demo Content)
          ========================================================================= */}
      <section className="bg-amber-50/40 border-y border-amber-100/80 py-18">
        <div className="container space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="badge-gold">
              Fictional Demo Testimonials
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">
              Patient Experiences at Vélora
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              *The following reviews represent fictional portfolio illustrations of patient feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Julianne Vance',
                role: 'Tech Executive · Pacifica',
                treatment: 'Porcelain Veneers & Laser Whitening',
                quote: 'I had avoided cosmetic dentistry for 10 years terrified of having fake white blocks. Dr. Sophia Chen created hand-layered veneers that look so naturally luminous, even my sister asked what skincare I was using!',
                rating: 5
              },
              {
                name: 'David Montgomery',
                role: 'Architect · Half Moon Bay',
                treatment: '3D Guided Dental Implant',
                quote: 'Dr. Adrian Vance replaced my fractured molar with an implant. With The Wand anesthesia, I literally did not feel the needle or the placement. Zero pain during or after. Absolutely extraordinary care.',
                rating: 5
              },
              {
                name: 'Samantha Li',
                role: 'University Lecturer · San Francisco',
                treatment: 'Airflow Hygiene & Clear Aligners',
                quote: 'As someone with acute dental phobia, the warm Airflow cleaning changed everything for me. No scraping, no pain. Dr. Brooks and the team treated me with such immense kindness and patience.',
                rating: 5
              }
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="font-heading font-bold text-xs text-slate-900 block">{t.name}</span>
                  <span className="text-[11px] text-teal-700 font-semibold block">{t.treatment}</span>
                  <span className="text-[10px] text-slate-400">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FREQUENTLY ASKED QUESTIONS PREVIEW
          ========================================================================= */}
      <section className="container max-w-4xl space-y-10">
        <div className="text-center space-y-3">
          <span className="badge-velora">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">
            Transparent Answers for Every Patient
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about your first visit, insurance benefits, and pain-free dentistry.
          </p>
        </div>

        <div className="space-y-3">
          {faqCategories[0].faqs.concat(faqCategories[1].faqs.slice(0, 2)).map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="card-velora bg-white border border-slate-200/90 rounded-2xl p-5 cursor-pointer transition-all"
                onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-700 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/patient-info"
            className="text-xs font-bold text-teal-700 hover:text-teal-900"
          >
            Explore Complete Patient Information Guide & FAQ Directory →
          </Link>
        </div>
      </section>

      {/* =========================================================================
          8. LOCATION & HOURS SPOTLIGHT
          ========================================================================= */}
      <section className="container">
        <div className="card-velora bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="badge-dark">
                Pacifica Clinic Location
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight">
                Visiting Vélora Dental Atelier
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Located in the Coastal Medical Arts Center with dedicated underground parking, wheelchair accessibility, and elevator service.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white block">{clinicConfig.address}</span>
                    <span className="text-slate-400">{clinicConfig.neighborhood}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Mon–Thu: 7:30am–6:30pm · Fri: 8am–4pm · Sat: 9am–2pm</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Appointments: {clinicConfig.phoneDisplay} · Emergency: {clinicConfig.emergencyPhoneDisplay}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-teal text-xs">
                  <span>View Directions & Transit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={clinicConfig.getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Visual Location Mockup */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-slate-700 bg-slate-800 relative">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                  alt="Pacifica Medical Center exterior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center p-4 text-center">
                  <div className="bg-white/95 text-slate-900 p-4 rounded-xl shadow-xl max-w-xs text-xs space-y-1">
                    <span className="font-bold block">Coastal Medical Arts Center</span>
                    <span className="text-slate-500 block">Suite 400 · Free Patient Parking</span>
                    <span className="text-teal-700 font-semibold block text-[11px] pt-1">
                      Validated parking tickets at reception desk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. CLOSING CONVERSION BANNER
          ========================================================================= */}
      <section className="container text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="badge-velora">
            Schedule Your Visit Today
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Radiant, Healthy Smile Starts Here
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Whether booking routine hygiene, exploring clear aligners, or seeking emergency relief, our team is ready to welcome you with unhurried care.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link to="/appointment" className="btn-primary text-sm shadow-md">
            <Calendar className="w-4 h-4 text-teal-300" />
            <span>Book Online Consultation</span>
          </Link>

          <a
            href={clinicConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a href={`tel:${clinicConfig.phoneTel}`} className="btn-tel text-sm">
            <Phone className="w-4 h-4" />
            <span>Call {clinicConfig.phoneDisplay}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
