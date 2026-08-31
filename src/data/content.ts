import { VerticalInfo, WorkInitiative, Trustee, DonationSubmission, CollagePhoto, FoundationCampaign } from '../types';

export const VERTICALS: VerticalInfo[] = [
  {
    id: 'animalistt',
    name: 'THE ANIMALISTT',
    subtitle: 'Animal Rescue, Treatment, Feeding & Welfare',
    tagline: 'Speaking for those who cannot ask for help.',
    description: 'Our foundational vertical and largest on-ground operation. Across bustling urban alleys and rural highways, we provide round-the-clock emergency rescue, sterilisation, critical surgical treatment, daily nutritional feeding, and lifelong sanctuary for injured, abandoned, and distressed stray animals.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80', // Street dog rescue care
    caption: 'Post-operative recovery & nourishment ward, North Delhi facility',
    location: 'Delhi NCR & Haryana',
    isPrimary: true,
    pillars: [
      '24/7 Mobile Veterinary Ambulances',
      'Daily Stray Feeding Route (2,800+ animals)',
      'Cruelty Intervention & Legal Advocacy',
      'Old Age & Paralyzed Animal Sanctuary',
      'Anti-Rabies Vaccination & ABC Programs'
    ],
    keyInitiatives: [
      'Street Canine Trauma Care & Orthopaedics',
      'Bovine & Equine Highway Relief Units',
      'Community Feeder Support & Grain Banks'
    ]
  },
  {
    id: 'humanist',
    name: 'THE HUMANIST',
    subtitle: 'Food, Education & Medical Assistance',
    tagline: 'Restoring dignity through essential survival and learning.',
    description: 'Focused on vulnerable street families, daily-wage laborers, elderly destitute individuals, and underprivileged children. We run community dry-ration drives, hot meal kitchens, primary schooling bridge programs, and direct medical sponsorship for life-saving treatments.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80', // Children learning
    caption: 'Bridge education center for children of migrant workers',
    location: 'Varanasi & Lucknow, Uttar Pradesh',
    pillars: [
      'Warm Meal Kitchens & Dry Grain Kits',
      'Remedial Learning & School Fee Grants',
      'Emergency Hospitalization Funds',
      'Elderly Destitute Support & Medicine'
    ],
    keyInitiatives: [
      'Ghat Community Nutrition Program',
      'Slum Micro-Classrooms & Stationery Banks',
      'Chronic Illness Diagnostic Sponsorship'
    ]
  },
  {
    id: 'greenist',
    name: 'THE GREENIST',
    subtitle: 'Plantation, Environment & Conservation',
    tagline: 'Healing Indian landscapes, native flora, and water bodies.',
    description: 'Grassroots environmental restoration committed to creating bio-diverse native green lungs in deforested semi-arid and urban belts. We spearhead Miyawaki native mini-forest plantations, rural pond desilting, rainwater harvesting, and single-use plastic eradication campaigns.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80', // Tree plantation hands
    caption: 'Native sapling planting drive along the degraded Aravalli corridor',
    location: 'Aravalli Hills & Western Maharashtra',
    pillars: [
      'Native Species Miyawaki Urban Forests',
      'Community Waterbody Rejuvenation',
      'Rural Agroforestry & Fruit Saplings',
      'Waste Segregation & Clean-Up Drives'
    ],
    keyInitiatives: [
      'Aravalli Biodiversity Buffer Zone',
      'Village Community Well & Pond Restorations',
      'Seedball Dispersal in Forest Catchments'
    ]
  },
  {
    id: 'feminist',
    name: 'THE FEMINIST',
    subtitle: "Women's Support, Empowerment & Opportunities",
    tagline: 'Sovereignty, safety, and sustainable livelihood for women.',
    description: "Dedicated to socio-economic self-reliance, physical safety, and health dignity for women from marginalized communities. We provide vocational tailoring, handicraft training, digital literacy, menstrual hygiene distribution, legal counselling, and micro-grant seed capital for women-led micro-enterprises.",
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=80', // Indian women collective
    caption: 'Women artisan skill collective & financial literacy workshop',
    location: 'Barmer, Rajasthan & Murshidabad, West Bengal',
    pillars: [
      'Vocational Livelihood & Handloom Hubs',
      'Menstrual Health & Dignity Kits',
      'Domestic Violence Legal Aid & Counselling',
      'Micro-Seed Grants for Women Entrepreneurs'
    ],
    keyInitiatives: [
      'Artisan Self-Help Group Producer Hub',
      'Adolescent Girl Health & Nutrition Circles',
      'Community Paralegal Support Helpline'
    ]
  }
];

