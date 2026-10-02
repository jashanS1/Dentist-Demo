import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  MessageSquare,
  Phone,
  Search,
  ChevronDown,
  ShieldCheck,
  CreditCard,
  FileText,
  HeartHandshake,
  CheckCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { clinicConfig } from '../config/clinic';
import { faqCategories } from '../data/faqData';

export default function PatientInfoPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaqId, setOpenFaqId] = useState('0-0');

  // Filter FAQs based on search and category
  const filteredCategories = faqCategories
    .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
    .map((cat) => {
      const matchingFaqs = cat.faqs.filter(
        (f) =>
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.a.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, faqs: matchingFaqs };
    })
    .filter((cat) => cat.faqs.length > 0);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="container max-w-4xl text-center space-y-4">
          <span className="badge-dark">
            Patient Resources & Transparency
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            Patient Information & FAQ Directory
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Everything you need for an unhurried, comfortable experience — from insurance plans and payment options to aftercare protocols.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link to="/appointment" className="btn-teal text-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
            <a
              href={clinicConfig.getWhatsAppUrl('Hello Vélora, I have a question regarding patient information or insurance.')}
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

      {/* 3 Core Guides: First Visit, Insurance, Comfort */}
      <section className="container space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="badge-velora">Essential Patient Guides</span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">
            Preparing for Your Visit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: First Visit Checklist */}
          <div className="card-velora bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">First Visit Checklist</h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Complete our encrypted digital health intake prior to arrival.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Bring your government photo ID and dental insurance card.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Arrive 10 minutes early to enjoy our herbal tea lounge.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Bring a list of current medications or allergies.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Insurance & Financing */}
          <div className="card-velora bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">Insurance & 0% Financing</h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Direct billing & claims submission for all major PPO insurances.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>CareCredit & Sunbit 0% interest monthly payment options.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Complimentary benefits check before initiating any procedure.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>HSA and FSA healthcare accounts accepted for all services.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Anxiety-Free Protocol */}
          <div className="card-velora bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900">Phobia & Comfort Care</h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>The Wand® microprocessor injection eliminating needle sting.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Bose noise-canceling headphones with personalized media streaming.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>Gentle nitrous oxide and twilight sedation options available.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                <span>"Stop Hand-Signal" pledge — you remain in total control.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comprehensive Searchable FAQ Directory */}
      <section className="container max-w-4xl space-y-8">
        <div className="text-center space-y-3">
          <span className="badge-velora">Knowledge Base</span>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">
            Search Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm">
            Quickly filter by category or type your specific inquiry below.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search questions by keyword (e.g. insurance, sedation, pain, cleaning)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input pl-11 py-3 text-sm rounded-2xl bg-white shadow-xs"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center">
          {['All', ...faqCategories.map((c) => c.category)].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-950 text-white'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-6">
          {filteredCategories.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found for "{searchQuery}". Please message our concierge on WhatsApp for personal assistance!
            </div>
          ) : (
            filteredCategories.map((categoryGroup, catIndex) => (
              <div key={catIndex} className="space-y-3">
                <h3 className="font-heading font-bold text-base text-teal-800 uppercase tracking-wider px-1">
                  {categoryGroup.category}
                </h3>

                <div className="space-y-2.5">
                  {categoryGroup.faqs.map((faq, fIndex) => {
                    const id = `${catIndex}-${fIndex}`;
                    const isOpen = openFaqId === id;
                    return (
                      <div
                        key={fIndex}
                        className="bg-white border border-slate-200/90 rounded-2xl p-5 cursor-pointer transition-all shadow-xs"
                        onClick={() => setOpenFaqId(isOpen ? null : id)}
                      >
                        <div className="flex justify-between items-center gap-4">
                          <h4 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                            {faq.q}
                          </h4>
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
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container text-center space-y-6">
        <h3 className="font-heading text-2xl font-bold text-slate-900">
          Have an Unanswered Question?
        </h3>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Our front-of-house team is available to assist with insurance estimates, scheduling, and treatment explanations.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={clinicConfig.getWhatsAppUrl('Hello Vélora, I have a specific question not found in the FAQ.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask Concierge on WhatsApp</span>
          </a>
          <Link to="/contact" className="btn-secondary text-xs">
            <span>Visit Contact Page</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
