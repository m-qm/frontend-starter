import axios from 'axios';

class ProfileService {
  
  constructor() {
    this.profileService = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }

  getProfile() {
    return this.profile.get('/user/profile')
      .then(({ data }) => data)   
  }

  create(profileService) {
    const { user, password, description, email, styles } = profileService;
    return this.profileService.post('/user/create', {user, password, description, styles})
      .then(({ data }) => data);
  }
}

const profileService = new ProfileService();

export default profileService;