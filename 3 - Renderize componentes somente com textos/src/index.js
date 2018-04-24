import React from 'react';
import { render } from 'react-dom';

const Comment = ({ text }) => {
  const emojifiedText = text
    .replace(':)', '😊')
    .replace(':D', '😀')
    .replace(':(', '🙁');
  return emojifiedText;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Comment text="Today we are sailing home :)" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
