export const contact = {
  email: 'shaleh.farhan@gmail.com',
  linkedin: 'https://www.linkedin.com/in/farhan-akmal-s/',
  phone: '+6289534697512',
  phoneLabel: '+62 895-3469-75128',
  location: 'Bekasi, Indonesia',
};

export const navLinks = ['about', 'experience', 'projects', 'skills', 'education', 'contact'];

export const stats = [
  { value: '5+', label: 'Years coding' },
  { value: '8+', label: 'Projects shipped' },
  { value: '6+', label: 'Certifications' },
];

export const techList = [
  'Laravel 11/12', 'Next.js', 'React.js', 'TypeScript', 'FastAPI',
  'Flask', 'Python', 'MySQL / SQL', 'TensorFlow', 'Figma',
];

// Labels floating around the hero globe
export const globeTechs = [
  'Laravel', 'Next.js', 'React', 'TypeScript', 'FastAPI', 'Flask', 'Python', 'MySQL', 'TensorFlow', 'Figma',
  'Vue 3', 'Playwright', 'Pest', 'Scikit-learn', 'Git', 'Linux', 'Tailwind', 'OCR', 'PLC', 'Keras',
];

export const experiences = [
  {
    role: 'Fullstack Developer',
    type: 'Contract',
    company: 'PT Mekar Armada Jaya (New Armada)',
    period: 'Nov 2025 — Present',
    points: [
      'Developing a real-time production process monitoring dashboard in the field to improve operational visibility and efficiency',
      'Migrating and upgrading the inventory dashboard website from Vue 2 to Vue 3 with TypeScript',
      'Implementing "Tag OK" printing automation from robots using PLC and Python integration',
      'Developing a SAP connector in Golang to enable data exchange between SAP and web applications',
      'Maintaining and developing several internal company websites',
      'Maintaining and managing company servers to ensure system availability and stability',
    ],
    tags: ['Vue 3', 'TypeScript', 'Python', 'Golang', 'PLC', 'SAP'],
  },
  {
    role: 'Fullstack Web Developer',
    type: 'Freelance',
    company: 'Polresta Sleman',
    period: 'Jun 2026 — Jul 2026',
    points: [
      'Modernized the detainee health-record system from Laravel 10 + Blade + Bootstrap to Laravel 12 + Inertia.js + Vue 3 + Tailwind CSS',
      'Designed and implemented Role-Based Access Control (RBAC) separating administrator and investigator permissions',
      'Built a multi-unit online registration portal with document upload, data validation, and queue management',
      'Developed interactive analytics dashboards with ApexCharts to support data-driven monitoring',
      'Automated PDF generation for official letters and advanced Excel exports with complex reporting layouts',
      'Added patient history tracking and auto-suggestion input to speed up data entry and improve accuracy',
    ],
    tags: ['Laravel 12', 'Inertia.js', 'Vue 3', 'Tailwind CSS', 'ApexCharts', 'RBAC'],
  },
  {
    role: 'Backend Developer',
    type: 'Project-based',
    company: 'Sekolah Vokasi Universitas Gadjah Mada',
    period: 'Feb 2025 — Aug 2025',
    points: [
      'Built AssistLab (aslab.trpl.space), a job-portal-style platform for practicum assistant applications',
      'Designed and developed the REST API powering registration, application, and selection flows',
      'Implemented automatic academic document verification through PDF data extraction, removing manual transcript checks',
      'Benchmarked Flask, Django, and FastAPI before selecting FastAPI as the backend framework',
      'Ran load testing with Locust to validate performance under peak registration traffic',
      'Integrated the MySQL database and built the authentication layer',
    ],
    tags: ['FastAPI', 'Python', 'MySQL', 'Locust', 'REST API'],
  },
  {
    role: 'Fullstack Web Developer',
    type: 'Freelance',
    company: 'PT Amerta Travel Service',
    period: 'Dec 2024 — May 2025',
    points: [
      'Gathered requirements directly from stakeholders and translated them into site structure, content flow, and UI',
      'Built the company profile and tour package website end to end (amerta-travelservice.id)',
      'Developed a custom CMS so the marketing team could manage tour packages without developer support',
      'Delivered a visitor analytics dashboard inside the admin panel for traffic monitoring',
      'Applied on-page SEO and front-end performance optimization to improve load time and search visibility',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'CMS', 'SEO'],
  },
  {
    role: 'Fullstack Web Developer',
    type: 'Internship',
    company: 'PT INDI Technology',
    period: 'Aug 2024 — Dec 2024',
    points: [
      'Developed web applications with Laravel on the backend and Next.js, React.js, and TypeScript on the frontend',
      'Implemented complex features in an agile team: multi-role registration (employee and crew), payment invoicing, and multi-filter job listings',
      'Created automated tests using Pest (backend) and Playwright (frontend)',
      'Contributed to several production company projects, including testing and technical documentation',
    ],
    tags: ['Laravel', 'Next.js', 'TypeScript', 'Pest', 'Playwright'],
  },
  {
    role: 'Fullstack Web Developer',
    type: 'Freelance',
    company: 'Polresta Sleman',
    period: 'May 2024 — Jun 2024',
    points: [
      'Ran requirement gathering sessions with stakeholders to define the data and workflow to be digitized',
      'Built a reporting dashboard so officers could monitor health records at a glance',
      'Developed an internal data digitization web application using PHP, Laravel, and MySQL',
      'Designed the database and admin interface that replaced manual, paper-based record keeping',
      'Automated letter generation with reusable templates, increasing data management efficiency by 30%',
    ],
    tags: ['Laravel', 'PHP', 'MySQL', 'Dashboard'],
  },
  {
    role: 'Web Analyst',
    type: 'Internship',
    company: 'PT United Tractors, Tbk',
    period: 'Jul 2023 — Aug 2023',
    points: [
      'Worked in a team on corporate web projects, joining project meetings and mentoring sessions',
      'Studied the end-to-end web development process, from planning and design to release',
      'Analyzed the corporate website and proposed structural and content improvements ahead of its revitalization',
      'Performed supporting data analysis using Microsoft Excel to back up the revitalization proposal',
    ],
    tags: ['Web Analysis', 'Excel'],
  },
  {
    role: 'Machine Learning Cohort',
    type: 'Backend & Model Deployment Track',
    company: 'Bangkit Academy — Google, Tokopedia, Gojek & Traveloka',
    period: 'Aug 2023 — Jan 2024',
    points: [
      'Selected for a national, Google-backed tech academy and completed an end-to-end machine learning track',
      'Served machine learning models through REST APIs built with Flask and FastAPI for web clients',
      'Delivered a team capstone project covering data preprocessing, model training, and deployment',
    ],
    tags: ['Python', 'TensorFlow', 'Flask', 'FastAPI'],
  },
  {
    role: 'Research Assistant',
    company: 'Universitas Gadjah Mada',
    period: 'Feb 2023 — Dec 2023',
    points: [
      'Built research dashboards and web interfaces with PHP and Laravel for IoT, machine learning, and sentiment analysis projects',
      'Implemented interactive data visualization pages so researchers could explore results in the browser',
      'Turned research prototypes into working, deployable web applications',
    ],
    tags: ['Laravel', 'PHP', 'Data Visualization'],
  },
  {
    role: 'Assistant Lecturer',
    company: 'Universitas Gadjah Mada',
    period: 'Aug 2022 — Jun 2023',
    points: [
      'Assisted lecturers across three practicum courses over two semesters: Data Structures (Python), Database Engineering (SQL), and IT & Computer Installation',
      'Guided students hands-on through trees, queues, stacks and sorting, SQL from basic syntax to database replication, and OS installation and cloning',
      'Prepared assignments and exam materials and handled student grading',
    ],
    tags: ['Python', 'SQL', 'Teaching'],
  },
];

