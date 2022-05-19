import { useState } from "react";
import style from "./Selector.module.css";

const Selector = (props) => {
  const [isRigthChoice, setIsRightChoise] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  let selectorStyle = `${style.selector}`;

  if (isRigthChoice) {
    selectorStyle = `${style.selector} ${style.correct}`;
  } else if (isTouched && !isRigthChoice) {
    selectorStyle = `${style.selector} ${style.incorrect}`;
  }

 

  const onClickHandler = (e) => {
    props.onClick({
      id: e.currentTarget.id,
      title: props.children,
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
    <div className={selectorStyle} onClick={onClickHandler} id={props.id}>
      <div className={style.icon}></div>
      <div>{props.children}</div>
    </div>
  );
};

export default Selector;
