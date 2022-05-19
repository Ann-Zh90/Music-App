import { Route, Routes, Navigate } from "react-router-dom";
import StartPage from "./components/pages/start/StartPage";
import NotFound from "./components/pages/NotFound";
import QuestionPage from "./components/pages/question/QuestionPage";
import SummaryPage from "./components/pages/summary/SummaryPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="start" />} />
        <Route path="start" element={<StartPage />} />
        <Route path="question" element={<QuestionPage />} />
        <Route path="question/summary" element={<SummaryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
