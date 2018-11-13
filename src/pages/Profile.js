import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
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
    const { profile, isLoading, city } = this.state;
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>        
        { isLoading ? <h1>Loading....</h1> : <div>{profile}</div>
        }
        <h2>{this.props.user.city}</h2>
        <Link to={'/playlist'}>Back to playlist</Link>

      </div>

    )
  }
}

export default withAuth(Profile);