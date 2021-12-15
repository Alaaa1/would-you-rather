import React, { Component } from 'react';
import Login from './Login'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/initial.js'
import HomePage from './HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Poll from './Poll'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData(this.props.authedUser))
  }
  render() {
    return (
      <BrowserRouter>

        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/questions/:id' element={<Poll />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)