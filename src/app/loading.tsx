import { Music } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center">
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
