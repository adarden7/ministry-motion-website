'use client';

import { useMarketing } from '@/context/MarketingContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  Layers,
  Brain,
  Star,
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

export default function MinistriesDirectorJourneyPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Users className="w-4 h-4 text-emerald-300" />
            <span className="text-sm font-medium text-emerald-200">Ministries Director Journey</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Angela's Journey:<br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              From Spreadsheet Chaos to Coordinated Ministry
            </span>
          </h1>

          <p className="text-lg text-emerald-100/80 mb-6 max-w-2xl">
            Angela Rodriguez, General Ministries Director at New Hope Baptist (600 members),
            was managing 6 ministries across disconnected tools. See how the platform unified
            her entire operation in 90 days.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-emerald-200">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>600 members</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>New Hope Baptist Church</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span>6 active ministry areas</span>
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
            label="Day 1 — Ministry Setup"
            icon={Zap}
            color="bg-emerald-50 border-emerald-200 text-emerald-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">Six ministries configured in one afternoon</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Angela configures all 6 ministry containers, imports 47 members, and watches
            the Position Matcher Agent run its first batch matching. Learning paths
            are automatically assigned based on each member's current journey stage.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Configure 6 ministry containers"
              description="Children's, Youth, Worship, Welcome, Small Groups, and Missions containers are set up with pre-built role templates, permission levels, and ministry descriptions."
              screenshot="Ministry containers setup screen showing 6 ministry cards with role templates, member capacity settings, and ministry leader assignment fields"
            />
            <MilestoneCard
              title="Import 47 members from spreadsheet and PCO"
              description="Angela uploads a CSV export from her previous system and connects PCO. 47 members are imported with profile data, ministry history, and contact info."
              screenshot="Member import wizard showing CSV upload progress, PCO sync running in parallel, and 47 member cards populating in real time"
            />
            <MilestoneCard
              title="Position Matcher Agent — first batch matching"
              description="The Position Matcher Agent analyzes spiritual gifts assessments, ministry history, and availability data to suggest role matches for all 47 imported members."
              screenshot="Position Matcher results showing 47 member profiles with top-matched ministry roles, match confidence scores, and spiritual gifts alignment indicators"
            />
            <MilestoneCard
              title="Learning paths auto-assigned by journey stage"
              description="Connect-stage members are auto-enrolled in orientation courses. Grow-stage members receive discipleship content. Serve-stage members get leadership development tracks."
              screenshot="Learning path assignment overview showing members grouped by journey stage with auto-assigned course tracks and enrollment confirmation status"
            />
          </div>
        </section>

        {/* ── WEEK 1 ────────────────────────────────────────────── */}
        <section id="week-1">
          <TimelineStepBadge
            label="Week 1 — Data Flowing In"
            icon={Brain}
            color="bg-teal-50 border-teal-200 text-teal-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">Intelligence emerges quickly</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            15 spiritual gifts assessments are completed in the first week. The Position Matcher
            surfaces three concrete recommendations. The Automation Engine handles 8 onboarding flows
            without Angela sending a single manual message.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="15 spiritual gifts assessments completed"
              description="15 members complete the spiritual gifts assessment in week one through automated invitations. Results flow directly into the Position Matcher and member profiles."
              screenshot="Spiritual gifts assessment dashboard showing 15 completed assessments with gift distribution chart and top gifts across the congregation"
            />
            <MilestoneCard
              title="Position Matcher — 3 specific ministry recommendations"
              description="Based on assessment results and ministry history, the Position Matcher recommends 3 members for children's ministry with detailed gift-to-role alignment explanations."
              screenshot="Position Matcher recommendation panel showing 3 members with children's ministry fit scores, specific gift matches, and one-click recommendation workflow"
            />
            <MilestoneCard
              title="Automation Engine — 8 new member onboarding flows"
              description="8 new members who registered this week are automatically enrolled in the onboarding flow: welcome message, orientation invite, small group assignment, and first check-in reminder."
              screenshot="Automation Engine activity log showing 8 active onboarding flows with step completion status, next scheduled action, and member response tracking"
            />
            <MilestoneCard
              title="Cross-ministry analytics — overlap patterns"
              description="Angela sees a cross-ministry overlap view for the first time: 6 members serving in 3 or more ministries simultaneously. A conversation she didn't know she needed to have."
              screenshot="Cross-ministry analytics showing member overlap heatmap with 6 members highlighted in orange for high involvement and average hours-per-week estimates"
            />
          </div>
        </section>

        {/* ── MONTH 1 ───────────────────────────────────────────── */}
        <section id="month-1">
          <TimelineStepBadge
            label="Month 1 — Patterns Visible"
            icon={Target}
            color="bg-blue-50 border-blue-200 text-blue-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">Problems surfaces before they become crises</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Four burnout risk warnings have been actioned. The course-to-role qualification pathway
            is active. Two overcommitted members are identified and conversations are had.
            The Welcome Team gap is flagged for strategic action.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="4 burnout risk warnings actioned"
              description="The Shepherd Agent detects patterns associated with burnout risk in 4 volunteers based on service frequency, participation signals, and engagement decline. Angela acts early."
              screenshot="Shepherd Agent burnout monitoring panel showing 4 flagged members with risk pattern indicators and AI-drafted pastoral check-in message templates"
            />
            <MilestoneCard
              title="Course-to-role qualification pathway active"
              description="Members who complete the Children's Ministry Foundations course are automatically recommended for volunteer roles. First 3 completions are linked to open positions."
              screenshot="Course-to-role pathway dashboard showing qualification requirements for 4 ministry roles with member progress bars and completion triggers"
            />
            <MilestoneCard
              title="2 members identified as overcommitted"
              description="The overlap analytics flag 2 members serving in 4 or more ministries. Angela uses the communication tool to have care conversations — both receive adjusted roles."
              screenshot="Overcommitment alert showing 2 member profiles with ministry load breakdown, hours estimates, and recommended role reduction suggestions"
            />
            <MilestoneCard
              title="Ministry gap — Welcome Team needs 3 more members"
              description="The ministry gap analysis compares current capacity against service-day needs. The Welcome Team is 3 volunteers short of Sunday coverage — Angela begins recruitment."
              screenshot="Ministry gap analysis showing Welcome Team capacity chart with current vs. needed volunteer count, open role cards, and recruitment campaign launch button"
            />
          </div>
        </section>

        {/* ── MONTH 3 ───────────────────────────────────────────── */}
        <section id="month-3">
          <TimelineStepBadge
            label="Month 3 — Tangible Outcomes"
            icon={TrendingUp}
            color="bg-amber-50 border-amber-200 text-amber-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">The data proves the case for investment</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The first members are promoted through a course-completion qualification pathway.
            Volunteer retention is up 15%. Six members are now serving in matched ministry roles.
            The board report generates in 30 seconds.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="First qualified-by-course-completion promotions"
              description="2 members complete the Children's Ministry Foundations course and are promoted to their first volunteer role through the qualification pathway — a milestone Angela can show the board."
              screenshot="Course-to-role promotion milestone screen showing 2 member cards with completed course badges, role assignment confirmation, and journey stage advancement"
            />
            <MilestoneCard
              title="Volunteer retention up 15 percent"
              description="Comparing month 3 volunteer active rate to the pre-platform baseline, Angela documents a 15% improvement in retention — attributed to early intervention and better role matching."
              screenshot="Volunteer retention analytics showing month-over-month retention trend with baseline comparison line and 15% improvement annotation"
            />
            <MilestoneCard
              title="6 members serving in matched ministry roles"
              description="Six members placed through Position Matcher recommendations are now actively serving. Their engagement scores are tracked and all 6 show positive trajectory."
              screenshot="Matched placement outcomes dashboard showing 6 member success cards with placement date, ministry role, current engagement score, and weeks active"
            />
            <MilestoneCard
              title="Board report auto-generated with engagement metrics"
              description="A full board-ready report with volunteer numbers, retention rate, course completions, ministry coverage, and engagement metrics auto-generates in under 30 seconds."
              screenshot="Board report preview PDF showing ministry engagement summary, volunteer health scorecard, course completion data, and retention chart with church branding"
            />
          </div>
        </section>

        {/* Results Summary */}
        <section>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Angela's 3-Month Results</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">Coordinated ministry at scale</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ResultMetric value="+15%" label="Volunteer retention" sublabel="Vs. pre-platform baseline" />
            <ResultMetric value="6" label="Members in matched roles" sublabel="Via Position Matcher" />
            <ResultMetric value="4" label="Burnout risks actioned" sublabel="Early intervention" />
            <ResultMetric value="2" label="Qualified promotions" sublabel="Course-to-role pathway" />
          </div>

          <Card className="p-6 border border-border bg-muted/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Angela Rodriguez, General Ministries Director</p>
                <p className="text-muted-foreground text-sm italic">
                  "For the first time, I can see all 6 ministries in one view. The Shepherd
                  Agent flagged a burnout situation I would have missed for months. And placing
                  people in roles matched to their gifts — that's changed how volunteers experience serving."
                </p>
                <p className="text-xs text-muted-foreground mt-2">New Hope Baptist, 600 members</p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-bold mb-3">Start Your Journey</h2>
            <p className="text-emerald-100 mb-6 max-w-md mx-auto">
              Coordinate all your ministries from one platform.
              AI facilitates and guides — humans always in the loop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={openBetaModal}
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3"
              >
                Sign Up for Beta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-3"
                asChild
              >
                <a href="/journeys/church-admin">See Church Admin Journey</a>
              </Button>
            </div>
            <p className="text-emerald-200/70 text-xs mt-4">
              PCO integration included · 30-day free trial · No credit card required
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
