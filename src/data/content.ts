export const services = [
  { title: "ICT Education", desc: "Grade 10 & 11 ICT tuition built around the school syllabus and real exam technique.", span: "col-span-2" },
  { title: "Advanced Level ICT", desc: "Advanced Level ICT Modules with Practical Demonstration", span: "" },
  { title: "Basic Programming", desc: "From first line of code to production-ready projects.", span: "" },
  { title: "Introduction to Robotics", desc: "Get into Embedded Systems and Robotics and Real world Projects", span: "" },
  { title: "AI & Machine Learning Fundamentals", desc: "Practical ML — from fundamentals to deployed models.", span: "col-span-2" },
  { title: "Prompt Engineering", desc: "Prompt Engineering Basics To Advance", span: "" },
  { title: "Software Development Fundamentals", desc: "Get into Real World Programming And Software Design Principles", span: "" },
  { title: "UI/UX Design", desc: "Interfaces people actually enjoy using.", span: "" },
  { title: "University Project Guidance", desc: "A-Z Guidance For University Projects.", span: "col-span-2" },
  { title: "Business Automation", desc: "Cut manual work out of daily operations.", span: "" },
  { title: "Final Year Project Guidance", desc: "Mentorship from proposal to final defense.", span: "" },
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
    name: "Advanced Level ICT Practicals",
    tag: "school",
    desc: "Full syllabus coverage with structured theory, get into real world problem solutions.",
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
    name: "Introduction to AI & Machine Learning",
    tag: "Beginner",
    desc: "From core ML concepts to training and deploying practical models.",
  },
  {
    name: "UI/UX Design",
    tag: "hands-on",
    desc: "Research, wireframe, and design interfaces backed by real usability thinking.",
  },
  {
    name: "Final Year Project Guidance",
    tag: "mentorship",
    desc: "One-on-one mentorship for undergraduates — from proposal through to final defense.",
  },
];

export const splitGatewayContent = {
  marqueeSnippets: [
    "import { deploy } from '@server/core'; await deploy({ environment: 'production', region: 'us-east-1' }); // SUCCESS",
    "export const config = { runtime: 'edge', memory: 1024, maxDuration: 60 }; const handler = async (req) => { return new Response(); }",
    "function optimizeAST(tree) { return tree.map(node => transform(node)); } // COMPILING CHUNKS [||||||||||] 100%",
    "SELECT u.id, u.profile FROM users u INNER JOIN telemetry t ON u.id = t.user_id WHERE t.active = true;"
  ],
  mobile: {
    titleLine1: "Where Learning\n",
    titleHighlight: "Meets",
    titleLine2: " Innovation",
    academy: {
      subtitle: "Learn • Build • Grow",
      title: "ACADEMY",
      cta: "Enter Academy",
    },
    dev: {
      subtitle: "Design • Develop • Innovate",
      title: "DEVELOPMENT",
      cta: "Enter Studio",
    }
  },
  desktop: {
    titleLine1: "Where Learning ",
    titleHighlight: "Meets",
    titleLine2: " Innovation",
    academy: {
      subtitle: "Learn • Build • Grow",
      title: "ACADEMY",
      cta: "Enter Academy",
    },
    dev: {
      subtitle: "Design • Develop • Innovate",
      title: "DEVELOPMENT",
      cta: "Enter Development",
    }
  }
};

export const velocityReelContent = {
  heading: "Student Innovation Lab",
  projects: [
    {
      title: "Hand Gesture Control Robot",
      tag: "Robotics",
      hue: 200,
    },
    {
      title: "POS-Desktop",
      tag: "Desktop Infrastructure",
      hue: 270,
    },
    {
      title: "Neuro Predictor",
      tag: "AI Operations",
      hue: 190,
    },
    {
      title: "Health Automations",
      tag: "n8n Pipelines",
      hue: 260,
    },
    {
      title: "FinTech Dashboard",
      tag: "Enterprise Web",
      hue: 210,
    },
  ]
};

export const projectShowcaseContent = {
  headerTitle: "our\nwork.",
  headerSubtitle: "Scroll down to explore showcased creative engineering."
};

