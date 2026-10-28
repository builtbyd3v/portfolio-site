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
  note?: string
  points: string[]
  href?: string
}

export const projects: Project[] = [
  {
    title: 'Albie',
    meta: 'Python · FastAPI · Claude Agent SDK · Grok Realtime API · WebRTC · Unity',
    note: '1st Place Overall + MLH Best Open Source · Gator Hack V · Team of 5 · Claude Code, Codex',
    status: 'Oct 2026',
    points: [
      'Designed the voice architecture of a Meta Quest 3 AI coding assistant: a FastAPI hub streams mic audio to Grok’s realtime speech API and hands code work to Claude Agent SDK agents. Authored 53 of 85 merged PRs.',
      'Raised natural-speech accuracy from 10% to about 90% with zero missed turns by building a simulated headset and a Claude-judged eval harness (2,339 scored turns on 3 parallel hubs), then fixing barge-in and turn-taking.',
      'Built a 60-tool registry served to Grok as function calls and to Claude as an in-process MCP server, plus a proactive watcher that speaks up on code errors, crashes, and overfitting.',
      'Streamed VS Code to the headset over WebRTC; built the VS Code extension the agent drives (calls 0.3–1.1 s to <0.1 s).',
    ],
    href: 'https://github.com/builtbyd3v/Albie',
  },
  {
    title: 'checkwith.us',
    meta: 'Swift · SwiftUI · Core ML · PyTorch · Next.js · PostgreSQL',
    note: 'SwampHacks XII · Team lead, team of 4 · Built with Claude Code and Codex',
    status: 'Oct 2026',
    points: [
      'Led a 4-person team building an iPhone app that protects older adults from scams: it filters scam texts on device, labels scam calls, and holds risky payments (gift cards, crypto, new payees) until family approves with Face ID.',
      'Trained an on-device scam-text classifier; when a 67 MB DistilBERT crashed iOS’s Message Filter, shipped a 1 MB n-gram model that catches 96% of scams at a 2.4% false-alarm rate on 884 real texts, with leak-free splits.',
      'Shipped the iPhone apps and Message Filter and Call Directory extensions; designed the Auth0/Postgres backend.',
    ],
    href: 'https://checkwith.us',
  },
  {
    title: 'StepSafe',
    meta: 'Swift · ARKit · YOLO11s · TypeScript · Next.js · MongoDB',
    note: 'ShellHacks 2026 · Built with Claude Code, Cursor, and Grok Bot',
    status: 'Sep 2026',
    points: [
      'Conceived and co-built in 36 hours a head-mounted iPhone app that uses LiDAR depth and on-device object detection to warn blind and low-vision pedestrians about obstacles, drop-offs, and fast-approaching objects.',
      'Designed the iOS app; shipped a live hazard map whose API merges nearby reports and labels them with an LLM.',
    ],
    href: 'https://github.com/xvedara/shellhacks-2026',
  },
  {
    title: 'samehere.dev',
    meta: 'Next.js · React · TypeScript · Supabase · Tailwind CSS · Apple Wallet',
    note: 'Solo project · Built with Claude Code · Launching Nov 2026',
    status: 'Jun 2026–Present',
    points: [
      'Solo-building a profile site where CS students find hackathon teammates; every stat is counted from real data (Devpost-verified prizes, shipped projects, GitHub contributions), never typed in.',
      'Each profile renders a FIFA-style card as a Discord/X link preview, an image, and an Apple Wallet pass with a QR code; cut the card’s uncached render on Vercel from 4.5 s to about 1 s by drawing its heatmap as one SVG.',
    ],
    href: 'https://samehere.dev',
  },
]

export const openSource: Project[] = [
  {
    title: 'nodeterm',
    meta: 'TypeScript · Electron · whisper.cpp · node-based terminal manager for AI coding agents',
    note: '5 merged PRs (#1128, #1279, #1284, #1285, #1286) · Built with Claude Code',
    status: 'Oct 2026',
    points: [
      'Cut macOS dictation time 9x (5.97 s to 0.64 s) by tracing a silent CPU fallback to Metal shaders hidden in app.asar.',
      'Fixed a speech-engine crash (4 of 4 runs) from uninitialized whisper.cpp params by patching the native binding.',
      'Raised Liquid Glass text contrast from about 1:1 to at least 3:1 at every transparency level, with no frame-time cost.',
      'Added Cursor’s agent CLI as a built-in agent with live status, usage meters, chat, resume, and permission modes.',
    ],
    href: 'https://github.com/eneskirca/nodeterm',
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
      'Led shifts as manager on duty, covering 3–4 roles on lean staff; received $10K–$15K deliveries in under an hour.',
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
    body: 'Coursework: Data Structures and Algorithms, Front-End Web Development, Discrete Math, Calculus I, Version Control.',
  },
  {
    org: 'CodePath',
    detail: 'Software Engineering Program · Honors in WEB103, AI110',
    period: 'Jun 2026–Aug 2026',
    points: [
      'WEB103 Advanced Web Development (Honors): full-stack React, REST APIs, PostgreSQL, deployment, PR review.',
      'AI110 Foundations of AI Engineering (Honors): prompt engineering and LLM API integration, with AI ethics and evaluation.',
      'TIP101 Technical Interview Prep: data structures and algorithms, timed problem solving, technical communication.',
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
      { name: 'Swift', slug: 'swift', color: 'F05138' },
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
      { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
      { name: 'SwiftUI', slug: 'swift', color: '0D96F6' },
      { name: 'Core ML', slug: 'apple', color: '000000' },
      { name: 'FastAPI', slug: 'fastapi', color: '009688' },
      { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
    ],
  },
  {
    label: 'AI Development',
    items: [
      { name: 'AI Agents' },
      { name: 'Claude Code', slug: 'claude', color: 'D97757' },
      { name: 'Codex' },
      { name: 'Cursor', slug: 'cursor', color: '000000' },
      { name: 'Claude Agent SDK', slug: 'claude', color: 'D97757' },
      { name: 'MCP', slug: 'modelcontextprotocol', color: '000000' },
      { name: 'LLM APIs' },
    ],
  },
  {
    label: 'AI and ML',
    items: [
      { name: 'Artificial Intelligence' },
      { name: 'Large Language Models' },
      { name: 'Machine Learning' },
      { name: 'Computer Vision' },
      { name: 'Speech Recognition' },
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
