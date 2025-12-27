import { getSongById, songs } from '@/lib/data';
import { getArtworkById } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Clock, Music, Play, User, Mic, Disc } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function SongPage({ params }: { params: { id: string } }) {
  const song = getSongById(parseInt(params.id));

  if (!song) {
    notFound();
  }

  const artwork = getArtworkById(song.artworkId);
  const artworkUrl = artwork?.imageUrl;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        {artworkUrl && (
          <div className="flex-shrink-0">
            <Image
              src={artworkUrl}
              alt={song.album}
              width={250}
              height={250}
              className="rounded-lg shadow-2xl"
              data-ai-hint={artwork?.imageHint || 'song artwork'}
            />
          </div>
        )}
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Song</p>
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl">{song.title}</h1>
          <div className="flex items-center gap-2 text-xl text-muted-foreground">
            <User className="h-5 w-5" />
            <h2>{song.artist}</h2>
          </div>
          <div className="flex items-center gap-2 text-lg text-muted-foreground">
             <Disc className="h-5 w-5" />
             <p>{song.album}</p>
          </div>
           <div className="flex items-center gap-2 text-md text-muted-foreground">
             <Clock className="h-4 w-4" />
             <p>{song.duration}</p>
          </div>
        </div>
      </div>

      <Button size="lg" className="rounded-full">
        <Play className="mr-2 h-5 w-5 fill-current" /> Play Song
      </Button>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
         <Card>
            <CardContent className="flex items-center gap-4 p-6">
                <Disc className="h-8 w-8 text-primary" />
                <div>
                    <p className="text-sm text-muted-foreground">Album</p>
                    <p className="font-semibold">{song.album}</p>
                </div>
            </CardContent>
        </Card>
         <Card>
            <CardContent className="flex items-center gap-4 p-6">
                <Mic className="h-8 w-8 text-primary" />
                <div>
                    <p className="text-sm text-muted-foreground">Artist</p>
                    <p className="font-semibold">{song.artist}</p>
                </div>
            </CardContent>
        </Card>
         <Card>
            <CardContent className="flex items-center gap-4 p-6">
                <Music className="h-8 w-8 text-primary" />
                <div>
                    <p className="text-sm text-muted-foreground">Genre</p>
                    <p className="font-semibold">Synthwave</p>
                </div>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}

export async function generateStaticParams() {
    return songs.map((song) => ({
      id: song.id.toString(),
    }));
}