export const teamMembersContent = [
  {
    id: '1',
    name: 'Bashith Ahamed',
    role: 'Founder',
    qualification: 'BSc (Hons) in Computer Science',
    social: { linkedin: 'https://www.linkedin.com/in/m-a-b-ahamad-872195413/' },
  },
  {
    id: '2',
    name: 'Mohamed Mufassir',
    role: 'Co-Founder',
    qualification: 'BSc (Hons) Computer Systems Engineering (UG)',
    social: { linkedin: 'https://www.linkedin.com/in/mohamedmufassir' },
  },
  {
    id: '3',
    name: 'Ahamed Ishrath',
    role: 'CEO',
    qualification: 'BSc Physical Science (Spcl) Computer Science',
    social: { linkedin: 'https://www.linkedin.com/in/ahamed-ishrath-471b7a383?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
  },
  {
    id: '4',
    name: 'Mohamed Musharraf',
    role: 'CTO',
    qualification: 'BSc in Data Science (UG)',
    social: { linkedin: '#' },
  },
  {
    id: '5',
    name: 'Muhammed Nashan',
    role: 'Software Engineer',
    qualification: 'BSc (Hons) in Computer Science',
    social: { linkedin: 'https://www.linkedin.com/in/muhammed-nashan' },
  },
];

export const projects = [
  {
    id: "project-hardware",
    client: "Industrial Catalog",
    title: "Hardware Website",
    description: "A robust digital presence for hardware components and industrial supplies, making it easy for customers to browse extensive catalogs and request quotes.",
    metrics: [
      { label: "Catalog Size", value: "Massive" },
      { label: "Type", value: "Showcase" },
      { label: "Industry", value: "Hardware" }
    ],
    stack: ["Web", "Showcase", "B2B"],
    category: "Industrial",
  },
  {
    id: "project-detectx",
    client: "Plant Disease AI",
    title: "DetectX Web App",
    description: "An AI-powered web application that identifies plant diseases from images of leaves. Uses a MobileNetV2 neural network trained on 38 classes to instantly diagnose crop health and provide treatments.",
    metrics: [
      { label: "Accuracy", value: "High" },
      { label: "Type", value: "Web App" },
      { label: "Industry", value: "Agriculture" }
    ],
    stack: ["Flask", "Keras", "Tailwind CSS"],
    category: "AI / Agritech",
  },
  {
  id: "project-saththar-feeds",
  client: "Saththar Feeds",
  title: "Saththar Feeds Billing System",
  description: "A comprehensive billing and inventory management web application for pet feed businesses. Features customer and admin portals, PDF invoice generation, inventory management, and an AI-powered product recommendation system that suggests the most suitable pet feed based on the pet's age.",
  metrics: [
    { label: "Platform", value: "Web App" },
    { label: "AI Feature", value: "Feed Advisor" },
    { label: "Industry", value: "Retail" }
  ],
  stack: [
    "PHP",
    "MySQL",
    "JavaScript",
    "HTML5",
    "CSS3",
    "FPDF",
    "Python",
    "Scikit-learn"
  ],
  category: "Retail Management / AI",
},
    {
  id: "project-herit-edge",
  client: "E-Commerce",
  title: "HERIT EDGE",
  description: "An AI-powered e-commerce platform dedicated to Sri Lankan handmade products, enabling artisans to showcase and sell clay pottery, wood carvings, antiques, and other handicrafts. Features multilingual support, AI image-based product search, a customer chatbot, and a comprehensive seller dashboard.",
  metrics: [
    { label: "Platform", value: "E-Commerce" },
    { label: "AI Features", value: "Image Search" },
    { label: "Industry", value: "Handicrafts" }
  ],
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "Python",
    "FastAPI",
    "TensorFlow",
    "Uvicorn"
  ],
  category: "AI / E-Commerce",
},
{
  id: "valdore-estates",
  client: "Valdore Estates",
  title: "Real Estate Property Platform",
  description: "A modern frontend real estate platform that allows users to explore property listings, view detailed information, and connect with brokers. Built with a responsive design, smooth animations, and an intuitive browsing experience for discovering residential and commercial properties.",
  metrics: [
    { label: "Platform", value: "Web App" },
    { label: "Type", value: "Frontend Website" },
    { label: "Industry", value: "Real Estate" }
  ],
  stack: [
    "React 19",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "Framer Motion",
    "Lucide React"
  ],
  category: "Real Estate / Frontend Development",
},
  {
    id: "project-restaurant",
    client: "Restaurant Platform",
    title: "Restaurant Website",
    description: "An elegant, highly responsive platform tailored for restaurants to showcase their menus, facilitate online orders, and manage table reservations effortlessly.",
    metrics: [
      { label: "Responsive", value: "100%" },
      { label: "Type", value: "Web App" },
      { label: "Focus", value: "Hospitality" }
    ],
    stack: ["Web", "Responsive", "UI/UX"],
    category: "Hospitality",
  },
  {
    id: "project-jewellery",
    client: "E-Commerce",
    title: "Jewellery Website",
    description: "A premium online store designed for luxury jewellery brands, featuring high-quality product galleries, immersive shopping experiences, and secure checkout.",
    metrics: [
      { label: "Conversion", value: "High" },
      { label: "Type", value: "E-Commerce" },
      { label: "Quality", value: "Premium" }
    ],
    stack: ["E-Commerce", "Web", "Design"],
    category: "Luxury Retail",
  },
  {
    id: "project-booking",
    client: "Booking Engine",
    title: "Booking System",
    description: "An online scalable web application for managing bookings. Fully mobile responsive and engineered to handle high traffic and complex scheduling logic.",
    metrics: [
      { label: "Platform", value: "Web App" },
      { label: "Responsive", value: "Mobile" },
      { label: "Availability", value: "24/7" }
    ],
    stack: ["Web App", "Scalable", "Responsive"],
    category: "Services",
  },
    {
    id: "project-pos",
    client: "POS System",
    title: "Desktop Application",
    description: "A highly scalable and modern Point of Sale system built for all kinds of businesses. Perfect for groceries, phone shops, wholesale shops, and supermarkets.",
    metrics: [
      { label: "Scalability", value: "High" },
      { label: "Type", value: "Desktop" },
      { label: "Business", value: "All" }
    ],
    stack: ["Modern", "Scalable", "Desktop"],
    category: "Retail Tech",
  },
];

