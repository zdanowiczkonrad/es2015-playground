import React from 'react';
import QuestionList from '../Question/QuestionList';

class QuestionPage extends React.Component {

  render() {
    return (
      <div className={'page__about'}>
        <h1>Questions</h1>
        <p>Welcome to the questions page.</p>
        <QuestionList />
      </div>
    );
  }
}

export default QuestionPage;
