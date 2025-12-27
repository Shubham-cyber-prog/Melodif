export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  artworkId: string;
  url: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  coverArtId: string;
  songs: Song[];
  type?: 'playlist';
}

export interface Album {
  id: string;
  name: string;
  artist: string;
  coverArtId: string;
  songs: Song[];
  type: 'album';
}

export interface Artist {
    id: string;
    name: string;
    description: string;
    coverArtId: string;
    type: 'artist';
}

export interface RecentlyPlayed {
    id: string;
    name: string;
    description?: string;
    artist?: string;
    coverArtId: string;
    type: 'song' | 'playlist' | 'album' | 'artist';
}
