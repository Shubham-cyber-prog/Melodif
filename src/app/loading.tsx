import { Music } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center">
      <div className="flex animate-pulse items-center gap-4">
        <Music className="h-12 w-12 text-primary" />
        <span className="text-3xl font-semibold text-primary">Mia</span>
      </div>
      <p className="mt-4 text-muted-foreground">Loading your music...</p>
    </div>
  );
}
