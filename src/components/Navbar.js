import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

  handleClickHome = () => {
    this.props.history.push("/home")
  }
  handleClickPlaylist = () => {
    this.props.history.push("/playlist")
  }
  handleClickLogin = () => {
    this.props.history.push("/login")
  }
  handleClickCreate = () => {
    this.props.history.push("/playlist/create")
  }
  handleClickProfile = () => {
    this.props.history.push("/profile")
  }
  handleClickProfileEdit = () => {
    this.props.history.push("/profile/edit")
  }

  render() {
    const { isLogged } = this.props;
    return (
      <Navbar className="header navbar navbar-expand-md navbar-light bg-faded">
        <Navbar.Header >
        <Navbar.Brand>
        <h4 href="/">mTrap</h4> 
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem onClick={this.handleClickHome}>
            Home
          </NavItem>
            <NavItem onClick={this.handleClickPlaylist}> Playlist
          </NavItem>
              {!isLogged ? 
          <NavItem onClick={this.handleClickLogin}> Login
              </NavItem >         
            :
            <Nav>
              <NavItem onClick={this.handleClickCreate}> Create
                </NavItem>    
              <NavItem onClick={this.handleClickProfile}> Profile
                </NavItem>   
              <NavItem onClick={this.handleClickProfileEdit}> Profile Edit
                </NavItem>   
              <NavItem>
                <Button className="btn-black-inline" onClick={this.props.logout}>Logout</Button>
              </NavItem>    
            </Nav>
            }
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      )

  }
}

export default withAuth(withRouter(Navigation));