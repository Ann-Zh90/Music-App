import Input from "../../controls/Input";
import style from "./Welcome.module.css";
import Button from "../../controls/Button";
import { useState } from "react";

const Welcome = (props) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const onInputHandler = (e) => {
    props.setUserName(e.currentTarget.value);
    if (e.currentTarget.value >= 1) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.setUserName("");
  };

  return (
    <div className={style.welcome}>
      <div className={style.wrapper}>
        <h1>Welcome!</h1>
        <p>Please enter your name and lets start our quiz!</p>
        <form onSubmit={onSubmitHandler}>
          <Input onInput={onInputHandler} userName={props.userName} />
          <Button disabled={isButtonDisabled} link={"/question"}>
            Start Quiz
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
