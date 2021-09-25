import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Card from "../../components/Card";
import { COLLECTION_CHALLENGES } from "../../configs/storage";
import { UseData } from "../../context/UseQuestions";
import { CompleteChallengeProps } from "../../dtos/storage/finishedDTO";

import "./styles.css";

const Result = () => {
  const [storageChallenges, setStorageChallenges] = useState<CompleteChallengeProps[]>(() => {
    const storageChallenges = localStorage.getItem(COLLECTION_CHALLENGES);

    if (storageChallenges) {
      console.log(JSON.parse(storageChallenges));
      return JSON.parse(storageChallenges);
    }

    return [];
  });

  const history = useHistory();

  const { context } = UseData();
  const { amount, allQuestions, pick, correctAnswers, handleResetValues } =
    context;

  useEffect(() => {
    const date = new Date();
    const data = {
      amount,
      allQuestions,
      pick,
      correctAnswers,
      date: date.toLocaleString(),
    };

    setStorageChallenges((prev) => [...prev, data]);
  }, [])

  const handleFinishedChallenge = () => {
    
    localStorage.setItem(
      COLLECTION_CHALLENGES,
      JSON.stringify(storageChallenges)
    );
    handleResetValues();
    history.replace("/");
  };

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
