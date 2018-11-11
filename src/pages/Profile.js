import React, { Component } from 'react';
import { withAuth } from '../lib/authContext';
import profileService from '../lib/profileService';
class Profile extends Component {
  
  state = {
    user: '',
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
    const { profile, isLoading } = this.state;
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>        
        { isLoading ? <h1>Loading....</h1> : <div>{profile}</div>
        })}
      </div>
    )
  }
}

export default withAuth(Profile);