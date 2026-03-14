import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0f] py-16 text-white/60 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block text-xl font-bold text-white mb-6">
              MinistryMotion<span className="text-violet-500">.</span>
            </Link>
            <p className="max-w-sm mb-6 leading-relaxed">
              The AI-native ministry intelligence platform. Replace disconnected tools with 15 specialized AI agents working 24/7 to develop your people and track spiritual growth.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-violet-400 transition-colors">Twitter</button>
              <button className="text-white hover:text-violet-400 transition-colors">LinkedIn</button>
              <button className="text-white hover:text-violet-400 transition-colors">YouTube</button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/products/vocal-coaching" className="hover:text-white transition-colors">Vocal Sandbox</Link></li>
              <li><Link href="/products/agent-council" className="hover:text-white transition-colors">The Agent Council</Link></li>
              <li><Link href="/products/discipleship" className="hover:text-white transition-colors">Discipleship Intelligence</Link></li>
              <li><Link href="/products/analytics" className="hover:text-white transition-colors">Service Analytics</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing & ROI</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
              <li><Link href="/support" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MinistryMotion. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for <span className="text-white">transformation.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
