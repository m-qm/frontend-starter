import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';
import playlistService from '../lib/playlistservice';
import { withRouter } from 'react-router-dom';

class PlaylistForm extends Component {
  state = {
    owner: this.props.user._id,
    title: '',
    link: '',
    styles: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    playlistService.create(this.state)

      .then(() => {
        this.props.history.push("/playlist")
      })
      .catch( error => console.error("error"))
  }

  handleInputChange = (event) => {  
    const {name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { title, link, styles } = this.state;
    
    return (
      <div className="container text-center justify-content-center">
      <div className="row ">
        <h1>Create your playlist</h1>
      </div>
      <div className="row">
      <div className="form-group">

        <form className="form-group col-sm-4 mx-auto" onSubmit={this.handleFormSubmit}>
          <input type="text" className="form-control" value={title} name="title" placeholder="Your title" onChange={this.handleInputChange} />
          <input type="text" className="form-control" value={link} name="link" placeholder="Your link" onChange={this.handleInputChange}/>
          <input type="text" className="form-control" value={styles} name="styles" placeholder="Your styles" onChange={this.handleInputChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
    </div>
    )
  }
}

export default withAuth(withRouter(PlaylistForm));