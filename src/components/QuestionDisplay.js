import React from "react";

const QuestionDisplay = ({ question, correct_answer, other_answers }) => {
  if (!other_answers) return null;
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        <li>{correct_answer}</li>
        {other_answers.map(a => (
          <li>{a}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionDisplay;
