import { Component } from 'react';
import css from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    this.setState({ search: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.search.trim()) {
      return alert('Please enter search request');
    }
    this.props.onSubmit(this.state.search);
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.form}>
          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            value={this.state.search}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
