import { useCallback, useEffect, useRef, useState } from "react";
import Fuzz from "../pixelRenderers/Fuzz";

const TRACKS = ["jb_song_FIXED_AUDIO_FINAL_LAST_ONE1115.mp3", "ireland.mp3"];

const titleLength = 20;

export default function Index() {
  const [isPlaying, setIsPlaying] = useState<boolean>();
  const [trackIdx, setTrackIdx] = useState<number>(0);
  const [trackTitle, setTrackTitle] = useState<string>();
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = TRACKS[trackIdx];

  const play = useCallback(() => {
    audioRef.current?.play();
    setIsPlaying(true);
  }, [audioRef]);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, [audioRef]);

  const next = useCallback(() => {
    setTrackIdx((i) => (i === TRACKS.length - 1 ? 0 : i + 1));
    play();
  }, [play]);

  const prev = useCallback(() => {
    setTrackIdx((i) => (i === 0 ? TRACKS.length - 1 : i - 1));
    play();
  }, [play]);

  useEffect(() => {
    // const fn = async () => {
    //   for (let i = 0; i < track.length - titleLength; i++) {
    //     title = track.substring(i, titleLength);
    //     console.log(i, title);
    //     await new Promise((r) => setTimeout(() => r(null), 500));

    //     if (i === track.length - titleLength) {
    //       i = 0;
    //     }
    //   }
    // };

    let i = 0;

    const id = setInterval(() => {
      if (i < track.length - titleLength) {
        i++;
      }
      setTrackTitle(track.substring(i, i + titleLength));
    }, 500);

    return () => clearInterval(id);
  }, [track]);

  return (
    <div style={{ display: "flex", gap: 10, padding: 10 }}>
      <div
        style={{
          width: 20,
          height: 20,
          background: "black",
          position: "relative",
          borderRadius: 2,
        }}
      >
        {isPlaying && (
          <Fuzz
            style={{ position: "absolute", left: 4, top: 4 }}
            width={12}
            height={12}
            fill="white"
            interval={500}
            pixelSize={6}
          />
        )}
      </div>
      <div>{trackTitle}</div>
      <button onClick={prev}>{`<<`}</button>
      <button onClick={play}>{`|>`}</button>
      <button onClick={pause}>||</button>
      <button onClick={next}>{`>>`}</button>
      <audio ref={audioRef} src={`/tunes/${track}`} onEnded={next} />
    </div>
  );
}
