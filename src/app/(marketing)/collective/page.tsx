'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Crown,
  Users,
  Mic2,
  Award,
  Star,
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
  Shield,
  X,
  Globe,
  Building2,
  DollarSign,
  Calendar,
  Play,
  ArrowRight,
  BadgeCheck,
  Briefcase,
} from 'lucide-react';
import { useState } from 'react';
import { useMarketing } from '@/context/MarketingContext';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { NumberTicker } from '@/components/magicui/number-ticker';

export default function WorshipCollectivePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0a0c] via-[#1a1215] to-[#0f0a0c] text-white antialiased">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-rose-600/20 via-pink-500/15 to-rose-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0f0a0c] to-transparent" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-rose-400/30 rounded-full"
              initial={{ opacity: 0.3 }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Exclusive badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedGradientText className="bg-rose-500/10 border-rose-500/30">
              <span className="inline-flex items-center gap-2 text-rose-300">
                <Crown className="w-4 h-4 text-rose-400" />
                <span>Cross-Tenant Booking Network · Earn While You Lead</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </AnimatedGradientText>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            <span className="bg-gradient-to-r from-rose-200 via-pink-300 to-rose-200 bg-clip-text text-transparent">
              The Worship Collective
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-rose-100/70 max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            Get certified. Get booked. Get paid.
            <span className="text-rose-300"> The first cross-church worship leader network</span>{' '}
            where your talent creates income.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-rose-100/50 max-w-2xl mx-auto mb-10"
          >
            Churches with open slots can book certified Collective members from other congregations.
            Your certification becomes your credential. Your passion becomes your profession.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <ShimmerButton
              onClick={openBetaModal}
              className="h-14 px-8 text-lg font-semibold"
              background="linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)"
            >
              Join Beta Waitlist
            </ShimmerButton>
            <Link
              href="#how-it-works"
              className="h-14 px-8 bg-white/5 text-rose-100 font-semibold rounded-full border border-rose-500/30 hover:bg-rose-500/10 transition-all text-lg flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              How It Works
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: 699, prefix: '$', label: 'Certification' },
              { value: 5.99, prefix: '$', suffix: '/mo', label: 'Membership' },
              { value: 100, suffix: '+', label: 'Booking Network' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-rose-300">
                  {stat.prefix}
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-rose-100/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-rose-500/50 uppercase tracking-widest">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronRight className="w-5 h-5 text-rose-500/50 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works - The Flywheel */}
      <section id="how-it-works" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
              <Zap className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium text-rose-400">The Business Model</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              The Worship Collective Flywheel
            </h2>
            <p className="text-lg text-rose-100/70">
              A self-sustaining ecosystem where excellence creates opportunity,
              and opportunity fuels excellence.
            </p>
          </div>

          {/* Flywheel Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: Award,
                title: 'Get Certified',
                description: '$699 certification program validates your vocal excellence and leadership capability through rigorous assessment.',
                color: 'rose',
              },
              {
                step: '02',
                icon: Globe,
                title: 'Join Network',
                description: '$5.99/month membership places you in the cross-tenant booking network visible to all Ministry Motion churches.',
                color: 'pink',
              },
              {
                step: '03',
                icon: Calendar,
                title: 'Get Booked',
                description: 'Churches with open service slots browse certified members and book you for their worship services.',
                color: 'fuchsia',
              },
              {
                step: '04',
                icon: DollarSign,
                title: 'Get Paid',
                description: 'Receive compensation for your ministry. Your certification becomes income. Passion meets profession.',
                color: 'violet',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-2xl bg-stone-900/50 border border-rose-500/10 hover:border-rose-500/30 transition-all h-full">
                  <div className="text-5xl font-bold text-rose-500/20 mb-4">{item.step}</div>
                  <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-rose-100/60 text-sm">{item.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-rose-500/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Churches Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <Building2 className="w-4 h-4 text-rose-400" />
                <span className="text-sm font-medium text-rose-400">For Churches</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-white">Never have an empty</span>
                <br />
                <span className="bg-gradient-to-r from-rose-300 to-pink-400 bg-clip-text text-transparent">
                  worship slot again.
                </span>
              </h2>
              <p className="text-lg text-rose-100/70 mb-8 leading-relaxed">
                Your worship leader is sick. Your backup is on vacation. Your service is in 3 days.
                <br /><br />
                With the Worship Collective network, browse pre-vetted, certified worship leaders
                from other Ministry Motion churches and book them instantly.
              </p>
              <div className="space-y-4">
                {[
                  'Browse certified leaders by skill level, style, and availability',
                  'View vocal assessments, video recordings, and church endorsements',
                  'Book with confidence—every member passed rigorous certification',
                  'Handle all logistics through the platform',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-rose-100/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-pink-500/20 blur-3xl rounded-full" />
              <div className="relative bg-gradient-to-br from-stone-900 to-stone-950 rounded-3xl p-8 border border-rose-500/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-rose-400" />
                    <span className="font-semibold">Available This Weekend</span>
                  </div>
                  <span className="text-xs text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full">12 Leaders</span>
                </div>

                {/* Available leaders preview */}
                <div className="space-y-4 mb-6">
                  {[
                    { name: 'Sarah M.', church: 'Grace Community', rating: 4.9, style: 'Contemporary', certified: 'Advanced' },
                    { name: 'Marcus J.', church: 'Faith Chapel', rating: 4.8, style: 'Gospel', certified: 'Master' },
                    { name: 'Emily R.', church: 'New Life Church', rating: 4.7, style: 'Hymns/Blended', certified: 'Certified' },
                  ].map((leader, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-rose-500/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400/30 to-pink-500/30 flex items-center justify-center text-lg font-medium">
                        {leader.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-rose-100">{leader.name}</span>
                          <BadgeCheck className="w-4 h-4 text-rose-400" />
                        </div>
                        <div className="text-xs text-rose-100/50 truncate">{leader.church} · {leader.style}</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 text-rose-400 fill-rose-400" />
                          <span className="text-rose-100">{leader.rating}</span>
                        </div>
                        <div className="text-xs text-rose-400">{leader.certified}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 text-center bg-rose-500/20 text-rose-300 font-medium rounded-xl border border-rose-500/20 hover:bg-rose-500/30 transition-colors">
                  View All Available Leaders
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Worship Leaders Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-pink-500/10 blur-3xl rounded-full" />
                <div className="relative bg-gradient-to-br from-stone-900 to-stone-950 rounded-3xl p-8 border border-rose-500/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                      <Crown className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Collective Member</div>
                      <div className="text-rose-400 text-sm">Advanced Certification</div>
                    </div>
                  </div>

                  {/* Earnings tracker */}
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 mb-6">
                    <div className="text-sm text-rose-100/60 mb-1">This Month&apos;s Bookings</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-rose-300">$1,240</span>
                      <span className="text-sm text-green-400">+4 services</span>
                    </div>
                  </div>

                  {/* Recent bookings */}
                  <div className="space-y-3">
                    {[
                      { church: 'First Baptist', date: 'This Sunday', amount: '$350' },
                      { church: 'Grace Community', date: 'Last Week', amount: '$350' },
                      { church: 'New Hope', date: '2 Weeks Ago', amount: '$280' },
                    ].map((booking, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div>
                          <span className="text-rose-100">{booking.church}</span>
                          <span className="text-rose-100/50 ml-2">· {booking.date}</span>
                        </div>
                        <span className="text-green-400 font-medium">{booking.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
                <Mic2 className="w-4 h-4 text-rose-400" />
                <span className="text-sm font-medium text-rose-400">For Worship Leaders</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-white">Turn your calling</span>
                <br />
                <span className="bg-gradient-to-r from-rose-300 to-pink-400 bg-clip-text text-transparent">
                  into income.
                </span>
              </h2>
              <p className="text-lg text-rose-100/70 mb-8 leading-relaxed">
                You&apos;ve invested thousands of hours developing your gift. Now let that gift
                open doors to new ministry opportunities and real compensation.
                <br /><br />
                Every certification holder becomes part of a cross-church network where your
                excellence is visible to hundreds of Ministry Motion churches.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Build Your Profile', desc: 'Showcase your certifications, recordings, and church endorsements' },
                  { title: 'Set Your Availability', desc: 'Mark which weekends you\'re open for guest worship leading' },
                  { title: 'Accept Bookings', desc: 'Get notified when churches want to book you' },
                  { title: 'Lead & Earn', desc: 'Minister in new contexts while earning compensation' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-rose-100">{item.title}</span>
                      <span className="text-rose-100/60"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certification Journey */}
      <section id="certification" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
              <Target className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium text-rose-400">$699 Certification Program</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Earn your credential
            </h2>
            <p className="text-lg text-rose-100/70">
              A rigorous certification process that validates your excellence and
              opens the door to the cross-tenant booking network.
            </p>
          </div>

          {/* Certification requirements grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Mic2,
                title: 'Vocal Assessment',
                requirement: '75%+ Score',
                description: 'Pass our 1000-dimension AI vocal analysis covering pitch accuracy, tone quality, and breath control.'
              },
              {
                icon: Trophy,
                title: 'XP Achievement',
                requirement: '5,000 XP',
                description: 'Demonstrate commitment through platform engagement: courses, practice, and community participation.'
              },
              {
                icon: BookOpen,
                title: 'Course Completion',
                requirement: '3+ Courses',
                description: 'Complete foundational courses in vocal technique, worship theology, and leadership skills.'
              },
              {
                icon: Heart,
                title: 'Devotional Leadership',
                requirement: '10+ Led',
                description: 'Demonstrate spiritual depth by leading team devotionals and prayer sessions in your church.'
              },
              {
                icon: Music,
                title: 'Performance Hours',
                requirement: '50+ Hours',
                description: 'Accumulate tracked performance time through services, rehearsals, and practice sessions.'
              },
              {
                icon: Award,
                title: 'Church Endorsement',
                requirement: 'Pastor Approval',
                description: 'Receive official endorsement from your worship director and/or senior pastor.'
              },
            ].map((req, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-stone-900/50 to-stone-950/50 border border-rose-500/10 hover:border-rose-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500/20 transition-colors">
                  <req.icon className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{req.title}</h3>
                <div className="text-rose-400 text-sm font-medium mb-3">{req.requirement}</div>
                <p className="text-sm text-rose-100/60">{req.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-rose-100/50 text-sm mb-4">Average certification timeline</p>
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-stone-900/50 rounded-full border border-rose-500/20">
              <span className="text-rose-100/70">Start</span>
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-8 h-1 bg-gradient-to-r from-rose-500/50 to-pink-400/80 rounded-full" />
                ))}
              </div>
              <span className="text-rose-400 font-semibold">6 months</span>
              <ChevronRight className="w-4 h-4 text-rose-400" />
              <span className="text-rose-300">Certified</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credential Tiers */}
      <section id="credentials" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
              <Award className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium text-rose-400">Credential Tiers</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Three levels of excellence
            </h2>
            <p className="text-lg text-rose-100/70">
              Progress through tiers as you demonstrate mastery. Higher tiers unlock
              better booking visibility and premium rates.
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
                rate: '$150-250',
                requirements: ['Complete certification program', 'Pass vocal assessment (75%+)', '80%+ consistency score']
              },
              {
                level: 'Advanced',
                color: 'from-rose-400 to-pink-500',
                borderColor: 'border-rose-500/30',
                bgColor: 'bg-rose-500/10',
                rate: '$250-400',
                requirements: ['Lead 10+ booked services', 'Mentor 2 new members', '90%+ excellence score'],
                featured: true
              },
              {
                level: 'Master',
                color: 'from-violet-400 to-purple-500',
                borderColor: 'border-violet-500/30',
                bgColor: 'bg-violet-500/10',
                rate: '$400-600+',
                requirements: ['50+ successful bookings', 'Published worship content', 'Board certification']
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border ${tier.borderColor} ${tier.bgColor} ${tier.featured ? 'scale-105' : ''}`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-rose-400 to-pink-500 text-white text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-6`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold text-center mb-2 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                  {tier.level}
                </h3>
                <div className="text-center text-rose-100/70 text-sm mb-6">
                  <span className="font-semibold text-white">{tier.rate}</span> per service
                </div>
                <ul className="space-y-3">
                  {tier.requirements.map((req, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-rose-100/70">
                      <Check className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6">
              <DollarSign className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium text-rose-400">Investment</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-rose-100/70">
              One-time certification. Low monthly membership. Unlimited earning potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Certification */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-stone-900 to-stone-950 border border-rose-500/20 hover:border-rose-500/40 transition-all"
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 mb-4">
                  <Award className="w-4 h-4 text-rose-400" />
                  <span className="text-sm font-medium text-rose-400">Certification</span>
                </div>
                <p className="text-rose-100/60 text-sm">One-time investment to join the network</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold text-white">$699</span>
                  <span className="text-rose-100/50">one-time</span>
                </div>
                <p className="text-rose-100/40 text-sm">Payment plans available</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Complete certification curriculum',
                  'AI vocal assessment & coaching',
                  'Leadership training modules',
                  'Church endorsement coordination',
                  'Credential verification badge',
                  'Profile setup in booking network',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-rose-400" />
                    </div>
                    <span className="text-rose-100/80">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={openBetaModal}
                className="block w-full py-4 text-center bg-white/5 border border-rose-500/30 text-rose-100 font-bold rounded-full hover:bg-rose-500/10 transition-all text-lg"
              >
                Join Beta Waitlist
              </button>
            </motion.div>

            {/* Membership */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-stone-900 to-stone-950 border border-rose-500/40 hover:border-rose-500/60 transition-all"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-rose-400 to-pink-500 text-white text-sm font-bold rounded-full">
                Required After Certification
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 mb-4">
                  <Crown className="w-4 h-4 text-rose-300" />
                  <span className="text-sm font-medium text-rose-300">Network Membership</span>
                </div>
                <p className="text-rose-100/60 text-sm">Stay visible in the booking network</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold text-white">$5.99</span>
                  <span className="text-rose-100/50">/month</span>
                </div>
                <p className="text-rose-100/40 text-sm">or $59/year (save 18%)</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { feature: 'Active listing in booking network', included: true },
                  { feature: 'Booking request notifications', included: true },
                  { feature: 'Member community access', included: true },
                  { feature: 'Continued AI coaching access', included: true },
                  { feature: 'Profile analytics & insights', included: true },
                  { feature: 'Priority placement for Master tier', included: true },
                  { feature: 'Earnings dashboard & history', included: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-rose-400" />
                    </div>
                    <span className="text-rose-100/80">{item.feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={openBetaModal}
                className="block w-full py-4 text-center bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-rose-500/30 transition-all text-lg"
              >
                Join Beta Waitlist
              </button>
            </motion.div>
          </div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto text-center"
          >
            <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/20">
              <Briefcase className="w-8 h-8 text-rose-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">The Math Works</h3>
              <p className="text-rose-100/70 mb-4">
                At just 3 bookings per year at the Certified tier ($200 avg), you&apos;ve paid for certification and membership. Everything after that is profit.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-rose-100/50">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>ROI positive by booking #3</span>
                </div>
              </div>
            </div>
          </motion.div>
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
                q: 'How does the cross-tenant booking work?',
                a: 'Every Ministry Motion church can see certified Collective members from other churches. When a church has an open worship slot, they can browse available leaders, view their profiles and credentials, and send a booking request. The leader accepts or declines, and logistics are handled through the platform.'
              },
              {
                q: 'Do I need my church\'s permission to join?',
                a: 'Yes. Part of the certification process requires endorsement from your senior pastor or worship director. This ensures everyone is aligned and your church supports your participation in the network.'
              },
              {
                q: 'How much can I realistically earn?',
                a: 'It depends on your availability and tier. Certified members typically earn $150-250 per service, Advanced members $250-400, and Master members $400-600+. Members who make themselves available most weekends often earn $500-1500/month.'
              },
              {
                q: 'What if I\'m not ready for certification?',
                a: 'Start with Ministry Motion\'s free AI vocal coaching through your church. Build your skills, complete courses, and track your progress. When you hit the benchmarks, you\'ll be ready to apply for certification.'
              },
              {
                q: 'Is the $5.99/month required after certification?',
                a: 'Yes, the monthly membership keeps your profile active in the booking network. If you cancel, your profile becomes inactive but your certification remains valid. You can reactivate anytime.'
              },
              {
                q: 'Can churches see my availability before booking?',
                a: 'Yes. You set your availability calendar directly in the platform. Churches only see leaders who have marked themselves available for the dates they need.'
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="border border-rose-500/20 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-rose-500/5 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-medium text-rose-100">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-rose-400 transition-transform ${activeFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-5 pb-5 text-rose-100/70">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-pink-500/20 to-rose-600/20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-rose-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-rose-300" />
              <span className="text-sm font-medium text-rose-200">Beta launching soon</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-200 via-pink-300 to-rose-200 bg-clip-text text-transparent">
                Your gift deserves to be shared.
              </span>
            </h2>
            <p className="text-xl text-rose-100/70 mb-10 max-w-2xl mx-auto">
              Join the waitlist for the first cross-church worship leader network.
              Certification begins when beta launches.
            </p>

            <ShimmerButton
              onClick={openBetaModal}
              className="h-16 px-10 text-xl font-semibold"
              background="linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)"
            >
              Join Beta Waitlist
            </ShimmerButton>

            <p className="text-sm text-rose-100/40 mt-6">
              Limited spots available. Be among the first certified Collective members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-rose-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-rose-100">Worship Collective</span>
                <div className="text-xs text-rose-500/60">By Ministry Motion</div>
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm text-rose-100/60">
              <Link href="/home" className="hover:text-rose-100 transition-colors">Ministry Motion</Link>
              <Link href="/pricing" className="hover:text-rose-100 transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-rose-100 transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-rose-100 transition-colors">Terms</Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-rose-500/10 text-center text-sm text-rose-100/40">
            © {new Date().getFullYear()} Worship Collective by Ministry Motion. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
