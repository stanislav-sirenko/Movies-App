import React, { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'
import { Alert, Space } from 'antd'
import { debounce } from 'lodash'

import serverRequest from '../services/ApiRequest.js'

import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'
const Movies = React.lazy(() => import('./Movies/Movies'))
// import Warning from './Warning/Warning'
import Pages from './Pages/Pages'
import './App.css'

export default class App extends Component {
  state = {
    request: [],
    value: '',
  }

  async componentDidMount(movie, event) {
    const data = await serverRequest(movie, event)
    this.setState({
      request: data.results,
    })
  }

  searchMovie = debounce((movie) => {
    if (movie) {
      this.setState({
        value: movie,
      })
      this.componentDidMount(movie)
    }
  }, 700)

  currentPage = (event) => {
    this.componentDidMount(event)
  }

  render() {
    const { request } = this.state

    return (
      <>
        <Online>
          <div className="movies-app">
            <SearchForm searchMovie={this.searchMovie} />
            <React.Suspense fallback={<Preloader />}>
              <Movies request={request} />
            </React.Suspense>
            <Pages currentPage={this.currentPage} />
          </div>
        </Online>
        <Offline>
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <Alert message="Внимание!" description="Отсутствует подключение к интернету." type="error" showIcon />
          </Space>
        </Offline>
      </>
    )
  }
}
