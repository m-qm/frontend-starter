import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Image
} from "react-bootstrap";
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
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
    const { profile, isLoading, city, user } = this.state;
    return (
      <div className="container">
      <Grid>
        <Row>
        <h1>Welcome {this.props.user.username}</h1>        
        { isLoading ? <h1>Loading....</h1> : <div>{profile}</div>
        }
        <Col xs={6} md={4}>
            <Image src="/../avatar.jpeg" rounded responsive/>
        </Col>
        <Col xs={6} md={4}>
        <h2>{this.props.user.city}</h2>
        <Link to={'/create'}>Add a playlist</Link>
          </Col>
        <Col xs={6} md={4}>
        <Link to={'/playlist'}>Back to playlist</Link>
          </Col>
        <Col xs={6} md={4}>
        <Link to={'/profileedit'}>Edit Profile</Link>
          </Col>
        </Row>
      </Grid>
      </div>

    )
  }
}

export default withAuth(Profile);