import Image from 'next/image';
import { Play } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { Playlist } from '@/lib/types';
import { getArtworkById } from '@/lib/data';

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  playlist: Playlist;
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

export function AlbumArtwork({
  playlist,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  const artworkUrl = getArtworkById(playlist.coverArtId);
  const imageHint = 'album cover'; // Fallback hint

  return (
    <div className={cn('space-y-3', className)} {...props}>
      <Link href={`/playlist/${playlist.id}`} className="block">
        <div className="group relative overflow-hidden rounded-lg">
          {artworkUrl && (
            <Image
              src={artworkUrl}
              alt={playlist.name}
              width={width}
              height={height}
              data-ai-hint={imageHint}
              className={cn(
                'h-auto w-auto object-cover transition-all group-hover:scale-105',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
              )}
            />
          )}
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute bottom-4 right-4 translate-y-4 transform-gpu opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg">
              <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
            </button>
          </div>
        </div>
      </Link>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{playlist.name}</h3>
        <p className="text-xs text-muted-foreground">{playlist.description}</p>
      </div>
    </div>
  );
}
