import React, { Component } from 'react'

class PlaylistDetail extends Component {
  render() {


    return (
      <div>
          <ul className="col-md-4 list-group">
              <li class="vid-container">
                <iframe className="iframe" width="100%" height="100%" src="https://www.youtube.com/embed/h234EqxyCs4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </li>
            </ul>
          </div>
    )
  }
}


export default PlaylistDetail;