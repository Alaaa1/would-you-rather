import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";

const options = [
  {
    key: "sarahedo",
    text: "Sarah Edo",
    value: "sarahedo",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg",
    },
  },
  {
    key: "tylermcginnis",
    text: "Tyler McGinnis",
    value: "tylermcginnis",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/matt.jpg",
    },
  },
  {
    key: "johndoe",
    text: "John Doe",
    value: "johndoe",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/christian.jpg",
    },
  },
];

class Login extends Component {
  state = {
    value: "",
  };

  handleDestination = () => {
    if (this.props.location.pathname === "/") {
      return "/homepage";
    } else {
      return this.props.location.pathname;
    }
  };

  getAuthedUser = (authedUser) => {
    this.props.dispatch(setAuthedUser(authedUser));
  };

  handleChange = (e, { value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <>
        <h2 style={{ textAlign: "center", margin: "0 auto", marginTop: "10%" }}>
          Welcome to Would You Rather App
        </h2>
        <br />
        <h2 style={{ textAlign: "center", margin: "0 auto" }}>Please Login:</h2>
        <div style={{ width: "50%", textAlign: "center", margin: "0 auto" }}>
          <form>
            <Dropdown
              placeholder="Select User"
              fluid
              selection
              options={options}
              onChange={this.handleChange}
            />
            <Link to={this.handleDestination}>
              <button
                disabled={this.state.value === ""}
                type="submit"
                value="login"
                onClick={() => this.getAuthedUser(this.state.value)}
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: Object.entries(users),
  };
};

export default connect(mapStateToProps)(withRouter(Login));
