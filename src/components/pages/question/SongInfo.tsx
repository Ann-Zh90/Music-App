import style from "./SongInfo.module.css";
import Player1 from "../../controls/Player1";

import type { Song } from "../../../store/user-part";

interface SongInfoProps {
  songData: Song;
  title: string;
}

const SongInfo = ({ songData, title }: SongInfoProps) => {
  let urlImg = "";
  let description = "";
  if (songData) {
    urlImg = `https://levi9-song-quiz.herokuapp.com/api/${songData.image}`;
    description = songData.description;
  }
  return (
    <div className={style.infoSection}>
      <h1>{title}</h1>
      <div className={style.mainContent}>
        <img src={urlImg} width="100%" height="374px" alt="artist foto" />

        {/* <audio src={urlAudio} controls className={style.player}>
          Player
        </audio> */}
        <Player1
          content={songData}
          isArtistPhotoShown={false}
          rigthAnswer={false}
        />
      </div>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default SongInfo;
