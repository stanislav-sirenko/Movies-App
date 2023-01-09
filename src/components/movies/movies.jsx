import React, { Component } from 'react'

import Warning from '../Warning/Warning'
import Card from '../Card/Card'

import './Movies.css'

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
