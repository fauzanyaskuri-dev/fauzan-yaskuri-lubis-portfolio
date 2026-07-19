import { PortfolioProject, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'proj-gema',
    title: 'GEMA — iOS Fintech Preventive Gateway',
    tagline: 'Apple Developer Academy Case Study | Product Manager & System Analyst',
    description: 'An iOS gatekeeper application addressing stealth spending in digital cashless transactions. Led user research, authored comprehensive Product Requirements Documents (PRDs), aligned technical specs (CoreHaptics, URL Schemes), and prototyped workflow UX in Figma and Miro.',
    category: 'Product Management',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    technologies: ['iOS CoreHaptics', 'URL Schemes', 'PRD Writing', 'Figma', 'Miro', 'User Research', 'System Analysis'],
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'proj-ebansos',
    title: 'e-Bansos RW Terpadu',
    tagline: 'Integrated Social Assistance Web System | Product Owner & Frontend Developer',
    description: 'A type-safe community web platform streamlining local government assistance pipelines. Deployed real-time citizen tracking gateways (TrackingScreen), managed Role-Based Access Control (RBAC) with secure RT/RW admin interfaces (AdminRTScreen & AdminRWScreen), and coordinated React, TypeScript, and Vite execution.',
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80',
    technologies: ['React', 'TypeScript', 'Vite', 'RBAC', 'UI/UX Design', 'Product Strategy'],
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'proj-msme',
    title: 'Mobile Application Design for Food MSME',
    tagline: 'Product Analyst & UI/UX Designer',
    description: 'Comprehensive mobile solution for local culinary businesses. Conducted intensive user discovery and market research to identify operational frictions, modeled detailed user personas/journeys, and structured high-fidelity interactive wireframes/prototypes in Figma to establish a complete Minimum Viable Product (MVP).',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    technologies: ['Figma', 'Miro', 'Wireframing', 'User Discovery', 'User Journey Mapping', 'MVP Prototyping'],
    liveUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    featured: true
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Product & Business Analysis',
    skills: [
      { name: 'PRD Writing & Requirements', level: 95 },
      { name: 'User Stories & Acceptance Criteria', level: 92 },
      { name: 'User Research & Product Roadmap', level: 90 },
      { name: 'Business Analysis', level: 88 },
      { name: 'Agile/Scrum Lifecycle', level: 85 }
    ]
  },
  {
    name: 'UI/UX & Prototyping',
    skills: [
      { name: 'Human-Centered Design (HCD)', level: 90 },
      { name: 'Wireframing (Figma, Miro)', level: 92 },
      { name: 'High-Fidelity Prototyping', level: 88 },
      { name: 'User Journey Mapping', level: 88 },
      { name: 'Usability Testing', level: 85 }
    ]
  },
  {
    name: 'Software Development & Tech',
    skills: [
      { name: 'System Analysis', level: 90 },
      { name: 'React.js & TypeScript', level: 88 },
      { name: 'Vite & Web Dev (HTML, CSS, JS)', level: 90 },
      { name: 'Object-Oriented Programming (Java, C++)', level: 85 },
      { name: 'MySQL / SQL Database', level: 82 },
      { name: 'iOS Architecture Concepts', level: 80 }
    ]
  },
  {
    name: 'Project & Tech Tools',
    skills: [
      { name: 'JIRA & ClickUp', level: 85 },
      { name: 'Azure DevOps', level: 80 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Canva & Design Assets', level: 85 },
      { name: 'Microsoft Office Suite', level: 95 }
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'org-1',
    role: 'Staff, Pemberdayaan Prestasi Mahasiswa',
    company: 'BEM Fakultas Ilmu Komputer UPN "Veteran" Jakarta',
    period: '2025 - 2026',
    location: 'Jakarta, Indonesia',
    description: [
      'Collaborated with stakeholders to define goals, plan, and execute large-scale faculty events and seminars from ideation to launch.',
      'Analyzed student participation data to prioritize development programs that drive maximum community engagement.'
    ],
    technologies: ['Event Management', 'Data Analysis', 'Stakeholder Collaboration', 'Leadership']
  },
  {
    id: 'org-2',
    role: 'Operational and Logistics Coordinator',
    company: 'Slash Competition (SLASHCOM)',
    period: 'Feb 2025 - Jul 2025',
    location: 'Jakarta, Indonesia',
    description: [
      'Supported student achievement development programs through academic and non-academic activities.',
      'Assisted in planning and organizing competitions, seminars, and faculty events.',
      'Strengthened skills in teamwork, leadership, and communication.'
    ],
    technologies: ['Operations Management', 'Logistics', 'Team Leadership', 'Event Coordination']
  },
  {
    id: 'org-3',
    role: 'Staff of Equipment Division',
    company: 'Program Intensive Learning Workshop with Maxy Academy (Pointer)',
    period: 'Feb 2025 - Jul 2025',
    location: 'Jakarta, Indonesia',
    description: [
      'Supported workshop activities focused on UI/UX design using Figma in collaboration with Maxy Academy.',
      'Managed and prepared necessary equipment to ensure smooth learning sessions.',
      'Collaborated with committee members and participants to facilitate an effective learning environment.'
    ],
    technologies: ['Equipment Logistics', 'Figma Workshops', 'Collaborative Learning']
  },
  {
    id: 'exp-1',
    role: 'IT Support Staff (Internship)',
    company: 'Al-Izhar Pondok Labu Jakarta',
    period: 'Jan 2023 - Apr 2023',
    location: 'Jakarta, Indonesia',
    description: [
      'Gathered and analyzed user feedback regarding hardware and software issues from 100+ end-users to understand usability bottlenecks.',
      'Assisted senior administrators in monitoring system performance, ensuring 100% daily digital operational functionality and reliability.',
      'Utilized strong problem-solving skills to troubleshoot technical system errors, directly contributing to minimized operational downtime.'
    ],
    technologies: ['IT Support', 'System Monitoring', 'Troubleshooting', 'User Feedback']
  }
];

export const educationList: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Diploma Three (D3) Information Systems',
    institution: 'Universitas Pembangunan Nasional "Veteran" Jakarta',
    period: '2024 - Present',
    location: 'Jakarta, Indonesia',
    gpa: '3.77 / 4.00',
    highlights: [
      'Relevant Coursework: Analisis Bisnis, Analisis Dan Perancangan Sistem Informasi, Sistem Basis Data (SQL), Teori & Praktikum Pemrograman Web, Product Management Lifecycle.',
      'Bridging the gap between business strategy, user experience, and technical software execution.'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Major in Computer Engineering',
    institution: 'SMK Yadika 12 Depok',
    period: '2021 - 2024',
    location: 'Depok, Indonesia',
    gpa: 'Graduate',
    highlights: [
      'Gained deep foundational knowledge in computer networks, hardware diagnostic, and introductory scripting.',
      'Developed strong problem-solving and computer troubleshooting competencies.'
    ]
  }
];
