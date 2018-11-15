import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import auth from '../lib/auth-service';
import { withAuth } from '../lib/authContext';


class Login extends Component {
  state = {
    username: "",
    password: "",
    alert: ""
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user)
      this.props.history.push('/playlist'); 
    })
    .catch( error => {
      const { data } = error.response;
      console.log(data.error);
      switch (data.error) {
        case 'Invalid password or username' :
          this.setState({alert: 'Invalid email or password.'});
          break;
        case 'validation' :
          this.setState({alert: 'Username or password cannot be empty.'})
          break;
        case 'not-found' :
          this.setState({alert: 'Invalid email or password.'})
          break;
        default:
            this.setState({
              
            });
      }
    })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password} = this.state;
    return (
    <div className="container bg-6 text-center">    
      <div className="row text-center justify-content-center">
        <form className="form-group col-sm-4 mx-auto" onSubmit={this.handleFormSubmit}>
          <label for="Username">Username:</label>
          <input className="form-control" type="text" name="username" placeholder="Enter username" value={username} onChange={this.handleChange}/>
          <label for="Password">Password:</label>
          <input className="form-control" type="password" name="password"  placeholder="Enter password" value={password} onChange={this.handleChange}/>
          <button className="btn btn-outline mx-3" type="submit" value="login">Log in</button>
        </form>
      </div> 
        <p>{this.state.alert}</p>    
        <p>Not registered?</p>
        <Link to={"/signup"}>Sign up</Link>
          </div>
    )
  }
}

export default withAuth(Login);