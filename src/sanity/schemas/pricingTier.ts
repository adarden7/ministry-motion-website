import { defineField, defineType } from 'sanity';

export const pricingTier = defineType({
  name: 'pricingTier',
  title: 'Pricing Tier',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tier Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 32 },
    }),
    defineField({
      name: 'monthlyPrice',
      title: 'Monthly Price',
      type: 'number',
      description: 'Price in dollars. Use 0 for free tier.',
    }),
    defineField({
      name: 'annualPrice',
      title: 'Annual Price (per month)',
      type: 'number',
      description: 'Price per month when billed annually.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'isPopular',
      title: 'Is Most Popular?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'maxTeamMembers',
      title: 'Max Team Members',
      type: 'number',
    }),
    defineField({
      name: 'maxChurchMembers',
      title: 'Max Church Members',
      type: 'number',
      description: 'Leave empty for unlimited',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    { title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'monthlyPrice' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `$${subtitle}/mo` : 'Free' };
    },
  },
});
