export const CONTACT = {
  email: 'devgirigoswami8@gmail.com',
  github: 'https://github.com/builtbyd3v',
  x: 'https://x.com/builtbydev',
  linkedin: 'https://www.linkedin.com/in/builtbydev',
  resume: '/resume.pdf',
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
    title: 'samehere',
    meta: 'Next.js · React · TypeScript · Tailwind CSS · Supabase · Claude (OpenAI SDK) · Vercel',
    status: 'Live',
    body: 'Student social app with .edu verification. Claude suggests peers from profile overlap (OpenAI SDK on the server). Feed, profiles, DMs, follows, activity heatmap. Live on Vercel.',
    href: 'https://samehere.dev',
  },
  {
    title: 'Aced',
    meta: 'React · TypeScript · Tailwind CSS · Claude API · Vercel',
    status: 'Live',
    body: 'Mock interviews from a job description. Paste the JD, answer five questions for that role, get scored feedback on each answer.',
    href: 'https://aced-dev.vercel.app',
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
    period: '2021-2026',
    body: 'Ran high-volume shifts and trained crew on food safety, cash handling, and inventory. Throughput up ~20%, waste down ~15%.',
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
    period: 'Oct 2025-Apr 2027',
    body: 'Competency-based B.S. Covers software design, data structures, and full-stack engineering. You move forward by passing assessments, not by semester schedule.',
  },
  {
    org: 'CodePath',
    detail: 'Software Engineering Bootcamp',
    period: 'Jun 2026-Aug 2026',
    body: 'Three tracks running in parallel: full-stack web (Node.js, Express, PostgreSQL, REST, auth, deployment), AI engineering (building and debugging with LLM tools), and interview prep (Python, data structures, algorithms, OOP).',
  },
  {
    org: 'Scrimba',
    detail: 'Frontend Developer Path',
    period: 'Sep 2025-Apr 2026',
    body: 'MDN-based path through HTML, CSS, JavaScript, and React. Shipped 12+ projects and worked through many coding exercises along the way.',
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
      { name: 'Next.js', slug: 'nextdotjs', color: '000000' },
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
