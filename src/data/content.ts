export const CONTACT = {
  email: 'devgirigoswami8@gmail.com',
  github: 'https://github.com/builtbyd3v',
  x: 'https://x.com/builtbydev',
  linkedin: 'https://www.linkedin.com/in/builtbydev',
  resume: '/Fall_Resume.pdf',
}

export type Project = {
  title: string
  meta: string
  status: string
  body: string
  href: string
}

export const projects: Project[] = [
  {
    title: 'Internship Launchpad AI',
    meta: 'React · Express.js · PostgreSQL · Claude API',
    status: 'In progress',
    body: 'A full-stack tracker for the internship hunt. It keeps applications organized, reads job descriptions to surface the skills they actually want, flags the gaps in your own profile, and drafts a prep plan to close them.',
    href: 'https://github.com/builtbyd3v',
  },
  {
    title: 'Aced',
    meta: 'React · TypeScript · Tailwind CSS · Claude API · Vercel',
    status: 'Live',
    body: 'An AI mock-interview tool. You paste in a job description, answer five questions generated for that specific role, and get scored feedback on each response so you know exactly where to tighten up before the real thing.',
    href: 'https://github.com/builtbyd3v',
  },
]

export type Experience = {
  role: string
  org: string
  period: string
  body: string
}

export const experience: Experience[] = [
  {
    role: 'Service Leader',
    org: 'Chipotle Mexican Grill',
    period: '2021 — 2026',
    body: 'Optimized high-volume shift performance, increasing throughput 20% and reducing waste 15%, by leading and training crew on food-safety, cash/inventory controls, and customer-resolution procedures.',
  },
]

export type Education = {
  org: string
  detail: string
  period: string
  body: string
}

export const education: Education[] = [
  {
    org: 'Western Governors University',
    detail: 'B.S. Software Engineering · 4.0 GPA',
    period: 'Oct 2025 — Apr 2027',
    body: 'Competency-based degree covering software design, data structures, and full-stack engineering.',
  },
  {
    org: 'CodePath',
    detail: 'Software Engineering Bootcamp',
    period: 'Jun 2026 — Aug 2026',
    body: 'Three concurrent tracks: advanced full-stack web (Node.js, Express, PostgreSQL, REST, auth, deployment), AI engineering foundations (AI-assisted development, debugging, and code evaluation), and technical interview prep (Python, data structures, algorithms, and OOP).',
  },
  {
    org: 'Scrimba',
    detail: 'Frontend Developer Path',
    period: 'Sep 2025 — Apr 2026',
    body: 'Mozilla MDN-curated curriculum across HTML, CSS, JavaScript, and React. Shipped 12+ projects and worked through hundreds of coding challenges.',
  },
]

// `slug` = simple-icons slug (https://simpleicons.org). `color` = brand hex.
// Items without a slug render as plain text chips.
export type Skill = { name: string; slug?: string; color?: string }
export type SkillGroup = { label: string; items: Skill[] }

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
      { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
      { name: 'Python', slug: 'python', color: '3776AB' },
      { name: 'SQL', slug: 'postgresql', color: '4169E1' },
      { name: 'HTML5', slug: 'html5', color: 'E34F26' },
      { name: 'CSS', slug: 'css', color: '663399' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', slug: 'react', color: '61DAFB' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
      { name: 'Express.js', slug: 'express', color: '000000' },
      { name: 'REST APIs' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
      { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', slug: 'git', color: 'F05032' },
      { name: 'GitHub', slug: 'github', color: '181717' },
      { name: 'Vercel', slug: 'vercel', color: '000000' },
      { name: 'Claude Code', slug: 'claude', color: 'D97757' },
      { name: 'Cursor', slug: 'cursor', color: '000000' },
    ],
  },
  {
    label: 'Concepts',
    items: [
      { name: 'Data Structures & Algorithms' },
      { name: 'OOP' },
      { name: 'Authentication' },
      { name: 'AI-Assisted Development' },
    ],
  },
]
