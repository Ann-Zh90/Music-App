import style from "./SummaryPage.module.css";
import Result from "./Result";
import Logo from "../../Logo";
//import { useState } from "react";

const SummaryPage = () => {
  //const [userName, setUserName] = useState("");

  return (
    <main>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <Logo />
        </div>
        <Result />
      </div>
    </main>
  );
};

export default SummaryPage;
