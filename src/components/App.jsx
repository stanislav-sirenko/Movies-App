import React, { Component } from 'react'

import serverRequest from '../services/ApiRequest.js'

import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'
const Movies = React.lazy(() => import('./Movies/Movies'))
import Warning from './Warning/Warning'
import Pages from './Pages/Pages'
import './App.css'

export default class App extends Component {
  state = {
    request: [],
    value: '',
  }

  async componentDidMount(movie) {
    const data = await serverRequest(movie)
    this.setState({
      request: data.results,
    })
  }

  searchMovie = (movie) => {
    if (movie) {
      this.setState({
        value: movie,
      })
      this.componentDidMount(movie)
    }
  }

  render() {
    const { request } = this.state
    console.log(request.length)

    return (
      <div className="movies-app">
        <SearchForm searchMovie={this.searchMovie} />
        <React.Suspense fallback={<Preloader />}>
          {request.length ? <Movies request={request} /> : <Warning />}
        </React.Suspense>
        <Pages />
      </div>
    )
  }
}
