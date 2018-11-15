import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { withAuth } from '../lib/authContext';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import SearchBar from './SearchBar';


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
      <Navbar bg="dark" variant="dark">
        <Navbar.Header className="justify-content-end" >
          <Navbar.Brand>
            <h4>mTrap</h4> 
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="justify-content-end">
            <NavItem onClick={this.handleClickHome}>Home</NavItem>
            <NavItem onClick={this.handleClickPlaylist}>Playlist</NavItem>
              {!isLogged ? <NavItem onClick={this.handleClickLogin}>Login</NavItem > :
                <Fragment>  
                  <NavItem onClick={this.handleClickCreate}>Create</NavItem>   
                  <NavItem onClick={this.handleClickProfile}>Profile</NavItem>
                  <NavItem onClick={this.handleClickProfileEdit}>Profile Edit</NavItem>
                  <NavItem className="btn-black-inline" onClick={this.props.logout}>Logout</NavItem>
                  <NavItem>
                    <SearchBar />
                  </NavItem>
                </Fragment>
              }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )

  }
}

export default withAuth(withRouter(Navigation));