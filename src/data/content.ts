// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT
// This file uses Hazel's REAL bio text and data, carried over word-for-word
// from her original portfolio (hazel-chan.vercel.app), with her current
// Fen-i role added as a new, present-day entry. Edit freely.
// ─────────────────────────────────────────────────────────────────────────

export type ProjectCategory = "competition" | "educational";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  org: string;
  role: string;
  dates: string;
  location?: string;
  summary: string;
  tags: string[];
  cover: {
    kind: "image" | "gradient";
    src?: string;
    gradientFrom?: string;
    gradientTo?: string;
  };
  journey?: { label: string; detail: string }[];
  stats?: { value: string; label: string }[];
  body: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
  gallery?: { src: string; caption?: string }[];
  highlight?: { title: string; text: string };
}

export const SITE = {
  name: "Hazel",
  fullName: "Aye Chan Pwint Phyu (Hazel)",
  shortName: "Hazel",
  greeting: "Welcome to my portfolio!",
  titles: [
    "I'm English Trainer",
    "I'm International Business Student",
    "I'm Social Media Coordinator",
    "I'm Program Designer",
  ],
  tagline: "Background in social media marketing, branding and communication",
  role: "Educator & Program Designer",
  location: "Bangkok, Thailand",
  email: "hazelchan732@gmail.com",
  phone: "(+66) 634627828",
  org: "Fen-i (Future Education Network International)",
  linkedin:
    "https://www.linkedin.com/in/aye-chan-pwint-phyu-hazel-753032223",
  line: "https://line.me/ti/p/8mxF5ogopP",
  whatsapp: "https://wa.me/66634627828",
  resumeFile: "/resume-hazel.pdf",
  profileImage: "/images/other/profile-new.jpg",
  logoImage: "/images/other/logo.png",
  aboutIntro:
    "I'm ready to deliver my skills at blending creativity with valuable insights to deliver impactful campaigns, plus teaching English and mentorship training to young learners and adults.",
  aboutPart1:
    "My inspiration comes from my mentors and teachers where the quote of \u201cBe the senior you needed as a junior\u201d. Applying to my whole life, my ultimate goal is to provide the children and students from underprivileged areas to thrive for their education and career development.",
  aboutPart2:
    "During university years, I joined my first internship at Thai Bev ASEAN internship program and completed all my studies. I recently doing an internship at Forvia for a social media and communication position. Regarding my marketing experiences, I took part in social media platform management with both external and internal communication parties.",
  aboutPart3:
    "I believe every young woman has a power to influence to inspire change, empower communities, and uplift underrepresented voices by championing causes that matter. I strive to lead with compassion, take action with purpose, and create lasting impact through service, advocacy, and collaboration.",
  aboutPart4:
    "Since April 2026, I've taken on a new chapter as an Educator and Program Designer at Fen-i (Future Education Network International), where I get to combine everything I've learned — teaching, marketing, and program coordination — into designing entrepreneurship programs for young people, including Zebra Camp & Pitch International and the Young CEO Programme.",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Credentials", href: "/credentials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PROJECT_FILTERS: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All Work", value: "all" },
  { label: "Competition Projects", value: "competition" },
  { label: "Educational Projects", value: "educational" },
];

