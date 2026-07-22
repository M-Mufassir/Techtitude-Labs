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
