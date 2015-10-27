import React from 'react';
import Question from './Question';

export default class QuestionList extends React.Component {

  render() {
    var list = ['test1', 'test2', 'test' + Math.random() ];

    return (
      <ul>
        {list.map(item => <Question content={item} />)}
      </ul>
    );
  }
}
