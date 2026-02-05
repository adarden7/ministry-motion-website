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
    slug: 'vocal-coaching',
    title: 'AI Vocal Coaching',
    tagline: 'World-class vocal training for every singer—powered by AI',
    description:
      'Ministry Motion brings professional vocal coaching to every member of your team. Real-time pitch analysis, breath control feedback, vocal health monitoring, and personalized improvement paths—all without the cost of private lessons.',
    badges: ['Industry First', 'AI-Powered', 'No Extra Cost'],
    benefits: [
      { stat: '1000+', label: 'Vocal dimensions analyzed' },
      { stat: '73%', label: 'Average improvement in 90 days' },
      { stat: '$0', label: 'Additional cost (included in Pro)' },
    ],
    features: [
      {
        title: 'Real-Time Pitch Analysis',
        description:
          'As you sing, AI analyzes your pitch accuracy across 1000+ dimensions. See exactly where you drift sharp or flat, and track improvement over time.',
        icon: Mic2,
      },
      {
        title: 'Breath Control Feedback',
        description:
          'Learn to control your breath for better tone and endurance. AI detects breath patterns and provides exercises tailored to your needs.',
        icon: Sparkles,
      },
      {
        title: 'Vocal Health Monitoring',
        description:
          'Detect vocal strain before it becomes damage. The AI monitors vocal fatigue indicators and recommends rest or technique adjustments.',
        icon: Shield,
      },
      {
        title: 'Personalized Exercise Library',
        description:
          'Based on your vocal profile and goals, receive custom warm-ups and exercises. Practice the right things, not generic scales.',
        icon: Target,
      },
      {
        title: 'Progress Tracking Dashboard',
        description:
          'See your improvement over weeks and months. Compare recordings, track metrics, and celebrate milestones.',
        icon: TrendingUp,
      },
      {
        title: 'AI Avatar Coaching',
        description:
          'HeyGen-powered AI coaches provide video feedback and instruction, making remote coaching feel personal.',
        icon: Video,
      },
    ],
    howItWorks: [
      {
        title: 'Record Your Practice',
        description:
          'Use the mobile app or web recorder to capture your singing. Practice with tracks or a cappella.',
      },
      {
        title: 'Get Instant Feedback',
        description:
          'AI analyzes your recording in seconds. See pitch accuracy, tone quality, and areas for improvement.',
      },
      {
        title: 'Follow Your Plan',
        description:
          'Receive personalized exercises based on your analysis. Practice what matters most for your development.',
      },
      {
        title: 'Track Progress',
        description:
          'Watch your scores improve over time. Share progress with your worship leader or keep it private.',
      },
    ],
    forWhom: [
      { role: 'Background Vocalists', benefit: 'Develop confidence and consistency without expensive lessons' },
      { role: 'Worship Leaders', benefit: 'Track your entire team\'s development in one dashboard' },
      { role: 'New Singers', benefit: 'Get started with a structured path from beginner to confident' },
      { role: 'Experienced Vocalists', benefit: 'Fine-tune your craft with objective, data-driven feedback' },
    ],
    ctaTitle: 'Start Your Vocal Journey',
    ctaDescription:
      'Every singer deserves professional feedback. Start developing your gift today.',
  },
  {
    slug: 'service-planning',
    title: 'AI-Powered Service Planning',
    tagline: 'Build services that flow—with intelligent recommendations',
    description:
      'Ministry Motion transforms service planning from a chore to a joy. AI recommends songs based on your sermon theme, scores theological alignment, and analyzes flow. Plan services that move people.',
    badges: ['AI-Enhanced', 'Drag & Drop', 'CCLI Integration'],
    benefits: [
      { stat: '4hrs', label: 'Saved weekly on planning' },
      { stat: '100%', label: 'Theme alignment visibility' },
      { stat: '0', label: 'Per-song fees' },
    ],
    features: [
      {
        title: 'AI Song Recommendations',
        description:
          'Enter your sermon theme or scripture, and AI suggests songs that align theologically and emotionally. Filter by key, tempo, and team capability.',
        icon: Sparkles,
      },
      {
        title: 'Drag-and-Drop Builder',
        description:
          'Build services visually. Drag songs, videos, and transitions into place. See total timing and flow at a glance.',
        icon: Calendar,
      },
      {
        title: 'Theological Alignment Scoring',
        description:
          'AI scores how well your song selections align with your theme. Ensure consistency across your entire service.',
        icon: Target,
      },
      {
        title: 'Arrangement Management',
        description:
          'Store multiple arrangements per song. Automatically suggest the right arrangement based on your team that week.',
        icon: Music,
      },
      {
        title: 'Team Capability Matching',
        description:
          'AI knows your team\'s vocal ranges and skill levels. Recommendations account for who\'s scheduled.',
        icon: Users,
      },
      {
        title: 'CCLI Integration',
        description:
          'Import from CCLI SongSelect. Track reporting automatically. Stay compliant without extra work.',
        icon: Check,
      },
    ],
    howItWorks: [
      {
        title: 'Enter Your Theme',
        description:
          'Start with a scripture, sermon title, or theme. AI begins generating recommendations immediately.',
      },
      {
        title: 'Build Your Service',
        description:
          'Drag and drop songs, readings, and elements. AI optimizes flow and suggests transitions.',
      },
      {
        title: 'Assign Your Team',
        description:
          'Schedule vocalists and musicians. AI alerts if someone is unavailable or the song is outside their range.',
      },
      {
        title: 'Publish and Notify',
        description:
          'With one click, notify your team. They get their parts, tracks, and all the details they need.',
      },
    ],
    forWhom: [
      { role: 'Worship Directors', benefit: 'Plan services faster with AI-powered recommendations' },
      { role: 'Pastors', benefit: 'Ensure theological consistency across every service' },
      { role: 'Music Directors', benefit: 'Manage arrangements and keys across your library' },
      { role: 'Service Planners', benefit: 'Build beautiful, flowing services with drag-and-drop ease' },
    ],
    ctaTitle: 'Plan Better Services',
    ctaDescription:
      'Stop spending hours on planning. Let AI help you build services that transform.',
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
    slug: 'learning',
    title: 'Learning Hub',
    tagline: '18+ courses for every skill level—from volunteer to worship leader',
    description:
      'Ministry Motion\'s Learning Hub provides structured training paths for every role in your ministry. From vocal technique to worship theology, members grow through courses that actually prepare them for leadership.',
    badges: ['18+ Courses', 'Certifications', 'Ministry Pathways'],
    benefits: [
      { stat: '18+', label: 'Ministry-focused courses' },
      { stat: '94%', label: 'Course completion rate' },
      { stat: 'Direct', label: 'Path to ministry roles' },
    ],
    features: [
      {
        title: 'Structured Learning Paths',
        description:
          'Courses organized into pathways: Vocal Development, Worship Leadership, Audio/Visual, and Spiritual Formation.',
        icon: Target,
      },
      {
        title: 'Video Lessons & Assessments',
        description:
          'Professional video content with quizzes and practical assessments. Know what you learned, not just what you watched.',
        icon: Video,
      },
      {
        title: 'Certificate Generation',
        description:
          'Earn certificates upon completion. Show your progress to leadership and track your development journey.',
        icon: Check,
      },
      {
        title: 'Study Groups',
        description:
          'Join cohorts going through courses together. Learn alongside others and build community.',
        icon: Users,
      },
      {
        title: 'Mentor Matching',
        description:
          'Connect with experienced leaders who can guide your development beyond the courses.',
        icon: Sparkles,
      },
      {
        title: 'Ministry Qualification',
        description:
          'Course completion can directly qualify you for ministry roles. Your learning matters.',
        icon: TrendingUp,
      },
    ],
    howItWorks: [
      {
        title: 'Discover Your Path',
        description:
          'Take an assessment to identify where you are and where you want to go. Get a recommended learning path.',
      },
      {
        title: 'Complete Courses',
        description:
          'Work through video lessons at your own pace. Complete quizzes and practical assignments.',
      },
      {
        title: 'Earn Certificates',
        description:
          'Upon completion, receive certificates that demonstrate your readiness for new responsibilities.',
      },
      {
        title: 'Unlock Opportunities',
        description:
          'Your certifications connect to ministry roles. Leadership sees your qualifications automatically.',
      },
    ],
    forWhom: [
      { role: 'New Team Members', benefit: 'Get up to speed quickly with structured onboarding' },
      { role: 'Aspiring Leaders', benefit: 'Build the skills needed for leadership roles' },
      { role: 'Current Leaders', benefit: 'Continue growing and modeling lifelong learning' },
      { role: 'Ministry Directors', benefit: 'Develop your team systematically, not randomly' },
    ],
    ctaTitle: 'Start Learning Today',
    ctaDescription:
      'Invest in your growth. Join thousands developing their ministry skills.',
  },
];

// Helper functions
export function getProductBySlug(slug: string): ProductContent | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
