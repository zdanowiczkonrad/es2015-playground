import React from 'react';

import {
  Route,
  DefaultRoute
} from 'react-router';

import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import QuestionPage from './components/QuestionPage/QuestionPage'
export default (
  <Route handler={App}>
    <Route handler={AboutPage} name="about" path="/about" />
    <Route handler={QuestionPage} name="questions" path="/questions" />
    <DefaultRoute handler={HomePage} name="home" />
  </Route>
);
