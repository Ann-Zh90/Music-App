import arrow from "../../../assets/Union.svg";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={style.progress}></div>
      <div className={style.ganre}>
        <ul className={style.ganreList}>
          <li>r&b</li>
          <li>
            <img src={arrow} width="19.44px" heigth="11.2px" alt="arrow" />
          </li>
          <li>jazz</li>
          <li>
            <img src={arrow} width="19.44px" heigth="11.2px" alt="arrow" />
          </li>
          <li>techno</li>
          <li>
            <img src={arrow} width="19.44px" heigth="11.2px" alt="arrow" />
          </li>
          <li>soul</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
