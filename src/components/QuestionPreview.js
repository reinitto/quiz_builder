import React from "react";

const QuestionPreview = (data) => {
  const {
    question = "Missing question",
    correct_answer = "Missing Correct answer",
    other_answers1 = "Missing Other answer 1",
    other_answers2 = "Missing Other answer 2",
    other_answers3 = "Missing Other answer 3",
    index,
    img_src = undefined,
  } = data;

  const textClass = (dataAttr) => {
    if (data[dataAttr] === undefined || data[dataAttr] === "") {
      return "text-danger";
    } else {
      return "text-success";
    }
  };

  return (
    <div className="bg-light rounded p-1">
      <div className="text-left" style={{ fontSize: "2rem" }}>
        {`#${index + 1} `} Preview
      </div>
      <h3 className={textClass("question")}>
        {question === "" ? "missing question" : question}
      </h3>
      <div className="d-flex w-100">
        {img_src ? (
          <div className="w-50 mb-3 mr-3">
            {" "}
            <img className="img-fluid" src={img_src} alt="fluid" />{" "}
          </div>
        ) : null}
        <ul className={"list-group" + (img_src ? " w-50" : " w-100")}>
          <li
            className={
              textClass("correct_answer") +
              " " +
              "list-group-item list-group-item-action"
            }
          >
            {correct_answer === "" ? "missing correct answer" : correct_answer}
          </li>
          <li
            className={
              textClass("other_answers1") +
              " " +
              "list-group-item list-group-item-action"
            }
          >
            {other_answers1 === "" ? "missing other answers1" : other_answers1}
          </li>
          <li
            className={
              textClass("other_answers2") +
              " " +
              "list-group-item list-group-item-action"
            }
          >
            {other_answers2 === "" ? "missing other answers2" : other_answers2}
          </li>
          <li
            className={
              textClass("other_answers3") +
              " " +
              "list-group-item list-group-item-action"
            }
          >
            {other_answers3 === "" ? "missing other answers3" : other_answers3}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuestionPreview;
