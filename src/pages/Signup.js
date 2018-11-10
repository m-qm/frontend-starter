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
     <div class="container-fluid bg-3 text-center">    
      <div class="row text-center justify-content-center pt-4">
        <form className="col-lg-offset-2 col-lg-10 mx-3" onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input className="form-control" type="text" name="username" value={username} onChange={this.handleChange}/>
          <label>Password:</label>
          <input className="form-control" type="password" name="password" value={password} onChange={this.handleChange} />
          <input type="submit" value="Signup" />
        </form>

        <p>Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
       </div>

            

    )
  }
}

export default withAuth(Signup);