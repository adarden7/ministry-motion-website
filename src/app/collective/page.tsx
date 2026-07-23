'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Crown,
  Users,
  Mic2,
  Award,
  Check,
  ChevronRight,
  Sparkles,
  Target,
  BookOpen,
  Heart,
  Music,
  MessageCircle,
  Trophy,
  Zap,
  Shield
} from 'lucide-react';
import { useCollective } from '@/components/collective';

export default function WorshipCollectivePage() {
  const { openJoinModal } = useCollective();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  // Generate decorative particle positions once (stable across renders).
  const [particles] = useState(() =>
    Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 10,
    }))
  );

  return (
    <>
      {/* Hero Section  */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-500/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-violet-400/30 rounded-full animate-float-particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Community badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">A Community for Worship Leaders</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Worship Collective
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mx-auto mb-4 leading-relaxed">
            A membership community where worship leaders
            <span className="text-violet-300"> belong</span>,
            <span className="text-violet-300"> connect</span>, and
            <span className="text-violet-300"> grow together</span>.
          </p>

          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
            Join directly. Train with mentors. Grow inside a global network of worship
            leaders who take their craft as seriously as you do.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={openJoinModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-violet-500/30 transition-all hover:-translate-y-1 text-lg"
            >
              Join the Community
            </button>
            <Link
              href="/how-it-works"
              className="w-full sm:w-auto px-8 py-4 border border-violet-500/30 text-white font-semibold rounded-full hover:bg-violet-500/10 transition-all text-lg"
            >
              See how it works
            </Link>
          </div>

          {/* Beta message */}
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-white/50">
              Now welcoming founding members during our beta
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-violet-500/50 uppercase tracking-widest">Discover</span>
          <ChevronRight className="w-5 h-5 text-violet-500/50 rotate-90" />
        </div>
      </section>

      {/* What is Collective */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Crown className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">The Experience</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-white">More than a platform.</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  A place to belong.
                </span>
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Worship Collective is a membership community for worship leaders who want to grow
                alongside people who get it. Learn in cohorts, connect in interest groups, and earn
                credentials that mean something — all in one place, at your own pace.
              </p>
              <div className="space-y-4">
                {[
                  'A network of worship leaders who push each other forward',
                  'Weekly cohort sessions with experienced mentors',
                  'Masterclasses from recognized worship leaders',
                  'Credentials recognized across churches',
                  'AI-assisted coaching that meets you where you are',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl rounded-full" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 border border-violet-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Collective Member</div>
                    <div className="text-violet-400 text-sm">Platinum Tier</div>
                  </div>
                </div>

                {/* Progress visualization */}
                <div className="space-y-4 mb-6">
                  {[
                    { label: 'Vocal Mastery', value: 92 },
                    { label: 'Leadership Score', value: 88 },
                    { label: 'Spiritual Depth', value: 95 },
                  ].map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white/70">{metric.label}</span>
                        <span className="text-violet-400 font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full"
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex gap-2 flex-wrap">
                  {['Certified Leader', 'Cohort Graduate', 'Master Vocalist'].map((badge, i) => (
                    <span key={i} className="px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs text-violet-300">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Growth Path / Milestones */}
      <section id="journey" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Target className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">The Growth Path</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Milestones you&apos;ll reach together
            </h2>
            <p className="text-lg text-white/70">
              Membership is open — join directly and grow at your own pace. These are the
              milestones members work toward on the path from their first cohort to recognized mastery.
            </p>
          </div>

          {/* Milestones grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Mic2,
                title: 'Vocal Excellence',
                requirement: 'Grow toward 75%+',
                description: 'Build consistent pitch accuracy, tone quality, and breath control across your assessments.'
              },
              {
                icon: Trophy,
                title: 'Consistent Practice',
                requirement: 'Show up, week over week',
                description: 'Earn recognition through practice, community engagement, courses, and service participation.'
              },
              {
                icon: BookOpen,
                title: 'Course Completion',
                requirement: 'Finish your first 3 courses',
                description: 'Work through foundational courses in vocal technique, worship theology, and leadership.'
              },
              {
                icon: Heart,
                title: 'Devotional Leadership',
                requirement: 'Lead your team',
                description: 'Deepen spiritual maturity by leading team devotionals and prayer sessions.'
              },
              {
                icon: Music,
                title: 'Time on the Mic',
                requirement: 'Log your reps',
                description: 'Accumulate tracked performance time through services and rehearsals.'
              },
              {
                icon: Award,
                title: 'Peer & Mentor Endorsement',
                requirement: 'Vouched for by the community',
                description: 'Receive endorsement from mentors and peers who have seen your growth first-hand.'
              },
            ].map((req, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-violet-500/10 hover:border-violet-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <req.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{req.title}</h3>
                <div className="text-violet-400 text-sm font-medium mb-3">{req.requirement}</div>
                <p className="text-sm text-white/60">{req.description}</p>
              </div>
            ))}
          </div>

          {/* Timeline visual */}
          <div className="mt-16 text-center">
            <p className="text-white/50 text-sm mb-4">Typical journey time</p>
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-900/50 rounded-full border border-violet-500/20">
              <span className="text-white/70">Join</span>
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-8 h-1 bg-gradient-to-r from-violet-600/50 to-fuchsia-500/80 rounded-full" />
                ))}
              </div>
              <span className="text-violet-400 font-semibold">6 months</span>
              <ChevronRight className="w-4 h-4 text-violet-400" />
              <span className="text-violet-300">First credential</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Cohorts */}
      <section id="cohorts" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Cohort visual */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl rounded-full" />
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 border border-violet-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-violet-400" />
                      <span className="font-semibold">Your Cohort</span>
                    </div>
                    <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-1 rounded-full">8 members</span>
                  </div>

                  {/* Cohort members */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-600/10 flex items-center justify-center border border-violet-500/20">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400/30 to-fuchsia-500/30 flex items-center justify-center text-sm font-medium">
                          {String.fromCharCode(65 + i)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mentor */}
                  <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
                        <Crown className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Your Cohort Mentor</div>
                        <div className="text-sm text-violet-400">Master Vocal Coach · Assigned 1:1</div>
                      </div>
                    </div>
                  </div>

                  {/* Next session */}
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-white/60">Next Session</span>
                    <span className="text-violet-300 font-medium">Thursday 7:00 PM EST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Users className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">Coaching Cohorts</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-white">Learn together.</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Grow together.
                </span>
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                You&apos;ll be placed in an intimate cohort of 8-12 worship leaders at similar skill levels.
                Together, you&apos;ll progress under the guidance of an experienced mentor
                who&apos;s walked the path before you.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Weekly Live Sessions', desc: 'Real-time group coaching and feedback' },
                  { title: 'Peer Accountability', desc: 'Partners who push you to excellence' },
                  { title: 'Expert Mentorship', desc: 'Guidance from seasoned worship leaders' },
                  { title: 'Lifetime Network', desc: 'Connections that last beyond the program' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-white">{item.title}</span>
                      <span className="text-white/60"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare to professional gospel vocal styles — Vocal Style Analysis */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Mic2 className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">Vocal Style Analysis</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-white">Compare to professional</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  gospel vocal styles
                </span>
              </h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                Worship Collective&apos;s vocal-style analysis examines audio sampled at 44.1kHz
                to identify stylistic patterns in your technique, then compares them to professional
                gospel vocal styles — giving you a data-driven path to the sound you aspire to lead with.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Analyzes audio sampled at 44.1kHz for detailed acoustic profiling' },
                  { label: 'Compares timbre, vibrato, and breath technique to professional vocal styles' },
                  { label: 'Identifies your unique vocal signature and growth opportunities' },
                  { label: 'AI facilitates and guides feedback — you\'re always in the loop' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual demo placeholder */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-3xl rounded-full" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 border border-violet-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                    <Mic2 className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Vocal Style Comparison</p>
                    <p className="text-xs text-violet-400">Analyzing your recording...</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                </div>

                {/* Simulated style comparison */}
                <div className="space-y-4 mb-6">
                  {[
                    { style: 'Vibrato Depth', your: 72, ref: 89 },
                    { style: 'Breath Control', your: 85, ref: 91 },
                    { style: 'Tonal Warmth', your: 78, ref: 95 },
                    { style: 'Dynamic Range', your: 83, ref: 88 },
                  ].map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-white/60">{metric.style}</span>
                        <span className="text-violet-400">You: {metric.your}% · Reference: {metric.ref}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden relative">
                        <div className="h-full bg-violet-900/60 rounded-full" style={{ width: `${metric.ref}%` }} />
                        <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full absolute top-0" style={{ width: `${metric.your}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-sm text-white/70">
                  Focus area: vibrato depth and tonal warmth show the most growth potential. 3 targeted exercises recommended.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biometric Overlay Demo */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Heart className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">Opt-in Wellness Insights</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              See how Apple Watch data correlates with your vocal performance
            </h2>
            <p className="text-lg text-white/70">
              For members who opt in, the Collective&apos;s biometric overlay connects wearable wellness data
              with vocal analysis — revealing how recovery, stress, and rest affect your performance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Biometric panel */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 border border-violet-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">Biometric Overlay</p>
                  <p className="text-xs text-violet-400">Apple Watch · Opt-in wellness insights</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Resting HR', value: '58 bpm', status: 'Optimal' },
                  { label: 'HRV', value: '62 ms', status: 'Good' },
                  { label: 'Sleep Score', value: '84%', status: 'Recovered' },
                ].map((metric, i) => (
                  <div key={i} className="bg-violet-500/5 rounded-xl p-3 text-center border border-violet-500/10">
                    <p className="text-lg font-bold text-white">{metric.value}</p>
                    <p className="text-xs text-violet-400/80">{metric.label}</p>
                    <p className="text-xs text-violet-400 mt-1">{metric.status}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/20 text-sm text-violet-100/80">
                Based on opt-in wellness insights: your recovery metrics detect patterns associated with peak vocal performance. This is a strong rehearsal day.
              </div>
            </div>

            {/* Explanation panel */}
            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: 'Always opt-in, always private',
                  desc: 'Biometric data is never shared without your explicit consent. You control what\'s shared, when, and with whom.'
                },
                {
                  icon: Heart,
                  title: 'Detects patterns associated with burnout risk',
                  desc: 'The system monitors trends over time to surface early signals — it\'s a wellness guide, not a surveillance tool.'
                },
                {
                  icon: Target,
                  title: 'Correlates rest with vocal quality',
                  desc: 'Over weeks of data, the system identifies your personal peak-performance conditions so you can plan rehearsals and services with confidence.'
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-violet-500/5 border border-violet-500/10">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Worship Collective Tier Journey — Tier 1 through Tier 5 */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Award className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">Certification Path</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              The 5-Tier Worship Collective Journey
            </h2>
            <p className="text-lg text-white/70">
              A structured progression from foundational excellence to globally recognized mastery.
              Each tier unlocks new privileges, mentorship access, and certification credentials.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                tier: 'Tier 1',
                name: 'Foundation',
                color: 'from-slate-400 to-slate-500',
                borderColor: 'border-slate-500/30',
                bgColor: 'bg-slate-500/5',
                timeframe: '0–3 months',
                description: 'Complete onboarding, establish baseline vocal assessment, join your first cohort session.',
                unlocks: ['Access to all interest groups', 'Weekly cohort sessions', 'Foundation certification'],
              },
              {
                tier: 'Tier 2',
                name: 'Developing',
                color: 'from-violet-400 to-fuchsia-500',
                borderColor: 'border-violet-500/30',
                bgColor: 'bg-violet-500/5',
                timeframe: '3–6 months',
                description: 'Reach 75% vocal consistency score, complete 3 foundational courses, lead a team devotional.',
                unlocks: ['Masterclass access', '1-on-1 monthly mentor session', 'Developing credential'],
              },
              {
                tier: 'Tier 3',
                name: 'Proficient',
                color: 'from-violet-500 to-fuchsia-600',
                borderColor: 'border-violet-500/30',
                bgColor: 'bg-violet-500/5',
                timeframe: '6–12 months',
                description: 'Achieve 85% vocal excellence score, lead 3 cohort sessions, mentor a Tier 1 member.',
                unlocks: ['Priority event invitations', '2x monthly mentor sessions', 'Proficient certification'],
              },
              {
                tier: 'Tier 4',
                name: 'Advanced',
                color: 'from-violet-600 to-fuchsia-600',
                borderColor: 'border-violet-500/30',
                bgColor: 'bg-violet-500/5',
                timeframe: '12–24 months',
                description: 'Sustain 90%+ excellence score, graduate 2+ mentees, publish one workshop or resource.',
                unlocks: ['Retreat invitations', 'Guest teaching opportunities', 'Advanced certification'],
                featured: true,
              },
              {
                tier: 'Tier 5',
                name: 'Master',
                color: 'from-amber-400 to-orange-500',
                borderColor: 'border-amber-500/30',
                bgColor: 'bg-amber-500/5',
                timeframe: '24+ months',
                description: 'Graduate 10+ mentees, published worship content recognized by the board, peer-voted.',
                unlocks: ['Become a Master Mentor', 'Global certification recognition', 'Lifetime Master credential'],
              },
            ].map((tier, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border ${tier.borderColor} ${tier.bgColor} ${tier.featured ? 'ring-2 ring-violet-500/30' : ''}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold rounded-full">
                    Most Members Complete This Tier
                  </div>
                )}
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${tier.color} text-white text-sm font-bold`}>
                      {tier.tier} · {tier.name}
                    </div>
                    <p className="text-xs text-violet-400/70 mt-1 pl-1">{tier.timeframe}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/70 text-sm">{tier.description}</p>
                  </div>
                  <div className="flex-shrink-0 space-y-1">
                    {tier.unlocks.map((unlock, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-white/60">
                        <Check className="w-3 h-3 text-violet-400 flex-shrink-0" />
                        {unlock}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Groups */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <MessageCircle className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">Interest Groups</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Find your tribe
            </h2>
            <p className="text-lg text-white/70">
              Beyond cohorts, join specialized interest groups that match your passions and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Vocal Health',
                members: 45,
                icon: '🎤',
                description: 'Techniques, recovery, and prevention'
              },
              {
                title: 'Songwriting',
                members: 38,
                icon: '✍️',
                description: 'Craft original worship music'
              },
              {
                title: 'Production',
                members: 52,
                icon: '🎛️',
                description: 'Sound, mixing, and tech'
              },
              {
                title: 'Leadership',
                members: 61,
                icon: '👑',
                description: 'Building and leading teams'
              },
            ].map((group, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-violet-500/10 hover:border-violet-500/30 transition-all cursor-pointer">
                <div className="text-4xl mb-4">{group.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{group.title}</h3>
                <p className="text-sm text-white/60 mb-4">{group.description}</p>
                <div className="flex items-center gap-2 text-xs text-violet-400">
                  <Users className="w-3 h-3" />
                  <span>{group.members} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section id="credentials" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Award className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">Credentials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Credentials that matter
            </h2>
            <p className="text-lg text-white/70">
              Earn certifications recognized by churches worldwide. Your credential proves
              you&apos;ve achieved excellence through rigorous training and assessment.
            </p>
          </div>

          {/* Credential tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                level: 'Certified',
                color: 'from-slate-400 to-slate-500',
                borderColor: 'border-slate-500/30',
                bgColor: 'bg-slate-500/10',
                requirements: ['Complete cohort program', 'Pass vocal assessment', '80%+ consistency score']
              },
              {
                level: 'Advanced',
                color: 'from-violet-500 to-fuchsia-600',
                borderColor: 'border-violet-500/30',
                bgColor: 'bg-violet-500/10',
                requirements: ['Lead 3 cohort sessions', 'Mentor 2 new members', '90%+ excellence score'],
                featured: true
              },
              {
                level: 'Master',
                color: 'from-violet-400 to-fuchsia-500',
                borderColor: 'border-violet-500/30',
                bgColor: 'bg-violet-500/10',
                requirements: ['Graduate 10+ mentees', 'Published worship content', 'Board certification']
              },
            ].map((tier, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl border ${tier.borderColor} ${tier.bgColor} ${tier.featured ? 'scale-105' : ''}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold rounded-full">
                    Most Common
                  </div>
                )}
                <div className={`w-16 h-8 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-6`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold text-center mb-6 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.level}
                </h3>
                <ul className="space-y-3">
                  {tier.requirements.map((req, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 transition-colors font-medium"
            >
              Explore the full certification path
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Zap className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-400">Membership</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              One membership. Everything included.
            </h2>
            <p className="text-lg text-white/70">
              Join directly and grow at your own pace — cohorts, mentorship, masterclasses, and credentials.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            {/* Membership */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-violet-500/40 hover:border-violet-500/60 transition-all">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 mb-4">
                  <Crown className="w-4 h-4 text-violet-300" />
                  <span className="text-sm font-medium text-violet-300">Membership</span>
                </div>
                <p className="text-white/60 text-sm">For worship leaders serious about their craft</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-white">$49.99</span>
                  <span className="text-white/50">/mo</span>
                </div>
                <p className="text-white/40 text-sm">billed annually · or $64.99/mo billed monthly</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { feature: 'Intimate cohort placement (8-12 members)', included: true, highlight: true },
                  { feature: 'Weekly live group sessions', included: true, highlight: true },
                  { feature: 'Access to all interest groups', included: true },
                  { feature: 'Live masterclasses + recordings', included: true, highlight: true },
                  { feature: 'AI vocal coaching for recorded practice sessions', included: true, highlight: true },
                  { feature: 'Credential certification path', included: true },
                  { feature: 'Community chat & forums', included: true },
                  { feature: 'Member-only events (virtual + in-person)', included: true, highlight: true },
                  { feature: '2x monthly 1-on-1 mentor sessions', included: true, highlight: true },
                  { feature: 'Priority credential review', included: true, highlight: true },
                  { feature: 'Exclusive retreat invitations', included: true, highlight: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className={`${item.highlight ? 'text-white font-medium' : 'text-white/80'}`}>
                      {item.feature}
                      {item.highlight && <span className="ml-2 text-xs text-violet-400">★</span>}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={openJoinModal}
                className="block w-full py-4 text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold rounded-full hover:shadow-xl hover:shadow-violet-500/30 transition-all text-lg"
              >
                Join the Community
              </button>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm mb-4">
              Open membership · Grow at your own pace
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>14-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span>Switch billing freely</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How do I join Worship Collective?',
                a: 'Membership is open to worship leaders — no invitation required. Join directly and we\'ll match you into a cohort within about two weeks. You grow at your own pace toward each credential.'
              },
              {
                q: 'Do I need to be at a MinistryMotion church to join?',
                a: 'No. Worship Collective is a standalone community open to any worship leader. MinistryMotion is the engine that powers your coaching, analytics, and progress behind the scenes — but membership stands entirely on its own.'
              },
              {
                q: 'How are cohorts assigned?',
                a: 'We match you with 8-12 members at similar skill levels and in compatible time zones. Cohort placement happens within 2 weeks of joining.'
              },
              {
                q: 'Can I earn credentials without being in a cohort?',
                a: 'The cohort experience is central to the community. Credentials are earned through cohort participation, peer accountability, and mentor assessment.'
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="border border-violet-500/20 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-violet-500/5 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-violet-400 transition-transform ${activeFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-5 pb-5 text-white/70">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-violet-600/20" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-violet-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-violet-300" />
            <span className="text-sm font-medium text-violet-200">Now welcoming founding members</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Ready to find your people?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Join a community of worship leaders growing together — and help shape it from the start.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openJoinModal}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-bold rounded-full hover:shadow-xl hover:shadow-violet-500/30 transition-all text-lg"
            >
              Join the Community
            </button>
          </div>

          <p className="text-sm text-white/40 mt-6">
            Be among the first to belong to Worship Collective
          </p>
        </div>
      </section>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
        .animate-float-particle {
          animation: float-particle 10s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
