import React, { Component } from 'react'

import Card from '../Card/Card'

import './Movies.css'

export default class Movies extends Component {
  render() {
    const { request } = this.props

    const films = request.map((film) => {
      const { id, ...allProps } = film
      return <Card key={id} {...allProps} />
    })

    return <section className="card-condainer">{films}</section>
  }
}
