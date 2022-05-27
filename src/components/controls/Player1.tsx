import { useRef, useState, useEffect, useMemo } from "react";
import style from "./Player1.module.css";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ChangeEvent } from "react";

import { Song } from "../../store/user-part";

interface PlayerProps {
  content: Song;
  rigthAnswer?: boolean;
  isArtistPhotoShown: boolean;
}

const Player1 = ({ content, rigthAnswer, isArtistPhotoShown }: PlayerProps) => {
  //debugger;
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  //const [progress, setProgress] = useState(0);

  let urlAudio = "";
  let urlImage;
  let progress = (currentTime * 100) / duration;
  const inputRef = useRef<HTMLInputElement>(null);

  if (content) {
    urlAudio = `https://levi9-song-quiz.herokuapp.com/api/${content.audio}`;
    urlImage = `https://levi9-song-quiz.herokuapp.com/api/${content.image}`;
  }

  const audio = useMemo(() => new Audio(urlAudio), [urlAudio]);

  useEffect(() => {
    if (audio.ended) {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [audio.ended]);

  const onClickHandler = () => {
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = +e.currentTarget.value;
  };

  useEffect(() => {
    const getDuration = (e: Event) => {
      const currentTarget = e.currentTarget as HTMLAudioElement;
      setDuration(currentTarget.duration);
    };

    audio.addEventListener("loadedmetadata", getDuration);

    return () => {
      audio.removeEventListener("loadedmetadata", getDuration);
      audio.pause();
      setCurrentTime(0);
      setIsPlaying(false);
    };
  }, [audio]);

  useEffect(() => {
    const timeupdate = (e: Event) => {
      const target = e.target as HTMLAudioElement;
      setCurrentTime(target.currentTime);
      if (null !== inputRef.current) {
        inputRef.current.value = String(target.currentTime);
      }
    };
    if (null !== inputRef.current) {
      inputRef.current.value = "0";
      audio.addEventListener("timeupdate", timeupdate);
    }
    return () => {
      audio.removeEventListener("timeupdate", timeupdate);
    };
  }, [audio]);

  const end = `${Math.floor(duration / 60)}:${Math.round(duration % 60)}`;
  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <div
      className={
        isArtistPhotoShown ? style.container : style.containerWithoutPhoto
      }
    >
      <div
        className={
          isArtistPhotoShown ? style.playBtn : style.playBtnWithoutPhoto
        }
      >
        {rigthAnswer && (
          <img src={urlImage} alt="artist" width="11.4rem" height="11.4px" />
        )}
        {/* <PlayBtn onClick={onClickHandler} isPlaying={isPlaying} /> */}
        <div
          className={style.circle}
          onClick={onClickHandler}
          data-testid="playBtn"
        >
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </div>
      </div>
      <div className={style.scrollBar}>
        <div className={style.background}></div>
        <div
          className={style.progressField}
          style={{ width: `${progress}%` }}
        ></div>
        <input
          type="range"
          min="0.1"
          step="0.1"
          max={duration}
          className={style.input}
          ref={inputRef}
          onChange={onChangeInputValue}
        />
        <div className={style.timeIndicator}>
          <span>{calculateTime(currentTime)}</span>
          <span>{end}</span>
        </div>
      </div>
    </div>
  );
};

export default Player1;
