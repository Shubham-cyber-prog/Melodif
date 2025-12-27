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
}
