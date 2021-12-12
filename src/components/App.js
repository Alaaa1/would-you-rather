import React, { Component } from 'react';
import Login from './Login'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/initial.js'
import HomePage from './HomePage';
import { LoadingBar } from 'react-redux-loading';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        <HomePage />
      </div>
    )
  }
}

export default connect()(App)