export const PROJECTS: Project[] = [
  {
    slug: "zebra-camp-pitch-2026",
    title: "Zebra Camp & Pitch International 2026",
    category: "educational",
    org: "Fen-i · Future Education Network International",
    role: "Educator & Program Designer",
    dates: "Jun – Sep 2026",
    location: "Bangkok, Thailand",
    summary:
      "Southeast Asia's longest-running youth entrepreneurship pitch competition — 400+ participants, 8+ countries, 3 days of mentoring, coaching, and a live grand final in Bangkok.",
    tags: ["Entrepreneurship", "Youth Programs", "Curriculum Design", "Event Coordination"],
    cover: { kind: "image", src: "/images/projects/zebra-seed-welcome.jpg" },
    featured: true,
    journey: [
      { label: "Register", detail: "Schools and individual students (ages 7–22) apply solo or in teams across 6 industry tracks." },
      { label: "Self-Directed Learning", detail: "Online masterclass and project proposal submission — 20% of overall score." },
      { label: "Experiential Learning", detail: "3-day live camp in Bangkok: company visits, mentoring, masterclasses, coaching sessions — 60% of overall score." },
      { label: "Grand Final Pitch", detail: "Live pitching competition, judged finals, and awards ceremony — 20% of overall score." },
    ],
    stats: [
      { value: "400+", label: "Participants" },
      { value: "8+", label: "Countries" },
      { value: "4th", label: "Consecutive edition" },
      { value: "6", label: "Industry tracks" },
    ],
    body: [
      "Zebra Camp & Pitch International is Fen-i's flagship youth entrepreneurship event, now in its 4th consecutive year as Southeast Asia's longest-running pitch competition for students aged 7 to 22.",
      "As Educator and Program Designer, I help shape the self-directed learning track, the on-the-ground camp agenda, and the Z.E.B.R.A. scoring framework (Z-Edge, Engagement, Business Model, Relevance, Attitude & Ability) that judges use across the three-day Bangkok finale.",
      "The 2026 edition runs September 4–6 in Bangkok, bringing together students, schools, mentors, and industry judges across six tracks: Entrepreneurship, AI & Technology, Sciencepreneurship, Influencer & Digital Storytelling, Artpreneurship, and Hospitality & Tourism.",
    ],
    highlight: {
      title: "MC & Project Manager — Wattanawittayalai Academy Roadshow",
      text: "As part of the Zebra Seed for Change roadshow, I served as MC and Project Manager for the school visit at Wattanawittayalai Academy — leading event flow on stage and coordinating logistics, materials, and transportation for the outreach session.",
    },
    links: [{ label: "Visit Zebra Camp & Pitch site", href: "https://fenispace.com/zebra" }],
    gallery: [
      { src: "/images/projects/zebra-seed-welcome.jpg", caption: "Zebra Seed for Change International 2026 — Wattanawittayalai Academy roadshow" },
    ],
  },
  {
    slug: "young-ceo-programme-2026",
    title: "Young CEO Programme 2026",
    category: "educational",
    org: "Fen-i · Future Education Network International",
    role: "Educator & Program Designer",
    dates: "7 July – 5 Aug 2026",
    location: "Bangkok, Thailand",
    summary:
      "A 4-week academy taking students aged 7–18 from self-discovery to a final presentation — \"CEO on Stage\" — in front of judges and family.",
    tags: ["Curriculum Design", "Public Speaking", "Mentorship", "Youth Development"],
    cover: { kind: "gradient", gradientFrom: "#15121f", gradientTo: "#a48aec" },
    featured: true,
    journey: [
      { label: "Week 1 — Discover Yourself", detail: "Talent Dynamics profiling, vision boards, goal setting, budgeting basics, and personal branding." },
      { label: "Week 2 — Build Your Idea", detail: "Ikigai mapping, problem identification, SWOT analysis, and hands-on prototyping." },
      { label: "Week 3 — Think & Speak Like a CEO", detail: "CEO mindset, storytelling frameworks, pitch scripting, and slide design." },
      { label: "Week 4 — Pitch on Stage", detail: "Leadership styles, a real field trip, final rehearsal, and the CEO on Stage presentation with family invited." },
    ],
    stats: [
      { value: "4 wks", label: "Programme length" },
      { value: "2", label: "Age groups (7–12, 13–18)" },
      { value: "20", label: "Seats, by design" },
      { value: "1", label: "Final presentation" },
    ],
    body: [
      "The Young CEO Programme is a 4-week academy I help design and deliver for two age groups — 7 to 12 and 13 to 18 — each following a path suited to their stage of development.",
      "Group 1 builds personal strengths, budgeting basics, AI literacy, and a first business idea through hands-on prototyping. Group 2 goes deeper — Ikigai, SWOT analysis, full Design Thinking, an investor-ready MVP, and a 3–5 minute investor-style pitch with live Q&A.",
      "Every week closes with structured reflection and 1-on-1 mentor consultations, building toward Week 4's CEO on Stage final presentation and farewell ceremony — complete with certificates, a company field trip, and parents in the audience.",
    ],
    gallery: [
      { src: "/images/projects/young-ceo-journey-outcomes.jpg", caption: "4-week programme agenda and learning outcomes" },
    ],
  },
  {
    slug: "p2a-global-sustainable-program",
    title: "Global Sustainable Program (P2A)",
    category: "competition",
    org: "Universitas Islam Indonesia",
    role: "Delegate",
    dates: "2023",
    location: "Indonesia",
    summary:
      "Funded by Universitas Islam Indonesia, including production site visits, cultural exchanges, and popular sites' visits — we achieved the championship award pitching sustainable solutions for the coffee and tea production industries.",
    tags: ["Sustainable Solutions", "Pitching", "Cultural Exchange"],
    cover: { kind: "image", src: "/images/certificates/award_indo.jpg" },
    featured: true,
    stats: [{ value: "Winner", label: "Championship award" }],
    body: [
      "The program is funded by Universitas Islam Indonesia where it includes production sites visits, cultural exchanges, and popular sites' visits.",
      "We also achieved the championship award from the pitching to sustainable solutions to coffee and tea production industries.",
    ],
  },
  {
    slug: "cimso-rsu-hackathon",
    title: "Cimso x RSU Hackathon",
    category: "competition",
    org: "Rangsit University",
    role: "Team Member",
    dates: "2025",
    location: "Bangkok, Thailand",
    summary:
      "The collaboration between Rangsit University and Cimso Software — as a team, we took 2nd Runner Up at Rangsit University Hospitality x Rangsit University International College x CIMSO Group ERP Hackathon 2025.",
    tags: ["Project Management", "Hackathon", "Team Project"],
    cover: { kind: "image", src: "/images/certificates/hackathon.jpg" },
    featured: true,
    stats: [{ value: "2nd Runner Up", label: "Hackathon placement" }],
    body: [
      "The collaboration between Rangsit University and Cimso Software enhance the students to create visual and operational solutions with different category and prizes.",
      "As a team, we took 2nd Runner Up at Rangsit University Hospitality x Rangsit University International College x CIMSO Group ERP Hackathon 2025!",
    ],
  },
  {
    slug: "csr-project-danyela",
    title: "CSR Project",
    category: "educational",
    org: "Danyela Learning Center",
    role: "Team Leader",
    dates: "2025",
    location: "Thailand",
    summary:
      "An English Language Workshop held by a 5-member Rangsit International College scholarship students team — as leader, I prepared the learning materials, transportation plans, agenda, and met with the center's executives and teachers.",
    tags: ["English Language Workshop", "Leadership", "Workshop Design"],
    cover: { kind: "image", src: "/images/certificates/csr_project.jpg" },
    stats: [{ value: "5", label: "Team members led" }],
    body: [
      "The workshop is held by the Rangsit International College scholarship students team (5 members) and as a leader, I have to prepare the learning materials, transportation plans, agenda and meeting with the center's executives and teachers.",
    ],
  },
  {
    slug: "ric-student-union",
    title: "RIC Student Union Gen'24",
    category: "educational",
    org: "Rangsit University",
    role: "Finance Officer",
    dates: "2024",
    location: "Bangkok, Thailand",
    summary:
      "Dedicated to organizing events, supporting student clubs, and promoting cultural exchange among the diverse student body, building unity, leadership, and engagement across the college.",
    tags: ["Event Planning", "Student Leadership", "Finance"],
    cover: { kind: "gradient", gradientFrom: "#7456c9", gradientTo: "#cdbdf5" },
    body: [
      "The RIC Student Union is dedicated to organizing events, supporting student clubs, and promoting cultural exchange among the diverse student body.",
      "Their initiatives aim to build unity, leadership, and engagement across the college.",
      "As part of the 2024 Freshman Orientation, I was invited as panel moderator for the orientation panel, leading a discussion on personal branding — what it is, the steps to build one, and practical tips for incoming students.",
      "Across the year, the Student Union ran three major workstreams: Gala Night (decor, catering, venue, invitations, social promotion, and budget allocation), Special Days' Events (Songkran, Valentine's Day, Loy Krathong with games, cocktails, and club collaborations), and Freshman Orientation (agenda planning, inviting speakers, and MC coordination).",
    ],
    gallery: [
      { src: "/images/projects/ric-panel-moderator.jpg", caption: "Panel Moderator — Orientation Event Panel (2024)" },
      { src: "/images/projects/ric-projects-overview.jpg", caption: "RIC Student Union Projects — Gala Night, Special Days' Events, Freshman Orientation" },
    ],
  },
  {
    slug: "fundraising-project-myanmar",
    title: "Fundraising Project Myanmar",
    category: "educational",
    org: "Rangsit University",
    role: "Organizing Team Member",
    dates: "2025",
    location: "Bangkok, Thailand",
    summary:
      "Led by some of the student union members including me, and other executive members, to collect funds along with a campaign and international day event at the university.",
    tags: ["Fundraising", "Campaign", "Community"],
    cover: { kind: "gradient", gradientFrom: "#8a6de0", gradientTo: "#f1eefc" },
    body: [
      "The project led by some of student union member including me, and other executive members to collect funds along with campaign and international day event at the university.",
    ],
    links: [{ label: "View event post", href: "https://www.instagram.com/p/DILZSAaRkbz/?igsh=anFkN2sydGg5cHRj" }],
  },
];

