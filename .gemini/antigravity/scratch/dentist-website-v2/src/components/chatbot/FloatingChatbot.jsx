import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, X, Send, Sparkles, Phone, Calendar, ArrowRight, RotateCcw, Bot, CheckCircle2 } from 'lucide-react';
import { clinicConfig } from '../../config/clinic';
import { CHATBOT_QUESTIONS, CHATBOT_FALLBACK } from '../../data/chatbotData';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Welcome to Vélora Dental Atelier! I am your automated clinic concierge assistant. How can I help you today? Please choose a topic below or type your question.`,
      timestamp: 'Just now'
    }
  ]);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Scroll to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelectQuestion = (qObj) => {
    // Add User Question message
    const userMsg = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: qObj.question,
      timestamp: 'Now'
    };

    // Add Bot Answer message with structured actions
    const botMsg = {
      id: 'bot-' + (Date.now() + 1),
      sender: 'bot',
      text: qObj.answer,
      actions: qObj.actions,
      timestamp: 'Now'
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const query = inputMessage.trim().toLowerCase();
    const userMsg = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: inputMessage.trim(),
      timestamp: 'Now'
    };

    setInputMessage('');

    // Attempt keyword matching across CHATBOT_QUESTIONS
    const matched = CHATBOT_QUESTIONS.find((item) =>
      item.keywords.some((kw) => query.includes(kw))
    );

    let botMsg;
    if (matched) {
      botMsg = {
        id: 'bot-' + (Date.now() + 1),
        sender: 'bot',
        text: matched.answer,
        actions: matched.actions,
        timestamp: 'Now'
      };
    } else {
      botMsg = {
        id: 'bot-' + (Date.now() + 1),
        sender: 'bot',
        text: `Thank you for your question! As this is an automated demo concierge, I support the predefined clinic topics below. For custom inquiries, please connect directly with our front desk team via WhatsApp or telephone:`,
        actions: CHATBOT_FALLBACK.actions,
        timestamp: 'Now'
      };
    }

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleActionClick = (action) => {
    if (action.type === 'route') {
      navigate(action.to);
      setIsOpen(false);
    } else if (action.type === 'whatsapp') {
      window.open(clinicConfig.getWhatsAppUrl(action.message), '_blank', 'noopener,noreferrer');
    } else if (action.type === 'tel') {
      window.location.href = `tel:${action.tel}`;
    } else if (action.type === 'reset_topics') {
      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-reset-' + Date.now(),
          sender: 'bot',
          text: 'Here are our main clinic enquiry topics. Please choose one:',
          timestamp: 'Now'
        }
      ]);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        sender: 'bot',
        text: `Welcome back to Vélora Dental Atelier! Choose a topic below to explore our services, fees, appointments, or contact details:`,
        timestamp: 'Just now'
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      {!isOpen && (
        <aside
          role="region"
          aria-label="Interactive Dental Concierge"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in"
        >
          {/* Subtle notification prompt for desktop */}
          <div
            onClick={handleOpen}
            className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl px-4 py-2.5 rounded-2xl cursor-pointer hover:border-teal-400 transition-all text-xs font-semibold text-slate-800"
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>Questions? Chat with Concierge</span>
          </div>

          <button
            type="button"
            onClick={handleOpen}
            className="w-14 h-14 rounded-full bg-slate-950 text-teal-300 hover:text-white hover:bg-teal-700 shadow-2xl flex items-center justify-center transition-all pulse-badge focus:outline-none focus:ring-4 focus:ring-teal-400/30"
            aria-label="Open Interactive Dental Concierge Chat"
          >
            <MessageSquare className="w-6 h-6" />
            {hasUnread && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-teal-500 rounded-full border-2 border-white"></span>
            )}
          </button>
        </aside>
      )}

      {/* Floating Chat Panel Modal */}
      {isOpen && (
        <aside
          role="dialog"
          aria-label="Vélora Dental Concierge Chatbot"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[calc(100vh-3rem)] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in"
        >
          {/* Chat Header */}
          <div className="bg-slate-950 text-white p-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-heading font-bold text-sm tracking-tight">Vélora Concierge</h3>
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                </div>
                <p className="text-[11px] text-teal-400 font-medium">
                  Automated Clinic Assistant · Online
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Restart Conversation"
                aria-label="Restart Conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Close Chat"
                aria-label="Close Chat Window"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Contact Ribbon */}
          <div className="bg-slate-100/90 px-3 py-2 border-b border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
            <span className="font-medium">Need immediate assistance?</span>
            <div className="flex items-center gap-2">
              <a
                href={clinicConfig.getWhatsAppUrl('Hello, I am using the website chatbot and need live assistance.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-bold hover:underline"
              >
                WhatsApp
              </a>
              <span>·</span>
              <a
                href={`tel:${clinicConfig.phoneTel}`}
                className="text-teal-700 font-bold hover:underline"
              >
                Call Desk
              </a>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-slate-900 text-white rounded-br-xs'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Structured Interactive Action Buttons for Bot Messages */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.actions.map((act, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleActionClick(act)}
                        className={`text-[11px] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 transition-all ${
                          act.type === 'whatsapp'
                            ? 'bg-[#25D366] text-white hover:bg-[#20bd5a]'
                            : act.type === 'tel'
                            ? 'bg-teal-700 text-white hover:bg-teal-800'
                            : 'bg-white text-slate-800 border border-slate-300 hover:border-teal-500 hover:text-teal-800 shadow-xs'
                        }`}
                      >
                        {act.type === 'whatsapp' && <MessageSquare className="w-3 h-3" />}
                        {act.type === 'tel' && <Phone className="w-3 h-3" />}
                        {act.type === 'route' && <ArrowRight className="w-3 h-3" />}
                        <span>{act.label}</span>
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Predefined Topic Chips Carousel */}
          <div className="p-2.5 bg-white border-t border-slate-200/80">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 px-1">
              Select A Predefined Question:
            </span>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {CHATBOT_QUESTIONS.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => handleSelectQuestion(q)}
                  className="whitespace-nowrap text-[11px] font-medium bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 px-2.5 py-1.5 rounded-xl border border-slate-200 transition-colors shrink-0"
                >
                  {q.shortLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={handleCustomSubmit}
            className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about dental services, fees, hours..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 text-xs py-2 px-3 rounded-xl border border-slate-200 focus:outline-none focus:border-teal-600 bg-slate-50"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-xl bg-slate-950 text-teal-300 hover:bg-teal-700 hover:text-white disabled:opacity-40 transition-colors"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </aside>
      )}
    </>
  );
}
