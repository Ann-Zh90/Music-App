import { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import QuizContent from "./QuizContent";

import style from "./QuestionPage.module.css";

const QuestionPage = () => {
  // const [allData, setAllData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const songsResponse = await fetch(
  //       "https://levi9-song-quiz.herokuapp.com/api/data"
  //     );
  //     const songsData = await songsResponse.json();
  //     setAllData(songsData);
  //   };
  //   fetchData();
  // }, []);
  // console.log(allData);

  // if (allData.length > 0) {
  //   const questionBlock = allData[0];
  //   const questionNumber = questionBlock
  //     ? Math.floor(Math.random() * (questionBlock.data.length - 1) + 1)
  //     : Math.floor(Math.random() * 4 + 1);

  //   const question = allData[0].data;
  //   console.log("questionNumber ", questionNumber);
  //   console.log(question[questionNumber]);
  // }

  return (
    <div>
      <div className={style.container}>
        <Header />
        <div >
          <NavBar />
          <QuizContent />
          {/* <Button></Button>  */}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