export const projects = [
  {
    n: '01',
    url: 'https://divilladhiya.com',
    title: 'diVillaDhiya',
    desc: 'Landing page for a private villa in Lembang, Bandung, with a custom CMS admin panel: editable sections, photo management, and a booking availability calendar. SEO-optimized with structured data and deployed to a VPS via CI/CD.',
    tags: ['Next.js', 'TypeScript', 'MySQL', 'Drizzle ORM'],
  },
  {
    n: '02',
    url: 'http://aslab.trpl.space',
    title: 'AssistLab',
    desc: 'Lab assistant registration system with OCR-based academic document verification. Final thesis project comparing Flask, Django, and FastAPI performance using Locust load testing.',
    tags: ['FastAPI', 'OCR', 'MySQL', 'Locust'],
  },
  {
    n: '03',
    url: 'http://amerta-travelservice.id',
    title: 'Amerta Travel Service',
    desc: 'Company profile website with tour package showcase, custom CMS for content management, visitor analytics dashboard, and SEO optimization.',
    tags: ['Laravel 11', 'PHP', 'MySQL', 'CMS'],
  },
  {
    n: '04',
    url: 'http://sikeshan-restasleman.com',
    title: 'Sikeshan — Polresta Sleman',
    desc: 'Internal health information system for Polresta Sleman. Digitized detainee health data with a monitoring dashboard and letter template automation (+30% efficiency).',
    tags: ['Laravel', 'PHP', 'Dashboard'],
  },
  {
    n: '05',
    url: 'http://sekolahenergi.online',
    title: 'Sekolah Energi — UGM',
    desc: 'Energy education platform with a PLTS (solar panel) calculator feature. Built the backend and architecture using Laravel and MySQL for Sekolah Vokasi UGM.',
    tags: ['Laravel', 'MySQL', 'Backend'],
  },
  {
    n: '06',
    kind: 'Bangkit Capstone',
    title: 'Lambi — AI Outfit Recommender',
    desc: 'Mobile app AI engineer role. Built an ML model that determines outfit recommendations from images uploaded by users, deployed as an API.',
    tags: ['TensorFlow', 'Python', 'FastAPI', 'ML'],
  },
  {
    n: '07',
    kind: 'Data Analysis',
    title: 'Data Dashboards',
    desc: 'Built Looker Studio dashboards analyzing employee income distribution and global YouTube trends — covering 311 employees and 871+ YouTubers across 50 countries.',
    tags: ['Looker Studio', 'Data Analysis', 'SQL'],
  },
];

