import React, { Component } from 'react'
import { Button, Grid, Row, Thumbnail, Col } from 'react-bootstrap';
import { withAuth } from '../lib/authContext';
import playlistService from '../lib/playlistservice';

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
    playlistService.listOnePlaylist(id)
      .then((result) => {
        this.setState({
          playlist: result,
          isLoading: false
        })
      })
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
    const { isLogged } = this.props;
    return (
      <div className="card">
        
        
        <Grid>
        <Row>
        <Col xs={12} md={6}>
        <Thumbnail classname="mx-6">
        <h2> 
          {playlist.title}
        </h2> 
        <h2> 
          {playlist.id}
        </h2> 
        <h3>{playlist._id}</h3>
        <div dangerouslySetInnerHTML={this.iframe()}/>
        <form action="playlist/:id/delete" method="post">
          <Button className="btn-black-inline" onClick={this.deletePlaylist}>Delete</Button>
          <Button onClick={this.getSinglePlaylist}>Playlist Detail</Button>
        </form>
        </Thumbnail>
            </Col>
          </Row>
        </Grid>;
      </div>
    )
  }
}

export default PlaylistCard;
