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

            alert: ''

        });
        this.props.setUser(user);
        this.props.history.push('/profile/create');
      })
      .catch( error => {
        const { data } = error.response;
        console.log(data.error)

        switch (data.error) {
          case 'username-not-unique' :
            this.setState({alert: 'This username is already taken.'});
            break;
          case 'empty' :
            this.setState({alert: 'Username or password cannot be empty.'})
            break;
          default:
              this.setState({
                alert: ''
              });
        }
      })  }

  handleChange = (event) => {  

    const {name, value} = event.target;

    this.setState({[name]: value});

  }

  render() {
    const { username, password } = this.state;
    return (
    <div className="container mx-3 bg-3 text-center">    
      <div className="row justify-content text-center " >
        <form className="form-group col-sm-4 mx-auto"
            onSubmit={this.handleFormSubmit}>
          <label for="username" className="form-label">Name:</label>
          <input className="form-control text-center"
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={this.handleChange}/>
          <label for="inputPassword" class="form-label">Password:</label>
          <input className="form-control text-center"
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={this.handleChange} />
          <button className="btn btn-outline" type="submit" value="signup">Sign up</button>
        </form>
        </div>
      <p>{this.state.alert}</p>
        <p>Already have account? 
          <Link to={"/login"}> Login</Link>          
        </p>
    </div>
    )
  }
}



export default withAuth(Signup);