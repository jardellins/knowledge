import React from "react";

import chooseImage from "../../assets/images/choose.svg";

import "./styles.css";

const Home = () => {
  return (
    <>
      <header>
        <div>
          <a href="#">finished challenges</a>
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
                <div className="input">
                  <input id="amount" type="number" />
                  <button>Confirm</button>
                </div>
              </div>
            </div>
          </div>

          <div>
              <img src={chooseImage} alt="Choose options" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;