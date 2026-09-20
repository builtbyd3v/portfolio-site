export const CONTACT = {
  email: 'contact@builtbyd3v.com',
  github: 'https://github.com/builtbyd3v',
  x: 'https://x.com/builtbydev',
  linkedin: 'https://www.linkedin.com/in/builtbydev',
  resume: '/resume-standard.pdf',
  location: 'Gainesville, FL',
}

export type Project = {
  title: string
  meta: string
  status: string
  body: string
  href?: string
}

export const projects: Project[] = [
  {
    title: 'samehere',
    meta: 'Next.js · TypeScript · React · PostgreSQL · Supabase · Stripe · Tailwind CSS · Vercel',
    status: 'Jun 2026–Present',
    body: 'Invite-only student networking app. Auth, profiles, feed, realtime DMs, clubs, notifications, and an AI jobs board. Postgres and Supabase with RLS. Stripe for checkout. I write the spec, review the diff, and ship the parts I would merge.',
    href: 'https://samehere.dev',
  },
  {
    title: 'Aced',
    meta: 'React · TypeScript · Tailwind CSS · Claude API · Vercel',
    status: 'Mar 2026–Apr 2026',
    body: 'Mock interviews from a job description. Paste the JD, answer five questions for that role, get scored feedback on each answer.',
    href: 'https://aced-dev.vercel.app',
  },
  {
    title: 'Sona',
    meta: 'React · Express · Node.js · PostgreSQL',
    status: 'Jun 2026–Jul 2026',
    body: 'CodePath team project. Six of us shipped a full-stack artist hub for profiles, follows, concerts, and merch. I built directory/CRUD and follow flows across the React frontend and Express/PostgreSQL API.',
  },
]

export const experienceSoon = {
  period: 'Coming soon',
  title: 'The first software role goes here.',
  body: 'Internship and early-career software work will live in this section. Until then, the record is the products and coursework on this page.',
}

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
    period: 'Expected Fall 2027',
    body: 'Competency-based degree. Coursework includes data structures and algorithms, discrete math, version control, systems thinking, and technical communication.',
  },
  {
    org: 'CodePath',
    detail: 'Software Engineering Program · Honors in WEB103, AI110',
    period: 'Jun 2026–Aug 2026',
    body: 'Completed WEB103 (Advanced Web Development), AI110 (Intro to AI Engineering), and TIP101 (Technical Interview Prep), with honors in WEB103 and AI110. Shipped full-stack projects using React, REST APIs, and PostgreSQL, and practiced code review, GitHub Issues, and pull-request workflows in a structured cohort.',
  },
]

export type Skill = {
  name: string
  slug?: string
  color?: string
  icon?: string
}
export type SkillGroup = { label: string; items: Skill[] }

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
      { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
      { name: 'Python', slug: 'python', color: '3776AB' },
      { name: 'SQL', slug: 'postgresql', color: '4169E1' },
      { name: 'HTML', slug: 'html5', color: 'E34F26' },
      { name: 'CSS', slug: 'css', color: '663399' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'React', slug: 'react', color: '61DAFB' },
      { name: 'Next.js', slug: 'nextdotjs', color: '000000' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', slug: 'git', color: 'F05032' },
      { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
      { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
      { name: 'Vercel', slug: 'vercel', color: '000000' },
      { name: 'Claude Code', slug: 'claude', color: 'D97757' },
      { name: 'Codex', icon: '/icons/codex.svg' },
      { name: 'Cursor', slug: 'cursor', color: '000000' },
    ],
  },
]
