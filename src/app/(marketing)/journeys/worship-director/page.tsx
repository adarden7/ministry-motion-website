'use client';

import { useMarketing } from '@/context/MarketingContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Users,
  BarChart3,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  Music,
  Layers,
} from 'lucide-react';

// Screenshot placeholder component for consistent appearance
function ScreenshotPlaceholder({ description }: { description: string }) {
  return (
    <div className="bg-muted rounded-lg aspect-video flex items-center justify-center border border-border">
      <span className="text-muted-foreground text-sm text-center px-4">Screenshot: {description}</span>
    </div>
  );
}

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

export default function WorshipDirectorJourneyPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Music className="w-4 h-4 text-violet-300" />
            <span className="text-sm font-medium text-violet-200">Worship Director Journey</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Mike's Journey:<br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              From Reactive to Strategic Leadership
            </span>
          </h1>

          <p className="text-lg text-violet-100/80 mb-6 max-w-2xl">
            Mike Stevens, Worship Director at Grace Fellowship (400 members), was managing
            23 worship team members across spreadsheets and group chats. See how 90 days
            changed his entire leadership approach.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-violet-200">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>400 members</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              <span>Grace Fellowship</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>23-person worship team</span>
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
            label="Day 1 — Director Onboarding"
            icon={Zap}
            color="bg-violet-50 border-violet-200 text-violet-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">A platform built for directors, not just worship leaders</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Mike is greeted with the Staff Room — the AI Advisory Council overview that gives
            him command of all agents, teams, and analytics in one pane. His 23 team members
            import from PCO in under two minutes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Staff Room — AI Advisory Council overview"
              description="Mike sees all 7 AI agents at a glance: Virtuoso Coach, Shepherd, Liturgist, Position Matcher, Succession Planner, and more. Each agent shows its last action and current alerts."
              screenshot="Staff Room dashboard showing AI Advisory Council with 7 agent cards, last-action timestamps, and 2 pending alert badges on Shepherd Agent"
            />
            <MilestoneCard
              title="Team import from PCO — 23 worship team members"
              description="Planning Center sync imports all 23 team members with their roles, contact info, and last service participation dates. No spreadsheet needed."
              screenshot="PCO team import screen showing 23 member cards with role badges (vocalist, musician, sound tech) and sync confirmation checkmarks"
            />
            <MilestoneCard
              title="Upload first service video for analysis"
              description="Mike uploads a recent Sunday service YouTube link. AI queues full analysis: song detection, singer identification, God Quotient, and transition scoring."
              screenshot="Service video upload screen with YouTube URL pasted, analysis queue progress bar showing 4 analysis steps: detect, identify, score, report"
            />
            <MilestoneCard
              title="Journey Pipeline auto-populated"
              description="Based on PCO data and attendance history, the Connect → Grow → Serve → Go pipeline automatically places team members in their estimated journey stage."
              screenshot="Journey Pipeline visualization showing 23 worship team members distributed across Connect, Grow, Serve, and Go stages with member avatars"
            />
          </div>
        </section>

        {/* ── WEEK 1 ────────────────────────────────────────────── */}
        <section id="week-1">
          <TimelineStepBadge
            label="Week 1 — First Insights"
            icon={BarChart3}
            color="bg-blue-50 border-blue-200 text-blue-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">Data replaces instinct with evidence</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The first full service scorecard reveals planned vs. actual variance. The Shepherd Agent
            flags two team members showing patterns associated with burnout risk.
            The Liturgist Agent drafts a worship arc for Easter — six weeks in advance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Full service scorecard with planned-vs-actual variance"
              description="Every segment compared: planned 4 minutes, actual 6.5 minutes. Transition quality, God Quotient, and theological consistency all scored automatically."
              screenshot="Service scorecard showing planned vs. actual segment timing table, God Quotient score 8.1/10, and 3 variance flags in yellow"
            />
            <MilestoneCard
              title="Live analysis test — Wednesday evening service"
              description="Mike tests real-time analysis during Wednesday evening rehearsal. The live dashboard shows vocal health, song-by-song progress, and audience participation signals."
              screenshot="Live analysis dashboard showing real-time vocal health meter, current song segment timer, and congregation engagement indicator"
            />
            <MilestoneCard
              title="Shepherd Agent — 2 at-risk team members flagged"
              description="The Shepherd Agent detects patterns associated with burnout risk in two vocalists based on practice frequency decline, participation drop, and communication gaps."
              screenshot="Shepherd Agent alert panel showing 2 flagged members with pattern indicators: reduced practice sessions and 2 missed service confirmations"
            />
            <MilestoneCard
              title="Liturgist Agent — Easter worship arc suggested"
              description="The Liturgist Agent proposes a 6-week Easter worship arc with song selections, theological thread, and key transitions — all aligned to the church calendar."
              screenshot="Liturgist Agent Easter arc proposal showing 6-week timeline with recommended songs, theological themes, and key progression map"
            />
          </div>
        </section>

        {/* ── MONTH 1 ───────────────────────────────────────────── */}
        <section id="month-1">
          <TimelineStepBadge
            label="Month 1 — Systems Running"
            icon={Layers}
            color="bg-emerald-50 border-emerald-200 text-emerald-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">The platform is doing the operational work</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Four 30-day service prep timelines are running automatically. The Succession Planner
            has identified two leadership pipeline gaps. Both at-risk team members have re-engaged.
            The Board Health Score baseline is set.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="4 automated service prep timelines active"
              description="30-day prep timelines for the next 4 services are running: milestone reminders, chart deadlines, team confirmations, and sound check scheduling — automated."
              screenshot="Service prep timeline dashboard showing 4 active timelines with milestone progress bars, upcoming deadline alerts, and team confirmation status"
            />
            <MilestoneCard
              title="Succession Planner — 2 pipeline gaps identified"
              description="The Succession Planner flags that the Worship Leader and Lead Vocalist roles have no identified succession candidates. Two development candidates are recommended."
              screenshot="Succession Planner showing role coverage matrix with 2 red gaps for Worship Leader and Lead Vocalist, with 2 candidate recommendations highlighted"
            />
            <MilestoneCard
              title="At-risk interventions working — both members re-engaged"
              description="Mike followed up using the communication template the Shepherd Agent drafted. Both flagged members have re-engaged: practice sessions resumed, services confirmed."
              screenshot="Shepherd Agent follow-up tracker showing 2 previously flagged members now showing green re-engagement status with last-practice dates"
            />
            <MilestoneCard
              title="Board Health Score baseline — 74 of 100"
              description="The platform establishes Mike's baseline Board Health Score across 5 dimensions: team depth, theological consistency, engagement, succession readiness, and member care."
              screenshot="Board Health Score dashboard showing overall score 74/100 with 5 dimension gauges and trend direction arrows"
            />
          </div>
        </section>

        {/* ── MONTH 3 ───────────────────────────────────────────── */}
        <section id="month-3">
          <TimelineStepBadge
            label="Month 3 — Strategic Impact"
            icon={TrendingUp}
            color="bg-amber-50 border-amber-200 text-amber-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">The board is asking for more data</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The Health Score has improved from 74 to 82. A quarterly comparison report
            auto-generated in 30 seconds. Denominational leadership has asked to see the approach.
            Three new pipeline leaders have been identified.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Health Score improved: 74 to 82"
              description="Across all 5 dimensions, the Worship Ministry Health Score climbed from 74 to 82 in 90 days — driven by succession planning, engagement improvements, and consistent service quality."
              screenshot="Board Health Score trend chart showing week-by-week improvement from 74 to 82 with dimension-level breakdown for each improvement driver"
            />
            <MilestoneCard
              title="Quarterly comparison report — auto-generated"
              description="A full quarterly report covering service quality, team health, engagement trends, and goal progress auto-generates in under 30 seconds. Ready to share with the senior pastor."
              screenshot="Quarterly report PDF preview showing executive summary, 4 key charts, health score trend, and board-ready formatting with church branding"
            />
            <MilestoneCard
              title="Denominational rollup shared with district leadership"
              description="Mike's district leader sees the quarterly report and asks for a denominational rollup. The multi-campus module generates a district-level summary instantly."
              screenshot="Denominational rollup view showing district-level aggregate metrics across 8 churches with benchmarking and ranking indicators"
            />
            <MilestoneCard
              title="Succession Planner — 3 new pipeline leaders identified"
              description="With 3 months of behavioral data, the Succession Planner has now identified 3 strong leadership candidates across the worship team for development pipeline entry."
              screenshot="Succession Planner candidate list showing 3 recommended leaders with readiness scores, growth trajectory indicators, and suggested next development steps"
            />
          </div>
        </section>

        {/* Results Summary */}
        <section>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Mike's 3-Month Results</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">From reactive manager to strategic director</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ResultMetric value="74→82" label="Health Score" sublabel="8-point improvement" />
            <ResultMetric value="2" label="At-risk members" sublabel="Both re-engaged" />
            <ResultMetric value="3" label="New pipeline leaders" sublabel="Identified by AI" />
            <ResultMetric value="4" label="Auto-running timelines" sublabel="Service prep cycles" />
          </div>

          <Card className="p-6 border border-border bg-muted/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                <Music className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Mike Stevens, Worship Director</p>
                <p className="text-muted-foreground text-sm italic">
                  "I used to manage people reactively — something had to go wrong before I noticed.
                  Now the Shepherd Agent tells me when someone's trajectory is changing, weeks before
                  it becomes a problem. That shift alone changed how I lead."
                </p>
                <p className="text-xs text-muted-foreground mt-2">Grace Fellowship, 400 members</p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-bold mb-3">Start Your Journey</h2>
            <p className="text-violet-100 mb-6 max-w-md mx-auto">
              Lead your worship ministry with data and AI-assisted insight.
              AI facilitates and guides — humans always in the loop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={openBetaModal}
                className="bg-white text-violet-700 hover:bg-violet-50 font-semibold px-8 py-3"
              >
                Sign Up for Beta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-3"
                asChild
              >
                <a href="/journeys/ministries-director">See Ministries Director Journey</a>
              </Button>
            </div>
            <p className="text-violet-200/70 text-xs mt-4">
              PCO integration included · 30-day free trial · No credit card required
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
