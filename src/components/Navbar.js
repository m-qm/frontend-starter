import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/authContext';
import {Nav, Navbar, NavItem, Button } from 'react-bootstrap';


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
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header >
        <Navbar.Brand>
        <h4 href="/">mTrap</h4> 
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
              {!isLogged ? 
          
              <NavItem>
                <Link to="/login">Login</Link>
              </NavItem >         
            :
            <Nav>
              <NavItem> 
            <Link to="/playlist/create">Create</Link>
              </NavItem>    
              <NavItem>  
                <Link to="/playlist">Playlists</Link>
              </NavItem>   
              <NavItem>  
                <Button className="btn-black-inline" onClick={this.props.logout}>Logout</Button>
              </NavItem>    
            </Nav>
            }
        </Nav>
        </Navbar.Collapse>
      </Navbar>)

  }
}

export default withAuth(Navigation);