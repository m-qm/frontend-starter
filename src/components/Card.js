import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';
// import { withAuth } from '../lib/authContext';
import playlistService from '../lib/playlistservice';
import { withAuth } from '../lib/authContext';


class PlaylistCard extends Component {

  state = {
    playlist: "",
    id: ""
  }

  iframe = () => {
    const { playlist } = this.props;
    return { __html: playlist.link }
  }

  getSinglePlaylist = (e) => {
    const id = this.props.playlist._id
    console.log(id)
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


  render() {
    const { playlist } = this.props;
    // const { isLogged } = this.props;
    return (
      <div className="card">
        <Grid>
          <Row>
            <Col xs={12} md={6}>
            <div className="container-fluid">
            <h3> 
              {playlist.title}
            </h3>
            <h5> 
              {playlist.styles}
            </h5> 
              <div className="video-container">
              <div className="video" dangerouslySetInnerHTML={this.iframe()}/>
                </div>
              </div>
            <form action="playlist/:id/delete" method="post">
              <Button className="btn-black-inline" onClick={this.deletePlaylist}>Delete</Button>
              <Button onClick={this.getSinglePlaylist}>Playlist Detail</Button>
            </form>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default withRouter(PlaylistCard);
