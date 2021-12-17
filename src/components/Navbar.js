import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleLogOut = ({ name }) => {
    this.setState({ activeItem: name });
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Link to="/homepage">Home</Link>
        </Menu.Item>

        <Menu.Item
          name="NewQuestion"
          active={activeItem === "NewQuestion"}
          onClick={this.handleItemClick}
        >
          <Link to="/add">New Question</Link>
        </Menu.Item>

        <Menu.Item
          name="leaderboard"
          active={activeItem === "leaderboard"}
          onClick={this.handleItemClick}
        >
          <Link to="/leaderboard">Leaderboard</Link>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="welcome">Welcome {this.props.name}!</Menu.Item>
          <Menu.Item name="avatar">
            <img src={this.props.avatar} alt="avatar" />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleLogOut}
          >
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    avatar: users[authedUser].avatarURL,
    name: users[authedUser].name,
  };
};

export default connect(mapStateToProps)(Navbar);
