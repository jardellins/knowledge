import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormatListNumbered } from "@material-ui/icons";

import chooseImage from "../../assets/images/choose.svg";
import { UseData } from "../../context/UseQuestions";

import "./styles.css";

const Home = () => {
  const { context } = UseData();
  const { handleSetAmount, handleResetValues } = context;

  const [getAmount, setGetAmount] = useState<number>();
  const [showModal, setShowModal] = useState<boolean>(false);

  const history = useHistory();

  useEffect(() => {
    handleResetValues();
  }, []);

  const handleChallenge = () => {
    if (!getAmount) {
      return;
    }

    handleSetAmount(getAmount);
    history.push("/questions");
  };

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <header>
        <div>
          <Link to="finished">finished challenges</Link>
        </div>
      </header>

      <main>
        <div className="container">
          <div>
            <div className="info-card">
              <div className="information">
                <h1>Knowledge challenges</h1>
                <div>
                  <p>
                    Challenge yourself to find out how many questions you will
                    answer correctly. In this challenge you will be able to see
                    your answers and the correctly answer of the question you
                    was challenge.
                  </p>
                </div>
              </div>

              <div className="card-input">
                <label htmlFor="amount">
                  Please inform how many questions do you want to answer?
                </label>
                <div className={getAmount ? "input filled" : "input"}>
                  <FormatListNumbered />
                  <input
                    id="amount"
                    type="number"
                    min={0}
                    onChange={(e) => setGetAmount(Number(e.target.value))}
                  />

                  <button
                    disabled={!getAmount}
                    className={!getAmount ? "disabled" : ""}
                    onClick={handleModal}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={chooseImage} alt="Choose options" />
          </div>
        </div>
      </main>

      {showModal && (
        <div className="modal">
          <div className="content-modal">
            <p>Do you want to start the challenge now?</p>
            <div className="button-container">
              <button
                className="cancel-button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="start-button" onClick={handleChallenge}>
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
