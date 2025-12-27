
'use client';
import { useRef } from 'react';
import { AlbumArtwork } from '@/components/album-artwork';
import { playlists, madeForYouPlaylists, recentlyPlayed, getPlaylistById } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AIRecommendations from '@/components/ai-recommendations';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
    const youtubePlaylist = getPlaylistById('yt-1');
    const spotifyPlaylist = getPlaylistById('sp-1');
    const featuredPlaylists = [...playlists.slice(0, 2), ...madeForYouPlaylists.slice(0, 3)];

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: 'start',
                loop: true,
            }}
            className="w-full"
            >
            <CarouselContent>
                {featuredPlaylists.map((playlist) => (
                <CarouselItem key={playlist.id} className="md:basis-1/2 lg:basis-1/3">
                    <AlbumArtwork
                        item={playlist}
                        className="w-full"
                        aspectRatio="portrait"
                        width={400}
                        height={400}
                    />
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Listen Now
        </h1>
        <p className="text-lg text-muted-foreground">
          Top picks for you. Updated daily.
        </p>
      </div>

       <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Recently Played</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {recentlyPlayed.map((item) => (
            <AlbumArtwork
              key={item.id}
              item={item}
              className="w-full"
              aspectRatio="square"
              width={250}
              height={250}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Made for You</h2>
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: 'start',
                loop: true,
            }}
          className="w-full"
        >
          <CarouselContent>
            {madeForYouPlaylists.map((playlist) => (
              <CarouselItem key={playlist.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                <AlbumArtwork
                  item={playlist}
                  className="w-full"
                  aspectRatio="square"
                  width={250}
                  height={250}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="space-y-4">
         <AIRecommendations />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Connect Your Accounts</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {youtubePlaylist && <Card>
                <CardHeader>
                    <CardTitle>YouTube</CardTitle>
                    <CardDescription>Connect your YouTube account to import your playlists and listen to your favorite music videos.</CardDescription>
                </CardHeader>
                 <CardContent>
                    <AlbumArtwork
                        item={youtubePlaylist}
                        className="w-full"
                        aspectRatio="square"
                        width={150}
                        height={150}
                    />
                </CardContent>
            </Card>}
            {spotifyPlaylist && <Card>
                <CardHeader>
                    <CardTitle>Spotify</CardTitle>
                    <CardDescription>Connect your Spotify account to bring in all your playlists and liked songs.</CardDescription>
                </CardHeader>
                 <CardContent>
                    <AlbumArtwork
                        item={spotifyPlaylist}
                        className="w-full"
                        aspectRatio="square"
                        width={150}
                        height={150}
                    />
                </CardContent>
            </Card>}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Your Playlists</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {playlists.map((playlist) => (
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
    </div>
  );
}
