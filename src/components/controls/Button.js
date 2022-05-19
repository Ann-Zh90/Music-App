import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/Union.svg";
import style from "./Button.module.css";

const Button = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.onClick) props.onClick();
    if (props.link) navigate(props.link);
  };
  return (
    <button
      className={style.btn}
      disabled={props.disabled}
      onClick={handleClick}
    >
      <div className={style.text}>{props.children}</div>
      <img src={arrow} alt="arrow" width="21px" height="12.2px" />
    </button>
  );
};

export default Button;
