import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { withAuth } from '../lib/authContext';
import { Link } from 'react-router-dom';



class Card extends Component {

  state = {
    playlist: "",
    id: ""
  }

  iframe = () => {
    const { playlist } = this.props;
    return { __html: playlist.link }
  }

 deletePlaylist = (id) => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/playlist/${params.id}`)
    .then( responseFromApi =>{
        console.log(responseFromApi);
        this.props.history.push('/playlist'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }


  render() {
    const { playlist } = this.props;
    const { isLogged } = this.props;

    return (
      <div>
        <h2> 
          {playlist.title}
        </h2> 
         <h2> 
          {playlist.id}
        </h2> 
        <div dangerouslySetInnerHTML={this.iframe()}/>
        <form action="playlist/:id/delete" method="post">
          <Button className="btn-black-inline" onClick={this.props.handleDelete}>Delete</Button>
        </form>
      </div>
    )
  }
}

export default Card;
