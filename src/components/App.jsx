// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery';
import { Component } from 'react';
import { getPictures } from './Api';
export class App extends Component {
  state = {
    query: '',
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      getPictures(query, page);
    }
  }
  onSubmit = query => {
    this.setState({ query });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SearchBar />
        <ImageGallery />
      </div>
    );
  }
}
