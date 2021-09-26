import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

import { UseData } from "../../context/UseQuestions";
import Card from "../../components/Card";

import "./styles.css";
import UseStorage from "../../hooks/useStorage";
import { CompleteChallengeProps } from "../../dtos/storage/finishedDTO";

const Questions = () => {
  const { context } = UseData();
  const {
    amount,
    showChallenge,
    currentQuestion,
    check,
    handleQuestion,
    allQuestions,
    pick,
    correctAnswers,
  } = context;

  const history = useHistory();

  const handleFinished = () => {
    if (Object.keys(check).length <= 0) {
      return;
    }

    const date = new Date();
    const data: CompleteChallengeProps = {
      id: uuidv4(),
      amount,
      allQuestions,
      pick,
      correctAnswers,
      date: date.toLocaleString(),
    };

    UseStorage.setStorage(data);
    history.push(`/result/${data.id}`);
  };

  return (
    <>
      {Object.keys(showChallenge).length > 0 && (
        <div className="questions">
          <h1>Questions</h1>

          <Card
            challenge={showChallenge}
            position={currentQuestion}
            check={check}
          />

          <div className="next">
            {currentQuestion + 1 >= amount ? (
              <button
                className={Object.keys(check).length <= 0 ? "disabled" : ""}
                onClick={handleFinished}
              >
                Finished
              </button>
            ) : (
              <button
                className={Object.keys(check).length <= 0 ? "disabled" : ""}
                onClick={() => handleQuestion()}
              >
                Next Question
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Questions;