export const WORK_INITIATIVES: WorkInitiative[] = [
  {
    id: 'work-1',
    verticalId: 'animalistt',
    title: 'Round-the-Clock Emergency Animal Rescue',
    category: 'Animal rescue',
    location: 'Delhi NCR, India',
    description: 'Our mobile rescue units operate 24 hours a day responding to highway collisions, fall injuries, cruelty cases, and abandoned pedigree pets. Over 40 rescue calls are resolved daily across the national capital region.',
    fieldNotes: 'Equipped with stretchers, oxygen support, trauma kits, and trained rescue paramedics.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Field paramedic tending to an injured street canine in East Delhi'
  },
  {
    id: 'work-2',
    verticalId: 'animalistt',
    title: 'Advanced Surgical Treatment & Recovery Wards',
    category: 'Animal treatment',
    location: 'Gurugram & Faridabad',
    description: 'Providing complex orthopaedic surgeries, maggot wound therapy, amputations, and tumor excisions for destitute community animals free of cost at our specialized transit clinics.',
    fieldNotes: 'Complete with digital X-ray, sterile OT, and heated post-op recovery pens.',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Post-op observation and sterile dressing change'
  },
  {
    id: 'work-3',
    verticalId: 'animalistt',
    title: 'Daily High-Nutrition Feeding Drives',
    category: 'Animal feeding',
    location: 'Industrial belts & urban colonies',
    description: 'Preparing fresh, protein-rich boiled rice, lentils, eggs, and veterinary supplements in central kitchens to feed over 2,800 community animals every evening across 18 designated feeding routes.',
    fieldNotes: 'Collaborating with over 120 dedicated local neighborhood caretakers.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Evening feeding route in an industrial warehouse corridor'
  },
  {
    id: 'work-4',
    verticalId: 'humanist',
    title: 'Bridge Schools for Migrant Children',
    category: 'Education support',
    location: 'Varanasi & Mirzapur, UP',
    description: 'Running informal open-air learning hubs that teach foundational literacy, numeracy, and life skills to children of construction workers, brick kiln laborers, and ragpickers, ultimately enrolling them in formal government schools.',
    fieldNotes: 'Includes free school bags, notebooks, uniforms, and mid-day nutritional snacks.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Open-air morning reading circle by the riverbanks'
  },
  {
    id: 'work-5',
    verticalId: 'humanist',
    title: 'Dignified Food Assistance & Ration Kits',
    category: 'Food assistance',
    location: 'Slum clusters & transit stations',
    description: 'Distributing monthly dry ration packages (wheat flour, pulses, mustard oil, rice, spices, salt) to widowed mothers, disabled breadwinners, and elderly citizens unable to work.',
    fieldNotes: 'Each ration pack supports a family of four for 30 full days.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Monthly grain kit distribution in rural settlement'
  },
  {
    id: 'work-6',
    verticalId: 'humanist',
    title: 'Life-Saving Emergency Medical Grants',
    category: 'Medical assistance',
    location: 'Government Hospital Wards',
    description: 'Sponsoring urgent chemotherapy vials, cardiac stents, dialysis cycles, and trauma ICU bills for families who have exhausted all financial means at state-run tertiary hospitals.',
    fieldNotes: 'All funds transferred directly to verified hospital billing counters.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Diagnostic support and medicine delivery at government medical wing'
  },
  {
    id: 'work-7',
    verticalId: 'greenist',
    title: 'Native Miyawaki Bio-Dense Forestation',
    category: 'Tree plantation',
    location: 'Degraded peri-urban land, Aravallis',
    description: 'Planting hyper-dense native saplings including Peepal, Neem, Banyan, Jamun, and Amaltas using multi-layered soil conditioning techniques that grow 10 times faster than conventional monocultures.',
    fieldNotes: '92% three-year sapling survival rate due to dedicated drip irrigation & caretakers.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Volunteers planting indigenous drought-resistant species'
  },
  {
    id: 'work-8',
    verticalId: 'greenist',
    title: 'Traditional Waterbody & Catchment Rejuvenation',
    category: 'Environmental conservation',
    location: 'Semi-arid Rajasthan & Haryana border',
    description: 'Desilting ancient community stepwells, village ponds (Johads), and building check dams to recharge subterranean groundwater tables and restore local micro-ecosystems.',
    fieldNotes: 'Over 8 dry waterbodies revived, restoring year-round water access for wildlife and cattle.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Community water channel de-silting and ecological bunding'
  },
  {
    id: 'work-9',
    verticalId: 'feminist',
    title: 'Vocational Sewing & Textile Centers',
    category: "Women's support",
    location: 'Rural Rajasthan & Western UP',
    description: 'Setting up village-level craft and sewing production centers where women learn tailoring, pattern making, and sustainable upcycling, connecting them directly with ethical domestic buyers.',
    fieldNotes: 'Trainees receive a certified machine and continuous bulk order sourcing.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Artisan cooperative workspace during block print and stitching module'
  },
  {
    id: 'work-10',
    verticalId: 'feminist',
    title: 'Financial Independence & Digital Literacy',
    category: "Women's empowerment",
    location: 'Peri-urban informal settlements',
    description: 'Conducting comprehensive workshops on opening zero-balance bank accounts, mobile UPI payments, government welfare schemes (PMJDY, Sukanya Samriddhi), and micro-credit management.',
    fieldNotes: 'Empowered over 1,400 women to hold independent savings accounts.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Digital banking and micro-grant session in community center'
  }
];

