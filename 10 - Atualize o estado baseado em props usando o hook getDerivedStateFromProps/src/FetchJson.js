import React, { Component, Fragment } from "react";

class FetchJson extends Component {
  state = {
    url: null,
    data: null,
    isLoading: true
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps);
    if (prevState.url !== nextProps.url) {
      return {
        url: nextProps.url,
        data: null,
        isLoading: true
      };
    }

    return null;
  }

  fetchAndUpdate = async () => {
    const url = this.state.url;
    const response = await fetch(url);
    const result = await response.json();
    this.setState(state => {
      if (state.url === url) {
        return { data: result, isLoading: false };
      }
      return null;
    });
  };

  componentDidMount() {
    this.fetchAndUpdate();
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      this.fetchAndUpdate();
    }
  }

  render() {
    return <Fragment>{this.props.render(this.state)}</Fragment>;
  }
}

export default FetchJson;
