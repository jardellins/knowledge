import React from "react";
import { useParams } from "react-router";

import UseStorage from "../../hooks/useStorage";

import ArrowGoBack from "../../components/ArrowGoBack";
import Card from "../../components/Card";

import "./styles.css";

type IdProps = {
  id: string;
};

const Result = () => {
  const { id }: IdProps = useParams();
  const findChallenge = UseStorage.getById(id);

  return (
    <div className="result-container">
      <ArrowGoBack link="/finished" />
      
      <h1>Result</h1>
      {findChallenge?.amount && (
        <>
          <p>
            You have answered correct {findChallenge.correctAnswers} of{" "}
            {findChallenge.amount} question
            {findChallenge.amount > 1 ? "s" : ""}
          </p>
          <div>
            {findChallenge.allQuestions.map((challenge, index) => {
              return (
                <Card
                  key={index}
                  position={index}
                  challenge={challenge}
                  choose={findChallenge.pick[index]}
                  readOnly
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Result;
