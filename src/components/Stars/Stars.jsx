import React, { Component } from 'react'
import { Rate } from 'antd'
import './Stars.css'

import guestSessionRequest from '../../services/guestSession.js'

export default class Stars extends Component {
  state = {
    starValue: null,
  }

  onStarsChange = (event) => {
    this.setState({
      starValue: event,
    })
  }

  componentDidUpdate() {
    const { id } = this.props
    const { starValue } = this.state
    guestSessionRequest(id, starValue)
  }
  render() {
    const { starValue } = this.state
    return <Rate allowHalf count={10} onChange={this.onStarsChange} value={starValue} />
  }
}
