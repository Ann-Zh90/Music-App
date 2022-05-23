import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import arrow from "../../../assets/Union.svg";
import style from "./NavBar.module.css";

const NavBar = ({ listOfGanre, currentGanre }) => {
  const [steps, setSteps] = useState(0);
  const isRigthAnswer = useSelector((state) => state.game.rigthAnswer);

  useEffect(() => {
    //(index < currentGanre || (index<=currentGanre && isRightAnswer))
    setSteps((prev) => prev + 1);
  }, [isRigthAnswer]);

  const ganreItems = listOfGanre.map((item, index, array) => {
    if (index === array.length - 1) {
      return <li key={item.id}>{item.genre.toUpperCase()}</li>;
    }
    let genreFontColor = "";
    if (index < currentGanre) {
      genreFontColor = style.correct;
    }
    if (index === currentGanre) {
      genreFontColor = style.active;
    }
    return (
      <Fragment key={item.id}>
        <li key={item.id} className={genreFontColor}>
          {item.genre.toUpperCase()}
        </li>
        <li key={item.id + "arrow"} className={genreFontColor}>
          <img src={arrow} width="19.44px" heigth="11.2px" alt="arrow" />
        </li>
      </Fragment>
    );
  });

  const progressGradient = style[`progressBGround${steps}`];
  return (
    <div>
      <div className={`${style.progress} ${progressGradient}`}></div>
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
