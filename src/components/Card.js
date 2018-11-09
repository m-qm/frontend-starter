import React, { Component } from 'react'

class Card extends Component {
  iframe = () => {
    const { playlist } = this.props;
    return { __html: playlist.link }
  }

  render() {
    const { playlist } = this.props;
    return (
      <div>
        <div> 
          {playlist.title}
        </div> 
        <div dangerouslySetInnerHTML={this.iframe()}/>
      </div>
    )
  }
}

export default Card;
