import { useRef, useState, useEffect, useMemo } from "react";
import style from "./Player1.module.css";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { gameActions } from "../../store/game-part";
import PlayBtn from "./PlayBtn";

const Player1 = ({ content, rigthAnswer, isArtistPhotoShown }) => {
  const [duration, setDuration] = useState("00:00");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  //const [progress, setProgress] = useState(0);

  let urlAudio = "";
  let urlImage;
  let progress = (currentTime * 100) / duration;
  const inputRef = useRef();

  if (content) {
    urlAudio = `https://levi9-song-quiz.herokuapp.com/api/${content.audio}`;
    urlImage = `https://levi9-song-quiz.herokuapp.com/api/${content.image}`;
  }

  const audio = useMemo(() => new Audio(urlAudio), [urlAudio]);

  const onClickHandler = () => {
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const onChangeInputValue = (e) => {
    audio.currentTime = e.currentTarget.value;
  };

  useEffect(() => {
    const getDuration = (e) => {
      setDuration(e.target.duration);
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
    inputRef.current.value = 0;
    const timeupdate = (e) => {
      setCurrentTime(e.target.currentTime);
      inputRef.current.value = e.target.currentTime;
    };
    audio.addEventListener("timeupdate", timeupdate);
    return () => {
      audio.removeEventListener("timeupdate", timeupdate);
    };
  }, [audio]);
  const end = `${Math.floor(duration / 60)}:${Math.round(duration % 60)}`;
  const calculateTime = (secs) => {
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
          <img src={urlImage} alt="artist" width="114px" height="114px" />
        )}
        {/* <PlayBtn onClick={onClickHandler} isPlaying={isPlaying} /> */}
        <div className={style.circle} onClick={onClickHandler}>
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
