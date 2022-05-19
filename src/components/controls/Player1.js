import { useRef, useState, useEffect, useMemo } from "react";
import style from "./Player1.module.css";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayBtn from "./PlayBtn";
import { useDispatch } from "react-redux";
import { gameActions } from "../../store/game-part";

const Player1 = ({ content, rigthAnswer }) => {
  console.log("render");
  const [duration, setDuration] = useState("00:00");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  //const [progress, setProgress] = useState(0);

  const animationRef = useRef();

  const dispatch = useDispatch();

  let urlAudio = "";
  let urlImage;
  let progress = (currentTime * 100) / duration;
  let start = currentTime
    ? `${Math.floor((duration - currentTime) / 60)}:${Math.round(
        (duration - currentTime) % 60
      )}`
    : "0:00";

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

  useEffect(() => {
    const getDuration = (e) => {
      setDuration(e.target.duration);
      console.log("in useEffect getDuration");
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
    const timeupdate = (e) => {
      setCurrentTime(e.target.currentTime);
      console.log(
        "in useEffect timeupdate",
        "e.target.currentTime",
        e.target.currentTime
      );
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
    <div className={style.container}>
      <div className={style.playBtn} onClick={onClickHandler}>
        {rigthAnswer && (
          <img src={urlImage} alt="artist" width="114px" height="114px" />
        )}
        {/* <PlayBtn /> */}
        <div className={style.circle}>
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
        <input type="range" min="0.1" max={duration} className={style.input} />
        <div className={style.timeIndicator}>
          <span>{calculateTime(currentTime)}</span>
          <span>{end}</span>
        </div>
      </div>
    </div>
  );
};

export default Player1;
