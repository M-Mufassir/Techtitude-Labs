// =============================================================================
// TECHTITUDE LABS — Centralized Content Store
// All page/component data lives here. Icons are stored as string keys.
// =============================================================================


import { velocityImage1, velocityImage2, velocityImage3, velocityImage4, velocityImage5 } from '../assets/images';

// ==================== EXISTING EXPORTS ====================

export const services = [
  { title: "ICT Education", desc: "Grade 10 & 11 ICT tuition built around the school syllabus and real exam technique.", span: "col-span-2" },
  { title: "Programming Courses", desc: "From first line of code to production-ready projects.", span: "" },
  { title: "Web Development", desc: "Modern, responsive sites and web apps.", span: "" },
  { title: "Mobile App Development", desc: "Native and cross-platform apps for iOS & Android.", span: "" },
  { title: "AI & Machine Learning", desc: "Practical ML — from fundamentals to deployed models.", span: "col-span-2" },
  { title: "Cloud Computing", desc: "Deploy, scale, and manage infrastructure.", span: "" },
  { title: "Cybersecurity", desc: "Secure-by-design thinking for real systems.", span: "" },
  { title: "UI/UX Design", desc: "Interfaces people actually enjoy using.", span: "" },
  { title: "Software Development", desc: "Custom systems built for how your business runs.", span: "col-span-2" },
  { title: "Business Automation", desc: "Cut manual work out of daily operations.", span: "" },
  { title: "Embedded Systems & Robotics ", desc: "Embedded Systems , IoT and Robotics Project Guidance and Implementation", span: "" },
  { title: "Final Year Project Guidance", desc: "Mentorship from proposal to final defense.", span: "col-span-2" },
];

export const values = [
  "Innovation", "Excellence", "Integrity", "Collaboration",
  "Continuous Learning", "Creativity", "Student Success",
  "Customer Satisfaction", "Community Impact",
];

export const stats = [
  { value: "11+", label: "Core service lines" },
  { value: "2", label: "Tracks — education & software" },
  { value: "1", label: "Mission: ideas into impact" },
];

export const courseTracks = [
  {
    name: "ICT — O/L (Grade 10 & 11)",
    tag: "school",
    desc: "Full syllabus coverage with structured theory, past-paper practice, and exam technique for the O/L ICT curriculum.",
  },
  {
    name: "Programming Foundations",
    tag: "beginner",
    desc: "Core programming logic, syntax, and problem solving — the base every other track builds on.",
  },
  {
    name: "Web Development",
    tag: "hands-on",
    desc: "Build and ship real front-end and full-stack projects using modern frameworks and tooling.",
  },
  {
    name: "Embedded Systems & IoT",
    tag: "hands-on",
    desc: "Build and Get Hands on experience in Real world Systems Solutions using Embedded IoT Fundamentals",
  },
  {
    name: "Robotics",
    tag: "hands-on",
    desc: "Get Foundational Knowledge of Robotics in Real world Applications.",
  },
  {
    name: "Mobile App Development",
    tag: "hands-on",
    desc: "Design and build apps for iOS and Android with production-grade workflows.",
  },
  {
    name: "UI/UX Design",
    tag: "hands-on",
    desc: "Research, wireframe, and design interfaces backed by real usability thinking.",
  },
  {
    name: "AI & Machine Learning",
    tag: "advanced",
    desc: "From core ML concepts to training and deploying practical models.",
  },
  {
    name: "Final Year Project Guidance",
    tag: "mentorship",
    desc: "One-on-one mentorship for undergraduates — from proposal through to final defense.",
  },
];


// ==================== ABOUT PAGE ====================

export const timelineNodes = [
  {
    year: "2021",
    title: "The Inception",
    desc: "Started as a specialized tutoring program aimed at bridging the gap in local O/L and A/L ICT curriculums, focusing purely on fundamentals.",
    color: "#00AEEF",
  },
  {
    year: "2022",
    title: "The Code Core Expansion",
    desc: "Launched our first advanced programming bootcamps. Students began moving beyond exams and started building actual software.",
    color: "#4a72d6",
  },
  {
    year: "2024",
    title: "Studio Establishment",
    desc: "Formally launched the Development Studio to handle enterprise client requests. Began architecting custom web systems and automations for local businesses.",
    color: "#7B2CBF",
  },
  {
    year: "2026",
    title: "The Dual-Division Matrix",
    desc: "Unified the Academy and Studio into a seamless, cyclical ecosystem. Producing world-class digital products and the next generation of engineers under one roof.",
    color: "white",
  },
];


