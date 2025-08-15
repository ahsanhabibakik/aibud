import { PortfolioProduct, CaseStudy, IntegrationPartner } from '@/types/portfolio';

export const portfolioProducts: PortfolioProduct[] = [
  // Flagship
  {
    id: 'agent-gg',
    name: 'Agent GG',
    category: 'Flagship',
    status: 'Live',
    description: 'Your decision co-pilot for founders and small teams; lowers cognitive load and keeps focus on revenue.',
    capabilities: ['Focus mode', 'Smart briefs', 'Team-ready'],
    technologies: ['Next.js', 'AI/ML', 'Calendar API', 'ClickUp API'],
    metrics: {
      value: '40% faster',
      label: 'decision making'
    },
    screenshots: {
      thumbnail: '/images/portfolio/agent-gg-thumb.jpg',
      desktop: '/images/portfolio/agent-gg-desktop.jpg'
    },
    links: {
      demo: '/agentgg',
      live: 'https://aibud.ca/agentgg'
    },
    featured: true,
    createdAt: new Date('2024-01-15'),
    emoji: '🤖'
  },
  
  // Marketing / Planning / Content
  {
    id: 'doc-director',
    name: 'DocDirector',
    category: 'Marketing',
    status: 'Live',
    description: 'Turns scattered docs into coordinated launch plans across ops, marketing, and sales.',
    capabilities: ['Templates', 'Approvals', 'Roadmaps'],
    technologies: ['React', 'Node.js', 'Document AI'],
    metrics: {
      value: '60% faster',
      label: 'launch coordination'
    },
    screenshots: {
      thumbnail: '/images/portfolio/docdirector-thumb.jpg'
    },
    links: {
      demo: 'https://docdirector.aibud.ca',
      live: 'https://dd.aibud.ca'
    },
    featured: true,
    createdAt: new Date('2024-02-20'),
    emoji: '📋'
  },
  
  {
    id: 'creator-compass',
    name: 'Creator Compass',
    category: 'Marketing',
    status: 'Live',
    description: 'Plan content sprints, channels, and briefs in one place.',
    capabilities: ['Calendar', 'Ideation', 'Briefs'],
    technologies: ['Next.js', 'Content API', 'Scheduling'],
    screenshots: {
      thumbnail: '/images/portfolio/creator-compass-thumb.jpg'
    },
    links: {},
    featured: false,
    createdAt: new Date('2024-03-10'),
    emoji: '🧭'
  },
  
  {
    id: 'mllm-chatbots',
    name: 'MLLM Chatbots',
    category: 'Marketing',
    status: 'Beta',
    description: 'Domain-aware assistants for content and research (OPMMA, CBA).',
    capabilities: ['Drafts', 'Research', 'Tone control'],
    technologies: ['LLM', 'RAG', 'Vector DB'],
    screenshots: {
      thumbnail: '/images/portfolio/mllm-thumb.jpg'
    },
    links: {},
    featured: false,
    createdAt: new Date('2024-04-05'),
    emoji: '💬'
  },
  
  {
    id: 'custom-report-prototype',
    name: 'Custom Report Generator',
    category: 'Marketing',
    status: 'Beta',
    description: 'Generates personalized reports from short intake forms.',
    capabilities: ['Form → Score', 'Insights', 'Email follow-up'],
    technologies: ['AI Generation', 'PDF Export', 'Email API'],
    screenshots: {
      thumbnail: '/images/portfolio/report-generator-thumb.jpg'
    },
    links: {},
    featured: false,
    createdAt: new Date('2024-05-15'),
    emoji: '📊'
  },
  
  // Operations, Sales & Productivity
  {
    id: 'ai-buddy-website',
    name: 'AI Buddy Website',
    category: 'Operations',
    status: 'Live',
    description: 'Marketing hub showcasing services, process, and integrations.',
    capabilities: ['Waitlist', 'Integrations', 'Case studies'],
    technologies: ['Next.js', 'Tailwind', 'Framer Motion'],
    metrics: {
      value: '300%+',
      label: 'engagement increase'
    },
    screenshots: {
      thumbnail: '/images/portfolio/aibud-website-thumb.jpg'
    },
    links: {
      live: 'https://aibud.ca'
    },
    featured: true,
    createdAt: new Date('2024-01-01'),
    emoji: '🌐'
  },
  
  {
    id: 'sheet-to-dashboard',
    name: 'Sheet to Dashboard',
    category: 'Operations',
    status: 'Live',
    description: 'Turns spreadsheets into shareable dashboards in minutes.',
    capabilities: ['Auto-refresh', 'KPI cards', 'Export'],
    technologies: ['Google Sheets API', 'Chart.js', 'Real-time'],
    screenshots: {
      thumbnail: '/images/portfolio/sheet-dashboard-thumb.jpg'
    },
    links: {},
    featured: false,
    createdAt: new Date('2024-03-25'),
    emoji: '📈'
  },
  
  {
    id: 'slack-quickbooks',
    name: 'Slack → QuickBooks',
    category: 'Operations',
    status: 'Beta',
    description: 'Captures expenses and invoices from Slack and syncs to books.',
    capabilities: ['Receipt parsing', 'Sync', 'Alerts'],
    technologies: ['Slack API', 'QuickBooks API', 'OCR'],
    screenshots: {
      thumbnail: '/images/portfolio/slack-qb-thumb.jpg'
    },
    links: {},
    featured: false,
    createdAt: new Date('2024-04-20'),
    emoji: '💰'
  },
  
  // Mental Health
  {
    id: 'ease-mental-support',
    name: 'Ease - Mental Support',
    category: 'Mental Health',
    status: 'Live',
    description: 'A gentle companion for journaling and coping tools.',
    capabilities: ['Journals', 'Coping plans', 'Resources'],
    technologies: ['React', 'Emotion AI', 'Privacy-first'],
    screenshots: {
      thumbnail: '/images/portfolio/ease-thumb.jpg'
    },
    links: {
      demo: 'https://easeyourmind.vercel.app'
    },
    featured: true,
    createdAt: new Date('2024-02-14'),
    emoji: '🌱'
  },
  
  {
    id: 'mothers-care',
    name: "Mother's Care",
    category: 'Mental Health',
    status: 'Coming Soon',
    description: 'Guided check-ins and resources for caregivers.',
    capabilities: ['Daily support', 'Resource hub', 'Private'],
    technologies: ['Mobile-first', 'Push notifications', 'Secure'],
    screenshots: {
      thumbnail: '/images/portfolio/mothers-care-thumb.jpg'
    },
    links: {},
    featured: false,
    createdAt: new Date('2024-06-01'),
    emoji: '👩‍👧‍👦'
  },
  
  // Dev/Infra
  {
    id: 'k8s-cluster',
    name: "k8s Production Cluster",
    category: 'Dev/Infra',
    status: 'Live',
    description: 'Production-ready environment for scaling agents and automations.',
    capabilities: ['Autoscale', 'Secure', 'Observability'],
    technologies: ['Kubernetes', 'Docker', 'Monitoring'],
    screenshots: {
      thumbnail: '/images/portfolio/k8s-thumb.jpg'
    },
    links: {},
    featured: false,
    createdAt: new Date('2024-01-30'),
    emoji: '🚀'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'productivity-boost',
    title: 'Productivity Transformation',
    client: 'Tech Startup',
    outcome: '42% reduction in manual ops time',
    summary: 'Implemented Agent GG with custom workflow automation, reducing repetitive tasks and improving team focus on high-value activities. Integration with ClickUp and calendar systems streamlined daily operations.',
    componentsUsed: ['Agent GG', 'ClickUp Integration', 'Calendar Sync', 'Smart Briefings'],
    metrics: [
      { value: '42%', label: 'Time saved' },
      { value: '3.2x', label: 'Task completion' },
      { value: '89%', label: 'Team satisfaction' }
    ],
    link: '#'
  },
  {
    id: 'content-workflow',
    title: 'Content Operations Overhaul',
    client: 'Marketing Agency',
    outcome: '60% faster content delivery',
    summary: 'Deployed Creator Compass and DocDirector to streamline content planning and approval workflows. Automated brief generation and approval tracking reduced bottlenecks significantly.',
    componentsUsed: ['Creator Compass', 'DocDirector', 'Content Templates', 'Approval Automation'],
    metrics: [
      { value: '60%', label: 'Faster delivery' },
      { value: '90%', label: 'On-time projects' },
      { value: '4.8/5', label: 'Client satisfaction' }
    ],
    link: '#'
  },
  {
    id: 'mental-health-support',
    title: 'Employee Wellbeing Program',
    client: 'Remote Company',
    outcome: '78% improvement in team wellbeing scores',
    summary: 'Integrated Ease mental support tools into daily workflows, providing employees with accessible coping resources and mood tracking capabilities.',
    componentsUsed: ['Ease Platform', 'Daily Check-ins', 'Resource Library', 'Privacy Controls'],
    metrics: [
      { value: '78%', label: 'Wellbeing improvement' },
      { value: '65%', label: 'Daily engagement' },
      { value: '23%', label: 'Reduced burnout' }
    ],
    link: '#'
  }
];

