export const CONTACT = {
  email: 'contact@builtbyd3v.com',
  github: 'https://github.com/builtbyd3v',
  x: 'https://x.com/builtbydev',
  linkedin: 'https://www.linkedin.com/in/builtbydev',
  resume: '/resume-standard.pdf',
  location: 'Gainesville, FL',
}

export type Skill = {
  name: string
  slug?: string
}
export type SkillGroup = { label: string; items: Skill[] }

export type Media = {
  src: string
  width: number
  height: number
  alt: string
  // Where a picture links to; a video plays in place instead.
  href?: string
  caption: string
  youtube?: string
  // Self-hosted video file; src is its poster.
  video?: string
  // Animated version, shown only when the visitor allows motion.
  motion?: string
}

export type Project = {
  title: string
  href: string
  link: string
  date: string
  awards?: string[]
  event?: string
  context: string
  fig: string
  figLabel: string
  stack: Skill[]
  points: string[]
  media?: Media
}

export const projects: Project[] = [
  {
    title: 'Albie',
    href: 'https://github.com/builtbyd3v/Albie',
    link: 'GitHub repo',
    date: 'Oct 2026',
    awards: ['1st Place Overall', 'MLH Best Open Source'],
    event: 'Gator Hack V, Oct 2026',
    context: 'Team of 5, built with Claude Code and Codex',
    fig: '10% → 90%',
    figLabel: 'natural-speech accuracy, zero missed turns',
    stack: [
      { name: 'Python', slug: 'python' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'Claude Agent SDK', slug: 'claude' },
      { name: 'Grok Realtime API', slug: 'x' },
      { name: 'WebRTC', slug: 'webrtc' },
      { name: 'Unity', slug: 'unity' },
    ],
    media: {
      src: '/projects/albie.jpg',
      width: 1280,
      height: 720,
      alt: 'Albie demo video: the gator mascot on a turntable above the word Albie',
      caption: 'Demo video, 3 min',
      youtube: '28D1QIcsdzI',
    },
    points: [
      'Designed the voice architecture of a Meta Quest 3 AI coding assistant: a FastAPI hub streams mic audio to Grok’s realtime speech API and hands code work to Claude Agent SDK agents. Authored 53 of 85 merged PRs.',
      'Raised natural-speech accuracy from 10% to about 90% with zero missed turns by building a simulated headset and a Claude-judged eval harness (2,339 scored turns on 3 parallel hubs), then fixing barge-in and turn-taking.',
      'Built a 60-tool registry served to Grok as function calls and to Claude as an in-process MCP server, plus a proactive watcher that speaks up on code errors, crashes, and overfitting.',
      'Streamed VS Code to the headset over WebRTC; built the VS Code extension the agent drives (calls 0.3–1.1 s to <0.1 s).',
    ],
  },
  {
    title: 'samehere.dev',
    href: 'https://samehere.dev',
    link: 'samehere.dev',
    date: 'Jun 2026–Present',
    context: 'Solo project, built with Claude Code, launching Nov 2026',
    fig: '4.5 s → 1 s',
    figLabel: 'uncached profile-card render on Vercel',
    stack: [
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'React', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Supabase', slug: 'supabase' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
      { name: 'Apple Wallet', slug: 'apple' },
    ],
    media: {
      src: '/projects/samehere-demo.jpg',
      width: 1280,
      height: 720,
      alt: 'samehere.dev demo: a profile card next to Devpost and GitHub stats',
      video: '/projects/samehere-demo.mp4',
      caption: 'Demo video',
    },
    points: [
      'Solo-building a profile site where CS students find hackathon teammates; every stat is counted from real data (Devpost-verified prizes, shipped projects, GitHub contributions), never typed in.',
      'Each profile renders a FIFA-style card as a Discord/X link preview, an image, and an Apple Wallet pass with a QR code; cut the card’s uncached render on Vercel from 4.5 s to about 1 s by drawing its heatmap as one SVG.',
    ],
  },
  {
    title: 'checkwith.us',
    href: 'https://checkwith.us',
    link: 'checkwith.us',
    date: 'Oct 2026',
    context: 'SwampHacks XII, team lead of 4, built with Claude Code and Codex',
    fig: '96%',
    figLabel: 'of scam texts caught at a 2.4% false-alarm rate, 884 real texts',
    stack: [
      { name: 'Swift', slug: 'swift' },
      { name: 'SwiftUI', slug: 'swift' },
      { name: 'Core ML', slug: 'apple' },
      { name: 'PyTorch', slug: 'pytorch' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'PostgreSQL', slug: 'postgresql' },
    ],
    media: {
      src: '/projects/checkwith.jpg',
      width: 1280,
      height: 720,
      alt: 'checkwith.us demo video: two iPhones, one saying You are safe and one holding a $500 gift card payment for family approval',
      caption: 'Demo video, SwampHacks XII',
      youtube: '8C6eN3GvzcQ',
    },
    points: [
      'Led a 4-person team building an iPhone app that protects older adults from scams: it filters scam texts on device, labels scam calls, and holds risky payments (gift cards, crypto, new payees) until family approves with Face ID.',
      'Trained an on-device scam-text classifier; when a 67 MB DistilBERT crashed iOS’s Message Filter, shipped a 1 MB n-gram model that catches 96% of scams at a 2.4% false-alarm rate on 884 real texts, with leak-free splits.',
      'Shipped the iPhone apps and Message Filter and Call Directory extensions; designed the Auth0/Postgres backend.',
    ],
  },
  {
    title: 'StepSafe',
    href: 'https://github.com/xvedara/shellhacks-2026',
    link: 'GitHub repo',
    date: 'Sep 2026',
    context: 'ShellHacks 2026, built with Claude Code, Cursor, and Grok Bot',
    fig: '36 h',
    figLabel: 'from idea to a working head-mounted app',
    stack: [
      { name: 'Swift', slug: 'swift' },
      { name: 'ARKit', slug: 'apple' },
      { name: 'YOLO11s', slug: 'ultralytics' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'MongoDB', slug: 'mongodb' },
    ],
    media: {
      src: '/projects/stepsafe.jpg',
      width: 1280,
      height: 720,
      alt: 'StepSafe demo video: glasses send a hazard to Gemini, which names it, and MongoDB Atlas saves the pin',
      caption: 'Demo video, with segmentation and detection',
      youtube: '-fN7fE2AX5Y',
    },
    points: [
      'Conceived and co-built in 36 hours a head-mounted iPhone app that uses LiDAR depth and on-device object detection to warn blind and low-vision pedestrians about obstacles, drop-offs, and fast-approaching objects.',
      'Designed the iOS app; shipped a live hazard map whose API merges nearby reports and labels them with an LLM.',
    ],
  },
]

