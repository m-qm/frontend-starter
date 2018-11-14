import React, { Component } from 'react'
import { withAuth } from '../lib/authContext';
import playlistService from '../lib/playlistservice';
import { withRouter } from 'react-router-dom';

class PlaylistForm extends Component {
  state = {
    owner: "",
    title: "",
    link: "",
    styles: ""
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    //const { title, link, styles } = this.state;
    console.log(this.state)
    playlistService.create(this.state)

      .then(() => {
        this.props.history.push("/playlist")
      })
      .catch( error => console.log(error))
  }

  handleInputChange = (event) => {  
    console.log(event.target.name, event.target.value)
    const {name, value } = event.target;
    this.setState({[name]: value});
  }

  findByName(value, array){
    array.map((v, i) => {
      if(value === v){
        console.log('found!')
        return i
      }
      return -1
    } )
  } 

  handleSelectChange = (event) => {
    var stylesArr = this.state.styles.slice();
      let index = stylesArr.indexOf(event.target.value)
      if(index >-1) {
        stylesArr.splice(index, 1)
      }
    else {
      stylesArr.push(event.target.value);
    }
    console.log(this.state.styles,stylesArr);
    this.setState({[event.target.name]: stylesArr})
  }

  render() {
    const { title, link, styles } = this.state;
    
    return (
      <div className="container">
      <div className="row">
        <h1>Create your playlist</h1>
      </div>
      <div className="row">
      <div className="form-group">

        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={title} name="title" placeholder="Your title" onChange={this.handleInputChange} />
          <input type="text" value={link} name="link" placeholder="Your link" onChange={this.handleInputChange}/>
          <label>
            Playlist styles
            <select value={styles} onChange={this.handleSelectChange}>
              <option value="Pop">Pop</option>
              <option value="Reggae">Reggae</option>
              <option value="Rock">Rock</option>
              <option value="Flamenco">Flamenco</option>
              <option value="Techno">Techno</option>
              <option value="Metal">Metal</option>
              <option value="Bachata">Bachata</option>
            </select>
          </label> 
          <input type="submit" value="Submit"/>
        </form>
      </div>
    </div>
    </div>
    )
  }
}

export default withAuth(withRouter(PlaylistForm));