export const skillLevels = [
  { min: 90, label: 'Expert' },
  { min: 75, label: 'Advanced' },
  { min: 0, label: 'Intermediate' },
];

export const skillLevel = score => skillLevels.find(l => score >= l.min).label;

// Angka = score 0–100; label level dihitung dari score lewat skillLevel()
export const skillGroups = [
  {
    title: '// backend & frameworks',
    items: [
      ['Laravel (PHP)', 92],
      ['FastAPI / Flask (Python)', 80],
      ['MySQL / SQL', 85],
      ['RESTful API design', 85],
    ],
  },
  {
    title: '// frontend',
    items: [
      ['Next.js / React.js', 80],
      ['TypeScript', 78],
      ['Vue.js', 72],
      ['Tailwind CSS / Figma', 85],
    ],
  },
  {
    title: '// data & ML',
    items: [
      ['TensorFlow / Keras', 65],
      ['Scikit-learn', 65],
      ['Data Analysis / Visualization', 80],
      ['OCR (pdfplumber, Camelot)', 70],
    ],
  },
  {
    title: '// testing & tools',
    items: [
      ['Pest (PHP Testing)', 80],
      ['Playwright (E2E)', 70],
      ['Git / GitHub', 85],
      ['Linux Server Admin', 70],
    ],
  },
];

export const certs = [
  { mark: '◈', title: 'TOEFL Prediction Test — Score 550', meta: 'Webster English Course · Listening 52 · Structure 56 · Reading 57 · 2026 · Valid until May 2028' },
  { mark: '★', title: 'Associate Data Scientist — BNSP', meta: 'Certificate of Competency · KKNI Level 5, Data Science · 2025 · Valid until Jan 2028' },
  { mark: '◈', title: 'LLM-Based Tools & Gemini API Integration — Hacktiv8', meta: 'Maju Bareng AI · Supported by Google.org & ADB · 15 learning hours · 2025' },
  { mark: '◈', title: 'Basic JavaScript — Dicoding', meta: 'OOP · Functional programming · Modules · Concurrency · Testing · 2023' },
  { mark: '◈', title: 'Machine Learning & Deep Learning Specializations — Coursera', meta: 'Supervised & Unsupervised Learning · TensorFlow Developer · Mathematics for ML · 2023' },
];
