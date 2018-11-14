import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Image
} from "react-bootstrap";
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
// import PlaylistCard from '../components/Card';

import auth from '../lib/auth-service';

class Profile extends Component {
  
  state = {
    user: '',
    isLoading: true,
    favorites: []
  }

  componentDidMount() {
    console.log(this.props.user)
  }

  update = () => {
    this.setState({
      isLoading: true,
    })
    auth.me()
      .then((result) => {
        this.setState({
          user: result,
          isLoading: false
        })
      })
  }

  render() {
    const { profile, isLoading, playlist} = this.state;

    return (
      <div className="container">
      <Grid>
        <Row>
        { isLoading ? <h1>Loading....</h1> : <div>{profile}</div>
        }
        <Col xs={6} md={4}>
            <Image src="/../avatar.jpeg" rounded responsive/>
        </Col>
        <Col xs={6} md={4}>
        <Row>
          <h4>Hey {this.props.user.username}! </h4>

            {/* <h5>{this.props.user.favorites.map((favorite) => {
              return <PlaylistCard key={playlist._id} playlist={playlist} onDelete={this.handleDelete}/>
            }) }
            </h5> */}
              <div className="row"></div>
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
        <Col xs={12} md={4}>
          <h2>Your Playlists</h2>
          </Col>
        <Col xs={12} md={4}>
          <h2>Your Favorites</h2>
          </Col>
      </Grid>
      </div>

    )
  }
}

export default withAuth(Profile);