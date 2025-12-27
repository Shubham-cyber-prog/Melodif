
'use client';

import { Home, Search, Library, UploadCloud, BarChart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/library', label: 'Your Library', icon: Library },
  { href: '/analytics', label: 'Analytics', icon: BarChart },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 h-24 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="grid h-full grid-cols-4 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.href}
              className="flex flex-col items-center justify-center gap-1 text-muted-foreground"
            >
              <link.icon
                className={cn('h-6 w-6', isActive && 'text-primary')}
              />
              <span className={cn('text-xs', isActive && 'text-primary')}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
