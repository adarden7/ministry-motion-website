'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import { ArrowLeft, ClipboardList, RotateCcw, Cpu, Heart, Database } from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

type DimensionKey = 'technical' | 'cultural' | 'data';

interface Dimension {
  key: DimensionKey;
  label: string;
  blurb: string;
  icon: typeof Cpu;
}

const dimensions: Dimension[] = [
  { key: 'technical', label: 'Technical Readiness', blurb: 'Infrastructure, devices, and tooling to run modern software.', icon: Cpu },
  { key: 'cultural', label: 'Cultural Openness', blurb: 'Leadership buy-in and team appetite for change.', icon: Heart },
  { key: 'data', label: 'Data Maturity', blurb: 'Quality and centralization of the data AI relies on.', icon: Database },
];

interface Question {
  dimension: DimensionKey;
  text: string;
}

const questions: Question[] = [
  // Technical (8)
  { dimension: 'technical', text: 'Our church has reliable internet at our rehearsal and service locations.' },
  { dimension: 'technical', text: 'Our worship team members are comfortable using apps on their phones or tablets.' },
  { dimension: 'technical', text: 'We already use at least one cloud-based tool to run ministry (setlists, scheduling, giving, etc.).' },
  { dimension: 'technical', text: 'We can record reasonably clean audio of rehearsals or services when we want to.' },
  { dimension: 'technical', text: 'Someone on our team is willing to own setup and onboarding for new software.' },
  { dimension: 'technical', text: 'Our team would adopt a new tool without significant resistance to the learning curve.' },
  { dimension: 'technical', text: 'We have a budget line (or could create one) for ministry software.' },
  { dimension: 'technical', text: 'We are comfortable replacing or consolidating tools we currently pay for.' },
  // Cultural (8)
  { dimension: 'cultural', text: 'Our senior leadership is supportive of using technology to strengthen ministry.' },
  { dimension: 'cultural', text: 'Our team sees AI as a helpful assistant rather than a threat to the human, pastoral side of ministry.' },
  { dimension: 'cultural', text: 'We are open to honest feedback about vocal performance and service quality.' },
  { dimension: 'cultural', text: 'Our culture rewards trying new approaches even when they feel unfamiliar.' },
  { dimension: 'cultural', text: 'Volunteers trust leadership to use data to care for them, not to police them.' },
  { dimension: 'cultural', text: 'We can clearly articulate why we want to improve (growth, excellence, care), not just adopt tech for its own sake.' },
  { dimension: 'cultural', text: 'Decision-makers are aligned enough to commit to a tool for at least a season.' },
  { dimension: 'cultural', text: 'We are comfortable with AI-generated suggestions as long as a human makes the final call.' },
  // Data (9)
  { dimension: 'data', text: 'We keep an up-to-date list of our members and volunteers in one place.' },
  { dimension: 'data', text: 'We track attendance or participation in some consistent way.' },
  { dimension: 'data', text: 'Our song library and service history are documented, not just in someone’s memory.' },
  { dimension: 'data', text: 'We have records of volunteer roles, teams, and serving rotations.' },
  { dimension: 'data', text: 'We could export our existing data if we switched tools.' },
  { dimension: 'data', text: 'We already look at some metrics when making ministry decisions.' },
  { dimension: 'data', text: 'Our giving and engagement data lives somewhere we can actually access.' },
  { dimension: 'data', text: 'We have reasonably consistent naming and structure across our records.' },
  { dimension: 'data', text: 'We would trust our current data enough to act on insights drawn from it.' },
];

const scaleLabels = ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'];

function tierFor(pct: number): { label: string; color: string; summary: string } {
  if (pct >= 80) return { label: 'Launch-Ready', color: 'emerald', summary: 'Your team is well positioned to adopt AI-powered ministry tools quickly and see results fast.' };
  if (pct >= 60) return { label: 'Ready', color: 'teal', summary: 'You have a strong foundation. A focused onboarding plan will get you moving with confidence.' };
  if (pct >= 40) return { label: 'Emerging', color: 'amber', summary: 'The pieces are coming together. Shore up a couple of gaps and you will be ready to adopt.' };
  return { label: 'Foundation-Building', color: 'rose', summary: 'Start with the fundamentals below before layering AI on top — it will pay off later.' };
}

const recommendations: Record<DimensionKey, { low: string; mid: string; high: string }> = {
  technical: {
    low: 'Begin with the basics: confirm reliable internet, pick one cloud tool to standardize on, and identify a single person to own setup.',
    mid: 'You have working infrastructure. Practice capturing clean rehearsal audio and consolidate overlapping subscriptions before adding more.',
    high: 'Your technical base is strong. You can move straight to advanced capabilities like vocal coaching and rehearsal-track generation.',
  },
  cultural: {
    low: 'Invest in alignment first. Help leadership and volunteers see AI as a pastoral assistant — frame it around care and excellence, not surveillance.',
    mid: 'Buy-in is forming. Run a small pilot with a willing team to build trust and create internal champions.',
    high: 'Your culture is ready for change. Lean into honest feedback loops and let early wins build momentum.',
  },
  data: {
    low: 'Centralize your records first. Get members, attendance, and song history into one consistent place so AI has something accurate to work from.',
    mid: 'Your data is usable. Tighten naming consistency and start tracking a few engagement metrics to unlock richer insights.',
    high: 'Your data maturity is high. You can trust analytics like the journey pipeline and church-health reporting from day one.',
  },
};

