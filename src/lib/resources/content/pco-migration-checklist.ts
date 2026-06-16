import type { ResourceContent } from '../types';

export const pcoMigrationChecklist: ResourceContent = {
  slug: 'pco-migration-checklist',
  kind: 'Checklist',
  iconKey: 'refresh',
  title: 'PCO Migration Checklist',
  subtitle: 'Move your entire ministry off Planning Center — without losing a single record.',
  description:
    'A point-by-point checklist for migrating from Planning Center Online to Ministry Motion without data loss — member records, service plans, song libraries, volunteer rosters, and giving history.',
  audience: 'Church Admins',
  extent: '47 items',
  readTime: '12 min read',
  updated: 'June 2026',
  body: `## How to Migrate from Planning Center Online to Ministry Motion

Switching worship management platforms feels daunting — but it does not have to be chaotic. Most churches that leave Planning Center Online (PCO) do so because costs outpace value, because they need deeper singer-development tools, or because they want AI-assisted scheduling and vocal coaching under one roof. Whatever your reason, the move only goes smoothly when it is planned methodically.

**This checklist covers every PCO module your worship ministry likely uses**: People, Services, Giving, Groups, Check-Ins, and Calendar. Work through it from top to bottom in the order shown. Each section builds on the previous one — you cannot verify your song library import until your People records are already in the system, for example.

## How to Use This Checklist

Work section by section. Do not rush past verification steps; they exist because import errors compound — a mismatched volunteer assignment is far easier to catch at the roster stage than three months after go-live.

**Do not cancel your PCO subscription until every item in the "Go-Live and Verification" section is marked complete.** Plan for a two-to-four week parallel-run window where both systems are active. This protects you if an edge case surfaces after the initial import.

Print or export this checklist and assign an owner to each section. For most churches, the church administrator owns People and Giving; the worship director owns Services, Songs, and Teams; a ministry coordinator owns Communication settings.

## What You Will Need Before You Start

Gather the following before touching any export button:

- **PCO administrator credentials** with export permissions across all modules
- **Your CCLI church license number** and a list of all CCLI-licensed songs your church uses regularly
- **Giving records** in CSV or QuickBooks-compatible format (PCO Giving exports both)
- **A Ministry Motion account** with Church Admin access provisioned — contact your onboarding rep to confirm your subscription tier covers all the features you use in PCO
- **A migration window** of at least 14 days; 28 days is safer for larger congregations (200+ active members)
- **A spreadsheet** to track which exports you have completed, the file names, and the import status in Ministry Motion

Work through the checklist below, check each item off, and loop your worship director and finance staff in on the sections that touch their data. You are not doing this alone — Ministry Motion's onboarding team is available for a live data-review call if any import validation fails.

When every section is checked off and your go-live verification passes, **then** you can send the cancellation notice to Planning Center. Not before.`,

  checklist: [
    {
      title: 'Planning & Prep',
      items: [
        'Assign a migration owner for each PCO module (People, Services, Giving, Groups, Check-Ins, Calendar) and document their names and contact info.',
        'Schedule a 60-minute kick-off call with your Ministry Motion onboarding rep to confirm data-import scope and timeline.',
        'Audit your current PCO subscription to list every module you are actively paying for and whether Ministry Motion covers an equivalent feature.',
        'Set a hard go-live date at least 14 days out and block a parallel-run window where both PCO and Ministry Motion will be active simultaneously.',
        'Create a shared migration tracker spreadsheet with columns for: module, export file name, export date, import status, and verified-by.',
        'Confirm your Ministry Motion church account tier matches the feature set you need (volunteer scheduling, giving, CCLI reporting, etc.) before importing any data.',
      ],
    },
    {
      title: 'Member & People Records',
      items: [
        'Export the full People list from PCO including custom fields and household groupings (People > Export > CSV with all fields selected).',
        'Export all profile photos from PCO People as a ZIP archive if your congregation uses them for check-in or directory purposes.',
        'Document every custom field you have created in PCO People (e.g., instrument, voice part, shirt size) so you can recreate or map them in Ministry Motion.',
        'Export membership statuses and list membership (e.g., Active, Inactive, Guest) so you can replicate the same segmentation in Ministry Motion.',
        'Export all active and historical group memberships from PCO Groups so ministry team assignments carry over.',
        'Import the People CSV into Ministry Motion and run the duplicate-detection scan before confirming the import.',
        'Verify a random sample of 20 member records in Ministry Motion against the original PCO export to confirm name, email, phone, and household data are intact.',
      ],
    },
    {
      title: 'Service Plans & Schedules',
      items: [
        'Export all service types from PCO Services (e.g., Sunday AM, Wednesday Night, Special Events) and note their recurrence patterns.',
        'Export upcoming service plans (next 90 days minimum) from each service type as CSV or PDF for reference during the transition.',
        'Export historical service plans for the past 12 months if your worship director reviews song-usage history for CCLI reporting or planning.',
        'Document all plan templates and note which songs, arrangements, and item types (sermon, prayer, offering) each template includes.',
        'Recreate your primary service types in Ministry Motion using the same names and recurrence schedules as PCO.',
        'Import upcoming service plans into Ministry Motion and verify that date, service type, and item order match the PCO originals.',
        'Confirm that all plan-item types (song, reading, announcement, etc.) map correctly to Ministry Motion equivalents and flag any that need manual adjustment.',
      ],
    },
    {
      title: 'Song Library & CCLI',
      items: [
        'Export your complete PCO song library from Services > Songs as a CSV including song title, CCLI number, author, key, tempo, and any custom tags.',
        'Cross-reference your exported song list against your CCLI SongSelect license to confirm every song your church uses is covered.',
        'Note any songs in your PCO library that are missing CCLI numbers and flag them for manual review before import.',
        'Import your song library CSV into Ministry Motion and verify that CCLI numbers, keys, and author credits imported correctly for a sample of 15 songs.',
        'Upload chord charts, lyric sheets, and lead-sheet PDFs for your top 30 most-used songs into Ministry Motion to populate the arrangement library.',
        'Configure Ministry Motion\'s CCLI reporting settings with your church license number so song-usage tracking begins from day one of go-live.',
      ],
    },
    {
      title: 'Volunteer Teams & Rosters',
      items: [
        'Export all team rosters from PCO Services (worship team, tech team, hospitality, etc.) including each volunteer\'s name, role, and position.',
        'Export volunteer scheduling preferences and blackout dates if you have configured them in PCO so you can re-enter or import them in Ministry Motion.',
        'Export volunteer skills and certifications stored in PCO People custom fields (e.g., sound board trained, Spanish-speaking) for manual re-entry in Ministry Motion profiles.',
        'Import volunteer rosters into Ministry Motion and assign each person to the correct team and position.',
        'Send Ministry Motion\'s team-invitation email to all active volunteers and confirm that at least 80 percent have accepted before go-live.',
        'Verify that scheduling rules (max schedules per month, required rest weeks) are configured in Ministry Motion to match what you enforced in PCO.',
      ],
    },
    {
      title: 'Giving & Financial History',
      items: [
        'Export the full giving history from PCO Giving in CSV format, including donor name, amount, fund, date, payment method, and batch ID.',
        'Export all recurring-giving schedules (donor name, frequency, amount, fund, next-scheduled date) from PCO Giving before canceling any PCO integration.',
        'Export donor statements for the current tax year from PCO Giving so you have a backup before transitioning the giving platform.',
        'Confirm with your bookkeeper or finance team which giving funds (General, Missions, Building, etc.) need to be recreated in Ministry Motion before any giving data is imported.',
        'Import historical giving records into Ministry Motion and verify that the total giving amounts per fund match your PCO Giving summary report for the same date range.',
        'Notify recurring givers of the platform change at least two weeks before go-live and provide instructions for updating their saved payment methods in Ministry Motion.',
      ],
    },
    {
      title: 'Communication & Notifications',
      items: [
        'Export all PCO email lists and communication groups so you can recreate audience segments in Ministry Motion for announcements and scheduling emails.',
        'Document all automated notification templates in PCO Services (e.g., schedule-confirmation, plan-released, position-declined emails) and recreate them in Ministry Motion.',
        'Update your church website and bulletin contact links to point to Ministry Motion\'s volunteer portal or member directory rather than PCO-hosted pages.',
        'Notify staff and ministry leaders of the go-live date via email or text at least one week before cutover, including links to Ministry Motion login and a quick-start guide.',
        'Archive or forward any unread messages in PCO Messaging that require follow-up action before you close the PCO account.',
      ],
    },
    {
      title: 'Go-Live & Verification',
      items: [
        'Run Ministry Motion\'s built-in data-integrity report and confirm zero critical errors before declaring go-live.',
        'Schedule a 30-minute post-import walkthrough with your worship director and one volunteer leader to spot-check their own records and schedules in Ministry Motion.',
        'Confirm that your first post-migration service plan is fully built in Ministry Motion — songs assigned, volunteers scheduled, and notifications sent — before canceling PCO.',
        'Send the PCO cancellation notice only after all 47 checklist items are verified and your first live service has been successfully run from Ministry Motion.',
      ],
    },
  ],
};
