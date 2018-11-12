import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../lib/authContext';

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    console.log('hello', event)

    auth.signup({ username, password })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
        this.props.setUser(user);
        this.props.history.push('/profile/create');
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
    <div class="container mx-3">    
      <div class="row text-center justify-content-center pt-4">
        <form className="form-group col-sm-4 mx-auto"
            onSubmit={this.handleFormSubmit}>
          <label for="username" class="form-label">Name</label>
          <input className="form-control"
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={this.handleChange}/>
          <label for="inputPassword" class="form-label">Password</label>
          <input className="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={this.handleChange} />
          <button className="btn btn-outline" type="submit" value="signup">Sign up</button>
        </form>
      </div>


        <p>Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>
    </div>

            

    )
  }
}

export default withAuth(Signup);