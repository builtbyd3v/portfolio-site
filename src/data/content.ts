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
  points: string[]
  href?: string
}

export const projects: Project[] = [
  {
    title: 'StepSafe (ShellHacks 2026)',
    meta: 'Swift · ARKit · YOLO11s · TypeScript · Fastify · MongoDB · Next.js · Gemini',
    status: 'Sep 2026',
    points: [
      'Conceived and co-built in 36 hours: a head-mounted iPhone app that uses LiDAR depth and on-device object detection to warn blind and low-vision pedestrians about obstacles, drop-offs, and fast-approaching objects.',
      'Designed the iOS app and the web community map, and orchestrated AI agents to review every pull request and iterate until each change met our bar.',
      'Shipped live at stepsafe.miami: a community hazard map backed by an API that merges nearby reports and labels hazards with an LLM.',
    ],
    href: 'https://stepsafe.miami',
  },
  {
    title: 'samehere',
    meta: 'Next.js · TypeScript · React · PostgreSQL · Supabase · Stripe · Tailwind CSS · Vercel',
    status: 'Jun 2026–Present',
    points: [
      'Solo-built and launched a student networking platform (live on Vercel) with auth, a stage-labeled feed, public portfolios, realtime DMs, search, and block/report safety.',
      'Directed AI agents to build the Supabase backend (Auth, Postgres, Realtime, Storage) with Row Level Security and versioned migrations; reviewed every diff and tested each flow before merging.',
      'Integrated Stripe Checkout with signature-verified webhooks for a Pro tier.',
    ],
    href: 'https://samehere.dev',
  },
  {
    title: 'Sona',
    meta: 'React · Express · Node.js · PostgreSQL',
    status: 'Jul 2026–Aug 2026',
    points: [
      'Shipped a full-stack artist hub for profiles, follows, concerts, and merch with a 6-person team, using GitHub Issues and pull requests.',
      'Built the artist API (list with search and genre filters, detail, update, delete) and the React directory and artist pages.',
      'Built follow/unfollow end to end: a Postgres join table keyed on user and artist, an upsert endpoint, and a React button that updates in place.',
    ],
  },
]

export type Experience = {
  org: string
  detail: string
  period: string
  points: string[]
}

export const experience: Experience[] = [
  {
    org: 'Chipotle Mexican Grill',
    detail: 'Service Leader · Gainesville, FL',
    period: 'Jul 2021–Sep 2026',
    points: [
      'Led closing shifts as manager on duty while covering the work of 3 to 4 positions on lean staffing; trusted to run high-volume stations solo for speed and accuracy.',
      'Owned morning openings: received and rotated 100+ cases per delivery ($10K to $15K of inventory) in under an hour, reconciled cash, managed catering orders, and led prep before service.',
      'Trained crew on written food-safety and service standards so quality stayed consistent under pressure.',
    ],
  },
]

export type Education = {
  org: string
  detail: string
  period: string
  body?: string
  points?: string[]
}

export const education: Education[] = [
  {
    org: 'Western Governors University',
    detail: 'B.S. Software Engineering (competency-based, self-paced)',
    period: 'Expected Fall 2027',
    body: 'Coursework: Data Structures and Algorithms I, Front-End Web Development, Discrete Mathematics I, Calculus I, Technical Communication, Version Control, Introduction to Systems Thinking.',
  },
  {
    org: 'CodePath',
    detail: 'Software Engineering Program · Honors in WEB103, AI110',
    period: 'Jun 2026–Aug 2026',
    points: [
      'WEB103 Intermediate Web Development (Honors): built production-style full-stack apps with React, REST APIs, PostgreSQL, and cloud deployment; practiced code review and pull-request workflows.',
      'AI110 Intro to AI and LLMs (Honors): applied prompt engineering and LLM API integration in apps, with attention to AI ethics and practical evaluation.',
      'TIP101 Technical Interview Prep: practiced data structures and algorithms, timed problem solving, and clear technical communication for interviews.',
    ],
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
      { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
      { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
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
      { name: 'Express', slug: 'express', color: '000000' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
    ],
  },
  {
    label: 'AI Development',
    items: [
      { name: 'Claude Code', slug: 'claude', color: 'D97757' },
      { name: 'Cursor', slug: 'cursor', color: '000000' },
      { name: 'Grok Bot', icon: '/icons/grok-bot.svg' },
      { name: 'LLM APIs' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', slug: 'git', color: 'F05032' },
      { name: 'GitHub', slug: 'github', color: '181717' },
      { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
      { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
      { name: 'Vercel', slug: 'vercel', color: '000000' },
    ],
  },
]