export interface ExperienceItem {
  org: string;
  role: string;
  dates: string;
  location?: string;
  bullets: string[];
}

export const CURRENT_ROLE: ExperienceItem = {
  org: "Fen-i (Future Education Network International)",
  role: "Educator & Program Designer",
  dates: "Apr 2026 — Present",
  location: "Bangkok, Thailand",
  bullets: [
    "Design and deliver entrepreneurship course programs for youth aged 7–22.",
    "Help shape curriculum and on-the-ground program design for Zebra Camp & Pitch International 2026.",
    "Build and run the Young CEO Programme — a 4-week academy from self-discovery to a final presentation.",
    "Coach students 1-on-1 through goal setting, prototyping, and presentation skills.",
  ],
};

export const PROFESSIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    org: "Youths Passion Social_Present – The English Palette",
    role: "Founder & Content Creator",
    dates: "Jan 2023 – Present",
    location: "Remote",
    bullets: [
      "Led content and graphic creation, calendar and dashboard management",
      "Implemented English and other courses with own PowerPoint lesson",
      "Assisted in volunteer recruitments and decision-making as a team",
      "Contributed in online webinars, design thinking and launching projects",
    ],
  },
  {
    org: "Forvia Asean",
    role: "Social & Communication Intern",
    dates: "Aug 2025 – Dec 2025",
    location: "Bangkok, Thailand",
    bullets: [
      "Created content on TikTok, Facebook, and Instagram for brand presence",
      "Designed visuals and graphics for internal communications",
      "Analyzed social media performance and trends to guide strategy",
      "Shot and edited videos, developing creative content ideas",
    ],
  },
  {
    org: "ThaiBev PLC",
    role: "English Training Officer Intern",
    dates: "June 2023 – July 2023",
    location: "Bangkok, Thailand",
    bullets: [
      "Designed lessons plans and created visual activities for adult learners",
      "Lead in training employee from internal audit department",
      "Assist in project implementation and group pitching",
      "Collaborated with peer interns for final project pitching",
    ],
  },
  {
    org: "National University of Union of Myanmar",
    role: "Research Assistant",
    dates: "June 2025 – Aug 2025",
    location: "Remote",
    bullets: [
      "Collaborated with lead researchers and gathered data and linguistic analysis",
      "Created visual presentations and scripts for project delivery",
      "Contributed to research writing and analysis of language usage, editing in project presentations",
    ],
  },
  {
    org: "RIC Language Center",
    role: "Team Leader for Student services",
    dates: "Nov 2024 – April 2025",
    location: "Bangkok, Thailand",
    bullets: [
      "Led the student check-in and check-out processes with a team",
      "Assisted in attendance data analytics and manage cloud files",
    ],
  },
];

