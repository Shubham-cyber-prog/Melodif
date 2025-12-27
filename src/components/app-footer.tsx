import { Github } from 'lucide-react';
import Link from 'next/link';

export function AppFooter() {
  return (
    <footer className="bg-background/95 p-6 backdrop-blur-sm">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 text-center text-muted-foreground sm:flex-row">
        <p className="text-sm">
          Built by{' '}
          <a
            href="https://github.com/Shubham-cyber-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Shubham Nayak
          </a>
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/Shubham-cyber-prog" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-6 border-t pt-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Melodif. All rights reserved.
      </div>
    </footer>
  );
}
