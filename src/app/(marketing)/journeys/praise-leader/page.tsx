'use client';

import { useMarketing } from '@/context/MarketingContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Mic2,
  Music,
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  Zap,
  ArrowRight,
  Calendar,
  Award,
} from 'lucide-react';

// Screenshot placeholder component for consistent appearance
function ScreenshotPlaceholder({ description }: { description: string }) {
  return (
    <div className="bg-muted rounded-lg aspect-video flex items-center justify-center border border-border">
      <span className="text-muted-foreground text-sm text-center px-4">Screenshot: {description}</span>
    </div>
  );
}

// Timeline step header with icon and label
function TimelineStepBadge({
  label,
  icon: Icon,
  color,
}: {
  label: string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${color} mb-4`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
}

// Individual milestone card within a timeline step
function MilestoneCard({
  title,
  description,
  screenshot,
}: {
  title: string;
  description: string;
  screenshot: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-foreground text-sm">{title}</p>
          <p className="text-muted-foreground text-xs mt-0.5">{description}</p>
        </div>
      </div>
      <ScreenshotPlaceholder description={screenshot} />
    </div>
  );
}

// Result metric card for the results summary section
function ResultMetric({
  value,
  label,
  sublabel,
}: {
  value: string;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="text-center p-4 bg-muted rounded-xl border border-border">
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <p className="text-sm font-medium text-foreground">{label}</p>
      {sublabel && <p className="text-xs text-muted-foreground mt-0.5">{sublabel}</p>}
    </div>
  );
}

export default function PraiseLeaderJourneyPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Mic2 className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-200">Praise Leader Journey</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Subrina's Journey:<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              From Sunday Prep Chaos to Worship Excellence
            </span>
          </h1>

          <p className="text-lg text-blue-100/80 mb-6 max-w-2xl">
            Subrina Callwood, Praise Leader at Cornerstone Community Church (150 members),
            used to spend her Saturdays scrambling. See how Day 1 to Month 3 changed everything.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>150 members</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              <span>Cornerstone Community Church</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>PCO-connected team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Navigation */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3 overflow-x-auto">
            {['Day 1', 'Week 1', 'Month 1', 'Month 3'].map((step) => (
              <a
                key={step}
                href={`#${step.toLowerCase().replace(' ', '-')}`}
                className="flex-shrink-0 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {step}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ── DAY 1 ─────────────────────────────────────────────── */}
        <section id="day-1">
          <TimelineStepBadge
            label="Day 1 — First Login"
            icon={Zap}
            color="bg-blue-50 border-blue-200 text-blue-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">Setup in minutes, not weeks</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Subrina creates her account, selects her role, and is immediately guided through
            a setup flow built for praise leaders. Her PCO song library auto-populates and
            her first vocal assessment begins in under 10 minutes.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <MilestoneCard
              title="Role selection and onboarding"
              description="Praise leader role selected — dashboard configures itself with vocal coaching tools, service planning, and team management."
              screenshot="Role selection screen showing Praise Leader option highlighted, with church size selector and PCO integration toggle"
            />
            <MilestoneCard
              title="PCO song library auto-populated"
              description="20 songs import instantly from Planning Center Online. Keys, lyrics, and arrangement notes are all pulled in automatically."
              screenshot="Song library view showing 20 imported songs with PCO sync badge, keys, and arrangement metadata"
            />
            <MilestoneCard
              title="First vocal assessment"
              description="Real-time pitch visualization shows Subrina her vocal range, tone quality baseline, and first AI coaching suggestions within one recorded session."
              screenshot="Vocal assessment screen with live pitch visualization waveform, range indicator, and AI feedback panel"
            />
          </div>
        </section>

        {/* ── WEEK 1 ────────────────────────────────────────────── */}
        <section id="week-1">
          <TimelineStepBadge
            label="Week 1 — First Service Cycle"
            icon={Calendar}
            color="bg-emerald-50 border-emerald-200 text-emerald-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">Real feedback from a real service</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Subrina uploads her first rehearsal video, receives her first God Quotient service scorecard,
            earns XP through the Sing-Along Player, and generates SATB rehearsal tracks —
            all in the first week.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="YouTube rehearsal video upload"
              description="Subrina pastes a YouTube rehearsal link. AI automatically segments the video by song, identifies singers, and queues it for analysis."
              screenshot="Video upload screen with YouTube URL input, progress bar showing segmentation, and song detection results panel"
            />
            <MilestoneCard
              title="First service scorecard with God Quotient"
              description="AI measures lyrical God-directedness across the set. Theme coherence, theological alignment, and transition quality are scored automatically."
              screenshot="Service scorecard dashboard showing God Quotient score of 8.2/10, theme alignment bar, and 3 improvement suggestions"
            />
            <MilestoneCard
              title="Sing-Along Player — first XP and combo streak"
              description="Team members practice songs in the Sing-Along Player. Subrina earns her first 120 XP and sees her first 3x combo streak tracked on the leaderboard."
              screenshot="Sing-Along Player in session with pitch display, XP counter showing 120 points, and combo streak badge"
            />
            <MilestoneCard
              title="SATB rehearsal tracks generated"
              description="AI generates soprano, alto, tenor, and bass practice tracks from the uploaded audio. Total AI processing costs: $0.10 in AI processing costs for 4 parts."
              screenshot="SATB track builder showing 4 generated part tracks with playback controls and cost breakdown showing $0.10 in AI processing costs"
            />
          </div>
        </section>

        {/* ── MONTH 1 ───────────────────────────────────────────── */}
        <section id="month-1">
          <TimelineStepBadge
            label="Month 1 — Team in Rhythm"
            icon={Users}
            color="bg-violet-50 border-violet-200 text-violet-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">The whole team is using it</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            By month one, the Set Approval Agent is reviewing sets automatically, ensemble blend
            metrics are tracking, and 8 of 12 team members practiced independently this week.
            The data replaces guesswork.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Set Approval Agent — green checks across all criteria"
              description="The Set Approval Agent reviews Subrina's proposed set against theological criteria, key flow, and team skill levels — all checks are green for Sunday."
              screenshot="Set Approval Agent panel showing 5 green check criteria: theology, key flow, team capability, God Quotient, and transition quality"
            />
            <MilestoneCard
              title="Blend Analyst — ensemble results"
              description="Vowel uniformity at 72% and dynamic coherence improving. The Blend Analyst shows exactly which sections need attention before Sunday."
              screenshot="Blend Analyst dashboard with vowel uniformity gauge at 72%, dynamic coherence trend line, and section-specific heatmap"
            />
            <MilestoneCard
              title="Team practice dashboard — 8 of 12 practicing"
              description="8 of 12 team members have practiced at least one song this week. Subrina can see exactly who has practiced which parts without sending follow-up texts."
              screenshot="Team practice dashboard showing member list with practice checkmarks, last-active dates, and songs completed per person"
            />
            <MilestoneCard
              title="Service prep milestone tracker"
              description="5 of 7 service prep milestones complete. Subrina sees at a glance what remains — charts built, team confirmed, sound check scheduled."
              screenshot="Service prep timeline showing 5 green milestones and 2 pending items: monitor mix review and final lyric approval"
            />
          </div>
        </section>

        {/* ── MONTH 3 ───────────────────────────────────────────── */}
        <section id="month-3">
          <TimelineStepBadge
            label="Month 3 — Measurable Growth"
            icon={TrendingUp}
            color="bg-amber-50 border-amber-200 text-amber-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">The numbers tell the story</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Three months in, team blend scores have improved from 68 to 82. Subrina's own vocal
            score has risen from 7.8 to 8.9. The platform has moved her from Serve to Go on the
            discipleship journey — and celebrated every milestone along the way.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Achievement unlocked: Worship Warrior"
              description="Confetti animation plays as Subrina unlocks the 'Worship Warrior' badge for 12 consecutive weeks of team practice data and consistent God Quotient scores above 8.0."
              screenshot="Achievement celebration screen with confetti animation, Worship Warrior badge, and milestone summary showing 12-week streak"
            />
            <MilestoneCard
              title="Team blend score: 68 to 82"
              description="Quarterly blend trend chart shows steady improvement across vowel uniformity, dynamic coherence, and tonal blend — driven by consistent SATB practice."
              screenshot="Team blend trend chart showing upward curve from score 68 in week 1 to score 82 in week 12 with weekly data points"
            />
            <MilestoneCard
              title="Journey stage: Serve to Go transition"
              description="Based on 3 months of leadership activity, coaching team members, and setting standards for the whole ministry, Subrina's discipleship stage advances to Go."
              screenshot="Journey pipeline visualization showing Subrina's progression node moving from Serve stage to Go stage with transition milestone card"
            />
            <MilestoneCard
              title="Quarter dashboard — vocal score trend"
              description="Subrina's individual vocal score shows 7.8 to 8.9 over 12 weeks. The quarter dashboard auto-generates a PDF summary she can share with her worship director."
              screenshot="Quarter analytics dashboard showing vocal score trend line from 7.8 to 8.9, with practice frequency chart and PDF export button"
            />
          </div>
        </section>

        {/* Results Summary */}
        <section>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Subrina's 3-Month Results</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">What changed in 90 days</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ResultMetric value="68→82" label="Team blend score" sublabel="14-point improvement" />
            <ResultMetric value="7.8→8.9" label="Vocal score" sublabel="Quarter-over-quarter" />
            <ResultMetric value="8/12" label="Team members practicing" sublabel="Weekly average" />
            <ResultMetric value="Serve→Go" label="Journey stage" sublabel="Discipleship advancement" />
          </div>

          <Card className="p-6 border border-border bg-muted/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Mic2 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Subrina Callwood, Praise Leader</p>
                <p className="text-muted-foreground text-sm italic">
                  "I used to spend Saturdays texting the team hoping they practiced.
                  Now I open the app Thursday and already know who's ready. The data
                  means Sunday is less about hoping and more about leading."
                </p>
                <p className="text-xs text-muted-foreground mt-2">Cornerstone Community Church, 150 members</p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-bold mb-3">Start Your Journey</h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Join praise leaders like Subrina who are leading with data,
              not guesswork. AI facilitates and guides — humans always in the loop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={openBetaModal}
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3"
              >
                Sign Up for Beta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-3"
                asChild
              >
                <a href="/journeys/worship-director">See Worship Director Journey</a>
              </Button>
            </div>
            <p className="text-blue-200/70 text-xs mt-4">
              PCO integration included · 30-day free trial · No credit card required
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
