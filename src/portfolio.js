/* ======================================================
   Personal Portfolio Configuration
   SAFE VERSION – DO NOT DELETE SECTIONS
   ====================================================== */

/* ========= Hire Status ========= */
const isHireable = true;

/* ========= Greeting ========= */
const greeting = {
  title: "Hi, I'm Anh 👋",
  subtitle:
    "Business-oriented Product Owner & Business Analyst with 6+ years of experience delivering ERP & SaaS platforms across logistics, telecom, and accounting domains.",
  resumeLink: "https://drive.google.com/file/d/1kVezxnoBUwEFfsrU4cPr0XchYGzDNOQX/view?usp=sharing", // Optional: Google Drive CV link
};

/* ========= Social Media ========= */
const socialMediaLinks = {
  linkedin: "https://linkedin.com/in/tran-ngocanh",
  gmail: "anhthingoctran129@gmail.com",
};

/* ========= Skills ========= */
const skillsSection = {
  title: "Core Skills",
  subTitle:
    "Product Management, Business Analysis, ERP / SaaS, Agile Delivery",

  skills: [
    "⚡ Product vision, roadmap, backlog grooming & prioritization",
    "⚡ User stories & acceptance criteria (INVEST, Gherkin)",
    "⚡ ERP & SaaS domains: CRM, Accounting, Inventory, Logistics",
    "⚡ API & integration analysis (REST / GraphQL)",
    "⚡ Agile ceremonies: Sprint planning, review, retrospective",
    "⚡ UAT leadership, training, and stakeholder communication",
  ],

  softwareSkills: [
    { skillName: "Jira", iconName: "simple-icons:jira" },
    { skillName: "Confluence", iconName: "simple-icons:confluence" },
    { skillName: "PostgreSQL", iconName: "simple-icons:postgresql" },
    { skillName: "MongoDB", iconName: "simple-icons:mongodb" },
    { skillName: "GraphQL", iconName: "simple-icons:graphql" },
    { skillName: "AWS", iconName: "simple-icons:amazonaws" },
    { skillName: "Figma", iconName: "simple-icons:figma" },
  ],
};

/* ========= Work Experience ========= */
const workExperiences = {
  title: "Professional Experience",
  experience: [
    {
      role: "Proxy Product Owner",
      company: "CyberLogitec Vietnam",
      companylogo: "img/icons/common/cyberlogitec.png",
      date: "Mar 2024 – Present",
      desc:
        "Owned product vision and roadmap for Facility Management modules within a logistics ERP ecosystem.",
      descBullets: [
        "Defined product roadmap across Procurement, Facility, and AP modules",
        "Translated business needs into epics, user stories, and acceptance criteria",
        "Led Agile ceremonies and backlog prioritization",
        "Co-designed UI/UX in Figma, improving operational efficiency by 30%",
        "Delivered milestones on time with strong UAT feedback",
      ],
    },
    {
      role: "Business Analyst",
      company: "CyberLogitec Vietnam",
      companylogo: "img/icons/common/cyberlogitec.png",
      date: "Jan 2024 – May 2024",
      desc:
        "Delivered accounting modules for freight-forwarding SaaS systems.",
      descBullets: [
        "Analyzed legacy AR/AP/DC and bank reconciliation workflows",
        "Produced FRDs, user stories, and test cases",
        "Collaborated with BI teams for analytics dashboards",
        "Led UAT testing and user training",
      ],
    },
    {
      role: "Senior Business Analyst",
      company: "FPT Software Vietnam",
      companylogo: "img/icons/common/fpt.png",
      date: "Apr 2023 – Mar 2024",
      desc:
        "Worked on NextGen ride-hailing platform for ComfortDelGro.",
      descBullets: [
        "Delivered roadmaps for loyalty systems and payment API integrations",
        "Led SIT/UAT across Driver, Passenger, OpenAPI, IVR/SMS systems",
        "Validated geolocation pipelines for real-time accuracy",
        "Improved onboarding UX and post-launch retention",
      ],
    },
    {
      role: "Business Analyst / Product Owner",
      company: "Infodation Vietnam",
      companylogo: "img/icons/common/infodation.png",
      date: "Nov 2020 – Mar 2023",
      desc:
        "Delivered telecom SaaS platforms for European clients.",
      descBullets: [
        "Managed 100+ features across Availability and Address Management",
        "Delivered REST & GraphQL API portals",
        "Completed penetration testing for ISO certification",
        "Mentored junior BAs, improving team velocity",
      ],
    },
  ],
};

/* ========= Education ========= */
const educationInfo = {
  title: "Education",
  schools: [
    {
      schoolName: "Nha Trang University",
      logo: "img/icons/common/ntu.png",
      subHeader: "Bachelor of Management Information Systems (MIS)",
      duration: "2016 – 2020",
      desc:
        "Merit Scholarships (2018–2020). Strong foundation in systems analysis, databases, and business web design.",
    },
  ],
};

/* ========= Certifications ========= */
const certifications = {
  certifications: [
    {
      title: "Professional Scrum Product Owner II",
      subtitle: "SCRUM.org",
      date: "Jan 2024",
    },
    {
      title: "Full Business Analysis Study Guide (21 PDUs)",
      subtitle: "IIBA",
      date: "Oct 2023",
    },
    {
      title: "Cybersecurity Foundations",
      subtitle: "Coursera",
      date: "Mar 2023",
    },
    {
      title: "ASEAN Data Science Explorers",
      subtitle: "SAP",
      date: "Aug 2022",
    },
  ],
};

/* ========= Achievements (Required, can be hidden) ========= */
const achievementSection = {
  title: "Achievements",
  subtitle: "",
  achievementsCards: [],
  display: false,
};

/* ========= Open Source (Required, hidden) ========= */
const openSource = {
  display: false,
};

/* ========= Blogs (Required, hidden) ========= */
const blogSection = {
  title: "Blogs",
  subtitle: "",
  blogs: [],
  display: false,
};

/* ========= Contact ========= */
const contactInfo = {
  title: "Contact Me",
  subtitle: "Open to Product Owner / Business Analyst opportunities",
  email_address: "anhthingoctran129@gmail.com",
};

/* ========= EXPORTS (DO NOT CHANGE) ========= */
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  educationInfo,
  certifications,
  achievementSection,
  openSource,
  blogSection,
  contactInfo,
  isHireable,
};
