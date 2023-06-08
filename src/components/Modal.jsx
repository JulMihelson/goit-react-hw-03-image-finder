import { Component } from 'react';

export class Modal extends Component {
  currentClick = event => {
    if (event.target === event.currentTarget) {
      this.props.handleOnClick();
    }
  };
  componentDidMount() {
    document.addEventListener('keypress', event => {
      if (event.code === 'Backquote') {
        console.log(event);
        this.props.handleOnClick();
      }
    });
  }
  render() {
    return (
      <div onClick={this.currentClick} className="Overlay">
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
