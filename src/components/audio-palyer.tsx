import { Play, Pause } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type AudioPlayerProps = {
  audio: string;
};

const AudioPlayer = ({ audio }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const current = audioRef.current;
    if (!current) return;

    const handleEnded = () => setIsPlaying(false);
    current.addEventListener("ended", handleEnded);

    return () => {
      current.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={audio} preload="auto" />
      <button
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
