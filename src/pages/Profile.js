import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';


class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Hola estoy en el cosumer</h2>
        <h1>Welcome {this.props.user.username}</h1>
      <Link to={'/playlist'}>Back to playlist</Link>
      </div>

    )
  }
}

export default withAuth(Profile);