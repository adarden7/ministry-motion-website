'use client';

/**
 * Embedded Sanity Studio route
 * Accessible at /studio for content management
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
