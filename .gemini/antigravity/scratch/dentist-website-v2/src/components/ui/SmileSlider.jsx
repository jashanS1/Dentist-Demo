import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SmileSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const cases = [
    {
      title: 'Full Porcelain Veneer Architecture',
      specialist: 'Dr. Sophia Chen, DMD',
      description: 'Correction of severe enamel fluorosis, irregular tooth sizing, and asymmetrical smile arc using 10 custom hand-layered feldspathic porcelain veneers.',
      beforeImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=800&q=80',
      timeline: '2 Visits · 14 Days',
      shadeChange: 'Enamel harmony + 4 shades organic brightness'
    },
    {
      title: 'Clear Aligner Orthodontic Realignment',
      specialist: 'Dr. Marcus Brooks, DDS, MS',
      description: 'Non-extraction correction of severe anterior crowding, deep bite attrition, and transverse smile narrowness using Spark™ clear aligners.',
      beforeImg: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      timeline: '8 Months · Remote Dental Monitoring',
      shadeChange: 'Expanded arch + airway optimization'
    },
    {
      title: 'Guided Dental Implant Restoration',
      specialist: 'Dr. Adrian Vance, DDS, FICOI',
      description: 'Replacement of two non-restorable fractured premolars using 3D CBCT guided titanium implants and custom-sculpted monolithic zirconia crowns.',
      beforeImg: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1606265752439-1f18756aa2b8?auto=format&fit=crop&w=800&q=80',
      timeline: 'Same-day guided surgery · 3 month osseointegration',
      shadeChange: 'Permanent structural bone preservation'
    }
  ];

  const currentCase = cases[activeCaseIndex];

  return (
    <div className="card-velora bg-white border border-slate-200 overflow-hidden shadow-xl rounded-3xl p-6 sm:p-10">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Column: Interactive Slider Container */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none border border-slate-200 shadow-md">
            {/* After Image (Background) */}
            <img
              src={currentCase.afterImg}
              alt="After treatment result"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-teal-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-teal-500/30">
              After Transformation
            </div>

            {/* Before Image (Clipped Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentCase.beforeImg}
                alt="Before treatment"
                className="absolute inset-0 w-full h-full object-cover max-w-none filter brightness-95"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-slate-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                Before Presentation
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold shadow-md border-2 border-white -translate-x-1/2">
                ⇄
              </div>
            </div>

            {/* Range Input Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Before and after transformation slider"
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
            />
          </div>

          <div className="text-center mt-3 text-xs text-slate-500 flex items-center justify-center gap-1">
            <span>Drag slider horizontally to compare before and after</span>
          </div>
        </div>

        {/* Right Column: Case Details & Case Switcher */}
        <div className="w-full lg:w-1/2 space-y-5">
          <div className="flex items-center gap-2">
            <span className="badge-velora">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Case Study
            </span>
            <span className="text-xs text-slate-400 font-medium">Demo Portfolio Gallery</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
            {currentCase.title}
          </h3>

          <div className="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg inline-block">
            Lead Clinician: {currentCase.specialist}
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            {currentCase.description}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Clinical Timeline</span>
              <span className="text-xs font-semibold text-slate-800">{currentCase.timeline}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Outcome Achieved</span>
              <span className="text-xs font-semibold text-teal-800">{currentCase.shadeChange}</span>
            </div>
          </div>

          {/* Case Selector Tabs */}
          <div className="pt-2">
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Select Another Case:
            </span>
            <div className="flex flex-wrap gap-2">
              {cases.map((c, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setActiveCaseIndex(idx);
                    setSliderPos(50);
                  }}
                  className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all ${
                    activeCaseIndex === idx
                      ? 'bg-slate-900 text-white font-semibold shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Case {idx + 1}: {c.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <Link
              to="/appointment"
              className="btn-primary text-xs"
            >
              <span>Explore Your Smile Options</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/services"
              className="text-xs font-semibold text-teal-700 hover:text-teal-900"
            >
              View All Treatment Disciplines →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
