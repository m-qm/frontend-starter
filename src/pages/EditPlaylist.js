import React, { Component } from 'react';

class EditPlaylist extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: this.props.thePlaylist.title, 
        description: this.props.thePlaylist.description,
        city: this.props.thePlaylist.city,
        styles: this.props.thePlaylist.styles,

    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, city, description } = this.state

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
        <label>Email:</label>
          <input type="text" value={email} name="email" placeholder="Your email" onChange={this.handleInputChange} />
        <label>Description:</label>
          <input type="text" value={city} name="city" placeholder="Your city" onChange={this.handleInputChange}/>
          <textarea class="textarea" name="description" value={description} rows="5" cols="32" placeholder="Tell us about yourself..." onChange={this.handleInputChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default EditPlaylist;