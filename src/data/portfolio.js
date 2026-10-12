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
    company: 'PT Mekar Armada Jaya (New Armada Group)',
    period: 'Nov 2025 — Present',
    points: [
      'Developing real-time production monitoring dashboard for manufacturing floor visibility',
      'Migrating inventory dashboard from Vue 2 to Vue 3 with TypeScript',
      'Implementing "Tag OK" printing automation from robots via PLC and Python integration',
      'Maintaining company servers and internal web systems',
    ],
    tags: ['Laravel', 'Vue 3', 'TypeScript', 'Python', 'PLC'],
  },
  {
    role: 'Fullstack Web Developer',
    company: 'PT Amerta Travel Service',
    period: 'Dec 2024 — May 2025',
    points: [
      'Designed and built company profile website with tour package showcase (amerta-travelservice.id)',
      'Developed custom CMS for tour package content management',
      'Built visitor analytics dashboard for admin features',
      'Implemented SEO practices and site performance optimization',
    ],
    tags: ['Laravel 11', 'PHP', 'MySQL', 'SEO'],
  },
  {
    role: 'Fullstack Web Developer Intern',
    company: 'PT INDI Technology',
    period: 'Aug 2024 — Dec 2024',
    points: [
      'Built web apps using Laravel backend and Next.js / TypeScript / React.js frontend',
      'Developed complex features: employee/crew registration, payment invoices, multi-filter job listings',
      'Created automated tests using Pest (backend) and Playwright (frontend)',
      'Contributed to key company projects including testing and documentation',
    ],
    tags: ['Laravel', 'Next.js', 'TypeScript', 'Pest', 'Playwright'],
  },
  {
    role: 'Fullstack Web Developer',
    company: 'Polresta Sleman — Sikeshan',
    period: 'May 2024 — Jun 2024',
    points: [
      'Analyzed detainee health data to design an internal dashboard',
      'Built internal digitization system using PHP and Laravel',
      'Created letter templates improving data management efficiency by 30%',
    ],
    tags: ['Laravel', 'PHP', 'Data Analysis'],
  },
  {
    role: 'Web Analyst Intern',
    company: 'PT United Tractors, Tbk',
    period: 'Jun 2023 — Aug 2023',
    points: [
      'Analyzed the United Tractors website ahead of a full revitalization project',
      'Performed data analysis using Microsoft Excel and presented findings to the team',
    ],
    tags: ['Web Analysis', 'Excel'],
  },
  {
    role: 'Machine Learning Cohort',
    company: 'Bangkit Academy — Google, GoTo, Traveloka',
    period: 'Feb 2023 — Aug 2023',
    points: [
      'Learned data preprocessing, visualization, and ML model building with Scikit-learn and TensorFlow',
      'Built and deployed ML APIs using Flask and FastAPI',
      'Completed a machine learning capstone project in a team (outfit recommendation AI)',
    ],
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Scikit-learn'],
  },
  {
    role: 'Research Assistant & Assistant Lecturer',
    company: 'Universitas Gadjah Mada',
    period: 'Feb 2023 — Dec 2023',
    points: [
      'Frontend engineer for IoT/ML and Sentiment Analysis research using PHP and Laravel',
      'Taught software design (Figma), data structures (Python), and database practicum (SQL)',
    ],
    tags: ['Laravel', 'Figma', 'Python', 'SQL'],
  },
];

