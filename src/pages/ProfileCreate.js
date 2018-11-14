import React, { Component } from 'react'

class EditProfile extends Component {
 
  state = {
    email: "",
    styles: [],
    city:"",
    description:"",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    //const { email, city, description } = this.state

  }

  handleInputChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  render() {
    const { email, styles, city, description} = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={email} name="email" placeholder="Your email" onChange={this.handleInputChange} />
          <input type="text" value={city} name="city" placeholder="Your city" onChange={this.handleInputChange}/>
          <textarea className="textarea" name="description" value={description} rows="5" cols="32" placeholder="Tell us about yourself..." onChange={this.handleInputChange}/>
          <textarea className="textarea" name="styles" value={styles} rows="5" cols="32" placeholder="Tell us about yourself..." onChange={this.handleInputChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default EditProfile;
