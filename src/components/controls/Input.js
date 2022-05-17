import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
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
