/**
 * Resource registry — aggregates all readable/downloadable resources.
 * Interactive tools (ROI calculator, readiness assessment) are standalone
 * routes and are registered separately in `interactiveTools` below.
 */

import type { ResourceContent } from './types';
import { aiWorshipGuide } from './content/ai-worship-guide';
import { denominationalSetupGuide } from './content/denominational-setup-guide';
import { volunteerHealthPlaybook } from './content/volunteer-health-playbook';
import { churchHealthReporting } from './content/church-health-reporting';
import { pcoMigrationChecklist } from './content/pco-migration-checklist';
import { stackAudit } from './content/stack-audit';

export const resourceContent: ResourceContent[] = [
  aiWorshipGuide,
  denominationalSetupGuide,
  volunteerHealthPlaybook,
  churchHealthReporting,
  pcoMigrationChecklist,
  stackAudit,
];

export function getResourceBySlug(slug: string): ResourceContent | undefined {
  return resourceContent.find((r) => r.slug === slug);
}

export function getAllResourceSlugs(): string[] {
  return resourceContent.map((r) => r.slug);
}

export type { ResourceContent } from './types';
export type { ChecklistGroup, TemplateColumn, ResourceIconKey, ResourceKind } from './types';
