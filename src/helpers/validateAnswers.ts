import {
  AnswersProps,
  ChallengeProps,
  QuestionAnsweredProps,
} from "../dtos/answered/questionAnsweredDTO";

type ValidateProps = {
    sortArray: string[];
    challenge: ChallengeProps[];
    answers: string[];
  positionArray: number;
};

const validateAnswers = ({
    sortArray,
    challenge,
    answers,
  positionArray,
}: ValidateProps) => {
  const dataAnswers: AnswersProps[] = sortArray.map((question) => {
    if (question === answers[positionArray]) {
      if (question === challenge[positionArray].correct_answer) {
        return {
          answer: question,
          correct: true,
          answer_question: "correct",
        };
      } else {
        return {
          answer: question,
          correct: false,
          answer_question: "wrong",
        };
      }
    } else {
      if (question === challenge[positionArray].correct_answer) {
        return {
          answer: question,
          correct: true,
          answer_question: undefined,
        };
      } else {
        return {
          answer: question,
          correct: false,
          answer_question: undefined,
        };
      }
    }
  });

  const answeredQuestion: QuestionAnsweredProps = {
    question: challenge[positionArray].question,
    answers: dataAnswers,
  };

  return answeredQuestion;
};


export default validateAnswers;