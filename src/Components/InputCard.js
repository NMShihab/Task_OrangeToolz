import React, { useState, useContext } from "react";
import { SlugContext } from "../Context/SlugContext";
import Card from "./Card";
import "./InputCard.css";

const InputCard = () => {
  const [slug, setSlug] = useContext(SlugContext);
  const [inputString, setInputString] = useState("");
  const [selectDash, setSelectDash] = useState(false);
  const [selectUnderScore, setSelectUnderScore] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const selectedSlugWithDash = (e) => {
    e.preventDefault();
    setSelectDash(!selectDash);
    setSelectUnderScore(false);
  };

  const selectedSlugWithUnderScore = (e) => {
    e.preventDefault();
    setSelectDash(false);
    setSelectUnderScore(!selectUnderScore);
  };

  const createSlug = (str, spilit_string) => {
    spilit_string = spilit_string.filter((st) => st !== "");
    if (str === "-") {
      let join = spilit_string.join("-");
      setSlug(join);
    }

    if (str === "_") {
      let join = spilit_string.join("_");

      setSlug(join);
    }
  };

  const generateSlug = (e) => {
    e.preventDefault();

    let spilit_string = inputString.split(" ");
    console.log(spilit_string);

    if (isChecked) {
      spilit_string = spilit_string.filter((st) => isNaN(st));
    }

    if (selectDash) {
      createSlug("-", spilit_string);
    }

    if (selectUnderScore) {
      createSlug("_", spilit_string);
    }
  };

  const clearButtonHandler = (e) => {
    e.preventDefault();
    setInputString("");
    setSlug("");
  };

  const resetButtonHandler = (e) => {
    e.preventDefault();
    setInputString("");
    setIsChecked(false);
    setSelectDash(false);
    setSelectUnderScore(false);
    setSlug("");
  };

  return (
    <Card>
      <h1 className="input-title">
        INPUT STRING: (Artcle title, tutorial title or any web page title)
      </h1>
      <input
        className="card-input"
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
      />

      <div className="separate-button-container">
        <button
          className={`${
            selectDash ? "seperate-btn-selected" : "seperate-btn-unselected"
          }`}
          onClick={selectedSlugWithDash}
        >
          Separate with dash (-)
        </button>
        <button
          className={`${
            selectUnderScore
              ? "seperate-btn-selected"
              : "seperate-btn-unselected"
          }`}
          onClick={selectedSlugWithUnderScore}
        >
          Separate with underscore (_)
        </button>
        <input
          className=""
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label>Remove number</label>
      </div>

      <div className="buttons">
        <button className="generate-slug-button" onClick={generateSlug}>
          (GENERATES SLUG)
        </button>
        <div className="clr-rt-buttons-container">
          <button className="clr-rs-btn" onClick={clearButtonHandler}>
            CLEAR
          </button>
          <button className="clr-rs-btn" onClick={resetButtonHandler}>
            RESET
          </button>
        </div>
      </div>
    </Card>
  );
};

export default InputCard;
