
import { Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export function AppFooter() {
  return (
    <footer className="border-t bg-background/95 p-8 md:p-12 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <svg
                    className="h-8 w-8 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M4 4.00098H8V16.001L12 12.001L16 16.001V4.00098H20V20.001H16V8.00098L12 12.001L8 8.00098V20.001H4V4.00098Z"
                    fill="currentColor"
                    />
                </svg>
                <h3 className="text-lg font-semibold text-foreground">Melodif</h3>
            </div>
            <p className="text-muted-foreground">Your next favorite music destination.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">For the Record</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Useful Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Support</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Free Mobile App</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex items-center gap-4">
                <Link 
                    href="https://github.com/Shubham-cyber-prog" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub" 
                    className="rounded-full bg-secondary p-2 hover:bg-primary hover:text-primary-foreground"
                >
                    <Github className="h-5 w-5" />
                </Link>
                 <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="rounded-full bg-secondary p-2 hover:bg-primary hover:text-primary-foreground">
                    <Twitter className="h-5 w-5" />
                 </a>
                 <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-secondary p-2 hover:bg-primary hover:text-primary-foreground">
                    <Instagram className="h-5 w-5" />
                 </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
                 <p>&copy; {new Date().getFullYear()} Melodif. All rights reserved.</p>
                 <div className="flex gap-4">
                    <Link href="#" className="hover:text-foreground">Legal</Link>
                    <Link href="#" className="hover:text-foreground">Privacy Center</Link>
                    <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
                 </div>
                 <p className="text-sm">
                    Built by{' '}
                    <a
                        href="https://github.com/Shubham-cyber-prog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground underline-offset-4 hover:underline"
                    >
                        Shubham Nayak
                    </a>
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
}