export const TRUSTEES: Trustee[] = [
  {
    id: 'trustee-1',
    name: 'Dr. Anandita Sen',
    role: 'Managing Trustee & Veterinary Director',
    location: 'New Delhi',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    background: 'Veterinary surgeon with 18 years of on-ground clinical experience in street animal epidemiology, surgical trauma care, and municipal animal welfare governance in India.',
    personalConnection: '“I began twenty years ago with a single first-aid bag on my scooter in Old Delhi. All Alive was born because compassion cannot be compartmentalized — if you care for the suffering animal on the curb, you must also care for the human standing beside it.”'
  },
  {
    id: 'trustee-2',
    name: 'Devendra Pratap Rao',
    role: 'Trustee — Rural Outreach & Humanist Initiatives',
    location: 'Varanasi, UP',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    background: 'Former educator and grassroots community organizer who has spent two decades building rural non-formal learning centers across eastern Uttar Pradesh and Bihar.',
    personalConnection: '“Real charity is not giving crumbs from above; it is walking into the village, sitting on the floor, and ensuring that no child goes to sleep hungry or uneducated because of poverty.”'
  },
  {
    id: 'trustee-3',
    name: 'Meenakshi Sundaram',
    role: 'Trustee — Women’s Empowerment & Legal Advocacy',
    location: 'Jaipur & Delhi',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    background: 'Human rights lawyer and gender rights advocate practicing in high courts, specializing in domestic abuse protection, female worker cooperatives, and land rights.',
    personalConnection: '“When a woman gains financial control and safety, her children eat better, the neighborhood becomes peaceful, and the community flourishes. She is the cornerstone of all alive.”'
  },
  {
    id: 'trustee-4',
    name: 'Raghavan K. Nambiar',
    role: 'Trustee — Conservation & Ecological Stewardship',
    location: 'Bengaluru / Nilgiris',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    background: 'Ecologist and environmental researcher who has worked extensively on native micro-forest restoration, riparian corridors, and community-led rainwater revival projects.',
    personalConnection: '“Every native tree we put in the ground creates shade for an animal, cleans the air for a child, and anchors the soil for our collective future. Conservation is our highest civic duty.”'
  }
];

