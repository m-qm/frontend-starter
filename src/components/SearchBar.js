import React, { Component } from 'react';
import { Form, FormControl, NavItem } from 'react-bootstrap';


class SearchBar extends Component {

render () {
  let filteredPlaylist = this.props.playlist;
  return(
      <Form inline>
        <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <NavItem type="submit">Submit</NavItem>
        </Form>
      </Form>
  )}
}

export default SearchBar;