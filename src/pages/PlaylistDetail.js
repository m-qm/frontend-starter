import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import playlistService from '../lib/playlistservice';
import PlaylistCard from '../components/Card';

class PlaylistDetail extends Component {
  
  state = {
    data: []
  }


state = {
    playlist: "",
    id: "",
    isFavorite: this.props.playlist.favorite,
    styles: ""
  }

  iframe = () => {
    const { playlist } = this.props;
    return { __html: playlist.link }
  }

  getSinglePlaylist = (e) => {
    const id = this.props.playlist._id
    this.props.history.push(`/playlist/${id}`)
  }

  deletePlaylist = (e) => {
    const id = this.props.playlist._id
    console.log(id);
    
    playlistService.delete(id)
      .then((result) => {
        console.log("delete", result);
        this.props.onDelete();
      })
      .catch((error) => {
        console.log(error)
      })
  }

  addToFavorites = (e) => {
    const id = this.props.playlist._id

    playlistService.favorites(id)
    .then((result) => {
      console.log("added to favorites", result);
    })

  }
 
 
  render() {
    const { playlist , isLoading } = this.state;
    return (
      <div className="container text-center justify-content-center row">
        <h1>Playlist Info:</h1>
        { isLoading ? <h1>Loading....</h1> : playlist.map((playlist) => {
          return <PlaylistCard key={playlist._id} playlist={playlist} onDelete={this.handleDelete} onAdd={this.addToFavorites}/>
        })}
      </div>
    );
  }
}

export default withRouter(PlaylistDetail);