export const projects = [
  {
    n: '01',
    url: 'http://aslab.trpl.space',
    title: 'AssistLab',
    desc: 'Lab assistant registration system with OCR-based academic document verification. Final thesis project comparing Flask, Django, and FastAPI performance using Locust load testing.',
    tags: ['FastAPI', 'OCR', 'MySQL', 'Locust'],
  },
  {
    n: '02',
    url: 'http://amerta-travelservice.id',
    title: 'Amerta Travel Service',
    desc: 'Company profile website with tour package showcase, custom CMS for content management, visitor analytics dashboard, and SEO optimization.',
    tags: ['Laravel 11', 'PHP', 'MySQL', 'CMS'],
  },
  {
    n: '03',
    url: 'http://sikeshan-restasleman.com',
    title: 'Sikeshan — Polresta Sleman',
    desc: 'Internal health information system for Polresta Sleman. Digitized detainee health data with a monitoring dashboard and letter template automation (+30% efficiency).',
    tags: ['Laravel', 'PHP', 'Dashboard'],
  },
  {
    n: '04',
    url: 'http://sekolahenergi.online',
    title: 'Sekolah Energi — UGM',
    desc: 'Energy education platform with a PLTS (solar panel) calculator feature. Built the backend and architecture using Laravel and MySQL for Sekolah Vokasi UGM.',
    tags: ['Laravel', 'MySQL', 'Backend'],
  },
  {
    n: '05',
    kind: 'Bangkit Capstone',
    title: 'Lambi — AI Outfit Recommender',
    desc: 'Mobile app AI engineer role. Built an ML model that determines outfit recommendations from images uploaded by users, deployed as an API.',
    tags: ['TensorFlow', 'Python', 'FastAPI', 'ML'],
  },
  {
    n: '06',
    kind: 'Data Analysis',
    title: 'Data Dashboards',
    desc: 'Built Looker Studio dashboards analyzing employee income distribution and global YouTube trends — covering 311 employees and 871+ YouTubers across 50 countries.',
    tags: ['Looker Studio', 'Data Analysis', 'SQL'],
  },
];

export const skillLevels = { Intermediate: 2, Advanced: 3, Expert: 4 };

export const skillGroups = [
  {
    title: '// backend & frameworks',
    items: [
      ['Laravel (PHP)', 'Expert'],
      ['FastAPI / Flask (Python)', 'Advanced'],
      ['MySQL / SQL', 'Advanced'],
      ['RESTful API design', 'Advanced'],
    ],
  },
  {
    title: '// frontend',
    items: [
      ['Next.js / React.js', 'Advanced'],
      ['TypeScript', 'Advanced'],
      ['Vue.js', 'Intermediate'],
      ['Tailwind CSS / Figma', 'Advanced'],
    ],
  },
  {
    title: '// data & ML',
    items: [
      ['TensorFlow / Keras', 'Intermediate'],
      ['Scikit-learn', 'Intermediate'],
      ['Data Analysis / Visualization', 'Advanced'],
      ['OCR (pdfplumber, Camelot)', 'Intermediate'],
    ],
  },
  {
    title: '// testing & tools',
    items: [
      ['Pest (PHP Testing)', 'Advanced'],
      ['Playwright (E2E)', 'Intermediate'],
      ['Git / GitHub', 'Advanced'],
      ['Linux Server Admin', 'Intermediate'],
    ],
  },
];

export const certs = [
  { mark: '★', title: 'Associate Data Scientist — BNSP', meta: 'Professional certification · Valid until Jan 2028 · KKNI Level 5' },
  { mark: '◈', title: 'Machine Learning Specialization — Coursera', meta: 'DeepLearning.AI / Stanford · Andrew Ng · 2023' },
  { mark: '◈', title: 'DeepLearning.AI TensorFlow Developer — Coursera', meta: 'CNN · NLP · Time Series · 4 courses · 2023' },
  { mark: '◈', title: 'TensorFlow: Data and Deployment — Coursera', meta: 'TF.js · TFLite · Data Pipelines · 2023' },
  { mark: '◈', title: 'Mathematics for ML & Data Science — Coursera', meta: 'Linear Algebra · Calculus · Statistics · 2023' },
  { mark: '◈', title: 'Bangkit Academy — Machine Learning Track', meta: 'Google · GoTo · Traveloka · Jan 2024' },
  { mark: '◈', title: 'Basic JavaScript — Dicoding', meta: 'OOP · Async · Node.js · 2023' },
];
