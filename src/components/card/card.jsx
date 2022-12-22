import React, { Component } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import Genre from '../genre/genre'
import Stars from '../stars/stars'

import Image from './no-poster.webp'

import './card.css'

export default class Card extends Component {
  _imgPath = 'https://image.tmdb.org/t/p/w500'

  state = {
    isVisibleText: false,
    isVisibleDots: true,
  }

  mainText = (text) => text.split(' ').slice(0, 54).join(' ')

  moreText = (text) => {
    let words = text.split(' ')
    if (words.length > 55) return words.slice(54, words.length).join(' ')
  }

  hidenDots = (text) => {
    let word = text.split(' ')
    return word.length > 55 ? '...' : ' '
  }

  readMore = () => {
    this.setState(({ isVisibleText, isVisibleDots }) => {
      return { isVisibleText: !isVisibleText, isVisibleDots: !isVisibleDots }
    })
  }

  posterPath = (poster_path, availabilityPoster) => (poster_path === null ? Image : availabilityPoster)

  releaseData = (release_date) => {
    if (release_date) {
      return format(new Date(release_date), 'PP', { locale: ru })
    }
    return 'Дата релиза неизвестна'
  }

  reitingColor = (vote_average) => {
    if (vote_average <= 3) {
      return { borderColor: '#E90000' }
    }
    if (vote_average <= 5) {
      return { borderColor: '#E97E00' }
    }
    if (vote_average <= 7) {
      return { borderColor: '#E9D100' }
    }
    return { borderColor: '#66E900' }
  }

  render() {
    const { id, poster_path, title, release_date, overview, vote_average, genre_ids, rating } = this.props
    const { isVisibleText, isVisibleDots } = this.state

    let classEdit = !isVisibleText ? 'more-text' : ''
    let dots = !isVisibleDots ? 'dots' : ''
    let availabilityPoster = `${this._imgPath}${poster_path}`

    return (
      <section className="card-condainer">
        <div className="card">
          <img className="poster" src={this.posterPath(poster_path, availabilityPoster)} alt="poster" />
          <div className="data-card">
            <div className="title-reiting">
              <h2 className="title">{title}</h2>
              <div className="reiting" style={this.reitingColor(vote_average)}>
                <span>{Math.round(vote_average)}</span>
              </div>
            </div>
            <div className="data-of-release">{this.releaseData(release_date)}</div>
            <ul className="category-list">
              <Genre genre_ids={genre_ids} key={id} />
            </ul>
            <p className="intro" onClick={this.readMore}>
              {this.mainText(overview)}
              <span className={dots}>{this.hidenDots(overview)}</span>
              <span className={classEdit}> {this.moreText(overview)}</span>
            </p>
            <Stars id={id} rating={rating} />
          </div>
        </div>
      </section>
    )
  }
}
