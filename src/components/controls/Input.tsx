import { ChangeEvent } from "react";
import style from "./Input.module.css";

interface InputProps {
  onInput(e: ChangeEvent<HTMLInputElement>): void;
  userName: string;
}

const Input = (props: InputProps) => {
  return (
    <div className={style.wrapper}>
      <input
        value={props.userName}
        onInput={props.onInput}
        className={style.input}
        placeholder="type your name here..."
      />
    </div>
  );
};

export default Input;
