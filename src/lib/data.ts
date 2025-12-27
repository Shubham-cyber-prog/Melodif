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
];

export const playlists: Playlist[] = [
  {
    id: "playlist-1",
    name: "Late Night Focus",
    description: "Chill beats to help you concentrate and study.",
    coverArtId: "artwork5",
    songs: songs.filter(s => [1, 2, 9, 3]),
  },
  {
    id: "playlist-2",
    name: "Road Trip Anthems",
    description: "Soundtrack for your next adventure.",
    coverArtId: "artwork6",
    songs: songs.filter(s => [4, 6, 7]),
  },
  {
    id: "playlist-3",
    name: "Retro Rewind",
    description: "Nostalgic tunes from the golden era.",
    coverArtId: "artwork4",
    songs: songs.filter(s => [5]),
  },
  {
    id: "playlist-4",
    name: "Cosmic Journey",
    description: "Explore the universe with these ethereal tracks.",
    coverArtId: "artwork7",
    songs: songs.filter(s => [3, 10]),
  },
];

export const madeForYouPlaylists: Playlist[] = [
  {
    id: 'm-1',
    name: 'Discover Weekly',
    description: 'Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you.',
    coverArtId: 'artwork1',
    songs: songs.filter(s => [1, 4, 7])
  },
  {
    id: 'm-2',
    name: 'Daily Mix 1',
    description: 'A mix of your recent favorites and similar vibes.',
    coverArtId: 'artwork2',
    songs: songs.filter(s => [2, 5, 8])
  },
  {
    id: 'm-3',
    name: 'Daily Mix 2',
    description: 'Upbeat and energetic tracks to power your day.',
    coverArtId: 'artwork3',
    songs: songs.filter(s => [3, 6, 9])
  },
  {
    id: 'm-4',
    name: 'Release Radar',
    description: 'Catch all the latest music from artists you follow, plus new singles picked for you.',
    coverArtId: 'artwork10',
    songs: songs.filter(s => [10, 4, 1])
  },
    {
    id: 'm-5',
    name: 'Chill Mix',
    description: 'Kick back with a personalized mix of slow-burners and relaxing tracks.',
    coverArtId: 'artwork9',
    songs: songs.filter(s => [8, 5, 2])
  },
    {
    id: 'm-6',
    name: 'Workout Mix',
    description: 'Energy-boosting music to get you through your workout.',
    coverArtId: 'artwork6',
    songs: songs.filter(s => [9, 6, 3])
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
