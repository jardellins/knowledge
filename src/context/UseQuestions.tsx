import React, { useState, useEffect, createContext, useContext } from "react";
import { ChallengeProps, QuestionAnsweredProps } from "../dtos/answered/questionAnsweredDTO";

import { ChildrenProps } from "../dtos/questions/childrenDTO";
import validateAnswers from "../helpers/validateAnswers";

type ContextQuestionsProps = {
  amount: number;
  check: string;
  currentQuestion: number;
  challenge: ChallengeProps[]
  sortArray: string[];
  questionsAnswered: QuestionAnsweredProps[];
  handleSetAmount: (e: number) => void;
  handleCheckbox: (e: string) => void;
  handleQuestion: () => void;
};

const UseQuestionsContext = createContext<ContextQuestionsProps>(
  {} as ContextQuestionsProps
);

export const UseQuestionsProvider = ({ children }: ChildrenProps) => {
  const [amount, setAmount] = useState<number>(0);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [allQuestionsArray, setAllQuestionsArray] = useState<string[]>([]);
  const [sortArray, setSortArray] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [check, setCheck] = useState<string>("");
  const [questionsAnswered, setQuestionsAnswered] = useState<
    QuestionAnsweredProps[]
  >([]);

  const challenge: ChallengeProps[] = [
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
    setCurrentQuestion(0)
  },[])

  useEffect(() => {
    if(currentQuestion + 1 >= amount) {
      return
    }
    setAllQuestionsArray((prev) => [
      ...prev,
      challenge[currentQuestion].correct_answer,
    ]);

    challenge[currentQuestion].incorrect_answers.map((incorrect) =>
      setAllQuestionsArray((prev) => [...prev, incorrect])
    );
  }, [currentQuestion]);

  useEffect(() => {
    const newSortArray = allQuestionsArray.sort();

    setSortArray(newSortArray);
  }, [allQuestionsArray]);

  useEffect(() => {
    const newArray = answers;

    newArray[currentQuestion] = check;

    setAnswers(newArray);
  }, [check]);

  const handleSetAmount = (data: number) => {
    if (!data) {
      return;
    }

    setAmount(data);
  };

  const handleCheckbox = (answer: string) => {
    if (check === answer) {
      setCheck("");

      return;
    }

    setCheck(answer);
  };

  const handleQuestion = () => {
    if (!check) {
      return;
    }

    const answeredQuestion = validateAnswers({answers, challenge, sortArray, positionArray: currentQuestion})

    setQuestionsAnswered((prev) => [...prev, answeredQuestion]);

    setCurrentQuestion(currentQuestion + 1);
    setAllQuestionsArray([]);
    setCheck("");
  }

  return (
    <UseQuestionsContext.Provider
      value={{
        amount,
        check,
        currentQuestion,
        challenge,
        sortArray,
        questionsAnswered,
        handleSetAmount,
        handleCheckbox,
        handleQuestion,
      }}
    >
      {children}
    </UseQuestionsContext.Provider>
  );
};

export const UseData = () => {
  const context = useContext(UseQuestionsContext);

  return { context };
};
