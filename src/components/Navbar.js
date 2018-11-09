import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const { isLogged } = this.props;
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
    <div className="container">
      <h1 className="navbar-brand" href="#">mTrap</h1>
      <button  onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />

        </button>
        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">

              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        <div>
          {isLogged ? <div>
            <button className="button-black" onClick={this.props.logout}>Logout</button>
        </div>
        :
          <ul>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/playlist'>Playlists</Link></li>
          </ul>
      }
        </div>
      </div>
    </div>
  </nav>
    );
  }
}

export default withAuth(Navigation);