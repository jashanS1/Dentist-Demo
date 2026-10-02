/**
 * CENTRAL CLINIC CONFIGURATION
 * -------------------------------------------------------------
 * To configure the live WhatsApp number:
 * Replace `WHATSAPP_NUMBER` with your official WhatsApp business number in international format
 * WITHOUT symbols, spaces, or plus sign (e.g., '15550192834' for US, '447911123456' for UK).
 *
 * To configure the clinic telephone:
 * Update `PHONE_DISPLAY` and `PHONE_TEL` below.
 */

export const WHATSAPP_NUMBER = '15550192834'; // Configurable WhatsApp phone number (Digits only)
export const PHONE_DISPLAY = '+1 (555) 019-2834';
export const PHONE_TEL = '+15550192834';
export const EMERGENCY_PHONE_DISPLAY = '+1 (555) 019-9110';
export const EMERGENCY_PHONE_TEL = '+15550199110';

export const clinicConfig = {
  name: 'Vélora Dental Atelier',
  shortName: 'Vélora',
  tagline: 'The Art of Modern Dentistry & Smile Architecture',
  subheading: 'Anxiety-free, precision digital dentistry delivered in a tranquil, boutique sanctuary.',
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  emergencyPhoneDisplay: EMERGENCY_PHONE_DISPLAY,
  emergencyPhoneTel: EMERGENCY_PHONE_TEL,
  whatsappNumber: WHATSAPP_NUMBER,
  email: 'concierge@veloradental.com',
  address: '742 Ocean Crest Boulevard, Suite 400, Pacifica, CA 94044',
  neighborhood: 'Coastal Medical Arts Center · Dedicated Patient Parking',
  
  hours: [
    { days: 'Monday – Thursday', time: '7:30 AM – 6:30 PM', note: 'Extended evening hours' },
    { days: 'Friday', time: '8:00 AM – 4:00 PM', note: 'Regular consultations' },
    { days: 'Saturday', time: '9:00 AM – 2:00 PM', note: 'Hygiene & aesthetic bookings' },
    { days: 'Sunday', time: 'Closed', note: '24/7 Emergency on-call triage' }
  ],

  stats: [
    { label: 'Patient Satisfaction', value: '99.4%' },
    { label: 'Verified Google Reviews', value: '4.9★ (850+)' },
    { label: 'Years Serving Pacifica', value: '14+' },
    { label: 'Same-Day Crown Tech', value: 'CEREC 3D' }
  ],

  // WhatsApp contextual URL generators
  getWhatsAppUrl: (message = 'Hello Vélora Dental Atelier, I would like to enquire about your clinic services.') => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  },

  getAppointmentWhatsAppUrl: ({ service = 'General Consultation', doctor = 'Next Available Specialist', date = 'Upcoming', name = 'a patient' } = {}) => {
    const text = `Hello Vélora Dental Atelier, I would like to schedule an appointment.\n\n• Name: ${name}\n• Service: ${service}\n• Specialist: ${doctor}\n• Preferred Date: ${date}\n\nPlease confirm availability. Thank you!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  },

  getServiceWhatsAppUrl: (serviceName) => {
    const text = `Hello Vélora Dental Atelier, I am interested in learning more about your "${serviceName}" treatment options. Could you provide details on consultation availability?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  },

  getEmergencyWhatsAppUrl: () => {
    const text = `URGENT DENTAL ENQUIRY: Hello Vélora Emergency Team, I am experiencing dental discomfort/urgency and would like same-day triage guidance.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }
};
