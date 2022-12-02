import React, { Component } from 'react'

import serverRequest from '../services/ApiRequest.js'

import SearchForm from './SearchForm/SearchForm'
import Movies from './Movies/Movies'
import Pages from './Pages/Pages'
import './App.css'

export default class App extends Component {
  state = {
    request: [],
    isVisibleText: false,
    isVisibleDots: true,
  }

  async componentDidMount() {
    const data = await serverRequest()
    this.setState({
      request: data.results,
    })
  }

  mainText(text) {
    return text.split(' ').slice(0, 54).join(' ')
  }

  moreText(text) {
    console.log(text)
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

  render() {
    const { request, isVisibleText, isVisibleDots } = this.state

    return (
      <div className="movies-app">
        <SearchForm />
        <Movies
          request={request}
          isVisibleText={isVisibleText}
          isVisibleDots={isVisibleDots}
          mainText={this.mainText}
          moreText={this.moreText}
          hidenDots={this.hidenDots}
          readMore={this.readMore}
        />
        <Pages />
      </div>
    )
  }
}
