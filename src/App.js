import React, { useState } from "react";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([
    {
      question: "HTML stands for __________",
      options: [
        "Hypertext Markup Langauge",
        "Programming Langauge",
        "Markup Language",
      ],
      correctAns: "Hypertext Markup Langauge",
    },
    {
      question: "Bootstrap is a library of __________",
      options: ["CSS", "HTML", "JS"],
      correctAns: "CSS",
    },
    {
      question: "JSX Stands for_________",
      options: ["JavaScript XML", "JavaScript", "JavaScriptX"],
      correctAns: "JavaScript XML",
    },
    {
      question: "Flutter use for developing_________",
      options: ["Andoid Apps", "IOS Apps", "Both"],
      correctAns: "Both",
    },
    {
      question: "Git is a_________",
      options: [
        "Version Controlling System",
        "Version Distributing System",
        "None",
      ],
      correctAns: "Version Controlling System",
    },
    {
      question: "_____ tag in HTML used for links",
      options: ["Anchor Tag", "Paragraph Tag", "Pre Tag"],
      correctAns: "Anchor Tag",
    },
  ]);
  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [showResult, setShowResult] = useState(false);

  function checkAnswer() {
    let correctValue = questions[ind].correctAns;
    if (selectedValue === correctValue) {
      setScore(score + 1);
    }
    if (questions.length === ind + 1) {
      setShowResult(true);
    } else {
      setInd(ind + 1);
    }
  }
  console.log(score);
  return (
    <div className="App text-center" style={{ backgroundColor: "#f4f4f4" }}>
      <h1 className="bg-dark text-white p-3">Quiz App</h1>
      <div className="p-2">
        <div className="container">
          {showResult ? (
            <div
              className="p-3 rounded shadow text-white"
              style={{ backgroundColor: "#ff4757" }}
            >
              <p
                className="fs-2 fw-bold text-light"
                style={{ letterSpacing: "1px" }}
              >
                Result
              </p>
              <progress
                className="p-3"
                style={{ width: "300px" }}
                id="file"
                value={score}
                max={questions.length}
              ></progress>
              <h3>{((score / questions.length) * 100).toFixed(2)} %</h3>
              <h3>
                {(score / questions.length) * 100 < 60 ? "Fail" : "Pass"}{" "}
              </h3>
            </div>
          ) : null}
        </div>

        {!showResult ? (
          <div
            className="container p-5 my-2 rounded shadow text-white"
            style={{ backgroundColor: "#192a56" }}
          >
            <p className="fs-4">
              Question Number{" "}
              <span className="fs-1 fw-bold text-warning">{ind + 1}</span> of{" "}
              {questions.length}
            </p>
            <h3>{questions[ind].question}</h3>
          </div>
        ) : null}
        {!showResult ? (
          <div
            className="container p-5 my-2 rounded shadow"
            style={{ backgroundColor: "#0097e6" }}
          >
            <div className="row">
              {questions[ind].options.map((e, i) => {
                return (
                  <div key={i} className="col-md-4 py-2">
                    <button
                      onClick={() => setSelectedValue(e)}
                      className="btn btn-light rounded px-5"
                    >
                      {e}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {!showResult ? (
          <div className="container">
            <button
              onClick={() => checkAnswer()}
              className="btn text-white px-5 rounded-pill fs-5 bg-dark"
            >
              Next <i className="bi bi-arrow-right-circle-fill fw-bold"></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
