import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';
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

   componentDidMount() {
    this.update()
  }

   update = () => {
    this.setState({
      isLoading: true,
    });
   }


  addToFavorites = (e) => {
    const id = this.props.playlist._id;

    playlistService.favorites(id)
    .then((result) => {
    })

  }

  getSinglePlaylist = (e) => {
    const id = this.props.playlist._id
    this.props.history.push(`/playlist/${id}`)

  }

  deletePlaylist = (e) => {
    const id = this.props.playlist._id
    
    playlistService.delete(id)
      .then((result) => {
        this.props.onDelete();
      })
      .catch((error) => {

        console.error("error")
      })
  }

    handleDelete = () => {
    this.update()
  }


  render() {
    const { playlist } = this.props;
    return (
      <div className="card mx-4">
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
            <section className="profile-icons mx-auto">
              <Button className="btn-black-inline" onClick={this.deletePlaylist}>Delete</Button>
              <Button onClick={this.getSinglePlaylist}>Playlist Detail</Button>
              <i className="fas fa-heart"></i>
            </section>
            </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default withRouter(PlaylistCard);