export const INITIAL_SUPPORTERS: DonationSubmission[] = [
  {
    id: 'don-01',
    donorName: 'Vikramaditya Singhania',
    isAnonymous: false,
    vertical: 'animalistt',
    amount: 15000,
    currency: 'INR',
    date: '10 mins ago',
    message: 'For the surgical medicines and ambulance fuel in North Delhi.',
    wants80G: true
  },
  {
    id: 'don-02',
    donorName: 'Anonymous',
    isAnonymous: true,
    vertical: 'humanist',
    amount: 5000,
    currency: 'INR',
    date: '28 mins ago',
    message: 'In loving memory of my grandparents. For children education books.',
    wants80G: false
  },
  {
    id: 'don-03',
    donorName: 'Pooja & Rohan Mehra',
    isAnonymous: false,
    vertical: 'general',
    amount: 25000,
    currency: 'INR',
    date: '1 hour ago',
    message: 'All Alive Foundation is doing sacred work. Allocate where needed most.',
    wants80G: true
  },
  {
    id: 'don-04',
    donorName: 'Dr. Shalini Deshmukh',
    isAnonymous: false,
    vertical: 'feminist',
    amount: 10000,
    currency: 'INR',
    date: '3 hours ago',
    message: 'Support for the women handloom cooperative machines.',
    wants80G: true
  },
  {
    id: 'don-05',
    donorName: 'Anonymous',
    isAnonymous: true,
    vertical: 'greenist',
    amount: 2500,
    currency: 'INR',
    date: '4 hours ago',
    message: 'For planting native Neem and Peepal saplings in the Aravallis.',
    wants80G: false
  },
  {
    id: 'don-06',
    donorName: 'Arjun K. Varma',
    isAnonymous: false,
    vertical: 'animalistt',
    amount: 7500,
    currency: 'INR',
    date: '6 hours ago',
    message: 'Dedicated to our rescued indie dog Tommy.',
    wants80G: true
  },
  {
    id: 'don-07',
    donorName: 'Sunita Chawla',
    isAnonymous: false,
    vertical: 'humanist',
    amount: 5000,
    currency: 'INR',
    date: '9 hours ago',
    message: 'For monthly dry rations for elderly mothers.',
    wants80G: true
  }
];

export const FOUNDATION_CAMPAIGNS: FoundationCampaign[] = [
  {
    id: 'camp-1',
    verticalId: 'animalistt',
    tag: 'THE ANIMALISTT',
    category: 'Animal Rescue',
    title: 'Help Critical Street Animals Recover from Severe Trauma & Surgeries',
    lead: 'by Dr. Vikram Sethi & Veterinary Paramedic Team',
    raised: 842500,
    goal: 1000000,
    donorsCount: 2840,
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    location: 'Delhi NCR & Haryana',
    description: 'Funding 24/7 mobile veterinary ambulance dispatches, orthopaedic surgeries, maggot wound therapy, and post-operative recovery pens for over 400 injured street animals every month.'
  },
  {
    id: 'camp-2',
    verticalId: 'humanist',
    tag: 'THE HUMANIST',
    category: 'Child Welfare',
    title: 'Bridge Schooling, Uniforms & Daily Nutrition for 450 Migrant Children',
    lead: 'by Priya Narang & Child Education Team',
    raised: 615000,
    goal: 800000,
    donorsCount: 1920,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    location: 'Varanasi & Lucknow, UP',
    description: 'Providing open-air learning hubs, books, stationery kits, and hot mid-day meals to children of construction laborers and ragpickers to help them enter mainstream schools.'
  },
  {
    id: 'camp-3',
    verticalId: 'greenist',
    tag: 'THE GREENIST',
    category: 'Tree Plantation',
    title: 'Miyawaki Native Urban Afforestation Drive — 5,000 Indigenous Trees',
    lead: 'by Rohit Sharma & Conservation Volunteers',
    raised: 475000,
    goal: 600000,
    donorsCount: 1430,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    location: 'Aravalli Range & Peri-urban Belts',
    description: 'Planting Peepal, Neem, Banyan, and Jamun saplings with drip irrigation systems to create permanent bio-dense green lungs and recharge groundwater in degraded regions.'
  },
  {
    id: 'camp-4',
    verticalId: 'feminist',
    tag: 'THE FEMINIST',
    category: "Women's Support",
    title: 'Vocational Sewing Machines & Craft Center for 120 Rural Women Artisans',
    lead: 'by Sunita Devi & Livelihood Collective',
    raised: 520000,
    goal: 750000,
    donorsCount: 1680,
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
    location: 'Barmer, Rajasthan',
    description: 'Empowering marginalized women with commercial sewing machines, fabric raw materials, artisan training, and direct domestic market linkages for independent family income.'
  },
  {
    id: 'camp-5',
    verticalId: 'animalistt',
    tag: 'EMERGENCY RESCUE',
    category: 'Animal Rescue',
    title: 'Daily High-Protein Feeding Route for 2,800+ Vulnerable Community Animals',
    lead: 'by All Alive Field Volunteer Network',
    raised: 910000,
    goal: 1200000,
    donorsCount: 3150,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    location: 'Industrial & Highway Corridors',
    description: 'Cooking and distributing fresh, protein-rich boiled rice, lentils, and veterinary supplements across 18 designated nightly feeding routes in industrial and slum sectors.'
  },
  {
    id: 'camp-6',
    verticalId: 'humanist',
    tag: 'CRISIS & MEDICAL',
    category: 'Crisis & Emergency',
    title: 'Monthly Grain Ration Kits & Emergency Medicines for 1,200 Destitute Families',
    lead: 'by Relief Outreach Taskforce',
    raised: 380000,
    goal: 500000,
    donorsCount: 1110,
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80',
    location: 'Informal Settlements & Rural Clusters',
    description: 'Delivering complete 30-day nutrition packages and critical medicine grants to widowed mothers, elderly destitute persons, and families facing catastrophic medical bills.'
  }
];

