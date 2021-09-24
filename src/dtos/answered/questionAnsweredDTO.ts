export type ChallengeProps = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type AnswersProps = {
  answer: string;
  correct: boolean;
  answer_question: "correct" | "wrong" | undefined;
};

export type QuestionAnsweredProps = {
  question: string;
  answers: AnswersProps[];
};
