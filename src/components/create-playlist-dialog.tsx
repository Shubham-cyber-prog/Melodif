'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { generatePlaylistDescription } from '@/ai/flows/generate-playlist-description';

const formSchema = z.object({
  playlistName: z.string().min(3, 'Playlist name must be at least 3 characters.'),
  musicGenres: z.string().min(3, 'Please enter at least one genre.'),
  artistNames: z.string().min(2, 'Please enter at least one artist.'),
  description: z.string().optional(),
});

type PlaylistFormValues = z.infer<typeof formSchema>;

export function CreatePlaylistDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const form = useForm<PlaylistFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      playlistName: '',
      musicGenres: '',
      artistNames: '',
      description: '',
    },
  });

  const handleGenerateDescription = async () => {
    const { playlistName, musicGenres, artistNames } = form.getValues();
    if (!playlistName || !musicGenres || !artistNames) {
      toast({
        title: 'Missing Information',
        description: 'Please fill out Playlist Name, Genres, and Artists to generate a description.',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generatePlaylistDescription({ playlistName, musicGenres, artistNames });
      form.setValue('description', result.description);
    } catch (error) {
      toast({
        title: 'Error Generating Description',
        description: 'Could not generate a description at this time. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const onSubmit = (data: PlaylistFormValues) => {
    console.log(data); // In a real app, you would save this data
    toast({
      title: 'Playlist Created!',
      description: `Your new playlist "${data.playlistName}" is ready.`,
    });
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a New Playlist</DialogTitle>
          <DialogDescription>
            Fill in the details below. You can also use our AI to generate a description for you.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="playlistName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Playlist Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Morning Coffee Acoustics" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="musicGenres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Music Genres</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Acoustic, Folk, Indie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="artistNames"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Artists</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Bon Iver, Novo Amor" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Textarea placeholder="A perfect mix for..." {...field} />
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="absolute bottom-2 right-2"
                        onClick={handleGenerateDescription}
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Wand2 className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Create Playlist</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
