import style from "./Player.module.css";

const Player = () => {
  return (
    <div className={style.container}>
      <div className={style.playBtn}></div>
      <div className={style.scrollBar}>
        <div className={style.background}></div>
        <input type="range" value="0" min="0.1" max="29.59" />
        <audio>player</audio>
      </div>
    </div>
  );
};

// {
//   /* <div class='video-container'>
// <video src="video.mp4" poster='preview.jpg' class='video-player' id='video-player' preload='metadata'></video>
// <div class='video-hud'>
// <div class='video-hud__element video-hud__action video-hud__action_play' id='video-hud__action'></div>
// <div class='video-hud__element video-hud__curr-time' id='video-hud__curr-time'>00:00</div>
// <progress value='0' max='100' class='video-hud__element video-hud__progress-bar' id='video-hud__progress-bar'></progress>
// <div class='video-hud__element video-hud__duration' id='video-hud__duration'>00:00</div>
// <div class='video-hud__element video-hud__mute video-hud__mute_false' id='video-hud__mute'></div>
// <input type='range' value='100' max='100' title='Громкость' class='video-hud__element video-hud__volume' id='video-hud__volume'>
// <select title='Скорость' class='video-hud__element video-hud__speed' id='video-hud__speed'>
// <option value='25'>x0.25</option>
// <option value='50'>x0.50</option>
// <option value='75'>x0.75</option>
// <option value='100' selected>x1.00</option>
// <option value='125'>x1.25</option>
// <option value='150'>x1.50</option>
// <option value='175'>x1.75</option>
// <option value='200'>x2.00</option>
// </select>
// <a class='video-hud__element video-hud__download' title='Скачать' href='video.mp4' download></a>
// </div>
// </div> */
// }

export default Player;
