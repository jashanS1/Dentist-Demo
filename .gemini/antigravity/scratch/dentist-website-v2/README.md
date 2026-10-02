# Vélora Dental Atelier — Lead Generation Edition (Project 2)

> A modern, conversion-focused, multi-page website built for **Vélora Dental Atelier**, an architectural contemporary dental sanctuary in Pacifica, California. Engineered specifically for high-conversion patient lead acquisition, intuitive appointment scheduling, seamless WhatsApp integration, and automated front-desk triage.

---

## 1. Project Overview & Creative Identity

- **Clinic Name**: Vélora Dental Atelier
- **Creative Positioning**: High-End Contemporary Dental Sanctuary & Smile Architecture
- **Location**: `dentist-website-v2/` (Completely isolated from Project 1 and legacy projects)
- **Palette**: Deep Midnight Obsidian (`#090E17`), Luminous Deep Sea Teal (`#0D9488` / `#14B8A6`), Warm Cashmere / Sand (`#FAF8F5`, `#F4EFEA`), and Champagne Gold accents (`#D4AF37`).
- **Typography**: Architectural modern headings (`Outfit`) paired with high-legibility body type (`Plus Jakarta Sans`).

---

## 2. Multi-Page Site Architecture (11 Pages & Routes)

| Route | Page Name | Primary Focus & Lead Features |
| :--- | :--- | :--- |
| `/` | **Home** | Asymmetric hero, consultation quick-finder, 3D technology highlights, before-and-after smile slider, master dentists, fictional testimonials, FAQs, and closing CTAs. |
| `/about` | **About the Clinic** | Atelier history, patient-first care philosophy, Class-B sterilization protocols, HEPA air filtration, clinic milestones timeline. |
| `/services` | **Services Directory** | Full directory of 10 specialized disciplines with category filters, transparent price guide, and direct booking actions. |
| `/services/:slug` | **Service Details (10 pages)** | Procedure deep-dives, step-by-step visit protocols, who it's for, recovery timelines, specialized FAQs, and doctor assignments. |
| `/dentists` | **Our Dentists** | Multidisciplinary specialist faculty showcase, 4 ethical practice pillars, credentials, and consult actions. |
| `/dentists/:slug` | **Dentist Profiles (3 doctors)** | In-depth doctor biography, academic fellowships, board affiliations, clinical philosophy, and direct booking pre-selection. |
| `/appointment` | **Appointment Booking** | Conversion-engineered multi-field booking form with real-time validation, past-date prevention, and interactive demo feedback modal. |
| `/patient-info` | **Patient Info & FAQs** | First visit checklist, dental insurance & 0% interest financing options, aftercare guides, and searchable FAQ directory. |
| `/contact` | **Contact Us** | Direct phone/emergency lines, validated inquiry form, transit/free parking guide, and direct WhatsApp launch. |
| `/privacy` | **Privacy Policy** | Health information confidentiality statement, HIPAA/GDPR mock compliance, and demo portfolio disclaimer. |
| `*` | **Custom 404 Page** | Art-directed error page with quick links to Home, Services, Emergency Care, and Appointments. |

---

## 3. The 10 Core Dental Disciplines

1. **General Dentistry** (`/services/general-dentistry`) — 42-point exams, low-radiation 3D bitewings, composite resin restorations.
2. **Teeth Cleaning & Airflow Hygiene** (`/services/teeth-cleaning`) — Swiss Airflow® warm-water Guided Biofilm Therapy and stain removal.
3. **Teeth Whitening** (`/services/teeth-whitening`) — In-studio LED laser brightening (6–8 shades) & custom-milled take-home trays.
4. **Cosmetic Dentistry & Smile Design** (`/services/cosmetic-dentistry`) — Hand-layered porcelain veneers, composite bonding, Digital Smile Design.
5. **Dental Implants & Restoration** (`/services/dental-implants`) — 3D CBCT guided titanium & zirconia implants, single & full-arch solutions.
6. **Braces & Clear Orthodontics** (`/services/braces-orthodontics`) — Spark™ and Invisalign® clear aligners, airway-aware arch expansion.
7. **Root Canal Treatment** (`/services/root-canal-treatment`) — Gentle microscopic endodontics, pain relief, and natural tooth preservation.
8. **Crowns & Bridges** (`/services/crowns-bridges`) — Same-day CEREC ceramic crowns and durable monolithic zirconia fixed bridges.
9. **Pediatric Dentistry** (`/services/pediatric-dentistry`) — Tear-free gentle visits, cavity-preventing sealants, and positive habit formation.
10. **Emergency Dental Care** (`/services/emergency-dental-care`) — Same-day emergency triage slots, acute pain relief, and knocked-out tooth protocol.

---

## 4. Centralized WhatsApp & Telephone Configuration

All contact details and communication links are centralized in a single configuration file:
📁 `src/config/clinic.js`

### How to configure live numbers:

```javascript
// src/config/clinic.js

// 1. Configure the official WhatsApp business phone number
// (Digits only, including country code — no +, spaces, or dashes)
export const WHATSAPP_NUMBER = '15550192834'; // Replace with live WhatsApp number

// 2. Configure clinic telephone numbers
export const PHONE_DISPLAY = '+1 (555) 019-2834'; // Formatted for visual display
export const PHONE_TEL = '+15550192834';          // Formatted for 'tel:' links
export const EMERGENCY_PHONE_DISPLAY = '+1 (555) 019-9110';
export const EMERGENCY_PHONE_TEL = '+15550199110';
```

