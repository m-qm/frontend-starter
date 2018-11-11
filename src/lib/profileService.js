import axios from 'axios';

class ProfileService {
  
  constructor() {
    this.profileService = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }

  // getProfile() {
  //   return this.profile.get('/user/profile')
  //     .then(({ data }) => data)
  //     .catch((error) => {
  //       console.log(error);
  //     });    
  // }

  // create(profileService) {
  //   const { title, link, styles } = profileService;
  //   return this.profileService.post('/user/create', {title, link, styles})
  //     .then(({ data }) => data);
  // }
}

const profileService = new ProfileService();

export default profileService;