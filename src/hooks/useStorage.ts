import { COLLECTION_CHALLENGES } from "../configs/storage";
import { CompleteChallengeProps } from "../dtos/storage/finishedDTO";

const UseStorage = {
  getAllStorage(): CompleteChallengeProps[] {
    const storageChallenges = localStorage.getItem(COLLECTION_CHALLENGES);

    if (storageChallenges) {
      return JSON.parse(storageChallenges);
    }

    return [];
  },
  getById(id: string): CompleteChallengeProps | undefined {
    const allData = this.getAllStorage();

    let found;

    allData.map((data) => {
      if (data.id === id) {
        found = data;
      }
    });

    return found;
  },
  setStorage(challenge: CompleteChallengeProps) {
    const oldChallenges = this.getAllStorage();

    const newChallenges = oldChallenges.concat(challenge);

    localStorage.setItem(COLLECTION_CHALLENGES, JSON.stringify(newChallenges));
  },
};

export default UseStorage;
