import React from "react";
import { useHistory } from "react-router";

import { UseData } from "../../context/UseQuestions";

import "./styles.css";

const Questions = () => {
  const { context } = UseData();
  const {
    amount,
    check,
    sortArray,
    currentQuestion,
    challenge,
    handleCheckbox,
    handleQuestion,
  } = context;

  const history = useHistory();

  const handleFinished = () => {
    handleQuestion();

    history.push("/result");
  };

  return (
    <div className="questions">
      <h1>Questions</h1>

      <div className="card-question">
        <h5>
          {currentQuestion + 1}- {challenge[currentQuestion].question}
        </h5>

        <div className="content-question">
          {sortArray.map((question, index) => {
            return (
              <div className="input-question" key={index}>
                <input
                  value={question}
                  type="radio"
                  name={question}
                  checked={check === question}
                  onChange={() => handleCheckbox(question)}
                />
                <label>{question}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="next">
        {currentQuestion + 1 >= amount ? (
          <button className={!check ? "disabled" : ""} onClick={handleFinished}>
            Finished
          </button>
        ) : (
          <button
            className={!check ? "disabled" : ""}
            onClick={() => handleQuestion()}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Questions;
