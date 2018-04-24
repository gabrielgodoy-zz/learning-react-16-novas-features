import React, { Component, Fragment } from 'react';

function Fruits() {
  return (
    <Fragment>
      <li>Apple</li>
      <li>Orange</li>
      <li>Banana</li>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Peach</li>
          <li>Ananas</li>
          <Fruits />
        </ul>
        <Glossary
          items={[
            {
              id: 1,
              term: 'HTML',
              description:
                'Is a descriptive language that specifies webpage structure',
            },
            {
              id: 2,
              term: 'CSS',
              description:
                'Is a declarative language that controls how webpages look in the browser',
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
