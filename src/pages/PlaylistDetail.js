import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import playlistService from '../lib/playlistservice';
import PlaylistCard from '../components/Card';
// import EditPlaylist from './EditPlaylist';

class PlaylistDetail extends Component {
  
  state = {
    data: []
  }

    iframe = () => {
    const { data } = this.props;
    return { __html: data.link }
  }

  componentDidMount(){
    this.update();
  }

  update = () => {
    this.setState({
      isLoading: true,
    });

    const id = this.props.match.params.id
    playlistService.listOnePlaylist(id)
    .then((data) => {
      console.log("data", data)
      this.setState({
        data: data,
        isLoading: false
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  handleDelete = () => {
    this.update()
  }

  render(){
    const { data, isLoading } = this.state;

    return(
      <div className="container">
        <h1>{this.state.data.title}</h1>
        <div className="video-container">
            <i>{this.state.data.link}</i>
            <p>{this.state.data.styles}</p>
            <Link to={'/playlist'}>Back to playlists</Link>
          </div>
        </div>
    )
  }
}

export default PlaylistDetail;