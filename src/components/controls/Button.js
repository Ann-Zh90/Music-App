import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/Union.svg";
import style from "./Button.module.css";

const Button = (props) => {
  //debugger;

  return (
    <button className={style.btn} disabled={props.disabled}>
      <Link to={props.link}>{props.children}</Link>
      <img src={arrow} alt="arrow" width="21px" height="12.2px" />
    </button>
  );
};

export default Button;
