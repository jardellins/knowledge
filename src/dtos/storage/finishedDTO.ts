import { AnswersProps, QuestionsProps } from "../answered/questionAnsweredDTO";

export type CompleteChallengeProps = {
  id: string;
  amount: number;
  allQuestions: QuestionsProps[];
  pick: AnswersProps[];
  correctAnswers: number;
  date: string;
};
