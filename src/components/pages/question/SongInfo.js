import style from "./SongInfo.module.css";
import { useEffect } from "react";

//`https://levi9-song-quiz.herokuapp.com/api/${url}`
const SongInfo = ({ songData, title }) => {
  let urlAudio = "";
  let urlImg = "";
  let description = "";
  if (songData) {
    urlAudio = `https://levi9-song-quiz.herokuapp.com/api/${songData.audio}`;
    urlImg = `https://levi9-song-quiz.herokuapp.com/api/${songData.image}`;
    description = songData.description;
  }
  return (
    <div className={style.infoSection}>
      <h1>{title}</h1>
      <div>
        <div className={style.photo}>
          <img src={urlImg} width="100%" height="374px" alt="artist foto" />
        </div>
        <audio src={urlAudio} controls className={style.player}>
          Player
        </audio>
      </div>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default SongInfo;
