import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navbar';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Playlist from './pages/Playlist';
import PlaylistForm from './pages/PlaylistForm';
import PlaylistDetail from './pages/PlaylistDetail';
import ProfileCreate from './pages/ProfileCreate';
import ProfileEdit from './pages/ProfileEdit';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import AuthContext from './lib/authContext';

library.add(faStroopwafel)


class App extends Component {
  render() {
    return (
      <AuthContext>
            <Navigation />

          <div className="container">
            <h1>mTrap</h1>
          </div>
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />              
              <PrivateRoute exact path="/playlist" component={Playlist} />
              <PrivateRoute path="/playlist/create" component={PlaylistForm} />
              <PrivateRoute path="/playlistdetail/:id" component={PlaylistDetail} />
              <PrivateRoute path="/create" component={PlaylistForm} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute path="/profile/create" component={ProfileCreate} />
              <PrivateRoute path="/profile/edit" component={ProfileEdit} />

            </Switch>
      </AuthContext>
    )
  }
}

export default App;
