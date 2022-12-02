import React, { Component } from 'react'

import Card from '../Card/Card'

import './Movies.css'

export default class Movies extends Component {
  render() {
    const { request, mainText, moreText, hidenDots, readMore } = this.props

    const films = request.map((film) => {
      const { id, ...allProps } = film
      return (
        <Card
          key={id}
          {...allProps}
          mainText={() => mainText(request.overview)}
          moreText={() => moreText(request.overview)}
          hidenDots={() => hidenDots(request.overview)}
          readMore={() => readMore()}
        />
      )
    })

    return <section className="card-condainer">{films}</section>
  }
}
