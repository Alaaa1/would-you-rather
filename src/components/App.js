import React, { Component } from 'react';
import Login from './Login'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/initial.js'
import HomePage from './HomePage';
import LoadingBar from 'react-redux-loading';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
        <LoadingBar />
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/homepage' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default connect()(App)