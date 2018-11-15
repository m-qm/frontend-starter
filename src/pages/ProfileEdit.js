import React, { Component } from 'react';
import auth from '../lib/auth-service'
import { withAuth } from '../lib/authContext';
import { withRouter } from 'react-router-dom';



class ProfileEdit extends Component {
  state = {
    name: "",
    email: "",
    styles: [],
    city:"",
    description:"",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, city, description, styles } = this.state
    auth.update({ name, email, styles, city, description}) 
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
    const { name, email, styles, city, description} = this.state;
      return (
        <div className="container text-center justify-content-center">
        <div className="row">
          <h3>Edit your profile:</h3> 
          </div>
            <div className="row justify-content text-left ">
              <div className="form-group">
                <form className="form-group col-sm-4 mx-auto" onSubmit={this.handleFormSubmit}>
                  <label for="name" className="form-label">Name:</label>
                  <input type="text" className="form-control" value={name} name="name" placeholder="Your name" onChange={this.handleInputChange} />
                  <label for="Email" className="form-label">Email:</label>
                  <input type="text" className="form-control" value={email} name="email" placeholder="Your email" onChange={this.handleInputChange} />
                  <label for="city" className="form-label">City:</label>
                  <input type="text" className="form-control" value={city} name="city" placeholder="Your city" onChange={this.handleInputChange}/>
                  <label for="city" className="form-label">Description:</label>
                  <textarea className="form-control"name="description" value={description} rows="5" cols="32" placeholder="Tell us about yourself..." onChange={this.handleInputChange}/>
                  <label for="styles" className="form-label">Styles:</label>
                  <textarea className="form-control" name="styles" value={styles} rows="5" cols="32" placeholder="Styles" onChange={this.handleInputChange}/>
                  <input type="submit" value="Submit"/>
                </form>
            </div>
          </div>
        </div>
    )
  }
}

export default withAuth(withRouter(ProfileEdit));