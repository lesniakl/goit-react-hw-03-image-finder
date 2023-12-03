import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

const API_KEY = '39514162-fa9dcb7e2d6f74dc9ac05415a';
const BASE_URL = 'https://pixabay.com/api/';

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
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
      }));
      this.setState({ images: imagesFound });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <>
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery />
      </>
    );
  }
}
