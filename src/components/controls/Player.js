import React, { useState, useRef, useEffect } from "react";
import styles from "./Player.module.css";
// import { BsArrowLeftShort } from "react-icons/bs";
// import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const Player = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  return (
    <div className={styles.audioPlayer}>
      <audio
        ref={audioPlayer}
        src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
        preload="metadata"
      ></audio>
      <button className={styles.forwardBackward} onClick={backThirty}>
        30
        {/* <FaLongArrowAltLeft/> 30 */}
      </button>
      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      <button className={styles.forwardBackward} onClick={forwardThirty}>
        30
        {/* 30 <BsArrowRightShort /> */}
      </button>

      {/* current time */}
      <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

      {/* progress bar */}
      <div>
        <input
          type="range"
          className={styles.progressBar}
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>

      {/* duration */}
      <div className={styles.duration}>
        {duration && !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export default Player;

// import { useRef, useState, useEffect, useMemo } from "react";
// import style from "./Player.module.css";
// import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PlayBtn from "./PlayBtn";
// import { useDispatch } from "react-redux";
// import { gameActions } from "../../store/game-part";

// const Player = ({ content, rigthAnswer }) => {
//   const [duration, setDuration] = useState("00:00");
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [progress, setProgress] = useState(0);

//   const dispatch = useDispatch();

//   let urlAudio = "";
//   let urlImage;

//   if (content) {
//     urlAudio = `https://levi9-song-quiz.herokuapp.com/api/${content.audio}`;
//     urlImage = `https://levi9-song-quiz.herokuapp.com/api/${content.image}`;
//   }

//   const audio = useMemo(() => new Audio(urlAudio), [urlAudio]);

//   const onClickHandler = () => {
//     let interval;
//     if (audio.paused) {
//       audio.play();
//       console.log("audio is playing");
//       console.log(
//         "in onClickHandler ",
//         "currentTime",
//         currentTime,
//         "duration",
//         duration
//       );
//       interval = setInterval(() => {
//         console.log(
//           "in onClickHandler ",
//           "currentTime",
//           currentTime,
//           "duration",
//           duration
//         );
//         //setProgress(Math.ceil((currentTime / duration) * 100) / 100);
//       }, 1000);

//       //setTimeout(() => clearInterval(interval), 5000);
//       //dispatch(gameActions.toggleIsSongPlaying());
//       setIsPlaying(true);
//     } else if (!audio.paused) {
//       audio.pause();
//       console.log("audio is stopped");
//       clearInterval(interval);
//       //dispatch(gameActions.toggleIsSongPlaying());
//       setIsPlaying(false);
//     }
//   };

//   useEffect(() => {
//     const getDuration = (e) => {
//       setDuration(e.target.duration);
//       console.log("in useEffect getDuration");
//     };
//     audio.addEventListener("loadedmetadata", getDuration);

//     return () => audio.removeEventListener("loadedmetadata", getDuration);
//   }, [audio]);

//   useEffect(() => {
//     const timeupdate = (e) => {
//       setCurrentTime(e.target.currentTime);
//       console.log(
//         "in useEffect timeupdate",
//         "e.target.currentTime",
//         e.target.currentTime
//       );
//     };
//     audio.addEventListener("timeupdate", timeupdate);
//     return () => {
//       audio.removeEventListener("timeupdate", timeupdate);
//     };
//   }, [audio]);

//   const end = `${Math.floor(duration / 60)}:${Math.round(duration % 60)}`;

//   return (
//     <div className={style.container}>
//       <div className={style.playBtn} onClick={onClickHandler}>
//         {rigthAnswer && (
//           <img src={urlImage} alt="artist" width="114px" height="114px" />
//         )}
//         {/* <PlayBtn /> */}
//         <div className={style.circle}>
//           {isPlaying ? (
//             <FontAwesomeIcon icon={faPause} />
//           ) : (
//             <FontAwesomeIcon icon={faPlay} />
//           )}
//         </div>
//       </div>
//       <div className={style.scrollBar}>
//         <div className={style.background}></div>
//         <div
//           className={style.progressField}
//           style={{ width: `${progress}%` }}
//         ></div>
//         <input type="range" min="0.1" max={duration} className={style.input} />
//         <div className={style.timeIndicator}>
//           <span>{"0:00"}</span>
//           <span>{end}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// // {
// //   /* <div class='video-container'>
// // <video src="video.mp4" poster='preview.jpg' class='video-player' id='video-player' preload='metadata'></video>
// // <div class='video-hud'>
// // <div class='video-hud__element video-hud__action video-hud__action_play' id='video-hud__action'></div>
// // <div class='video-hud__element video-hud__curr-time' id='video-hud__curr-time'>00:00</div>
// // <progress value='0' max='100' class='video-hud__element video-hud__progress-bar' id='video-hud__progress-bar'></progress>
// // <div class='video-hud__element video-hud__duration' id='video-hud__duration'>00:00</div>
// // <div class='video-hud__element video-hud__mute video-hud__mute_false' id='video-hud__mute'></div>
// // <input type='range' value='100' max='100' title='Громкость' class='video-hud__element video-hud__volume' id='video-hud__volume'>
// // <select title='Скорость' class='video-hud__element video-hud__speed' id='video-hud__speed'>
// // <option value='25'>x0.25</option>
// // <option value='50'>x0.50</option>
// // <option value='75'>x0.75</option>
// // <option value='100' selected>x1.00</option>
// // <option value='125'>x1.25</option>
// // <option value='150'>x1.50</option>
// // <option value='175'>x1.75</option>
// // <option value='200'>x2.00</option>
// // </select>
// // <a class='video-hud__element video-hud__download' title='Скачать' href='video.mp4' download></a>
// // </div>
// // </div> */
// // }

// export default Player;
