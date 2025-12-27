
'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Trash2, Bell, LogOut, ShieldCheck, Palette, Music } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { useProfile } from '@/contexts/ProfileContext';

export default function SettingsPage() {
    const { toast } = useToast();
    const { 
        firstName, lastName, avatar, banner, 
        setFirstName, setLastName, setAvatar, setBanner 
    } = useProfile();

    const [currentFirstName, setCurrentFirstName] = useState(firstName);
    const [currentLastName, setCurrentLastName] = useState(lastName);
    const [currentAvatar, setCurrentAvatar] = useState(avatar);
    const [currentBanner, setCurrentBanner] = useState(banner);

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setTheme(isDarkMode ? 'dark' : 'light');
      }, []);
    
      const toggleTheme = () => {
        if (theme === 'dark') {
          document.documentElement.classList.remove('dark');
          setTheme('light');
        } else {
          document.documentElement.classList.add('dark');
          setTheme('dark');
        }
      };

    const handleProfileUpdate = () => {
        setFirstName(currentFirstName);
        setLastName(currentLastName);
        setAvatar(currentAvatar);
        setBanner(currentBanner);
        toast({
            title: 'Profile Updated',
            description: 'Your profile information has been successfully updated.',
        });
    }

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCurrentAvatar(URL.createObjectURL(e.target.files[0]));
        }
    }

    const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCurrentBanner(URL.createObjectURL(e.target.files[0]));
        }
    }

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
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>Update your personal information, profile picture and banner.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="space-y-4">
                <Label>Banner Image</Label>
                <div className="relative group aspect-[16/5] w-full rounded-lg bg-muted overflow-hidden">
                    <Image 
                        src={currentBanner}
                        alt="Profile banner"
                        fill
                        className="object-cover"
                    />
                    <Label htmlFor="banner-file" className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                        <Camera className="h-8 w-8 text-white" />
                        <span className="sr-only">Change Banner</span>
                    </Label>
                    <Input id="banner-file" type="file" className="sr-only" onChange={handleBannerChange} accept="image/*" />
                </div>
            </div>

            <div className="flex flex-col items-start gap-6 md:flex-row">
              <div className="relative group">
                <Avatar className="h-32 w-32 border-4 border-background ring-4 ring-primary">
                  <AvatarImage src={currentAvatar} alt="User Avatar" />
                  <AvatarFallback>{currentFirstName.charAt(0)}{currentLastName.charAt(0)}</AvatarFallback>
                </Avatar>
                <Label htmlFor="avatar-file" className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <Camera className="h-8 w-8 text-white" />
                    <span className="sr-only">Change Avatar</span>
                </Label>
                <Input id="avatar-file" type="file" className="sr-only" onChange={handleAvatarChange} accept="image/*" />
              </div>
              <div className="flex-1 w-full space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" value={currentFirstName} onChange={(e) => setCurrentFirstName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" value={currentLastName} onChange={(e) => setCurrentLastName(e.target.value)} />
                    </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="user@melodif.com" disabled />
                     <p className="text-xs text-muted-foreground">You can't change your email address.</p>
                </div>
              </div>
            </div>

            <Separator />
            
            <div className="flex justify-end">
                <Button onClick={handleProfileUpdate}>Update Profile</Button>
            </div>
        </CardContent>
      </Card>

      <Accordion type="multiple" defaultValue={['account']} className="w-full space-y-4">
        <AccordionItem value="account" className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <AccordionTrigger className="px-6 py-4 data-[state=closed]:rounded-lg">
                <div className="flex items-center gap-4">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    <div>
                        <h3 className="font-semibold">Account</h3>
                        <p className="text-sm text-muted-foreground">Manage password and account actions.</p>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-6">
                 <Separator />
                <div className="space-y-4">
                    <Label>Change Password</Label>
                    <Input id="current-password" type="password" placeholder="Current Password" />
                    <Input id="new-password" type="password" placeholder="New Password" />
                     <Button variant="outline">Update Password</Button>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-destructive/50 p-4">
                    <div>
                        <h4 className="font-semibold text-destructive">Delete Account</h4>
                        <p className="text-sm text-destructive/80">Permanently delete your account and all your data. This action is irreversible.</p>
                    </div>
                     <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete Account
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                </div>
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="theme" className="rounded-lg border bg-card text-card-foreground shadow-sm">
             <AccordionTrigger className="px-6 py-4 data-[state=closed]:rounded-lg">
                <div className="flex items-center gap-4">
                    <Palette className="h-6 w-6 text-primary" />
                    <div>
                        <h3 className="font-semibold">Appearance</h3>
                        <p className="text-sm text-muted-foreground">Customize the look and feel of the app.</p>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-6">
                <Separator />
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                        <p className="text-sm text-muted-foreground">Enable or disable dark mode.</p>
                    </div>
                    <Switch
                        id="dark-mode"
                        checked={theme === 'dark'}
                        onCheckedChange={toggleTheme}
                    />
                </div>
            </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="notifications" className="rounded-lg border bg-card text-card-foreground shadow-sm">
             <AccordionTrigger className="px-6 py-4 data-[state=closed]:rounded-lg">
                <div className="flex items-center gap-4">
                    <Bell className="h-6 w-6 text-primary" />
                    <div>
                        <h3 className="font-semibold">Notifications</h3>
                        <p className="text-sm text-muted-foreground">Choose what you want to be notified about.</p>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-6">
                 <Separator />
                 <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="release-emails">New Release Emails</Label>
                        <p className="text-sm text-muted-foreground">Get notified when artists you follow release new music.</p>
                    </div>
                    <Switch id="release-emails" />
                </div>
                 <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="playlist-updates">Playlist Update Emails</Label>
                        <p className="text-sm text-muted-foreground">Get notified about changes to playlists you follow.</p>
                    </div>
                    <Switch id="playlist-updates" defaultChecked/>
                </div>
            </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="playback" className="rounded-lg border bg-card text-card-foreground shadow-sm">
             <AccordionTrigger className="px-6 py-4 data-[state=closed]:rounded-lg">
                <div className="flex items-center gap-4">
                    <Music className="h-6 w-6 text-primary" />
                    <div>
                        <h3 className="font-semibold">Playback</h3>
                        <p className="text-sm text-muted-foreground">Customize your listening experience.</p>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 space-y-6">
                <Separator />
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                        <Label htmlFor="autoplay">Autoplay</Label>
                        <p className="text-sm text-muted-foreground">Autoplay similar songs when your music ends.</p>
                    </div>
                    <Switch id="autoplay" defaultChecked />
                </div>
                <div className="space-y-2 rounded-lg border p-4">
                    <Label>Audio Quality</Label>
                     <Select defaultValue="normal">
                      <SelectTrigger>
                        <SelectValue placeholder="Select audio quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low (Saves data)</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="high">High (Best audio quality)</SelectItem>
                      </SelectContent>
                    </Select>
                </div>
            </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
