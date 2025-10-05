// Personal Information - Edit this file to update your portfolio content

export const personalInfo = {
  name: "Hiten Gupta",
  title: "Computer Science Student & Software Developer",
  email: "hitengupta12345@gmail.com",
  phone: "+61 415 765 047",
  location: "Adelaide, SA",
  bio:
    "Passionate Computer Science student at University of Adelaide with a strong foundation in full-stack development and low-level programming. I also practice competitive programming and share coding challenges on LinkedIn to stay sharp and engaged.",
  resumeUrl: "/resume.pdf",
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
      { name: "Java", icon: "DiJava" },
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
      // { name: "Redux", icon: "SiRedux" },
    ],
  },
];

// Legacy format for backward compatibility
export const skills = {
  languages: ["Java", "C/C++", "Python", "Bash", "MATLAB"],
  web: ["Node.js", "Express", "Vue", "React", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind"],
  databases: ["SQL", "MongoDB"],
  tools: ["Git", "GitHub", "Docker", "Linux"],
};

export const projects = [
  {
    id: 1,
    title: "Smart Course Advisor",
    description: "Developed an AI-driven platform to recommend personalized university courses based on students’ preferences and goals.",
    technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MySQL",
        "Machine Learning"
      ],
    features: [
      "AI trained on real University of Adelaide course data",
      "Responsive full stack website",
      "",
    ],
    liveUrl: "https://smart-course-advisor.vercel.app/",
    githubUrl: "https://github.com/hiten011/smart-course-advisor.git",
    date: "Sep 2025 - Sep 2025",
  },
  {
    id: 2,
    title: "Cinematch",
    description: "Built a Tinder-style movie recommendation platform that adapts to user preferences in real time through swiping interactions. Developed a custom algorithm that intelligently recommends movies based on user behavior and preference patterns.",
    technologies: ["Node.js", "Express.js", "MySQL", "Vue.js", "HTML", "CSS", "JavaScript"],
    features: [
      "Custom scoring algorithm for personalized movie suggestions",
      "Normalized MySQL database schema for efficient data management",
      "Responsive swipeable interface for seamless user experience",
    ],
    liveUrl: "https://cinematch-fzvq.onrender.com/home",
    githubUrl: "https://github.com/hiten011/cinematch",
    date: "Apr 2025 - Present",
  },
  {
    id: 3,
    title: "Minesweeper 2.0",
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
  {
    id: 4,
    title: "Tic-Tac-Toe with Computer",
    description: "Developed a fully functional Tic-Tac-Toe game in MATLAB featuring both single-player AI and multiplayer modes as part of a University of Adelaide course project. Implemented a custom decision-based algorithm that enables the computer to make intelligent and strategic moves against the player.",
    technologies: ["MATLAB"],
    features: [
      "AI opponent with three difficulty levels: Easy, Medium, and Nightmare using decision trees and strategy algorithms",
      "Custom multiplayer algorithm for smooth two-player gameplay against the computer",
      "Modular code design for scalability and easy AI/UI updates",
      "Interactive GUI that encourages strategic play and engagement",
    ],
    liveUrl: "https://youtu.be/lXfXcoInFVs",
    githubUrl: "https://github.com/hiten011/TIC-TAC-TOE-Computer",
    date: "May 2024 - May 2024",
  },
  {
    id: 5,
    title: "Investment Tracker",
    description: "Developed a comprehensive 13-page full-stack web application as my CS50 Final Project to help users track and manage their personal investments and financial health. The platform supports diverse asset classes including stocks, mutual funds, crypto, real estate, gold, debt instruments, and more, with a real-time net worth calculator and detailed visual analytics.",
    technologies: ["Python", "Flask", "SQL", "Html", "CSS", "JavaScript"],
    features: [],
    liveUrl: "https://www.youtube.com/watch?v=RoQRuSm7XMQ",
    githubUrl: "https://github.com/hiten011/Investment-Tracker",
    date: "Nov 2023 - Dec 2023",
  }


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
