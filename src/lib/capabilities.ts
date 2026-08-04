/**
 * Canonical capability catalogue — DURABLE app<->marketing sync.
 *
 * This module is the marketing site's single, drift-proof view of the app's
 * feature/pricing catalogue. It wraps the committed, generated snapshot at
 * `src/lib/generated/capabilities.json`, which is produced from the app's
 * source of truth:
 *
 *     studio-worshipwise/src/lib/subscription-tiers.ts
 *       (AVAILABLE_FEATURES + DEFAULT_SUBSCRIPTION_TIERS)
 *
 * Regenerate after the app catalogue changes:
 *     npm run sync:capabilities
 *
 * Pages that render "every capability, by plan" should consume THIS module so
 * newly shipped features surface publicly the moment the JSON is regenerated —
 * no hand-editing of marketing lists required.
 *
 * NOTE: rich persona/product NARRATIVE (pain points, testimonials, how-it-works)
 * lives in products-content.ts / solutions-content.ts and is NOT derivable — it
 * is authored marketing prose. Only the factual capability/pricing catalogue is
 * derived here.
 */

import capabilitiesData from '@/lib/generated/capabilities.json';

export type CapabilityCategory =
  | 'core'
  | 'analytics'
  | 'team'
  | 'communication'
  | 'advanced'
  | 'premium'
  | 'integration';

export interface Capability {
  id: string;
  name: string;
  description: string;
  category: CapabilityCategory;
  icon: string;
}

export interface CapabilityTier {
  id: string;
  name: string;
  description: string;
  price: number;
  billingPeriod: string;
  maxUsers: number;
  popular: boolean;
  customPricing: boolean;
  featureIds: string[];
}

export interface CapabilitiesSnapshot {
  generatedAt: string;
  source: string;
  note: string;
  featureCount: number;
  features: Capability[];
  tiers: CapabilityTier[];
}

const snapshot = capabilitiesData as unknown as CapabilitiesSnapshot;

export const CAPABILITIES: Capability[] = snapshot.features;
export const CAPABILITY_TIERS: CapabilityTier[] = snapshot.tiers;
export const CAPABILITIES_GENERATED_AT: string = snapshot.generatedAt;
export const CAPABILITIES_SOURCE: string = snapshot.source;

/**
 * Capabilities shipped 2026-08-03 (app PRs #336/#337/#339/#340/#342-#347).
 * Used to badge them "New" on marketing surfaces. Keep in sync with the
 * "Shipped 2026-08-03" block in the app catalogue.
 */
export const RECENTLY_SHIPPED_IDS: readonly string[] = [
  'service_theme_scoring',
  'canonical_theme_taxonomy',
  'theme_people_intelligence',
  'role_based_analytics_homes',
  'ask_your_data',
  'per_role_vocal_scoring',
  'satb_track_generation',
  'youtube_song_ingestion',
];

/** Human-readable category labels for grouping on marketing pages. */
export const CATEGORY_LABELS: Record<CapabilityCategory, string> = {
  core: 'Core',
  team: 'Team & Roles',
  communication: 'Communication',
  analytics: 'Analytics & Insights',
  advanced: 'Worship, Vocal & AI',
  premium: 'Premium Coaching',
  integration: 'Integrations',
};

/** Display order for capability categories. */
export const CATEGORY_ORDER: CapabilityCategory[] = [
  'core',
  'team',
  'communication',
  'analytics',
  'advanced',
  'premium',
  'integration',
];

/**
 * The four church-plan columns the pricing page compares, mapped to canonical
 * tier ids. (worship-collective / collective-individual-elite are individual
 * programs surfaced separately.)
 */
export const PRICING_COLUMN_TIERS = ['free', 'small', 'pro', 'enterprise'] as const;
export type PricingColumnTier = (typeof PRICING_COLUMN_TIERS)[number];

export const PRICING_COLUMN_LABELS: Record<PricingColumnTier, string> = {
  free: 'Free',
  small: 'Small Church',
  pro: 'Pro',
  enterprise: 'Enterprise',
};

function tierFeatureSet(tierId: string): Set<string> {
  const tier = CAPABILITY_TIERS.find((t) => t.id === tierId);
  return new Set(tier ? tier.featureIds : []);
}

export function tierIncludes(tierId: string, capabilityId: string): boolean {
  return tierFeatureSet(tierId).has(capabilityId);
}

export interface CapabilityWithAvailability extends Capability {
  isNew: boolean;
  availability: Record<PricingColumnTier, boolean>;
}

export interface CapabilityGroup {
  category: CapabilityCategory;
  label: string;
  capabilities: CapabilityWithAvailability[];
}

/**
 * All capabilities, grouped by category and annotated with per-tier
 * availability for the four church-plan columns. Drives the derived
 * "every capability, by plan" section so it auto-syncs with the app.
 */
export function getCapabilityGroups(): CapabilityGroup[] {
  const sets: Record<PricingColumnTier, Set<string>> = {
    free: tierFeatureSet('free'),
    small: tierFeatureSet('small'),
    pro: tierFeatureSet('pro'),
    enterprise: tierFeatureSet('enterprise'),
  };

  return CATEGORY_ORDER.map((category) => {
    const capabilities = CAPABILITIES.filter((c) => c.category === category).map(
      (c): CapabilityWithAvailability => ({
        ...c,
        isNew: RECENTLY_SHIPPED_IDS.includes(c.id),
        availability: {
          free: sets.free.has(c.id),
          small: sets.small.has(c.id),
          pro: sets.pro.has(c.id),
          enterprise: sets.enterprise.has(c.id),
        },
      })
    );
    return { category, label: CATEGORY_LABELS[category], capabilities };
  }).filter((g) => g.capabilities.length > 0);
}

/** Capabilities shipped most recently, annotated with availability. */
export function getRecentlyShipped(): CapabilityWithAvailability[] {
  return getCapabilityGroups()
    .flatMap((g) => g.capabilities)
    .filter((c) => c.isNew);
}
