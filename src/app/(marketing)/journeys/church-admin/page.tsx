'use client';

import { useMarketing } from '@/context/MarketingContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Users,
  DollarSign,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  FileText,
  Clock,
  Layers,
  Shield,
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

export default function ChurchAdminJourneyPage() {
  const { openBetaModal } = useMarketing();

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <Shield className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-200">Church Admin Journey</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            David's Journey:<br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              From 6 Tools to 1 — and $10,608 Saved
            </span>
          </h1>

          <p className="text-lg text-amber-100/80 mb-6 max-w-2xl">
            David Kim, Church Administrator at Harvest Community (250 members), was managing
            data across 6 separate tools and spending 4 hours every month on board reports.
            See how 90 days changed the entire administrative operation.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-amber-200">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>250 members</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Harvest Community Church</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>$10,608 annual savings documented</span>
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
            label="Day 1 — Administrative Setup"
            icon={Zap}
            color="bg-amber-50 border-amber-200 text-amber-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">All the infrastructure, configured on day one</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            David connects PCO, configures communication templates, links giving integration,
            and tests the event check-in QR code — all in an afternoon. The platform
            is operational before Sunday.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="PCO sync — 47 active members imported"
              description="Planning Center Online data syncs into MinistryMotion. 47 active members import with contact details, ministry roles, group memberships, and giving history."
              screenshot="PCO sync configuration screen showing field mapping table for 12 data fields and 47 member import success confirmation"
            />
            <MilestoneCard
              title="Communication templates configured"
              description="David configures message templates for new member welcome, event reminders, giving receipts, and board reports. All personalized by journey stage automatically."
              screenshot="Communication template library showing 8 configured templates with journey-stage personalization tags highlighted and preview pane"
            />
            <MilestoneCard
              title="Giving integration connected"
              description="Stripe giving integration links in 3 minutes. Existing recurring donations carry over. A donor analytics dashboard populates immediately with historical data."
              screenshot="Giving integration setup showing Stripe connection confirmation, donor analytics dashboard with historical giving trends, and fund allocation breakdown"
            />
            <MilestoneCard
              title="Event check-in QR code tested"
              description="David generates a QR code for Sunday service check-in, tests it with his phone, and confirms attendance records link automatically to member profiles in real time."
              screenshot="QR code check-in test screen showing generated code, live attendance counter updating on phone scan, and member profile link confirmation"
            />
          </div>
        </section>

        {/* ── WEEK 1 ────────────────────────────────────────────── */}
        <section id="week-1">
          <TimelineStepBadge
            label="Week 1 — First Efficiency Wins"
            icon={Clock}
            color="bg-blue-50 border-blue-200 text-blue-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">The first signs of what's possible</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            David sends his first context-aware bulk communication, shares the platform's
            compare page with the senior pastor, and begins consolidating the three
            spreadsheets that have been his member database for years.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <MilestoneCard
              title="First context-aware bulk communication sent"
              description="David sends a single message to all 250 members. Each receives a personalized version based on their journey stage: different tone and content for Connect vs. Serve-stage members."
              screenshot="Bulk message composer showing journey-stage personalization preview with side-by-side Connect vs. Serve message variants and 250-member send confirmation"
            />
            <MilestoneCard
              title="Compare page PDF shared with senior pastor"
              description="David generates and shares the platform comparison PDF with the senior pastor. The document shows Ministry Motion vs. current tool stack on features, cost, and data fragmentation."
              screenshot="Tool comparison PDF showing Ministry Motion vs. Mailchimp + PraiseCharts + spreadsheets feature matrix with cost comparison column and data-fragmentation row"
            />
            <MilestoneCard
              title="Unified member profiles replacing 3 spreadsheets"
              description="For the first time, all member data — contact info, ministry roles, giving history, attendance — lives in one unified profile. David retires spreadsheet 1 of 3."
              screenshot="Unified member profile view showing all data tabs: Contact, Ministry, Giving, Attendance, Journey — with PCO sync badge and last-updated timestamp"
            />
          </div>
        </section>

        {/* ── MONTH 1 ───────────────────────────────────────────── */}
        <section id="month-1">
          <TimelineStepBadge
            label="Month 1 — The Business Case Is Made"
            icon={FileText}
            color="bg-emerald-50 border-emerald-200 text-emerald-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">The board approves the consolidation plan</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            David presents the tool consolidation business case to the board. It's approved.
            Mailchimp and PraiseCharts subscriptions are cancelled. $400 per month in savings
            is documented. The board report goes from 4 hours to 30 seconds.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Tool consolidation business case — board approved"
              description="The board approves the platform consolidation plan based on David's cost-savings analysis, feature comparison, and 30-day operational evidence of improved efficiency."
              screenshot="Board presentation slide deck showing tool consolidation proposal with cost comparison table, feature coverage matrix, and motion-to-approve confirmation"
            />
            <MilestoneCard
              title="Cancel Mailchimp and PraiseCharts subscriptions"
              description="With Ministry Motion handling communications and song management, Mailchimp ($149/mo) and PraiseCharts ($99/mo) subscriptions are cancelled. $248/mo savings begins immediately."
              screenshot="Subscription cancellation confirmation emails for Mailchimp and PraiseCharts side by side with monthly savings calculator showing $248/month"
            />
            <MilestoneCard
              title="$400 per month in savings documented"
              description="Adding the cancelled subscriptions plus reduced staff time for data entry and reconciliation, David documents $400 per month in combined savings for the board record."
              screenshot="Monthly savings breakdown table showing tool subscriptions cancelled, staff time saved in hours, hourly rate calculation, and total $400/month documentation"
            />
            <MilestoneCard
              title="Board report in 30 seconds — down from 4 hours"
              description="This month's board report auto-generates from live data in under 30 seconds. Attendance, giving, member growth, and ministry engagement — all formatted and board-ready."
              screenshot="Board report generation screen showing 30-second auto-generate animation and final PDF preview with attendance, giving, membership, and engagement charts"
            />
          </div>
        </section>

        {/* ── MONTH 3 ───────────────────────────────────────────── */}
        <section id="month-3">
          <TimelineStepBadge
            label="Month 3 — Full Consolidation"
            icon={TrendingUp}
            color="bg-violet-50 border-violet-200 text-violet-700"
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">Six tools become one — and the savings are real</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            All 6 previously separate tools are now replaced. Annual savings of $10,608 are
            documented. Zero data fragmentation across ministries. An estimated 14 to 25
            hours per week of administrative time have been freed.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <MilestoneCard
              title="Full tech stack consolidated: 6 tools to 1"
              description="PCO (retained), Mailchimp, PraiseCharts, an events tool, a giving platform, and a spreadsheet system — all consolidated into Ministry Motion's unified platform."
              screenshot="Tech stack consolidation summary showing 6 previous tools with red X marks all pointing to Ministry Motion logo, with final 1-platform architecture diagram"
            />
            <MilestoneCard
              title="Annual savings: $10,608 documented"
              description="David produces a 12-month savings projection for the board: $884/month in subscription savings plus 20 staff hours per week at the church's administrative rate."
              screenshot="Annual savings documentation showing itemized subscription savings of $884/month and staff time value calculation totaling $10,608 annually"
            />
            <MilestoneCard
              title="Zero data fragmentation across ministries"
              description="All 6 ministry areas now read from the same member profiles. A change in one ministry — contact update, role change, attendance record — reflects everywhere instantly."
              screenshot="Data integrity dashboard showing zero fragmentation score, last-sync timestamp, and cross-ministry data consistency report with green status on all 6 ministries"
            />
            <MilestoneCard
              title="Admin hours freed: 14 to 25 hours per week"
              description="An audit of David's pre-platform vs. post-platform weekly workflow documents 14 to 25 hours per week previously spent on data reconciliation, report building, and manual communications."
              screenshot="Time audit comparison table showing pre-platform weekly hours per admin task vs. post-platform hours with total saved hours highlighted and staff impact summary"
            />
          </div>
        </section>

        {/* Results Summary */}
        <section>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 mb-4">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">David's 3-Month Results</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">The numbers that convinced the board</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <ResultMetric value="$10,608" label="Annual savings" sublabel="Documented for board" />
            <ResultMetric value="6→1" label="Tool consolidation" sublabel="Full stack" />
            <ResultMetric value="30 sec" label="Board report time" sublabel="Down from 4 hours" />
            <ResultMetric value="14-25 hrs" label="Admin time freed" sublabel="Per week estimate" />
          </div>

          <Card className="p-6 border border-border bg-muted/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">David Kim, Church Administrator</p>
                <p className="text-muted-foreground text-sm italic">
                  "The board report used to be a whole Saturday. I'm not exaggerating — pulling
                  data from 6 different places, formatting it, hoping nothing changed before Sunday.
                  Now I click one button Thursday morning and it's done. That alone justified everything."
                </p>
                <p className="text-xs text-muted-foreground mt-2">Harvest Community Church, 250 members</p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600 rounded-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-bold mb-3">Start Your Journey</h2>
            <p className="text-amber-100 mb-6 max-w-md mx-auto">
              Consolidate your tech stack and reclaim your administrative hours.
              AI facilitates and guides — humans always in the loop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={openBetaModal}
                className="bg-white text-amber-700 hover:bg-amber-50 font-semibold px-8 py-3"
              >
                Sign Up for Beta
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-8 py-3"
                asChild
              >
                <a href="/journeys/church-leadership">See Senior Pastor Journey</a>
              </Button>
            </div>
            <p className="text-amber-200/70 text-xs mt-4">
              PCO integration included · 30-day free trial · No credit card required
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
