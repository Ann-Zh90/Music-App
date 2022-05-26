import style from "./ErrorShow.module.css";

interface IErrorShowProps {
  children: React.ReactNode;
}

const ErrorShow = (props: IErrorShowProps) => {
  return (
    <div className={style.error}>
      <div className={style.errorMessage}>
        <p>
          {props.children} <span>&#128553;</span>
        </p>
      </div>
    </div>
  );
};

export default ErrorShow;
