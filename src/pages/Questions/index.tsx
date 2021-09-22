import { Check } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import "./styles.css";

type ResultsProps = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [allQuestionsArray, setAllQuestionsArray] = useState<string[]>([]);
  const [sortArray, setSortArray] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [check, setCheck] = useState<string>("");

  const questions: ResultsProps[] = [
    {
      category: "Geography",
      type: "boolean",
      difficulty: "medium",
      question:
        "The longest place named in the United States is Lake Chargoggagoggmanchauggagoggchaubunagungamaugg, located near Webster, MA.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "Entertainment: Film",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which animated film did Steven Lisberger direct in 1980 before going on to direct Tron?",
      correct_answer: "Animalympics",
      incorrect_answers: [
        "The Fox and the Hound",
        "The Black Cauldron",
        "The Great Mouse Detecive",
      ],
    },
    {
      category: "Entertainment: Video Games",
      type: "multiple",
      difficulty: "medium",
      question: "What is the mod &quot;Cry of Fear&quot; based off of?",
      correct_answer: "Half-Life",
      incorrect_answers: [
        "Counter Strike: Source",
        "Half-Life 2",
        "It&#039;s a stand alone game, not a mod",
      ],
    },
  ];

  useEffect(() => {
    setAllQuestionsArray((prev) => [
      ...prev,
      questions[currentQuestion].correct_answer,
    ]);

    questions[currentQuestion].incorrect_answers.map((incorrect) =>
      setAllQuestionsArray((prev) => [...prev, incorrect])
    );
  }, [currentQuestion]);

  useEffect(() => {
    const newSortArray = allQuestionsArray.sort()

    setSortArray(newSortArray)
  }, [allQuestionsArray])

  useEffect(() => {
    const newArray = answers;

    newArray[currentQuestion] = check;

    setAnswers(newArray);
  }, [check]);


  const handleCheckbox = (answer: string) => {
    if (check === answer) {
      setCheck("");

      return;
    }

    setCheck(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 > questions.length || !check) {
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setAllQuestionsArray([]);
    setCheck("");
  };

  return (
    <div className="questions">
      <h1>Questions</h1>

      <div className="card-question">
        <h5>
          {currentQuestion + 1} {questions[currentQuestion].question}
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
        {currentQuestion + 1 >= questions.length ? (
          <button
            className={!check ? "disabled" : ""}
            // onClick={handleNextQuestion}
          >
            Finished
          </button>
        ) : (
          <button
            className={!check ? "disabled" : ""}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Questions;
