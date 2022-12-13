import React, { Component } from 'react'

import './Category.css'
import { CategoryRequestConsumer } from '../categotyRequestContext/categotyRequestContext'

export default class Category extends Component {
  render() {
    const { genre_ids } = this.props
    return (
      <CategoryRequestConsumer>
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
      </CategoryRequestConsumer>
    )
  }
}
