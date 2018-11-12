import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
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
        <h2>{city}</h2>
      </div>
    )
  }
}

export default withAuth(Profile);