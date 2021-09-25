import React, { useState } from 'react';
import { COLLECTION_CHALLENGES } from '../../configs/storage';
import { CompleteChallengeProps } from '../../dtos/storage/finishedDTO';

import './styles.css';

const Finished = () => {
  const [challenges, setChallenges] = useState<CompleteChallengeProps[]>(() => {
    const storageChallenges = localStorage.getItem(COLLECTION_CHALLENGES)
    
    if(storageChallenges) {
      return JSON.parse(storageChallenges)
    }

    return []
  })

  return (
      <div className="challenges-container">
        <div>
          <h1>Complete challenges</h1>
        </div>

        {challenges &&
        challenges.map((challenges, index) => {
          return (
            <div key={index}>
              <span>Completed at {challenges.date}</span>
            </div>
          )
        })}
      </div>
    )
}

export default Finished;