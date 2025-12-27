'use client';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { songs } from '@/lib/data';
import type { Song } from '@/lib/types';
import Image from 'next/image';
import { getArtworkById } from '@/lib/data';
import { Music } from 'lucide-react';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = useMemo(() => {
    if (!searchTerm) return [];
    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.album.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const artists = useMemo(() => {
    const artistSet = new Set<string>();
    filteredSongs.forEach((song) => artistSet.add(song.artist));
    return Array.from(artistSet);
  }, [filteredSongs]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Search
        </h1>
        <p className="text-lg text-muted-foreground">
          Find your next favorite song, artist, or album.
        </p>
      </div>

      <Input
        placeholder="What do you want to listen to?"
        className="h-12 text-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Songs</h2>
            {filteredSongs.length > 0 ? (
              <div className="space-y-2">
                {filteredSongs.map((song) => (
                  <SongResult key={song.id} song={song} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No songs found.</p>
            )}
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Artists</h2>
            {artists.length > 0 ? (
                <div className="space-y-2">
                    {artists.map((artist) => (
                    <ArtistResult key={artist} artistName={artist} />
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground">No artists found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SongResult({ song }: { song: Song }) {
  const artworkUrl = getArtworkById(song.artworkId);
  return (
    <div className="flex items-center gap-4 rounded-md p-2 hover:bg-accent">
      {artworkUrl && (
        <Image
          src={artworkUrl}
          alt={song.album}
          width={40}
          height={40}
          className="rounded"
          data-ai-hint="album cover"
        />
      )}
      <div className="flex-1">
        <p className="font-medium">{song.title}</p>
        <p className="text-sm text-muted-foreground">{song.artist}</p>
      </div>
      <p className="text-sm text-muted-foreground">{song.duration}</p>
    </div>
  );
}

function ArtistResult({ artistName }: { artistName: string }) {
    return (
      <div className="flex items-center gap-4 rounded-md p-2 hover:bg-accent">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <Music className="h-5 w-5 text-muted-foreground"/>
        </div>
        <div className="flex-1">
          <p className="font-medium">{artistName}</p>
          <p className="text-sm text-muted-foreground">Artist</p>
        </div>
      </div>
    );
  }
