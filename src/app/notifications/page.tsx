
'use client';

import { Bell, Zap, UserPlus, Music, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getArtworkById } from '@/lib/placeholder-images';

const notifications = [
  {
    id: 1,
    type: 'new_release',
    icon: <Music className="h-5 w-5 text-primary" />,
    title: "New Release from Aura",
    description: "'Neon Dreams' is out now. Listen to the new album!",
    time: "2 hours ago",
    isRead: false,
    artworkId: "artwork1"
  },
  {
    id: 2,
    type: 'playlist_update',
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
    title: "Discover Weekly updated",
    description: "Your weekly mixtape of fresh music is ready.",
    time: "1 day ago",
    isRead: false,
    artworkId: "artwork1"
  },
  {
    id: 3,
    type: 'new_follower',
    icon: <UserPlus className="h-5 w-5 text-blue-500" />,
    title: "Alex followed you",
    description: "You have a new follower. Check out their profile.",
    time: "3 days ago",
    isRead: true,
    artworkId: "avatar"
  },
   {
    id: 4,
    type: 'playlist_update',
    icon: <Zap className="h-5 w-5 text-yellow-500" />,
    title: "Road Trip Anthems updated",
    description: "New tracks added to your favorite road trip playlist.",
    time: "5 days ago",
    isRead: true,
    artworkId: "artwork6"
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Notifications
        </h1>
        <p className="text-lg text-muted-foreground">
          Your latest updates and alerts from Mia.
        </p>
      </div>

       <div className="flex items-center gap-2">
            <Button>All</Button>
            <Button variant="outline">Unread</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {notifications.map((notification) => {
                 const artwork = getArtworkById(notification.artworkId);
                 const imageUrl = artwork?.imageUrl || `https://picsum.photos/seed/${notification.artworkId}/40/40`;
                return (
              <div key={notification.id} className={`flex items-start gap-4 p-4 ${!notification.isRead ? 'bg-secondary/50' : ''}`}>
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={imageUrl} alt={notification.title} />
                  <AvatarFallback>{notification.title.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="font-medium">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{notification.time}</span>
                  </div>
                </div>
                {!notification.isRead && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
              </div>
            )})}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
