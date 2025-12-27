'use client';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { songs, playlists, getAlbums, getArtists } from '@/lib/data';
import type { Song, Album, Artist, Playlist } from '@/lib/types';
import Image from 'next/image';
import { getArtworkById } from '@/lib/placeholder-images';
import { Music, Search as SearchIcon, User, Disc, ListMusic } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const genres = [
    { name: 'Bollywood', color: 'bg-red-500', artworkId: 'artwork-indian-1' },
    { name: 'Pop', color: 'bg-blue-500', artworkId: 'artwork6' },
    { name: 'Hip-Hop', color: 'bg-purple-500', artworkId: 'artwork-indian-7' },
    { name: 'Indie', color: 'bg-green-500', artworkId: 'artwork14' },
    { name: 'Rock', color: 'bg-orange-500', artworkId: 'artwork13' },
    { name: 'Electronic', color: 'bg-indigo-500', artworkId: 'artwork10' },
    { name: 'Classical', color: 'bg-yellow-500', artworkId: 'artwork4' },
    { name: 'Focus', color: 'bg-teal-500', artworkId: 'artwork5' },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = useMemo(() => {
    if (!searchTerm) return [];
    return songs
      .filter(
        (song) =>
          song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
          song.album.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [searchTerm]);

  const filteredArtists = useMemo(() => {
    if (!searchTerm) return [];
    const allArtists = getArtists();
    return allArtists
      .filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
  }, [searchTerm]);

    const filteredAlbums = useMemo(() => {
        if (!searchTerm) return [];
        const allAlbums = getAlbums();
        return allAlbums.filter(album => 
            album.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            album.artist.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 4);
    }, [searchTerm]);

    const filteredPlaylists = useMemo(() => {
        if (!searchTerm) return [];
        return playlists.filter(playlist => 
            playlist.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 4);
    }, [searchTerm]);


  const TopResult = useMemo(() => {
      if (!searchTerm) return null;
      if (filteredArtists.length > 0) return {...filteredArtists[0], type: 'artist'};
      if (filteredSongs.length > 0) return {...filteredSongs[0], type: 'song'};
      if (filteredAlbums.length > 0) return {...filteredAlbums[0], type: 'album'};
      if (filteredPlaylists.length > 0) return {...filteredPlaylists[0], type: 'playlist'};
      return null;
  }, [searchTerm, filteredArtists, filteredSongs, filteredAlbums, filteredPlaylists]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="What do you want to listen to?"
          className="h-12 text-lg pl-12 rounded-full bg-muted/50 focus:bg-card focus:ring-2 focus:ring-primary/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {searchTerm ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
                <h2 className="text-2xl font-semibold">Top Result</h2>
                {TopResult ? (
                    <TopResultCard item={TopResult} />
                ) : (
                    <p className="text-muted-foreground">No results found.</p>
                )}
            </div>

            <div className="lg:col-span-2 space-y-4">
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

            {filteredAlbums.length > 0 && (
                <div className="lg:col-span-3 space-y-4">
                    <h2 className="text-2xl font-semibold">Albums</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filteredAlbums.map((album) => (
                            <AlbumCard key={album.id} album={album} />
                        ))}
                    </div>
                </div>
            )}
             {filteredPlaylists.length > 0 && (
                <div className="lg:col-span-3 space-y-4">
                    <h2 className="text-2xl font-semibold">Playlists</h2>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filteredPlaylists.map((playlist) => (
                            <PlaylistCard key={playlist.id} playlist={playlist} />
                        ))}
                    </div>
                </div>
            )}

            {filteredArtists.length > 0 && (
                <div className="lg:col-span-3 space-y-4">
                    <h2 className="text-2xl font-semibold">Artists</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filteredArtists.map((artist) => (
                            <ArtistCard key={artist.id} artist={artist} />
                        ))}
                    </div>
                </div>
            )}

        </div>
      ) : (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Browse all</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {genres.map(genre => {
                    const artwork = getArtworkById(genre.artworkId);
                    return (
                        <Link href="#" key={genre.name} className="group">
                            <Card className={`relative overflow-hidden aspect-[3/4] ${genre.color}`}>
                                 <h3 className="p-4 text-xl font-bold text-white text-shadow-lg">{genre.name}</h3>
                                {artwork && (
                                     <Image 
                                        src={artwork.imageUrl}
                                        alt={genre.name}
                                        width={100}
                                        height={100}
                                        className="absolute -bottom-4 -right-4 h-20 w-20 rotate-[25deg] transform-gpu transition-transform duration-300 group-hover:scale-110 object-cover rounded-md"
                                     />
                                )}
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
      )}
    </div>
  );
}

function SongResult({ song }: { song: Song }) {
  const artwork = getArtworkById(song.artworkId);
  return (
    <div className="flex items-center gap-4 rounded-md p-2 -mx-2 hover:bg-accent transition-colors">
      <Image
        src={artwork?.imageUrl ?? `https://picsum.photos/seed/${song.id}/40/40`}
        alt={song.album}
        width={40}
        height={40}
        className="rounded"
        data-ai-hint={artwork?.imageHint || 'album cover'}
      />
      <div className="flex-1">
        <p className="font-medium">{song.title}</p>
        <p className="text-sm text-muted-foreground">{song.artist}</p>
      </div>
      <p className="text-sm text-muted-foreground">{song.duration}</p>
    </div>
  );
}

function TopResultCard({ item }: { item: (Song | Album | Artist | Playlist) & {type: string} }) {
    const artwork = getArtworkById(item.coverArtId || (item as Song).artworkId);
    const isArtist = item.type === 'artist';

    return (
         <Card className="p-4 bg-secondary/50 hover:bg-secondary transition-all group">
            <div className="space-y-4">
                 <Image 
                    src={artwork?.imageUrl ?? `https://picsum.photos/seed/${item.id}/200/200`}
                    alt={item.name}
                    width={100}
                    height={100}
                    className={isArtist ? 'rounded-full' : 'rounded-md'}
                    data-ai-hint={artwork?.imageHint || 'music cover'}
                />
                <div>
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground capitalize flex items-center gap-2">
                        {item.type === 'song' && <><Music className="h-4 w-4"/> Song • {(item as Song).artist}</>}
                        {item.type === 'album' && <><Disc className="h-4 w-4"/> Album • {(item as Album).artist}</>}
                        {item.type === 'playlist' && <><ListMusic className="h-4 w-4"/> Playlist</>}
                        {item.type === 'artist' && <><User className="h-4 w-4"/> Artist</>}
                    </p>
                </div>
            </div>
         </Card>
    )
}

function AlbumCard({ album }: { album: Album }) {
    const artwork = getArtworkById(album.coverArtId);
    return (
        <Card className="p-4 bg-secondary/30 hover:bg-secondary transition-all group">
            <div className="space-y-2">
                <Image
                    src={artwork?.imageUrl ?? `https://picsum.photos/seed/${album.id}/150/150`}
                    alt={album.name}
                    width={150}
                    height={150}
                    className="rounded-md w-full aspect-square object-cover"
                />
                <div>
                    <p className="font-semibold truncate">{album.name}</p>
                    <p className="text-xs text-muted-foreground">{album.artist}</p>
                </div>
            </div>
        </Card>
    );
}

function PlaylistCard({ playlist }: { playlist: Playlist }) {
    const artwork = getArtworkById(playlist.coverArtId);
    return (
         <Card className="p-4 bg-secondary/30 hover:bg-secondary transition-all group">
            <div className="space-y-2">
                 <Image
                    src={artwork?.imageUrl ?? `https://picsum.photos/seed/${playlist.id}/150/150`}
                    alt={playlist.name}
                    width={150}
                    height={150}
                    className="rounded-md w-full aspect-square object-cover"
                />
                 <div>
                    <p className="font-semibold truncate">{playlist.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{playlist.type}</p>
                </div>
            </div>
        </Card>
    );
}

function ArtistCard({ artist }: { artist: Artist }) {
    const artwork = getArtworkById(artist.coverArtId);
    return (
         <Card className="p-4 bg-secondary/30 hover:bg-secondary transition-all group flex flex-col items-center text-center">
            <div className="space-y-2">
                 <Image
                    src={artwork?.imageUrl ?? `https://picsum.photos/seed/${artist.id}/150/150`}
                    alt={artist.name}
                    width={150}
                    height={150}
                    className="rounded-full w-32 h-32 object-cover"
                />
                 <div>
                    <p className="font-semibold truncate">{artist.name}</p>
                    <p className="text-xs text-muted-foreground">Artist</p>
                </div>
            </div>
        </Card>
    );
}
