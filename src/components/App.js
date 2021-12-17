import React, { Component } from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/initial.js";
import HomePage from "./HomePage";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Poll from "./Poll";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData(this.props.authedUser));
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {!this.props.authedUser && (
            <>
              <Route path="/" component={Login} />
            </>
          )}

          {this.props.authedUser && (
            <>
              <Route path="/add" component={NewQuestion}></Route>
              <Route path="/homepage" component={HomePage}></Route>
              <Route path="/leaderboard" component={Leaderboard}></Route>
              <Route path={"/questions/:id"} component={Poll}></Route>
            </>
          )}
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
