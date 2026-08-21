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
  stage: string
  body: string
  href?: string
  image?: string
  cta?: string
  tagline?: string
}

export const projects: Project[] = [
  {
    title: 'samehere',
    meta: 'Next.js · TypeScript · React · PostgreSQL · Supabase · Stripe · Tailwind CSS · Vercel',
    status: 'Live',
    stage: 'Live',
    body: 'Invite-only student networking app. Auth, profiles, feed, realtime DMs, clubs, notifications, and an AI jobs board. Postgres and Supabase with RLS. Stripe for checkout. I write the spec, review the diff, and ship the parts I would merge.',
    href: 'https://samehere.dev',
    image: '/projects/samehere.png',
  },
  {
    title: 'Aced',
    meta: 'React · TypeScript · Tailwind CSS · Claude API · Vercel',
    status: 'Shipped',
    stage: 'Shipped',
    body: 'Mock interviews from a job description. Paste the JD, answer five questions for that role, get scored feedback on each answer.',
    href: 'https://aced-dev.vercel.app',
    image: '/projects/aced.png',
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
    role: 'Freelance Web Developer',
    org: 'Saddle River Roofing',
    period: 'Aug 2026-Present',
    body: 'Specifying and building a new Next.js site for a local roofing company, replacing saddleriverroofing.com. TypeScript, React, and Tailwind. Component-based, mobile-responsive.',
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
    period: 'Expected Fall 2027',
    body: 'Competency-based degree. Coursework includes data structures and algorithms, discrete math, version control, systems thinking, and technical communication.',
  },
  {
    org: 'CodePath',
    detail: 'Software Engineering Program · Honors in WEB103, AI110',
    period: 'Jun 2026-Present',
    body: 'Finished WEB103, AI110, and TIP101. Full-stack work in React, Node.js, Express, PostgreSQL, and REST APIs. TIP102 and AI201 continue in Fall 2026.',
  },
]

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
      { name: 'HTML', slug: 'html5', color: 'E34F26' },
      { name: 'CSS', slug: 'css', color: '663399' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'React', slug: 'react', color: '61DAFB' },
      { name: 'Next.js', slug: 'nextdotjs', color: 'FFFFFF' },
      { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
      { name: 'Express', slug: 'express', color: 'FFFFFF' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', slug: 'git', color: 'F05032' },
      { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
      { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
      { name: 'Vercel', slug: 'vercel', color: 'FFFFFF' },
      { name: 'Stripe', slug: 'stripe', color: '635BFF' },
      { name: 'Claude Code', slug: 'claude', color: 'D97757' },
      { name: 'Cursor', slug: 'cursor', color: 'FFFFFF' },
    ],
  },
]
