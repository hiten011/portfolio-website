// Personal Information - Edit this file to update your portfolio content

export const personalInfo = {
  name: "Hiten Gupta",
  title: "Computer Science Student & Software Developer",
  email: "hitengupta12345@gmail.com",
  phone: "+61 415 765 047",
  location: "Adelaide, SA",
  bio: "Passionate Computer Science student at University of Adelaide with a strong foundation in full-stack development and AI/ML. I build innovative web applications that solve real-world problems, from AI challenge platforms to personalized recommendation systems.",
  resumeUrl: "/attached_assets/resume_1759557612919.pdf",
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/hiten011",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/hitengupta-/",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/hiten_011/",
    icon: "code",
  },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: "SiJava" },
      { name: "C/C++", icon: "SiCplusplus" },
      { name: "Python", icon: "SiPython" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Bash", icon: "SiGnubash" },
      { name: "MATLAB", icon: "SiMathworks" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Vue", icon: "SiVuedotjs" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
      { name: "Tailwind", icon: "SiTailwindcss" },
      { name: "Bootstrap", icon: "SiBootstrap" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "Flask", icon: "SiFlask" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Linux", icon: "SiLinux" },
      { name: "Redux", icon: "SiRedux" },
    ],
  },
];

// Legacy format for backward compatibility
export const skills = {
  languages: ["Java", "C/C++", "Python", "Bash", "MATLAB"],
  web: ["Node.js", "Express", "Vue", "React", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind"],
  databases: ["SQL", "MongoDB"],
  tools: ["Git", "GitHub", "Redux", "Docker", "Linux"],
};

export const projects = [
  {
    id: 1,
    title: "CatWiz – AI Challenge Website",
    description: "Developed a challenge-based AI interaction platform for the AI/ML Club event, with ~50 participants competing to extract hidden passwords from an AI (via the Gandalf API).",
    technologies: ["React", "Express.js", "SQL"],
    features: [
      "User authentication and session handling",
      "Live leaderboard for real-time competition tracking",
      "Deployed on Render (frontend and backend)",
    ],
    liveUrl: "https://catwiz.onrender.com/",
    githubUrl: "",
    date: "Aug 2025 - Present",
  },
  {
    id: 2,
    title: "Cinematch – Movie Recommendation Web App",
    description: "Built a Tinder-style movie recommendation platform that adapts to user preferences in real time through swiping interactions.",
    technologies: ["Node.js", "Express.js", "MySQL", "Vue.js", "HTML", "CSS", "JavaScript"],
    features: [
      "Custom scoring algorithm for personalized suggestions",
      "Normalized MySQL database schema",
      "Responsive swipeable interface",
    ],
    liveUrl: "https://cinematch-fzvq.onrender.com/home",
    githubUrl: "https://github.com/hiten011/cinematch",
    date: "Apr 2025 - Present",
  },
  {
    id: 3,
    title: "Minesweeper 2.0 – OOP-Based Game",
    description: "Rebuilt classic Minesweeper using OOP principles as part of university coursework. Applied encapsulation, inheritance, and modular design to enhance gameplay and structure.",
    technologies: ["C++", "OOP", "Data Structures & Algorithms", "SFML"],
    features: [
      "Object-oriented architecture",
      "Modular game design",
      "Enhanced gameplay mechanics",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/hiten011/minesweeper2.0",
    date: "Sep 2024 - Oct 2024",
  },
];

export const experience = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "James Anthony Consulting",
    location: "Adelaide, SA",
    period: "June 2025 - Present",
    responsibilities: [
      "Contributed to client projects Slow Tours and TestInvest, focusing on feature development, documentation, and quality assurance",
      "Designed and developed new features, improving functionality and enhancing user experience",
      "Prepared clear and comprehensive technical documentation to support ongoing development",
      "Performed testing and debugging, ensuring reliability and alignment with client requirements",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science (Advanced)",
  school: "University of Adelaide",
  location: "Adelaide, SA",
  period: "Expected Graduation: Dec, 2026",
  gpa: "6.75/7.0",
  scholarship: "30% Global Citizens Scholarship",
  coursework: [
    "Web & Database Computing",
    "System Programming",
    "Software Engineering",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Financial Institutions & Markets",
    "MATLAB & C",
    "Mathematics IA & IB",
  ],
};

export const additionalInfo = {
  activities: [
    "Volunteer at YouX",
    "Active in AUCPL",
    "LeetCode Contests participant",
    "AI/ML Club Finance Treasurer",
  ],
  hobbies: ["Investing in stock market", "Playing badminton"],
  certifications: [
    "Data Structures & Algorithms in Java – Apna College",
    "CS50: Introduction to Computer Science – Harvard (edX)",
  ],
};
