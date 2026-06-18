import type { ResourceContent } from '../types';

export const stackAudit: ResourceContent = {
  slug: 'ministry-subscription-stack-audit',
  kind: 'Tool',
  iconKey: 'chart',
  title: 'Ministry Subscription Stack Audit',
  subtitle: 'Stop paying for five tools that all do the same three things.',
  description:
    'A downloadable spreadsheet template to document every church software subscription, its cost, core use case, and which Ministry Motion features it overlaps with.',
  audience: 'Church Admins, Executive Pastors',
  extent: 'Spreadsheet template',
  readTime: '10 min',
  updated: 'June 2026',
  body: `## The Hidden Budget Leak in Most Church Tech Stacks

Most worship ministries did not set out to run a complicated software portfolio. Tools were added one at a time — a giving platform here, a scheduling app there, a streaming upgrade before Christmas — each solving an immediate problem and each with its own annual renewal. Three years later, the finance team is writing six separate checks a month and no one person can name every tool the ministry is paying for.

This is not unusual. A 2024 survey of mid-size churches found that the average worship ministry uses between eight and fourteen software subscriptions, with at least three significant functional overlaps. The problem compounds because churches run on volunteer and part-time staff cycles: the person who signed up for a tool in January may not be the person renewing it in December, and **auto-renewing annual contracts are the single biggest source of unintentional overspend**.

The audit template below is designed to surface all of that in one place so leadership can make a deliberate consolidation decision — not a forced one when the budget spreadsheet stops adding up.

---

## Before You Start: Jog Your Memory

Most audits miss tools that have become invisible. Walk through each of these categories and ask whether you have at least one active subscription in it:

- **ChMS (Church Management System)** — membership records, check-in, giving history (e.g., Planning Center People, Breeze, Church Community Builder)
- **Worship & Setlist Planning** — service order, song selection, chord charts (e.g., Planning Center Services, Songselect)
- **Online Giving** — recurring gifts, text-to-give, donor statements (e.g., Pushpay, Tithe.ly, Givelify)
- **Streaming & Video** — live broadcast, on-demand library, replay hosting (e.g., Restream, Subsplash, BoxCast)
- **Communication & Messaging** — email newsletters, SMS alerts, push notifications (e.g., Mailchimp, Flocknote, Remind)
- **Scheduling & Availability** — volunteer coordination, team calendars, serve reminders (e.g., Planning Center Services, WhenToWork)
- **Lyrics & Presentation** — on-screen lyrics, lower thirds, slide design (e.g., ProPresenter, EasyWorship, Renewed Vision)
- **Accounting & Finance** — general ledger, payroll, expense approvals (e.g., QuickBooks, Aplos, Xero)
- **Singer & Musician Development** — vocal coaching, practice tracks, SATB audio, skill tracking (e.g., Ministry Motion, EarMaster, custom solutions)

Pull bank and credit card statements for the last twelve months. Flag every recurring charge from a software vendor, even if it looks small. A five-dollar-a-month tool you forgot costs sixty dollars a year and often locks content or data if you cancel without planning.

---

## How to Fill Each Column

**Tool Name** — The product name as it appears on your invoice or login screen. Be specific: "Planning Center" is not one tool; it is a suite of modules (Services, People, Giving, Groups) that are billed and used separately.

**Category** — Use the eight categories listed above. If a tool spans two categories, enter the primary one and note the secondary in the Notes column.

**Core Use Case** — One sentence: what would break tomorrow if this tool disappeared? Forcing this answer reveals whether a tool is load-bearing or just habitual.

**Monthly Cost** — Convert everything to a monthly figure. For annual-billed tools, divide the annual charge by twelve. This makes it easier to compare tools on an apples-to-apples basis.

**Annual Cost** — The actual dollar amount charged per year. Pull this from the invoice, not from memory — pricing plans change and per-seat fees add up.

**Billing Cycle** — Monthly or Annual. Annual-billed tools that auto-renew without notice are where budgets get surprised.

**Seats / Users** — The number of licensed seats or named users on the account. Compare this against actual active logins in the last ninety days. Unused seats are pure waste.

**Renewal Date** — The exact date the subscription renews or the contract expires. If you do not know it, log into the account's billing settings or check the last invoice. Any tool renewing in the next sixty days should be flagged immediately.

**Overlaps With Ministry Motion?** — Yes or No. Ministry Motion covers singer readiness tracking, vocal coaching, practice-track delivery, SATB part generation, service-planning integration, and team communication for worship teams. If another tool on your list does any of those things, mark it Yes.

**Replaceable?** — Yes, Partial, or No. Yes means Ministry Motion (or another tool already on the list) fully covers this function. Partial means there is overlap but one unique capability worth keeping. No means this tool does something no other tool on your list does.

**Notes** — Anything that would matter to the person making the final call: contract lock-in periods, data-export limitations, whether a specific staff member owns the relationship, or whether there is a free tier available.

---

## Computing Total Spend and Finding Consolidation Candidates

Once every row is filled in, sum the **Annual Cost** column. That is your true annual software spend for worship ministry operations — most leadership teams are surprised by the number.

Next, filter to rows where **Overlaps With Ministry Motion?** is Yes and **Replaceable?** is Yes or Partial. Add up their annual costs. That figure is your **maximum consolidation opportunity** — the amount you could recover by migrating those workflows to a platform you are already paying for.

Finally, sort by **Renewal Date** ascending. Any tool in the next sixty days that is also marked Replaceable is your immediate action item. Canceling or downgrading before the auto-renewal fires is the fastest way to realize savings without disrupting active workflows.

Present both numbers — total spend and consolidation opportunity — to your executive pastor or finance team. The goal is not to cut tools indiscriminately; it is to stop paying twice for the same capability so the budget freed up can go toward ministry rather than software overhead.
`,
  template: [
    { header: 'Tool Name', example: 'Planning Center Services' },
    { header: 'Category', example: 'Worship & Setlist Planning' },
    { header: 'Core Use Case', example: 'Build weekly service orders and assign team members' },
    { header: 'Monthly Cost', example: '49.00' },
    { header: 'Annual Cost', example: '588.00' },
    { header: 'Billing Cycle', example: 'Monthly' },
    { header: 'Seats / Users', example: '25' },
    { header: 'Renewal Date', example: '2026-08-01' },
    { header: 'Overlaps With Ministry Motion?', example: 'Yes' },
    { header: 'Replaceable?', example: 'Partial' },
    { header: 'Notes', example: 'Choir director manages this account; export songs before canceling' },
  ],
};
