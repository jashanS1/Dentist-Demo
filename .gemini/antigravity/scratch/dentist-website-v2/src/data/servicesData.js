export const servicesData = [
  {
    slug: 'general-dentistry',
    title: 'General Dentistry',
    subtitle: 'Comprehensive examinations, digital radiography & restorative wellness',
    category: 'Preventive & Essential',
    badge: 'Everyday Wellness',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80',
    summary: 'The cornerstone of lifelong oral vitality. We combine ultra-low radiation 3D scanning, gentle micro-dentistry, and biometric restorative solutions to protect your natural smile.',
    detailedDescription: 'At Vélora Dental Atelier, general dentistry is approached with the delicacy of preventative medicine and the precision of architecture. Rather than reactive drilling, our protocols emphasize early diagnostic detection with fluorescence caries detection, digital bite balancing, and tooth-colored composite restorations that mimic natural enamel prism refraction.',
    benefits: [
      'Comprehensive 42-point oral health and soft-tissue cancer screening',
      'Ultra-low radiation digital HD bitewings & panoramic imaging',
      'Minimally invasive composite resin restorations (100% BPA and mercury-free)',
      'Custom nightguards for bruxism and TMJ muscle decompression'
    ],
    candidates: 'Ideal for all adults and teens seeking an unhurried, thorough baseline examination, routine check-ups, or prompt treatment of sensitive, worn, or broken teeth.',
    processSteps: [
      { step: '01', title: 'Sensory Welcome & Digital Check-In', description: 'Begin in our lounge with warm herbal tea while your digital medical and dental history is securely reviewed.' },
      { step: '02', title: '3D Intraoral & Radiographic Mapping', description: 'Zero-gag 3D scanning captures 6,000 frames per second, projecting high-resolution images of your teeth onto our chairside display.' },
      { step: '03', title: 'Collaborative Treatment Consultation', description: 'Dr. Vance or Dr. Chen walks you through every tooth, discussing preventive strategies with complete fee transparency before any procedure starts.' },
      { step: '04', title: 'Gentle Restorative Care', description: 'Treatment under warming blankets, noise-canceling headphones, and virtually imperceptible computer-assisted wand anesthesia.' }
    ],
    duration: '60 – 75 minutes for comprehensive initial exam & hygiene.',
    recovery: 'Zero downtime; immediate return to your regular daily activities.',
    pricingGuide: '$180 – $340 for comprehensive new patient examination & diagnostics (insurance accepted).',
    faqs: [
      { q: 'How often should I schedule a general dental review?', a: 'For most healthy adults, a review every 6 months is standard. Patients with a history of periodontal conditions or high caries risk may benefit from customized 3-to-4 month recall intervals.' },
      { q: 'Do you use silver amalgam fillings?', a: 'No. Vélora is an exclusively tooth-preserving, biomimetic clinic. We utilize nano-hybrid porcelain-filled resins and lab-milled ceramics that match your natural tooth shade seamlessly.' },
      { q: 'What happens if you discover a cavity?', a: 'We show you the high-resolution intraoral photo immediately. If small, we may monitor with remineralization therapies or schedule a quick, gentle composite bonding appointment.' }
    ],
    featured: true,
    relatedDentistSlugs: ['dr-adrian-vance', 'dr-sophia-chen']
  },
  {
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning & Airflow Hygiene',
    subtitle: 'Spa-inspired prophylaxis, airflow stain removal & periodontal therapy',
    category: 'Preventive & Essential',
    badge: 'Gentle Spa Hygiene',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    summary: 'Transform your hygiene visit into a rejuvenating therapy. Our Swiss Airflow® guided biofilm technology painlessly lifts stubborn tea, coffee, and nicotine stains while revitalizing gum tissues.',
    detailedDescription: 'Traditional scrapers and harsh ultrasonic tips can cause tooth sensitivity and dental anxiety. Vélora employs warm-water Guided Biofilm Therapy (GBT) using micronized erythritol powder. The pressurized spray gently polishes enamel without scratching, cleans beneath the gumline, and restores the pristine mirror-smooth feel to your teeth.',
    benefits: [
      'Painless warm-water Airflow® technology — ideal for sensitive teeth',
      'Flawless elimination of espresso, red wine, and tobacco stains',
      'Early detection and management of gingivitis and periodontal pocketing',
      'Remineralizing hydroxyapatite and fluoride varnish application'
    ],
    candidates: 'Recommended for everyone every 4 to 6 months, and essential for orthodontic aligner wearers and patients with dental implants seeking gentle maintenance.',
    processSteps: [
      { step: '01', title: 'Biofilm Disclosing Dye', description: 'A plant-based dye temporarily illuminates hidden bacterial plaque, allowing you to see exactly where biofilm lingers.' },
      { step: '02', title: 'Swiss Airflow® Micro-Cleaning', description: 'A gentle jet of warm water and superfine powder effortlessly glides across teeth, restorations, and tongue surfaces.' },
      { step: '03', title: 'Targeted Ultrasonic Scaling', description: 'Painless subgingival tartar removal focused only on the hardened calculus deposits that Airflow has already dislodged.' },
      { step: '04', title: 'Protective Enamel Glaze', description: 'Application of bioactive peptides or remineralizing paste to seal enamel pores and leave your smile sparkling.' }
    ],
    duration: '45 – 60 minutes.',
    recovery: 'Immediate. We recommend avoiding dark berries, coffee, or curry for 2 hours post-polish.',
    pricingGuide: '$150 – $260 depending on prophylactic cleaning level or periodontal maintenance needs.',
    faqs: [
      { q: 'Does Airflow cleaning hurt sensitive teeth?', a: 'Not at all. The water temperature is warmed to soothing body temperature (37°C), and the erythritol powder particles are ten times finer than conventional sodium bicarbonate.' },
      { q: 'Can I have my teeth cleaned on the same day as my exam?', a: 'Yes, our New Patient Signature Session bundles a comprehensive diagnostic assessment with a full Airflow hygiene therapy.' }
    ],
    featured: true,
    relatedDentistSlugs: ['dr-sophia-chen']
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening & Brightening',
    subtitle: 'In-studio laser brightening and custom-milled take-home whitening systems',
    category: 'Cosmetic & Aesthetic',
    badge: 'Signature Brightening',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
    summary: 'Achieve a luminous, red-carpet smile safely under clinical supervision. Experience up to 6–8 shades of brightening with zero enamel damage and minimal sensitivity.',
    detailedDescription: 'Commercial over-the-counter strips often cause dehydration, gum burns, and uneven splotchiness. At Vélora, our clinical cosmetic team utilizes desensitizing LED-activated hydrogen peroxide chemistry coupled with post-treatment potassium nitrate infusion. You achieve deep intrinsic stain lift without compromising tooth structure.',
    benefits: [
      'Clinically guided shade lift of up to 6 to 8 shades in a single 75-minute visit',
      'Proprietary desensitizing phototherapy minimizing post-treatment discomfort',
      'Precision gum-barrier isolation to completely safeguard delicate gingiva',
      'Includes custom-scanned 3D aligner trays for at-home touch-ups'
    ],
    candidates: 'Adults with natural teeth seeking to brighten smiles dulled by aging, coffee, tea, wine, or medication discoloration.',
    processSteps: [
      { step: '01', title: 'Shade Matching & Shade Guide Photography', description: 'We record your starting tooth shade under clinical daylight studio illumination.' },
      { step: '02', title: 'Gingival Barrier Application', description: 'A liquid dam is light-cured along your gum margin to ensure whitening gel touches only enamel.' },
      { step: '03', title: '3 Cycles of Active LED Activation', description: 'Three 15-minute intervals of medical-grade whitening gel activated by our cool-temperature LED beam.' },
      { step: '04', title: 'Mineral Hydration Infusion', description: 'A soothing calcium-phosphate serum is bathed over the teeth to rehydrate enamel and lock in luminosity.' }
    ],
    duration: '75 minutes in-studio.',
    recovery: 'Zero downtime. Adhere to a "white diet" (no dark sauces or wine) for 48 hours.',
    pricingGuide: '$380 – $650 for complete in-studio laser whitening including take-home maintenance kit.',
    faqs: [
      { q: 'Will whitening damage my enamel?', a: 'No. Professional dental whitening works by releasing oxygen free-radicals that break down pigmented organic molecules trapped in enamel pores without removing enamel minerals.' },
      { q: 'Will whitening change the color of existing crowns or veneers?', a: 'No, synthetic materials like ceramic and composite bonding do not respond to whitening gels. We plan whitening prior to replacing visible restorations.' }
    ],
    featured: true,
    relatedDentistSlugs: ['dr-sophia-chen', 'dr-adrian-vance']
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry & Smile Design',
    subtitle: 'Hand-layered porcelain veneers, cosmetic bonding & facial harmony',
    category: 'Cosmetic & Aesthetic',
    badge: 'Artisan Smile Studio',
    image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1200&q=80',
    summary: 'Bespoke smile transformations tailored to your lip dynamics, facial symmetry, and personality. From single-visit composite edge bonding to handcrafted porcelain veneers.',
    detailedDescription: 'True cosmetic dentistry is an art form. Under the direction of Dr. Sophia Chen, we utilize Digital Smile Design (DSD) to simulate your ideal proportions before any preparation is touched. We collaborate with master ceramists in Southern California to sculpt ultra-thin feldspathic and lithium disilicate veneers that transmit light like youthful organic enamel.',
    benefits: [
      'Digital Smile Design (DSD) 3D simulation — preview your new smile beforehand',
      'Ultra-thin minimal-prep porcelain veneers preserving maximum healthy tooth enamel',
      'Micro-aesthetic composite bonding for chipped edges and dark triangles',
      'Laser gum recontouring for harmonious, balanced gum-to-tooth architecture'
    ],
    candidates: 'Individuals looking to correct chipped, worn, unevenly spaced, stained, or misaligned teeth with a permanent, natural-looking transformation.',
    processSteps: [
      { step: '01', title: 'Facial Aesthetic Analysis', description: 'Studio portraits and dynamic video capture how your smile interacts with your speech, lips, and facial contours.' },
      { step: '02', title: 'Direct Smile Mock-Up', description: 'We place temporary aesthetic resin over your teeth so you can look in the mirror and experience the shape and length.' },
      { step: '03', title: 'Micro-Preparation & 3D Scans', description: 'Conservative enamel shaping under surgical loupes, followed by optical scans sent to our boutique ceramic lab.' },
      { step: '04', title: 'Permanent Master Bonding', description: 'Veneers are bonded with adhesive resin cements for exceptional bond strength and seamless margins.' }
    ],
    duration: '2 to 3 appointments spaced 10–14 days apart.',
    recovery: 'Minimal tenderness for 24–48 hours as gums adapt to new margins.',
    pricingGuide: 'Consultations include digital mockup; individual veneers range $1,200 – $2,200 per tooth.',
    faqs: [
      { q: 'How long do porcelain veneers last?', a: 'With proper oral hygiene, nightguard protection, and regular bi-annual maintenance, high-grade porcelain veneers routinely last 15 to 20+ years.' },
      { q: 'Can I choose how white my veneers look?', a: 'Yes. We customize hue, chroma, translucency, and surface texture so your smile can be as luminous or as subtly organic as you prefer.' }
    ],
    featured: true,
    relatedDentistSlugs: ['dr-sophia-chen']
  },
  {
    slug: 'dental-implants',
    title: 'Dental Implants & Restoration',
    subtitle: 'Permanent titanium & zirconia tooth replacement with 3D CBCT navigation',
    category: 'Restorative & Surgical',
    badge: 'Permanent Restoration',
    image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa2b8?auto=format&fit=crop&w=1200&q=80',
    summary: 'The gold standard for missing teeth. Replace one tooth, multiple teeth, or full dental arches with biocompatible implants that fuse securely into jawbone for lifelong function.',
    detailedDescription: 'Led by Dr. Adrian Vance, our implant suite integrates high-resolution CBCT volumetric imaging with 3D surgical guide printing. This computer-guided precision guarantees sub-millimeter accuracy, minimizes surgical trauma, reduces swelling, and accelerates osseointegration.',
    benefits: [
      'Prevents jawbone resorption and preserves natural facial bone structure',
      'Looks, feels, and bites with the stability of a natural healthy tooth root',
      'Computer-guided flapless surgical placement for rapid healing and minimal discomfort',
      'Crafted with medical-grade Grade IV titanium or metal-free ceramic zirconia'
    ],
    candidates: 'Adults with one or more missing or non-restorable teeth with sufficient jawbone density (or candidates for gentle bone grafting).',
    processSteps: [
      { step: '01', title: '3D Bone & Nerve Diagnostic Scan', description: 'CBCT scan evaluates bone height, bone density, and anatomic structures with zero guesswork.' },
      { step: '02', title: 'Virtual Surgical Planning', description: 'The exact depth, angulation, and diameter of the implant are mapped in 3D CAD software.' },
      { step: '03', title: 'Gentle Guided Placement', description: 'The implant fixture is placed through a custom surgical guide under profound local anesthesia or IV twilight sedation.' },
      { step: '04', title: 'Custom Zirconia Crown Delivery', description: 'Following osseointegration, a custom abutment and lifelike screw-retained ceramic crown are fitted.' }
    ],
    duration: '30 – 60 minutes per implant surgery; healing period 3–4 months.',
    recovery: 'Mild soreness for 2–4 days, easily managed with over-the-counter anti-inflammatories.',
    pricingGuide: 'Single implant post, custom abutment, and permanent zirconia crown starting from $2,800 – $4,500 total.',
    faqs: [
      { q: 'Is dental implant surgery painful?', a: 'Most patients report dental implant placement is significantly easier and less uncomfortable than a tooth extraction. We offer gentle sedation options for complete peace of mind.' },
      { q: 'What is the success rate for dental implants?', a: 'In healthy non-smoking patients with good oral hygiene, modern dental implants achieve success rates exceeding 98%.' }
    ],
    featured: true,
    relatedDentistSlugs: ['dr-adrian-vance']
  },
  {
    slug: 'braces-orthodontics',
    title: 'Braces & Clear Orthodontics',
    subtitle: 'Discreet aligner therapy, ceramic brackets & airway-aware bite correction',
    category: 'Orthodontics',
    badge: 'Discreet Alignment',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
    summary: 'Straighten your smile discreetly without unsightly metal brackets. Featuring custom Spark™ and Invisalign® clear aligners, modern ceramic braces, and adult accelerated orthodontics.',
    detailedDescription: 'Dr. Marcus Brooks approaches orthodontics not merely as straightening teeth, but as balancing chewing biomechanics, airway volume, and facial profile aesthetics. Using digital virtual progression software, you can watch your teeth transition week by week before you even wear your first clear aligner.',
    benefits: [
      'Virtually invisible clear aligners removable for dining, brushing, and flossing',
      'Advanced digital tooth movements reducing overall treatment times by up to 30%',
      'Airway-friendly expansion techniques that improve nasal breathing and profile posture',
      'Custom nighttime Vivera® retainers included with every completed case'
    ],
    candidates: 'Teens and adults struggling with crowding, spacing, overbites, crossbites, or relapse from teenage braces.',
    processSteps: [
      { step: '01', title: 'Digital Orthodontic Simulation', description: 'We capture a high-speed optical impression and generate a 3D video simulation of your smile progression.' },
      { step: '02', title: 'Custom Aligner Fabrication', description: 'Your series of custom-milled medical polymer aligners is engineered with microscopic precision.' },
      { step: '03', title: 'Aligner Fitting & Smart Attachments', description: 'Discreet tooth-colored micro-attachments are placed to provide gentle, controlled vector forces.' },
      { step: '04', title: 'Remote Dental Monitoring', description: 'Track your progress through our mobile app, reducing in-office check-ins to every 8–10 weeks.' }
    ],
    duration: 'Average treatment time ranges 6 to 14 months depending on complexity.',
    recovery: 'Mild pressure sensation for 24–48 hours whenever swapping to a fresh tray set.',
    pricingGuide: 'Comprehensive clear aligner treatment from $3,200 – $5,900 with 0% interest monthly payment plans.',
    faqs: [
      { q: 'How many hours a day must I wear clear aligners?', a: 'For predictable tooth movements, aligners must be worn 20 to 22 hours per day, taking them out only to eat, drink non-water beverages, and brush.' },
      { q: 'Am I too old for orthodontic treatment?', a: 'Never. Over 40% of our orthodontic patients are adults in their 30s, 40s, 50s, and beyond who desire both aesthetic confidence and functional bite balance.' }
    ],
    featured: true,
    relatedDentistSlugs: ['dr-marcus-brooks']
  },
  {
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment & Endodontics',
    subtitle: 'Pain-relieving microscopic endodontics designed to save your natural tooth',
    category: 'Restorative & Urgent',
    badge: 'Gentle Tooth Saver',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    summary: 'Debunking the root canal myth with soothing, gentle care. Modern microscopic endodontics eliminates severe toothache and disinfects infected nerve canals comfortably in one visit.',
    detailedDescription: 'When deep decay, trauma, or a fracture reaches the dental pulp, infection triggers throbbing pain. Rather than extracting the tooth, endodontic therapy purges bacterial contamination under high-magnification surgical operating microscopes, seals the canals hermetically, and preserves your natural root foundation for decades.',
    benefits: [
      'Instant relief from acute toothache, temperature sensitivity, and dental abscesses',
      'Carl Zeiss surgical microscope illumination ensuring no complex micro-canals are missed',
      'Rotary nickel-titanium instrumentation for ultra-quiet, fast, and gentle cleaning',
      'Preserves your natural tooth, avoiding the need for extraction and bridges'
    ],
    candidates: 'Patients experiencing sharp throbbing pain, persistent sensitivity to hot and cold, swelling around the gumline, or deep internal decay.',
    processSteps: [
      { step: '01', title: 'Complete Local Anesthetic Block', description: 'We ensure the area is 100% numb before touching the tooth; you will feel zero sharp sensation.' },
      { step: '02', title: 'Micro-Access & Canal Disinfection', description: 'Under rubber dam isolation, fine instruments clean and irrigate infected pulp tissue with antibacterial solutions.' },
      { step: '03', title: 'Bioceramic Hermetic Seal', description: 'Canals are filled with biocompatible warm gutta-percha and bioceramic sealer to prevent reinfection.' },
      { step: '04', title: 'Core Build-Up & Protective Crown', description: 'A bonded composite core is placed, preparing the tooth for a durable ceramic crown to prevent fracture.' }
    ],
    duration: '60 – 90 minutes (completed in 1 or 2 visits).',
    recovery: 'Mild tissue tenderness for 1 to 3 days, easily soothed with ibuprofen.',
    pricingGuide: '$950 – $1,600 depending on anterior vs. multi-rooted molar canal complexity.',
    faqs: [
      { q: 'Does a root canal hurt during the procedure?', a: 'No. Modern anesthetics completely numb the tooth and surrounding bone. The procedure actually eliminates the excruciating pain caused by the inflamed nerve!' },
      { q: 'Why do I need a crown after a root canal?', a: 'Once the nerve and blood supply are removed, the remaining tooth structure becomes brittle over time. A ceramic crown wraps around the tooth to prevent it from cracking under heavy chewing forces.' }
    ],
    featured: false,
    relatedDentistSlugs: ['dr-adrian-vance']
  },
  {
    slug: 'crowns-bridges',
    title: 'Crowns & Restorative Bridges',
    subtitle: 'Same-day CEREC ceramic crowns and durable aesthetic fixed bridges',
    category: 'Restorative & Essential',
    badge: 'Same-Day Precision',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    summary: 'Restore broken, severely decayed, or missing teeth with custom-milled zirconia and E.max ceramics that seamlessly harmonize with your natural bite and smile shade.',
    detailedDescription: 'Gone are the days of sticky putty impressions and weeks with fragile temporary plastic crowns that fall off during dinner. With in-house CAD/CAM CEREC milling and digital optical cameras, Vélora can fabricate and permanently bond a custom ceramic crown in a single appointment while you relax in our lounge.',
    benefits: [
      'Same-Day CEREC ceramic crowns available — walk in and walk out with your final restoration',
      'No messy putty impressions; 100% digital 3D intraoral scanning',
      'Ultra-strong monolithic zirconia capable of withstanding maximum chewing forces',
      'Fixed dental bridges to replace missing teeth when implants are contraindicated'
    ],
    candidates: 'Patients with cracked teeth, extensive old fillings, severe wear, after root canal treatment, or replacing missing teeth with a fixed bridge.',
    processSteps: [
      { step: '01', title: 'Precision Tooth Preparation', description: 'Decay or fractured enamel is carefully removed under magnification to establish smooth finish lines.' },
      { step: '02', title: '3D Optical HD Scan', description: 'A digital impression captures the exact margins and your unique chewing bite in 45 seconds.' },
      { step: '03', title: 'In-House CAD Design & Robotic Milling', description: 'Watch your crown being sculpted from a solid block of high-strength ceramic in our milling suite.' },
      { step: '04', title: 'Glaze, Characterization & Bonding', description: 'Custom staining to match adjacent teeth, followed by resin bonding for permanent strength.' }
    ],
    duration: 'Single visit (approx. 90 minutes) or two traditional visits.',
    recovery: 'Zero downtime; minor gum edge sensitivity for 24 hours.',
    pricingGuide: '$1,100 – $1,800 per crown depending on material (Zirconia or Lithium Disilicate).',
    faqs: [
      { q: 'How long will my ceramic crown last?', a: 'With good flossing habits and regular dental checkups, ceramic and zirconia crowns regularly last 15 to 25 years.' },
      { q: 'Is a bridge better than an implant?', a: 'Implants are usually preferred because they do not require preparing adjacent healthy teeth. However, bridges remain an excellent alternative when bone density is low or speed is prioritized.' }
    ],
    featured: false,
    relatedDentistSlugs: ['dr-adrian-vance', 'dr-sophia-chen']
  },
  {
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry & Junior Care',
    subtitle: 'Nurturing, positive, and tear-free dental experiences for growing smiles',
    category: 'Family & Preventive',
    badge: 'Gentle Junior Care',
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Fostering a lifetime of radiant dental confidence. We specialize in unhurried, playful visits for toddlers, children, and teens with sensory-friendly amenities and gentle prevention.',
    detailedDescription: 'A child’s early dental visits define how they will care for their teeth into adulthood. At Vélora, our pediatric appointments are designed with empathy: ceiling-mounted streaming cartoons, silly sunglasses, "counting teeth" games, and zero pressure. We focus on cavity prevention with fluoride varnishes and protective pit-and-fissure sealants.',
    benefits: [
      'Sensory-friendly, calming clinic environment tailored for young children',
      'Preventive pit-and-fissure sealants that shield vulnerable chewing grooves from cavities',
      'Early jaw and airway development screenings to prevent future orthodontic complications',
      'Positive reinforcement and treasure chest rewards for every young explorer'
    ],
    candidates: 'Infants (from age 1 or first tooth eruption), children, and teenagers up to age 16.',
    processSteps: [
      { step: '01', title: 'Fun Lounge Discovery & "Tell-Show-Do"', description: 'We introduce the dental instruments as magical tooth counters and water ticklers.' },
      { step: '02', title: 'Gentle Child Examination', description: 'Lap-to-lap exam for toddlers or unhurried chair check-up for older children.' },
      { step: '03', title: 'Flavored Bubble Polish & Fluoride', description: 'Fun choice of fruit flavors for gentle plaque removal and enamel strengthening.' },
      { step: '04', title: 'Parent Guidance & Certificate', description: 'Empowering parents with pragmatic snacking, brushing, and eruption milestones advice.' }
    ],
    duration: '35 – 45 minutes.',
    recovery: 'Immediate.',
    pricingGuide: '$120 – $190 for comprehensive pediatric examination, cleaning, and fluoride therapy.',
    faqs: [
      { q: 'When should my child first visit a dentist?', a: 'The American Academy of Pediatric Dentistry recommends scheduling the first visit within 6 months after the first baby tooth emerges, or by the child’s first birthday.' },
      { q: 'Are dental sealants safe for my child?', a: 'Yes, sealants are painless, BPA-free clear protective coatings applied to back molars. They reduce tooth decay risk in back teeth by up to 80%.' }
    ],
    featured: false,
    relatedDentistSlugs: ['dr-sophia-chen', 'dr-marcus-brooks']
  },
  {
    slug: 'emergency-dental-care',
    title: 'Emergency Dental Care & Triage',
    subtitle: 'Same-day urgent relief for acute dental pain, trauma, and broken teeth',
    category: 'Urgent Care',
    badge: 'Same-Day Urgent Care',
    image: 'https://images.unsplash.com/photo-1581585097435-7081142a0d9d?auto=format&fit=crop&w=1200&q=80',
    summary: 'Dental emergencies cannot wait. We reserve daily priority slots for sudden toothaches, knocked-out teeth, broken crowns, sports trauma, and severe oral infections.',
    detailedDescription: 'Severe tooth pain can be debilitating. If you suffer a cracked tooth, lost filling, throbbing swelling, or accidental trauma, call our dedicated triage desk immediately. Our emergency clinical team provides fast diagnosis, instant pain relief, and temporary or permanent stabilization on the very same day.',
    benefits: [
      'Reserved daily morning and afternoon slots for same-day emergency triage',
      'Rapid digital diagnostics and pain relief protocol within minutes of arrival',
      'Immediate stabilization for knocked-out (avulsed), fractured, or loosened teeth',
      'Direct WhatsApp emergency line for urgent after-hours triage guidance'
    ],
    candidates: 'Anyone experiencing severe unmanageable pain, facial swelling, bleeding, a knocked-out tooth, or sudden structural breakage.',
    processSteps: [
      { step: '01', title: 'Priority Triage & Instant Comfort', description: 'Immediate assessment by our emergency team and rapid pain management administration.' },
      { step: '02', title: 'Digital X-Ray & Trauma Assessment', description: 'Targeted imaging to identify nerve exposure, root fractures, or localized abscesses.' },
      { step: '03', title: 'Definitive Relief Procedure', description: 'Whether temporary soothing dressing, drainage, nerve sedation, or tooth repair, pain is eliminated.' },
      { step: '04', title: 'Clear Recovery & Follow-Up Plan', description: 'Prescription antibiotics/analgesics if necessary, with scheduled restorative follow-up.' }
    ],
    duration: '45 – 75 minutes.',
    recovery: 'Varies with condition; immediate relief of acute agony.',
    pricingGuide: '$150 emergency triage & diagnostic X-ray fee; treatment quoted transparently before proceeding.',
    faqs: [
      { q: 'What should I do if a tooth is knocked completely out?', a: 'Time is critical! Handle the tooth only by the white crown, never the root. If possible, gently rinse with milk or saline (do not scrub) and try reinserting it into the socket. If not, store it in cold milk or saliva and call us immediately — ideally within 30–60 minutes.' },
      { q: 'Do you accept emergency walk-ins?', a: 'Yes, but we strongly recommend calling our desk or messaging WhatsApp first so our team can prepare the surgical suite and minimize your waiting time.' }
    ],
    featured: true,
    relatedDentistSlugs: ['dr-adrian-vance', 'dr-marcus-brooks']
  }
];
