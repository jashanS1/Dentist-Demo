import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, Calendar } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <div className="card-velora flex flex-col justify-between h-full group bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 transition-all hover:shadow-xl hover:border-teal-500/40">
      <div>
        {/* Card Header & Image */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-slate-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-900/85 text-teal-300 backdrop-blur-md border border-white/10 shadow-xs">
              {service.badge}
            </span>
          </div>
        </div>

        {/* Category & Title */}
        <div className="space-y-2 mb-3">
          <span className="text-[11px] font-bold text-teal-700 uppercase tracking-widest block">
            {service.category}
          </span>
          <h3 className="font-heading text-xl font-bold text-slate-900 group-hover:text-teal-800 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
            {service.summary}
          </p>
        </div>

        {/* Benefits bullets */}
        <div className="space-y-1.5 my-4 border-t border-slate-100 pt-3">
          {service.benefits.slice(0, 2).map((benefit, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <Link
          to={`/services/${service.slug}`}
          className="text-xs font-bold text-slate-800 hover:text-teal-700 flex items-center gap-1 group/btn"
        >
          <span>Learn Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        <Link
          to={`/appointment?service=${service.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-teal-50 text-teal-800 hover:bg-teal-700 hover:text-white transition-all"
        >
          <Calendar className="w-3 h-3" />
          <span>Book</span>
        </Link>
      </div>
    </div>
  );
}
