import React, { Component } from 'react'
// import { Card } from 'antd'

import ApiReuest from '../services/ApiRequest.js'
// const { Meta } = Card
import './App.css'

export default class App extends Component {
  request = new ApiReuest()

  // state = {
  //   request: '',
  // }

  render() {
    console.log(this.request)
    return (
      <section className="card-condainer">
        <div className="card">
          <img src="../../Rectangl.svg" alt="poster" />
          <h2>The way back</h2>
          <div className="data">March 5, 2020 </div>
          <ul className="category">
            <li>
              <button>action</button>
            </li>
            <li>
              <button>drama</button>
            </li>
          </ul>
          <p className="intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo non harum quia sit? Quibusdam
            magnam cupiditate assumenda molestiae, autem ducimus. Amet tempora autem culpa eligendi. Quidem optio animi
            nam.
          </p>
        </div>
      </section>
    )
  }
}
