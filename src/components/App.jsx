import React, { Component } from 'react'

import serverRequest from '../services/ApiRequest.js'

import SearchForm from './SearchForm/SearchForm'
import Movies from './Movies/Movies'
import Pages from './Pages/Pages'
import './App.css'

export default class App extends Component {
  state = {
    request: [],
    // isVisibleText: false,
    // isVisibleDots: true,
  }

  async componentDidMount() {
    const data = await serverRequest()
    this.setState({
      request: data.results,
    })
  }

  // readMore = () => {
  //   this.setState(({ isVisibleText, isVisibleDots }) => {
  //     return { isVisibleText: !isVisibleText, isVisibleDots: !isVisibleDots }
  //   })
  // }

  render() {
    const { request } = this.state

    return (
      <div className="movies-app">
        <SearchForm />
        <Movies
          request={request}
          // isVisibleText={isVisibleText}
          // isVisibleDots={isVisibleDots}
          // readMore={this.readMore}
        />
        <Pages />
      </div>
    )
  }
}
