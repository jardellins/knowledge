import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import "./assets/styles/global.css";
import { UseQuestionsProvider } from "./context/UseQuestions";

function App() {
  return (
    <BrowserRouter>
      <UseQuestionsProvider>
        <Routes />
      </UseQuestionsProvider>
    </BrowserRouter>
  );
}

export default App;
