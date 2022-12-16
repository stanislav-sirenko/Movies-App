import React, { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'
import { Tabs, Alert, Space } from 'antd'
import { debounce } from 'lodash'

import serverRequest from '../services/ApiRequest.js'
import categoryRequest from '../services/categoryRequest.js'
import { guestSessionRequest, getRequest } from '../services/guestSession.js'

import SearchForm from './SearchForm/SearchForm'
import Preloader from './Preloader/Preloader'
const Movies = React.lazy(() => import('./Movies/Movies'))
import Pages from './Pages/Pages'
import './App.css'
import { CategoryRequestProvider } from './categotyRequestContext/categotyRequestContext'

export default class App extends Component {
  state = {
    request: [],
    ratedFilms: [],
    value: '',
    category: [],
  }

  async componentDidMount(movie, event) {
    const data = await serverRequest(movie, event)
    // console.log(data.results.length)
    const category = await categoryRequest()
    const guestSession = await guestSessionRequest()
    localStorage.clear()
    !localStorage.getItem('guest') && localStorage.setItem('guest', `${guestSession.guest_session_id}`)

    this.setState({
      request: data.results,
      category: category.genres,
    })
  }

  onChange = async () => {
    const dataRate = await getRequest()
    this.setState({
      ratedFilms: dataRate.results,
    })
  }

  searchMovie = debounce((movie) => {
    if (movie) {
      this.setState({
        value: movie,
      })
      this.componentDidMount(movie)
    }
  }, 100)

  currentPage = (event) => {
    this.componentDidMount(event)
  }

  render() {
    const { request, ratedFilms, category } = this.state
    console.log(request.length)

    return (
      <Tabs
        centered
        defaultActiveKey="1"
        onChange={this.onChange}
        items={[
          {
            label: 'Поиск',
            key: '1',
            children: (
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
                    <Alert
                      message="Внимание!"
                      description="Отсутствует подключение к интернету."
                      type="error"
                      showIcon
                    />
                  </Space>
                </Offline>
              </>
            ),
          },
          {
            label: 'Рейтинг',
            key: '2',
            children: (
              <CategoryRequestProvider value={category}>
                <div className="movies-app">
                  <React.Suspense fallback={<Preloader />}>
                    <Movies request={ratedFilms} />
                  </React.Suspense>
                </div>
              </CategoryRequestProvider>
            ),
          },
        ]}
      />
    )
  }
}
