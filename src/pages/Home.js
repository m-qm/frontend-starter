import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  
  render() {
    return (
      <div className="container">
          <h1>Welcome to m-Trap ∆ </h1>
          <p className="home-text Pt-3">Here you can gather your favorite
          music playlists, videos...</p>
          
          <p>... all in one app.</p>
          
          <Link to="/signup" className="btn btn-primary giant-btn pt-3">Join now</Link>
          <p className="small-text login-text">Already a user?
            <Link className="primary-link pb-3" to="/login"> Log in</Link>
          </p>
      </div>
    )
  }
}

export default Home;