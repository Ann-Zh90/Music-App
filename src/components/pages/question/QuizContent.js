import style from "./QuizContent.module.css";
import Selector from "../../controls/Selector";
import Player from "../../controls/Player";

const QuizContent = () => {
  // const isChecked = false;

  const onClickHandler = (e) => {
    console.log(e.currentTarget);
  };

  return (
    <div className={style.container}>
      <div className={style.questionSection}>
        <div>
          <h1>Jazz song</h1>
          <p>Listen to the audio and guess what song is it from the list</p>
        </div>
        <Player />

        {/* отрисовать массив Selectors, смапить state первый item с жанром */}
        <Selector onChange={onClickHandler}>
          01: Duke Ellington – Take the A Train
        </Selector>
        <Selector onChange={onClickHandler}>
          01: Duke Ellington – Take the A Train
        </Selector>
        <Selector onChange={onClickHandler}>
          01: Duke Ellington – Take the A Train
        </Selector>
        <Selector onChange={onClickHandler}>
          01: Duke Ellington – Take the A Train
        </Selector>
      </div>
      <div className={style.infoSection}></div>
    </div>
  );
};

export default QuizContent;
