
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Settings
        </h1>
        <p className="text-lg text-muted-foreground">
          Manage your account and application settings.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your personal information and avatar.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="relative group">
                <Avatar className="h-32 w-32 border-4 border-primary group-hover:border-primary/80 transition-colors">
                  <AvatarImage src="https://picsum.photos/seed/avatar/200" alt="User Avatar" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <Label htmlFor="avatar-file" className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <Camera className="h-8 w-8 text-white" />
                    <span className="sr-only">Change Avatar</span>
                </Label>
                <Input id="avatar-file" type="file" className="sr-only" />
              </div>
              <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold">Melodif User</h2>
                  <p className="text-muted-foreground">user@melodif.com</p>
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Melodif" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="User" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="user@melodif.com" disabled />
                 <p className="text-xs text-muted-foreground">You can't change your email address.</p>
            </div>
            <Button>Update Profile</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>Customize the look and feel of the app.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <Label htmlFor="dark-mode" className="text-base">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Enable or disable dark mode for a different visual experience.</p>
                </div>
                <Switch id="dark-mode" />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
