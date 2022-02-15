import Card from "./Card";
import React, { useContext } from "react";
import { SlugContext } from "../Context/SlugContext";
import CopyImage from "../Logo/copy.svg";
import "./Output.css";

const Ouput = () => {
  const [slug, setSlug] = useContext(SlugContext);

  const copyText = () => {
    navigator.clipboard.writeText(slug);

    window.confirm("Copided url slug: " + slug);
  };

  return (
    <Card>
      <h1 className="output-title">Ouput:(Clean Url Slug)</h1>
      <div className="output-section">
        <h2 className={`output-text`}>{slug}</h2>
      </div>

      <button className="copy-btn" onClick={copyText} disabled={!slug}>
        {" "}
        <img src={CopyImage} alt="icon copy" />
        Copy
      </button>
    </Card>
  );
};

export default Ouput;
