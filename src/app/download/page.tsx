import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Music } from 'lucide-react';

export default function DownloadPage() {
    // Mock data for downloaded songs
    const downloadedSongs = [
      { id: 1, title: "Midnight Bloom", artist: "Aura" },
      { id: 3, title: "City of Stars", artist: "Celestial" },
      { id: 6, title: "Sunset Drive", artist: "Horizon" },
    ];
  
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Your Downloads
          </h1>
          <p className="text-lg text-muted-foreground">
            Music available for offline listening.
          </p>
        </div>
  
        <Card>
          <CardHeader>
            <CardTitle>Downloaded Songs</CardTitle>
            <CardDescription>
              You have {downloadedSongs.length} songs downloaded.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {downloadedSongs.map((song) => (
                <div key={song.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                  <div className="flex items-center gap-4">
                    <Music className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">{song.title}</p>
                      <p className="text-sm text-muted-foreground">{song.artist}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-5 w-5 text-primary" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  