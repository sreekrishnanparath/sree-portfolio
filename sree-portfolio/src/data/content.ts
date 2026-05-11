export interface NavItem {
  id: string;
  label: string;
  number: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin';
}

export interface ExperienceItem {
  company: string;
  title: string;
  location: string;
  range: string;
  highlights: string[];
  tech: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; url: string }[];
}

export const profile = {
  name: 'Sreekrishnan',
  shortName: 'Sreekrishnan Radhakrishnan',
  role: 'Senior Software Engineer',
  tagline: 'I build distributed platforms towards the Future.',
  /** Large hero title — first part light, second part accent (mint). */
  heroHeadline: {
    lead: 'Distributed',
    accent: 'platforms',
  },
  /** Optional intro video URL. Leave empty to hide “Watch the video”. */
  introVideoUrl: '',
  location: 'Dublin, Ireland',
  phone: '+353 85 210 2430',
  email: 'parathsree@gmail.com',
  summary: `Eleven years shipping production systems across AdTech, retail, logistics, and banking. I design API gateways, event-driven pipelines, and cloud-native services—recently leading integrations across major ad platforms and scaling ingestion to hundreds of thousands of requests per hour.`,
  resumeUrl: '/Sreekrishnan_Resume.pdf',
  /** Put your file in `public/` (e.g. `public/profile.jpg`) or change to any URL. */
  profileImageSrc: '/profile.jpeg',
  profileImageAlt: 'Portrait of Sreekrishnan Radhakrishnan',
};

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', number: '01' },
  { id: 'experience', label: 'Experience', number: '02' },
  { id: 'work', label: 'Work', number: '03' },
  { id: 'contact', label: 'Contact', number: '04' },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/sreekrishnanparath', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sreekrishnan--r', icon: 'linkedin' },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Sojern Int Ltd',
    title: 'Senior Software Engineer',
    location: 'Dublin, Ireland',
    range: 'Jan 2023 – Present',
    highlights: [
      'Architected end-to-end integrations for six major ad platforms (Google Ads, Bing, Meta, The Trade Desk, and others), mapping heterogeneous APIs into a unified model and unlocking new revenue.',
      'Scaled a distributed API gateway handling ~900K requests/day with async processing (202 + Cloud Tasks), rate limiting, and Redis Pub/Sub—supporting burst traffic of 100–200K req/hour.',
      'Re-architected a centralized gateway into an event-driven system with Redis Pub/Sub, improving scalability and performance by ~60% with clearer fault isolation.',
      'Delivered large-scale campaign automation: bulk migration of 7.5K campaigns and 64K creatives with 25K daily updates across six APIs, including recovery and rate-limit handling.',
      'Led and mentored a distributed team of four engineers; partnered with PM and data teams on cloud-native delivery (Golang, GCP, Kubernetes, Terraform).',
    ],
    tech: ['Golang', 'React', 'TypeScript', 'GraphQL', 'Redis', 'GCP', 'Kubernetes', 'Terraform'],
  },
  {
    company: 'Visua Labs Ltd',
    title: 'Full Stack Software Engineer',
    location: 'Dublin, Ireland',
    range: 'Jan 2022 – Dec 2022',
    highlights: [
      'Built queue processors using AWS SQS and S3 for computer vision and AI workloads.',
      'Streamed very large files (10+ GB) to S3 using Scala Play streaming.',
      'Contributed to an HTTP API for programmatic data operations against AWS RDS (Graph-style ergonomics).',
    ],
    tech: ['Scala', 'Play', 'React', 'Akka Streams', 'AWS S3', 'SQS', 'RDS', 'Microservices'],
  },
  {
    company: 'Wavelogix',
    title: 'Senior Software Engineer',
    location: 'Dubai, UAE',
    range: 'Nov 2020 – Oct 2021',
    highlights: [
      'Built scalable Android apps for logistics and inventory integrated with SAP, Oracle JD Edwards, and legacy ERPs.',
      'Integrated barcode and RFID workflows; improved SMS/email services with multi-threading.',
      'Shipped Azure-based image processing that reduced operational costs by ~15%; secured services with JWT and OAuth 2.0.',
    ],
    tech: ['Spring Boot', 'Kubernetes', 'GCP', 'Android', 'Azure', 'Docker', 'REST', 'OAuth 2.0'],
  },
  {
    company: 'JSD Retails LLC',
    title: 'Full Stack Developer',
    location: 'Dubai, UAE',
    range: 'Dec 2016 – Nov 2020',
    highlights: [
      'Led web and desktop apps for retail trading, warehouse, CRM, and accounts.',
      'Designed REST APIs for Android and PDA clients; optimized warehouse flows with barcode scanning.',
      'Used Jasper stack for forecasting and real-time operational reporting.',
    ],
    tech: ['Java', 'Spring', 'Angular', 'Android', 'Oracle', 'REST', 'Jasper'],
  },
  {
    company: 'Fincuro Solutions (UST Global)',
    title: 'Software Engineer',
    location: 'Trivandrum, India',
    range: 'Dec 2012 – Sep 2016',
    highlights: [
      'Built core banking management software for financial institutions across India.',
      'Delivered features for payroll, trading, digital channels, treasury, and regulatory reporting.',
    ],
    tech: ['Java', 'Swing', 'EJB', 'iBatis', 'JBoss', 'Jasper Reports', 'SVN'],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    title: 'Ad platform integrations',
    description:
      'Unified heterogeneous ad-network APIs into one internal model with resilient ingestion, campaign automation, and high-volume daily updates across six platforms.',
    tech: ['Golang','React','TypeScript','GCP', 'Redis', 'Kubernetes', 'GraphQL','Terraform'],
  },
  {
    title: 'Event-driven API gateway',
    description:
      'Evolved a monolithic gateway into Pub/Sub-driven services for better isolation, throughput, and fault tolerance under burst traffic.',
    tech: ['Redis', 'Cloud Tasks', 'Terraform', 'Microservices'],
  },
  {
    title: 'Vision & AI data pipelines',
    description:
      'Queue-backed processing with SQS/S3 and streaming uploads for large assets powering computer vision workflows.',
    tech: ['Scala', 'AWS', 'Play Framework', 'Akka Streams'],
  },
];

export const skills = {
  languages: ['Golang', 'Java', 'TypeScript', 'React', 'Scala', 'Python', 'Android'],
  datastores: ['PostgreSQL', 'Redis', 'Oracle', 'BigQuery', 'RDS', 'DynamoDB', 'MongoDB', 'MySQL'],
  platforms: [
    'gRPC',
    'REST',
    'Protocol Buffers',
    'GraphQL (Hasura)',
    'GCP',
    'AWS',
    'Kubernetes',
    'Terraform',
    'Kafka',
    'Docker',
    'CI/CD',
  ],
  domains: [
    'Distributed systems',
    'Microservices',
    'Event-driven architecture',
    'API design',
    'AdTech',
    'Data pipelines',
    'Agile',
  ],
};

export const education = [
  {
    school: 'Technological University Dublin',
    detail: "Master's, Software Solutions Architecture (part-time, online)",
    location: 'Dublin, Ireland',
    range: 'Jan 2023 – Present',
  },
  {
    school: 'Dundalk Institute of Technology',
    detail: 'B.Sc. Computing — Pass with Distinction',
    location: 'Dundalk, Ireland',
    range: 'May 2022',
  },
  {
    school: 'Technical Education Department Kerala',
    detail: 'Diploma in Computer Engineering',
    location: 'Kerala, India',
    range: 'May 2012',
  },
];