export const integrationPartners: IntegrationPartner[] = [
  { id: 'clickup', name: 'ClickUp', logo: '/images/integrations/clickup.svg', description: 'Project management and task tracking', category: 'Productivity' },
  { id: 'google-calendar', name: 'Google Calendar', logo: '/images/integrations/google-calendar.svg', description: 'Smart scheduling and time blocking', category: 'Productivity' },
  { id: 'gmail', name: 'Gmail', logo: '/images/integrations/gmail.svg', description: 'Email automation and smart responses', category: 'Communication' },
  { id: 'slack', name: 'Slack', logo: '/images/integrations/slack.svg', description: 'Team communication and notifications', category: 'Communication' },
  { id: 'stripe', name: 'Stripe', logo: '/images/integrations/stripe.svg', description: 'Payment processing and subscriptions', category: 'Finance' },
  { id: 'quickbooks', name: 'QuickBooks', logo: '/images/integrations/quickbooks.svg', description: 'Automated bookkeeping and expenses', category: 'Finance' },
  { id: 'telegram', name: 'Telegram', logo: '/images/integrations/telegram.svg', description: 'Secure messaging and bot integration', category: 'Communication' },
  { id: 'claude', name: 'Claude', logo: '/images/integrations/claude.svg', description: 'Advanced AI assistance and analysis', category: 'AI' },
  { id: 'chatgpt', name: 'ChatGPT', logo: '/images/integrations/chatgpt.svg', description: 'Conversational AI and content generation', category: 'AI' },
  { id: 'brevo', name: 'Brevo', logo: '/images/integrations/brevo.svg', description: 'Email marketing and automation', category: 'Marketing' }
];

export const portfolioCategories = [
  'All',
  'Flagship',
  'Marketing',
  'Operations', 
  'Reporting',
  'Mental Health',
  'Dev/Infra'
] as const;