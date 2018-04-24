import React, { Component, Fragment } from "react";
import faker from "faker";
import Chat from "./Chat";

class App extends Component {
  state = {
    messages: Array(10)
      .fill()
      .map(faker.lorem.sentence, this)
  };

  addMessage = () => {
    this.setState(state => {
      return {
        messages: state.messages.concat([faker.lorem.sentence()])
      };
    });
  };

  render() {
    return (
      <Fragment>
        <Chat>
          {this.state.messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: "inline-block",
                padding: 8,
                margin: 2,
                background: "#d4e1f5",
                borderRadius: "1rem"
              }}
            >
              {message}
            </div>
          ))}
        </Chat>
        <button onClick={this.addMessage}>Add</button>
      </Fragment>
    );
  }
}

export default App;
