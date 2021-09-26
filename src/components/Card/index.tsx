import React from "react";
import { Check, Close } from "@material-ui/icons";

import { UseData } from "../../context/UseQuestions";
import {
  AnswersProps,
  QuestionsProps,
} from "../../dtos/answered/questionAnsweredDTO";

import "./styles.css";

type CardProps = {
  position: number;
  challenge: QuestionsProps;
  choose?: AnswersProps;
  check?: AnswersProps;
  readOnly?: boolean;
  correct?: boolean;
};

const Card = ({ position, challenge, check, choose, readOnly }: CardProps) => {
  const { context } = UseData();
  const { handleCheckbox } = context;

  return (
    <div className="card-question">
      <h5>
        {position + 1}- {challenge.question}
      </h5>

      <div className="content-question">
        {challenge.answers.map((question, index) => {
          return (
            <div className="input-question" key={index}>
              <input
                value={question.answer}
                readOnly={readOnly}
                type={choose ? "hidden" : "radio"}
                name={question.answer}
                checked={check && question.answer === check.answer}
                onChange={check ? () => handleCheckbox(question) : undefined}
              />
              {choose ? (
                <>
                  <label
                    id={
                      question.correct === true
                        ? "correct"
                        : choose.answer === question.answer ? "wrong" : ""
                    }
                    className={
                      question.answer === choose.answer ? "fadeUp" : "fadeOut"
                    }
                  >
                    {question.answer}
                  </label>
                  {question.correct === true
                    ? choose.answer === question.answer && <Check />
                    : choose.answer === question.answer && <Close />}
                </>
              ) : (
                <label>{question.answer}</label>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
