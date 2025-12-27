import { getPlaylistById } from '@/lib/data';
import { getArtworkById } from '@/lib/placeholder-images';
import { songs as allSongs } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Clock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PlaylistPage({ params }: { params: { id: string } }) {
  const playlist = getPlaylistById(params.id);

  if (!playlist) {
    notFound();
  }

  const artwork = getArtworkById(playlist.coverArtId);
  const artworkUrl = artwork?.imageUrl;

  return (
    <div className="space-y-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end">
            {artworkUrl && (
                <div className="flex-shrink-0 mx-auto md:mx-0">
                    <Image 
                        src={artworkUrl} 
                        alt={playlist.name} 
                        width={250} 
                        height={250} 
                        className="w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-lg object-cover"
                        data-ai-hint={artwork?.imageHint || 'playlist cover'}
                    />
                </div>
            )}
            <div className="space-y-2 text-center md:text-left">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Playlist</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">{playlist.name}</h1>
                <p className="text-muted-foreground">{playlist.description}</p>
                <p className="text-sm text-muted-foreground">{playlist.songs.length} songs</p>
            </div>
        </div>

        <Button size="lg" className="rounded-full">
            <Play className="mr-2 h-5 w-5 fill-current" /> Play
        </Button>

        <Table>
            <TableHeader>
                <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Album</TableHead>
                <TableHead className="text-right">
                    <Clock className="inline-block h-4 w-4" />
                </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {playlist.songs.map((song, index) => {
                    const songArtwork = getArtworkById(song.artworkId);
                    return (
                    <TableRow key={song.id} className="group">
                        <TableCell className="font-medium text-muted-foreground">{index + 1}</TableCell>
                        <TableCell>
                            <Link href={`/song/${song.id}`} className="flex items-center gap-4">
                                {songArtwork && 
                                    <Image 
                                        src={songArtwork.imageUrl} 
                                        alt={song.album} 
                                        width={40} 
                                        height={40} 
                                        className="rounded"
                                        data-ai-hint={songArtwork.imageHint || 'album cover'}
                                    />
                                }
                                <div>
                                    <p className="font-medium group-hover:text-primary">{song.title}</p>
                                    <p className="text-sm text-muted-foreground">{song.artist}</p>
                                </div>
                            </Link>
                        </TableCell>
                        <TableCell className="text-muted-foreground hidden md:table-cell">{song.album}</TableCell>
                        <TableCell className="text-right text-muted-foreground">{song.duration}</TableCell>
                    </TableRow>
                )})}
            </TableBody>
        </Table>
    </div>
  );
}

export async function generateStaticParams() {
    const playlists = [...allSongs.map(s => s.album.toLowerCase().replace(/ /g, '-'))];
    const playlistIds = [...new Set(playlists)];
    
    // In a real app, you would fetch all playlist IDs
    const mockIds = ['playlist-1', 'playlist-2', 'playlist-3', 'playlist-4', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6', 'yt-1', 'yt-2', 'sp-1', 'sp-2'];
   
    return mockIds.map((id) => ({
      id,
    }))
  }
