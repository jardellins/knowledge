import React, { useState, useEffect, createContext, useContext } from "react";
import {
  AnswersProps,
  ChallengeProps,
  QuestionsProps,
} from "../dtos/answered/questionAnsweredDTO";

import { ChildrenProps } from "../dtos/questions/childrenDTO";
import validateAnswers from "../helpers/validateAnswers";

type ContextQuestionsProps = {
  amount: number;
  check: AnswersProps;
  pick: AnswersProps[];
  currentQuestion: number;
  challenge: ChallengeProps[];
  correctAnswers: number;
  showChallenge: QuestionsProps;
  allQuestions: QuestionsProps[];
  handleSetAmount: (e: number) => void;
  handleCheckbox: (e: AnswersProps) => void;
  handleQuestion: () => void;
  handleResetValues: () => void;
};

const UseQuestionsContext = createContext<ContextQuestionsProps>(
  {} as ContextQuestionsProps
);

export const UseQuestionsProvider = ({ children }: ChildrenProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(-1);
  const [showChallenge, setShowChallenge] = useState<QuestionsProps>({} as QuestionsProps);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [allQuestions, setAllQuestions] = useState<QuestionsProps[]>([]);
  const [challenge, setChallenge] = useState<ChallengeProps[]>([]);
  const [check, setCheck] = useState<AnswersProps>({} as AnswersProps);
  const [pick, setPick] = useState<AnswersProps[]>([]);

  const challengeAPI: ChallengeProps[] = [
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
    if (!amount) {
      return;
    }
    setChallenge(challengeAPI);
    setCurrentQuestion(0);
  }, [amount]);

  useEffect(() => {
    if (currentQuestion < 0) {
      return;
    }

    const currentData = challenge[currentQuestion];
    const answers = currentData.incorrect_answers.concat(
      currentData.correct_answer
    );

    const correctAnswer = answers.map((data) => {
      if (data === currentData.correct_answer) {
        return {
          answer: data,
          correct: true,
        };
      } else {
        return {
          answer: data,
          correct: false,
        };
      }
    });

    const question = {
      question: currentData.question,
      answers: correctAnswer,
    };

    setShowChallenge(question);
    setAllQuestions((prev) => [...prev, question]);
  }, [currentQuestion]);

  useEffect(() => {
    if (currentQuestion < 0) {
      return;
    }
    let count = 0;

    const newArray = pick;
    newArray[currentQuestion] = check;

    newArray.map((answer) => {
      if (answer.correct === true) {
        count++;
      }
    });
    setPick(newArray);
    setCorrectAnswers(count);
  }, [check]);

  const handleSetAmount = (data: number) => {
    if (!data) {
      return;
    }
    setAmount(data);
  };

  const handleCheckbox = (answer: AnswersProps) => {
    if (check.answer === answer.answer) {
      return;
    }
    setCheck(answer);
  };

  const handleQuestion = () => {
    if (Object.keys(check).length <= 0 || currentQuestion + 1 > amount) {
      setCheck({} as AnswersProps);
      return;
    }
    setCurrentQuestion(currentQuestion + 1);
    setCheck({} as AnswersProps);
  };

  const handleResetValues = () => {
    setAmount(0);
    setCheck({} as AnswersProps);
    setPick([]);
    setChallenge([]);
    setAllQuestions([]);
    setShowChallenge({} as QuestionsProps);
    setCurrentQuestion(-1);
    setCorrectAnswers(0);
  };

  return (
    <UseQuestionsContext.Provider
      value={{
        amount,
        check,
        pick,
        currentQuestion,
        challenge,
        correctAnswers,
        showChallenge,
        allQuestions,
        handleSetAmount,
        handleCheckbox,
        handleQuestion,
        handleResetValues,
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
