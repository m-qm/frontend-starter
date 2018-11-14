import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Project dependencies
/// Components
import Navbar from '../components/Navbar';

// Home
class Home extends Component {
  
  render() {
    return (
      <div className="container homepage">
        <section className="row">
          <h1>Welcome to m-Trap ∆ </h1>
          <p className="home-text">Here you can gather your favorite
          music playlists, videos.
          </p>
        </section>
        <section className="row home-container">
          <Link to="/signup" className="btn btn-primary giant-btn">Join now</Link>
          <p className="small-text login-text">Already a user?
            <Link className="primary-link" to="/login"> Log in</Link>
          </p>
        </section>
      </div>
    )
  }
}

// Export
export default Home;