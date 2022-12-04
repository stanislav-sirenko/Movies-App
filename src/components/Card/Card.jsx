import React, { Component } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import Image from './no-poster.webp'

import './Card.css'

export default class Card extends Component {
  _imgPath = 'https://image.tmdb.org/t/p/w500'

  state = {
    isVisibleText: false,
    isVisibleDots: true,
  }

  mainText(text) {
    return text.split(' ').slice(0, 54).join(' ')
  }

  moreText(text) {
    let words = text.split(' ')
    if (words.length > 55) {
      return words.slice(54, words.length).join(' ')
    }
  }

  hidenDots(text) {
    let word = text.split(' ')
    return word.length > 55 ? '...' : ' '
  }

  readMore = () => {
    this.setState(({ isVisibleText, isVisibleDots }) => {
      return { isVisibleText: !isVisibleText, isVisibleDots: !isVisibleDots }
    })
  }

  posterPath = (poster_path, availabilityPoster) => {
    return poster_path === null ? Image : availabilityPoster
  }

  releaseData = (release_date) => {
    if (release_date) {
      return format(new Date(release_date), 'PP', { locale: ru })
    } else {
      return 'Release date unknown'
    }
  }

  render() {
    const { poster_path, title, release_date, overview } = this.props
    const { isVisibleText, isVisibleDots } = this.state
    let classEdit = !isVisibleText ? 'more-text' : ''
    let dots = !isVisibleDots ? 'dots' : ''
    let availabilityPoster = `${this._imgPath}${poster_path}`

    return (
      <section className="card-condainer">
        <div className="card">
          <img className="poster" src={this.posterPath(poster_path, availabilityPoster)} alt="poster" />
          <div className="data-card">
            <h2 className="title">{title}</h2>
            <div className="data-of-release">{this.releaseData(release_date)}</div>
            <ul className="category">
              <li>
                <button aria-label="category">экшн</button>
              </li>
              <li>
                <button aria-label="category">драма</button>
              </li>
            </ul>

            <p className="intro" onClick={this.readMore}>
              {this.mainText(overview)}
              <span className={dots}>{this.hidenDots(overview)}</span>
              <span className={classEdit}> {this.moreText(overview)}</span>
            </p>
          </div>
        </div>
      </section>
    )
  }
}