export const openSource: Project[] = [
  {
    title: 'nodeterm',
    href: 'https://github.com/eneskirca/nodeterm',
    link: 'GitHub repo',
    date: 'Oct 2026',
    context:
      'A node-based terminal manager for AI coding agents. 5 merged PRs (#1128, #1279, #1284, #1285, #1286), built with Claude Code.',
    fig: '9x',
    figLabel: 'faster macOS dictation, 5.97 s to 0.64 s',
    stack: [
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Electron', slug: 'electron' },
      { name: 'whisper.cpp' },
    ],
    media: {
      src: '/projects/nodeterm.jpg',
      width: 800,
      height: 450,
      alt: 'nodeterm demo: a Claude Code session running inside a terminal node on the canvas',
      href: 'https://github.com/eneskirca/nodeterm',
      caption: 'Dictation demo from the nodeterm README',
      motion: '/projects/nodeterm-dictation.webp',
    },
    points: [
      'Cut macOS dictation time 9x (5.97 s to 0.64 s) by tracing a silent CPU fallback to Metal shaders hidden in app.asar.',
      'Fixed a speech-engine crash (4 of 4 runs) from uninitialized whisper.cpp params by patching the native binding.',
      'Raised Liquid Glass text contrast from about 1:1 to at least 3:1 at every transparency level, with no frame-time cost.',
      'Added Cursor’s agent CLI as a built-in agent with live status, usage meters, chat, resume, and permission modes.',
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
    detail: 'Service Leader, Gainesville, FL',
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
    detail: 'Software Engineering Program, Honors in WEB103 and AI110',
    period: 'Jun 2026–Aug 2026',
    points: [
      'WEB103 Advanced Web Development (Honors): full-stack React, REST APIs, PostgreSQL, deployment, PR review.',
      'AI110 Foundations of AI Engineering (Honors): prompt engineering and LLM API integration, with AI ethics and evaluation.',
      'TIP101 Technical Interview Prep: data structures and algorithms, timed problem solving, technical communication.',
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Python', slug: 'python' },
      { name: 'Swift', slug: 'swift' },
      { name: 'SQL', slug: 'postgresql' },
      { name: 'HTML', slug: 'html5' },
      { name: 'CSS', slug: 'css' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'SwiftUI', slug: 'swift' },
      { name: 'Core ML', slug: 'apple' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
    ],
  },
  {
    label: 'AI development',
    items: [
      { name: 'AI Agents' },
      { name: 'Claude Code', slug: 'claude' },
      { name: 'Codex' },
      { name: 'Cursor', slug: 'cursor' },
      { name: 'Claude Agent SDK', slug: 'claude' },
      { name: 'MCP', slug: 'modelcontextprotocol' },
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
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'Supabase', slug: 'supabase' },
      { name: 'Vercel', slug: 'vercel' },
    ],
  },
]
