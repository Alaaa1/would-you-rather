import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { handleInitialData } from "../actions/initial.js";
import { Link } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleOptionOne = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      optionOne: text,
    }));
  };

  handleOptionTwo = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      optionTwo: text,
    }));
  };

  handleClick = (e) => {
    const optionOne = this.state.optionOne;
    const optionTwo = this.state.optionTwo;
    console.log("new question", optionOne, optionTwo);

    this.props.dispatch(
      handleAddQuestion(this.state.optionOne, this.state.optionTwo)
    );
    this.props.dispatch(handleInitialData(this.props.authedUser));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
    }));
  };

  render() {
    return (
      <>
        <Navbar />
        <Form>
          <label htmlFor="optionOne">Type poll option 1:</label>
          <input
            id="optionOne"
            type="text"
            value={this.state.optionOne}
            onChange={this.handleOptionOne}
          />
          <label htmlFor="optionTwo">Type poll option 2:</label>
          <input
            id="optionTwo"
            type="text"
            value={this.state.optionTwo}
            onChange={this.handleOptionTwo}
          />
          <Link to="/homepage">
            <button
              type="submit"
              value="submit"
              onClick={(e) => this.handleClick(e)}
            >
              Submit
            </button>
          </Link>
        </Form>
      </>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
