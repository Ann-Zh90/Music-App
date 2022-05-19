import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./PlayBtn.module.css";
import { useSelector } from "react-redux";

const PlayBtn = (props) => {
  const isPlaying = useSelector((state) => state.game.isPlaying);
  return (
    <div className={style.circle}>
      {isPlaying ? (
        <FontAwesomeIcon icon={faPause} />
      ) : (
        <FontAwesomeIcon icon={faPlay} />
      )}
    </div>
  );
};

export default PlayBtn;
