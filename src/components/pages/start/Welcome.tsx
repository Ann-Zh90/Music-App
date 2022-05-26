import { ChangeEvent, FormEvent } from "react";
import type { RootState } from "../../../store/store";
import Input from "../../controls/Input";
import Button from "../../controls/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user-part";

import style from "./Welcome.module.css";

const Welcome = () => {
  //const [userName, setUserName] = useState("");
  const userInfo = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    dispatch(userActions.userInit(name));
    //setUserName(name);
    if (name.length >= 1) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userActions.userInit(e.currentTarget.value));
  };

  return (
    <div className={style.welcome}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Welcome!</h1>
        <p>Please enter your name and lets start our quiz!</p>
        <form onSubmit={onSubmitHandler} className={style.form}>
          <Input onInput={onInputHandler} userName={userInfo.userName} />
          <div className={style.btn}>
            <Button disabled={isButtonDisabled} link={"/question"}>
              Start Quiz
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
