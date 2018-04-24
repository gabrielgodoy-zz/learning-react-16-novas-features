import React, { Component } from "react";

class Chat extends Component {
  wrapperRef = React.createRef();

  componentDidMount() {
    this.wrapperRef.current.scrollTop = this.wrapperRef.current.scrollHeight;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const wrapper = this.wrapperRef.current;
    return wrapper.scrollTop + wrapper.offsetHeight >= wrapper.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.wrapperRef.current.scrollTop = this.wrapperRef.current.scrollHeight;
    }
  }

  render() {
    return (
      <div
        style={{
          height: 200,
          overflowY: "scroll",
          border: "1px solid #ccc"
        }}
        ref={this.wrapperRef}
        children={this.props.children}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Chat;