export const COLLAGE_PHOTOS_LEFT: CollagePhoto[] = [
  {
    id: 'col-l1',
    url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=700&q=80',
    alt: 'Indian street dog being fed by a volunteer',
    caption: 'Street dog rescue & emergency rehabilitation',
    location: 'North Delhi',
    vertical: 'THE ANIMALISTT',
    aspectClass: 'h-80'
  },
  {
    id: 'col-l2',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80',
    alt: 'Indian school children learning outdoors',
    caption: 'Foundational learning circle in rural Varanasi',
    location: 'Varanasi, UP',
    vertical: 'THE HUMANIST',
    aspectClass: 'h-96'
  },
  {
    id: 'col-l3',
    url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=700&q=80',
    alt: 'Hands planting native sapling into rich soil',
    caption: 'Native afforestation drive in degraded hills',
    location: 'Aravalli Range',
    vertical: 'THE GREENIST',
    aspectClass: 'h-72'
  },
  {
    id: 'col-l4',
    url: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=700&q=80',
    alt: 'Indian women artisans working together on traditional loom',
    caption: 'Self-help artisan weaving center',
    location: 'Rajasthan',
    vertical: 'THE FEMINIST',
    aspectClass: 'h-96'
  },
  {
    id: 'col-l5',
    url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=700&q=80',
    alt: 'Community animal receiving gentle affection and food',
    caption: 'Daily evening nutritional patrol',
    location: 'Old Gurgaon',
    vertical: 'THE ANIMALISTT',
    aspectClass: 'h-80'
  }
];

export const COLLAGE_PHOTOS_RIGHT: CollagePhoto[] = [
  {
    id: 'col-r1',
    url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=80',
    alt: 'Food distribution to community members',
    caption: 'Grain ration kits distributed to daily wage families',
    location: 'Lucknow Outskirts',
    vertical: 'THE HUMANIST',
    aspectClass: 'h-96'
  },
  {
    id: 'col-r2',
    url: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=700&q=80',
    alt: 'Veterinary care and recovery treatment for injured animal',
    caption: 'Transit clinic surgical dressing station',
    location: 'Faridabad Clinic',
    vertical: 'THE ANIMALISTT',
    aspectClass: 'h-72'
  },
  {
    id: 'col-r3',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80',
    alt: 'Indian women in vocational training',
    caption: 'Financial literacy and leadership workshop',
    location: 'West Bengal',
    vertical: 'THE FEMINIST',
    aspectClass: 'h-88'
  },
  {
    id: 'col-r4',
    url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=700&q=80',
    alt: 'Desilting and conserving traditional water reservoir',
    caption: 'Community pond restoration & check-dam reviving',
    location: 'Rural Alwar',
    vertical: 'THE GREENIST',
    aspectClass: 'h-80'
  },
  {
    id: 'col-r5',
    url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80',
    alt: 'Medical assistance and health camp in village',
    caption: 'Free diagnostic and medicine distribution camp',
    location: 'Mirzapur, UP',
    vertical: 'THE HUMANIST',
    aspectClass: 'h-96'
  }
];
