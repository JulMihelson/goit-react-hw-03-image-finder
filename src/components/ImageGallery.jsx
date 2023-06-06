import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import axios from 'axios';

export class ImageGallery extends Component {
  state = { gallery: null };

  render() {
    const { gallery } = this.state;
    return (
      <>
        <ul className="gallery">
          {gallery &&
            gallery.hits.map(item => (
              <ImageGalleryItem key={item.id} item={item} />
            ))}
        </ul>
      </>
    );
  }
}
