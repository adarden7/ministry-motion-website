'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowLeft, Calculator, TrendingUp, Clock, DollarSign, Layers } from 'lucide-react';
import { useMarketing } from '@/context/MarketingContext';

function NumberField({
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  prefix,
  suffix,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <div className="flex items-center rounded-lg border border-border bg-background focus-within:border-emerald-500 transition-colors">
        {prefix && <span className="pl-3 text-muted-foreground text-sm">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={Number.isFinite(value) ? value : ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full bg-transparent px-3 py-2.5 text-foreground outline-none"
        />
        {suffix && <span className="pr-3 text-muted-foreground text-sm whitespace-nowrap">{suffix}</span>}
      </div>
      {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
    </div>
  );
}

function currency(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function RoiCalculatorPage() {
  const { openBetaModal } = useMarketing();

  const [monthlySoftwareSpend, setMonthlySoftwareSpend] = useState(450);
  const [adminHoursPerWeek, setAdminHoursPerWeek] = useState(12);
  const [hourlyValue, setHourlyValue] = useState(28);
  const [mmMonthlyCost, setMmMonthlyCost] = useState(149);
  const [automationPct, setAutomationPct] = useState(45);

  const results = useMemo(() => {
    const currentAnnualSoftware = monthlySoftwareSpend * 12;
    const mmAnnualCost = mmMonthlyCost * 12;
    const softwareSavings = currentAnnualSoftware - mmAnnualCost;

    const hoursReclaimedPerYear = adminHoursPerWeek * 52 * (automationPct / 100);
    const timeValue = hoursReclaimedPerYear * hourlyValue;

    const netAnnualSavings = softwareSavings + timeValue;
    const roiMultiple = mmAnnualCost > 0 ? netAnnualSavings / mmAnnualCost : 0;
    const monthlyNet = netAnnualSavings / 12;
    const paybackMonths = monthlyNet > 0 ? mmAnnualCost / monthlyNet : Infinity;

    return {
      currentAnnualSoftware,
      mmAnnualCost,
      softwareSavings,
      hoursReclaimedPerYear,
      timeValue,
      netAnnualSavings,
      roiMultiple,
      paybackMonths,
    };
  }, [monthlySoftwareSpend, adminHoursPerWeek, hourlyValue, mmMonthlyCost, automationPct]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All Resources
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/15 text-emerald-300">
              Tool
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-white">Church Tech ROI Calculator</h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Estimate what consolidating your church software stack onto Ministry Motion could save — in
            subscription costs and reclaimed staff hours. Adjust every input to match your church.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-muted/30 rounded-2xl border border-border p-6 sm:p-8">
              <h2 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-emerald-500" /> Your current setup
              </h2>
              <div className="space-y-5">
                <NumberField
                  label="Current monthly software spend"
                  value={monthlySoftwareSpend}
                  onChange={setMonthlySoftwareSpend}
                  prefix="$"
                  suffix="/ mo"
                  hint="Total across all church tools (ChMS, setlist, giving, comms, streaming, etc.)"
                />
                <NumberField
                  label="Admin hours per week on tasks Ministry Motion can automate"
                  value={adminHoursPerWeek}
                  onChange={setAdminHoursPerWeek}
                  suffix="hrs / wk"
                  hint="Scheduling, rehearsal prep, reporting, communication, data entry."
                />
                <NumberField
                  label="Estimated value of staff time"
                  value={hourlyValue}
                  onChange={setHourlyValue}
                  prefix="$"
                  suffix="/ hr"
                />
                <NumberField
                  label="Expected Ministry Motion plan cost"
                  value={mmMonthlyCost}
                  onChange={setMmMonthlyCost}
                  prefix="$"
                  suffix="/ mo"
                  hint="Illustrative — see the Pricing page for current plans."
                />
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Share of those admin hours reclaimed by automation
                    <span className="ml-2 text-emerald-600 font-semibold">{automationPct}%</span>
                  </label>
                  <input
                    type="range"
                    min={10}
                    max={80}
                    step={5}
                    value={automationPct}
                    onChange={(e) => setAutomationPct(parseInt(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Conservative default. Few teams automate everything — drag to model your scenario.
                  </p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-5">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 sm:p-8 text-white">
                <p className="text-sm font-medium text-emerald-50/90 mb-1">Estimated net savings per year</p>
                <p className="text-5xl font-bold tracking-tight mb-2">
                  {results.netAnnualSavings >= 0 ? currency(results.netAnnualSavings) : currency(0)}
                </p>
                <p className="text-emerald-50/80 text-sm">
                  {Number.isFinite(results.paybackMonths) && results.paybackMonths > 0
                    ? `Pays for itself in about ${results.paybackMonths < 1 ? 'under a month' : `${Math.ceil(results.paybackMonths)} month${Math.ceil(results.paybackMonths) === 1 ? '' : 's'}`}`
                    : 'Adjust inputs to see payback period'}
                  {results.roiMultiple > 0 && ` · ${results.roiMultiple.toFixed(1)}× return on plan cost`}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="bg-background rounded-2xl border border-border p-6">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-3">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{currency(Math.max(0, results.softwareSavings))}</p>
                  <p className="text-sm text-muted-foreground">Software consolidation savings / yr</p>
                </div>
                <div className="bg-background rounded-2xl border border-border p-6">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{Math.round(results.hoursReclaimedPerYear).toLocaleString()} hrs</p>
                  <p className="text-sm text-muted-foreground">Staff time reclaimed / yr</p>
                </div>
                <div className="bg-background rounded-2xl border border-border p-6">
                  <div className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-3">
                    <TrendingUp className="w-4 h-4 text-violet-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{currency(results.timeValue)}</p>
                  <p className="text-sm text-muted-foreground">Value of reclaimed time / yr</p>
                </div>
                <div className="bg-background rounded-2xl border border-border p-6">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
                    <Layers className="w-4 h-4 text-amber-600" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{currency(results.currentAnnualSoftware)}</p>
                  <p className="text-sm text-muted-foreground">Current software spend / yr</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Estimates only, for planning conversations — not a guarantee of results. Savings depend on which
                tools you replace, how much your team adopts automation, and your actual plan. Verify current
                pricing on the{' '}
                <Link href="/pricing" className="text-emerald-600 hover:text-emerald-500 underline">
                  Pricing page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">See the savings in your own church</h2>
          <p className="text-lg text-slate-300 mb-8">
            Join the beta and we&apos;ll help you map your current stack to Ministry Motion in a 30-minute call.
          </p>
          <button
            onClick={openBetaModal}
            className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
          >
            Join Beta Program
          </button>
        </div>
      </section>
    </div>
  );
}
