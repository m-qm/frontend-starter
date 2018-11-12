import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
class Profile extends Component {
  
  state = {
    city: '',
    isLoading: true,
  }


  // componentDidMount() {
  //   this.update()
  // }

  // update = () => {
  //   this.setState({
  //     isLoading: true,
  //   });

  //   profileService.getProfile()
  //   .then((result)=>{
  //     this.setState({
  //       profile: result,
  //       isLoading: false
  //     })

  //   })
  // }
  render() {
    const { profile, isLoading, city } = this.state;
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>        
        {/* { isLoading ? <h1>Loading....</h1> : <div>{profile}</div>
        } */}
<<<<<<< HEAD
        <h2>{city}</h2>
=======
        <h2>{this.props.user.city}</h2>
        <Link to={'/playlist'}>Back to playlist</Link>

>>>>>>> 83a1f18a5725ff22a8916a54256812ca260fde18
      </div>

    )
  }
}

export default withAuth(Profile);