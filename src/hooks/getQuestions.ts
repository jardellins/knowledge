import { ChallengeProps } from "../dtos/answered/questionAnsweredDTO";
import Data from "../service/api";

const getQuestions = {
  async amountQuestions(amount: string): Promise<ChallengeProps[]> {
    try {
      const questions = await Data.get(amount);
      return questions.results;
    } catch (error) {
      throw Error("error");
    }
  },
};

export default getQuestions;