export const fileStructure = [
  {
    name: "Grade_6_Digital_Literacy",
    type: "folder" as const,
    children: [
      { name: "6.1_Intro_to_Computers.md", type: "file" as const, extension: "md" },
      { name: "6.2_Lab_Safety.md", type: "file" as const, extension: "md" },
      { name: "6.3_OS_File_Management.md", type: "file" as const, extension: "md" },
      { name: "6.4_Input_Output.md", type: "file" as const, extension: "md" },
      { name: "6.5_Problem_Solving.md", type: "file" as const, extension: "md" },
      { name: "6.6_WWW_Safe_Searching.md", type: "file" as const, extension: "md" },
    ]
  },
  {
    name: "Grade_7_Productivity",
    type: "folder" as const,
    children: [
      { name: "7.1_Hardware_Ports.md", type: "file" as const, extension: "md" },
      { name: "7.2_Word_Processing.md", type: "file" as const, extension: "md" },
      { name: "7.3_Spreadsheets.md", type: "file" as const, extension: "md" },
      { name: "7.4_Presentations.md", type: "file" as const, extension: "md" },
      { name: "7.5_Algorithms_Flowcharts.md", type: "file" as const, extension: "md" },
    ]
  },
  {
    name: "Grade_8_Programming",
    type: "folder" as const,
    children: [
      { name: "8.1_Data_Representation.md", type: "file" as const, extension: "md" },
      { name: "8.2_Word_Processing_Adv.md", type: "file" as const, extension: "md" },
      { name: "8.3_Spreadsheets_Adv.md", type: "file" as const, extension: "md" },
      { name: "8.4_Scratch_Programming.md", type: "file" as const, extension: "md" },
      { name: "8.5_Networks_Email.md", type: "file" as const, extension: "md" },
    ]
  },
  {
    name: "Grade_9_Systems_DB",
    type: "folder" as const,
    children: [
      { name: "9.1_CPU_Architecture.md", type: "file" as const, extension: "md" },
      { name: "9.2_Database_Fundamentals.md", type: "file" as const, extension: "md" },
      { name: "9.3_Spreadsheets_Logic.md", type: "file" as const, extension: "md" },
      { name: "9.4_Visual_Programming_Adv.md", type: "file" as const, extension: "md" },
      { name: "9.5_Cyber_Security.md", type: "file" as const, extension: "md" },
    ]
  },
  {
    name: "Grade_10_Core_CS",
    type: "folder" as const,
    children: [
      { name: "10.1_IT_Concepts.md", type: "file" as const, extension: "md" },
      { name: "10.2_Data_Representation_Adv.md", type: "file" as const, extension: "md" },
      { name: "10.3_Boolean_Logic.md", type: "file" as const, extension: "md" },
      { name: "10.4_OS_Management.md", type: "file" as const, extension: "md" },
      { name: "10.5_Spreadsheets_Complex.md", type: "file" as const, extension: "md" },
      { name: "10.6_DB_Architecture.md", type: "file" as const, extension: "md" },
    ]
  },
  {
    name: "Grade_11_Software_Eng",
    type: "folder" as const,
    children: [
      { name: "11.1_Relational_DB_SQL.md", type: "file" as const, extension: "md" },
      { name: "11.2_Problem_Solving_Algorithms.md", type: "file" as const, extension: "md" },
      { name: "11.3_High_Level_Programming.md", type: "file" as const, extension: "md" },
      { name: "11.4_Web_Dev_HTML_CSS.md", type: "file" as const, extension: "md" },
      { name: "11.5_Multimedia_Processing.md", type: "file" as const, extension: "md" },
      { name: "11.6_Network_Topologies.md", type: "file" as const, extension: "md" },
      { name: "11.7_SDLC.md", type: "file" as const, extension: "md" },
      { name: "11.8_ICT_In_Society.md", type: "file" as const, extension: "md" },
    ]
  }
];

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  client: string;
  title: string;
  description: string;
  metrics: ProjectMetric[];
  stack: string[];
  category: string;
}

