import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditPlaylist from './EditPlaylist';

class PlaylistDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // componentDidMount(){
  //     this.getSingleProject();
  // }

  getSinglePlaylist = () => {

  }

  renderEditForm = () => {
  }

// DELETE PLAYLIST:
//   deletePlaylist = (id) => {
//     const { params } = this.props.match;
// +  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div>{this.renderEditForm()} </div>
        <button onClick={() => this.deletePlaylist(this.state._id)}>Delete playlist</button>
        <Link to={'/playlist'}>Back to playlist</Link>
      </div>
    )
  }
}

export default PlaylistDetail;