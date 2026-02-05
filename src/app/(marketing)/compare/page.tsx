'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Check,
  X,
  ChevronDown,
  ArrowRight,
  Mic2,
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  BookOpen,
  Heart,
  Music,
  Crown,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Layers,
  Radio,
  Brain,
  Headphones,
  Smartphone,
  Globe
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

// Comprehensive feature comparison data - Ministry Motion vs PCO vs Breeze
const comparisonCategories = [
  {
    name: 'Service Planning & Scheduling',
    features: [
      { name: 'Service Planning', us: true, pco: true, onechurch: false },
      { name: 'Volunteer Scheduling', us: true, pco: true, onechurch: true },
      { name: 'Auto-Scheduling', us: true, pco: true, onechurch: false },
      { name: 'Song Library Management', us: true, pco: true, onechurch: false },
      { name: 'AI Song Recommendations', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Theme Alignment Scoring', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Unified Calendar', us: true, pco: 'Add-on', onechurch: true }
    ]
  },
  {
    name: 'Rehearsal & Music Preparation',
    features: [
      { name: 'Digital Sheet Music', us: true, pco: 'Music Stand ($5-10/mo)', onechurch: false },
      { name: 'AI-Generated Rehearsal Tracks', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Voice Part Isolation', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Live Digital Rehearsal Rooms', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Team Preparation Dashboard', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'At-Home Practice Scoring', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'Vocal Training & Development',
    features: [
      { name: 'AI Vocal Coaching', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Real-Time Pitch Analysis', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Breath Control Feedback', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Vocal Health Monitoring', us: true, pco: false, onechurch: false, highlight: true },
      { name: '5-Tier Development Pathway', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Performance Progress Tracking', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'Learning Management',
    features: [
      { name: 'Course Library', us: '18+ courses', pco: false, onechurch: false, highlight: true },
      { name: 'Video Lessons & Quizzes', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Certifications', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Denomination-Specific Content', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Interactive Labs', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Course → Ministry Qualification', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'Service Analytics',
    features: [
      { name: 'Service Video Analysis (AI)', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Automatic Song Detection', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Voice Identification', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Theme Alignment Scoring', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Transition Quality Analysis', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Plan vs. Actual Variance', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Real-Time Service Dashboard', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'Communications',
    features: [
      { name: 'Email Campaigns', us: true, pco: true, onechurch: true },
      { name: 'SMS Messaging', us: true, pco: 'Add-on', onechurch: 'Add-on' },
      { name: 'Push Notifications', us: true, pco: true, onechurch: false },
      { name: 'Context-Aware Messaging', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Unified Inbox', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'AI-Moderated Chat', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Member-Controlled Preferences', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'Community & Engagement',
    features: [
      { name: 'Community Spaces', us: true, pco: false, onechurch: false },
      { name: 'Discussion Threads', us: true, pco: false, onechurch: false },
      { name: 'Member Profiles', us: true, pco: true, onechurch: true },
      { name: 'Spiritual Gifts Display', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Gamification (XP/Badges)', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Ministry-Aware Auto-Spaces', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'People & Member Management',
    features: [
      { name: 'Member Database', us: true, pco: true, onechurch: true },
      { name: 'Dynamic Lists/Segments', us: true, pco: true, onechurch: 'Basic' },
      { name: 'Workflows/Automation', us: true, pco: true, onechurch: false },
      { name: 'Spiritual Gifts Assessment', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'AI Ministry Matching', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Behavioral Engagement Analysis', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Simple Church Model Tracking', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'Discipleship & Journeys',
    features: [
      { name: 'Member Journeys', us: true, pco: 'Workflows', onechurch: false },
      { name: 'Connect→Grow→Serve→Go', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Behavioral Auto-Enrollment', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Journey-Embedded Giving', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Ministry Activation', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'Giving & Generosity',
    features: [
      { name: 'Online Giving', us: true, pco: true, onechurch: true },
      { name: 'Recurring Donations', us: true, pco: true, onechurch: true },
      { name: 'Fund Management', us: true, pco: true, onechurch: true },
      { name: 'Tax Receipts', us: true, pco: true, onechurch: true },
      { name: 'Multi-Currency (Global)', us: true, pco: '4 countries', onechurch: false },
      { name: 'Paystack/Flutterwave (Africa)', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'Mobile Apps',
    features: [
      { name: 'Member App', us: true, pco: true, onechurch: true },
      { name: 'Ministry Team App', us: true, pco: true, onechurch: false },
      { name: 'Push Notifications', us: true, pco: true, onechurch: false },
      { name: 'Offline Support', us: true, pco: true, onechurch: false },
      { name: 'At-Home Vocal Practice', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Real-Time Service Alerts', us: true, pco: false, onechurch: false, highlight: true }
    ]
  },
  {
    name: 'Multi-Site & Governance',
    features: [
      { name: 'Multi-Campus Support', us: true, pco: true, onechurch: 'Limited' },
      { name: 'Cross-Campus Dashboards', us: true, pco: false, onechurch: false },
      { name: 'Regional Aggregation', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Denominational Reporting', us: true, pco: false, onechurch: false, highlight: true },
      { name: 'Role-Based Permissions', us: true, pco: true, onechurch: true },
      { name: 'SSO (Enterprise)', us: true, pco: false, onechurch: false }
    ]
  }
];

// Quick comparison summary
const quickComparison = [
  { category: 'Core ChMS', us: '✓', pco: '✓', onechurch: '✓', description: 'Your team spends less time on admin and more time on ministry' },
  { category: 'Service Planning', us: '✓', pco: '✓', onechurch: '✗', description: 'Worship leaders walk into each service confident and prepared' },
  { category: 'AI Vocal Coaching', us: '✓', pco: '✗', onechurch: '✗', description: 'Your team grows in skill without expensive voice lessons' },
  { category: 'Service Video Analysis', us: '✓', pco: '✗', onechurch: '✗', description: 'Leaders review services with data, not just feelings' },
  { category: 'Learning Management', us: '18 courses', pco: '✗', onechurch: '✗', description: 'Volunteers grow into confident, trained ministers' },
  { category: 'Unified Communications', us: '✓', pco: '✗', onechurch: '✗', description: 'Your team stops juggling 5 different apps' },
  { category: 'Real-Time Service Insights', us: '✓', pco: '✗', onechurch: '✗', description: 'Pastors see engagement as it happens, not weeks later' },
  { category: 'Rehearsal Track Generation', us: '✓', pco: '✗', onechurch: '✗', description: 'Team members practice their parts at home confidently' },
  { category: 'Community Platform', us: '✓', pco: '✗', onechurch: '✗', description: 'Members find their people and stay connected' },
  { category: 'Discipleship Tracking', us: '✓', pco: '✗', onechurch: '✗', description: 'Pastors finally see the discipleship journey in action' }
];

export default function ComparePage() {
  // Only keep first category expanded by default
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set([comparisonCategories[0].name])
  );
  const { openBetaModal } = useMarketing();

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-blue-600 mx-auto" />;
    } else if (value === false) {
      return <X className="w-5 h-5 text-slate-300 mx-auto" />;
    } else {
      return <span className="text-xs text-slate-500">{value}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased">
      {/* Hero - Tech-forward dark gradient */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ministry Motion vs.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">the Competition</span>
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto mb-8">
            See exactly what you get with Ministry Motion compared to Planning Center and One Church.
            We don't just match their features—we add AI-powered capabilities no one else has.
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">The Quick Version</h2>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-700">Capability</th>
                  <th className="p-4 text-center">
                    <span className="text-blue-600 font-semibold">Ministry Motion</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-600 font-semibold">Planning Center</span>
                  </th>
                  <th className="p-4 text-center">
                    <span className="text-slate-600 font-semibold">One Church</span>
                  </th>
                  <th className="p-4 text-left font-medium text-slate-500 hidden md:table-cell">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {quickComparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">{row.category}</td>
                    <td className="p-4 text-center">
                      {row.us === '✓' ? (
                        <Check className="w-5 h-5 text-blue-600 mx-auto" />
                      ) : (
                        <span className="text-sm text-blue-600 font-medium">{row.us}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.pco === '✓' ? (
                        <Check className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : row.pco === '✗' ? (
                        <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-xs text-slate-500">{row.pco}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {row.onechurch === '✓' ? (
                        <Check className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : row.onechurch === '✗' ? (
                        <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-xs text-slate-500">{row.onechurch}</span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-slate-500 hidden md:table-cell">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Honest Assessment */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Honest Assessment</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-4">What Planning Center Does Well</h3>
              <ul className="space-y-3">
                {[
                  '19 years of stability and trust',
                  '90,000+ churches (market validation)',
                  'Polished, mature UX',
                  'Modular—pay only for what you use',
                  'Music Stand integration'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-4">What One Church Does Well</h3>
              <ul className="space-y-3">
                {[
                  'Modern, intuitive interface',
                  'Full-featured ChMS',
                  'Strong people management',
                  'Integrated giving platform',
                  'Good for growing churches'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-teal-400 mb-4">Where Ministry Motion Surpasses Both</h3>
              <ul className="space-y-3">
                {[
                  'AI-powered everything',
                  'Vocal coaching & team development',
                  'Service video analysis',
                  'Full learning management',
                  'Discipleship journey tracking'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <Zap className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-teal-900/50 rounded-xl border border-blue-700">
            <p className="text-lg text-center text-blue-100">
              <strong className="text-white">Our positioning:</strong> PCO is excellent at organizing worship ministry. One Church is great for full-featured church management.
              Ministry Motion does both AND develops your team, analyzes your services, tracks discipleship journeys, and moves members toward
              spiritual maturity—all with AI that works for you instead of workflows you have to build.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Detailed Feature Comparison</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Click any category to collapse or expand. Highlighted rows are capabilities unique to Ministry Motion.
          </p>

          <div className="space-y-4">
            {comparisonCategories.map((category) => (
              <div key={category.name} className="border border-slate-200 rounded-xl overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{category.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-blue-600">
                      {category.features.filter(f => f.highlight).length} unique to us
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedCategories.has(category.name) ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Features Table - Show if category is expanded */}
                {expandedCategories.has(category.name) && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-slate-100 border-t border-slate-200">
                          <th className="text-left p-3 text-sm font-medium text-slate-600">Feature</th>
                          <th className="p-3 text-center min-w-[120px]">
                            <span className="text-sm font-semibold text-blue-600">Ministry Motion</span>
                          </th>
                          <th className="p-3 text-center min-w-[120px]">
                            <span className="text-sm font-semibold text-slate-600">Planning Center</span>
                          </th>
                          <th className="p-3 text-center min-w-[120px]">
                            <span className="text-sm font-semibold text-slate-600">One Church</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {category.features.map((feature, i) => (
                          <tr key={i} className={feature.highlight ? 'bg-blue-50' : 'hover:bg-slate-50'}>
                            <td className="p-3 text-sm text-slate-700">
                              {feature.name}
                              {feature.highlight && (
                                <span className="ml-2 px-1.5 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-700 rounded">
                                  Unique
                                </span>
                              )}
                            </td>
                            <td className="p-3 text-center">{renderValue(feature.us)}</td>
                            <td className="p-3 text-center">{renderValue(feature.pco)}</td>
                            <td className="p-3 text-center">{renderValue(feature.onechurch)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Cost Comparison</h2>
          <p className="text-slate-600 text-center mb-12">
            What it actually costs to get comparable capabilities
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Competitors Stack */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Building it yourself with separate tools</h3>

              <div className="space-y-3 mb-6">
                {[
                  { tool: 'Planning Center Services', price: '$199/mo', use: 'Scheduling' },
                  { tool: 'Circle.so', price: '$89/mo', use: 'Community' },
                  { tool: 'Yousician', price: '$180/mo', use: '6 team members' },
                  { tool: 'Coursera Business', price: '$399/mo', use: 'Training' },
                  { tool: 'Zoom Pro', price: '$16/mo', use: 'Rehearsals' },
                  { tool: 'Pushpay', price: '$200/mo', use: 'Giving' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100">
                    <div>
                      <span className="font-medium text-slate-700">{item.tool}</span>
                      <span className="text-sm text-slate-500 ml-2">({item.use})</span>
                    </div>
                    <span className="text-slate-600">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="font-semibold text-slate-900">Total</span>
                <span className="text-2xl font-bold text-slate-900">~$1,083/mo</span>
              </div>

              <p className="text-sm text-slate-500 mt-4">
                Plus: No integration, separate logins, duplicate data entry, no AI service analysis,
                no ministry-specific training, no unified communications
              </p>
            </div>

            {/* Ministry Motion */}
            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-6">Ministry Motion Pro</h3>

              <div className="space-y-3 mb-6">
                {[
                  'Service planning & scheduling',
                  'AI vocal coaching',
                  'Digital rehearsal rooms',
                  'Rehearsal track generation',
                  '18+ course LMS',
                  'Service video analysis',
                  'Real-time insights',
                  'Unified communications',
                  'Community platform',
                  'Integrated giving',
                  'Mobile apps',
                  'Multi-campus support'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-teal-200 flex-shrink-0" />
                    <span className="text-blue-50">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-blue-500">
                <span className="font-semibold">Total</span>
                <span className="text-3xl font-bold">$249/mo</span>
              </div>

              <div className="mt-4 p-3 bg-blue-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-teal-200">You save</span>
                  <span className="text-xl font-bold text-white">$834/mo ($10,008/year)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Switching is easier than you think</h2>
          <p className="text-lg text-slate-600 mb-8">
            We help you migrate from Planning Center, One Church, or any other ChMS.
            Free data migration assistance included.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Export your data', description: 'Download from your current platform' },
              { title: 'We import it', description: 'Our team handles the migration' },
              { title: 'You\'re live', description: 'Start using Ministry Motion in days' }
            ].map((step, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to see the difference?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join our beta program and be among the first to experience the future of church management.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBetaModal}
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 text-lg"
            >
              Sign Up for Beta
            </button>
            <Link
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg border border-blue-500 hover:bg-teal-800 text-lg"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/logos/ministry-motion-text-logo-white.svg" alt="Ministry Motion" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-500">
              © 2025 Ministry Motion. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
