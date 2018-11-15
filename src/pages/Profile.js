import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';

import {
  Grid,
  Row,
  Col,
  Image
} from "react-bootstrap";

class Profile extends Component {
  
  state = {
    user: '',
    isLoading: true,

  }

  iframe = () => {
  const { data } = this.props;
  return { __html: data.link }
     }


  componentDidMount() {
    this.update()
  }

 
  update = () => {
    this.setState({
      isLoading: true,
    });

    auth.me()
      .then((result) => {
        this.setState({
          user: result,
          isLoading: false
        })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="container text-center justify-content-center row">
      <Grid>
        <Row>
        <Col xs={6} md={4}>
            <Image className="profile-pic" src="/../avatar.jpg" rounded responsive/>
            <section className="profile-icons mx-auto">
            <i className="fa fa-camera-retro"></i>
            <i className="fab fa-soundcloud"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fa fa-bandcamp"></i>
            <i className="fab fa-spotify"></i>
            </section>
      </Col>
        <Col xs={6} md={4}>
        <Row>
          <h4>Welcome {this.state.user.username} </h4>
              <div className="container text-center justify-content-center row"></div>
        </Row>
        
        <Link to={'/create'}>Add a playlist</Link>
          </Col>
        <Col xs={6} md={4}>
        <Link to={'/playlist'}>Back to playlist</Link>
          </Col>
        <Col xs={6} md={4}>
        <Link to={'/profile/edit'}>Edit Profile</Link>
          </Col>
        </Row>
        <Col xs={12} md={2}>
          <h3>Your Playlists</h3>
            <section className="video-profile">
            </section>
          </Col>
        <Col xs={12} md={2}>
          <h3>Your Favorites</h3>
          </Col>
      </Grid>
      </div>
     </div>

    )
  }
}

export default withAuth(Profile);