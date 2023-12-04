import React, { Component } from 'react';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const API_KEY = '39514162-fa9dcb7e2d6f74dc9ac05415a';
const BASE_URL = 'https://pixabay.com/api/';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    currentPage: 1,
  };

  handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const search = form.elements.search.value;
    const query = `${BASE_URL}?q=${search}&page=${this.state.currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    this.setState({ currentSearch: search, isLoading: true });
    try {
      const response = await fetch(query);
      const data = await response.json();
      const imagesFound = data.hits.map(hit => ({
        id: hit.id,
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
        tags: hit.tags,
      }));
      this.setState({ images: imagesFound });
    } catch (error) {
      alert('Something went wrong, try again or reload the page.');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleMore = async e => {
    const newPage = this.state.currentPage + 1;
    this.setState({ currentPage: newPage });
    const query = `${BASE_URL}?q=${this.state.currentSearch}&page=${newPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    this.setState({ isLoading: true });
    try {
      const response = await fetch(query);
      const data = await response.json();
      const imagesFound = data.hits.map(hit => ({
        id: hit.id,
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
        tags: hit.tags,
      }));
      this.setState(prevState => {
        return { images: [...prevState.images, ...imagesFound] };
      });
    } catch (error) {
      alert('Something went wrong, try again or reload the page.');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 && <Button onMore={this.handleMore} />}
      </div>
    );
  }
}
