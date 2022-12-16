import React, { Component } from 'react'

import './Genre.css'
import { Consumer } from '../genresContext/genresContext'

export default class Genre extends Component {
  render() {
    const { genre_ids } = this.props
    return (
      <Consumer>
        {(category) => {
          if (category.length) {
            let res = genre_ids.map((item) => {
              let results = category.find((objItem) => objItem.id === item && true)
              return results.name
            })
            let resGenre = res.map((genre, id) => {
              return (
                <li className="category-item" key={id}>
                  {genre}
                </li>
              )
            })
            return resGenre
          }
        }}
      </Consumer>
    )
  }
}
