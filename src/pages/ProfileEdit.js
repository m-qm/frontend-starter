import React, { Component } from 'react';
import auth from '../lib/auth-service'
import { withAuth } from '../lib/authContext';


class ProfileEdit extends Component {
  state = {
    email: "",
    styles: [],
    city:"",
    description:"",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, city, description, styles } = this.state
    auth.update({email, styles, city, description}) 
    .then((user) => {
      console.log(user)
      this.props.setUser(user)
    })
    .catch( error => console.log(error))
  }

  handleInputChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  render() {
    const { email, styles, city, description} = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={email} name="email" placeholder="Your email" onChange={this.handleInputChange} />
          <input type="text" value={city} name="city" placeholder="Your city" onChange={this.handleInputChange}/>
          <textarea class="textarea" name="description" value={description} rows="5" cols="32" placeholder="Tell us about your favorite music styles..." onChange={this.handleInputChange}/>
          <input type="submit" value="Submit" onClick={this.handleFormSubmit}/>
        </form>
      </div>
    )
  }
}

export default withAuth(ProfileEdit);