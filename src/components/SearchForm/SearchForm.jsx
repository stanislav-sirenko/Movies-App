import React, { Component } from 'react'

import './SearchForm.css'
export default class SearchForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (event) => {
    if (event.target.value.charAt(0) === ' ') {
      this.setState({
        label: '',
      })
    } else {
      this.setState({
        label: event.target.value,
      })
    }
  }
  render() {
    const { label } = this.state
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <div className="search-button">
          <input type="submit" value="Поиск" />
          <input type="submit" value="Реитинг" />
        </div>
        <label className="search-label">
          <input
            type="text"
            className="search-input"
            placeholder="Введите текст для поиска..."
            onChange={this.onLabelChange}
            value={label}
            autoFocus
          />
        </label>
      </form>
    )
  }
}
