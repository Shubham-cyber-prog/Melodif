import { AlbumArtwork } from '@/components/album-artwork';
import { playlists, madeForYouPlaylists } from '@/lib/data';

export default function LibraryPage() {
    const allPlaylists = [...playlists, ...madeForYouPlaylists];
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Your Library
        </h1>
        <p className="text-lg text-muted-foreground">
          All your favorite playlists in one place.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {allPlaylists.map((playlist) => (
            <AlbumArtwork
              key={playlist.id}
              item={playlist}
              className="w-full"
              aspectRatio="square"
              width={250}
              height={250}
            />
          ))}
        </div>
    </div>
  );
}
