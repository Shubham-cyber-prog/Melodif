
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[101] flex flex-col items-center justify-center bg-background transition-opacity duration-500',
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="flex animate-pulse items-center gap-2">
        <svg
          className="h-12 w-12 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4.00098H8V16.001L12 12.001L16 16.001V4.00098H20V20.001H16V8.00098L12 12.001L8 8.00098V20.001H4V4.00098Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-3xl font-semibold text-primary">Melodif</span>
      </div>
      <p className="mt-4 text-muted-foreground">Loading your music...</p>
    </div>
  );
}
