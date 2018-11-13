import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import playlistService from '../lib/playlistservice';
// import EditPlaylist from './EditPlaylist';

class PlaylistDetail extends Component {
  
  state = {
    data: []
  }


  componentDidMount(){
    this.update();
  }

  update = () => {
    const id = this.props.match.params.id
    playlistService.listOnePlaylist(id)
    .then((data) => {
      console.log("data", data)
      this.setState({
        data: data
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
    const { data } = this.state;
    console.log(data)


    return(
      <div>
        <h1> PlaylistDetail </h1>
                  <h1>{data.name}</h1>

        <button onClick={() => this.deletePlaylist(this.state._id)}>Delete playlist</button>
        <Link to={'/playlist'}>Back to playlist</Link>

      </div>
    )
  }
}

export default PlaylistDetail;