export const TEACHING_EXPERIENCE: ExperienceItem[] = [
  {
    org: "Myanmar Teacher Organization",
    role: "English Teacher",
    dates: "Jun 2021 – Present",
    location: "Remote",
    bullets: [
      "Design and optimize lessons plans and created activities for learners",
      "Arrange video lessons classes with designed learning materials",
      "Assist in content idea generation and video creation",
      "Promote courses and assisted in recruiting students",
    ],
  },
  {
    org: "National University of Union of Myanmar",
    role: "Educational Mentor",
    dates: "April 2024 – Present",
    location: "Remote",
    bullets: [
      "Remotely participate in pairing session by the committee for consultation",
      "Help the students for university admission and scholarship application proofreading",
      "Assist the mentees with their English Proficiency, Mental wellbeing and other soft skills training",
    ],
  },
  {
    org: "National Catholic Commission on Migration",
    role: "English Teacher",
    dates: "April 2024 – Dec 2024",
    location: "Bangkok, Thailand",
    bullets: [
      "Conducted lessons for young learners and teenagers for their English Proficiency",
      "Design own curriculum with online resources for students and the school",
    ],
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  highlight?: string;
  image?: string;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (Int'l Business)",
    school: "Rangsit University International College",
    location: "Bangkok, Thailand",
    period: "2022-2026",
    description:
      "Relevant Courses: Marketing Principles, Public Relations, Brand Management, Human Resources, Economics, International Finance, Business Law Theory, Organizational Management, Data Analytics",
    achievements: [
      "President of Music Club (Jun 2023 – Jun 2024)",
      "Co-head of Academic Affairs of Rangsit University MUN Club (Jun 2023 – Jun 2024)",
      "Finance Officer of College Student Council (Feb 2023 – April 2025)",
      "Hackathon Competition 2nd Runner Up – Cimso (2024)",
      "P2A Global Sustainable Project (Winner Award) (2023)",
    ],
    highlight: "50% Ambassadorial scholarship with Final CGPA: 3.67",
  },
];

export const GENERAL_STUDY: EducationItem[] = [
  {
    degree: "Social Sciences Studies",
    school: "National University of Union of Myanmar",
    location: "Remote",
    period: "2022-2024",
    description:
      "Relevant Courses: Communication & Public Speaking, Introduction to economics, International Development, Myanmar Ethnic Language and Culture Studies with full-ride scholarship",
    achievements: [
      "Research Paper: The Hidden Treasure of Sagaw Karen Ethnic Group",
      "Research Paper (as research assistant): The analysis of Mro Khimi Language and Culture",
    ],
    image: "/images/certificates/social_sciences_certificate.jpg",
  },
];

export const CERTIFICATES: {
  title: string;
  issuer: string;
  year: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Internship Completion Certificate",
    issuer: "FAURECIA INTERIOR SYSTEMS (THAILAND) CO.,LTD",
    year: "November 28, 2025",
    description: "4 months of valuable hands-on experience in the position of Social Media & Communication Intern",
    image: "/pdf/FIS_Internship_Certificate.pdf",
  },
  {
    title: "Internship Completion Certificate",
    issuer: "Thai Beverage PLC",
    year: "2023",
    description: "Asean internship 2 months program for university students with Asean nationalities",
    image: "/images/certificates/thai_bev.jpg",
  },
  {
    title: "Internship Evaluation Certificate",
    issuer: "Better Youth Myanmar",
    year: "April 2022",
    description: "Remote internship for healthcare and sustainability contents and projects management internship",
    image: "/images/certificates/intern_better_youth.jpg",
  },
  {
    title: "Volunteering Teaching Certificate",
    issuer: "Myanmar Teacher Organization",
    year: "Sep 2021",
    description: "",
    image: "/images/certificates/volunteer_certificate1.jpg",
  },
  {
    title: "Volunteer Teaching Certificate",
    issuer: "Improve Knowledge Education",
    year: "Sep 2021",
    description: "",
    image: "/images/certificates/volunteer_certificate2.jpg",
  },
  {
    title: "3rd Spring Flower International Conference",
    issuer: "Burmese American Community Institute",
    year: "Feb 2024",
    description: "Academic research titled 'Hidden Treasure of Sagaw Karen Ethnic Groups in Myanmar'",
    image: "/images/certificates/research_paper_1.jpg",
  },
  {
    title: "CRPI Research Completion Certificate",
    issuer: "Burmese American Community Institute",
    year: "Aug 2025",
    description: "Academic Research titled 'The Cultural Analysis of the Mro-Khimi Ethnic's Language and Culture in Myanmar'",
    image: "/images/certificates/research_paper_2.jpg",
  },
  {
    title: "Outstanding Achievement In Executive Committee",
    issuer: "Rangsit University International College Music Club",
    year: "2026",
    description: "",
    image: "/pdf/ACPP.pdf",
  },
];

