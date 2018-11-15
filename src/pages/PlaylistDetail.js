import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import playlistService from '../lib/playlistservice';
import PlaylistCard from '../components/Card';
// import EditPlaylist from './EditPlaylist';

class PlaylistDetail extends Component {
  
  state = {
    data: []
  }

  //   iframe = () => {
  //   const { data } = this.props;
  //   return { __html: data.link }
  // }

  // componentDidMount(){
  //   this.update();
  // }

  // update = () => {
  //   this.setState({
  //     isLoading: true,
  //   });

  //   const id = this.props.match.params.id
  //   playlistService.listOnePlaylist(id)
  //   .then((data) => {
  //     console.log("data", data)
  //     this.setState({
  //       data: data,
  //       isLoading: false
  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

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
    // playlistService.listOnePlaylist(id)
    //   .then((result) => {
    //     this.setState({
    //       playlist: result,
    //       isLoading: false
    //     })
    //   })
  }

  deletePlaylist = (e) => {
    const id = this.props.playlist._id
    // const currentUser = this.props.user._id
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