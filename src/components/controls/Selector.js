import style from "./Selector.module.css";

const Selector = (props) => {
  return (
    <div className={`${style.selector} ${style.incorrect}`}>
      <div className={style.icon}></div>
      <div>song name</div>
    </div>
  );
};

export default Selector;
