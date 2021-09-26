import React from "react";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@material-ui/icons";

import UseStorage from "../../hooks/useStorage";
import ArrowGoBack from "../../components/ArrowGoBack";
import finishedImg from "../../assets/images/finished.svg";

import "./styles.css";

const Finished = () => {
  const allChallengesFinished = UseStorage.getAllStorage();

  return (
    <div className="challenges-container">
      <ArrowGoBack link="/" />

      <div className="content-title">
        <h1>Complete challenges</h1>
      </div>

      <div className="image-fixed">
        <img src={finishedImg} alt="Choose card" />
      </div>

      <div className="card-container">
        {allChallengesFinished.length > 0 ? (
          allChallengesFinished.map((challenges, index) => {
            return (
              <div className="card-complete">
                <div key={index}>
                  <h4>Completed at {challenges.date}</h4>
                  <span>
                    Score {challenges.correctAnswers}/{challenges.amount}
                  </span>
                </div>
                <Link to={`/result/${challenges.id}`}>
                  <div className="link-result">
                    <ArrowForwardIos />
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="card-complete">
            <h1>Finish your first challenge before!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Finished;
