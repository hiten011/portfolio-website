// Personal Information - Edit this file to update your portfolio content

export const personalInfo = {
  name: "Hiten Gupta",
  title: "Junior Software Engineer & CS Student",
  email: "hitengupta12345@gmail.com",
  phone: "+61 415 765 047",
  location: "Adelaide, SA",
  bio:
    "Computer Science student at the University of Adelaide and Junior Software Engineer at Ortomi, where I build embedded firmware for robot companions shipped to 66+ countries. I enjoy full-stack web development, embedded systems, and competitive programming.",
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
      { name: "C/C++", icon: "SiCplusplus" },
      { name: "Java", icon: "DiJava" },
      { name: "Python", icon: "SiPython" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Embedded C", icon: "SiC" },
      { name: "Bash", icon: "SiGnubash" },
      { name: "MATLAB", icon: "SiMathworks" },
    ],
  },
  {
    category: "Web",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Vue.js", icon: "SiVuedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "Flask", icon: "SiFlask" },
      { name: "HTML/CSS", icon: "SiHtml5" },
      { name: "Tailwind", icon: "SiTailwindcss" },
      { name: "Bootstrap", icon: "SiBootstrap" },
    ],
  },
  {
    category: "Embedded",
    skills: [
      { name: "ESP32", icon: "SiEspressif" },
      { name: "Arduino", icon: "SiArduino" },
      { name: "FreeRTOS", icon: "SiEspressif" },
      { name: "PlatformIO", icon: "SiPlatformio" },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "MySQL", icon: "SiMysql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Git", icon: "SiGit" },
    ],
  },
];

// Legacy format for backward compatibility
export const skills = {
  languages: ["C/C++", "Java", "Python", "JavaScript", "Embedded C", "Bash", "MATLAB"],
  web: ["React", "Vue.js", "Express", "Flask", "HTML/CSS", "Tailwind", "Bootstrap"],
  embedded: ["ESP32", "Arduino", "FreeRTOS", "PlatformIO"],
  databases: ["MySQL", "MongoDB", "Git"],
};

export const projects = [
  {
    id: 1,
    title: "CatWiz",
    description: "A 13-level AI prompt injection challenge built for the AIML Club, where players try to trick an AI into revealing a hidden password. Each level introduces tougher guardrails, making it progressively harder to jailbreak the model. Ran the event live with 40+ participants.",
    technologies: ["React", "Express", "MySQL", "Google OAuth"],
    features: [
      "13 progressively harder prompt injection levels",
      "Google OAuth for player authentication",
      "Deployed on Render for the live event",
    ],
    liveUrl: "https://catwiz.aimlclub.org/",
    githubUrl: "",
    date: "Dec 2025 - Feb 2026",
  },
  {
    id: 2,
    title: "Cinematch",
    description: "A Tinder-style movie recommendation app that adapts suggestions based on how you swipe. Uses a custom scoring algorithm that weighs movie metadata to figure out what you actually like, not just what’s popular. Built with a team of 4.",
    technologies: ["Express.js", "MySQL", "Vue.js"],
    features: [
      "Custom scoring algorithm for personalized recommendations",
      "Responsive swipe-based UI with smooth animations",
      "Collaborative development with GitHub code reviews",
    ],
    liveUrl: "https://www.youtube.com/watch?v=R5sl3WtY2os",
    githubUrl: "https://github.com/hiten011/cinematch",
    date: "Apr 2025 - Dec 2025",
  },
  {
    id: 3,
    title: "Minesweeper 2.0",
    description: "A from-scratch rebuild of Minesweeper in C++ with a focus on clean object-oriented design. Built as a university project to explore how encapsulation and modular architecture can make even a simple game easier to extend and maintain.",
    technologies: ["C++", "OOP", "SFML"],
    features: [
      "Object-oriented architecture with encapsulation and inheritance",
      "Modular game design for easy extensibility",
      "Custom graphics rendering with SFML",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/hiten011/minesweeper2.0",
    date: "Sep 2024 - Oct 2024",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe with Computer",
    description: "A MATLAB-based Tic-Tac-Toe game with an AI opponent that plays at three difficulty levels. The computer uses a decision-tree algorithm to make strategic moves, from beginner-friendly to nearly unbeatable.",
    technologies: ["MATLAB"],
    features: [
      "Three AI difficulty levels using decision trees",
      "Two-player and single-player modes",
      "Interactive GUI with a clean game interface",
    ],
    liveUrl: "https://youtu.be/lXfXcoInFVs",
    githubUrl: "https://github.com/hiten011/TIC-TAC-TOE-Computer",
    date: "May 2024",
  },
  {
    id: 5,
    title: "Investment Tracker",
    description: "A full-stack web app built as my CS50 final project to track personal investments across stocks, crypto, mutual funds, real estate, and more. Features a real-time net worth calculator and visual analytics to help you see where your money actually is.",
    technologies: ["Python", "Flask", "SQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Tracks multiple asset classes in one dashboard",
      "Real-time net worth calculator",
      "Visual analytics and portfolio breakdown",
    ],
    liveUrl: "https://www.youtube.com/watch?v=RoQRuSm7XMQ",
    githubUrl: "https://github.com/hiten011/Investment-Tracker",
    date: "Nov 2023 - Dec 2023",
  },
];

export const experience = [
  {
    id: 1,
    role: "Junior Software Engineer",
    company: "Ortomi",
    location: "Adelaide, SA",
    period: "Dec 2025 - Present",
    responsibilities: [
      "Developing embedded firmware in C/C++ for ESP32-based robot companions, a consumer product shipped to 66+ countries with 5,000+ units sold",
      "Optimized ESP32 Non-Volatile Storage (NVS) data storage logic, achieving a 66x read/write speed improvement",
      "Reduced LittleFS overhead by 500ms through a file caching strategy for frequently accessed files",
      "Built a QR-code-based diagnostic tool to retrieve and analyze ESP32 core dump backtraces, reducing firmware debugging turnaround time",
      "Diagnosed and resolved firmware issues reported by customers",
    ],
  },
  {
    id: 2,
    role: "Software Development Intern",
    company: "James Anthony Consulting",
    location: "Adelaide, SA",
    period: "June 2025 - Nov 2025",
    responsibilities: [
      "Delivered features for two client-facing applications (Slow Tours, TestInvest) using React and Express.js",
      "Identified and resolved responsive UI bugs, improving layout consistency across screen sizes",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science (Advanced)",
  school: "University of Adelaide",
  location: "Adelaide, SA",
  period: "Expected Graduation: Dec, 2026",
  gpa: "6.67/7.0",
  scholarship: "30% Global Citizens Scholarship",
  coursework: [
    "Web & Database Computing",
    "System Programming",
    "Software Engineering",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Computer System",
    "Mathematics IA & IB",
  ],
};

export const additionalInfo = {
  activities: [
    "Volunteer at YouX",
    "Active in AUCPL",
    "LeetCode Contests participant",
    "AI/ML Club Finance Treasurer & Web Developer",
  ],
  hobbies: ["Investing in stock market", "Playing badminton"],
  certifications: [
    "Data Structures & Algorithms in Java – Apna College",
    "CS50: Introduction to Computer Science – Harvard (edX)",
  ],
};
