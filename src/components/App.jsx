import React, { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'
import { Alert, Space } from 'antd'
import { debounce } from 'lodash'

import serverRequest from '../services/ApiRequest.js'
import categoryRequest from '../services/categoryRequest.js'
// import guestSessionRequest from '../services/guestSession.js'

import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'
const Movies = React.lazy(() => import('./Movies/Movies'))
import Pages from './Pages/Pages'
import './App.css'
import { CategoryRequestProvider } from './categotyRequestContext/categotyRequestContext'

export default class App extends Component {
  state = {
    request: [],
    value: '',
    category: [],
  }

  async componentDidMount(movie, event) {
    const data = await serverRequest(movie, event)
    const category = await categoryRequest()
    // const guestSession = await guestSessionRequest()

    // !localStorage.getItem('guest') && localStorage.setItem('guest', `${guestSession.guest_session_id}`)

    this.setState({
      request: data.results,
      category: category.genres,
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
    const { request, category } = this.state

    return (
      <>
        <Online>
          <CategoryRequestProvider value={category}>
            <div className="movies-app">
              <SearchForm searchMovie={this.searchMovie} />
              <React.Suspense fallback={<Preloader />}>
                <Movies request={request} />
              </React.Suspense>
              <Pages currentPage={this.currentPage} />
            </div>
          </CategoryRequestProvider>
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
