import React, { Fragment } from "react";
import style from "./Selector.module.css";

const Selector = (props) => {
  const onChangeHandler = (e) => {
    console.log(e.currentTarget);
  };
  return (
    <div className={style.fragment}>
      <input
        type="radio"
        id={props.id}
        className={`${style.radio}`}
        value={props.id}
        name="question"
      />
      <label
        htmlFor={props.id}
        className={style.label}
        onClick={onChangeHandler}
      >
        {props.children}
      </label>
    </div>
  );
};

export default Selector;
