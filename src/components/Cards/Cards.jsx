import React, { Component } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import './Cards.css'

export default class Cards extends Component {
  state = {
    isVisibleText: false,
    isVisibleDots: true,
  }

  _imgPath = 'https://image.tmdb.org/t/p/w500'

  mainText(text) {
    return text.split(' ').slice(0, 59).join(' ')
  }

  moreText(text) {
    let words = text.split(' ')
    if (words.length > 60) {
      return words.slice(59, words.length).join(' ')
    }
  }

  hidenDots(text) {
    let word = text.split(' ')
    return word.length > 60 ? '...' : ' '
  }

  readMore = () => {
    this.setState(({ isVisibleText, isVisibleDots }) => {
      return { isVisibleText: !isVisibleText, isVisibleDots: !isVisibleDots }
    })
  }

  render() {
    const { request } = this.props
    const { isVisibleText, isVisibleDots } = this.state
    let classEdit = !isVisibleText ? 'more-text' : ''
    let dots = !isVisibleDots ? 'dots' : ''

    return (
      <div className="card">
        <img className="poster" src={`${this._imgPath}${request.poster_path}`} alt="poster" />
        <div className="data-card">
          <h2 className="title">{request.title}</h2>
          <div className="data-of-release">{format(new Date(request.release_date), 'PP', { locale: ru })}</div>
          <ul className="category">
            <li>
              <button>action</button>
            </li>
            <li>
              <button>drama</button>
            </li>
          </ul>

          <p className="intro" onClick={this.readMore}>
            {this.mainText(request.overview)}
            <span className={dots}>{this.hidenDots(request.overview)}</span>
            <span className={classEdit}> {this.moreText(request.overview)}</span>
          </p>
        </div>
      </div>
    )
  }
}
