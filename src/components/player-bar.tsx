'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Shuffle,
  Repeat,
} from 'lucide-react';
import { songs } from '@/lib/data';
import { getArtworkById } from '@/lib/data';

export function PlayerBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(75);

  const currentSong = songs[0];
  const artworkUrl = getArtworkById(currentSong.artworkId);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 h-24 border-t bg-background/95 backdrop-blur-sm">
      <div className="grid h-full grid-cols-3 items-center px-4 md:px-8">
        {/* Song Info */}
        <div className="flex items-center gap-3">
          {artworkUrl && (
            <div className="relative h-14 w-14 flex-shrink-0">
              <Image
                src={artworkUrl}
                alt={currentSong.album}
                width={56}
                height={56}
                className="rounded-md object-cover"
                data-ai-hint="album cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold">{currentSong.title}</p>
            <p className="text-sm text-muted-foreground">{currentSong.artist}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SkipBack />
            </Button>
            <Button
              size="icon"
              className="h-10 w-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause /> : <Play className="fill-current" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SkipForward />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex w-full max-w-sm items-center gap-2 text-xs">
            <span>1:20</span>
            <Slider
              value={[progress]}
              onValueChange={(value) => setProgress(value[0])}
              max={100}
              step={1}
              className="w-full"
            />
            <span>{currentSong.duration}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-5 w-5" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="w-24"
            disabled={isMuted}
          />
        </div>
      </div>
    </div>
  );
}