// ==================== ACADEMY HOME PAGE ====================

/** iconKey maps to Lucide icon names: Code2 | Cpu | Monitor | Zap */
export const academyPillars = [
  {
    title: "Core Programming",
    iconKey: "Code2",
    desc: "Python, JavaScript, and C++. The foundation of modern software engineering.",
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-br from-[#00AEEF]/10 to-transparent",
  },
  {
    title: "AI & Machine Learning",
    iconKey: "Cpu",
    desc: "Neural networks, data science, and intelligent systems.",
    colSpan: "col-span-1",
    bg: "bg-gradient-to-br from-[#7B2CBF]/10 to-transparent",
  },
  {
    title: "UI/UX Design",
    iconKey: "Monitor",
    desc: "Figma, wireframing, and creating beautiful user experiences.",
    colSpan: "col-span-1",
    bg: "bg-gradient-to-bl from-pink-500/10 to-transparent",
  },
  {
    title: "ICT Fundamentals",
    iconKey: "Zap",
    desc: "O/L & A/L ICT curriculums mapped to real-world tech industry standards.",
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-tr from-[#00AEEF]/5 to-transparent",
  },
];

export const academyShowcaseProjects = [
  { title: "NeuroSync AI", type: "Machine Learning", author: "Sarah J." },
  { title: "EcoTrack App", type: "Mobile Development", author: "David M." },
  { title: "Defi Exchange UI", type: "UI/UX Design", author: "Aisha T." },
];

export const nextMasterclass = {
  title: "React 19 & Next.js Architecture",
  desc: "Join our lead engineers for a free 3-hour intensive workshop on building highly scalable front-end architectures.",
};


// ==================== BUILDS & STUDENT SHOWCASE (SHARED) ====================

export const studentShowcaseFilters = ["All", "Web App", "AI Model", "Mobile App"];

/** iconKey maps to Lucide icon names: Cpu | Code2 | MonitorSmartphone */
export const studentShowcaseProjects = [
  {
    id: 1,
    title: "NeuroSync API",
    category: "AI Model",
    student: "Sarah Jenkins",
    desc: "A highly optimized neural network API built with FastAPI that classifies brainwave telemetry in real-time.",
    iconKey: "Cpu",
    iconColor: "text-[#00AEEF]",
    colSpan: "col-span-1 md:col-span-2 row-span-2",
    bg: "bg-gradient-to-br from-[#00AEEF]/10 to-[#070B14]",
  },
  {
    id: 2,
    title: "DeFi Dashboard",
    category: "Web App",
    student: "Aisha T.",
    desc: "A sleek, responsive web3 dashboard tracking real-time crypto pairs using React and WebSockets.",
    iconKey: "Code2",
    iconColor: "text-white/50",
    colSpan: "col-span-1",
    bg: "bg-[#0B101E]",
  },
  {
    id: 3,
    title: "EcoTrack",
    category: "Mobile App",
    student: "David M.",
    desc: "React Native application helping users track and offset their daily carbon footprint.",
    iconKey: "MonitorSmartphone",
    iconColor: "text-white/50",
    colSpan: "col-span-1",
    bg: "bg-[#0B101E]",
  },
  {
    id: 4,
    title: "Atlas CRM",
    category: "Web App",
    student: "Marcus R.",
    desc: "A full-stack Next.js CRM system built for local boutique hotels to manage bookings and staff.",
    iconKey: "Code2",
    iconColor: "text-white/50",
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-[#0B101E]",
  },
  {
    id: 5,
    title: "VisionScan",
    category: "AI Model",
    student: "Elena G.",
    desc: "Computer vision model detecting structural cracks in civil engineering blueprints.",
    iconKey: "Cpu",
    iconColor: "text-white/50",
    colSpan: "col-span-1",
    bg: "bg-[#0B101E]",
  },
];


// ==================== CONTACT PAGE ====================

/** iconKey maps to Lucide icon names: Mail | MessageCircle | Phone */
export const contactChannels = [
  {
    title: "Email",
    value: "techtitude.labs@gmail.com",
    link: "mailto:techtitude.labs@gmail.com",
    iconKey: "Mail",
    description: "For courses, projects & business inquiries",
  },
  {
    title: "WhatsApp",
    value: "+94 71 423 3425",
    link: "https://wa.me/94714233425",
    iconKey: "MessageCircle",
    description: "Fast communication",
  },
  {
    title: "Phone",
    value: "+94 76 265 7472",
    link: "tel:+94762657472",
    iconKey: "Phone",
    description: "General inquiries",
  },
];

export const academyCourseOptions = [
  { value: "Code Core (Grade 10 & 11)", label: "Code Core (Grade 10 & 11 ICT)" },
  { value: "Web Engineering", label: "Advanced Web Engineering" },
  { value: "AI & ML", label: "Next-Gen AI & ML" },
  { value: "UI/UX Design", label: "Interactive UI/UX Design" },
];

export const studioCapabilityTags = [
  "Web App",
  "Mobile App",
  "E-Commerce",
  "AI/LLM Integration",
  "Automation/n8n",
  "UI/UX Redesign",
];

export const studioTimelineOptions = [
  { value: "ASAP", label: "ASAP (Expedited)" },
  { value: "1-3 Months", label: "1-3 Months" },
  { value: "3-6 Months", label: "3-6 Months" },
  { value: "6+ Months", label: "6+ Months" },
];


// ==================== COURSES PAGE ====================

export const coursesLiveCounters = [
  { value: "1.2k+", label: "Active Students" },
  { value: "450+", label: "Projects Built" },
  { value: "03", label: "Days to Workshop" },
];

export const coursesEcosystemCards = [
  {
    tag: "Grade 10 & 11 ICT",
    tagColor: "text-[#00AEEF]",
    title: "Code Core",
    desc: "Complete syllabus coverage paired with practical programming labs. Designed specifically to build strong foundational logic early.",
    colSpanClass: "lg:col-span-2",
    glowClass: "absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/10 blur-[60px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500",
  },
  {
    tag: "Advanced",
    tagColor: "text-gray-500",
    title: "Web Engineering",
    desc: "Full-stack architectures, JavaScript ecosystems, and advanced database engineering.",
    colSpanClass: "",
    glowClass: "absolute bottom-0 right-0 w-32 h-32 bg-[#00AEEF]/10 blur-[40px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500",
  },
  {
    tag: "Future Tech",
    tagColor: "text-gray-500",
    title: "Next-Gen AI & ML",
    desc: "Neural networks, data science pipelines, and practical implementation of automation models.",
    colSpanClass: "",
    glowClass: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00AEEF]/10 blur-[40px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500",
  },
  {
    tag: "Design",
    tagColor: "text-gray-500",
    title: "UI/UX & Interactive Design",
    desc: "Design thinking, high-fidelity wireframing, motion design prototyping, and Figma workflows.",
    colSpanClass: "md:col-span-2 lg:col-span-2",
    glowClass: "absolute bottom-0 left-0 w-64 h-64 bg-[#00AEEF]/10 blur-[60px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500",
  },
];

export const careerSteps = [
  {
    step: "01",
    title: "Foundational Deep-Dive",
    desc: "Mastering syntax and structural logic. Building the bedrock of computer science.",
  },
  {
    step: "02",
    title: "Final Year Project Guidance",
    desc: "Dedicated mentorship to architect, build, and deploy production-ready capstone systems.",
  },
  {
    step: "03",
    title: "Career Development Bootcamps",
    desc: "Technical resume building, mock engineering interviews, portfolio optimization, and direct placement drives.",
  },
];

export const upcomingMasterclasses = [
  { date: "Oct 12, 2026", topic: "Building Workflows with Advanced Automations" },
  { date: "Oct 26, 2026", topic: "Modern React Server Components Architecture" },
];

export const courseFAQs = [
  {
    title: "Do I need prior coding experience?",
    content: "Not for the Code Core track. We start from the absolute basics of logic and computational thinking before moving into specific syntax.",
  },
  {
    title: "Are classes online or in-person?",
    content: "We offer hybrid models. You can join the live streams from anywhere or attend in-person sessions at our campus.",
  },
  {
    title: "Do you provide job placement?",
    content: "Our Career Accelerator bootcamps connect top-performing students directly with our industry partners for internships and junior roles.",
  },
];

export const coursesEnrollmentTracks = [
  { value: "core", label: "Code Core" },
  { value: "web", label: "Web Engineering" },
  { value: "ai", label: "Next-Gen AI & ML" },
  { value: "design", label: "UI/UX Design" },
];


// ==================== PORTFOLIO PAGE ====================

export const portfolioProjects = [
  {
    id: "project-01",
    client: "GlobalPay Inc.",
    title: "Real-time Payment Gateway",
    description:
      "We architected a high-throughput transaction engine capable of processing 50,000 requests per second with 99.999% uptime. The system integrates directly with Visa and Mastercard network rails.",
    metrics: [
      { label: "Throughput", value: "50k/sec" },
      { label: "Uptime", value: "99.999%" },
      { label: "Latency", value: "<15ms" },
    ],
    stack: ["Rust", "Node.js", "PostgreSQL", "AWS ECS"],
    category: "FinTech",
  },
  {
    id: "project-02",
    client: "OmniHealth",
    title: "Telemedicine Platform",
    description:
      "A complete overhaul of OmniHealth's infrastructure. We built a secure, HIPAA-compliant video consultation platform featuring end-to-end encryption and real-time medical record syncing.",
    metrics: [
      { label: "Active Users", value: "2M+" },
      { label: "Consultations", value: "15k/day" },
      { label: "Compliance", value: "HIPAA" },
    ],
    stack: ["React", "WebRTC", "Python", "AWS HIPAA"],
    category: "HealthTech",
  },
  {
    id: "project-03",
    client: "LogisAI",
    title: "Predictive Supply Chain",
    description:
      "We developed a machine learning pipeline that ingests global weather, port traffic, and historical data to predict supply chain disruptions 3 weeks before they happen.",
    metrics: [
      { label: "Accuracy", value: "94%" },
      { label: "Data Ingest", value: "5TB/day" },
      { label: "Savings", value: "$12M" },
    ],
    stack: ["Python", "TensorFlow", "Snowflake", "dbt"],
    category: "Logistics",
  },
];


// ==================== PROCESS PAGE ====================

/** iconKey maps to Lucide icon names: Search | PenTool | Braces | ShieldCheck | Rocket */
export const processSteps = [
  {
    id: "01",
    title: "Discovery & Scope",
    iconKey: "Search",
    desc: "We dive deep into your business logic. We don't just take orders; we challenge assumptions and draft a precise technical scope.",
    deliverables: ["Product Requirements Document (PRD)", "System Architecture Draft", "Budget Allocation"],
  },
  {
    id: "02",
    title: "UI/UX & Prototyping",
    iconKey: "PenTool",
    desc: "Translating architecture into interactive, high-fidelity prototypes. You see exactly how the product behaves before a single line of code is written.",
    deliverables: ["Interactive Figma Prototype", "Design System", "User Flow Diagrams"],
  },
  {
    id: "03",
    title: "Core Engineering",
    iconKey: "Braces",
    desc: "Our elite engineers build the product using scalable, fault-tolerant enterprise stacks (React, Node, Python). We work in 2-week agile sprints.",
    deliverables: ["Frontend Client", "Backend Microservices", "API Endpoints"],
  },
  {
    id: "04",
    title: "QA & Pen Testing",
    iconKey: "ShieldCheck",
    desc: "Rigorous testing to break the system. We ensure banking-grade security, cross-browser compatibility, and zero-latency performance.",
    deliverables: ["Automated Test Suites", "Security Audit Report", "Performance Benchmarks"],
  },
  {
    id: "05",
    title: "Deployment & Scaling",
    iconKey: "Rocket",
    desc: "Going live. We deploy onto AWS/GCP and set up CI/CD pipelines so your product can scale to millions of users seamlessly.",
    deliverables: ["Production Deployment", "CI/CD Setup", "30-Day Hypercare Support"],
  },
];


// ==================== SERVICES PAGE ====================

export const studioServiceCards = [
  {
    title: "Custom Software & Mobile Solutions",
    desc: "Building native iOS/Android applications and cross-platform ecosystems engineered for high performance.",
    glowClass: "absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF]/10 blur-[60px] rounded-full group-hover:bg-[#7B2CBF]/25 transition-colors duration-500",
  },
  {
    title: "Next-Gen Web & E-Commerce",
    desc: "Developing custom web solutions and high-conversion platforms optimized for speed and fluidity.",
    glowClass: "absolute bottom-0 left-0 w-64 h-64 bg-[#7B2CBF]/10 blur-[60px] rounded-full group-hover:bg-[#7B2CBF]/25 transition-colors duration-500",
  },
  {
    title: "AI Solutions & Intelligent Automation",
    desc: "Implementing custom LLM pipelines, BI tools, and automated operations to eliminate overhead.",
    glowClass: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#7B2CBF]/10 blur-[60px] rounded-full group-hover:bg-[#7B2CBF]/25 transition-colors duration-500",
  },
  {
    title: "Digital Transformation Suites",
    desc: "Complete overhauls of legacy business software systems into modern web-based internal tool architectures.",
    glowClass: "absolute top-0 left-0 w-64 h-64 bg-[#7B2CBF]/10 blur-[60px] rounded-full group-hover:bg-[#7B2CBF]/25 transition-colors duration-500",
  },
];

export const techStackMatrix = {
  frontend: {
    label: "Frontend Architecture",
    borderColor: "border-[#7B2CBF]",
    techs: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  backend: {
    label: "Backend & Database",
    borderColor: "border-[#b37be8]",
    techs: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Vercel"],
  },
  automation: {
    label: "Automation Engines",
    borderColor: "border-[#e0c4ff]",
    techs: ["n8n", "Webhooks", "REST APIs", "GraphQL", "Zapier", "Make"],
  },
};

export const clientLogos = [
  "Acme Corp",
  "Global Tech",
  "Stark Industries",
  "Wayne Enterprises",
  "Cyberdyne",
  "Umbrella Corp",
  "Massive Dynamic",
];


// ==================== STUDIO HOME PAGE ====================

/** iconKey maps to Lucide icon names: Workflow | Terminal | Database | Shield */
export const studioCapabilities = [
  {
    title: "System Architecture",
    desc: "Designing scalable, fault-tolerant infrastructure for enterprise applications.",
    iconKey: "Workflow",
  },
  {
    title: "Core Engineering",
    desc: "Building high-performance React, Node, and Python architectures.",
    iconKey: "Terminal",
  },
  {
    title: "Data Pipelines",
    desc: "Automating massive datasets and training custom machine learning models.",
    iconKey: "Database",
  },
  {
    title: "Cybersecurity",
    desc: "Penetration testing and ensuring banking-grade security protocols.",
    iconKey: "Shield",
  },
];


// ==================== WORKSHOPS PAGE ====================

export const workshops = [
  {
    id: "ws-001",
    title: "React 19 & Next.js Architecture",
    date: "Oct 12, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "Colombo Campus & Remote",
    instructor: "Kasun Silva",
    capacity: "50 Seats",
    status: "Register Open",
    tag: "Engineering",
  },
  {
    id: "ws-002",
    title: "Introduction to Large Language Models",
    date: "Oct 19, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual Discord Stage",
    instructor: "Dr. A. Fernando",
    capacity: "100 Seats",
    status: "Waitlist",
    tag: "AI / ML",
  },
  {
    id: "ws-003",
    title: "Figma to Code: The Handoff",
    date: "Nov 02, 2026",
    time: "10:00 AM - 12:00 PM",
    location: "Colombo Campus",
    instructor: "Nethmi R.",
    capacity: "30 Seats",
    status: "Register Open",
    tag: "Design",
  },
  {
    id: "ws-004",
    title: "Cloud Deployment on AWS",
    date: "Nov 15, 2026",
    time: "1:00 PM - 4:00 PM",
    location: "Virtual",
    instructor: "Mufassir M.",
    capacity: "Unlimited",
    status: "Register Open",
    tag: "DevOps",
  },
];


// ==================== NAVIGATION (DynamicBottomDock) ====================

export const navigationLinks = {
  academy: [
    { label: "About", path: "/about" },
    { label: "Courses", path: "/courses" },
    { label: "Workshops", path: "/workshops" },
    { label: "Builds", path: "/builds" },
    { label: "Contact", path: "/contact" },
  ],
  studio: [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Process", path: "/process" },
    { label: "Contact", path: "/contact" },
  ],
};


// ==================== SPLIT GATEWAY (code marquee) ====================

export const marqueeSnippets = [
  "import { deploy } from '@server/core'; await deploy({ environment: 'production', region: 'us-east-1' }); // SUCCESS",
  "export const config = { runtime: 'edge', memory: 1024, maxDuration: 60 }; const handler = async (req) => { return new Response(); }",
  "function optimizeAST(tree) { return tree.map(node => transform(node)); } // COMPILING CHUNKS [||||||||||] 100%",
  "SELECT u.id, u.profile FROM users u INNER JOIN telemetry t ON u.id = t.user_id WHERE t.active = true;",
];

// ==================== VELOCITY REEL ====================
export const velocityProjects = [
  {
    title: "Project Nexus",
    tag: "Real-time Platform",
    image: velocityImage1,
    hue: 200,
  },
  {
    title: "Aura E-Commerce",
    tag: "Web Infrastructure",
    image: velocityImage2,
    hue: 270,
  },
  {
    title: "Neuro Predictor",
    tag: "AI Operations",
    image: velocityImage3,
    hue: 190,
  },
  {
    title: "Health Automations",
    tag: "n8n Pipelines",
    image: velocityImage4,
    hue: 260,
  },
  {
    title: "FinTech Dashboard",
    tag: "Enterprise Web",
    image: velocityImage5,
    hue: 210,
  },
];