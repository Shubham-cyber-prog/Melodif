

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
import { Youtube, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

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

  const HeroSection = () => {
    const featuredPlaylists = [...playlists.slice(0, 2), ...madeForYouPlaylists.slice(0, 3)];
    const mainItem = featuredPlaylists[0];
    const sideItems = featuredPlaylists.slice(1, 5);
  
    return (
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 md:col-span-2 rounded-lg overflow-hidden">
            <AlbumArtwork
              item={mainItem}
              className="w-full h-full"
              aspectRatio="square"
              width={250}
              height={250}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:col-span-2 gap-4">
            {sideItems.map((playlist) => (
              <AlbumArtwork
                key={playlist.id}
                item={playlist}
                className="w-full"
                aspectRatio="square"
                width={150}
                height={150}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default function Home() {
  return (
    <div className="space-y-12 animate-fade-in">
        <header className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Listen Now
            </h1>
            <p className="text-lg text-muted-foreground">
            Top picks for you. Updated daily.
            </p>
        </header>
      
        <HeroSection />
      
       <section className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">Recently Played</h2>
                <Button variant="link" asChild>
                    <Link href="/library">View All</Link>
                </Button>
            </div>
            <div className="relative overflow-hidden">
                <Carousel opts={{ align: 'start', dragFree: true }} className="w-full">
                    <CarouselContent className="-ml-4">
                        {recentlyPlayed.map((item, index) => (
                            <CarouselItem key={`${item.id}-${index}`} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4">
                                <AlbumArtwork
                                    item={item}
                                    className="w-full"
                                    aspectRatio="square"
                                    width={150}
                                    height={150}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                </Carousel>
            </div>
        </section>

      <section>
         <AIRecommendations />
      </section>

        <section className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">Made For You</h2>
                <Button variant="link" asChild>
                    <Link href="/library">View All</Link>
                </Button>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {madeForYouPlaylists.slice(0, 6).map((playlist) => (
                     <Card key={playlist.id} className="flex items-center gap-4 overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-white/5 bg-card group">
                        <Link href={`/playlist/${playlist.id}`} className="flex items-center gap-4 w-full">
                            <AlbumArtwork
                                item={playlist}
                                className="w-20 h-20 flex-shrink-0"
                                aspectRatio="square"
                                width={80}
                                height={80}
                                isLink={false}
                            />
                            <p className="flex-1 font-semibold truncate pr-4 group-hover:text-primary">{playlist.name}</p>
                        </Link>
                    </Card>
                ))}
            </div>
      </section>


        <section className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">Your Playlists</h2>
                <Button variant="link" asChild>
                    <Link href="/library">View All</Link>
                </Button>
            </div>
            <div className="relative overflow-hidden">
                <Carousel opts={{ align: 'start', dragFree: true }} className="w-full">
                    <CarouselContent className="-ml-4">
                        {playlists.map((playlist) => (
                            <CarouselItem key={playlist.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4">
                                <AlbumArtwork
                                    item={playlist}
                                    className="w-full"
                                    aspectRatio="square"
                                    width={150}
                                    height={150}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                </Carousel>
            </div>
        </section>

         <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Connect Your Accounts</h2>
             <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Card className="bg-gradient-to-br from-red-500/10 to-transparent">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Youtube className="h-10 w-10 text-red-600" />
                            <div>
                                <CardTitle>YouTube</CardTitle>
                                <CardDescription className="text-foreground/80">Import your music library.</CardDescription>
                            </div>
                        </div>
                        <Button>
                            <LinkIcon className="mr-2 h-4 w-4" />
                            Connect
                        </Button>
                    </CardHeader>
                </Card>
                <Card className="bg-gradient-to-br from-green-500/10 to-transparent">
                     <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-4">
                            <SpotifyIcon className="h-10 w-10 text-green-500" />
                            <div>
                                <CardTitle>Spotify</CardTitle>
                                <CardDescription className="text-foreground/80">Bring in your playlists.</CardDescription>
                            </div>
                        </div>
                        <Button>
                            <LinkIcon className="mr-2 h-4 w-4" />
                            Connect
                        </Button>
                    </CardHeader>
                </Card>
            </div>
        </section>
    </div>
  );
}
