import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import style from "./UserInfo.module.css";

const UserInfo = () => {
  const userInfo = useSelector((state: RootState) => state.user);
  return (
    <div className={style.container}>
      <p className={style.name}>{userInfo.userName}</p>
      <p>Your score: {userInfo.totalScore}</p>
    </div>
  );
};

export default UserInfo;
