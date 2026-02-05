/**
 * Solutions Page Content
 * Persona-specific content for Ministry Motion solutions
 */

import {
  Mic2,
  Users,
  Calendar,
  BarChart3,
  BookOpen,
  Music,
  Video,
  Target,
  Shield,
  Layers,
  TrendingUp,
  Heart,
  MessageSquare,
  Sparkles,
  Crown,
  Building2,
  Baby,
  UserCheck,
  ClipboardCheck,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';

export interface SolutionFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SolutionTestimonial {
  quote: string;
  author: string;
  role: string;
  church: string;
}

export interface SolutionStat {
  value: string;
  label: string;
}

export interface Solution {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroTagline: string;
  painPoints: string[];
  features: SolutionFeature[];
  stats: SolutionStat[];
  testimonial?: SolutionTestimonial;
  ctaTitle: string;
  ctaDescription: string;
}

export const solutions: Solution[] = [
  {
    slug: 'worship-leaders',
    title: 'For Worship Leaders',
    subtitle: 'Lead with Confidence, Develop with Excellence',
    description: 'Ministry Motion gives you the tools to plan services, develop your team, and see what actually happened—not just what was scheduled.',
    heroTagline: 'From overwhelmed scheduler to transformational leader',
    painPoints: [
      'Spending more time on scheduling than leading',
      'No visibility into how services actually went',
      'Team members plateau with no clear development path',
      'Juggling 5+ apps for music, communication, and planning',
      'Can\'t prove ministry impact to leadership',
    ],
    features: [
      {
        title: 'AI-Powered Service Planning',
        description: 'Get song recommendations based on sermon themes, theological alignment scoring, and flow analysis. Plan services that make sense.',
        icon: Calendar,
      },
      {
        title: 'Service Video Analysis',
        description: 'Upload your service recordings and get AI analysis of what actually happened—song timing, transitions, and engagement patterns.',
        icon: Video,
      },
      {
        title: 'Team Development Dashboard',
        description: 'See every team member\'s progress across vocal skills, course completion, and ministry involvement. Know who\'s ready for more.',
        icon: TrendingUp,
      },
      {
        title: 'AI Vocal Coaching',
        description: 'Give your team professional-level vocal coaching through AI. Real-time pitch analysis, breath control feedback, and health monitoring.',
        icon: Mic2,
      },
      {
        title: 'SATB Track Generation',
        description: 'Generate practice tracks for any song. Each vocalist gets their part isolated so they can practice at home.',
        icon: Music,
      },
      {
        title: 'Unified Communications',
        description: 'One inbox for all team communication. Context-aware messaging means your worship team discussions stay with your worship team.',
        icon: MessageSquare,
      },
    ],
    stats: [
      { value: '4hrs', label: 'Saved weekly on planning' },
      { value: '73%', label: 'Team skill improvement' },
      { value: '100%', label: 'Service visibility' },
    ],
    testimonial: {
      quote: 'For the first time, I can see who\'s growing and who needs attention. I\'m finally leading, not just scheduling.',
      author: 'Sarah M.',
      role: 'Worship Director',
      church: 'Grace Community Church',
    },
    ctaTitle: 'Lead Your Team to Excellence',
    ctaDescription: 'Join worship leaders who are transforming their ministries with data-driven insights and AI-powered development.',
  },
  {
    slug: 'pastors',
    title: 'For Pastors & Church Leadership',
    subtitle: 'See Your Church\'s Spiritual Health, Not Just Attendance',
    description: 'Ministry Motion shows you who\'s actually growing in their faith, who\'s at risk of leaving, and what programs are producing real transformation.',
    heroTagline: 'From attendance counter to transformation tracker',
    painPoints: [
      'Can\'t measure discipleship—only attendance and giving',
      'Members leave without anyone noticing they were drifting',
      'No idea which programs actually produce spiritual growth',
      'Volunteer pipeline feels random, not systematic',
      'Leadership team lacks data for strategic decisions',
    ],
    features: [
      {
        title: 'Discipleship Journey Tracking',
        description: 'Follow every member through Connect → Grow → Serve → Go. See who\'s progressing and who\'s stuck at each stage.',
        icon: Target,
      },
      {
        title: 'At-Risk Member Detection',
        description: 'AI identifies members showing signs of disengagement before they leave. 43% of church leavers felt disconnected—catch them early.',
        icon: Shield,
      },
      {
        title: 'Ministry Impact Analytics',
        description: 'See which programs produce engaged members, increased giving, and volunteer activation. Fund what works.',
        icon: BarChart3,
      },
      {
        title: 'Spiritual Gifts Assessment',
        description: 'Help members discover their gifts and match them to ministry opportunities. The right people in the right roles.',
        icon: Sparkles,
      },
      {
        title: 'Leadership Development Pipeline',
        description: 'Track emerging leaders from first service to ministry leadership. Course completion becomes ministry qualification.',
        icon: Crown,
      },
      {
        title: 'Cross-Ministry Visibility',
        description: 'One dashboard shows all ministries. See how children\'s ministry feeds into youth, how youth produces worship team members.',
        icon: Layers,
      },
    ],
    stats: [
      { value: '39%', label: 'Christians aren\'t being discipled' },
      { value: '3x', label: 'More giving from engaged members' },
      { value: '43%', label: 'Of leavers felt disconnected' },
    ],
    ctaTitle: 'See Your Church\'s True Health',
    ctaDescription: 'Stop guessing about spiritual growth. Start measuring transformation.',
  },
  {
    slug: 'vocalists',
    title: 'For Worship Team Members',
    subtitle: 'Grow Your Gift. Track Your Progress. Earn Your Place.',
    description: 'Ministry Motion gives you the tools to develop your vocal skills, prepare for services, and build a track record of excellence.',
    heroTagline: 'From nervous volunteer to confident worship leader',
    painPoints: [
      'Want to improve but can\'t afford voice lessons',
      'No way to practice your specific part at home',
      'Don\'t know if you\'re actually getting better',
      'Feel unprepared when service day arrives',
      'No clear path from background vocalist to worship leader',
    ],
    features: [
      {
        title: 'Personal AI Vocal Coach',
        description: 'Get real-time feedback on pitch, tone, breath control, and vocal health. Professional coaching without the professional price tag.',
        icon: Mic2,
      },
      {
        title: 'Isolated Practice Tracks',
        description: 'Practice your exact part (soprano, alto, tenor, bass) with AI-generated tracks. Show up to rehearsal already knowing your part.',
        icon: Music,
      },
      {
        title: 'Skill Progress Dashboard',
        description: 'See your improvement over time across multiple dimensions. Know exactly what you\'re good at and what needs work.',
        icon: TrendingUp,
      },
      {
        title: 'Learning Pathway',
        description: 'Structured courses in vocal technique, worship theology, and team leadership. Earn certifications that prove your readiness.',
        icon: BookOpen,
      },
      {
        title: 'Service Preparation Hub',
        description: 'See upcoming songs, access practice materials, and track your preparation. Never feel unprepared again.',
        icon: Calendar,
      },
      {
        title: 'Worship Collective Pathway',
        description: 'Earn your way into the elite Worship Collective. Get certified, get booked by other churches, and get paid for your gift.',
        icon: Crown,
      },
    ],
    stats: [
      { value: '1000+', label: 'Vocal dimensions analyzed' },
      { value: '92%', label: 'Feel more prepared' },
      { value: '$699', label: 'Certification value' },
    ],
    ctaTitle: 'Start Growing Today',
    ctaDescription: 'Your gift deserves development. Start your vocal coaching journey.',
  },
  {
    slug: 'administrators',
    title: 'For Church Administrators',
    subtitle: 'One Platform. All Ministries. Zero Integration Headaches.',
    description: 'Ministry Motion consolidates your fragmented tech stack into one unified platform that actually talks to itself.',
    heroTagline: 'From tech juggler to operations leader',
    painPoints: [
      'Managing 5-10 different software subscriptions',
      'Data lives in silos—nothing integrates',
      'Duplicate data entry across platforms',
      'Can\'t pull reports that cross ministry boundaries',
      'Training staff on multiple systems constantly',
    ],
    features: [
      {
        title: 'Unified Platform',
        description: 'People, services, giving, communications, learning, and community—all in one place. One login, one bill, one support team.',
        icon: Layers,
      },
      {
        title: 'Cross-Ministry Reporting',
        description: 'Pull reports that span all ministries. See how children\'s ministry engagement affects adult attendance.',
        icon: BarChart3,
      },
      {
        title: 'Automated Workflows',
        description: 'When someone completes a class, they\'re automatically invited to serve. When they miss 3 weeks, staff gets notified.',
        icon: Target,
      },
      {
        title: 'Role-Based Permissions',
        description: 'Give each ministry leader exactly the access they need. Finance sees giving, worship sees schedules, everyone sees their people.',
        icon: Shield,
      },
      {
        title: 'Data Migration Included',
        description: 'Moving from Planning Center, Tithe.ly, or something else? Our team handles the migration free.',
        icon: Building2,
      },
      {
        title: 'Training & Support',
        description: 'Comprehensive training library, live support, and a dedicated success manager for churches over 500.',
        icon: Heart,
      },
    ],
    stats: [
      { value: '$834', label: 'Saved monthly vs. separate tools' },
      { value: '1', label: 'Platform to manage' },
      { value: '0', label: 'Integration headaches' },
    ],
    ctaTitle: 'Simplify Your Tech Stack',
    ctaDescription: 'Stop duct-taping software together. Get one platform that does it all.',
  },
  {
    slug: 'childrens-ministry',
    title: 'For Children\'s Ministry Leaders',
    subtitle: 'Nurture Young Disciples. Equip Families. Track Growth.',
    description: 'Ministry Motion gives children\'s ministry leaders the tools to track spiritual development, manage check-in, and partner with parents in discipleship.',
    heroTagline: 'From babysitting service to discipleship powerhouse',
    painPoints: [
      'No way to track children\'s spiritual development over years',
      'Check-in systems don\'t connect to anything else',
      'Parents are disconnected from what children learn',
      'Volunteer turnover creates constant training burden',
      'Curriculum completion means nothing to the rest of the church',
    ],
    features: [
      {
        title: 'Child Discipleship Journeys',
        description: 'Track each child\'s spiritual development from nursery through youth transition. See milestones, completions, and growth over time.',
        icon: Target,
      },
      {
        title: 'Integrated Check-in',
        description: 'Secure check-in that connects to the full Ministry Motion platform. Parents, children, and attendance all linked to discipleship records.',
        icon: ClipboardCheck,
      },
      {
        title: 'Parent Partnership Portal',
        description: 'Parents see what their children are learning, get weekly devotional guides, and track their child\'s spiritual milestones alongside them.',
        icon: Heart,
      },
      {
        title: 'Volunteer Management',
        description: 'Track background checks, training completion, and volunteer health. Automated scheduling with ratio management built in.',
        icon: UserCheck,
      },
      {
        title: 'Curriculum Integration',
        description: 'Connect to Sabbath School or your curriculum provider. Track lesson completion and connect learning to spiritual milestones.',
        icon: BookOpen,
      },
      {
        title: 'Youth Ministry Handoff',
        description: 'When children graduate to youth, their discipleship record transfers. Youth leaders know exactly where each kid is spiritually.',
        icon: GraduationCap,
      },
    ],
    stats: [
      { value: '100%', label: 'Child journey visibility' },
      { value: '10+', label: 'Years of discipleship tracked' },
      { value: '0', label: 'Kids falling through cracks' },
    ],
    testimonial: {
      quote: 'For the first time, we can show parents their child\'s spiritual growth journey—not just attendance stickers.',
      author: 'Maria L.',
      role: 'Children\'s Director',
      church: 'Fellowship Bible Church',
    },
    ctaTitle: 'Transform Children\'s Ministry',
    ctaDescription: 'Move from childcare to discipleship. Track every child\'s spiritual journey.',
  },
  {
    slug: 'small-groups',
    title: 'For Small Group Leaders',
    subtitle: 'Lead Transformational Groups. Develop Disciples. Multiply.',
    description: 'Ministry Motion equips small group leaders with tools to facilitate genuine transformation, track member growth, and prepare the next generation of leaders.',
    heroTagline: 'From social gatherings to discipleship engines',
    painPoints: [
      'No visibility into whether group members are actually growing',
      'Groups become social clubs instead of discipleship environments',
      'No clear path for members to become future leaders',
      'Curriculum completion doesn\'t connect to anything bigger',
      'When groups multiply, history is lost',
    ],
    features: [
      {
        title: 'Group Health Dashboard',
        description: 'See attendance trends, engagement patterns, and spiritual growth indicators for your entire group at a glance.',
        icon: BarChart3,
      },
      {
        title: 'Member Discipleship Tracking',
        description: 'Track each member\'s journey through curriculum, their serving involvement, and their readiness for next steps.',
        icon: Target,
      },
      {
        title: 'Discussion Facilitation Tools',
        description: 'Built-in discussion guides, question prompts, and follow-up reminders. Facilitate transformation, not just conversation.',
        icon: MessageSquare,
      },
      {
        title: 'Leader Development Pipeline',
        description: 'Identify apprentice leaders in your group. Track their development and prepare them to multiply into new groups.',
        icon: Crown,
      },
      {
        title: 'Curriculum Integration',
        description: 'Access church-approved curriculum with completion tracking. Lesson completion feeds into member discipleship records.',
        icon: BookOpen,
      },
      {
        title: 'Group Multiplication',
        description: 'When it\'s time to multiply, the platform preserves history, transfers apprentices to leadership, and tracks the multiplication tree.',
        icon: Users,
      },
    ],
    stats: [
      { value: '86%', label: 'Groups with clear next steps' },
      { value: '3x', label: 'More leaders developed' },
      { value: '100%', label: 'Group health visibility' },
    ],
    testimonial: {
      quote: 'Our small groups finally produce disciples, not just friends. We can see transformation happening.',
      author: 'David K.',
      role: 'Small Groups Pastor',
      church: 'New Life Church',
    },
    ctaTitle: 'Lead Groups That Transform',
    ctaDescription: 'Move from social gatherings to discipleship engines. See the growth you\'re producing.',
  },
  {
    slug: 'denominations',
    title: 'For Denominations & Conferences',
    subtitle: 'Unprecedented Visibility Across Your Network',
    description: 'Ministry Motion\'s multi-tenant architecture gives denominational leaders cross-church insights no other platform can provide.',
    heroTagline: 'From disconnected churches to unified intelligence',
    painPoints: [
      'No visibility into individual church health',
      'Can\'t benchmark churches against each other',
      'Training content isn\'t standardized',
      'No way to identify struggling churches before crisis',
      'Cross-church resource sharing is impossible',
    ],
    features: [
      {
        title: 'Cross-Tenant Analytics',
        description: 'See aggregated health metrics across all churches. Benchmark attendance, giving, engagement, and discipleship.',
        icon: BarChart3,
      },
      {
        title: 'Denomination-Specific Content',
        description: 'Create courses and training materials that deploy across all member churches. Ensure theological consistency.',
        icon: BookOpen,
      },
      {
        title: 'Regional Dashboards',
        description: 'Conference and regional leaders see roll-up reporting for their territory. Identify trends before they become problems.',
        icon: Layers,
      },
      {
        title: 'Resource Sharing Network',
        description: 'Churches can share successful programs, curriculum, and best practices through the platform.',
        icon: Users,
      },
      {
        title: 'Early Warning System',
        description: 'Automatic alerts when church health metrics drop below thresholds. Intervene before crisis, not after.',
        icon: Shield,
      },
      {
        title: 'Worship Collective Integration',
        description: 'Certified worship leaders can be booked across member churches. Fill gaps, share excellence, build unity.',
        icon: Crown,
      },
    ],
    stats: [
      { value: '100%', label: 'Network visibility' },
      { value: 'Real-time', label: 'Church health data' },
      { value: 'Cross-church', label: 'Resource sharing' },
    ],
    ctaTitle: 'Unite Your Network',
    ctaDescription: 'Give your denomination the visibility and tools to thrive together.',
  },
];

// Helper functions
export function getAllSolutions(): Solution[] {
  return solutions;
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug);
}
