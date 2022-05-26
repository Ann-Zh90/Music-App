import { useEffect, useState } from "react";
import { gameActions } from "../../../store/game-part";
import Header from "./Header";
import NavBar from "./NavBar";
import QuizContent from "./QuizContent";
import { fetchMusicData } from "../../../store/user-actions";
import Button from "../../controls/Button";
import Spinner from "../../controls/Spinner";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import style from "./QuestionPage.module.css";
import ErrorShow from "./ErrorShow";

const QuestionPage = () => {
  const generalData = useAppSelector((state) => state.user);
  const { errorMessage } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();

  const [currentGanre, setCurrentGanre] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [link, setLink] = useState<string | null>(null);

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
      {isLoading || !musicData.length ? (
        <Spinner />
      ) : (
        <div className={style.container}>
          <Header />
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
      )}

      {!isLoading && errorMessage && <ErrorShow>{errorMessage}</ErrorShow>}
    </div>
  );
};

export default QuestionPage;
