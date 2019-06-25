import React from "react";
import ReactDOM from "react-dom";
import QuizForm from "./components/QuizForm";

class App extends React.Component {
  state = {
    numberOfQuestions: 1
  };
  render() {
    return (
      <div className="container text-center">
        <h1>Welcome to QuizBuilder</h1>
        <h2>Build your own quiz and share with friends</h2>
        <QuizForm />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
