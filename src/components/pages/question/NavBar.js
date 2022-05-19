import { Fragment } from "react";
import arrow from "../../../assets/Union.svg";
import style from "./NavBar.module.css";

const NavBar = (props) => {
  const ganreItems = props.listOfGanre.map((item, index, array) => {
    if (index === array.length - 1) {
      return <li key={item.id}>{item.genre.toUpperCase()}</li>;
    }
    return (
      <Fragment key={item.id}>
        <li key={item.id}>{item.genre.toUpperCase()}</li>
        <li key={item.id + "arrow"}>
          <img src={arrow} width="19.44px" heigth="11.2px" alt="arrow" />
        </li>
      </Fragment>
    );
  });

  return (
    <div>
      <div className={style.progress}></div>
      <div className={style.ganre}>
        <ul className={style.ganreList}>
          {ganreItems}
          {/* <li>r&b</li>
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
          <li>soul</li> */}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
