import React, { Component } from 'react';
import playlistService from '../lib/playlistservice';


class SearchBar extends Component {
  state = {
    styles: ""
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const styles = this.state.styles
    
    playlistService.search(styles)
      .catch( error => console.error("error"))
  }

  handleInputChange = (event) => {  
    const {name, value} = event.target;

    this.setState({[name]: value});
  }

render () {
  const { styles } = this.state;

  return(
    <div>
    <form onSubmit={this.handleFormSubmit}>
        <input type="text" value={styles} name="styles" placeholder="Search style" onChange={this.handleInputChange} />
        <input type="submit" value="Submit"/>
    </form>
    </div>
  )}
}

export default SearchBar;