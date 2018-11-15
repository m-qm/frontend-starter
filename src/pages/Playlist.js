import React, { Component } from 'react';
import playlistService from '../lib/playlistservice';
import PlaylistCard from '../components/Card';


class Playlist extends Component {

  state = {
    playlists: [],
    isLoading: true,
    
  }

  componentDidMount() {
    this.update()
  }

  update = () => {
    this.setState({
      isLoading: true,
    });
    
    playlistService.listPlaylist()
      .then((result) => {
        this.setState({
          playlist: result,
          isLoading: false
        })
      })
  }

  handleDelete = () => {
    this.update()
  }

  onAdd = () => {
    this.update()
  }
  

  render() {
    const { playlist, isLoading } = this.state;
    return (
      <div>
      <div className="container">
        <h1>Playlists</h1>
        </div>
        { isLoading ? <h1>Loading....</h1> : playlist.map((playlist) => {
          return <PlaylistCard key={playlist._id} playlist={playlist} onDelete={this.handleDelete} onAdd={this.addToFavorites}/>
        })}
      </div>
    );
  }
}

export default Playlist;
