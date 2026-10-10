/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site. Facts come from the resume only.
 */
export const profile = {
  name: 'Ram Praveen C',
  title: 'AI & Data Science Engineer | Machine Learning Developer | Computer Vision Enthusiast',
  summary:
    'Passionate and self-motivated AI & Data Science student with hands-on experience in Machine Learning, Computer Vision, NLP, and intelligent automation. Experienced in developing AI-powered solutions using Python, OpenCV, and related technologies. Interested in building practical, innovative solutions to real-world problems through artificial intelligence and software engineering.',
  email: 'crampraveen2485@gmail.com',
  phone: '+91 9489037690',
  phoneHref: 'tel:+919489037690',
  linkedin: 'https://linkedin.com/in/praveen-c24',
  github: 'https://github.com/ram-praveen-c',
  location: 'Sattur, Tamil Nadu, India',
  languages: ['Tamil', 'English'],
  // BASE_URL keeps the link working under /Portfolio/ on GitHub Pages
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const education = [
  {
    school: 'National Engineering College, Kovilpatti',
    degree: 'B.Tech, Artificial Intelligence and Data Science',
    years: '2023 – 2027',
    detail: 'Current CGPA: 7.96',
    status: 'Pursuing',
  },
  {
    school: 'SHN Edward Higher Secondary School, Sattur',
    degree: 'HSLC',
    years: '2022 – 2023',
    detail: 'Score: 69.16%',
    status: 'Completed',
  },
]

export type Project = {
  id: 'safe-drive' | 'jarvis' | 'review-intel'
  name: string
  kind: string
  problem: string
  solution: string
  tech: string[]
  features: string[]
  applications: string
  note?: string
  /** Fill in real URLs to show the buttons. Leave empty to hide them. */
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 'safe-drive',
    name: 'Safe-Drive AI',
    kind: 'Driver Drowsiness Detection System',
    problem: 'Driver fatigue can reduce attention and increase road safety risks.',
    solution:
      'A computer-vision-based system that continuously monitors the driver and raises a safety alert when signs of drowsiness are detected.',
    tech: ['Python', 'OpenCV', 'Computer Vision', 'IoT'],
    features: ['Continuous visual monitoring', 'Drowsiness detection', 'Driver safety alerts'],
    applications: 'Driver assistance and road safety research.',
    note: 'Also showcased as an AI-powered Driver Monitoring System at Sri Sairam Engineering College, Chennai.',
    github: '',
    demo: '',
  },
  {
    id: 'jarvis',
    name: 'JARVIS',
    kind: 'Intelligent Voice Assistant',
    problem: 'Routine device operations can require unnecessary manual interaction.',
    solution:
      'An Android-based voice assistant that lets users handle supported operations hands-free, as an exploration of natural human-computer interaction.',
    tech: ['Android (native)', 'Voice commands'],
    features: ['Voice-controlled application access', 'Calling', 'Messaging', 'Contact management', 'Hands-free device interaction'],
    applications: 'Hands-free interaction and personal automation.',
    note: 'Feature availability depends on the device and granted permissions.',
    github: '',
    demo: '',
  },
  {
    id: 'review-intel',
    name: 'Product Review Intelligence',
    kind: 'Internship project, Hostwire Systems',
    problem: 'Product discussions and customer feedback are difficult to analyze manually.',
    solution:
      'A Python-based pipeline that collects product-related discussions from public sources, filters irrelevant content, and uses Machine Learning and NLP to surface user opinions and recurring complaints.',
    tech: ['Python', 'Machine Learning', 'NLP'],
    features: ['Feedback analysis', 'Recurring complaint identification', 'Opinion understanding', 'Relevance filtering', 'Insight generation'],
    applications: 'Helping teams understand what users say about a product.',
    note: 'Internship work. Company data, datasets and implementation details are not published here.',
  },
]

export const pipelineSteps = [
  'Data collection',
  'Preprocessing',
  'Relevance filtering',
  'NLP / ML analysis',
  'Insight generation',
]

export const skillGroups = [
  { title: 'Programming', icon: 'code', items: ['Python', 'Java', 'SQL'] },
  { title: 'AI & Data Science', icon: 'brain', items: ['Machine Learning', 'NLP', 'Data Science'] },
  { title: 'Computer Vision', icon: 'eye', items: ['OpenCV', 'Image processing', 'Driver monitoring'] },
  { title: 'Development & Tools', icon: 'wrench', items: ['REST API Development', 'Git', 'GitHub'] },
] as const

export const achievements = [
  {
    type: 'Award',
    title: 'Runner-up',
    text: 'Presented a Virtual AI Voice Assistant for PC automation.',
  },
  {
    type: 'Participation',
    title: 'National-level hackathon',
    text: 'Participated at Government Engineering College, Erode.',
  },
  {
    type: 'Showcase',
    title: 'Driver Monitoring System',
    text: 'Showcased an AI-powered driver monitoring system at Sri Sairam Engineering College, Chennai.',
  },
  {
    type: 'Certification',
    title: 'Database Management System Part-1',
    text: 'Infosys Springboard.',
  },
]

export const focusAreas = [
  { icon: 'brain', title: 'Artificial Intelligence', text: 'Applying AI to practical, real-world problems.' },
  { icon: 'eye', title: 'Computer Vision', text: 'Image processing and monitoring with OpenCV.' },
  { icon: 'message', title: 'Natural Language Processing', text: 'Understanding opinions in text feedback.' },
  { icon: 'zap', title: 'Intelligent Automation', text: 'Voice and software assistants that save effort.' },
] as const
