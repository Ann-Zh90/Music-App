import Logo from "../../Logo";
import UserInfo from "./UserInfo";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.container}>
      <Logo />
      <UserInfo />
    </div>
  );
};

export default Header;
