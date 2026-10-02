import { clinicConfig } from '../config/clinic';

export const CHATBOT_QUESTIONS = [
  {
    id: 'services',
    question: 'What dental services do you offer?',
    shortLabel: 'Dental Services',
    keywords: ['service', 'services', 'offer', 'treatment', 'treatments', 'do you do', 'options'],
    answer: 'At Vélora Dental Atelier, we offer a comprehensive spectrum of 10 modern dental disciplines: General Dentistry, Swiss Airflow® Teeth Cleaning, In-Studio Laser Whitening, Porcelain Veneers & Cosmetic Design, 3D Guided Dental Implants, Clear Orthodontics, Gentle Microscopic Root Canals, Same-Day CEREC Crowns, Pediatric Dentistry, and Same-Day Emergency Care.',
    actions: [
      { label: 'View All 10 Services', type: 'route', to: '/services' },
      { label: 'Book a Consultation', type: 'route', to: '/appointment' },
      { label: 'Ask via WhatsApp', type: 'whatsapp', message: 'Hello Vélora, I have a question regarding your dental service options.' }
    ]
  },
  {
    id: 'book',
    question: 'How can I book an appointment?',
    shortLabel: 'Book Appointment',
    keywords: ['book', 'booking', 'appointment', 'schedule', 'reserve', 'visit', 'consultation'],
    answer: 'Booking is quick and effortless! You can reserve your appointment online through our interactive appointment booking page, or connect with our concierge directly via WhatsApp or phone.',
    actions: [
      { label: 'Open Booking Form', type: 'route', to: '/appointment' },
      { label: 'WhatsApp Us Instantly', type: 'whatsapp', message: 'Hello Vélora, I would like to schedule an appointment.' },
      { label: `Call ${clinicConfig.phoneDisplay}`, type: 'tel', tel: clinicConfig.phoneTel }
    ]
  },
  {
    id: 'hours',
    question: 'What are your clinic opening hours?',
    shortLabel: 'Opening Hours',
    keywords: ['hour', 'hours', 'time', 'times', 'open', 'close', 'schedule', 'weekend', 'saturday', 'sunday'],
    answer: `Our clinic opening hours are:\n• Monday – Thursday: 7:30 AM – 6:30 PM (Extended evening hours)\n• Friday: 8:00 AM – 4:00 PM\n• Saturday: 9:00 AM – 2:00 PM (By appointment & hygiene)\n• Sunday: Closed (On-call emergency triage available).`,
    actions: [
      { label: 'Schedule an Appointment', type: 'route', to: '/appointment' },
      { label: 'Emergency Contact Info', type: 'route', to: '/contact' }
    ]
  },
  {
    id: 'location',
    question: 'Where is the clinic located?',
    shortLabel: 'Clinic Location',
    keywords: ['where', 'location', 'address', 'directions', 'find', 'map', 'parking'],
    answer: `Vélora Dental Atelier is located at:\n${clinicConfig.address}\n\nSituated inside the Coastal Medical Arts Center. We offer convenient, validated underground patient parking and elevator access.`,
    actions: [
      { label: 'View Map & Directions', type: 'route', to: '/contact' },
      { label: `Call Concierge`, type: 'tel', tel: clinicConfig.phoneTel }
    ]
  },
  {
    id: 'contact',
    question: 'How can I contact the clinic?',
    shortLabel: 'Contact Details',
    keywords: ['contact', 'reach', 'phone', 'call', 'email', 'message', 'whatsapp'],
    answer: `You can reach our concierge desk through several direct channels:\n• Phone: ${clinicConfig.phoneDisplay}\n• WhatsApp: Tap the green button to chat directly\n• Email: ${clinicConfig.email}\n• Emergency Line: ${clinicConfig.emergencyPhoneDisplay}`,
    actions: [
      { label: `Call Now (${clinicConfig.phoneDisplay})`, type: 'tel', tel: clinicConfig.phoneTel },
      { label: 'Chat on WhatsApp', type: 'whatsapp', message: 'Hello Vélora concierge, I am contacting you from the website.' },
      { label: 'Visit Contact Page', type: 'route', to: '/contact' }
    ]
  },
  {
    id: 'first-visit',
    question: 'What should I know before my first visit?',
    shortLabel: 'First Visit Guide',
    keywords: ['first visit', 'new patient', 'prepare', 'bring', 'before visit', 'expectation', 'first time'],
    answer: 'For your first visit, please arrive 10 minutes early (or complete your digital intake forms online). Bring a photo ID and dental insurance card if applicable. Our new patient visit includes an unhurried 3D diagnostic scan, gum health assessment, consultation with your dentist, and complimentary refreshments in our relaxation lounge.',
    actions: [
      { label: 'Read Patient Information Guide', type: 'route', to: '/patient-info' },
      { label: 'Book New Patient Visit', type: 'route', to: '/appointment' }
    ]
  },
  {
    id: 'cleaning',
    question: 'Do you offer teeth cleaning?',
    shortLabel: 'Teeth Cleaning',
    keywords: ['clean', 'cleaning', 'hygiene', 'scale', 'scaling', 'airflow', 'polish', 'stain', 'plaque'],
    answer: 'Yes! We specialize in Swiss Airflow® Guided Biofilm Therapy — a warm-water, gentle spray cleaning that painlessly eliminates coffee, wine, and tobacco stains while being completely soothing on sensitive teeth and gumlines.',
    actions: [
      { label: 'Explore Teeth Cleaning Page', type: 'route', to: '/services/teeth-cleaning' },
      { label: 'Book Airflow Hygiene Session', type: 'route', to: '/appointment' }
    ]
  },
  {
    id: 'braces',
    question: 'How can I learn about braces or aligners?',
    shortLabel: 'Braces & Aligners',
    keywords: ['brace', 'braces', 'aligner', 'aligners', 'invisalign', 'spark', 'orthodontics', 'straighten', 'crooked'],
    answer: 'We provide modern Spark™ and Invisalign® clear aligners as well as discreet ceramic braces. You can explore a 3D digital simulation of your smile progression during a consultation with our orthodontic specialist, Dr. Marcus Brooks.',
    actions: [
      { label: 'Learn About Orthodontics', type: 'route', to: '/services/braces-orthodontics' },
      { label: 'Meet Dr. Marcus Brooks', type: 'route', to: '/dentists/dr-marcus-brooks' },
      { label: 'Book Aligner Consultation', type: 'route', to: '/appointment' }
    ]
  },
  {
    id: 'pricing',
    question: 'How can I ask about treatment pricing?',
    shortLabel: 'Treatment Pricing',
    keywords: ['price', 'pricing', 'cost', 'fee', 'fees', 'insurance', 'afford', 'payment', 'finance', 'expensive'],
    answer: 'We believe in 100% upfront fee transparency with zero hidden surprises. Comprehensive exam & imaging is $180–$340, hygiene $150–$260, and we offer 0% interest flexible payment plans through CareCredit and Sunbit. We also provide clear treatment estimates before any procedure begins.',
    actions: [
      { label: 'View Insurance & Financing Info', type: 'route', to: '/patient-info' },
      { label: 'Ask Fee Estimate on WhatsApp', type: 'whatsapp', message: 'Hello Vélora, I would like to ask about estimated treatment fees.' }
    ]
  },
  {
    id: 'representative',
    question: 'How can I speak to a clinic representative?',
    shortLabel: 'Speak to Representative',
    keywords: ['speak', 'representative', 'human', 'agent', 'person', 'talk', 'receptionist', 'staff'],
    answer: 'While this interactive chatbot is an automated demo concierge, our clinical front desk team is ready to assist you directly during clinic hours by phone or official WhatsApp.',
    actions: [
      { label: `Call Desk (${clinicConfig.phoneDisplay})`, type: 'tel', tel: clinicConfig.phoneTel },
      { label: 'Message Representative on WhatsApp', type: 'whatsapp', message: 'Hello, I would like to speak with a clinic coordinator at Vélora.' },
      { label: 'Submit Contact Inquiry', type: 'route', to: '/contact' }
    ]
  }
];

export const CHATBOT_FALLBACK = {
  answer: "Thank you for asking! As this is an interactive demo concierge, I can answer common questions from our predefined topics, or connect you directly with the clinic team.",
  actions: [
    { label: 'Browse Predefined Questions', type: 'reset_topics' },
    { label: 'Chat on WhatsApp', type: 'whatsapp', message: 'Hello Vélora, I have a specific question not covered in the chatbot.' },
    { label: `Call ${clinicConfig.phoneDisplay}`, type: 'tel', tel: clinicConfig.phoneTel },
    { label: 'View Contact Page', type: 'route', to: '/contact' }
  ]
};
