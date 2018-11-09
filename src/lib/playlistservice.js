import axios from 'axios';
// import PlaylistForm from '../pages/PlaylistForm'

class PlaylistService {
  
  constructor() {
    this.playlistService = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }

  create(playlistService) {
    const { title, link, styles } = playlistService;
    return this.playlistService.post('/playlist/create', {title, link, styles})
      .then(({ data }) => data);
  }

  listPlaylist() {
    return this.playlistService.get('/playlist')
      .then(({ data }) => data);
  }
}

const playlistService = new PlaylistService();

export default playlistService;