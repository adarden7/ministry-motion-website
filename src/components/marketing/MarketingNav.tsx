'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useMarketing } from '@/context/MarketingContext';
import { ChevronDown } from 'lucide-react';

interface MarketingNavProps {
    /** Optional: identifies the current page for nav highlighting */
    currentPage?: string;
    /** Optional: callback for beta signup click (nav uses MarketingContext internally) */
    onBetaSignupClick?: () => void;
}

export function MarketingNav({ currentPage: _currentPage, onBetaSignupClick: _onBetaSignupClick }: MarketingNavProps = {}) {
    const { openBetaModal } = useMarketing();
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
            <div className="container mx-auto flex h-14 items-center">
                <div className="mr-4 flex flex-shrink-0">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold whitespace-nowrap text-lg">MinistryMotion</span>
                    </Link>
                </div>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/products" className="transition-colors hover:text-foreground/80 text-foreground/60">Products</Link>

                    {/* Solutions dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setSolutionsOpen(true)}
                        onMouseLeave={() => setSolutionsOpen(false)}
                    >
                        <button className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60">
                            Solutions <ChevronDown className="h-3 w-3" />
                        </button>
                        {solutionsOpen && (
                            <div className="absolute top-full left-0 mt-1 w-56 rounded-md border border-white/10 bg-slate-950/95 backdrop-blur-md py-1 shadow-xl">
                                <Link href="/solutions/praise-leaders" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5">Praise Leaders</Link>
                                <Link href="/solutions/worship-directors" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5">Worship Directors</Link>
                                <Link href="/solutions/ministries-directors" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5">Ministries Directors</Link>
                                <Link href="/solutions/church-admins" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5">Church Admins</Link>
                                <Link href="/solutions/leadership" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5">Church Leadership</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
                    <Link href="/compare" className="transition-colors hover:text-foreground/80 text-foreground/60">Compare</Link>

                    {/* Resources dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setResourcesOpen(true)}
                        onMouseLeave={() => setResourcesOpen(false)}
                    >
                        <button className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60">
                            Resources <ChevronDown className="h-3 w-3" />
                        </button>
                        {resourcesOpen && (
                            <div className="absolute top-full left-0 mt-1 w-48 rounded-md border border-white/10 bg-slate-950/95 backdrop-blur-md py-1 shadow-xl">
                                <Link href="/blog" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5">Blog</Link>
                                <Link href="/resources" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5">Guides &amp; Tools</Link>
                                <Link href="/case-studies" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-white/5">Case Studies</Link>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Link href={process.env.NODE_ENV === 'development' ? 'http://localhost:3000/login' : 'https://app.ministrymotion.com/login'}>
                            <Button variant="ghost" size="sm">
                                Log In
                            </Button>
                        </Link>
                        <Button size="sm" onClick={() => window.location.href = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/demo' : 'https://app.ministrymotion.com/demo'}>
                            Get Started
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
