import type { Playlist, Song, RecentlyPlayed, Album, Artist } from '@/lib/types';

export const songs: Song[] = [
  { id: 1, title: "Midnight Bloom", artist: "Aura", album: "Neon Dreams", duration: "3:45", artworkId: "artwork1", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 2, title: "Echoes in Rain", artist: "Aura", album: "Neon Dreams", duration: "4:12", artworkId: "artwork1", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 3, title: "City of Stars", artist: "Celestial", album: "Galaxies", duration: "2:58", artworkId: "artwork3", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 4, title: "Lost in the Sound", artist: "Nomad", album: "Wanderer", duration: "5:01", artworkId: "artwork2", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 5, title: "Vinyl Memories", artist: "Retrospect", album: "Golden Era", duration: "3:30", artworkId: "artwork4", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 6, title: "Sunset Drive", artist: "Horizon", album: "Chasing Light", duration: "4:20", artworkId: "artwork8", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 7, title: "First Light", artist: "Horizon", album: "Chasing Light", duration: "3:55", artworkId: "artwork8", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 8, title: "Forest Hymn", artist: "Nomad", album: "Wanderer", duration: "4:44", artworkId: "artwork9", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 9, title: "Neon Pulse", artist: "Aura", album: "Neon Dreams", duration: "3:10", artworkId: "artwork10", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 10, title: "Starlight", artist: "Celestial", album: "Galaxies", duration: "4:30", artworkId: "artwork3", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 11, title: "Ocean's Breath", artist: "Horizon", album: "Tidal", duration: "3:50", artworkId: "artwork8", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 12, title: "Digital Ghost", artist: "Aura", album: "Cyberia", duration: "4:05", artworkId: "artwork1", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 13, title: "Windswept", artist: "Nomad", album: "Journeys", duration: "4:15", artworkId: "artwork2", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 14, title: "Golden Hour", artist: "Retrospect", album: "Timeless", duration: "3:20", artworkId: "artwork4", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 15, title: "Nebula", artist: "Celestial", album: "Supernova", duration: "5:30", artworkId: "artwork7", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 16, title: "Afterglow", artist: "Aura", album: "Neon Dreams", duration: "4:00", artworkId: "artwork1", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 17, title: "River of Time", artist: "Nomad", album: "Wanderer", duration: "3:55", artworkId: "artwork9", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 18, title: "Faded Photograph", artist: "Retrospect", album: "Golden Era", duration: "2:50", artworkId: "artwork4", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 19, title: "Chasing Comets", artist: "Celestial", album: "Galaxies", duration: "4:10", artworkId: "artwork3", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 20, title: "Coastal Route", artist: "Horizon", album: "Chasing Light", duration: "3:48", artworkId: "artwork8", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 21, title: "Nightfall", artist: "Etherea", album: "Dreamscapes", duration: "4:22", artworkId: "artwork3", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 22, title: "Summer Haze", artist: "Solstice", album: "Sun-kissed", duration: "3:15", artworkId: "artwork6", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 23, title: "Forgotten Keys", artist: "Chrono", album: "Timekeeper", duration: "3:33", artworkId: "artwork4", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 24, title: "Crystal Caves", artist: "Geode", album: "Elements", duration: "5:10", artworkId: "artwork7", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 25, title: "Lunar Tides", artist: "Celeste", album: "Moonlit", duration: "4:02", artworkId: "artwork3", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 26, title: "Mirage", artist: "Oasis", album: "Desert Soul", duration: "3:58", artworkId: "artwork2", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 27, title: "Electric Sheep", artist: "Andro", album: "Futures", duration: "3:49", artworkId: "artwork10", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 28, title: "Silent City", artist: "Metropolis", album: "Urban Legends", duration: "4:30", artworkId: "artwork5", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 29, title: "Morning Mist", artist: "Veridia", album: "Verdant", duration: "3:55", artworkId: "artwork9", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 30, title: "Aurora", artist: " Borealis", album: "Northern Lights", duration: "4:50", artworkId: "artwork1", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 31, title: "Solar Flare", artist: "Sunbeam", album: "Ecliptic", duration: "3:21", artworkId: "artwork6", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 32, title: "Rainy Day", artist: "Petrichor", album: "Droplets", duration: "2:55", artworkId: "artwork5", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 33, title: "Lost Temple", artist: "Explorer", album: "Ancient", duration: "4:18", artworkId: "artwork2", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 34, title: "Quantum", artist: "Vertex", album: "Singularity", duration: "5:05", artworkId: "artwork7", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 35, title: "Paper Dreams", artist: "Origami", album: "Folds", duration: "3:10", artworkId: "artwork1", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 36, title: "Velvet Night", artist: "Nyx", album: "Shadows", duration: "4:00", artworkId: "artwork3", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 37, title: "Clockwork", artist: "Tock", album: "Mechanisms", duration: "3:45", artworkId: "artwork4", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 38, title: "Halcyon", artist: "Calm", album: "Serenity", duration: "4:30", artworkId: "artwork8", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 39, title: "Glitch", artist: "Static", album: "Corrupt", duration: "1:58", artworkId: "artwork10", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 40, title: "Pathfinder", artist: "Trail", album: "Maps", duration: "3:52", artworkId: "artwork9", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  // Indian Songs
  { id: 41, title: "Tum Hi Ho", artist: "Arijit Singh", album: "Aashiqui 2", duration: "4:22", artworkId: "artwork-indian-1", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 42, title: "Chaiyya Chaiyya", artist: "Sukhwinder Singh, Sapna Awasthi", album: "Dil Se..", duration: "6:54", artworkId: "artwork-indian-2", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 43, title: "Kal Ho Naa Ho", artist: "Sonu Nigam", album: "Kal Ho Naa Ho", duration: "5:21", artworkId: "artwork-indian-3", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 44, title: "Jai Ho", artist: "A. R. Rahman, Sukhwinder Singh", album: "Slumdog Millionaire", duration: "5:19", artworkId: "artwork-indian-4", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 45, title: "Ghungroo", artist: "Arijit Singh, Shilpa Rao", album: "War", duration: "5:02", artworkId: "artwork-indian-5", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 46, title: "Maa Tujhe Salaam", artist: "A. R. Rahman", album: "Vande Mataram", duration: "4:15", artworkId: "artwork-indian-6", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 47, title: "Apna Time Aayega", artist: "Ranveer Singh, DIVINE", album: "Gully Boy", duration: "2:20", artworkId: "artwork-indian-7", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 48, title: "Kesariya", artist: "Arijit Singh", album: "Brahmastra", duration: "4:28", artworkId: "artwork-indian-8", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 49, title: "Tere Bina", artist: "A. R. Rahman, Chinmayi", album: "Guru", duration: "5:09", artworkId: "artwork-indian-1", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
  { id: 50, title: "Raabta", artist: "Arijit Singh", album: "Agent Vinod", duration: "4:03", artworkId: "artwork-indian-5", url: "https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" },
];

export const playlists: Playlist[] = [
  {
    id: "playlist-1",
    name: "Late Night Focus",
    description: "Chill beats to help you concentrate and study.",
    coverArtId: "artwork5",
    songs: songs.filter(s => [1, 2, 9, 3, 12, 16, 28, 32, 36]),
    type: 'playlist'
  },
  {
    id: "playlist-2",
    name: "Road Trip Anthems",
    description: "Soundtrack for your next adventure.",
    coverArtId: "artwork6",
    songs: songs.filter(s => [4, 6, 7, 20, 22, 26, 31]),
    type: 'playlist'
  },
  {
    id: "playlist-3",
    name: "Retro Rewind",
    description: "Nostalgic tunes from the golden era.",
    coverArtId: "artwork4",
    songs: songs.filter(s => [5, 14, 18, 23, 37]),
    type: 'playlist'
  },
  {
    id: "playlist-4",
    name: "Cosmic Journey",
    description: "Explore the universe with these ethereal tracks.",
    coverArtId: "artwork7",
    songs: songs.filter(s => [3, 10, 15, 19, 21, 24, 25, 30, 34]),
    type: 'playlist'
  },
  {
    id: "playlist-5",
    name: "Nature Walk",
    description: "Peaceful tracks for a walk in the woods.",
    coverArtId: "artwork9",
    songs: songs.filter(s => [8, 13, 17, 29, 40]),
    type: 'playlist'
  },
  {
    id: "playlist-6",
    name: "Synthwave Dreams",
    description: "Retro-futuristic soundscapes.",
    coverArtId: "artwork10",
    songs: songs.filter(s => [1, 9, 12, 27, 39]),
    type: 'playlist'
  },
  {
    id: "playlist-7",
    name: "Acoustic Afternoon",
    description: "Unplugged and relaxed.",
    coverArtId: "artwork2",
    songs: songs.filter(s => [4, 8, 13, 17, 33, 35]),
    type: 'playlist'
  },
  {
    id: "playlist-8",
    name: "Ocean Breeze",
    description: "Calm and soothing ocean vibes.",
    coverArtId: "artwork8",
    songs: songs.filter(s => [6, 11, 20, 38]),
    type: 'playlist'
  },
  {
    id: "yt-1",
    name: "YouTube Imports",
    description: "Your favorite tracks from YouTube.",
    coverArtId: "artwork12",
    songs: songs.slice(0, 8),
    type: 'playlist'
  },
  {
    id: "yt-2",
    name: 'Gaming Mix',
    description: 'High-energy tracks for gaming.',
    coverArtId: 'artwork12',
    songs: songs.filter(s => [9, 27, 12, 39]),
    type: 'playlist'
  },
  {
    id: 'sp-1',
    name: 'Spotify Imports',
    description: 'Your playlists from Spotify.',
    coverArtId: 'artwork13',
    songs: songs.slice(10, 18),
    type: 'playlist'
  },
  {
    id: 'sp-2',
    name: 'Indie Vibes',
    description: 'The best of indie rock and pop.',
    coverArtId: 'artwork14',
    songs: songs.filter(s => [4, 13, 17]),
    type: 'playlist'
  },
  {
    id: 'indian-1',
    name: 'Bollywood Hits',
    description: 'The biggest songs from Bollywood.',
    coverArtId: 'artwork-indian-1',
    songs: songs.filter(s => [41, 42, 43, 44, 45, 46, 47, 48]),
    type: 'playlist'
  },
  {
    id: 'indian-2',
    name: 'Arijit Singh Essentials',
    description: 'The best of Arijit Singh.',
    coverArtId: 'artwork-indian-8',
    songs: songs.filter(s => [41, 45, 48, 50]),
    type: 'playlist'
  },
  {
    id: 'indian-3',
    name: '90s Bollywood Nostalgia',
    description: 'Relive the golden era of Indian music.',
    coverArtId: 'artwork-indian-2',
    songs: songs.filter(s => [42, 46, 49]),
    type: 'playlist'
  },
  {
    id: 'indian-4',
    name: 'Punjabi Party Hits',
    description: 'Get the party started with these bangers.',
    coverArtId: 'artwork-indian-7',
    songs: songs.filter(s => [47, 45]),
    type: 'playlist'
  }
];

export const madeForYouPlaylists: Playlist[] = [
  {
    id: 'm-1',
    name: 'Discover Weekly',
    description: 'Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you.',
    coverArtId: 'artwork1',
    songs: songs.filter(s => [1, 4, 7, 11, 23, 28, 35, 41]),
    type: 'playlist'
  },
  {
    id: 'm-2',
    name: 'Daily Mix 1',
    description: 'A mix of your recent favorites and similar vibes.',
    coverArtId: 'artwork2',
    songs: songs.filter(s => [2, 5, 8, 13, 18, 29, 33, 42]),
    type: 'playlist'
  },
  {
    id: 'm-3',
    name: 'Daily Mix 2',
    description: 'Upbeat and energetic tracks to power your day.',
    coverArtId: 'artwork3',
    songs: songs.filter(s => [3, 6, 9, 12, 21, 27, 36, 45]),
    type: 'playlist'
  },
  {
    id: 'm-4',
    name: 'Release Radar',
    description: 'Catch all the latest music from artists you follow, plus new singles picked for you.',
    coverArtId: 'artwork10',
    songs: songs.filter(s => [10, 4, 1, 15, 25, 30, 39, 44, 47]),
    type: 'playlist'
  },
    {
    id: 'm-5',
    name: 'Chill Mix',
    description: 'Kick back with a personalized mix of slow-burners and relaxing tracks.',
    coverArtId: 'artwork9',
    songs: songs.filter(s => [8, 5, 2, 17, 29, 11, 40, 43, 46]),
    type: 'playlist'
  },
    {
    id: 'm-6',
    name: 'Workout Mix',
    description: 'Energy-boosting music to get you through your workout.',
    coverArtId: 'artwork6',
    songs: songs.filter(s => [9, 6, 3, 22, 26, 27, 31, 48]),
    type: 'playlist'
  }
];

export const recentlyPlayed: RecentlyPlayed[] = [
    { id: '1', name: 'Midnight Bloom', artist: 'Aura', coverArtId: 'artwork1', type: 'song' },
    { id: 'playlist-2', name: 'Road Trip Anthems', description: 'Soundtrack for your next adventure.', coverArtId: 'artwork6', type: 'playlist' },
    { id: '5', name: 'Vinyl Memories', artist: 'Retrospect', coverArtId: 'artwork4', type: 'song' },
    { id: 'album-Galaxies', name: 'Galaxies', artist: 'Celestial', coverArtId: 'artwork3', type: 'album' },
    { id: 'artist-Nomad', name: 'Nomad', coverArtId: 'artwork9', type: 'artist' },
    { id: 'm-5', name: 'Chill Mix', description: 'Kick back with a personalized mix of slow-burners and relaxing tracks.', coverArtId: 'artwork9', type: 'playlist' },
    { id: 'indian-1', name: 'Bollywood Hits', description: 'The biggest songs from Bollywood.', coverArtId: 'artwork-indian-1', type: 'playlist' },
];


export const getPlaylistById = (id: string) => {
    return [...playlists, ...madeForYouPlaylists].find(p => p.id === id);
}

export const getSongById = (id: number) => {
    return songs.find(s => s.id === id);
}

export const getAlbums = (): Album[] => {
    const albumsMap = new Map<string, Album>();
    songs.forEach(song => {
        if (!albumsMap.has(song.album)) {
            albumsMap.set(song.album, {
                id: `album-${song.album.toLowerCase().replace(/ /g, '-')}`,
                name: song.album,
                artist: song.artist,
                coverArtId: song.artworkId,
                songs: [song],
                type: 'album'
            });
        } else {
            albumsMap.get(song.album)?.songs.push(song);
        }
    });
    return Array.from(albumsMap.values());
}

export const getArtists = (): Artist[] => {
    const artistsMap = new Map<string, {name: string, coverArtId: string}>();
    songs.forEach(song => {
        if (!artistsMap.has(song.artist)) {
            // Find the first album artwork for the artist. This is a simplification.
            const artistSong = songs.find(s => s.artist === song.artist);
            artistsMap.set(song.artist, {
                name: song.artist,
                coverArtId: artistSong?.artworkId || "artwork1", // Default artwork
            });
        }
    });
    return Array.from(artistsMap.values()).map(a => ({
        id: `artist-${a.name.toLowerCase().replace(/ /g, '-')}`,
        name: a.name,
        description: "Artist",
        coverArtId: a.coverArtId,
        type: 'artist'
    }));
}
