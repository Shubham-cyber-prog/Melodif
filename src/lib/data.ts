import type { Playlist, Song, RecentlyPlayed } from '@/lib/types';

export const songs: Song[] = [
  { id: 1, title: "Midnight Bloom", artist: "Aura", album: "Neon Dreams", duration: "3:45", artworkId: "artwork1", url: "#" },
  { id: 2, title: "Echoes in Rain", artist: "Aura", album: "Neon Dreams", duration: "4:12", artworkId: "artwork1", url: "#" },
  { id: 3, title: "City of Stars", artist: "Celestial", album: "Galaxies", duration: "2:58", artworkId: "artwork3", url: "#" },
  { id: 4, title: "Lost in the Sound", artist: "Nomad", album: "Wanderer", duration: "5:01", artworkId: "artwork2", url: "#" },
  { id: 5, title: "Vinyl Memories", artist: "Retrospect", album: "Golden Era", duration: "3:30", artworkId: "artwork4", url: "#" },
  { id: 6, title: "Sunset Drive", artist: "Horizon", album: "Chasing Light", duration: "4:20", artworkId: "artwork8", url: "#" },
  { id: 7, title: "First Light", artist: "Horizon", album: "Chasing Light", duration: "3:55", artworkId: "artwork8", url: "#" },
  { id: 8, title: "Forest Hymn", artist: "Nomad", album: "Wanderer", duration: "4:44", artworkId: "artwork9", url: "#" },
  { id: 9, title: "Neon Pulse", artist: "Aura", album: "Neon Dreams", duration: "3:10", artworkId: "artwork10", url: "#" },
  { id: 10, title: "Starlight", artist: "Celestial", album: "Galaxies", duration: "4:30", artworkId: "artwork3", url: "#" },
  { id: 11, title: "Ocean's Breath", artist: "Horizon", album: "Tidal", duration: "3:50", artworkId: "artwork8", url: "#" },
  { id: 12, title: "Digital Ghost", artist: "Aura", album: "Cyberia", duration: "4:05", artworkId: "artwork1", url: "#" },
  { id: 13, title: "Windswept", artist: "Nomad", album: "Journeys", duration: "4:15", artworkId: "artwork2", url: "#" },
  { id: 14, title: "Golden Hour", artist: "Retrospect", album: "Timeless", duration: "3:20", artworkId: "artwork4", url: "#" },
  { id: 15, title: "Nebula", artist: "Celestial", album: "Supernova", duration: "5:30", artworkId: "artwork7", url: "#" },
  { id: 16, title: "Afterglow", artist: "Aura", album: "Neon Dreams", duration: "4:00", artworkId: "artwork1", url: "#" },
  { id: 17, title: "River of Time", artist: "Nomad", album: "Wanderer", duration: "3:55", artworkId: "artwork9", url: "#" },
  { id: 18, title: "Faded Photograph", artist: "Retrospect", album: "Golden Era", duration: "2:50", artworkId: "artwork4", url: "#" },
  { id: 19, title: "Chasing Comets", artist: "Celestial", album: "Galaxies", duration: "4:10", artworkId: "artwork3", url: "#" },
  { id: 20, title: "Coastal Route", artist: "Horizon", album: "Chasing Light", duration: "3:48", artworkId: "artwork8", url: "#" },
  { id: 21, title: "Nightfall", artist: "Etherea", album: "Dreamscapes", duration: "4:22", artworkId: "artwork3", url: "#" },
  { id: 22, title: "Summer Haze", artist: "Solstice", album: "Sun-kissed", duration: "3:15", artworkId: "artwork6", url: "#" },
  { id: 23, title: "Forgotten Keys", artist: "Chrono", album: "Timekeeper", duration: "3:33", artworkId: "artwork4", url: "#" },
  { id: 24, title: "Crystal Caves", artist: "Geode", album: "Elements", duration: "5:10", artworkId: "artwork7", url: "#" },
  { id: 25, title: "Lunar Tides", artist: "Celeste", album: "Moonlit", duration: "4:02", artworkId: "artwork3", url: "#" },
  { id: 26, title: "Mirage", artist: "Oasis", album: "Desert Soul", duration: "3:58", artworkId: "artwork2", url: "#" },
  { id: 27, title: "Electric Sheep", artist: "Andro", album: "Futures", duration: "3:49", artworkId: "artwork10", url: "#" },
  { id: 28, title: "Silent City", artist: "Metropolis", album: "Urban Legends", duration: "4:30", artworkId: "artwork5", url: "#" },
  { id: 29, title: "Morning Mist", artist: "Veridia", album: "Verdant", duration: "3:55", artworkId: "artwork9", url: "#" },
  { id: 30, title: "Aurora", artist: " Borealis", album: "Northern Lights", duration: "4:50", artworkId: "artwork1", url: "#" },
];

export const playlists: Playlist[] = [
  {
    id: "playlist-1",
    name: "Late Night Focus",
    description: "Chill beats to help you concentrate and study.",
    coverArtId: "artwork5",
    songs: songs.filter(s => [1, 2, 9, 3, 12, 16, 28]),
  },
  {
    id: "playlist-2",
    name: "Road Trip Anthems",
    description: "Soundtrack for your next adventure.",
    coverArtId: "artwork6",
    songs: songs.filter(s => [4, 6, 7, 20, 22, 26]),
  },
  {
    id: "playlist-3",
    name: "Retro Rewind",
    description: "Nostalgic tunes from the golden era.",
    coverArtId: "artwork4",
    songs: songs.filter(s => [5, 14, 18, 23]),
  },
  {
    id: "playlist-4",
    name: "Cosmic Journey",
    description: "Explore the universe with these ethereal tracks.",
    coverArtId: "artwork7",
    songs: songs.filter(s => [3, 10, 15, 19, 21, 24, 25, 30]),
  },
  {
    id: "playlist-5",
    name: "Nature Walk",
    description: "Peaceful tracks for a walk in the woods.",
    coverArtId: "artwork9",
    songs: songs.filter(s => [8, 13, 17, 29]),
  },
];

export const madeForYouPlaylists: Playlist[] = [
  {
    id: 'm-1',
    name: 'Discover Weekly',
    description: 'Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you.',
    coverArtId: 'artwork1',
    songs: songs.filter(s => [1, 4, 7, 11, 23, 28])
  },
  {
    id: 'm-2',
    name: 'Daily Mix 1',
    description: 'A mix of your recent favorites and similar vibes.',
    coverArtId: 'artwork2',
    songs: songs.filter(s => [2, 5, 8, 13, 18, 29])
  },
  {
    id: 'm-3',
    name: 'Daily Mix 2',
    description: 'Upbeat and energetic tracks to power your day.',
    coverArtId: 'artwork3',
    songs: songs.filter(s => [3, 6, 9, 12, 21, 27])
  },
  {
    id: 'm-4',
    name: 'Release Radar',
    description: 'Catch all the latest music from artists you follow, plus new singles picked for you.',
    coverArtId: 'artwork10',
    songs: songs.filter(s => [10, 4, 1, 15, 25, 30])
  },
    {
    id: 'm-5',
    name: 'Chill Mix',
    description: 'Kick back with a personalized mix of slow-burners and relaxing tracks.',
    coverArtId: 'artwork9',
    songs: songs.filter(s => [8, 5, 2, 17, 29, 11])
  },
    {
    id: 'm-6',
    name: 'Workout Mix',
    description: 'Energy-boosting music to get you through your workout.',
    coverArtId: 'artwork6',
    songs: songs.filter(s => [9, 6, 3, 22, 26, 27])
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
