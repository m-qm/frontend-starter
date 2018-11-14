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
    return this.playlistService.get(`/playlist`)
      .then(({ data }) => data);
  }

  listOnePlaylist(id) {
    return this.playlistService.get(`/playlist/${id}`)
      .then(({ data }) => data);
  }

  edit(id, playlist) {
    return this.playlistService.put(`/playlist/${id}`, playlist)
      .then(({ data }) => data);
  }
  
  delete(id) {
    return this.playlistService.delete(`/playlist/${id}`)
      .then(({ data }) => data )
  }
  
  favorites(id) {
    return this.playlistService.post(`/playlist/${id}/favorites`)
  }

  search(styles) {
    return this.playlistService.get(`/search/${styles}`)
      .then(({ data }) => data )
  }
}

const playlistService = new PlaylistService();

export default playlistService;