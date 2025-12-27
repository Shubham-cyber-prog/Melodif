import Image from 'next/image';
import { Play, Music } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { Playlist, RecentlyPlayed, Album } from '@/lib/types';
import { getArtworkById } from '@/lib/placeholder-images';

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  item: (Playlist | RecentlyPlayed | Album) & { description?: string };
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
}

export function AlbumArtwork({
  item,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  const artwork = getArtworkById(item.coverArtId);
  const artworkUrl = artwork?.imageUrl;
  const imageHint = artwork?.imageHint || 'album cover';
  
  const isPlaylist = 'songs' in item;
  const link = isPlaylist ? `/playlist/${item.id}` : '#';
  const description = item.description || ('artist' in item ? item.artist : '');
  const isArtist = ('type' in item && item.type === 'artist') || (item.description === 'Artist');

  return (
    <div className={cn('space-y-3', className)} {...props}>
      <Link href={link} className="block group" style={{ perspective: '1000px' }}>
        <div className="relative overflow-hidden rounded-lg transition-all duration-300 transform-style-3d group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:rotate-y-4">
          {artworkUrl ? (
            <Image
              src={artworkUrl}
              alt={item.name}
              width={width}
              height={height}
              data-ai-hint={imageHint}
              className={cn(
                'h-auto w-full object-cover transition-all',
                aspectRatio === 'portrait' ? 'aspect-[3/1]' : 'aspect-square',
                isArtist ? 'rounded-full' : 'rounded-lg'
              )}
            />
          ) : (
            <div className={cn(
                'flex items-center justify-center bg-muted',
                aspectRatio === 'portrait' ? 'aspect-[3/1]' : 'aspect-square',
                isArtist ? 'rounded-full' : 'rounded-lg'
              )}>
                <Music className="h-10 w-10 text-muted-foreground" />
            </div>
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
        <h3 className="font-medium leading-none truncate">{item.name}</h3>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
    </div>
  );
}
