import React from "react";
import QuizForm from "./components/QuizForm";
import Quiz from "./components/Quiz";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import store from "./store";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

function Home() {
  return (
    <div className="text-center">
      <QuizForm />
    </div>
  );
}
function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand mx-auto" href="/">
        QuizBuilder
      </a>
    </nav>
  );
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quiz/:id" component={Quiz} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