export default function ReadinessAssessmentPage() {
  const { openBetaModal } = useMarketing();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  const scores = useMemo(() => {
    const byDim: Record<DimensionKey, { sum: number; count: number }> = {
      technical: { sum: 0, count: 0 },
      cultural: { sum: 0, count: 0 },
      data: { sum: 0, count: 0 },
    };
    questions.forEach((q, i) => {
      const a = answers[i];
      if (a) {
        byDim[q.dimension].sum += a;
        byDim[q.dimension].count += 1;
      }
    });
    const dimPct = (k: DimensionKey) =>
      byDim[k].count ? Math.round((byDim[k].sum / (byDim[k].count * 5)) * 100) : 0;
    const technical = dimPct('technical');
    const cultural = dimPct('cultural');
    const data = dimPct('data');
    const overall = Math.round((technical + cultural + data) / 3);
    return { technical, cultural, data, overall };
  }, [answers]);

  const handleSubmit = () => {
    setShowResults(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const reset = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tier = tierFor(scores.overall);
  const recBand = (pct: number): 'low' | 'mid' | 'high' => (pct >= 67 ? 'high' : pct >= 40 ? 'mid' : 'low');

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All Resources
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/15 text-emerald-300">
              Assessment
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">
            Worship Team AI Readiness Assessment
          </h1>
          <p className="text-lg text-slate-300">
            {questions.length} quick questions across technical readiness, cultural openness, and data maturity.
            Answer honestly — you&apos;ll get a tailored readiness score and next steps in under five minutes.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* progress */}
          <div className="sticky top-16 z-10 bg-background/90 backdrop-blur py-3 mb-6 border-b border-border">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-foreground">
                {answeredCount} / {questions.length}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all"
                style={{ width: `${(answeredCount / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {dimensions.map((dim) => {
            const dimQuestions = questions
              .map((q, i) => ({ q, i }))
              .filter(({ q }) => q.dimension === dim.key);
            const DimIcon = dim.icon;
            return (
              <div key={dim.key} className="mb-10">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <DimIcon className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{dim.label}</h2>
                </div>
                <p className="text-sm text-muted-foreground ml-11 mb-5">{dim.blurb}</p>

                <div className="space-y-5">
                  {dimQuestions.map(({ q, i }) => (
                    <div key={i} className="bg-muted/30 rounded-xl border border-border p-5">
                      <p className="text-sm font-medium text-foreground mb-4">
                        {i + 1}. {q.text}
                      </p>
                      <div className="grid grid-cols-5 gap-1.5">
                        {scaleLabels.map((label, v) => {
                          const value = v + 1;
                          const selected = answers[i] === value;
                          return (
                            <button
                              key={value}
                              onClick={() => setAnswers((a) => ({ ...a, [i]: value }))}
                              className={`flex flex-col items-center gap-1.5 py-2 px-1 rounded-lg border text-center transition-colors ${
                                selected
                                  ? 'bg-emerald-500 border-emerald-500 text-white'
                                  : 'bg-background border-border hover:border-emerald-400 text-muted-foreground'
                              }`}
                            >
                              <span className="text-sm font-bold">{value}</span>
                              <span className="text-[10px] leading-tight hidden sm:block">{label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {allAnswered ? 'See my readiness score' : `Answer all ${questions.length} questions`}
            </button>
            {answeredCount > 0 && (
              <button
                onClick={reset}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Reset
              </button>
            )}
          </div>

          {/* Results */}
          {showResults && (
            <div ref={resultsRef} className="mt-14 scroll-mt-24">
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-white/10 p-8 text-center mb-6">
                <p className="text-sm text-slate-400 mb-2">Your overall AI readiness</p>
                <p className="text-6xl font-bold text-white mb-2">{scores.overall}%</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    tier.color === 'emerald'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : tier.color === 'teal'
                        ? 'bg-teal-500/20 text-teal-300'
                        : tier.color === 'amber'
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-rose-500/20 text-rose-300'
                  }`}
                >
                  {tier.label}
                </span>
                <p className="text-slate-300 max-w-lg mx-auto">{tier.summary}</p>
              </div>

              <div className="space-y-4 mb-8">
                {dimensions.map((dim) => {
                  const pct = scores[dim.key];
                  const band = recBand(pct);
                  const DimIcon = dim.icon;
                  return (
                    <div key={dim.key} className="bg-background rounded-xl border border-border p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <DimIcon className="w-4 h-4 text-emerald-600" />
                          <span className="font-semibold text-foreground">{dim.label}</span>
                        </div>
                        <span className="font-bold text-foreground">{pct}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden mb-3">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">{recommendations[dim.key][band]}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-3">Want a personalized rollout plan?</h3>
                <p className="text-emerald-50/90 mb-6 max-w-lg mx-auto">
                  Join the beta and our team will walk through your results and build a step-by-step adoption
                  plan for your worship team.
                </p>
                <button
                  onClick={openBetaModal}
                  className="px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-all"
                >
                  Join Beta Program
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
