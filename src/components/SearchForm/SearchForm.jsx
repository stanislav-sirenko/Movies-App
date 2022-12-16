import React, { Component } from 'react'

import './SearchForm.css'
export default class SearchForm extends Component {
  state = {
    value: '',
  }

  onLabelChange = (event) => {
    const { searchMovie } = this.props
    const { value } = this.state
    if (event.target.value.charAt(0) === ' ') {
      this.setState({
        value: '',
      })
    } else {
      this.setState({
        value: event.target.value,
      })
      searchMovie(value)
    }
  }

  render() {
    const { value } = this.state
    return (
      <form className="search-form">
        <label className="search-label">
          <input
            type="text"
            className="search-input"
            placeholder="Введите текст для поиска..."
            onChange={this.onLabelChange}
            value={value}
            autoFocus
          />
        </label>
      </form>
    )
  }
}
