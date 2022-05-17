import { Route, Routes, Navigate } from "react-router-dom";
import StartPage from "./components/pages/start/StartPage";
import NotFound from "./components/pages/NotFound";
import QuestionPage from "./components/pages/question/QuestionPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="start" />} />
        <Route path="start" element={<StartPage />} />
        <Route path="question" element={<QuestionPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
