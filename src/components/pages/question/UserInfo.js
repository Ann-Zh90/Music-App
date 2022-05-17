import style from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    <div className={style.container}>
      <p className={style.name}>IRYNA</p>
      <p>Your score: 0</p>
    </div>
  );
};

export default UserInfo;
