import style from "./Result.module.css";
import Button from "../../controls/Button";
import crown from "../../../assets/crown.svg";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../../store/user-part";

const Result = (props) => {
  const { userName, totalScore } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //const [userName, setUserName] = useState("");
  const onClickHandler = () => {
    dispatch(userActions.resetTotalScore());
  };
  return (
    <div className={style.result}>
      <div className={style.wrapper}>
        <div className={style.circle}>{totalScore}</div>
        <div className={style.crown}>
          <img src={crown} alt="crown" />
        </div>
        <h1 className={style.title}>{userName}, did so great!</h1>
        <p>
          You got {totalScore} out of 20 points. You are definitely a music
          lover!
        </p>
        <div className={style.btn}>
          <Button link={"/question"} onClick={onClickHandler}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Result;
