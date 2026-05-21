// Centralized portfolio content for Ram Prakash Sharma.
// All sections of the site read from this file.

export const profile = {
  name: 'Ram Prakash Sharma',
  shortName: 'Ram Prakash',
  initials: 'RPS',
  roles: [
    'Data Engineer',
    'Data Analyst',
    'Python Developer',
    'AI / ML Enthusiast',
  ],
  location: 'Pune, Maharashtra, India',
  email: 'rpram980@gmail.com',
  resumeUrl: '/resume/Ram_Prakash_Sharma_Resume.pdf',
  intro:
    'Building scalable cloud-native data solutions, AI-powered analytics systems, and intelligent automation using Python, AWS, and Machine Learning.',
  summary:
    'A Data Engineer and Python Developer devoted to building systems that are precise, scalable, and quietly elegant. I architect cloud-native ETL pipelines on AWS, deliver real-time analytics, and engineer AI-powered applications — practiced in Python, SQL, PySpark, Power BI, machine learning, and NLP. A Gold Medalist of my MCA cohort, I bring a steady record of leadership, analytical clarity, and disciplined problem-solving.',
  socials: [
    { name: 'GitHub', href: 'https://github.com/', icon: 'github' },
    { name: 'LinkedIn', href: 'https://linkedin.com/', icon: 'linkedin' },
    { name: 'Email', href: 'mailto:rpram980@gmail.com', icon: 'mail' },
    { name: 'HackerRank', href: 'https://www.hackerrank.com/', icon: 'code' },
  ],
};

export const stats = [
  { label: 'Year of Hands-On Experience', value: 1, suffix: '+' },
  { label: 'Production Projects Delivered', value: 12, suffix: '+' },
  { label: 'Cloud & AI Certifications', value: 4, suffix: '' },
  { label: 'MCA CGPA', value: 9.56, suffix: '/10', decimals: 2 },
];

export const skillGroups = [
  {
    title: 'Languages & Core',
    accent: 'from-amber-300 to-yellow-500',
    items: ['Python', 'Java', 'SQL', 'Advanced SQL', 'Git', 'Docker', 'Excel'],
  },
  {
    title: 'Data Engineering',
    accent: 'from-amber-400 to-orange-500',
    items: [
      'Apache Spark',
      'PySpark',
      'Apache Airflow',
      'ETL Pipelines',
      'Data Lake',
      'Snowflake',
      'AWS Glue',
      'AWS Lambda',
      'Amazon Athena',
      'Amazon Redshift',
    ],
  },
  {
    title: 'Cloud (AWS)',
    accent: 'from-amber-300 to-orange-400',
    items: ['AWS EC2', 'AWS S3', 'AWS IAM', 'AWS CloudWatch', 'AWS RDS'],
  },
  {
    title: 'Data Analytics',
    accent: 'from-yellow-300 to-amber-500',
    items: [
      'Power BI',
      'Tableau',
      'Data Visualization',
      'Data Cleaning',
      'Data Modeling',
      'EDA',
    ],
  },
  {
    title: 'AI / ML',
    accent: 'from-amber-400 to-yellow-500',
    items: [
      'TensorFlow',
      'PyTorch',
      'Keras',
      'NLP',
      'OpenCV',
      'EasyOCR',
      'Hugging Face',
      'Scikit-learn',
    ],
  },
  {
    title: 'Python Libraries',
    accent: 'from-yellow-400 to-amber-600',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    title: 'Soft Skills',
    accent: 'from-orange-400 to-amber-400',
    items: [
      'Leadership',
      'Communication',
      'Problem Solving',
      'Analytical Thinking',
      'Time Management',
    ],
  },
];

