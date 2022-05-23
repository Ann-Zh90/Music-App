import style from "./StartPage.module.css";
import Welcome from "./Welcome";
import Logo from "../../Logo";

//import { useState } from "react";

const StartPage = () => {
  //const [userName, setUserName] = useState("");

  return (
    <main>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Logo />
        </div>
        <Welcome />
      </div>
    </main>
  );
};

export default StartPage;