// ============================================================
// SITE-WIDE SINGLE SOURCE OF TRUTH
// Shared across Contact, Footer, WhatsAppButton, DynamicBottomDock, etc.
// ============================================================

export const siteConfig = {
  name: "Techtitude Labs",
  email: "techtitude.labs@gmail.com",
  phone: "+94 74 074 7677",
  phoneHref: "tel:+94740747677",
  whatsapp: {
    number: "+94 74 074 7677",
    href: "https://wa.me/94740747677",
  },
};

export interface NavLink {
  label: string;
  path: string;
}

export const navigation: { academy: NavLink[]; studio: NavLink[]; footer: NavLink[] } = {
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
  footer: [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Courses", path: "/courses" },
    { label: "Contact", path: "/contact" },
  ],
};

// icon fields below reference lucide-react component names (resolved via an icon map at render time)
export const contactChannels = [
  {
    title: "Email",
    value: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
    icon: "Mail",
    description: "For courses, projects & business inquiries",
  },
  {
    title: "WhatsApp",
    value: siteConfig.whatsapp.number,
    link: siteConfig.whatsapp.href,
    icon: "MessageCircle",
    description: "Fast communication",
  },
  {
    title: "Phone",
    value: siteConfig.phone,
    link: siteConfig.phoneHref,
    icon: "Phone",
    description: "General inquiries",
  },
];

export const contactAcademyGrades = [
  { value: "grade-6", label: "Grade 6 ICT" },
  { value: "grade-7", label: "Grade 7 ICT" },
  { value: "grade-8", label: "Grade 8 ICT" },
  { value: "grade-9", label: "Grade 9 ICT" },
  { value: "grade-10", label: "Grade 10 ICT" },
  { value: "grade-11", label: "Grade 11 ICT" },
];

export const contactBatchDays = [
  { value: "saturday", label: "Saturday Batches" },
  { value: "sunday", label: "Sunday Batches" },
];

export const contactStudioTimelines = [
  { value: "ASAP", label: "ASAP (Expedited)" },
  { value: "1-3 Months", label: "1-3 Months" },
  { value: "3-6 Months", label: "3-6 Months" },
  { value: "6+ Months", label: "6+ Months" },
];

