import Image from 'next/image';
import { Play, Music } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { Playlist, RecentlyPlayed, Album, Artist } from '@/lib/types';
import { getArtworkById } from '@/lib/placeholder-images';

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  item: (Playlist | RecentlyPlayed | Album | Artist) & { description?: string };
  aspectRatio?: 'portrait' | 'square';
  width?: number;
  height?: number;
  isLink?: boolean;
}

export function AlbumArtwork({
  item,
  aspectRatio = 'portrait',
  width,
  height,
  className,
  isLink = true,
  ...props
}: AlbumArtworkProps) {
  const artwork = getArtworkById(item.coverArtId);
  const artworkUrl = artwork?.imageUrl;
  const imageHint = artwork?.imageHint || 'album cover';
  
  let link = '#';
  if (item.type === 'playlist' || ('songs' in item && item.type !== 'album')) {
    link = `/playlist/${item.id}`;
  } else if (item.type === 'song') {
    link = `/song/${'id' in item ? item.id : ''}`;
  } else if (item.type === 'album') {
    link = `/playlist/${item.id}`; // Assuming albums link to a playlist-like view
  } else if (item.type === 'artist') {
      link = `/profile`; // Mock link, should go to artist page
  }


  const description = item.description || ('artist' in item ? item.artist : '');
  const isArtist = item.type === 'artist';

  const ArtworkContent = () => (
    <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover/artwork-cover:shadow-2xl">
      {artworkUrl ? (
        <Image
          src={artworkUrl}
          alt={item.name}
          width={width}
          height={height}
          data-ai-hint={imageHint}
          className={cn(
            'h-auto w-full object-cover transition-transform duration-300 group-hover/artwork-cover:scale-105',
            aspectRatio === 'portrait' ? 'aspect-[3/1]' : 'aspect-square',
            isArtist ? 'rounded-full' : 'rounded-lg'
          )}
        />
      ) : (
        <div className={cn(
            'flex items-center justify-center bg-muted transition-transform duration-300 group-hover/artwork-cover:scale-105',
            aspectRatio === 'portrait' ? 'aspect-[3/1]' : 'aspect-square',
            isArtist ? 'rounded-full' : 'rounded-lg'
          )}>
            <Music className="h-10 w-10 text-muted-foreground" />
        </div>
      )}
      <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover/artwork-cover:opacity-100" />
      <div className="absolute bottom-4 right-4 translate-y-4 transform-gpu opacity-0 transition-all group-hover/artwork:translate-y-0 group-hover/artwork:opacity-100">
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg">
          <Play className="h-6 w-6 fill-primary-foreground text-primary-foreground" />
        </button>
      </div>
    </div>
  );

  const MainContent = () => (
    <>
      <div className="group/artwork-cover">
          <ArtworkContent />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none truncate">{item.name}</h3>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
    </>
  )

  return (
    <div className={cn('space-y-3 group/artwork', className)} {...props}>
      {isLink ? (
        <Link href={link} className="block space-y-3">
          <MainContent/>
        </Link>
      ) : (
        <div className="space-y-3">
            <MainContent/>
        </div>
      )}
    </div>
  );
}
