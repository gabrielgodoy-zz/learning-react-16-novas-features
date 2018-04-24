import React, { Component, Fragment } from "react";
import FetchJson from "./FetchJson";

class App extends Component {
  state = {
    person: 1
  };

  changePerson = () => {
    this.setState({ person: 2 });
  };

  render() {
    return (
      <Fragment>
        <FetchJson
          url={`https://swapi.co/api/people/${this.state.person}`}
          render={({ isLoading, data }) => {
            return <div>{isLoading ? "Loading …" : `Name: ${data.name}`}</div>;
          }}
        />
        <button onClick={this.changePerson}>Change Person</button>
      </Fragment>
    );
  }
}

export default App;
