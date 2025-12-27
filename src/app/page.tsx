

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
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import { getArtworkById } from '@/lib/placeholder-images';

const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.33 13.91c-.24.36-.71.48-1.07.24-2.85-1.74-6.4-2.02-10.61-1.11-.42.09-.84-.18-.93-.6-.09-.42.18-.84.6-.93C9.03 9.6 13.06 9.86 16.28 11.8c.36.24.48.71.24 1.07zm-1.07-2.39c-.29.43-.84.58-1.27.29-2.5-1.54-5.59-1.9-9.13-1.05-.49.11-.98-.19-1.09-.68-.11-.49.19-.98.68-1.09 3.96-.94 7.46-.54 10.35 1.25.43.29.58.84.29 1.27zm-1.2-2.58c-.34.5-.99.66-1.49.32-2.2-1.32-5.02-1.62-8.41-0.9-.57.12-1.14-.23-1.26-.79-.12-.57.23-1.14.79-1.26 3.82-.79 7.02-.45 9.64 1.1.5.34.66.99.32 1.49z"/>
    </svg>
);

  const HeroCarousel = () => {
    const featuredPlaylists = [...playlists.slice(0, 4), ...madeForYouPlaylists.slice(0, 3)];
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {featuredPlaylists.map((playlist) => {
                    const artwork = getArtworkById(playlist.coverArtId);
                    return (
                        <CarouselItem key={playlist.id}>
                            <div className="relative aspect-[3/1] w-full overflow-hidden rounded-lg">
                                {artwork?.imageUrl && (
                                    <Image
                                        src={artwork.imageUrl}
                                        alt={playlist.name}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={artwork.imageHint}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                                    <h2 className="text-3xl font-bold text-white text-shadow">{playlist.name}</h2>
                                    <p className="text-white/80 text-shadow-sm">{playlist.description}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
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
      
        <HeroCarousel />
      
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
                            <CarouselItem key={`${item.id}-${index}`} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-[14%] pl-4">
                                <AlbumArtwork
                                    item={item}
                                    className="w-full"
                                    aspectRatio="square"
                                    width={120}
                                    height={120}
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
                     <Card key={playlist.id} className="flex items-center gap-4 overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-white/5 bg-card group animate-button-press">
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
                            <CarouselItem key={playlist.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-[14%] pl-4">
                                <AlbumArtwork
                                    item={playlist}
                                    className="w-full"
                                    aspectRatio="square"
                                    width={120}
                                    height={120}
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
