import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import auth from '../lib/auth-service';
import { withAuth } from '../lib/authContext';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user)
      this.props.history.push('/playlist'); 
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="container bg-3 text-center">    
      <div className="row text-center justify-content-center pt-4">
        <form className="col-lg-offset-2 col-lg-10 mx-3" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input className="form-control" type="text" name="username" placeholder="Enter username" value={username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input className="form-control"  type="password" name="password"  placeholder="Enter password" value={password} onChange={this.handleChange}/>
          <button className="btn btn-outline" type="submit" value="login">Log in</button>
        </form>
        </div>
        <p>Not registered?
          <Link to={"/signup"}>Sign up</Link>
        </p>
        </div>
    )
  }
}

export default withAuth(Login);