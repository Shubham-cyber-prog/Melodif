
'use client';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Trash2, Bell, LogOut, ShieldCheck } from 'lucide-react';
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

export default function SettingsPage() {
    const { toast } = useToast();
    const [firstName, setFirstName] = useState('Melodif');
    const [lastName, setLastName] = useState('User');

    const handleProfileUpdate = () => {
        // In a real app, you would send this data to your backend
        console.log('Updating profile:', { firstName, lastName });
        toast({
            title: 'Profile Updated',
            description: 'Your profile information has been successfully updated.',
        });
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
                    <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="user@melodif.com" disabled />
                 <p className="text-xs text-muted-foreground">You can't change your email address.</p>
            </div>
            <Button onClick={handleProfileUpdate}>Update Profile</Button>
        </CardContent>
      </Card>

      <Accordion type="multiple" defaultValue={['account']} className="w-full space-y-4">
        <AccordionItem value="account" className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <AccordionTrigger className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    <div>
                        <h3 className="font-semibold">Account Settings</h3>
                        <p className="text-sm text-muted-foreground">Manage password and account actions.</p>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="current-password">Change Password</Label>
                    <Input id="current-password" type="password" placeholder="Current Password" />
                    <Input id="new-password" type="password" placeholder="New Password" className="mt-2" />
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
             <AccordionTrigger className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-primary" />
                    <div>
                        <h3 className="font-semibold">Notifications</h3>
                        <p className="text-sm text-muted-foreground">Choose what you want to be notified about.</p>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                        <p className="text-sm text-muted-foreground">Enable or disable dark mode.</p>
                    </div>
                    <Switch id="dark-mode" />
                </div>
                 <div className="flex items-center justify-between">
                    <div>
                        <Label htmlFor="release-emails">New Release Emails</Label>
                        <p className="text-sm text-muted-foreground">Get notified when artists you follow release new music.</p>
                    </div>
                    <Switch id="release-emails" />
                </div>
                 <div className="flex items-center justify-between">
                    <div>
                        <Label htmlFor="playlist-updates">Playlist Update Emails</Label>
                        <p className="text-sm text-muted-foreground">Get notified about changes to playlists you follow.</p>
                    </div>
                    <Switch id="playlist-updates" defaultChecked/>
                </div>
            </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="playback" className="rounded-lg border bg-card text-card-foreground shadow-sm">
             <AccordionTrigger className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1Zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9Z"/><path d="M15.91 10.34a2.007 2.007 0 0 0-2.82 0l-3 2.99a2.007 2.007 0 0 0 0 2.82l.7.71a2 2 0 0 0 2.82 0l3-3a2 2 0 0 0 0-2.82Z"/></svg>
                    <div>
                        <h3 className="font-semibold">Playback</h3>
                        <p className="text-sm text-muted-foreground">Customize your listening experience.</p>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <Label htmlFor="autoplay">Autoplay</Label>
                        <p className="text-sm text-muted-foreground">Autoplay similar songs when your music ends.</p>
                    </div>
                    <Switch id="autoplay" defaultChecked />
                </div>
                <div className="space-y-2">
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
