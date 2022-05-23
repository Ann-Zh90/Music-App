import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user-part";
import Selector from "../../controls/Selector";
import Player1 from "../../controls/Player1";
import SongInfo from "./SongInfo";
import star from "../../../assets/star.svg";

import style from "./QuizContent.module.css";
import { gameActions } from "./../../../store/game-part";

const QuizContent = ({ content, isButtonDisabled }) => {
  const [attemps, setAttemps] = useState(1);
  const { rigthAnswer, questionNum, chosenSongInfo } = useSelector(
    (state) => state.game
  );

  const dispatch = useDispatch();

  const getChosenSongId = (info) => {
    dispatch(gameActions.setChosenSongInfo(info));
  };

  const rightAnswerIsFound = () => {
    dispatch(userActions.countTotalScore(4 - attemps));
    setAttemps(1);
    dispatch(gameActions.setRigthAnswer(true));
    isButtonDisabled(false);
  };

  const countAttemps = () => {
    setAttemps((prev) => prev + 1);
  };

  useEffect(() => {
    if (content) {
      const num = Math.floor(Math.random() * (content.data.length - 1) + 1);
      dispatch(gameActions.setQuestionNum(num));
    }
  }, [content, dispatch]);

  let listOfOptions = [];
  let genre = "";
  let chosenSongData = {};
  let questionData = null;
  if (content && questionNum) {
    genre = content.genre;
    if (chosenSongInfo) {
      chosenSongData = content.data.find(
        (item) => item.id === chosenSongInfo.id
      );
    }

    questionData = content.data[questionNum];

    listOfOptions = content.data.map((item, index) => {
      return (
        <Selector
          onClick={getChosenSongId}
          key={item.id}
          id={item.id}
          quizSongId={questionData.id}
          rightAnswerIsFound={rightAnswerIsFound}
          countAttemps={countAttemps}
          rightAnswer={rigthAnswer}
        >{`0${index + 1}: ${item.name} - ${item.songTitle}`}</Selector>
      );
    });
  }
  return (
    <div className={style.container}>
      <div className={style.questionSection}>
        <div className={style.title}>
          <h1>{genre} song</h1>
          <p>Listen to the audio and guess what song is it from the list</p>
        </div>
        <Player1
          className={style.player}
          content={questionData}
          rigthAnswer={rigthAnswer}
          isArtistPhotoShown={true}
        />
        <div className={style.questions}>{listOfOptions}</div>
      </div>
      {chosenSongInfo ? (
        <SongInfo songData={chosenSongData} title={chosenSongInfo.title} />
      ) : (
        <div className={style.defaultImg}>
          <img src={star} alt="star" />
        </div>
      )}
    </div>
  );
};

// const [chosenSongInfo, setChosenSongInfo] = useState(null);
//   // const { rigthAnswer, questionNum, attemps } = useSelector(
//   //   (state) => state.game
//   // );
//   const [rigthAnswer, setRightAnswer] = useState(false);
//   const [questionNum, setQuestionNum] = useState(null);
//   const [attemps, setAttemps] = useState(0);

//   const dispatch = useDispatch();

//   const getChosenSongId = (info) => {
//     setChosenSongInfo(info);
//   };

//   const rightAnswerIsFound = () => {
//     dispatch(userActions.countTotalScore(attemps));
//     setRightAnswer(true);
//     isButtonDisabled(false);
//   };

//   const countAttemps = () => {
//     setAttemps((prev) => prev + 1);
//   };

//   useEffect(() => {
//     if (content) {
//       const num = Math.floor(Math.random() * (content.data.length - 1) + 1);
//       setQuestionNum(num);
//     }
//   }, [content]);

//   let listOfOprions = [];
//   let genre = "";
//   let chosenSongData = {};
//   //let questionNum = null;
//   let questionData = null;
//   if (content && questionNum) {
//     genre = content.genre;
//     if (chosenSongInfo) {
//       chosenSongData = content.data.find(
//         (item) => item.id === chosenSongInfo.id
//       );
//     }

//     questionData = content.data[questionNum];
//     console.log("questionData", questionData);

//     listOfOprions = content.data.map((item, index) => {
//       return (
//         <Selector
//           onClick={getChosenSongId}
//           key={item.id}
//           id={item.id}
//           quizSongId={questionData.id}
//           rightAnswerIsFound={rightAnswerIsFound}
//           countAttemps={countAttemps}
//         >{`0${index + 1}: ${item.name} - ${item.songTitle}`}</Selector>
//       );
//     });
//   }
//   console.log(questionNum);
//   return (
//     <div className={style.container}>
//       <div className={style.questionSection}>
//         <div>
//           <h1>{genre} song</h1>
//           <p>Listen to the audio and guess what song is it from the list</p>
//         </div>
//         <Player
//           className={style.player}
//           content={questionData}
//           rigthAnswer={rigthAnswer}
//         />
//         <div className={style.questions}>{listOfOprions}</div>
//       </div>
//       <div className={style.infoSection}></div>
//       {chosenSongInfo ? (
//         <SongInfo songData={chosenSongData} title={chosenSongInfo.title} />
//       ) : (
//         <div className={style.defaultImg}>
//           <img src={star} alt="star" />
//         </div>
//       )}
//     </div>
//   );
// };

export default QuizContent;
