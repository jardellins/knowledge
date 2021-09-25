import React from "react";
import { useHistory } from "react-router";
import Card from "../../components/Card";
import { COLLECTION_CHALLENGES } from "../../configs/storage";
import { UseData } from "../../context/UseQuestions";

import "./styles.css";

const Result = () => {
  const history = useHistory();

  const { context } = UseData();
  const { amount, allQuestions, pick, correctAnswers, handleResetValues } = context;

  const handleFinishedChallenge = () => {
    const date = new Date();
    const data = {
      amount,
      allQuestions,
      pick,
      correctAnswers,
      date: date.toLocaleString()
    }

    localStorage.setItem(COLLECTION_CHALLENGES, JSON.stringify(data))

    handleResetValues()
    history.replace('/')
  }


  return (
    <div className="result-container">
      <h1>Result</h1>
      <p>
        You have answered correct {correctAnswers} of {amount} question
        {amount > 1 ? "s" : ""}
      </p>
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

        <button onClick={handleFinishedChallenge}>Save</button>
    </div>
  );
};

export default Result;
