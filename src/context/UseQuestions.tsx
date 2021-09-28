import React, { useState, useEffect, createContext, useContext } from "react";
import {
  AnswersProps,
  ChallengeProps,
  QuestionsProps,
} from "../dtos/answered/questionAnsweredDTO";

import { ChildrenProps } from "../dtos/questions/childrenDTO";
import formatQuestion from "../helpers/formatQuestion";
import getQuestions from "../hooks/getQuestions";

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

  useEffect(() => {
    if (!amount) {
      return;
    }

    const getData = async () => {
      const challengeAPI = await getQuestions.amountQuestions(String(amount));
      setChallenge(challengeAPI);
      setCurrentQuestion(0);
    };

    getData();
  }, [amount]);

  useEffect(() => {
    if (currentQuestion < 0) {
      return;
    }

    const currentData = challenge[currentQuestion];
    const question = formatQuestion(currentData);

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
