/* ========= Global Hire Status ========= */
const isHireable = true;

/* ========= Greeting ========= */
const greeting = {
  title: "Hi, I'm Anh 👋",
  subtitle:
    "Business-oriented Product Owner & Business Analyst with 6+ years of experience delivering SaaS and ERP platforms.",
  resumeLink: "https://drive.google.com/file/d/1kVezxnoBUwEFfsrU4cPr0XchYGzDNOQX/view?usp=sharing",
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
    "⚡ Product roadmap & backlog prioritization",
    "⚡ ERP / SaaS domain expertise",
    "⚡ API & system integration analysis",
    "⚡ Agile & Scrum delivery",
  ],
  softwareSkills: [
    { skillName: "Jira", iconName: "simple-icons:jira" },
    { skillName: "Confluence", iconName: "simple-icons:confluence" },
    { skillName: "PostgreSQL", iconName: "simple-icons:postgresql" },
    { skillName: "AWS", iconName: "simple-icons:amazonaws" },
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
        "Owned product roadmap and delivery for logistics ERP modules.",
      descBullets: [
        "Defined roadmap & epics across ERP modules",
        "Led Agile ceremonies and UAT",
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
      subHeader: "Bachelor of Management Information Systems",
      duration: "2016 – 2020",
      desc: "Merit Scholarship recipient",
    },
  ],
};

/* ========= Certifications ========= */
const certifications = {
  certifications: [
    {
      title: "Professional Scrum Product Owner II",
      subtitle: "SCRUM.org",
      date: "2024",
    },
  ],
};

/* ========= Achievements ========= */
const achievementSection = {
  title: "Achievements",
  subtitle: "Key milestones and recognitions",
  achievementsCards: [
    {
      title: "ERP Delivery Excellence",
      subtitle: "Delivered multiple ERP modules on time",
      image: "img/icons/common/trophy.png",
      footerLink: [],
    },
  ],
};

/* ========= Open Source ========= */
const openSource = {
  showGithubProfile: true,
  display: false,
};

/* ========= Contact ========= */
const contactInfo = {
  title: "Contact Me",
  subtitle: "Let’s work together",
  email_address: "anhthingoctran129@gmail.com",
};

/* ========= EXPORT (DO NOT CHANGE ORDER) ========= */
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  educationInfo,
  certifications,
  achievementSection,
  openSource,
  contactInfo,
  isHireable,
};
