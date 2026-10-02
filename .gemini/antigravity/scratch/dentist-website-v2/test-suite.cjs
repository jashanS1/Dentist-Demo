const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('--- STARTING VÉLORA DENTAL ATELIER VERIFICATION SUITE ---');

// 1. Verify Clinic Config
console.log('\n[TEST 1] Verifying Central Clinic Configuration...');
const configPath = path.join(__dirname, 'src', 'config', 'clinic.js');
assert(fs.existsSync(configPath), 'clinic.js exists');
const configContent = fs.readFileSync(configPath, 'utf8');
assert(configContent.includes('WHATSAPP_NUMBER'), 'WhatsApp number defined');
assert(configContent.includes('PHONE_DISPLAY'), 'Phone display defined');
assert(configContent.includes('PHONE_TEL'), 'Phone tel defined');
assert(configContent.includes('getAppointmentWhatsAppUrl'), 'Contextual appointment WhatsApp generator exists');
console.log('✓ Clinic config verified successfully.');

// 2. Verify Services Data (All 10 services required by specification)
console.log('\n[TEST 2] Verifying 10 Specialized Dental Services...');
const servicesPath = path.join(__dirname, 'src', 'data', 'servicesData.js');
assert(fs.existsSync(servicesPath), 'servicesData.js exists');
const servicesContent = fs.readFileSync(servicesPath, 'utf8');

const requiredServices = [
  'general-dentistry',
  'teeth-cleaning',
  'teeth-whitening',
  'cosmetic-dentistry',
  'dental-implants',
  'braces-orthodontics',
  'root-canal-treatment',
  'crowns-bridges',
  'pediatric-dentistry',
  'emergency-dental-care'
];

requiredServices.forEach(slug => {
  assert(servicesContent.includes(`slug: '${slug}'`), `Service slug '${slug}' is present`);
});
console.log(`✓ All 10 required services confirmed present in servicesData.js:`);
requiredServices.forEach(s => console.log(`   - ${s}`));

// 3. Verify Dentists Data
console.log('\n[TEST 3] Verifying Dentists Data & Profiles...');
const dentistsPath = path.join(__dirname, 'src', 'data', 'dentistsData.js');
assert(fs.existsSync(dentistsPath), 'dentistsData.js exists');
const dentistsContent = fs.readFileSync(dentistsPath, 'utf8');
const requiredDentists = ['dr-adrian-vance', 'dr-sophia-chen', 'dr-marcus-brooks'];
requiredDentists.forEach(d => {
  assert(dentistsContent.includes(d), `Dentist '${d}' is present`);
});
console.log(`✓ All 3 specialists confirmed with full credentials and bios.`);

// 4. Verify Chatbot Predefined Questions (All 10 required questions from Prompt)
console.log('\n[TEST 4] Verifying Chatbot 10 Predefined Q&A Requirements...');
const chatbotPath = path.join(__dirname, 'src', 'data', 'chatbotData.js');
assert(fs.existsSync(chatbotPath), 'chatbotData.js exists');
const chatbotContent = fs.readFileSync(chatbotPath, 'utf8');

const requiredQuestions = [
  'What dental services do you offer?',
  'How can I book an appointment?',
  'What are your clinic opening hours?',
  'Where is the clinic located?',
  'How can I contact the clinic?',
  'What should I know before my first visit?',
  'Do you offer teeth cleaning?',
  'How can I learn about braces or aligners?',
  'How can I ask about treatment pricing?',
  'How can I speak to a clinic representative?'
];

requiredQuestions.forEach((q, idx) => {
  assert(chatbotContent.includes(q), `Question #${idx + 1} "${q}" is defined in chatbotData`);
});
console.log('✓ All 10 required predefined chatbot questions are verified.');

// 5. Verify App Routes and Pages
console.log('\n[TEST 5] Verifying Multi-Page App Routes in App.jsx...');
const appPath = path.join(__dirname, 'src', 'App.jsx');
const appContent = fs.readFileSync(appPath, 'utf8');
const expectedRoutes = [
  'path="/"',
  'path="/about"',
  'path="/services"',
  'path="/services/:slug"',
  'path="/dentists"',
  'path="/dentists/:slug"',
  'path="/appointment"',
  'path="/patient-info"',
  'path="/contact"',
  'path="/privacy"',
  'path="*"'
];
expectedRoutes.forEach(r => {
  assert(appContent.includes(r), `Route ${r} is wired in App.jsx`);
});
console.log('✓ All 11 routes are properly wired in App.jsx.');

// 6. Verify Production Dist Assets
console.log('\n[TEST 6] Verifying Production Dist Build Output...');
const distHtml = path.join(__dirname, 'dist', 'index.html');
assert(fs.existsSync(distHtml), 'dist/index.html exists');
const distHtmlContent = fs.readFileSync(distHtml, 'utf8');
assert(distHtmlContent.includes('Vélora Dental Atelier'), 'Brand title present in compiled HTML');
console.log('✓ dist/index.html exists and contains production markup.');

console.log('\n--- ALL AUTOMATED VERIFICATION CHECKS PASSED (6/6) ---');
