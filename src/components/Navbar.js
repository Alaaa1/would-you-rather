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
          as={Link}
          name="home"
          active={activeItem === "home"}
          to="/homepage"
          onClick={this.handleItemClick}
        ></Menu.Item>

        <Menu.Item
          as={Link}
          name="NewQuestion"
          active={activeItem === "NewQuestion"}
          to="/add"
          onClick={this.handleItemClick}
        ></Menu.Item>

        <Menu.Item
          as={Link}
          name="leaderboard"
          active={activeItem === "leaderboard"}
          onClick={this.handleItemClick}
          to="/leaderboard"
        ></Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="welcome">Welcome {this.props.name}!</Menu.Item>
          <Menu.Item name="avatar">
            <img src={this.props.avatar} alt="avatar" />
          </Menu.Item>

          <Menu.Item
            as={Link}
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleLogOut}
            to="/"
          ></Menu.Item>
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