export const contactStudioStacks = ["Web App", "Final Year Projects", "E-Commerce", "AI/ML Integration", "Automation/n8n", "UI/UX Redesign", "Wordpress Sites", "Other"];

// ============================================================
// TESTIMONIALS (shared by Testimonials.tsx, rendered on Courses page)
// ============================================================

export const testimonials = [
  {
    text: "The hands-on approach to learning HTML and CSS completely changed my perspective. I went from knowing nothing to building my first website in just a few days!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "O/L ICT Student",
  },
  {
    text: "The React workshop was incredibly well-structured. The instructors made complex state management concepts easy to grasp for beginners.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Web Engineering Batch",
  },
  {
    text: "Python Data Science pipelines always seemed intimidating, but this course broke it down perfectly. I now feel confident exploring machine learning.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Data Science Enthusiast",
  },
  {
    text: "I loved the AI & ML seminar! The practical prompt engineering sessions really opened my eyes to how I can use AI for rapid prototyping.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Future Tech Batch",
  },
  {
    text: "Figma design workflows were taught beautifully. The UI/UX prototyping exercises helped me build a solid portfolio piece I'm really proud of.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Design Student",
  },
  {
    text: "The mentors are so supportive. They don't just teach theory; they ensure you get your hands dirty with real-world coding problems.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "A/L ICT Student",
  },
  {
    text: "Getting into software engineering felt like a huge leap, but the foundation course made the transition incredibly smooth and enjoyable.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Engineering Foundation",
  },
  {
    text: "The community here is amazing. Being able to collaborate with other students on full-stack projects really accelerated my learning.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Web Dev Bootcamp",
  },
  {
    text: "From basic HTML to advanced JavaScript, the curriculum is perfectly aligned with what the tech industry actually demands today.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Code Core Batch 04",
  },
];

// ============================================================
// PROCESS PAGE
// ============================================================

export type ProcessDomainKey = "software" | "webmobile" | "ai" | "hardware";

export const processDomains: Record<ProcessDomainKey, { label: string; icon: string }> = {
  software: { label: "Software", icon: "Code2" },
  webmobile: { label: "Web & Mobile", icon: "Smartphone" },
  ai: { label: "AI & ML", icon: "BrainCircuit" },
  hardware: { label: "Hardware", icon: "Cpu" },
};

