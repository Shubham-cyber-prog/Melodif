
'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { playlists, songs } from '@/lib/data';
import { AlbumArtwork } from '@/components/album-artwork';
import { BarChart, ListMusic, Users, Pen, Share2, Music } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useProfile } from '@/contexts/ProfileContext';
import { getArtworkById } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';

// Mock data for followers/following
const followers = [
  { name: 'Alex', avatar: 'https://picsum.photos/seed/alex/100' },
  { name: 'Maria', avatar: 'https://picsum.photos/seed/maria/100' },
  { name: 'David', avatar: 'https://picsum.photos/seed/david/100' },
  { name: 'Sophia', avatar: 'https://picsum.photos/seed/sophia/100' },
];

const following = [
  { name: 'Aura', avatar: 'https://picsum.photos/seed/aura/100' },
  { name: 'Celestial', avatar: 'https://picsum.photos/seed/celestial/100' },
  { name: 'Nomad', avatar: 'https://picsum.photos/seed/nomad/100' },
];

export default function ProfilePage() {
  const { firstName, lastName, avatar, banner, bio } = useProfile();
  const topTracks = songs.slice(0, 5);
  const { toast } = useToast();

  const handleShare = async () => {
    const shareData = {
      title: `${firstName} ${lastName}'s Profile on Melodif`,
      text: `Check out ${firstName}'s profile on Melodif and listen to their top tracks!`,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        toast({
          title: 'Profile Shared!',
          description: 'Your profile has been shared successfully.',
        });
      } catch (error) {
        console.error('Error sharing profile:', error);
        toast({
          title: 'Sharing Failed',
          description: 'Could not share the profile at this time.',
          variant: 'destructive',
        });
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: 'Link Copied!',
          description: 'Profile link copied to your clipboard.',
        });
      } catch (err) {
        console.error('Failed to copy URL:', err);
        toast({
          title: 'Copying Failed',
          description: 'Could not copy the link to your clipboard.',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
        <div className="relative h-48 md:h-56">
            <Image 
                src={banner}
                alt="Profile banner"
                fill
                className="object-cover"
                data-ai-hint="nature forest"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col items-center md:flex-row md:items-end gap-4 -mt-24 md:-mt-28">
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
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{firstName} {lastName}</h1>
              <p className="text-sm text-muted-foreground">user@melodif.com</p>
               <p className="text-sm text-foreground max-w-prose">{bio}</p>
            </div>
             <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button variant="outline" onClick={handleShare}>
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
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
      
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Top Tracks</h2>
                    <Button variant="link" asChild>
                        <Link href="/analytics">View All</Link>
                    </Button>
                </div>
                 <Card>
                    <CardContent className="p-4 space-y-2">
                        {topTracks.map((song, index) => {
                            const artwork = getArtworkById(song.artworkId);
                            return (
                                <div key={song.id} className="flex items-center gap-4 p-2 rounded-md hover:bg-muted">
                                    <span className="text-sm font-medium text-muted-foreground">{index + 1}</span>
                                    <Image src={artwork?.imageUrl ?? `https://picsum.photos/seed/${song.id}/40/40`} alt={song.title} width={40} height={40} className="rounded" />
                                    <div className="flex-1">
                                        <p className="font-semibold truncate">{song.title}</p>
                                        <p className="text-sm text-muted-foreground">{song.artist}</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{song.duration}</p>
                                </div>
                            )
                        })}
                    </CardContent>
                </Card>
            </div>
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Top Artists</h2>
                    <Button variant="link" asChild>
                        <Link href="/analytics">View All</Link>
                    </Button>
                </div>
                <Card>
                    <CardContent className="p-4">
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
      
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Following</h2>
                <Card>
                    <CardContent className="p-4 space-y-4">
                        {following.map(user => (
                            <div key={user.name} className="flex items-center gap-4 p-2 rounded-md hover:bg-muted">
                                <Avatar><AvatarImage src={user.avatar} /><AvatarFallback>{user.name.charAt(0)}</AvatarFallback></Avatar>
                                <p className="font-semibold flex-1">{user.name}</p>
                                <Button variant="outline" size="sm">Unfollow</Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-6">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">Followers</h2>
                <Card>
                    <CardContent className="p-4 space-y-4">
                        {followers.map(user => (
                            <div key={user.name} className="flex items-center gap-4 p-2 rounded-md hover:bg-muted">
                                <Avatar><AvatarImage src={user.avatar} /><AvatarFallback>{user.name.charAt(0)}</AvatarFallback></Avatar>
                                <p className="font-semibold flex-1">{user.name}</p>
                                <Button variant="secondary" size="sm">Follow Back</Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
       </div>

    </div>
  );
}

    

    
