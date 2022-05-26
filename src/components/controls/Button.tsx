import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/Union.svg";
import style from "./Button.module.css";

interface ButtonProps {
  disabled?: boolean;
  link?: string | null;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) props.onClick(e);
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
