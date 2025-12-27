
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { UploadCloud } from 'lucide-react';

const uploadSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  artist: z.string().min(2, { message: 'Artist name must be at least 2 characters.' }),
  album: z.string().optional(),
  genre: z.string().optional(),
  audioFile: z.any().refine((files) => files?.length == 1, 'Audio file is required.'),
  artworkFile: z.any().optional(),
});

export default function UploadPage() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof uploadSchema>>({
        resolver: zodResolver(uploadSchema),
        defaultValues: {
            title: '',
            artist: '',
            album: '',
            genre: '',
        }
    });

    function onSubmit(values: z.infer<typeof uploadSchema>) {
        console.log(values);
        toast({
            title: "Upload Successful!",
            description: `"${values.title}" by ${values.artist} has been submitted.`,
        });
        form.reset();
    }

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Upload Music
        </h1>
        <p className="text-lg text-muted-foreground">
          Share your sound with the world. Host your music on Melodif.
        </p>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Track Information</CardTitle>
            <CardDescription>Fill out the details for the music you want to upload.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Song Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Electric Dreams" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="artist"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Artist Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your artist or band name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="album"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Album (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name of the album" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genre (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Synthwave" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="audioFile"
                        render={({ field: { onChange, ...props } }) => (
                            <FormItem>
                                <FormLabel>Audio File</FormLabel>
                                <FormControl>
                                    <Input type="file" accept="audio/*" {...props} onChange={e => onChange(e.target.files)} />
                                </FormControl>
                                <FormDescription>Upload your track in MP3, WAV, or FLAC format.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="artworkFile"
                        render={({ field: { onChange, ...props } }) => (
                            <FormItem>
                                <FormLabel>Album Artwork (Optional)</FormLabel>
                                <FormControl>
                                    <Input type="file" accept="image/*" {...props} onChange={e => onChange(e.target.files)} />
                                </FormControl>
                                <FormDescription>Upload cover art for your track.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">
                        <UploadCloud className="mr-2 h-4 w-4" />
                        Upload Track
                    </Button>
                </form>
            </Form>
        </CardContent>
      </Card>
    </div>
  );
}
