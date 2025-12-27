import type { Playlist, Song, RecentlyPlayed } from '@/lib/types';

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
];

export const playlists: Playlist[] = [
  {
    id: "playlist-1",
    name: "Late Night Focus",
    description: "Chill beats to help you concentrate and study.",
    coverArtId: "artwork5",
    songs: songs.filter(s => [1, 2, 9, 3, 12, 16, 28, 32, 36]),
  },
  {
    id: "playlist-2",
    name: "Road Trip Anthems",
    description: "Soundtrack for your next adventure.",
    coverArtId: "artwork6",
    songs: songs.filter(s => [4, 6, 7, 20, 22, 26, 31]),
  },
  {
    id: "playlist-3",
    name: "Retro Rewind",
    description: "Nostalgic tunes from the golden era.",
    coverArtId: "artwork4",
    songs: songs.filter(s => [5, 14, 18, 23, 37]),
  },
  {
    id: "playlist-4",
    name: "Cosmic Journey",
    description: "Explore the universe with these ethereal tracks.",
    coverArtId: "artwork7",
    songs: songs.filter(s => [3, 10, 15, 19, 21, 24, 25, 30, 34]),
  },
  {
    id: "playlist-5",
    name: "Nature Walk",
    description: "Peaceful tracks for a walk in the woods.",
    coverArtId: "artwork9",
    songs: songs.filter(s => [8, 13, 17, 29, 40]),
  },
  {
    id: "playlist-6",
    name: "Synthwave Dreams",
    description: "Retro-futuristic soundscapes.",
    coverArtId: "artwork10",
    songs: songs.filter(s => [1, 9, 12, 27, 39]),
  },
  {
    id: "playlist-7",
    name: "Acoustic Afternoon",
    description: "Unplugged and relaxed.",
    coverArtId: "artwork2",
    songs: songs.filter(s => [4, 8, 13, 17, 33, 35]),
  },
  {
    id: "playlist-8",
    name: "Ocean Breeze",
    description: "Calm and soothing ocean vibes.",
    coverArtId: "artwork8",
    songs: songs.filter(s => [6, 11, 20, 38]),
  },
  {
    id: "yt-1",
    name: "YouTube Imports",
    description: "Your favorite tracks from YouTube.",
    coverArtId: "artwork12",
    songs: songs.slice(0, 8),
  },
  {
    id: "yt-2",
    name: 'Gaming Mix',
    description: 'High-energy tracks for gaming.',
    coverArtId: 'artwork12',
    songs: songs.filter(s => [9, 27, 12, 39]),
  },
  {
    id: 'sp-1',
    name: 'Spotify Imports',
    description: 'Your playlists from Spotify.',
    coverArtId: 'artwork13',
    songs: songs.slice(10, 18),
  },
  {
    id: 'sp-2',
    name: 'Indie Vibes',
    description: 'The best of indie rock and pop.',
    coverArtId: 'artwork14',
    songs: songs.filter(s => [4, 13, 17]),
  }
];

export const madeForYouPlaylists: Playlist[] = [
  {
    id: 'm-1',
    name: 'Discover Weekly',
    description: 'Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you.',
    coverArtId: 'artwork1',
    songs: songs.filter(s => [1, 4, 7, 11, 23, 28, 35])
  },
  {
    id: 'm-2',
    name: 'Daily Mix 1',
    description: 'A mix of your recent favorites and similar vibes.',
    coverArtId: 'artwork2',
    songs: songs.filter(s => [2, 5, 8, 13, 18, 29, 33])
  },
  {
    id: 'm-3',
    name: 'Daily Mix 2',
    description: 'Upbeat and energetic tracks to power your day.',
    coverArtId: 'artwork3',
    songs: songs.filter(s => [3, 6, 9, 12, 21, 27, 36])
  },
  {
    id: 'm-4',
    name: 'Release Radar',
    description: 'Catch all the latest music from artists you follow, plus new singles picked for you.',
    coverArtId: 'artwork10',
    songs: songs.filter(s => [10, 4, 1, 15, 25, 30, 39])
  },
    {
    id: 'm-5',
    name: 'Chill Mix',
    description: 'Kick back with a personalized mix of slow-burners and relaxing tracks.',
    coverArtId: 'artwork9',
    songs: songs.filter(s => [8, 5, 2, 17, 29, 11, 40])
  },
    {
    id: 'm-6',
    name: 'Workout Mix',
    description: 'Energy-boosting music to get you through your workout.',
    coverArtId: 'artwork6',
    songs: songs.filter(s => [9, 6, 3, 22, 26, 27, 31])
  }
];

export const recentlyPlayed: RecentlyPlayed[] = [
    { id: 'song-1', name: 'Midnight Bloom', artist: 'Aura', coverArtId: 'artwork1', type: 'song' },
    { id: 'playlist-2', name: 'Road Trip Anthems', artist: 'Soundtrack for your next adventure.', coverArtId: 'artwork6', type: 'playlist' },
    { id: 'song-5', name: 'Vinyl Memories', artist: 'Retrospect', coverArtId: 'artwork4', type: 'song' },
    { id: 'album-3', name: 'Galaxies', artist: 'Celestial', coverArtId: 'artwork3', type: 'album' },
    { id: 'artist-4', name: 'Nomad', artist: 'Artist', coverArtId: 'artwork9', type: 'artist' },
    { id: 'm-5', name: 'Chill Mix', artist: 'Kick back with a personalized mix of slow-burners and relaxing tracks.', coverArtId: 'artwork9', type: 'playlist' },
]


export const getPlaylistById = (id: string) => {
    return [...playlists, ...madeForYouPlaylists].find(p => p.id === id);
}

export const getSongById = (id: number) => {
    return songs.find(s => s.id === id);
}

    