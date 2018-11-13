import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';
import playlistService from '../lib/playlistservice';
import { withRouter } from 'react-router-dom';


class PlaylistForm extends Component {
 
  state = {
    owner: "",
    title: "",
    link: "",
    styles: [],
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    //const { title, link, styles } = this.state;
    playlistService.create(this.state)
      .then(() => {
        this.props.history.push("/playlist")
        console.log('heuyyyyyy')
      })
      .catch( error => console.log(error))
  }

  handleInputChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  render() {
    const { title, link, styles } = this.state;
    return (
      <div className="form-group">
      <h1>Hola</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={title} name="title" placeholder="Your title" onChange={this.handleInputChange} />
          <input type="text" value={link} name="link" placeholder="Your link" onChange={this.handleInputChange}/>
          <textarea className="textarea" name="styles" value={styles} rows="5" cols="32" placeholder="Describe your playlist" onChange={this.handleInputChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default withAuth(withRouter(PlaylistForm));