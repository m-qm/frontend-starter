import React, { Component } from 'react';
import auth from '../lib/auth-service'
import { withAuth } from '../lib/authContext';
import { withRouter } from 'react-router-dom';



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
      this.props.history.push("/profile")
    })
    .catch( error => console.log(error))
  }

  handleInputChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  handleClickProfile = () => {
    this.props.history.push("/profile")
  }

  render() {
    const { email, styles, city, description} = this.state;
    return (
      <div className="container">
      <h3>Edit your profile:</h3>
      <div className="row justify-content">
      <div className="form-group">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={email} name="email" placeholder="Your email" onChange={this.handleInputChange} />
          <input type="text" value={city} name="city" placeholder="Your city" onChange={this.handleInputChange}/>
          <textarea className="textarea" name="description" value={description} rows="5" cols="32" placeholder="Tell us about yourself..." onChange={this.handleInputChange}/>
          <textarea className="textarea" name="styles" value={styles} rows="5" cols="32" placeholder="Styles" onChange={this.handleInputChange}/>
          <input type="submit" value="Submit"/>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

export default withAuth(withRouter(ProfileEdit));