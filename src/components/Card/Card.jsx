import React, { Component } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

import './Card.css'

export default class Card extends Component {
  _imgPath = 'https://image.tmdb.org/t/p/w500'

  // mainText(text) {
  //   return text.split(' ').slice(0, 54).join(' ')
  // }

  // moreText(text) {
  //   let words = text.split(' ')
  //   if (words.length > 55) {
  //     return words.slice(54, words.length).join(' ')
  //   }
  // }

  // hidenDots(text) {
  //   let word = text.split(' ')
  //   return word.length > 55 ? '...' : ' '
  // }

  // readMore = () => {
  //   this.setState(({ isVisibleText, isVisibleDots }) => {
  //     return { isVisibleText: !isVisibleText, isVisibleDots: !isVisibleDots }
  //   })
  // }

  render() {
    const { request, isVisibleText, isVisibleDots, mainText, moreText, hidenDots, readMore } = this.props
    let classEdit = !isVisibleText ? 'more-text' : ''
    let dots = !isVisibleDots ? 'dots' : ''

    return (
      <section className="card-condainer">
        <div className="card">
          <img className="poster" src={`${this._imgPath}${request.poster_path}`} alt="poster" />
          <div className="data-card">
            <h2 className="title">{request.title}</h2>
            <div className="data-of-release">{format(new Date(request.release_date), 'PP', { locale: ru })}</div>
            <ul className="category">
              <li>
                <button aria-label="category">экшн</button>
              </li>
              <li>
                <button aria-label="category">драма</button>
              </li>
            </ul>

            <p className="intro" onClick={() => readMore()}>
              {mainText()}
              <span className={dots}>{hidenDots()}</span>
              <span className={classEdit}> {moreText()}</span>
            </p>
          </div>
        </div>
      </section>
    )
  }
}
