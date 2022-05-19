import Input from "../../controls/Input";
import style from "./Welcome.module.css";
import Button from "../../controls/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user-part";

const Welcome = (props) => {
  //const [userName, setUserName] = useState("");
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const onInputHandler = (e) => {
    const name = e.currentTarget.value;
    dispatch(userActions.userInit(name));
    //setUserName(name);
    if (name.length >= 1) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userActions.userInit(e.currentTarget.value));
  };

  return (
    <div className={style.welcome}>
      <div className={style.wrapper}>
        <h1 className={style.title}>Welcome!</h1>
        <p>Please enter your name and lets start our quiz!</p>
        <form onSubmit={onSubmitHandler}>
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