export const experience = [
  {
    role: 'Python Developer',
    company: 'Cyient',
    period: 'Dec 2025 — Present',
    location: 'Pune, India',
    accent: 'from-amber-300 to-orange-500',
    points: [
      'Developing backend features and modules using Python and Odoo ERP.',
      'Designing and querying PostgreSQL databases for transactional workloads.',
      'Optimizing complex SQL queries for performance-critical reporting.',
      'Building Python-based cloud applications on AWS EC2, S3, and RDS.',
      'Improving end-to-end processing performance across data services.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Unified Mentor',
    period: 'Feb 2025 — May 2025',
    location: 'Remote',
    accent: 'from-yellow-400 to-orange-400',
    points: [
      'Performed advanced data cleaning and wrangling using Pandas and NumPy.',
      'Designed interactive Tableau dashboards to surface business KPIs.',
      'Delivered storytelling-driven data visualizations for stakeholders.',
      'Automated recurring reporting workflows to save analyst hours weekly.',
      'Analyzed large multi-source datasets to uncover actionable insights.',
    ],
  },
];

export const projects = [
  {
    title: 'YouTube Trending Data Pipeline',
    tagline: 'AWS-native ETL for daily trending video analytics',
    description:
      'Fully automated serverless ETL pipeline that ingests YouTube trending video data from India, transforms it with AWS Glue + PySpark, queries it with Athena, and visualizes insights through Power BI.',
    features: [
      'Serverless architecture',
      'Event-driven workflow',
      'Automated ETL',
      'Power BI analytics dashboard',
      'Athena querying',
      'Daily refresh automation',
    ],
    tech: ['Python', 'AWS Lambda', 'S3', 'Glue', 'Athena', 'PySpark', 'Power BI'],
    accent: 'from-amber-300 via-orange-400 to-amber-600',
    icon: 'cloud',
    href: '#',
  },
  {
    title: 'Vehicle Number Plate Detection',
    tagline: 'Real-time ANPR with YOLOv8 + EasyOCR',
    description:
      'Real-time computer-vision pipeline detecting vehicle license plates with YOLOv8, extracting characters with EasyOCR, and using transfer learning over a custom dataset.',
    features: [
      'Real-time detection',
      'OCR extraction',
      'Computer vision',
      'Bounding box visualization',
      'Custom dataset training',
    ],
    tech: ['Python', 'OpenCV', 'YOLOv8', 'EasyOCR'],
    accent: 'from-orange-500 via-amber-400 to-yellow-400',
    icon: 'camera',
    href: '#',
  },
  {
    title: 'Stock Prediction with ML',
    tagline: 'Predictive analytics over 10 years of market data',
    description:
      'Built regression and classification ML models that learn from a decade of historical market data to forecast short-term stock movement and trends.',
    features: [
      'Predictive analytics',
      'Multiple ML models',
      'Historical data analysis',
      'Regression algorithms',
    ],
    tech: ['Python', 'Machine Learning', 'Jupyter', 'Google Colab'],
    accent: 'from-yellow-300 via-amber-400 to-orange-500',
    icon: 'trending',
    href: '#',
  },
  {
    title: 'Diwali Sales Analysis',
    tagline: 'EDA-driven retail customer behavior insights',
    description:
      'Performed exploratory data analysis on Diwali season sales data to identify customer purchasing trends, top-performing segments, and category-level revenue drivers.',
    features: [
      'Exploratory data analysis',
      'Sales analytics',
      'Customer behavior analysis',
      'Interactive visualizations',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
    accent: 'from-amber-400 via-orange-500 to-amber-700',
    icon: 'chart',
    href: '#',
  },
];

export const education = [
  {
    school: 'GD Goenka University',
    degree: 'Master of Computer Application (MCA)',
    score: 'CGPA 9.56 / 10',
    period: '2023 — 2025',
    highlight: 'Gold Medalist',
    accent: 'from-yellow-300 to-amber-500',
  },
  {
    school: 'Mahatma Gandhi Kashi Vidyapith',
    degree: 'Bachelor of Computer Application (BCA)',
    score: 'CGPA 6.70 / 10',
    period: '2019 — 2022',
    highlight: null,
    accent: 'from-amber-300 to-orange-500',
  },
];

export const certifications = [
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
  },
  { name: 'Master Data Analysis', issuer: 'Professional Course' },
  { name: 'Career Essentials in Data Analysis', issuer: 'Microsoft / LinkedIn' },
  {
    name: 'AWS Fundamentals and Advanced Concepts',
    issuer: 'Amazon Web Services',
  },
];

export const achievements = [
  {
    title: 'Gold Medalist',
    detail: 'Master of Computer Application — top of the graduating class.',
    icon: 'medal',
  },
  {
    title: '5★ Python on HackerRank',
    detail: 'Five-star rating in Python proficiency on HackerRank.',
    icon: 'star',
  },
  {
    title: 'Student Placement Coordinator',
    detail:
      'Led placement coordination, bridging students with recruiting partners.',
    icon: 'users',
  },
  {
    title: 'Class Representative',
    detail:
      'Served as Class Representative — advocating for the cohort across faculty and admin.',
    icon: 'flag',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
