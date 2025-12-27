import { AlbumArtwork } from '@/components/album-artwork';
import { playlists, madeForYouPlaylists, youtubePlaylists, spotifyPlaylists } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AIRecommendations from '@/components/ai-recommendations';

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Listen Now
        </h1>
        <p className="text-lg text-muted-foreground">
          Top picks for you. Updated daily.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {madeForYouPlaylists.map((playlist) => (
            <AlbumArtwork
              key={playlist.id}
              playlist={playlist}
              className="w-full"
              aspectRatio="square"
              width={250}
              height={250}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
         <AIRecommendations />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">From YouTube</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {youtubePlaylists.map((playlist) => (
            <AlbumArtwork
              key={playlist.id}
              playlist={playlist}
              className="w-full"
              aspectRatio="square"
              width={250}
              height={250}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">From Spotify</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {spotifyPlaylists.map((playlist) => (
            <AlbumArtwork
              key={playlist.id}
              playlist={playlist}
              className="w-full"
              aspectRatio="square"
              width={250}
              height={250}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Your Playlists</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {playlists.slice(0, 6).map((playlist) => (
            <AlbumArtwork
              key={playlist.id}
              playlist={playlist}
              className="w-full"
              aspectRatio="square"
              width={250}
              height={250}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
