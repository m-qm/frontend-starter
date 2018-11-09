import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Playlist from './pages/Playlist';
import PlaylistCreate from './pages/PlaylistCreate';
import PlaylistDetail from './pages/PlaylistDetail';
import ProfileEdit from './pages/ProfileEdit';


import AuthContext from './lib/authContext';
class App extends Component {
  render() {
    return (
      <AuthContext>
        <div className="container">
          <div>
            <h1>Basic React Authentication</h1>
            <Navbar />
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />              
              <Route path="/playlist" component={Playlist} />
              <Route path="/playlist/:id" component={PlaylistDetail} />
              <PrivateRoute path="/playlist/create" component={PlaylistCreate} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="profile/edit" component={ProfileEdit} />
            </Switch>
          </div>
        </div>
      </AuthContext>
    )
  }
}

export default App;