### Contextual WhatsApp Integrations:
- **General Inquiry**: Launches WhatsApp pre-filled with general clinic inquiry.
- **Service Details**: Launches WhatsApp pre-filled with the exact service name being viewed.
- **Appointment Booking**: Launches WhatsApp pre-filled with the patient's name, requested service, doctor, and preferred date.
- **Floating Chatbot**: Contextual quick action buttons launch pre-filled WhatsApp conversations directly from chat.

---

## 5. Functional Floating Predefined-Question Chatbot

The floating chatbot is fixed at the bottom-right corner and features:
- **Instant Toggle & Unread Badge**: Opens and closes smoothly without obstructing page content.
- **All 10 Required Predefined Questions**:
  1. *What dental services do you offer?*
  2. *How can I book an appointment?*
  3. *What are your clinic opening hours?*
  4. *Where is the clinic located?*
  5. *How can I contact the clinic?*
  6. *What should I know before my first visit?*
  7. *Do you offer teeth cleaning?*
  8. *How can I learn about braces or aligners?*
  9. *How can I ask about treatment pricing?*
  10. *How can I speak to a clinic representative?*
- **Actionable Responses**: Answers provide interactive action buttons (navigating directly to the booking form, launching WhatsApp with a prefilled message, or initiating a phone call).
- **Keyword Search & Polite Fallback**: Users can type custom inquiries. The concierge matches keywords or politely explains that this demo concierge supports predefined clinic topics, offering direct WhatsApp and telephone channels.

---

## 6. Appointment Booking & Form Behavior

- **Dynamic URL Parameter Support**: Visiting `/appointment?service=teeth-whitening&doctor=dr-sophia-chen` automatically pre-selects the requested service and doctor.
- **Real-Time Validation**: Full name, email format, phone length, requested service, and appointment date.
- **Past Date Prevention**: The date picker enforces `min={todayISO}` dynamically, blocking past date selection.
- **Confirmation Feedback & Demo Disclaimer**: Upon submission, an interactive summary modal displays all entered appointment details and clearly explains that the submission is an illustrative frontend demo. It provides an instant button to transmit those exact appointment details via WhatsApp.

---

## 7. Technology Stack & Directory Structure

- **Framework**: React 18 / React 19 Compatible
- **Bundler**: Vite 5
- **Routing**: React Router DOM 6
- **Icons**: Lucide React
- **Typography**: Outfit & Plus Jakarta Sans via Google Fonts

```
dentist-website-v2/
├── index.html
├── package.json
├── vite.config.js
├── test-suite.cjs               # Automated verification suite
├── public/
│   └── favicon.svg              # Custom dental sparkle logo
├── src/
│   ├── main.jsx                 # Entrypoint with BrowserRouter
│   ├── App.jsx                  # Master route definitions & layout shell
│   ├── index.css                # Architectural luxury design system
│   ├── config/
│   │   └── clinic.js            # Centralized phone, WhatsApp & clinic details
│   ├── data/
│   │   ├── servicesData.js      # 10 comprehensive service records
│   │   ├── dentistsData.js      # 3 specialist dentist profiles
│   │   ├── faqData.js           # Categorized FAQ knowledge base
│   │   └── chatbotData.js       # 10 predefined Q&A flows & action chips
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBanner.jsx    # Hours & emergency availability ribbon
│   │   │   ├── Navbar.jsx       # Sticky header with dropdown & quick CTAs
│   │   │   └── Footer.jsx       # Comprehensive directory footer & demo notice
│   │   ├── chatbot/
│   │   │   └── FloatingChatbot.jsx  # Functional predefined Q&A concierge
│   │   ├── forms/
│   │   │   └── AppointmentForm.jsx  # Validated appointment booking form
│   │   └── ui/
│   │       ├── ServiceCard.jsx  # Conversion service card
│   │       ├── DentistCard.jsx  # Doctor profile card
│   │       └── SmileSlider.jsx  # Interactive before/after smile preview
│   └── pages/
│       ├── HomePage.jsx
│       ├── AboutPage.jsx
│       ├── ServicesPage.jsx
│       ├── ServiceDetailPage.jsx
│       ├── DentistsPage.jsx
│       ├── DentistDetailPage.jsx
│       ├── AppointmentPage.jsx
│       ├── PatientInfoPage.jsx
│       ├── ContactPage.jsx
│       ├── PrivacyPage.jsx
│       └── NotFoundPage.jsx
└── dist/                        # Production build output
```

---

## 8. Development & Build Commands

Inside `dentist-website-v2`:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (Port 5174)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview

# 5. Run automated verification test suite
node test-suite.cjs
```

---

## 9. Verification & Test Results

The project was validated using both automated and functional test checks:
- **Build Compilation**: `npm run build` completed cleanly (1929 modules transformed, 0 errors).
- **Test Suite**: `node test-suite.cjs` passed with 6/6 automated checks verified:
  - Central clinic configuration verified with WhatsApp & phone generators.
  - All 10 required specialized services confirmed present.
  - All 3 specialist dentist profiles confirmed with credentials and bios.
  - All 10 predefined chatbot questions confirmed with structured answers and actions.
  - All 11 application routes confirmed wired in `App.jsx`.
  - Production `dist/index.html` confirmed generated with valid bundle markup.
- **First Project Preservation**: `C:\Users\L14\Downloads\PORTFOLIO` (`lumina-dental-demo`) and existing scratch directories verified 100% untouched.
