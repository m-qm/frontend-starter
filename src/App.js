import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Navigation from './components/Navbar';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Playlist from './pages/Playlist';
import PlaylistForm from './pages/PlaylistForm';
import PlaylistDetail from './pages/PlaylistDetail';
import PlaylistEdit from './pages/PlaylistEdit';
import ProfileCreate from './pages/ProfileCreate';
import ProfileEdit from './pages/ProfileEdit';
import AuthContext from './lib/authContext';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <AuthContext>
          <Navigation />
            <Switch>
              <PublicRoute path="/home" component={Home} />
              <PublicRoute path="/signup" component={Signup} />
              <PublicRoute path="/login" component={Login} />              
              <PrivateRoute exact path="/playlist" component={Playlist} />
              <PrivateRoute exact path="/playlistedit" component={PlaylistEdit}/>
              <PrivateRoute path="/playlist/create" component={PlaylistForm} />
              <PrivateRoute path="/playlist/:id/playlistdetail" component={PlaylistDetail} />
              <PrivateRoute path="/create" component={PlaylistForm} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute path="/profile/create" component={ProfileCreate} />
              <PrivateRoute exact path="/profile/edit" component={ProfileEdit} />
            </Switch>
      </AuthContext>
    )
  }
}

export default App;
