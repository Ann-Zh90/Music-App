import { useState } from "react";
import { MouseEvent } from "react";
import type { ChosenSong } from "../../store/game-part";
import style from "./Selector.module.css";

interface SelectorProps {
  onClick(e: ChosenSong): void;
  key: string;
  id: string;
  quizSongId: string;
  rightAnswerIsFound(): void;
  countAttemps(): void;
  rightAnswer: boolean;
  children: React.ReactNode;
}

const Selector = (props: SelectorProps) => {
  const [isRigthChoice, setIsRightChoise] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  let selectorStyle = `${style.selector}`;

  if (isRigthChoice) {
    selectorStyle = `${style.selector} ${style.correct}`;
  } else if (isTouched && !isRigthChoice) {
    selectorStyle = `${style.selector} ${style.incorrect}`;
  }

  const onClickHandler = (e: MouseEvent<HTMLElement>) => {
    props.onClick({
      id: e.currentTarget.id,
      title: String(props.children),
    });
    if (!props.rightAnswer) {
      props.countAttemps();
      setIsTouched(true);
      if (e.currentTarget.id === props.quizSongId) {
        setIsRightChoise(true);
        props.rightAnswerIsFound();
      }
    }
  };
  return (
    <div
      className={selectorStyle}
      onClick={onClickHandler}
      id={props.id}
      data-testid="selector-item"
    >
      <div className={style.icon}></div>
      <div>{props.children}</div>
    </div>
  );
};

export default Selector;
