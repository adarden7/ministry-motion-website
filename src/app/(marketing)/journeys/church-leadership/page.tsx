'use client';

import { useMarketing } from '@/context/MarketingContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Users,
  BarChart3,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  Crown,
  Layers,
  Heart,
  Target,
  Globe,
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

// Stat callout for the discipleship pipeline insight
function InsightCard({
  stat,
  description,
}: {
  stat: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 bg-muted rounded-xl border border-border">
      <div className="text-2xl font-bold text-foreground">{stat}</div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function ChurchLeadershipJourneyPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-900 to-pink-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Crown className="w-4 h-4 text-rose-300" />
            <span className="text-sm font-medium text-rose-200">Senior Pastor Journey</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Pastor James's Journey:<br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
              From Financial Reports to Spiritual ROI
            </span>
          </h1>

          <p className="text-lg text-rose-100/80 mb-6 max-w-2xl">
            Pastor James Williams, Senior Pastor at Mt. Zion Fellowship (800 members, multi-campus),
            could see his budget but not his discipleship. See how 90 days gave him the spiritual
            health data his board never had before.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-rose-200">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>800 members</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Mt. Zion Fellowship</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Multi-campus church</span>
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
            label="Day 1 — Executive View"
            icon={Zap}
            color="bg-rose-50 border-rose-200 text-rose-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">A dashboard built for pastoral leadership</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Pastor James is greeted by an executive dashboard built for senior leadership — not
            operations. Church health across 5 dimensions. All 800 members mapped in the Journey
            Pipeline. Succession overview showing 12 key positions and which ones are at risk.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Executive dashboard — at-a-glance church health"
              description="A senior pastor view aggregates health across all campuses: member growth trend, journey pipeline distribution, engagement score, giving correlation, and at-risk alerts."
              screenshot="Executive dashboard showing 5 health dimension gauges, 800-member pipeline overview, campus comparison tiles, and top AI alert cards for today"
            />
            <MilestoneCard
              title="Health Score baseline — 5 dimensions established"
              description="Ministry Motion establishes a baseline Health Score across: Discipleship Depth, Team Readiness, Leadership Pipeline, Member Care, and Community Engagement."
              screenshot="Health Score baseline dashboard showing 5 dimension gauges with initial scores, data source indicators, and 30-day trend projection lines"
            />
            <MilestoneCard
              title="Journey Pipeline orientation — 800 members mapped"
              description="For the first time, Pastor James sees all 800 members mapped across Connect, Grow, Serve, and Go stages. The platform shows exactly where the pipeline is widest and where it narrows."
              screenshot="Journey Pipeline visualization with 800 member nodes distributed across 4 stages, stage-count numbers, bottleneck indicator arrows, and campus filter controls"
            />
            <MilestoneCard
              title="Succession overview — 12 key positions, 4 at risk"
              description="The Succession Planner maps all 12 critical leadership positions across Mt. Zion. 4 positions have no identified successor — a leadership gap Pastor James has never seen this clearly before."
              screenshot="Succession coverage matrix showing 12 leadership positions with green/yellow/red coverage status, 4 red at-risk positions highlighted, and candidate bench depth bars"
            />
          </div>
        </section>

        {/* ── WEEK 1 ────────────────────────────────────────────── */}
        <section id="week-1">
          <TimelineStepBadge
            label="Week 1 — First Data-Driven Insights"
            icon={BarChart3}
            color="bg-indigo-50 border-indigo-200 text-indigo-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">The board sees spiritual health data for the first time</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The first data-driven board report replaces the financial-only narrative.
            The Succession Planner surfaces candidates for two open roles. And the engagement-to-giving
            correlation surfaces an insight that changes how Pastor James frames the budget conversation.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <MilestoneCard
              title="First spiritual health board report"
              description="The board receives a report showing Journey Pipeline distribution, member engagement trends, and discipleship depth metrics alongside the financial summary — a first for Mt. Zion."
              screenshot="Board report preview showing 2-page PDF with spiritual health section: pipeline chart, engagement trend, discipleship depth score, and giving correlation stat"
            />
            <MilestoneCard
              title="Succession pipeline review — 3 candidates for 2 roles"
              description="The Succession Planner identifies 3 candidates with strong readiness trajectories for the 2 most critical open positions. Pastor James schedules development conversations."
              screenshot="Succession candidate cards showing 3 recommended leaders with readiness scores, spiritual gifts alignment, ministry experience summary, and development plan button"
            />
            <MilestoneCard
              title="Engagement-to-giving correlation: Serve-stage gives 2.3x more"
              description="Ministry Motion surfaces a data insight: Serve-stage members at Mt. Zion give 2.3x more than Connect-stage members on average. Discipleship investment now has a financial ROI story."
              screenshot="Engagement-to-giving correlation chart showing giving level by journey stage with 2.3x multiplier annotation for Serve vs. Connect stage comparison"
            />
          </div>

          {/* Insight callout */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <InsightCard
              stat="2.3x"
              description="Serve-stage members give more than Connect-stage members on average at Mt. Zion"
            />
            <InsightCard
              stat="4"
              description="Key leadership positions with no identified succession candidate — visible for the first time"
            />
          </div>
        </section>

        {/* ── MONTH 1 ───────────────────────────────────────────── */}
        <section id="month-1">
          <TimelineStepBadge
            label="Month 1 — Board Shifts Strategy"
            icon={Target}
            color="bg-emerald-50 border-emerald-200 text-emerald-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">Data drives discipleship budget decisions</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The board votes to increase the discipleship budget based on the engagement-to-giving
            data. Eight at-risk members are being recovered through early intervention.
            The denominational leader hears about the multi-campus rollup.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <MilestoneCard
              title="Board validates increased discipleship budget"
              description="Using the engagement-to-giving correlation as justification, the board votes to increase the discipleship budget by 18% — the first data-backed budget decision in church history."
              screenshot="Board meeting minutes excerpt showing discipleship budget motion with engagement-to-giving data referenced, vote tally, and approved budget line item"
            />
            <MilestoneCard
              title="At-risk interventions reducing attrition"
              description="8 members flagged by the Shepherd Agent as detaching from the community have been contacted through pastoral care. All 8 have re-engaged in at least one community activity."
              screenshot="Shepherd Agent intervention tracker showing 8 member cards with flagged date, care action taken, and re-engagement confirmation status in green"
            />
            <MilestoneCard
              title="Denominational leader briefed on multi-campus rollup"
              description="Pastor James shares the multi-campus health rollup with his denominational district leader. The report aggregates Mt. Zion's health data across all campuses in one summary view."
              screenshot="Multi-campus rollup report showing aggregate health score, campus-by-campus comparison bar chart, and denominational ranking benchmarks"
            />
          </div>
        </section>

        {/* ── MONTH 3 ───────────────────────────────────────────── */}
        <section id="month-3">
          <TimelineStepBadge
            label="Month 3 — Transformational Leadership"
            icon={TrendingUp}
            color="bg-amber-50 border-amber-200 text-amber-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">Proving spiritual ROI becomes standard board reporting</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Health Score improved 74 to 82 across all campuses. Three new leaders placed
            through the pipeline. The district leadership is asking about denominational rollout.
            Proving spiritual ROI is now a permanent agenda item at every board meeting.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Health Score improved: 74 to 82 across all campuses"
              description="Three months of intentional intervention, succession planning, and at-risk member care have moved the overall Health Score from 74 to 82 — documented across every campus."
              screenshot="Multi-campus Health Score trend chart showing 74-to-82 improvement with campus-level breakdown lines and improvement driver annotation legend"
            />
            <MilestoneCard
              title="3 new leaders placed through the pipeline"
              description="Three members identified by the Succession Planner in week one have completed their development paths and been placed into formal leadership roles at Mt. Zion."
              screenshot="Succession Planner placement confirmation showing 3 new leader profiles with their new roles, placement date, development path completed, and welcome announcement draft"
            />
            <MilestoneCard
              title="District leadership interest in denominational rollout"
              description="Based on the district-wide briefing, three other churches in the denomination have requested access to Ministry Motion. A denominational pilot program is under discussion."
              screenshot="Denominational pilot interest summary showing 3 church interest letters, pilot program proposal framework, and district leadership sign-off confirmation"
            />
            <MilestoneCard
              title="Spiritual ROI becomes standard board reporting"
              description="The board votes to make spiritual ROI reporting — Journey Pipeline progress, engagement trends, leadership pipeline health — a permanent standing item at all quarterly meetings."
              screenshot="Board resolution document showing spiritual ROI reporting mandate motion text, unanimous vote notation, and quarterly reporting template adopted"
            />
          </div>
        </section>

        {/* Results Summary */}
        <section>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-700 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Pastor James's 3-Month Results</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">Leading with spiritual data, not just financial</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ResultMetric value="74→82" label="Health Score" sublabel="All campuses" />
            <ResultMetric value="3" label="New leaders placed" sublabel="Pipeline to role" />
            <ResultMetric value="8" label="At-risk members" sublabel="Recovered" />
            <ResultMetric value="2.3x" label="Serve-stage giving" sublabel="vs. Connect-stage" />
          </div>

          {/* Discipleship pipeline insight panel */}
          <Card className="p-6 border border-border bg-gradient-to-br from-rose-50/50 to-background mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Heart className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">The Platform's Core Insight for Senior Leaders</p>
                <p className="text-sm text-muted-foreground mt-1">
                  We monitor spiritual progression, not just event attendance. Members who move
                  through the Connect → Grow → Serve → Go pipeline show measurably stronger
                  giving, retention, and community investment. For the first time, Pastor James
                  can show the board exactly where that pipeline is strong — and where it leaks.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { stage: 'Connect', pct: '100%', color: 'bg-blue-200' },
                { stage: 'Grow', pct: '65%', color: 'bg-violet-200' },
                { stage: 'Serve', pct: '40%', color: 'bg-emerald-200' },
                { stage: 'Go', pct: '15%', color: 'bg-amber-200' },
              ].map((item) => (
                <div key={item.stage} className="text-center">
                  <div className="text-lg font-bold text-foreground">{item.pct}</div>
                  <div className={`h-1.5 rounded-full ${item.color} mx-auto mb-1`} style={{ width: item.pct }} />
                  <div className="text-xs text-muted-foreground">{item.stage}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 border border-border bg-muted/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                <Crown className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Pastor James Williams, Senior Pastor</p>
                <p className="text-muted-foreground text-sm italic">
                  "For years, our board meetings were 90% financial. The budget was the report.
                  Now we open every meeting with spiritual health: how many people advanced in their
                  discipleship journey, how many leadership gaps exist, how many at-risk members
                  were recovered. That's a different church."
                </p>
                <p className="text-xs text-muted-foreground mt-2">Mt. Zion Fellowship, 800 members, multi-campus</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Cross-journey navigation */}
        <section>
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">Explore All Role Journeys</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: '/journeys/praise-leader', label: 'Praise Leader', sub: "Subrina's story" },
              { href: '/journeys/worship-director', label: 'Worship Director', sub: "Mike's story" },
              { href: '/journeys/ministries-director', label: 'Ministries Director', sub: "Angela's story" },
              { href: '/journeys/church-admin', label: 'Church Admin', sub: "David's story" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex flex-col items-center p-4 bg-muted rounded-xl border border-border hover:border-rose-300 hover:bg-rose-50/30 transition-all text-center"
              >
                <span className="text-sm font-semibold text-foreground">{link.label}</span>
                <span className="text-xs text-muted-foreground mt-0.5">{link.sub}</span>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-700 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-bold mb-3">Start Your Journey</h2>
            <p className="text-rose-100 mb-6 max-w-md mx-auto">
              Lead your church with spiritual health data — not just financial reports.
              AI facilitates and guides — humans always in the loop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={openBetaModal}
                className="bg-white text-rose-700 hover:bg-rose-50 font-semibold px-8 py-3"
              >
                Sign Up for Beta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-3"
                asChild
              >
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
            <p className="text-rose-200/70 text-xs mt-4">
              PCO integration included · 30-day free trial · No credit card required
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
