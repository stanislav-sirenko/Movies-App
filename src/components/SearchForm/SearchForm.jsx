import React, { Component } from 'react'

import './SearchForm.css'
export default class SearchForm extends Component {
  state = {
    value: '',
  }

  onLabelChange = (event) => {
    if (event.target.value.charAt(0) === ' ') {
      this.setState({
        value: '',
      })
    } else {
      this.setState({
        value: event.target.value,
      })
    }
  }

  onSubmit = (event) => {
    const { searchMovie } = this.props
    const { value } = this.state
    event.preventDefault()
    searchMovie(value)
    this.setState({
      value: '',
    })
  }

  render() {
    const { value } = this.state
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <div className="search-button">
          <input type="submit" value="Поиск" />
          <input type="submit" value="Рейтинг" />
        </div>
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
