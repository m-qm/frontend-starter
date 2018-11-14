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
    const { profile, isLoading,user } = this.props;
    return (
      <div className="container">
        <div className="container text-center justify-content-center row">
      <Grid>
        <Row>
        {/* { isLoading ? <h1>Loading....</h1> : <div>{profile}</div>
        } */}
        <Col xs={6} md={4}>
            <Image className="profile-pic" src="/../avatar.jpeg" rounded responsive/>
        </Col>
        <Col xs={6} md={4}>
        <Row>
          <h4>Welcome {this.state.user.username} </h4>

            {/* <h5>{this.props.user.favorites.map((favorite) => {
              return <PlaylistCard key={playlist._id} playlist={playlist} onDelete={this.handleDelete}/>
            }) }
            </h5> */}
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
          <h2>Your Playlists</h2>
          </Col>
        <Col xs={12} md={2}>
          <h2>Your Favorites</h2>
          </Col>
      </Grid>
      </div>
     </div>

    )
  }
}

export default withAuth(Profile);