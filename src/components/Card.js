import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';

// import { withAuth } from '../lib/authContext';
import playlistService from '../lib/playlistservice';


class PlaylistCard extends Component {

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
    const { playlist } = this.props;
    // const { isLogged } = this.props;
    return (
      <div className="card">
        <Grid>
          <Row>
            <Col xs={12} md={6}>
            <h3> 
              {playlist.title}
            </h3>
            <h5> 
              {playlist.styles}
            </h5> 
              <div className="video-container">
              <div className="video" dangerouslySetInnerHTML={this.iframe()}/>
                </div>
            <form action="playlist/:id/delete" method="post">
              <Button className="btn-black-inline ml-1 mr-1" onClick={this.deletePlaylist}>Delete</Button>
              <Button onClick={this.getSinglePlaylist}>Playlist Detail</Button>
              <div className="row space-between mx-3">
              <i className="fas fa-heart"></i><Link onClick={this.addToFavorites}>Add to Favorites</Link>
              </div>
            </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default withRouter(PlaylistCard);
