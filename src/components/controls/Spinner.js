import spinner from "../../assets/spinner.svg";
import style from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <img src={spinner} alt="loading" width="30%" height="30%" />
    </div>
  );
};

export default Spinner;
