import React, { Component } from 'react'
import { debounce } from 'lodash'

import './search-form.css'
export default class SearchForm extends Component {
  onLabelChange = (event) => {
    if (event.target.value.charAt(0) === ' ') {
      return ''
    }
    this.debouncedSearch(event.target.value)
  }

  debouncedSearch = debounce((value) => {
    this.props.searchMovie(value)
  }, 100)

  render() {
    return (
      <form className="search-form">
        <label className="search-label">
          <input
            type="text"
            className="search-input"
            placeholder="Введите текст для поиска..."
            onChange={this.onLabelChange}
            autoFocus
          />
        </label>
      </form>
    )
  }
}
