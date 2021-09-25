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
};

export type QuestionsProps = {
  question: string;
  answers: AnswersProps[];
};
