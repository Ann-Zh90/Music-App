import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../../../store/game-part";
import Header from "./Header";
import NavBar from "./NavBar";
import QuizContent from "./QuizContent";
import { fetchMusicData } from "../../../store/user-actions";
import Button from "../../controls/Button";

import style from "./QuestionPage.module.css";
import Spinner from "./../../controls/Spinner";

const QuestionPage = () => {
  const generalData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [currentGanre, setCurrentGanre] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [link, setLink] = useState(null);

  const musicData = generalData.musicData;
  const isLoading = generalData.isLoading;

  let btnName =
    currentGanre === musicData.length - 1 ? "see my score" : "next question";

  const onClickHandler = () => {
    dispatch(gameActions.setRigthAnswer(false));
    dispatch(gameActions.setChosenSongInfo(null));
    setIsButtonDisabled(true);
    if (currentGanre === musicData.length - 2) {
      setLink("summary");
    }
    if (currentGanre !== musicData.length - 1) {
      setCurrentGanre((prev) => prev + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchMusicData());
  }, [dispatch]);

  const listOfGanre = musicData.map((item) => ({
    genre: item.genre,
    id: item.id,
  }));

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={style.container}>
          <Header />
          <div>
            <NavBar listOfGanre={listOfGanre} currentGanre={currentGanre} />
            <QuizContent
              content={musicData[currentGanre]}
              isButtonDisabled={setIsButtonDisabled}
            />
            <div className={style.btn}>
              <Button
                onClick={onClickHandler}
                disabled={isButtonDisabled}
                link={link}
              >
                {btnName}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
