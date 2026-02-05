'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useMarketing } from '@/context/MarketingContext';

export function MarketingNav() {
    const { openBetaModal } = useMarketing();

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
            <div className="container mx-auto flex h-14 items-center">
                <div className="mr-4 flex flex-shrink-0">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold whitespace-nowrap text-lg">Ministry Motion</span>
                    </Link>
                </div>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/#products" className="transition-colors hover:text-foreground/80 text-foreground/60 scroll-smooth">Products</Link>
                    <Link href="/#solutions" className="transition-colors hover:text-foreground/80 text-foreground/60 scroll-smooth">Solutions</Link>
                    <Link href="/pricing" className="transition-colors hover:text-foreground/80 text-foreground/60 scroll-smooth">Pricing</Link>
                    <Link href="/#resources" className="transition-colors hover:text-foreground/80 text-foreground/60 scroll-smooth">Resources</Link>
                </nav>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <nav className="flex items-center space-x-2">
                        <ThemeToggle />
                        <Link href="/login">
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
        </header>
    );
}