export const SKILL_CATEGORIES: { title: string; skills: string[] }[] = [
  {
    title: "Hard Skills",
    skills: [
      "Digital Marketing Strategy & Campaign Planning",
      "Social Media Management (content calendars, growth, analytics)",
      "Content Creation (copywriting, visuals, storytelling)",
      "Brand Communication & Messaging",
      "Educational Content Development & Online Teaching Tools",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Strong Communication & Presentation",
      "Adaptability & Flexibility",
      "Creativity & Problem-Solving",
      "Cross-Cultural Awareness",
      "Collaboration & Teamwork",
      "Audience Engagement & Coaching",
    ],
  },
];

export const TOOLS: { name: string; path: string }[] = [
  { name: "Microsoft office", path: "/svgs/microsoft.svg" },
  { name: "Notion", path: "/svgs/notion.svg" },
  { name: "Canva", path: "/svgs/canva.svg" },
  { name: "Capcut", path: "/svgs/capcut.svg" },
  { name: "Meta Suite", path: "/svgs/meta.svg" },
  { name: "Google Workspace", path: "/svgs/google.svg" },
  { name: "Buffer", path: "/svgs/buffer.svg" },
  { name: "Moodle", path: "/svgs/moodle.svg" },
];

export const SOCIAL_MEDIA: { path: string; label: string; value: string }[] = [
  {
    path: "/svgs/linkedin.svg",
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/aye-chan-pwint-phyu-hazel-753032223",
  },
  {
    path: "/svgs/line.svg",
    label: "Line",
    value: "https://line.me/ti/p/8mxF5ogopP",
  },
  {
    path: "/svgs/whatsapp.svg",
    label: "Whatsapp",
    value: "https://wa.me/66634627828",
  },
];

export const REFERENCES: { name: string; title: string; org: string; email: string }[] = [
  {
    name: "Ussanee Malisuwan (Aj. Koy)",
    title: "Associate Dean for Administration",
    org: "Rangsit University International College",
    email: "ussanee.ma@rsu.ac.th",
  },
  {
    name: "Srisongruk Prohmvitak",
    title: "Head of International Business Program",
    org: "Rangsit University International College",
    email: "srisongruk.p@rsu.ac.th",
  },
  {
    name: "Zarni Phyoe",
    title: "Former President of RIC Student Union",
    org: "Rangsit University International College",
    email: "zarniphyoe1200@gmail.com",
  },
  {
    name: "Dr. Mon Mon Aung",
    title: "Program Director of General Courses",
    org: "Burmese American Community Institute (USA)",
    email: "moon@umyanmar.org",
  },
];
