import React, { Component } from 'react'
import { Offline, Online } from 'react-detect-offline'
import { Tabs, Alert, Space, Pagination } from 'antd'

import serverRequest from '../services/api-request'
import genresRequest from '../services/genres-request.js'
import { guestSessionRequest, getRequest } from '../services/guest-session.js'

import SearchForm from './search-form/search-form'
import Preloader from './preloader/preloader'
const Movies = React.lazy(() => import('./movies/movies'))
import './movies-app.css'
import { Provider } from './context'

export default class App extends Component {
  state = {
    movies: [],
    ratedMovies: [],
    genresMovies: [],
    value: '',
    totalPage: null,
    currentPage: 1,
  }

  componentDidMount() {
    genresRequest().then((genresMovies) => this.setState({ genresMovies: genresMovies.genres }))
    guestSessionRequest().then((guestSession) => {
      !localStorage.getItem('guest') && localStorage.setItem('guest', `${guestSession.guest_session_id}`)
    })
  }

  onChangeTabs = () => {
    getRequest().then((dataRate) => {
      this.setState({
        ratedMovies: dataRate.results,
      })
    })
  }

  searchMovie = (inputText) => {
    if (inputText) {
      serverRequest(inputText).then((data) => {
        this.setState({
          value: inputText,
          movies: data.results,
          totalPage: data.total_pages,
          currentPage: data.page,
        })
      })
    }
  }

  nextPage = (valuePagination) => {
    serverRequest(this.state.value, valuePagination).then((data) => {
      this.setState({
        movies: data.results,
        totalPage: data.total_pages,
        currentPage: data.page,
      })
    })
  }

  render() {
    const { movies, ratedMovies, genresMovies, currentPage, totalPage } = this.state

    return (
      <Tabs
        centered
        defaultActiveKey="1"
        onChange={this.onChangeTabs}
        items={[
          {
            label: 'Поиск',
            key: '1',
            children: (
              <>
                <Online>
                  <Provider value={genresMovies}>
                    <div className="movies-app">
                      <SearchForm searchMovie={this.searchMovie} />
                      <React.Suspense fallback={<Preloader />}>
                        <Movies movies={movies} />
                      </React.Suspense>
                      <Pagination
                        current={currentPage}
                        onChange={this.nextPage}
                        total={totalPage * 20}
                        hideOnSinglePage={true}
                        pageSize={20}
                        showSizeChanger={false}
                      />
                    </div>
                  </Provider>
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
              <Provider value={genresMovies}>
                <div className="movies-app">
                  <React.Suspense fallback={<Preloader />}>
                    <Movies movies={ratedMovies} />
                  </React.Suspense>
                </div>
              </Provider>
            ),
          },
        ]}
      />
    )
  }
}
