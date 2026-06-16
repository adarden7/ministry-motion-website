import type { ResourceContent } from '../types';

export const churchHealthReporting: ResourceContent = {
  slug: 'church-health-reporting',
  kind: 'Guide',
  iconKey: 'chart',
  title: 'Church Health Reporting: Moving Beyond Attendance and Offerings',
  subtitle: 'Stop presenting lagging indicators to your board — here is how to build a spiritual-health dashboard that tells the whole story.',
  description: 'Build comprehensive spiritual-health reports using the 5-dimension radar chart, Journey Sankey visualization, and giving–discipleship correlation data for board presentations.',
  audience: 'Senior Pastors, Elders, Finance Committees',
  extent: '20 pages',
  readTime: '16 min read',
  updated: 'June 2026',
  body: `Most church boards open their monthly packet to two numbers: weekend attendance and total offerings. Both are useful. Neither is sufficient. Attendance tells you who showed up last Sunday. Offerings tell you who wrote a check. Neither metric tells you whether your congregation is actually growing as disciples, whether your first-time guests are becoming rooted members, or whether the people serving in your worship ministry feel spiritually nourished or quietly burned out. This guide walks through a better framework — one grounded in the five dimensions of congregational health — and shows you exactly how to present that data honestly to elders, finance committees, and senior staff.

## Why Attendance and Offerings Are Lagging Indicators

A lagging indicator measures the result of something that already happened. Attendance on a given Sunday is the outcome of dozens of upstream decisions: how connected guests felt six months ago, whether small-group leaders followed up, whether first-time volunteers were thanked. By the time attendance trends down, the upstream problems have been festering for a year or more.

Offerings follow a similar pattern. Generosity research consistently shows that giving is one of the last spiritual habits to form and one of the first to disappear when disengagement begins. A giving plateau rarely signals a budget problem first — it signals a discipleship problem that the budget is now reflecting.

This does not mean you should stop tracking attendance and offerings. It means you should treat them as confirmation signals that verify what your leading indicators already predicted, not as the primary lens through which you read congregational health.

**Leading indicators to watch instead:**
- Rate of first-time guests returning for a second visit within 30 days
- Percentage of attendees enrolled in any discipleship pathway (course, small group, mentorship)
- Volunteer retention rate quarter over quarter
- Median engagement score across the active member base
- Number of members who progressed at least one stage in the member journey pipeline in the past 90 days

## The 5-Dimension Church Health Framework

Ministry Motion's church-health radar chart organizes congregational vitality into five dimensions. Each dimension is independently scored so a board can see at a glance which areas are thriving and which need intentional attention. The radar chart makes pattern recognition visual — a healthy congregation produces a roughly balanced pentagon; a congregation under stress shows spikes in some areas and collapse in others.

| Dimension | What It Measures | Key Data Inputs |
|-----------|-----------------|-----------------|
| **Belonging** | Relational density and community integration | Small-group enrollment, attendance consistency, volunteer team membership, peer-connection events attended |
| **Discipleship** | Active engagement with spiritual formation pathways | Course completions, assessment scores, mentor relationships, practice assignment completion rates |
| **Serving** | Participation in ministry roles and volunteer health | Ministry placement rate, volunteer tenure, role-match quality, burnout signals from engagement scoring |
| **Giving** | Financial generosity and trend trajectory | Giving frequency, first-gift to recurring-gift conversion, percentage of active members who gave in past 90 days |
| **Outreach** | External mission involvement and guest integration | Guest return rate, member-referred guests, local partnership hours, mission-trip or service-day participation |

Each dimension is scored 0–100 by the analytics engine based on weighted inputs. The weights are configurable — a church in a church-planting season may intentionally weight Outreach more heavily; a congregation recovering from pastoral transition may weight Belonging. The radar chart re-renders automatically when weights are adjusted, so you can scenario-plan before your board meeting.

### Avoiding the Trap of Dimension Silos

One common mistake boards make when they first encounter this framework is treating low scores in a single dimension as isolated problems requiring isolated solutions. In practice, the five dimensions are deeply interdependent. A congregation with a high Serving score but low Belonging score is almost certainly running on the labor of a small, over-committed core group — a burnout event waiting to happen. A high Giving score alongside low Discipleship often indicates a financially mature but spiritually plateaued congregation that may be resistant to change. Read the radar chart as a system, not as five separate report cards.

## Reading the Journey Sankey Visualization

The Journey Sankey is the most powerful diagnostic tool in a Ministry Motion church-health report because it makes the flow of human lives visible. It renders your entire active membership base as a stream of people moving through defined lifecycle stages: **Guest → Connected → Growing → Serving → Multiplying**, with a sixth category for **Stalled** members who have not progressed in 180 days.

The width of each band in the Sankey is proportional to the number of people at that stage. The connections between stages show movement — how many people transitioned from Guest to Connected last quarter, how many Growing members moved into Serving, and critically, how many people fell off the pipeline entirely.

### What Healthy Flow Looks Like

A healthy Sankey has three characteristics:

**Proportionate early-stage width.** The Guest and Connected bands should be meaningfully wide — evidence that the church is reaching new people and that newcomers are being integrated. If the Guest band is thin, your front door is closed. If Connected is thin relative to Guest, your assimilation process is leaking.

**Consistent mid-stream progression.** The transition rates between Growing and Serving should be steady or improving. Discipleship is the engine of the church; a wide Growing band that does not feed into Serving indicates a bottleneck — often a shortage of meaningful volunteer opportunities or unclear pathways from formation to mission.

**Manageable Stalled percentage.** Some stalling is normal and often temporary (life seasons, illness, job transitions). A Stalled percentage above 20% of the total active base is a signal for pastoral follow-up, not condemnation. The Sankey makes it possible to identify when people stalled and cross-reference that with ministry events or leadership transitions that may have contributed.

### What Stalled Flow Looks Like

Stalled patterns tend to cluster in recognizable shapes. A bulge in the Connected stage with thin progression into Growing usually means your small-group on-ramp is unclear or oversubscribed. A bottleneck between Growing and Serving often means your ministry placement process requires too much friction — people want to serve but do not know how to find a role that fits. A high fall-off rate after the Multiplying stage is rarer but serious; it frequently indicates that your most mature leaders are leaving for other churches, a succession and empowerment issue worth naming directly in a board conversation.

## The Giving–Discipleship Correlation

One of the most compelling data stories you can bring to a finance committee is the giving–discipleship correlation. Ministry Motion calculates this by cross-referencing each member's giving history against their discipleship engagement score — a composite of course activity, assessment completions, and practice participation tracked through the platform's engagement scoring engine.

The correlation is almost always positive: members who are actively engaged in discipleship pathways give more frequently, at higher amounts, and continue giving during periods of church stress. This is not a manipulation tactic. It is a data-confirmed expression of the theological principle that transformed people express generosity differently than nominal attenders.

**How to present this honestly to your board:**

Present the correlation as a pastoral insight, not a fundraising lever. The board needs to understand that the correlation does not mean "run more courses and watch giving go up." It means that generosity is a downstream fruit of genuine spiritual formation, and that investing in discipleship infrastructure is the most financially sound long-term strategy the church can pursue.

Concretely, you might present a chart showing three cohorts: members with high discipleship engagement, members with moderate engagement, and members with low or no engagement. Show giving frequency and average gift size for each cohort. Then show what it would mean — in annualized giving — if 15% of low-engagement members moved into the moderate cohort through intentional pathway investment. This turns an abstract correlation into a concrete, faith-grounded stewardship case.

**What the correlation cannot tell you:** It cannot tell you who is giving out of genuine transformation versus habit, social pressure, or tax strategy. Data reveals patterns; only pastoral relationship reveals hearts. Use the correlation to identify cohorts for proactive outreach, not to rank individuals.

## Building a Board-Ready Report

A board report is not a data dump. It is a curated narrative with supporting evidence. The goal is to help your elders and finance committee understand the spiritual condition of the congregation quickly, ask better questions, and make stewardship decisions with confidence.

### What to Include

**The radar chart, always.** Show it current-quarter versus same-quarter last year. A single snapshot is a data point; a year-over-year comparison is a trend. Include a two-sentence narrative for each dimension that is notably higher or lower than the prior year.

**The Journey Sankey with transition rates.** Do not just show the snapshot — show the net movement. How many people progressed into each stage this quarter? How many stalled? How many were reactivated from the Stalled category through pastoral or ministry contact? These numbers tell the story of your pastoral team's effectiveness better than any anecdote.

**The giving–discipleship correlation chart.** Include it once per quarter, with the cohort breakdown described above. Frame it explicitly: "This is why we invest in formation before we ask for generosity."

**Engagement score trend.** The Agent Council's analytics surface a platform-level engagement score for the active member base each week. Show the 13-week rolling average. A score that has been flat for two quarters is not alarming. A score that has been declining for six consecutive weeks is a pastoral early-warning signal worth naming.

**One honest hard story.** Boards that only see favorable data lose their ability to function as genuine accountability partners. If a ministry team's volunteer retention rate dropped 18 points this quarter, say so. If your Guest return rate has been below your target for three consecutive quarters, name it. Boards that trust their data will engage more generously with solutions.

### What to Leave Out

Leave out individual-level data. Your board does not need to know that a specific family's giving dropped. They need to know that 23% of previously recurring givers lapsed this quarter. Aggregate, anonymize, and protect the dignity of every person whose data feeds the system.

Leave out metrics you cannot yet act on. If you have no current strategy for improving Outreach scores, presenting a declining Outreach chart without a plan creates anxiety without direction. Either have a plan attached to the data or acknowledge that the data is surfacing a gap you intend to address in the next planning cycle.

Leave out precision that implies false certainty. Engagement scores are good approximations, not perfect measures of spiritual vitality. Present them as useful indicators, not divine verdicts. A footnote that says "these scores are weighted estimates and should be read alongside pastoral judgment" is a sign of institutional maturity, not weakness.

## Quarterly Reporting Checklist

Use this checklist to prepare each board presentation. Completing every item before the meeting ensures the narrative is coherent, the data is current, and the board's time is used well.

**Data Preparation (2 weeks before)**
- Confirm all ministry team rosters are updated in the platform so engagement scores reflect current activity
- Reconcile giving data with your financial management system to ensure the correlation chart is pulling accurate figures
- Review Journey Sankey for any members flagged as Stalled for more than 180 days and assign pastoral follow-up before the meeting, not after
- Export the radar chart at current-quarter and same-quarter-last-year views

**Narrative Drafting (1 week before)**
- Write a two-sentence summary for each radar dimension — one sentence on what the number is, one sentence on what it means pastorally
- Identify the single most encouraging trend to lead with
- Identify the single most concerning trend to address honestly
- Draft the giving–discipleship correlation narrative using the three-cohort framing
- Prepare one concrete recommendation that emerges from the data — boards engage better with reports that end in a decision, not a summary

**Board Meeting**
- Open with the radar chart before any financial data — it sets the spiritual frame for the financial conversation that follows
- Allow five minutes for silent review before discussion
- When presenting the Sankey, walk through stage transitions verbally; the visualization is intuitive but unfamiliar board members need a one-time orientation
- Close with the recommendation and a clear motion or action item

**Post-Meeting**
- Archive the report with the board minutes
- Update the engagement score trend chart with the new quarter's baseline
- If any dimension scored below 40, flag it in the next pastoral team meeting for dedicated strategy time

## A Note on Data Ethics in Church Contexts

The tools described in this guide are powerful precisely because they make invisible patterns visible. That power creates a corresponding responsibility. Engagement scores and Journey Sankey stages are not character assessments. A person in the Stalled category is not a problem to be solved — they may be grieving, caregiving, wrestling with doubt, or simply in a season of quiet faithfulness that the platform's metrics cannot see.

Use this data to move toward people with curiosity and compassion, not to sort them into tiers of value. The board should never discuss individuals by name in the context of their scores. Pastors who use this data should approach follow-up conversations as an opportunity to listen, not to report a metric back to someone and tell them they need to improve. The data surfaces who to reach out to. Pastoral wisdom determines how.

Church health reporting, done well, is an act of stewardship — stewardship of the community God has entrusted to your leadership. These tools exist to help you tend that community more attentively, not to manage it more efficiently. The difference between those two postures is the difference between a shepherd and an administrator.`,
};
