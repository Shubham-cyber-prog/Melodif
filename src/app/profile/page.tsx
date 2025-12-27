
'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { playlists } from '@/lib/data';
import { AlbumArtwork } from '@/components/album-artwork';
import { BarChart, ListMusic, Users, Pen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useProfile } from '@/contexts/ProfileContext';

export default function ProfilePage() {
  const { firstName, lastName, avatar, banner } = useProfile();
  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
        <div className="relative h-32 md:h-48">
            <Image 
                src={banner}
                alt="Profile banner"
                fill
                className="object-cover"
                data-ai-hint="nature forest"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col items-center md:flex-row md:items-end gap-4 -mt-20 md:-mt-24">
            <div className="relative z-10 flex-shrink-0">
              <Avatar className="h-28 w-28 md:h-32 md:w-32 border-4 border-background ring-4 ring-primary">
                <AvatarImage src={avatar} alt="User Avatar" />
                <AvatarFallback>{firstName.charAt(0)}{lastName.charAt(0)}</AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full" asChild>
                <Link href="/settings">
                    <Pen className="h-4 w-4" />
                    <span className="sr-only">Edit Profile</span>
                </Link>
              </Button>
            </div>
            <div className="flex-1 space-y-1 text-center md:text-left pt-4 md:pt-0">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-shadow-lg">{firstName} {lastName}</h1>
              <p className="text-sm text-muted-foreground">user@melodif.com</p>
            </div>
             <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button variant="outline" asChild className="w-full sm:w-auto">
                    <Link href="/settings">Account Settings</Link>
                </Button>
                <Button asChild className="w-full sm:w-auto">
                    <Link href="/analytics">View Analytics</Link>
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Followers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Following</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">150</div>
                <p className="text-xs text-muted-foreground">+10 from last month</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Public Playlists</CardTitle>
                <ListMusic className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{playlists.length}</div>
                 <p className="text-xs text-muted-foreground">4 created this month</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Monthly Hours</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">73.4</div>
                 <p className="text-xs text-muted-foreground">Total this month</p>
            </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Public Playlists</h2>
            <Button variant="link" asChild>
                <Link href="/library">View All</Link>
            </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {playlists.slice(0, 6).map((playlist) => (
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
      
       <div className="space-y-6">
        <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Recent Activity</h2>
            <Button variant="link" asChild>
                <Link href="/analytics">View Full Report</Link>
            </Button>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Top Artists</CardTitle>
                <CardDescription>Your most played artists this month.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4"><AvatarImage src="https://picsum.photos/seed/aura/100" /><AvatarFallback>AU</AvatarFallback></Avatar>
                        <div className="flex-1">
                            <p className="font-semibold">Aura</p>
                            <p className="text-sm text-muted-foreground">120 plays</p>
                        </div>
                        <div className="w-1/3 h-2 bg-muted rounded-full">
                            <div className="h-2 bg-primary rounded-full" style={{width: '90%'}}></div>
                        </div>
                    </div>
                     <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4"><AvatarImage src="https://picsum.photos/seed/celestial/100" /><AvatarFallback>CE</AvatarFallback></Avatar>
                        <div className="flex-1">
                            <p className="font-semibold">Celestial</p>
                            <p className="text-sm text-muted-foreground">98 plays</p>
                        </div>
                        <div className="w-1/3 h-2 bg-muted rounded-full">
                            <div className="h-2 bg-primary rounded-full" style={{width: '75%'}}></div>
                        </div>
                    </div>
                     <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4"><AvatarImage src="https://picsum.photos/seed/nomad/100" /><AvatarFallback>NO</AvatarFallback></Avatar>
                        <div className="flex-1">
                            <p className="font-semibold">Nomad</p>
                            <p className="text-sm text-muted-foreground">86 plays</p>
                        </div>
                        <div className="w-1/3 h-2 bg-muted rounded-full">
                            <div className="h-2 bg-primary rounded-full" style={{width: '60%'}}></div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

    