import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export default function DentistCard({ dentist }) {
  return (
    <div className="card-velora flex flex-col justify-between h-full bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 group hover:shadow-xl hover:border-teal-500/40 transition-all">
      <div>
        {/* Doctor Image */}
        <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-slate-100">
          <img
            src={dentist.image}
            alt={dentist.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-slate-950/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 text-white">
              <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest block">
                {dentist.experienceYears}
              </span>
              <span className="text-xs font-semibold text-slate-200 block truncate">
                {dentist.role}
              </span>
            </div>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="space-y-2 mb-4">
          <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
            {dentist.name}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            {dentist.credentials}
          </p>
          <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed pt-1">
            {dentist.bio}
          </p>
        </div>

        {/* Specialties Pills */}
        <div className="flex flex-wrap gap-1.5 my-3">
          {dentist.specialties.slice(0, 3).map((spec, i) => (
            <span
              key={i}
              className="text-[10px] font-semibold px-2 py-0.75 rounded-md bg-slate-100 text-slate-700"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <Link
          to={`/dentists/${dentist.slug}`}
          className="text-xs font-bold text-slate-800 hover:text-teal-700 flex items-center gap-1 group/btn"
        >
          <span>Full Biography</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        <Link
          to={`/appointment?doctor=${dentist.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 text-white hover:bg-teal-700 transition-all shadow-xs"
        >
          <Calendar className="w-3 h-3 text-teal-300" />
          <span>Consult</span>
        </Link>
      </div>
    </div>
  );
}
