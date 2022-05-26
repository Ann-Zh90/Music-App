import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./PlayBtn.module.css";

const PlayBtn = ({ isPlaying, onClick }) => {
  return (
    <div className={style.circle} onClick={onClick}>
      {isPlaying ? (
        <FontAwesomeIcon icon={faPause} />
      ) : (
        <FontAwesomeIcon icon={faPlay} />
      )}
    </div>
  );
};

export default PlayBtn;
