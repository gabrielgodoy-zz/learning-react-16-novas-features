import React from 'react';

class Profile extends React.Component {
  onClick = () => {
    this.setState(state => {
      throw new Error('Oh nooo!');
      return { ...state };
    });
  };

  render() {
    return <div onClick={this.onClick}>Name: {this.props.user.name}</div>;
  }
}

export default Profile;
