import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Selector from "../../controls/Selector";
import Player from "../../controls/Player";
import SongInfo from "./SongInfo";

import style from "./QuizContent.module.css";

const QuizContent1 = ({ content, isButtonDisabled }) => {
  const [chosenSongInfo, setChosenSongInfo] = useState(null);

  const getChosenSongId = (info) => {
    setChosenSongInfo(info);
  };

  const [questionNum, setQuestionNum] = useState(null);
  useEffect(() => {
    if (content) {
      const num = Math.floor(Math.random() * (content.data.length - 1) + 1);
      setQuestionNum(num);
    }
  }, [content]);

  let listOfOprions = [];
  let genre = "";
  let chosenSongData = {};
  //let questionNum = null;
  let questionData = null;
  if (content && questionNum) {
    genre = content.genre;
    if (chosenSongInfo) {
      chosenSongData = content.data.find(
        (item) => item.id === chosenSongInfo.id
      );
    }
    //questionNum = Math.floor(Math.random() * (content.data.length - 1) + 1);

    //все данные по песне

    questionData = content.data[questionNum];

    listOfOprions = content.data.map((item, index) => {
      return (
        <Selector
          onClick={getChosenSongId}
          isButtonDisabled={isButtonDisabled}
          key={item.id}
          id={item.id}
          quizSongId={questionData.id}
        >{`0${index + 1}: ${item.name} - ${item.songTitle}`}</Selector>
      );
    });
  }
  return (
    <div className={style.container}>
      <div className={style.questionSection}>
        <div>
          <h1>{genre} song</h1>
          <p>Listen to the audio and guess what song is it from the list</p>
        </div>
        <Player className={style.player} content={questionData} />
        <div className={style.questions}>{listOfOprions}</div>
      </div>
      <div className={style.infoSection}></div>
      {chosenSongInfo && (
        <SongInfo songData={chosenSongData} title={chosenSongInfo.title} />
      )}
    </div>
  );
};

export default QuizContent1;
