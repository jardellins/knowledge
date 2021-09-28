import { ChallengeProps } from "../dtos/answered/questionAnsweredDTO";

const formatQuestion = (challenge: ChallengeProps) => {
  const answers = challenge.incorrect_answers.concat(challenge.correct_answer);

  const correctAnswer = answers.map((data) => {
    if (data === challenge.correct_answer) {
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
    question: challenge.question,
    answers: correctAnswer.sort(() => Math.random() - 0.5),
  };

  return question;
};

export default formatQuestion;
