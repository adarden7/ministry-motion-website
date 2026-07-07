import Link from 'next/link';

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-background py-16 text-muted-foreground text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block text-xl font-bold text-foreground mb-6">
              MinistryMotion<span className="text-violet-500">.</span>
            </Link>
            {/* MM-7: Outcome-focused description; no agent-count badge */}
            <p className="max-w-sm mb-6 leading-relaxed">
              The complete platform for worship ministry — AI vocal coaching, service analysis, discipleship journeys, and unified communications, built for the church.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/products/vocal-coaching" className="hover:text-foreground transition-colors">Vocal Sandbox</Link></li>
              <li><Link href="/products/agent-council" className="hover:text-foreground transition-colors">The Agent Council</Link></li>
              <li><Link href="/products/discipleship" className="hover:text-foreground transition-colors">Discipleship Intelligence</Link></li>
              <li><Link href="/products/analytics" className="hover:text-foreground transition-colors">Service Analytics</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing & ROI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/collective" className="hover:text-foreground transition-colors">Community</Link></li>
              <li><Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MinistryMotion. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for <span className="text-foreground">transformation.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
