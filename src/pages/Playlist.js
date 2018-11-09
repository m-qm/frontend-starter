import React, { Component } from 'react';
import playlistService from '../lib/playlistservice';
import Card from '../components/Card';

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
        playlists: result,
        isLoading: false
      })
    })
  }

  

  render() {
    const { playlists, isLoading } = this.state;
    return (
      <div>
        <h1>Playlists</h1>
        { isLoading ? <h1>Loading....</h1> : playlists.map((playlist) => {
          return <Card key={playlist._id} playlist={playlist} />
        })}
    </div>
    );
  }
}

export default Playlist;
