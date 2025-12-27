
'use client';
import { useState, useRef, useEffect } from 'react';
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
  Loader2,
  X,
} from 'lucide-react';
import { songs } from '@/lib/data';
import { getArtworkById } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export function PlayerBar() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = songs[0];
  const artwork = getArtworkById(currentSong.artworkId);
  const artworkUrl = artwork?.imageUrl;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.load();
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error("Playback error:", e));
        } else {
            audioRef.current.pause();
        }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
        setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (value: number[]) => {
    if (audioRef.current && duration > 0) {
        const newTime = (value[0] / 100) * duration;
        audioRef.current.currentTime = newTime;
        setProgress(value[0]);
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return isNaN(minutes) || isNaN(seconds) ? '0:00' : `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
  
  if (!hasMounted || !isVisible) {
    return null;
  }


  return (
    <div className={cn(
        "fixed bottom-24 left-0 right-0 z-20 h-24 border-t bg-background/95 backdrop-blur-sm md:bottom-0",
        !isVisible && "hidden"
      )}>
        <audio 
            ref={audioRef}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onWaiting={() => setIsLoading(true)}
            onPlaying={() => setIsLoading(false)}
            onCanPlay={() => setIsLoading(false)}
            preload="metadata"
        >
          <source src="https://storage.googleapis.com/studioprod-5a21a.appspot.com/assets/sample.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        
      <div className="grid h-full grid-cols-10 items-center px-4 md:px-8">
        {/* Song Info */}
        <div className="col-span-3 flex items-center gap-3">
          {artworkUrl && (
            <div className="relative h-14 w-14 flex-shrink-0">
              <Image
                src={artworkUrl}
                alt={currentSong.album}
                width={56}
                height={56}
                className="rounded-md object-cover"
                data-ai-hint={artwork?.imageHint || 'album cover'}
              />
            </div>
          )}
          <div>
            <p className="font-semibold">{currentSong.title}</p>
            <p className="text-sm text-muted-foreground">{currentSong.artist}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="col-span-4 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SkipBack />
            </Button>
            <Button
              size="icon"
              className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 hover:bg-primary/90"
              onClick={() => setIsPlaying(!isPlaying)}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6 fill-current" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SkipForward />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
           <div className="flex w-full max-w-xs items-center gap-2 text-xs">
                <span className="min-w-[40px] text-right text-muted-foreground">{formatTime(currentTime)}</span>
                 <Slider
                    value={[progress]}
                    onValueChange={handleProgressChange}
                    max={100}
                    step={0.1}
                    className="w-full"
                    disabled={isLoading || duration === 0}
                    thumbClassName={isPlaying ? 'opacity-100' : ''}
                />
                <span className="min-w-[40px] text-muted-foreground">{formatTime(duration)}</span>
            </div>
        </div>

        {/* Volume Control */}
        <div className="col-span-3 flex items-center justify-end gap-2">
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
            value={isMuted ? [0] : [volume]}
            onValueChange={(value) => {
                setVolume(value[0]);
                if (isMuted) setIsMuted(false);
            }}
            max={100}
            step={1}
            className="w-24"
            thumbClassName="opacity-100"
          />
           <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
