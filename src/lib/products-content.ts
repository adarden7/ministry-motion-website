/**
 * Individual Product Page Content
 * Detailed content for product detail pages
 */

import {
  Mic2,
  Calendar,
  BarChart3,
  BookOpen,
  Video,
  Music,
  Check,
  TrendingUp,
  Sparkles,
  Users,
  Zap,
  Target,
  Shield,
  type LucideIcon,
} from 'lucide-react';

export interface ProductFeatureDetail {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductBenefit {
  stat: string;
  label: string;
}

export interface ProductContent {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage?: string;
  badges: string[];
  benefits: ProductBenefit[];
  features: ProductFeatureDetail[];
  howItWorks: {
    title: string;
    description: string;
  }[];
  forWhom: {
    role: string;
    benefit: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
}

export const products: ProductContent[] = [
  {
    slug: 'agent-council',
    title: 'The Agent Council',
    tagline: '15 specialized AI agents automating your ministry 24/7',
    description:
      'Replace your siloed 2010s software stack with the Agent Council. Ministry Motion includes 15 highly-specialized AI agents—from Succession Planners to Vocal Coaches to Pastoral Shepherds—working autonomously to analyze your data, identify risks, and accelerate spiritual growth.',
    badges: ['Industry First', 'Fully Autonomous', 'Mission Critical'],
    benefits: [
      { stat: '15', label: 'Specialized AI agents' },
      { stat: '25+', label: 'Admin hours saved weekly' },
      { stat: '$16k', label: 'Average annual savings' },
    ],
    features: [
      {
        title: 'The Shepherd',
        description:
          'Monitors volunteer schedules, service patterns, and event attendance to automatically flag members at risk of burnout before they quit.',
        icon: Users,
      },
      {
        title: 'The Liturgist',
        description:
          'Plans your services. Input your sermon theme, and the Liturgist recommends songs based on theology, congregation familiarity, and your team\'s specific vocal ranges.',
        icon: Target,
      },
      {
        title: 'The Succession Planner',
        description:
          'Never have a leadership gap again. The Succession Planner constantly analyzes your spiritual gifts database to build a multi-generational bench of future leaders.',
        icon: TrendingUp,
      },
      {
        title: 'The Virtuoso Coach',
        description:
          'Provides real-time, professional-grade vocal coaching to every singer on your team. It analyzes breath control, pitch, and timbre automatically.',
        icon: Mic2,
      },
      {
        title: 'The Analyst',
        description:
          'Watches your service recordings and generates a scorecard. It tracks who sang, which songs resonated, and whether your transitions were smooth.',
        icon: BarChart3,
      },
      {
        title: 'The Matchmaker',
        description:
          'Uses a 768-dimensional vector database to instantly match a member\'s spiritual gifts, personality, and availability with immediate ministry needs.',
        icon: Sparkles,
      },
    ],
    howItWorks: [
      {
        title: 'Connect Your Data',
        description:
          'Import your people, songs, and schedules. The Agent Council immediately gets to work analyzing your baseline.',
      },
      {
        title: 'Set Your Values',
        description:
          'Define your church\'s specific theological values and mission statement. The agents align all recommendations to your unique DNA.',
      },
      {
        title: 'Review Insights',
        description:
          'Log in to your daily dashboard. Instead of hunting for information, the agents present you with actionable insights and pre-drafted workflows.',
      },
      {
        title: 'Take Action',
        description:
          'Approve or modify the agents\' recommendations with a single click. Let the software handle the emails, scheduling, and follow-ups.',
      },
    ],
    forWhom: [
      { role: 'Executive Pastors', benefit: 'Consolidate 6+ disconnected tools into a single, intelligent platform' },
      { role: 'Worship Directors', benefit: 'Save 15+ hours a week on scheduling, planning, and chart management' },
      { role: 'Volunteer Coordinators', benefit: 'Instantly find the right person for the right role without begging' },
      { role: 'Senior Pastors', benefit: 'Get peace of mind knowing no one is slipping through the cracks' },
    ],
    ctaTitle: 'Hire Your AI Staff',
    ctaDescription:
      'Stop paying for legacy file cabinets. Start experiencing ministry intelligence.',
  },
  {
    slug: 'discipleship',
    title: 'Discipleship Intelligence',
    tagline: 'Finally track the spiritual journey: Connect → Grow → Serve → Go',
    description:
      'Did you know 39% of Christians in your church lack discipleship? Ministry Motion is the first platform designed to track the actual spiritual journey. By abandoning the "event-attendance" model, we use data to ensure every single member is being guided toward spiritual maturity.',
    badges: ['Data-Driven', 'Retention Focus', 'Burnout Prevention'],
    benefits: [
      { stat: '39%', label: 'Of Christians lack discipleship' },
      { stat: '2.3x', label: 'More giving from volunteers' },
      { stat: '25%', label: 'Reduction in attrition' },
    ],
    features: [
      {
        title: 'The Simple Church Pipeline',
        description:
          'Automatically organize your entire congregation into four distinct stages: Connect, Grow, Serve, and Go. See exactly where congestion is happening.',
        icon: Target,
      },
      {
        title: 'Burnout Prevention Radar',
        description:
          'The Shepherd AI constantly monitors volunteer load. If someone volunteers for 15+ hours a week for 8 consecutive weeks, leaders are alerted before they quit.',
        icon: Shield,
      },
      {
        title: 'Spiritual Gifts Vector Matching',
        description:
          'When a new serving opportunity arises, AI cross-references 768 dimensions of personality, gifts, and history to recommend the perfect fit.',
        icon: Zap,
      },
      {
        title: 'Mentorship Connection',
        description:
          'Bridge generational gaps by automatically recommending mentorship pairings based on compatible life stages and spiritual gifts.',
        icon: Users,
      },
      {
        title: 'The "Ex-Boyfriend" Filter',
        description:
          'Built-in theological alignment tools ensure the content your groups consume and the songs they sing have a high "God Quotient."',
        icon: Check,
      },
      {
        title: 'Emotional Wake Tracking',
        description:
          'Leaders leave an emotional wake. Track the subtle health indicators of a ministry team to ensure your leaders are shepherding, not just managing.',
        icon: Sparkles,
      },
    ],
    howItWorks: [
      {
        title: 'Initial Assessment',
        description:
          'Members complete a deep but engaging Spiritual Gifts Assessment (SGA) that maps their unique profile into the system.',
      },
      {
        title: 'Pipeline Placement',
        description:
          'AI categorizes every member into their current stage of the Connect → Grow → Serve → Go framework.',
      },
      {
        title: 'Automated Nudging',
        description:
          'When a member is ready to move to the next stage, the system prompts them and their leader with the exact next step to take.',
      },
      {
        title: 'Retention Analysis',
        description:
          'Watch your retention numbers grow as members shift from being passive spectators to highly engaged, deeply known participants.',
      },
    ],
    forWhom: [
      { role: 'Discipleship Pastors', benefit: 'Get complete visibility into the spiritual health of your flock' },
      { role: 'Small Group Leaders', benefit: 'Know exactly who needs encouragement and who is ready to lead' },
      { role: 'Executive Pastors', benefit: 'Correlate deep engagement with increased organizational health and giving' },
      { role: 'Church Members', benefit: 'Experience a church that actually knows them and cares about their growth' },
    ],
    ctaTitle: 'Stop Guessing. Start Discipling.',
    ctaDescription:
      'Ensure no member in your church slips through the cracks ever again.',
  },
  {
    slug: 'analytics',
    title: 'Service Analytics',
    tagline: 'Know what actually happened—not just what was planned',
    description:
      'Ministry Motion is the only platform that analyzes your actual services. Upload YouTube recordings and AI automatically segments, identifies songs, recognizes singers, and scores performance. Finally see the full picture.',
    badges: ['Industry First', 'AI Video Analysis', 'Unique Insights'],
    benefits: [
      { stat: '100%', label: 'Service visibility' },
      { stat: 'Real-time', label: 'Performance feedback' },
      { stat: '0', label: 'Competitors with this feature' },
    ],
    features: [
      {
        title: 'AI Video Analysis',
        description:
          'Upload your service recording from YouTube, Vimeo, or local files. AI automatically segments and analyzes every moment.',
        icon: Video,
      },
      {
        title: 'Automatic Song Detection',
        description:
          'AI identifies each song in your service, when it started, and how long it ran. Compare to your plan.',
        icon: Music,
      },
      {
        title: 'Voice Identification',
        description:
          'The system recognizes individual singers and tracks their performance throughout the service.',
        icon: Mic2,
      },
      {
        title: 'Theme Alignment Scoring',
        description:
          'AI scores how well the actual service aligned with your intended theme and scripture.',
        icon: Target,
      },
      {
        title: 'Transition Quality Analysis',
        description:
          'See how smooth your transitions were. Identify where flow broke down and improve next time.',
        icon: Zap,
      },
      {
        title: 'Historical Trends',
        description:
          'Track patterns over weeks and months. See which songs resonate, which transitions work, what\'s improving.',
        icon: TrendingUp,
      },
    ],
    howItWorks: [
      {
        title: 'Upload Your Recording',
        description:
          'Connect your YouTube channel or upload directly. AI processes the video in the background.',
      },
      {
        title: 'Automatic Segmentation',
        description:
          'AI identifies songs, transitions, speaking segments, and more. No manual tagging required.',
      },
      {
        title: 'Review Insights',
        description:
          'See a complete breakdown of your service: timing, performance scores, and areas for improvement.',
      },
      {
        title: 'Compare to Plan',
        description:
          'View plan vs. actual side by side. Understand variance and optimize future planning.',
      },
    ],
    forWhom: [
      { role: 'Worship Directors', benefit: 'Finally see how services actually went, not just what you planned' },
      { role: 'Pastors', benefit: 'Get data-driven insights into service effectiveness' },
      { role: 'Denominational Leaders', benefit: 'Benchmark service quality across churches' },
      { role: 'Media Teams', benefit: 'Understand timing and flow to improve production' },
    ],
    ctaTitle: 'See the Full Picture',
    ctaDescription:
      'Stop guessing about service quality. Get AI-powered insights from every service.',
  },
  {
    slug: 'vocal-coaching',
    title: 'Vocal Sandbox & Biometrics',
    tagline: ' Gamified, biomechanic vocal training embedded in your workflow',
    description:
      'Ministry Motion brings professional vocal coaching to every member of your team through the Virtuoso Agent. Real-time pitch analysis, breath control feedback, biometric health monitoring, and SATB isolated rehearsal tracks—all unified in one platform.',
    badges: ['Real-Time Feedback', 'SATB Isolation', 'Biometric Tracking'],
    benefits: [
      { stat: '1000+', label: 'Vocal dimensions analyzed' },
      { stat: 'Instant', label: 'SATB part generation' },
      { stat: '73%', label: 'Average improvement in 90 days' },
    ],
    features: [
      {
        title: 'The Sing-Along Player',
        description:
          'A gamified interface (like Yousician) that tracks a singer\'s pitch, rhythm, and timing in real-time as they practice their exact Sunday setlist.',
        icon: Mic2,
      },
      {
        title: 'Instant SATB Generation',
        description:
          'Upload an MP3 and our AI instantly separates it into completely isolated Soprano, Alto, Tenor, and Bass rehearsal tracks.',
        icon: Music,
      },
      {
        title: 'Cepstral Peak Prominence (CPPS)',
        description:
          'The "Check Engine Light" for vocal cords. We analyze acoustic tissue distress to prevent vocal nodules and strain before they happen.',
        icon: Shield,
      },
      {
        title: 'The "Self-to-Other" Blend Ratio',
        description:
          'AI analyzes the ensemble mix and trains singers how to suppress their solo instincts to achieve a perfect, unified choir blend.',
        icon: Target,
      },
      {
        title: 'Vocal Digital Twins',
        description:
          'Using Generative AI to map a singer\'s exact vocal profile, allowing leaders to hear how an arrangement will sound before rehearsal even begins.',
        icon: Sparkles,
      },
      {
        title: '5-Stage Singer Pathway',
        description:
          'A rigid, proven curriculum that safely moves a singer from the foundational Choir level up to the primary Praise Team leadership.',
        icon: TrendingUp,
      },
    ],
    howItWorks: [
      {
        title: 'Assign the Setlist',
        description:
          'The Worship Director publishes the setlist. The platform automatically generates custom rehearsal tracks for every singer based on their assigned vocal part.',
      },
      {
        title: 'Gamified Practice',
        description:
          'Singers open the app at home and sing into their phones. The AI grades their pitch accuracy and rhythm in real-time against the canonical arrangement.',
      },
      {
        title: 'Biometric Feedback',
        description:
          'If the AI detects vocal fry, dangerous jitter, or poor breath support, it immediately prescribes localized vocal exercises to fix the issue.',
      },
      {
        title: 'Rehearsal Readiness',
        description:
          'When Friday night rehearsal begins, the Worship Director looks at the dashboard and knows exactly who learned their parts and who is struggling.',
      },
    ],
    forWhom: [
      { role: 'Praise Leaders', benefit: 'Arrive at rehearsal knowing your team already knows the music' },
      { role: 'Vocalists', benefit: 'Get professional, private vocal coaching directly on your smartphone' },
      { role: 'Audio Engineers', benefit: 'Experience perfectly blended vocals before you even touch the EQ' },
      { role: 'Worship Directors', benefit: 'Protect your team from burnout and vocal damage with medical-grade analytics' },
    ],
    ctaTitle: 'Transform Your Sound',
    ctaDescription:
      'Stop wasting rehearsal time plunking out parts on a piano. Deploy the Virtuoso Coach today.',
  },
];

// Helper functions
export function getProductBySlug(slug: string): ProductContent | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
