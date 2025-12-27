
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { playlists } from '@/lib/data';
import { AlbumArtwork } from '@/components/album-artwork';
import { BarChart, ListMusic, User } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <Avatar className="h-32 w-32 border-4 border-primary">
          <AvatarImage src="https://picsum.photos/seed/avatar/200" alt="User Avatar" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div className="space-y-1 text-center md:text-left">
          <p className="text-sm font-medium text-muted-foreground">Profile</p>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Melodif User</h1>
          <p className="text-lg text-muted-foreground">user@melodif.com</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Followers</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">1,250</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
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
                <CardTitle className="text-sm font-medium">Listening Hours</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">73.4</div>
                 <p className="text-xs text-muted-foreground">Total this month</p>
            </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Public Playlists</h2>
            <Button variant="link" asChild>
                <Link href="/library">View All</Link>
            </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
      
       <div className="space-y-4">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Listening Stats</h2>
            <Button variant="link" asChild>
                <Link href="/analytics">View Full Report</Link>
            </Button>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Top Genres</CardTitle>
                <CardDescription>Your most played genres this month.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    <div className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">Pop</div>
                    <div className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Lofi</div>
                    <div className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Chillwave</div>
                    <div className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">Indie Rock</div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
