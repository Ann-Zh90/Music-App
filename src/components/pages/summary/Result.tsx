import style from "./Result.module.css";
import Button from "../../controls/Button";
import crown from "../../../assets/crown.svg";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { userActions } from "../../../store/user-part";

const Result = () => {
  const { userName, totalScore } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  //const [userName, setUserName] = useState("");
  const onClickHandler = () => {
    dispatch(userActions.resetTotalScore());
  };
  const maxScore = 12;
  const titleText =
    totalScore === maxScore
      ? `${userName}, did so great!`
      : `${userName}, you can do better, try again!`;
  const summaryMessage =
    totalScore === maxScore
      ? `You've got ${totalScore} out of ${maxScore} points. You are definitely a music
          lover!`
      : `You've got ${totalScore} out of ${maxScore} points.`;
  return (
    <div className={style.result}>
      <div className={style.wrapper}>
        <div className={style.circle}>{totalScore}</div>
        <div className={style.crown}>
          <img src={crown} alt="crown" width="318" />
        </div>
        <h1 className={style.title}>{titleText}</h1>
        <p>{summaryMessage}</p>
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
