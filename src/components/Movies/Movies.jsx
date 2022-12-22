import React, { Component } from 'react'

import Warning from '../warning/warning'
import Card from '../card/card'

import './movies.css'

export default class Movies extends Component {
  render() {
    const { movies } = this.props
    if (movies.length) {
      const films = movies.map((film) => {
        const { id, ...allProps } = film
        return <Card key={id} id={id} {...allProps} />
      })
      return <section className="card-condainer">{films}</section>
    }
    return <Warning />
  }
}
