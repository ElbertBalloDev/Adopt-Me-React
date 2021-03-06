import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    photos: [],
    active: 0,
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];

    if(media.length){
      photos = media.map(({large}) => large);
    }

    return {photos}; 
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    })
  }
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img 
            src={photo} 
            key={photo} 
            alt="animal thumbnail" 
            onClick={this.handleIndexClick} 
            data-index={index}
            className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;