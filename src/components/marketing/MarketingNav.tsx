'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useMarketing } from '@/context/MarketingContext';
import { ChevronDown, Menu, X } from 'lucide-react';

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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Hover-intent: opening cancels any pending close; leaving waits ~180ms so
    // the cursor can cross into the menu without it snapping shut.
    const openMenu = (set: (v: boolean) => void) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        set(true);
    };
    const scheduleClose = (set: (v: boolean) => void) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => set(false), 180);
    };

    useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-border bg-background/90 backdrop-blur-md">
            <div className="container mx-auto flex h-14 items-center px-4">
                <div className="mr-4 flex flex-shrink-0">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold whitespace-nowrap text-lg text-foreground">MinistryMotion</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link href="/products" className="transition-colors hover:text-foreground text-foreground/80">Products</Link>

                    {/* Solutions dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => openMenu(setSolutionsOpen)}
                        onMouseLeave={() => scheduleClose(setSolutionsOpen)}
                        onFocus={() => openMenu(setSolutionsOpen)}
                        onBlur={() => scheduleClose(setSolutionsOpen)}
                        onKeyDown={(e) => { if (e.key === 'Escape') setSolutionsOpen(false); }}
                    >
                        <button
                            type="button"
                            aria-haspopup="true"
                            aria-expanded={solutionsOpen}
                            onClick={() => setSolutionsOpen((v) => !v)}
                            className="flex items-center gap-1 transition-colors hover:text-foreground text-foreground/80"
                        >
                            Solutions <ChevronDown className="h-3 w-3" aria-hidden />
                        </button>
                        {solutionsOpen && (
                            <div className="absolute top-full left-0 pt-2 w-56">
                                <div className="rounded-md border border-border bg-popover/95 backdrop-blur-md py-1 shadow-xl">
                                    <Link href="/solutions/praise-leaders" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent">Praise Leaders</Link>
                                    <Link href="/solutions/worship-directors" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent">Worship Directors</Link>
                                    <Link href="/solutions/ministries-directors" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent">Ministries Directors</Link>
                                    <Link href="/solutions/church-admins" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent">Church Admins</Link>
                                    <Link href="/solutions/leadership" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent">Church Leadership</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/pricing" className="transition-colors hover:text-foreground text-foreground/80">Pricing</Link>
                    <Link href="/compare" className="transition-colors hover:text-foreground text-foreground/80">Compare</Link>

                    {/* Resources dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => openMenu(setResourcesOpen)}
                        onMouseLeave={() => scheduleClose(setResourcesOpen)}
                        onFocus={() => openMenu(setResourcesOpen)}
                        onBlur={() => scheduleClose(setResourcesOpen)}
                        onKeyDown={(e) => { if (e.key === 'Escape') setResourcesOpen(false); }}
                    >
                        <button
                            type="button"
                            aria-haspopup="true"
                            aria-expanded={resourcesOpen}
                            onClick={() => setResourcesOpen((v) => !v)}
                            className="flex items-center gap-1 transition-colors hover:text-foreground text-foreground/80"
                        >
                            Resources <ChevronDown className="h-3 w-3" aria-hidden />
                        </button>
                        {resourcesOpen && (
                            <div className="absolute top-full left-0 pt-2 w-48">
                                <div className="rounded-md border border-border bg-popover/95 backdrop-blur-md py-1 shadow-xl">
                                    <Link href="/blog" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent">Blog</Link>
                                    <Link href="/resources" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent">Guides &amp; Tools</Link>
                                    <Link href="/case-studies" className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent">Case Studies</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <div className="md:hidden flex items-center pr-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileMenuOpen}
                            className="ml-4 text-foreground p-1"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
                        </button>
                    </div>
                    <nav className="hidden md:flex items-center space-x-2">
                        <ThemeToggle />
                        <Link href="https://app.ministrymotion.com/login">
                            <Button variant="ghost" size="sm">
                                Log In
                            </Button>
                        </Link>
                        <Button size="sm" onClick={openBetaModal}>
                            Get Started
                        </Button>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-popover/95 backdrop-blur-md px-6 py-6 flex flex-col space-y-5 shadow-2xl">
                    <Link href="/products" className="text-foreground hover:text-foreground/80 font-medium" onClick={() => setMobileMenuOpen(false)}>Products</Link>
                    <Link href="/solutions/praise-leaders" className="text-foreground hover:text-foreground/80 font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
                    <Link href="/pricing" className="text-foreground hover:text-foreground/80 font-medium" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                    <Link href="/compare" className="text-foreground hover:text-foreground/80 font-medium" onClick={() => setMobileMenuOpen(false)}>Compare</Link>
                    <Link href="/resources" className="text-foreground hover:text-foreground/80 font-medium" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
                    <div className="pt-6 border-t border-border flex flex-col space-y-3">
                        <Link href="https://app.ministrymotion.com/login" onClick={() => setMobileMenuOpen(false)} className="w-full">
                            <Button variant="outline" className="w-full justify-center">Log In</Button>
                        </Link>
                        <Button className="w-full justify-center" onClick={() => { setMobileMenuOpen(false); openBetaModal(); }}>Get Started</Button>
                    </div>
                </div>
            )}
        </header>
    );
}
