import React, { Component } from "react";
import TextInput from "./TextInput";

class App extends Component {
  inputRef = React.createRef();

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <React.Fragment>
        <TextInput ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus</button>
      </React.Fragment>
    );
  }
}

export default App;
