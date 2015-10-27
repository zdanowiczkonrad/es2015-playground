import React from 'react';

export default class QuestionList extends React.Component {
  render() {
    var list = ['test1', 'test2', 'test' + Math.random() ];

    return (
      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>
    );
  }
}
