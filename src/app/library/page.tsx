'use client';
import { useState, useMemo } from 'react';
import { AlbumArtwork } from '@/components/album-artwork';
import { playlists, madeForYouPlaylists, getAlbums, getArtists } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ListMusic, Mic, Disc } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function LibraryPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('alphabetical');
    const [activeTab, setActiveTab] = useState('playlists');

    const allPlaylists = useMemo(() => {
        const combined = [...playlists, ...madeForYouPlaylists];
        let filtered = combined.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

        if (sortOrder === 'alphabetical') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === 'recent') {
            // This is a mock, in a real app you'd have a 'dateAdded' field
            filtered.reverse();
        }
        return filtered;
    }, [searchTerm, sortOrder]);
    
    const allAlbums = useMemo(() => {
        let filtered = getAlbums().filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()) || a.artist.toLowerCase().includes(searchTerm.toLowerCase()));
        if (sortOrder === 'alphabetical') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === 'recent') {
            filtered.reverse();
        }
        return filtered;
    }, [searchTerm, sortOrder]);

    const allArtists = useMemo(() => {
        let filtered = getArtists().filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
        if (sortOrder === 'alphabetical') {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOrder === 'recent') {
            filtered.reverse();
        }
        return filtered;
    }, [searchTerm, sortOrder]);

  return (
    <div className="space-y-8 animate-fade-in">
        <header>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Your Library
            </h1>
            <p className="text-lg text-muted-foreground">
            All your favorite music in one place.
            </p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <TabsList>
                    <TabsTrigger value="playlists">
                        <ListMusic className="mr-2 h-4 w-4" />
                        Playlists
                    </TabsTrigger>
                    <TabsTrigger value="albums">
                        <Disc className="mr-2 h-4 w-4" />
                        Albums
                    </TabsTrigger>
                    <TabsTrigger value="artists">
                         <Mic className="mr-2 h-4 w-4" />
                        Artists
                    </TabsTrigger>
                </TabsList>

                <div className="flex flex-1 items-center gap-2">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            placeholder="Search your library..."
                            className="h-10 w-full rounded-full bg-muted pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                     <Select value={sortOrder} onValueChange={setSortOrder}>
                        <SelectTrigger className="w-[180px] rounded-full">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="alphabetical">Alphabetical</SelectItem>
                            <SelectItem value="recent">Recently Added</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <TabsContent value="playlists" className="mt-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {allPlaylists.map((playlist) => (
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
            </TabsContent>
            <TabsContent value="albums" className="mt-6">
                 <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {allAlbums.map((album) => (
                        <AlbumArtwork
                            key={album.id}
                            item={{...album, description: album.artist}}
                            className="w-full"
                            aspectRatio="square"
                            width={250}
                            height={250}
                        />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="artists" className="mt-6">
                 <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {allArtists.map((artist) => (
                        <AlbumArtwork
                            key={artist.id}
                            item={artist}
                            className="w-full"
                            aspectRatio="square"
                            width={250}
                            height={250}
                        />
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    </div>
  );
}
