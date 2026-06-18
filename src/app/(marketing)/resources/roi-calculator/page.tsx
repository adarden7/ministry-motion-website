'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  Calculator,
  HeartHandshake,
  UserPlus,
  Users,
  GraduationCap,
  Crown,
  Sparkles,
} from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  display,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="flex items-center justify-between text-sm font-medium text-foreground mb-1.5">
        <span>{label}</span>
        <span className="text-violet-600 font-bold text-base">{display}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-violet-500"
      />
      {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <div className="flex items-center rounded-lg border border-border bg-background focus-within:border-violet-500 transition-colors">
        {prefix && <span className="pl-3 text-muted-foreground text-sm">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={0}
          value={Number.isFinite(value) ? value : ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full bg-transparent px-3 py-2.5 text-foreground outline-none"
        />
        {suffix && <span className="pr-3 text-muted-foreground text-sm whitespace-nowrap">{suffix}</span>}
      </div>
    </div>
  );
}

function currency(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

const pipeline = [
  { label: 'Visitor', icon: UserPlus },
  { label: 'Member', icon: Users },
  { label: 'Disciple', icon: GraduationCap },
  { label: 'Leader', icon: Crown },
];

export default function RoiCalculatorPage() {
  const { openBetaModal } = useMarketing();

  const [attendance, setAttendance] = useState(250);
  const [avgGift, setAvgGift] = useState(1500);
  const [multiplier, setMultiplier] = useState(3);
  const [newDisciplesPct, setNewDisciplesPct] = useState(8);
  const [mmMonthlyCost, setMmMonthlyCost] = useState(149);

  const r = useMemo(() => {
    const engagedGift = avgGift * multiplier;
    const transitions = Math.round(attendance * (newDisciplesPct / 100));
    const perTransition = avgGift * Math.max(0, multiplier - 1);
    const givingLift = transitions * perTransition;
    const mmAnnual = mmMonthlyCost * 12;
    const roiMultiple = mmAnnual > 0 ? givingLift / mmAnnual : 0;
    const breakevenMembers = perTransition > 0 ? Math.ceil(mmAnnual / perTransition) : Infinity;
    return { engagedGift, transitions, givingLift, mmAnnual, roiMultiple, breakevenMembers };
  }, [attendance, avgGift, multiplier, newDisciplesPct, mmMonthlyCost]);

  // Bar heights for the giving comparison (engaged bar is full height).
  const attenderBarPct = Math.max(8, (1 / multiplier) * 100);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/15 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All Resources
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-violet-400" />
            </div>
            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-violet-500/15 text-violet-300">
              Tool
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">Church Giving ROI Calculator</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Engaged disciples give far more than casual attenders. See what it&apos;s worth when Ministry Motion
            helps move people through your pipeline — and how few it takes to pay for itself.
          </p>
          <div className="flex items-center gap-2 sm:gap-3 mt-7 flex-wrap">
            {pipeline.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <div key={stage.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <Icon className="w-4 h-4 text-violet-400" />
                    <span className="text-sm text-slate-200">{stage.label}</span>
                  </div>
                  {i < pipeline.length - 1 && <span className="text-violet-400/60">→</span>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8 items-start">
          {/* Inputs */}
          <div className="lg:col-span-2 bg-muted/30 rounded-2xl border border-border p-6 space-y-6">
            <NumberField label="Average weekly attendance" value={attendance} onChange={setAttendance} suffix="people" />
            <NumberField
              label="Average annual giving per attender"
              value={avgGift}
              onChange={setAvgGift}
              prefix="$"
              suffix="/ yr"
            />
            <SliderField
              label="Engaged disciples give"
              value={multiplier}
              onChange={setMultiplier}
              min={1.5}
              max={5}
              step={0.1}
              display={`${multiplier.toFixed(1)}×`}
              hint="Discipled, connected members typically give 2–3× a casual attender."
            />
            <SliderField
              label="People moved into discipleship / year"
              value={newDisciplesPct}
              onChange={setNewDisciplesPct}
              min={1}
              max={25}
              step={1}
              display={`${r.transitions} people`}
              hint="Share of your congregation the platform helps engage each year."
            />
            <NumberField
              label="Ministry Motion plan"
              value={mmMonthlyCost}
              onChange={setMmMonthlyCost}
              prefix="$"
              suffix="/ mo"
            />
          </div>

          {/* Results */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero number */}
            <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-8 text-white text-center">
              <p className="text-sm font-medium text-violet-50/90 mb-2">Added giving per year</p>
              <p className="text-6xl font-bold tracking-tight mb-2">{currency(r.givingLift)}</p>
              <p className="text-violet-50/85">
                from moving <strong className="text-white">{r.transitions} people</strong> into real discipleship
              </p>
            </div>

            {/* The moat — bold breakeven */}
            <div className="bg-slate-900 rounded-2xl border border-violet-500/30 p-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-7 h-7 text-violet-400" />
              </div>
              <p className="text-slate-200 leading-snug">
                <span className="text-3xl font-bold text-white">
                  {Number.isFinite(r.breakevenMembers) ? r.breakevenMembers : '—'}
                </span>{' '}
                {Number.isFinite(r.breakevenMembers) && r.breakevenMembers === 1 ? 'changed life' : 'changed lives'}{' '}
                pays for Ministry Motion for the entire year.
              </p>
            </div>

            {/* Visual: the 3x moat */}
            <div className="bg-background rounded-2xl border border-border p-6">
              <p className="text-sm font-medium text-foreground mb-5 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-violet-500" /> What one engaged disciple is worth
              </p>
              <div className="flex items-end justify-around gap-6 h-44">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <span className="text-sm font-semibold text-muted-foreground">{currency(avgGift)}</span>
                  <div
                    className="w-full max-w-[120px] rounded-t-lg bg-muted"
                    style={{ height: `${attenderBarPct}%` }}
                  />
                  <span className="text-xs text-muted-foreground text-center">Casual attender</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <span className="text-sm font-bold text-violet-600">{currency(r.engagedGift)}</span>
                  <div className="w-full max-w-[120px] rounded-t-lg bg-gradient-to-t from-violet-600 to-fuchsia-400" style={{ height: '100%' }} />
                  <span className="text-xs font-medium text-foreground text-center">Engaged disciple</span>
                </div>
              </div>
            </div>

            {/* Two simple stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background rounded-2xl border border-border p-6 text-center">
                <p className="text-3xl font-bold text-foreground">
                  {r.roiMultiple >= 1 ? `${r.roiMultiple.toFixed(0)}×` : `${r.roiMultiple.toFixed(1)}×`}
                </p>
                <p className="text-sm text-muted-foreground mt-1">Return on what you pay</p>
              </div>
              <div className="bg-background rounded-2xl border border-border p-6 text-center">
                <p className="text-3xl font-bold text-foreground">{currency(r.mmAnnual)}</p>
                <p className="text-sm text-muted-foreground mt-1">Annual platform cost</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              A planning estimate, not a guarantee. Based on the well-documented link between discipleship
              engagement and generosity. Verify current pricing on the{' '}
              <Link href="/pricing" className="text-violet-600 hover:text-violet-500 underline">
                Pricing page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">See the moat in your own church</h2>
          <p className="text-lg text-slate-300 mb-8">
            Join the beta and we&apos;ll map your discipleship pipeline and giving to a concrete growth plan.
          </p>
          <button
            onClick={openBetaModal}
            className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all"
          >
            Join Beta Program
          </button>
        </div>
      </section>
    </div>
  );
}
