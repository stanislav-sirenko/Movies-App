import React, { Component } from 'react'
import { Pagination } from 'antd'
import './Pages.css'

export default class Pages extends Component {
  render() {
    const { currentPage } = this.props
    return <Pagination onChange={(event) => currentPage(event)} defaultCurrent={1} total={500} />
  }
}
