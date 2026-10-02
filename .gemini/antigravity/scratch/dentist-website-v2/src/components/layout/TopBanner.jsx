import React from 'react';
import { Phone, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { clinicConfig } from '../../config/clinic';

export default function TopBanner() {
  return (
    <div className="bg-[#090E17] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <span className="flex items-center gap-1.5 text-teal-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Accepting New Patients & Emergency Cases
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Today: 7:30 AM – 6:30 PM
          </span>
          <span className="hidden lg:inline text-slate-600">|</span>
          <span className="hidden lg:flex items-center gap-1 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            0% Interest Financing Available
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${clinicConfig.phoneTel}`}
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            title="Call Clinic Desk"
          >
            <Phone className="w-3 h-3 text-teal-400" />
            <span>{clinicConfig.phoneDisplay}</span>
          </a>
          <span className="text-slate-600">·</span>
          <a
            href={clinicConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-teal-400 hover:text-teal-300 font-medium transition-colors"
            title="Open WhatsApp Enquiry"
          >
            <MessageSquare className="w-3 h-3 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
