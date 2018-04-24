import React from 'react';

let sendToErrorReporting = (error, info) => {
  console.log(error);
  console.log(info);
};

class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState(state => ({ ...state, hasError: true }));
    sendToErrorReporting(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong.</div>;
    } else {
      return this.props.children;
    }
  }
}

export default MyErrorBoundary;