export interface ProcessStep {
  id: string;
  title: string;
  icon: string;
  desc: string;
  detail: string;
  deliverables: string[];
  domains: ProcessDomainKey[];
}

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery & Scope",
    icon: "Compass",
    desc: "We dive into the problem before touching a tool. Constraints, goals, and success metrics get defined and challenged upfront, whatever we're building.",
    detail: "This is where we figure out what's actually being built — a product, a platform, a model, or a device — and draft the technical scope that everything else follows.",
    deliverables: ["Requirements Document", "Technical Scope & Architecture Draft", "Timeline & Budget"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
  {
    id: "02",
    title: "Design & Prototyping",
    icon: "Layers3",
    desc: "Ideas get translated into something tangible before full commitment — an interface, a data pipeline, or a working proof of concept.",
    detail: "Depending on the project this could mean interactive UI prototypes, model architecture design, or a first-pass circuit and enclosure layout.",
    deliverables: ["Interactive Prototype / Design System", "Architecture or Model Plan", "Feedback Loop with You"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
  {
    id: "03",
    title: "Core Build",
    icon: "Hammer",
    desc: "The heaviest phase. We build in focused, iterative cycles — real progress you can see and test at every stage, not a black box until launch.",
    detail: "Application code, trained models, or physical builds — engineered the same disciplined way, with regular checkpoints instead of a single big reveal.",
    deliverables: ["Working Build / Increment", "Progress Checkpoints", "Documentation as We Go"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
  {
    id: "04",
    title: "Testing & Validation",
    icon: "ShieldCheck",
    desc: "We try to break what we made before anyone else does. Every deliverable is stress-tested against real conditions, not just the happy path.",
    detail: "This spans functional and security testing, model accuracy and edge-case validation, or physical stress and reliability testing — matched to what we built.",
    deliverables: ["Test Reports", "Performance / Accuracy Benchmarks", "Issue Log & Fixes"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
  {
    id: "05",
    title: "Launch & Support",
    icon: "Rocket",
    desc: "Getting it into the real world and making sure it keeps working there. We stay close after handoff instead of disappearing at delivery.",
    detail: "Deployment, release, or field rollout — followed by a defined support window so early issues get caught and fixed fast.",
    deliverables: ["Deployment / Release", "Handoff Documentation", "Post-Launch Support Window"],
    domains: ["software", "webmobile", "ai", "hardware"],
  },
];

// ============================================================
// STUDIO HOME
// ============================================================

export const studioCapabilities = [
  {
    title: "Software Engineering",
    desc: "Building scalable, secure, and maintainable software solutions tailored for modern businesses and enterprise applications.",
    icon: "Code2",
  },
  {
    title: "Mobile App Development",
    desc: "Creating fast, responsive, and intuitive mobile applications for Android, iOS, and cross-platform environments.",
    icon: "Smartphone",
  },
  {
    title: "AI & Machine Learning",
    desc: "Developing intelligent AI solutions, predictive models, and data-driven systems that automate complex processes.",
    icon: "BrainCircuit",
  },
  {
    title: "Embedded & Robotics",
    desc: "Designing embedded systems, IoT devices, and robotic solutions with reliable hardware and intelligent software integration.",
    icon: "Bot",
  },
];

export const studioShowcaseTags = [
  "Robotics",
  "Artificial Intelligence",
  "Machine Learning",
  "Embedded Systems",
  "Computer Vision",
  "IoT",
  "Software Engineering",
];

// ============================================================
// SERVICES PAGE
// ============================================================

export const servicesCapabilityCards = [
  {
    title: "Software Engineering & Digital Solutions",
    desc: "Designing scalable software, enterprise applications, and digital platforms that solve real-world business challenges.",
  },
  {
    title: "Web, Mobile Applications",
    desc: "Building secure, high-performance web platforms, mobile applications, and cloud-connected systems for modern businesses.",
  },
  {
    title: "AI, Automation & Smart Systems",
    desc: "Integrating artificial intelligence, intelligent automation, and data-driven solutions to improve productivity and decision making.",
  },
  {
    title: "Technology Education & Innovation",
    desc: "Empowering students, professionals, and organizations through hands-on workshops, practical learning, and emerging technologies.",
  },
];

export const servicesTechStack = [
  { category: "Frontend Architecture", borderColor: "#7B2CBF", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"] },
  { category: "Backend & Database", borderColor: "#b37be8", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Vercel"] },
  { category: "Automation Engines", borderColor: "#e0c4ff", items: ["n8n", "Webhooks", "REST APIs", "GraphQL", "Zapier", "Make"] },
  { category: "Robotics & Embedded Systems", borderColor: "#e0c4ff", items: ["Embedded C", "ROS 2", "Python", "ESP-32", "Raspberry Pi", "Linux"] },
];

export const servicesClientLogos = ["Acme Corp", "Global Tech", "Stark Industries", "Wayne Enterprises", "Cyberdyne", "Umbrella Corp", "Massive Dynamic"];

export const servicesRoadmap = ["Discovery Framework", "UI/UX Interactive Prototyping", "Agile Engineering", "Automated Testing & Deployment"];

export const servicesProjectScopes = ["Custom Software / Web App", "E-Commerce Architecture", "AI & Automation Tools", "Digital Transformation"];

// ============================================================
// ACADEMY HOME
// ============================================================

export const academyPillars = [
  {
    title: "A/L and O/L ICT Practicals",
    icon: "Code2",
    desc: "O/L & A/L ICT curriculums mapped to real-world tech industry standards.",
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-br from-[#00AEEF]/10 to-transparent",
  },
  {
    title: "ICT Fundamentals",
    icon: "Zap",
    desc: "Basics of ICT with Logic theory, Networking fundamentals and Troubleshooting",
    colSpan: "col-span-1",
    bg: "bg-gradient-to-bl from-pink-500/10 to-transparent",
  },
  {
    title: "Basics of Programming",
    icon: "Cpu",
    desc: "Programming Fundamentals including basic core principles like OOP principles",
    colSpan: "col-span-1",
    bg: "bg-gradient-to-br from-[#7B2CBF]/10 to-transparent",
  },
  {
    title: "Software Development",
    icon: "Monitor",
    desc: "Python, JavaScript, and C++. The foundation of modern software engineering.",
    colSpan: "col-span-1 md:col-span-2",
    bg: "bg-gradient-to-tr from-[#00AEEF]/5 to-transparent",
  },
];

export const academyShowcaseProjects = [
  { title: "Business Website", type: "Web Development", author: "Mohamed" },
];

export const academyNextMasterclass = {
  title: "Grade 10 & 11 O/L ICT - HTML Fundamentals Module",
  description: "Join our ICT workshop and learn HTML fundamentals through practical sessions. Build your first webpage, understand web structures, and develop essential skills for your O/L ICT journey.",
  targetDate: "August 2, 2026 09:00:00",
};

// ============================================================
// COURSES PAGE
// ============================================================

export const coursesLiveCounters = [
  { value: "All Around Sri Lanka", label: "Active Students" },
  { value: "More", label: "Projects Built" },
  { value: "03", label: "Days to Workshop" },
];

export const coursesEcosystemCards = [
  {
    tag: "Grade 10 & 11 ICT",
    accent: true,
    title: "ICT Hands-on For O/L Students",
    desc: "Complete syllabus coverage paired with hand on practical sessions. Designed specifically to build strong foundational logic early.",
    span: "lg:col-span-2",
    glow: "absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/10 blur-[60px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500",
    descClass: "max-w-md",
  },
  {
    tag: "Engineering Foundation",
    accent: false,
    title: "Path To Web Engineering",
    desc: "Introduction to Software Engineering and Fullstack Projects with New Technologies.",
    span: "",
    glow: "absolute bottom-0 right-0 w-32 h-32 bg-[#00AEEF]/10 blur-[40px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500",
    descClass: "text-sm",
  },
  {
    tag: "Future Tech",
    accent: false,
    title: "Next-Gen AI & ML",
    desc: "Hands-on Practical with Prompt Engineering and their Application for Learning New things.",
    span: "",
    glow: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00AEEF]/10 blur-[40px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500",
    descClass: "text-sm",
  },
  {
    tag: "Advanced Level ICT",
    accent: false,
    title: "ICT Hands-on For Advanced Level",
    desc: "Get into the real world with having knowledge with Advanced Level ICT, and Developing Yourselves with te Tech Field.",
    span: "md:col-span-2 lg:col-span-2",
    glow: "absolute bottom-0 left-0 w-64 h-64 bg-[#00AEEF]/10 blur-[60px] rounded-full group-hover:bg-[#00AEEF]/20 transition-colors duration-500",
    descClass: "max-w-md",
  },
];

export const coursesCareerSteps = [
  { step: "01", title: "Foundational Deep-Dive", desc: "Mastering the Theory that align with the practical knowledge." },
  { step: "02", title: "Successfully Complete A/L and O/L", desc: "with the hand-on practicals, and gained Knowledge, complete the milestone." },
  { step: "03", title: "Career Development Bootcamps", desc: "Get into the real world with the knowledge of Software Engineering fondations and real world experience." },
];

export const coursesMasterclasses = [
  { date: "August, 2026", topic: "O/L ICT Practical Workshop For grade 10 & 11 Students" },
  { date: "October, 2026", topic: "HTML and Programming Foundations for O/L Curriculum" },
];

export const courseWorkshopStudents = [
  { id: 1, title: "Code Core Batch 04", description: "O/L ICT students learning HTML basics.", imageKey: "workshop-1" },
  { id: 2, title: "React Workshop", description: "Advanced web engineering students building dashboards.", imageKey: "workshop-2" },
  { id: 3, title: "Python Data Science", description: "Introductory session to data pipelines.", imageKey: "workshop-3" },
  { id: 4, title: "AI & ML Seminar", description: "Exploring neural networks with our future tech batch.", imageKey: "workshop-4" },
  { id: 5, title: "UI/UX Prototyping", description: "Figma design workflows in action.", imageKey: "workshop-5" },
];

export const coursesFAQs = [
  { title: "Do I need to know the Basics", content: "Not for the Practicals, We start from the absolute basics of theory with a clear explainations and then to the practicals." },
  { title: "Are classes online or in-person?", content: "We offer hybrid models. You can join the live streams from anywhere or attend in-person sessions at our campus." },
  { title: "Do you provide Certificates", content: "Our bootcamps & Workshops based on the course content we provide a completion certification." },
];

export const coursesEnrollTracks = [
  { value: "core", label: "Code Core" },
  { value: "web", label: "Web Engineering" },
  { value: "ai", label: "Next-Gen AI & ML" },
  { value: "design", label: "UI/UX Design" },
];

// ============================================================
// WORKSHOPS PAGE
// ============================================================

export const workshops = [
  {
    id: "ws-001",
    title: "Grade 10 & 11 O/L ICT - Number Systems and Logic Gates",
    date: "Aug 02, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Thihariya",
    instructor: "Instructors from our team",
    capacity: "30 Seats",
    status: "Registration Open",
    tag: "Gates, Number Systems",
    registrationLink: "YOUR_GOOGLE_FORM_URL_HERE",
  },
  {
    id: "ws-003",
    title: "Grade 10 & 11 O/L ICT - Microsoft Tools",
    date: "Aug 09, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Thihariya",
    instructor: "Instructors from our team",
    capacity: "30 Seats",
    status: "Registration Open",
    tag: "Excel",
    registrationLink: "YOUR_GOOGLE_FORM_URL_HERE",
  },
  {
    id: "ws-002",
    title: "Grade 10 & 11 O/L ICT - HTML Fundamentals ",
    date: "Aug 13, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Thihariya",
    instructor: "Instructors from our team",
    capacity: "30 Seats",
    status: "Registration Open",
    tag: "HTML",
    registrationLink: "YOUR_GOOGLE_FORM_URL_HERE",
  },
  {
    id: "ws-004",
    title: "Grade 10 & 11 O/L ICT - Programming Fundamentals",
    date: "Aug 23, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Thihariya",
    instructor: "Instructors from our team",
    capacity: "30 Seats",
    status: "Registration Open",
    tag: "Pseudo Code",
    registrationLink: "YOUR_GOOGLE_FORM_URL_HERE",
  },
];

// ============================================================
// BUILDS PAGE (Student Builds)
// ============================================================

export const studentBuildFilters = ["All", "Web App", "O/L", "A/L"];

export const studentBuilds = [
  {
    id: 1,
    title: "Cafe Website",
    category: "Web Development",
    student: "Workshop - 1",
    desc: "A Cafe website Built to get a practical Knowledge of HTML.",
    icon: "Code2",
    iconClass: "text-[#00AEEF]",
    imageKey: "cafe-website",
    colSpan: "col-span-1 md:col-span-2 row-span-2",
    bg: "bg-gradient-to-br from-[#00AEEF]/10 to-[#070B14]",
  },
  {
    id: 2,
    title: "Robot Arm",
    category: "Embedded",
    student: "Workshop - 2",
    desc: "Robotic arm using Arduino.",
    icon: "Cpu",
    iconClass: "text-white/50",
    imageKey: "robot-arm",
    colSpan: "col-span-1",
    bg: "bg-gradient-to-br from-[#00AEEF]/10 to-[#070B14]",
  },
];

// ============================================================
// STUDENT SHOWCASE PAGE
// ============================================================

export const studentShowcaseFilters = ["All", "AI", "Practicals", "Development"];

export const studentShowcaseProjects = [
  {
    id: 1,
    title: "Hand Controlled Car",
    category: "AI & Embedded System Model",
    student: "Umar Rashid",
    desc: "A Hand controlled car DIY Project that operate with hand gesture signals - using Open CV library",
    icon: "Cpu",
    iconClass: "text-[#00AEEF]",
    colSpan: "col-span-1 md:col-span-2 row-span-2",
    bg: "bg-gradient-to-br from-[#00AEEF]/10 to-[#070B14]",
  },
];
