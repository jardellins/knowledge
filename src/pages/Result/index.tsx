import React from "react";
import Card from "../../components/Card";
import { UseData } from "../../context/UseQuestions";

import "./styles.css";

const Result = () => {
  const { context } = UseData();
  const { allQuestions, pick, correctAnswers } = context;

  return (
    <div>
      <h1>Result</h1>
      <p>You have answer correct {correctAnswers} questions</p>
      <div>
        {allQuestions.map((challenge, index) => {
          return (
            <Card
              key={index}
              position={index}
              challenge={challenge}
              choose={pick[index]}
              readOnly
            />
          );
        })}
      </div>
    </div>
  );
};

export default Result;
