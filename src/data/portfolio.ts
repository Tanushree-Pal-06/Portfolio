export type Project = {
  slug: "interviewforge" | "mindsync-ai" | "watchdog";
  number: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  stack: string[];
  overview: string;
  purpose: string;
  features: string[];
  implementation: string;
};

export const projects: Project[] = [
  {
    slug: "interviewforge",
    number: "01",
    title: "InterviewForge",
    subtitle: "AI-Powered Mock Interview Platform",
    description: "An AI-driven interview platform with personalized interviews, dynamic follow-ups, voice-based answering, and intelligent performance feedback.",
    role: "Backend Development",
    stack: ["Node.js", "Express.js", "MongoDB", "React", "Gemini API"],
    overview: "InterviewForge is an AI-driven platform designed to make interview practice more personalized and responsive. It adapts interview sessions through dynamic follow-up questions, supports voice-based answers, and provides intelligent performance feedback.",
    purpose: "The project was built to create a more adaptive mock interview experience than a fixed list of questions.",
    features: ["Personalized interview sessions", "Dynamic follow-up questions", "Voice-based answering", "Intelligent performance feedback","Multiple interview types"],
    implementation: "My work focused on backend development, supporting the interview flow, data handling, and Gemini API integration used by the platform.",
  },
  {
    slug: "mindsync-ai",
    number: "02",
    title: "MindSync AI",
    subtitle: "AI-Powered Mental Health Journal",
    description: "AI-powered journaling platform for emotion analysis, behavioral insights, and self-awareness.",
    role: "Backend Development & AI Integration",
    stack: ["React", "Flask", "SQLite", "AI/ML"],
    overview: "MindSync AI is a journaling platform that applies AI to written reflections, helping surface emotion patterns, behavioral insights, and opportunities for greater self-awareness.",
    purpose: "The project was built to explore how thoughtful AI integration can add practical value to personal reflection and journaling.",
    features: ["Journal entry workflow", "Emotion analysis", "Behavioral insights", "Self-awareness support","Voice based entries","AI suggestions and chatbot support"],
    implementation: "My role covered backend development and AI integration, connecting the React interface with Flask, SQLite, and the analysis workflow.",
  },
  {
    slug: "watchdog",
    number: "03",
    title: "WatchDog AI",
    subtitle: "AI-Powered Productivity Guardian",
    description: "An AI-powered productivity guardian designed to monitor computer activity, identify distracting or unproductive behavior, and help users redirect their focus.",
    role: "Full stack development ",
    stack: ["Python", "Django", "React.js", "Hugging Face Transformers", "SQLite", "REST APIs"],
    overview: "WatchDog is an AI-powered productivity guardian that monitors computer activity, recognizes distracting or unproductive behavior, and supports users in redirecting their attention.",
    purpose: "The project was built to help users become more aware of digital distractions and return their attention to focused work.",
    features: ["Activity monitoring and voice warnings", "Active-window and activity detection", "Distracting behavior identification", "Productivity and focus monitoring", "Intelligent interruption and focus redirection"],
    implementation: "Independently developed the complete WatchDog AI application, including the Django and SQLite backend, React.js frontend, REST APIs, and AI-assisted behavior analysis using Hugging Face Transformers.",
  },
];

export const skillGroups = [
  { number: "01", title: "Programming Languages", items: ["C++", "Python"] },
  { number: "02", title: "Frameworks & Technologies", items: [ "Django", "Flask", "React.js", "Node.js", "Express.js"] },
  { number: "03", title: "Databases & Concepts", items: ["MySQL", "SQLite", "MongoDB", "OOP", "DBMS"] },
  { number: "04", title: "Tools & Platforms", items: ["Git", "GitHub", "Postman"] },
];

export const socialProfiles = ["GitHub", "LinkedIn", "LeetCode", "GeeksforGeeks"];
