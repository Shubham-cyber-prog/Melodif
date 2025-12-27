
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { playlists } from '@/lib/data';
import { AlbumArtwork } from '@/components/album-artwork';
import { BarChart, ListMusic, Users, Pen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfilePage() {
  return (
    <div className="space-y-12 animate-fade-in">
      <Card className="overflow-hidden">
        <div className="relative h-40 md:h-56">
            <Image 
                src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop"
                alt="Profile banner"
                layout="fill"
                objectFit="cover"
                className="object-cover"
                data-ai-hint="abstract gradient"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-24 md:-mt-28">
            <div className="relative z-10">
              <Avatar className="h-32 w-32 border-4 border-background ring-4 ring-primary">
                <AvatarImage src="https://picsum.photos/seed/avatar/200" alt="User Avatar" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                <Pen className="h-4 w-4" />
                <span className="sr-only">Edit Profile</span>
              </Button>
            </div>
            <div className="flex-1 space-y-1 text-center md:text-left">
              <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">Melodif User</h1>
              <p className="text-muted-foreground">user@melodif.com</p>
            </div>
             <div className="flex gap-2">
                <Button variant="outline" asChild>
                    <Link href="/settings">Account Settings</Link>
                </Button>
                <Button asChild>
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
            <h2 className="text-2xl font-semibold tracking-tight">Public Playlists</h2>
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
            <h2 className="text-2xl font-semibold tracking-tight">Recent Activity</h2>
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
