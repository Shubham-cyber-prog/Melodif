
'use client';
import { useRef } from 'react';
import { AlbumArtwork } from '@/components/album-artwork';
import { playlists, madeForYouPlaylists, recentlyPlayed } from '@/lib/data';
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
import { Youtube, Link as LinkIcon } from 'lucide-react';

const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      fill="currentColor"
      {...props}
    >
      <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm108.2 327.9c-14.3 23.7-41.3 32.2-63.5 18-11.4-7.4-20.1-17.6-25.1-29.5-1.9-4.5-2.2-9.4-1.3-14.2 14.3-23.7 41.3-32.2 63.5-18 22.2 14.2 30.7 41.3 16.4 63.7zM140.4 260c-14.3 23.7-41.3 32.2-63.5 18-22.2-14.2-30.7-41.3-16.4-63.7 14.3-23.7 41.3-32.2 63.5-18 22.2 14.2 30.7 41.3 16.4 63.7zm196.2 46.1c-12.2 20.3-35.3 27.5-55.6 15.3-10.4-6.3-17.2-15-20.6-25.2-1.2-3.8-1.5-7.9-1.1-12 12.2-20.3 35.3-27.5 55.6-15.3 20.3 12.2 27.5 35.3 15.3 55.6l-.1.1z" />
    </svg>
  );

export default function Home() {
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
                <CarouselItem key={playlist.id}>
                    <AlbumArtwork
                        item={playlist}
                        className="w-full"
                        aspectRatio="portrait"
                        width={1200}
                        height={250}
                    />
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
      </div>
      <div>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
          Listen Now
        </h1>
        <p className="text-md md:text-lg text-muted-foreground">
          Top picks for you. Updated daily.
        </p>
      </div>

       <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Recently Played</h2>
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
         <AIRecommendations />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Connect Your Accounts</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Youtube className="h-10 w-10 text-red-600" />
                        <div>
                            <CardTitle>YouTube</CardTitle>
                            <CardDescription>Import your playlists and liked videos.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Button className="w-full">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Connect YouTube
                    </Button>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <SpotifyIcon className="h-10 w-10 text-green-500" />
                        <div>
                            <CardTitle>Spotify</CardTitle>
                            <CardDescription>Bring in all your playlists and liked songs.</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Button className="w-full">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Connect Spotify
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Your Playlists</h2>
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
