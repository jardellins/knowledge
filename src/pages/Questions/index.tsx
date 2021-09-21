import React, { useState } from "react";

import "./styles.css";

const Questions = () => {
  const [check, setCheck] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleCheckbox = (name: string) => {
    if (answer === name) {
      setCheck("");
      setAnswer("");

      return;
    }
    setCheck(name);
    setAnswer(name);
  };
  return (
    <div>
      <h1>Questions</h1>

      <div>
        <div>
          <h5>1- question</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            asperiores cupiditate dolorem adipisci qui perspiciatis quis
            similique reprehenderit? Voluptatibus quis quam esse officia
            expedita in perspiciatis reprehenderit labore illo nostrum.
          </p>
          <input
            type="checkbox"
            value="first"
            name="first"
            checked={check === "first"}
            onChange={() => handleCheckbox("first")}
          />
          <input
            type="checkbox"
            value="second"
            name="second"
            checked={check === "second"}
            onChange={() => handleCheckbox("second")}
          />
          <input
            type="checkbox"
            value="third"
            name="third"
            checked={check === "third"}
            onChange={() => handleCheckbox("third")}
          />
        </div>
      </div>

      <div>
        <div>
          <h5>2- question</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            asperiores cupiditate dolorem adipisci qui perspiciatis quis
            similique reprehenderit? Voluptatibus quis quam esse officia
            expedita in perspiciatis reprehenderit labore illo nostrum.
          </p>
          <input
            type="checkbox"
            value="second"
            name="second"
            checked={check === "second"}
            onChange={() => handleCheckbox("second")}
          />
        </div>
      </div>

      <div>
        <div>
          <h5>1- question</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            asperiores cupiditate dolorem adipisci qui perspiciatis quis
            similique reprehenderit? Voluptatibus quis quam esse officia
            expedita in perspiciatis reprehenderit labore illo nostrum.
          </p>
          <input
            type="checkbox"
            value="third"
            name="third"
            checked={check === "third"}
            onChange={() => handleCheckbox("third")}
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
