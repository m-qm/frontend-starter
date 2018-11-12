import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import playlistService from '../lib/playlistservice';
// import EditPlaylist from './EditPlaylist';

class PlaylistDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      playlist: "",
      id: ""
  }
    }


  componentDidMount(){
      this.getSingleProject();
  }

  update = () => {
    this.setState({
      isLoading: true,
    });

    playlistService.findOnePlaylist()
      .then((result) => {
        this.setState({
          playlists: result,
          isLoading: false
        })
      })
  }

  handleDelete = () => {
    this.update()
  }


  render(){
    const { playlist } = this.state;

    return(
      <div>
        <h1> Hey </h1>
        <button onClick={() => this.deletePlaylist(this.state._id)}>Delete playlist</button>
        <Link to={'/playlist'}>Back to playlist</Link>
      </div>
    )
  }
}

export default PlaylistDetail;