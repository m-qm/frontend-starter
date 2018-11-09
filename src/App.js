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
import ProfileEdit from './pages/ProfileEdit';


import AuthContext from './lib/authContext';
class App extends Component {
  render() {
    return (
      
      <AuthContext>
        <div className="container">
        
            <Navigation />
          <div>
            <h1>mTrap</h1>
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />              
              <Route path="/playlist" component={Playlist} />
              <Route path="/playlist/:id" component={PlaylistDetail} />
              <PrivateRoute path="/create" component={PlaylistForm} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/edit" component={ProfileEdit} />
            </Switch>
          </div>
        </div>
      </AuthContext>
    )
  }
}

export default App;
