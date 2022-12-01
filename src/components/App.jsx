import React, { Component } from 'react'

import serverRequest from '../services/ApiRequest.js'

import Cards from './Cards/Cards'
import SearchForm from './SearchForm/SearchForm'
import Pages from './Pages/Pages'
// const { Meta } = Card
import './App.css'

export default class App extends Component {
  state = {
    request: [],
  }

  async componentDidMount() {
    const data = await serverRequest()
    this.setState({
      request: data.results,
    })
  }

  render() {
    const { request } = this.state

    const films = request.map((film) => {
      const { id, ...allProps } = film
      return <Cards key={id} request={allProps} />
    })

    return (
      <div className="movies-app">
        <SearchForm />
        <section className="card-condainer">{films}</section>
        <Pages />
      </div>
    )
  }
}
