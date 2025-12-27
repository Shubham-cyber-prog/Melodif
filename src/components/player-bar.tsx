
'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
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
import { useIsMobile } from '@/hooks/use-mobile';

export function PlayerBar() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const isMobile = useIsMobile();
  
  const currentSong = songs[currentSongIndex];
  const artwork = getArtworkById(currentSong.artworkId);
  const artworkUrl = artwork?.imageUrl;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleNextSong = useCallback(() => {
    if (isShuffling) {
      setCurrentSongIndex(Math.floor(Math.random() * songs.length));
    } else {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    }
  }, [isShuffling]);

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };
  
  const handleSongEnd = useCallback(() => {
    if (isRepeating) {
      if(audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } else {
      handleNextSong();
    }
  }, [isRepeating, handleNextSong]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
        if (isPlaying) {
            audioElement.play().catch(e => console.error("Playback error:", e));
        } else {
            audioElement.pause();
        }
    }
  }, [isPlaying]);

   useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.src = currentSong.url;
      audioElement.load();
      if (isPlaying) {
        audioElement.play().catch(e => console.error("Playback error:", e));
      }
    }
  }, [currentSong, isPlaying]);


  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
        audioElement.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        if (audioRef.current.duration > 0) {
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
        setDuration(audioRef.current.duration);
        setIsLoading(false);
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
      )}>
        <audio 
            ref={audioRef}
            src={currentSong.url}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleSongEnd}
            onWaiting={() => setIsLoading(true)}
            onPlaying={() => setIsLoading(false)}
            onCanPlay={() => setIsLoading(false)}
            preload="metadata"
        />
        
      <div className={cn(
          "grid h-full items-center px-4 md:px-8",
          isMobile ? "grid-cols-3" : "grid-cols-10"
        )}>
        {/* Song Info */}
        <div className="col-span-1 flex items-center gap-3 md:col-span-3">
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
          <div className="hidden md:block">
            <p className="font-semibold">{currentSong.title}</p>
            <p className="text-sm text-muted-foreground">{currentSong.artist}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="col-span-1 flex flex-col items-center justify-center gap-2 md:col-span-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className={cn("hidden h-8 w-8 md:flex", isShuffling && "text-primary")} onClick={() => setIsShuffling(!isShuffling)}>
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handlePrevSong}>
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
                <Pause className="h-6 w-6 fill-current" />
              ) : (
                <Play className="h-6 w-6 fill-current" />
              )}
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleNextSong}>
              <SkipForward />
            </Button>
            <Button variant="ghost" size="icon" className={cn("hidden h-8 w-8 md:flex", isRepeating && "text-primary")} onClick={() => setIsRepeating(!isRepeating)}>
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
           <div className="hidden w-full max-w-xs items-center gap-2 text-xs md:flex">
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

        {/* Volume Control & Close */}
        <div className="col-span-1 flex items-center justify-end gap-2 md:col-span-3">
          <div className="hidden items-center md:flex">
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
          </div>
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

    