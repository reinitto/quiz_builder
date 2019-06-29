import React from 'react';
import QuizForm from './components/QuizForm';
import Quiz from './components/Quiz';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store from './store';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

function Home() {
  return (
    <div className='text-center container '>
      <h1 className='text-center'>Welcome to QuizBuilder</h1>
      <h2 className='text-center'>
        Build your own quiz and share with friends
      </h2>
      <QuizForm />
    </div>
  );
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/quiz/:id' component={Quiz} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
