import style from "./UserInfo.module.css";
import { useSelector } from "react-redux";

const UserInfo = (props) => {
  const userInfo = useSelector((state) => state.user);
  return (
    <div className={style.container}>
      <p className={style.name}>{userInfo.userName}</p>
      <p>Your score: {userInfo.totalScore}</p>
    </div>
  );
};

export default UserInfo;
